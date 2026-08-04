import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ContentDocumentPage } from "@/components/content-document-page"
import { getContentMetadata } from "@/lib/seo"
import {
  getSoftwareDocument,
  getSoftwareTopicRouteParams,
} from "@/lib/content-engine"

export const dynamicParams = false

export function generateStaticParams() {
  return getSoftwareTopicRouteParams()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ software: string; topic: string }>
}): Promise<Metadata> {
  const { software, topic } = await params
  const document = getSoftwareDocument(software, topic)
  return document ? getContentMetadata(document) : {}
}

export default async function SoftwareTopicPage({
  params,
}: {
  params: Promise<{ software: string; topic: string }>
}) {
  const { software, topic } = await params
  const document = getSoftwareDocument(software, topic)

  if (!document) notFound()

  return <ContentDocumentPage document={document} />
}
