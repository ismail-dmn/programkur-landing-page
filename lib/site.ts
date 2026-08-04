export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://programkur.com.tr").replace(/\/$/, "")
export const SITE_NAME = "ProgramKur.com.tr"
export const SITE_SHORT_NAME = "ProgramKur"
export const DEFAULT_TITLE = "ProgramKur.com.tr | Uzaktan Yazılım Kurulum ve Teknik Destek"
export const DEFAULT_DESCRIPTION =
  "AutoCAD, Revit, SolidWorks, Office, Microsoft 365, Adobe ve Windows dahil 10'dan fazla program için Türkiye geneli aynı gün uzaktan kurulum, lisans aktivasyonu ve teknik destek. Ortalama 15 dakikada WhatsApp yanıtı, ödeme kurulum sonrası."

export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

export function absoluteUrl(pathname = "/") {
  const normalizedPathname = pathname.startsWith("/") ? pathname : `/${pathname}`
  return new URL(normalizedPathname, `${SITE_URL}/`).toString()
}

export function isoDate(value?: string) {
  if (!value) return undefined

  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString()
}
