import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ContentDocumentPage } from "@/components/content-document-page"
import {
  getCollectionDocument,
  getStaticRouteParams,
} from "@/lib/content-engine"
import { getContentMetadata } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return getStaticRouteParams("guides")
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const document = getCollectionDocument("guides", slug)
  return document ? getContentMetadata(document) : {}
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const document = getCollectionDocument("guides", slug)

  if (!document) notFound()

  return <ContentDocumentPage document={document} />
}
