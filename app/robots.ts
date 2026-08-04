import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"
import { getSitemapLocations } from "@/lib/sitemap"

const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "DuckAssistBot",
  "Meta-ExternalAgent",
  "meta-externalagent",
  "YouBot",
]

const publicRule = {
  allow: "/",
  disallow: ["/api/", "/_next/", "/content/"],
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        ...publicRule,
      },
      ...aiBots.map((userAgent) => ({
        userAgent,
        ...publicRule,
      })),
    ],
    sitemap: getSitemapLocations(),
    host: SITE_URL,
  }
}
