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
  return getStaticRouteParams("cities").map(({ slug }) => ({ city: slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const document = getCollectionDocument("cities", city)
  return document ? getContentMetadata(document) : {}
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const document = getCollectionDocument("cities", city)

  if (!document) notFound()

  return <ContentDocumentPage document={document} />
}
