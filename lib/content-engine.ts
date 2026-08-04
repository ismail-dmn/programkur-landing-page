import "server-only"

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export const CONTENT_COLLECTIONS = [
  "software",
  "services",
  "blog",
  "faq",
  "guides",
  "errors",
  "licenses",
  "comparisons",
  "cities",
] as const

export type ContentCollection = (typeof CONTENT_COLLECTIONS)[number]

export type ContentFaq = {
  question: string
  answer: string
}

export type ContentHowToStep = {
  name: string
  text: string
}

export type ContentHowTo = {
  name?: string
  description?: string
  totalTime?: string
  steps: ContentHowToStep[]
}

export type ContentFrontmatter = {
  title?: string
  description?: string
  metaTitle?: string
  metaDescription?: string
  slug?: string
  keywords?: string[] | string
  software?: string
  service?: string
  city?: string
  category?: string
  tags?: string[] | string
  faq?: ContentFaq[]
  related?: string[] | string
  priority?: number | string
  published?: boolean | string
  lastModified?: string | Date
  updated?: string | Date
  author?: string
  image?: string
  howTo?: ContentHowTo | boolean | string
  [key: string]: unknown
}

export type ContentDocument = {
  id: string
  collection: ContentCollection
  filePath: string
  title: string
  description: string
  metaTitle?: string
  metaDescription?: string
  slug: string
  pathname: string
  routeSegments: string[]
  keywords: string[]
  software?: string
  service?: string
  city?: string
  category?: string
  tags: string[]
  faq: ContentFaq[]
  related: string[]
  priority: number
  published: boolean
  lastModified?: string
  author?: string
  image?: string
  howTo?: ContentHowTo
}

export type RelatedContentGroup = {
  collection: ContentCollection
  label: string
  documents: ContentDocument[]
}

type RouteDetails = {
  slug: string
  routeSegments: string[]
  pathname: string
  software?: string
}

const CONTENT_ROOT = path.join(process.cwd(), "content")
const CONTENT_FILE_PATTERN = /\.mdx?$/i

const COLLECTION_LABELS: Record<ContentCollection, string> = {
  software: "Yazılımlar",
  services: "Hizmetler",
  blog: "Blog Yazıları",
  faq: "Sık Sorulan Sorular",
  guides: "Rehberler",
  errors: "Hata Çözümleri",
  licenses: "Lisans Rehberleri",
  comparisons: "Karşılaştırmalar",
  cities: "Şehir Sayfaları",
}

let contentCache: ContentDocument[] | undefined

function isCollection(value: string): value is ContentCollection {
  return CONTENT_COLLECTIONS.includes(value as ContentCollection)
}

function toStringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

function toStringArray(value: unknown) {
  if (Array.isArray(value)) {
    return value.flatMap((item) => toStringValue(item)).filter(Boolean)
  }

  return toStringValue(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
}

function toBoolean(value: unknown, fallback: boolean) {
  if (typeof value === "boolean") return value
  if (typeof value === "string") {
    if (value.toLowerCase() === "true") return true
    if (value.toLowerCase() === "false") return false
  }
  return fallback
}

function toPriority(value: unknown) {
  const numericValue = typeof value === "number" ? value : Number(value)
  if (!Number.isFinite(numericValue)) return 0.7
  return Math.min(1, Math.max(0, numericValue))
}

function toDateString(value: unknown, fallback: Date) {
  const candidate = value instanceof Date ? value : new Date(String(value ?? ""))
  const date = Number.isNaN(candidate.getTime()) ? fallback : candidate
  return date.toISOString()
}

function toFaq(value: unknown): ContentFaq[] {
  if (!Array.isArray(value)) return []

  return value.flatMap((item) => {
    if (!item || typeof item !== "object") return []
    const candidate = item as Record<string, unknown>
    const question = toStringValue(candidate.question ?? candidate.q)
    const answer = toStringValue(candidate.answer ?? candidate.a)
    return question && answer ? [{ question, answer }] : []
  })
}

function toHowTo(value: unknown): ContentHowTo | undefined {
  if (!value || typeof value !== "object" || Array.isArray(value)) return undefined

  const candidate = value as Record<string, unknown>
  const rawSteps = Array.isArray(candidate.steps) ? candidate.steps : []
  const steps = rawSteps.flatMap((item) => {
    if (!item || typeof item !== "object") return []
    const step = item as Record<string, unknown>
    const name = toStringValue(step.name ?? step.title)
    const text = toStringValue(step.text ?? step.description)
    return name && text ? [{ name, text }] : []
  })

  if (steps.length === 0) return undefined

  return {
    name: toStringValue(candidate.name) || undefined,
    description: toStringValue(candidate.description) || undefined,
    totalTime: toStringValue(candidate.totalTime) || undefined,
    steps,
  }
}

function slugify(value: string) {
  return value
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function titleFromFilename(filename: string) {
  return filename
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toLocaleUpperCase("tr-TR"))
}

function walkMarkdownFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) return []

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name)
    if (entry.isDirectory()) return walkMarkdownFiles(entryPath)
    return entry.isFile() && CONTENT_FILE_PATTERN.test(entry.name) ? [entryPath] : []
  })
}

