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
  return getStaticRouteParams("errors")
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const document = getCollectionDocument("errors", slug)
  return document ? getContentMetadata(document) : {}
}

export default async function ErrorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const document = getCollectionDocument("errors", slug)

  if (!document) notFound()

  return <ContentDocumentPage document={document} />
}
