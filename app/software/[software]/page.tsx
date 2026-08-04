import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ContentDocumentPage } from "@/components/content-document-page"
import { getContentMetadata } from "@/lib/seo"
import {
  getSoftwareDocument,
  getSoftwareRouteParams,
} from "@/lib/content-engine"

export const dynamicParams = false

export function generateStaticParams() {
  return getSoftwareRouteParams()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ software: string }>
}): Promise<Metadata> {
  const { software } = await params
  const document = getSoftwareDocument(software)
  return document ? getContentMetadata(document) : {}
}

export default async function SoftwarePage({
  params,
}: {
  params: Promise<{ software: string }>
}) {
  const { software } = await params
  const document = getSoftwareDocument(software)

  if (!document) notFound()

  return <ContentDocumentPage document={document} />
}