function getRouteDetails(
  collection: ContentCollection,
  relativeFilePath: string,
  frontmatter: ContentFrontmatter,
): RouteDetails | undefined {
  const segments = relativeFilePath
    .replace(CONTENT_FILE_PATTERN, "")
    .split(path.sep)
    .map(slugify)
    .filter(Boolean)

  const declaredSlug = slugify(toStringValue(frontmatter.slug))

  if (collection === "software") {
    if (segments.length === 1) {
      const software = slugify(toStringValue(frontmatter.software)) || declaredSlug || segments[0]
      return {
        slug: software,
        routeSegments: [software],
        pathname: `/software/${software}`,
        software,
      }
    }

    if (segments.length === 2) {
      const software = slugify(toStringValue(frontmatter.software)) || segments[0]
      const topic = declaredSlug || segments[1]
      return {
        slug: topic,
        routeSegments: [software, topic],
        pathname: `/software/${software}/${topic}`,
        software,
      }
    }

    return undefined
  }

  if (segments.length !== 1) return undefined

  const slug = declaredSlug || segments[0]
  return {
    slug,
    routeSegments: [slug],
    pathname: `/${collection}/${slug}`,
  }
}

function parseContentFile(collection: ContentCollection, filePath: string): ContentDocument | undefined {
  const raw = fs.readFileSync(filePath, "utf8")
  const parsed = matter(raw)
  const frontmatter = parsed.data as ContentFrontmatter
  const collectionDirectory = path.join(CONTENT_ROOT, collection)
  const relativeFilePath = path.relative(collectionDirectory, filePath)
  const route = getRouteDetails(collection, relativeFilePath, frontmatter)

  if (!route) {
    console.warn(
      `[content-engine] ${path.relative(process.cwd(), filePath)} does not match a supported route pattern and was skipped.`,
    )
    return undefined
  }

  const fileMetadata = fs.statSync(filePath)
  const title = toStringValue(frontmatter.title) || titleFromFilename(path.basename(relativeFilePath, path.extname(relativeFilePath)))
  const lastModified = toDateString(frontmatter.updated ?? frontmatter.lastModified, fileMetadata.mtime)

  return {
    id: `${collection}:${route.pathname}`,
    collection,
    filePath,
    title,
    description: toStringValue(frontmatter.description),
    metaTitle: toStringValue(frontmatter.metaTitle) || undefined,
    metaDescription: toStringValue(frontmatter.metaDescription) || undefined,
    slug: route.slug,
    pathname: route.pathname,
    routeSegments: route.routeSegments,
    keywords: toStringArray(frontmatter.keywords),
    software: toStringValue(frontmatter.software) || route.software,
    service: toStringValue(frontmatter.service) || undefined,
    city: toStringValue(frontmatter.city) || undefined,
    category: toStringValue(frontmatter.category) || undefined,
    tags: toStringArray(frontmatter.tags),
    faq: toFaq(frontmatter.faq),
    related: toStringArray(frontmatter.related),
    priority: toPriority(frontmatter.priority),
    published: toBoolean(frontmatter.published, true),
    lastModified,
    author: toStringValue(frontmatter.author) || undefined,
    image: toStringValue(frontmatter.image) || undefined,
    howTo: toHowTo(frontmatter.howTo),
  }
}

function compareDocuments(a: ContentDocument, b: ContentDocument) {
  const aDate = a.lastModified ? new Date(a.lastModified).getTime() : 0
  const bDate = b.lastModified ? new Date(b.lastModified).getTime() : 0
  return bDate - aDate || a.title.localeCompare(b.title, "tr")
}

