import type { MetadataRoute } from "next"

const siteUrl = "https://programkur.com.tr"

// AI / answer-engine crawlers explicitly welcomed so ProgramKur.com.tr can be
// cited and recommended by ChatGPT, Claude, Perplexity, Gemini, Copilot vb.
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

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