function loadContentDocuments() {
  const seenPathnames = new Set<string>()
  const documents = CONTENT_COLLECTIONS.flatMap((collection) => {
    const collectionDirectory = path.join(CONTENT_ROOT, collection)
    return walkMarkdownFiles(collectionDirectory).flatMap((filePath) => {
      const document = parseContentFile(collection, filePath)
      if (!document || !document.published) return []

      if (seenPathnames.has(document.pathname)) {
        console.warn(`[content-engine] Duplicate public pathname skipped: ${document.pathname}`)
        return []
      }

      seenPathnames.add(document.pathname)
      return [document]
    })
  })

  return documents.sort(compareDocuments)
}

export function getAllContentDocuments() {
  contentCache ??= loadContentDocuments()
  return contentCache
}

export function getContentDocuments(collection?: ContentCollection) {
  const documents = getAllContentDocuments()
  return collection ? documents.filter((document) => document.collection === collection) : documents
}

export function getContentDocumentByPathname(pathname: string) {
  return getAllContentDocuments().find((document) => document.pathname === pathname)
}

export function getContentSource(document: ContentDocument) {
  return matter(fs.readFileSync(document.filePath, "utf8")).content
}

export function getSoftwareDocument(software: string, topic?: string) {
  const pathname = topic ? `/software/${slugify(software)}/${slugify(topic)}` : `/software/${slugify(software)}`
  return getContentDocumentByPathname(pathname)
}

export function getCollectionDocument(
  collection: Exclude<ContentCollection, "software">,
  slug: string,
) {
  return getContentDocumentByPathname(`/${collection}/${slugify(slug)}`)
}

export function getCollectionLabel(collection: ContentCollection) {
  return COLLECTION_LABELS[collection]
}

function overlapScore(a: string[], b: string[]) {
  const bSet = new Set(b.map((value) => value.toLocaleLowerCase("tr-TR")))
  return a.reduce(
    (score, value) => score + (bSet.has(value.toLocaleLowerCase("tr-TR")) ? 1 : 0),
    0,
  )
}

function relationshipScore(source: ContentDocument, candidate: ContentDocument) {
  if (source.pathname === candidate.pathname) return Number.NEGATIVE_INFINITY

  let score = 0
  const explicitReference = source.related.some((reference) => {
    const normalizedReference = reference.replace(/^https?:\/\/[^/]+/, "").replace(/\/$/, "")
    return (
      normalizedReference === candidate.id ||
      normalizedReference === candidate.pathname ||
      normalizedReference === candidate.slug
    )
  })

  if (explicitReference) score += 100
  if (source.collection === candidate.collection) score += 3
  if (source.software && source.software === candidate.software) score += 8
  if (source.service && source.service === candidate.service) score += 8
  if (source.city && source.city === candidate.city) score += 8
  if (source.category && source.category === candidate.category) score += 4
  score += overlapScore(source.tags, candidate.tags) * 3
  score += overlapScore(source.keywords, candidate.keywords)

  return score
}

export function getRelatedContentGroups(document: ContentDocument, limitPerGroup = 4): RelatedContentGroup[] {
  return CONTENT_COLLECTIONS.flatMap((collection) => {
    const documents = getContentDocuments(collection)
      .map((candidate) => ({ candidate, score: relationshipScore(document, candidate) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || compareDocuments(a.candidate, b.candidate))
      .slice(0, limitPerGroup)
      .map(({ candidate }) => candidate)

    return documents.length > 0
      ? [{ collection, label: `İlgili ${getCollectionLabel(collection)}`, documents }]
      : []
  })
}

export function getTopicCluster(document: ContentDocument, limit = 6) {
  return getAllContentDocuments()
    .map((candidate) => ({ candidate, score: relationshipScore(document, candidate) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || compareDocuments(a.candidate, b.candidate))
    .slice(0, limit)
    .map(({ candidate }) => candidate)
}

export function getStaticRouteParams(collection: Exclude<ContentCollection, "software">) {
  return getContentDocuments(collection).map((document) => ({ slug: document.slug }))
}

export function getSoftwareRouteParams() {
  return getContentDocuments("software")
    .filter((document) => document.routeSegments.length === 1)
    .map((document) => ({ software: document.routeSegments[0] }))
}

export function getSoftwareTopicRouteParams() {
  return getContentDocuments("software")
    .filter((document) => document.routeSegments.length === 2)
    .map((document) => ({ software: document.routeSegments[0], topic: document.routeSegments[1] }))
}

export function isContentCollection(value: string): value is ContentCollection {
  return isCollection(value)
}
