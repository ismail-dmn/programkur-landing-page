import type { ComponentProps } from "react"
import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"

type MarkdownContentProps = {
  source: string
}

const components = {
  h1: ({ className, ...props }: ComponentProps<"h2">) => (
    <h2
      className={cn("mt-12 text-2xl font-semibold tracking-tight text-navy sm:text-3xl", className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentProps<"h2">) => (
    <h2
      className={cn("mt-12 text-xl font-semibold tracking-tight text-navy sm:text-2xl", className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentProps<"h3">) => (
    <h3 className={cn("mt-9 text-lg font-semibold text-navy sm:text-xl", className)} {...props} />
  ),
  h4: ({ className, ...props }: ComponentProps<"h4">) => (
    <h4 className={cn("mt-7 text-base font-semibold text-navy", className)} {...props} />
  ),
  p: ({ className, ...props }: ComponentProps<"p">) => (
    <p
      className={cn("mt-4 leading-relaxed text-muted-foreground text-pretty", className)}
      {...props}
    />
  ),
  a: ({ className, ...props }: ComponentProps<"a">) => (
    <a
      className={cn("font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary-600", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ComponentProps<"ul">) => (
    <ul className={cn("mt-5 flex list-disc flex-col gap-3 pl-5 marker:text-primary", className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentProps<"ol">) => (
    <ol className={cn("mt-5 flex list-decimal flex-col gap-3 pl-5 marker:font-semibold marker:text-primary", className)} {...props} />
  ),
  li: ({ className, ...props }: ComponentProps<"li">) => (
    <li className={cn("pl-1 leading-relaxed text-muted-foreground", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentProps<"blockquote">) => (
    <blockquote
      className={cn("mt-6 border-l-4 border-primary bg-muted/50 px-5 py-4 leading-relaxed text-navy", className)}
      {...props}
    />
  ),
  hr: ({ className, ...props }: ComponentProps<"hr">) => (
    <hr className={cn("my-10 border-border", className)} {...props} />
  ),
  table: ({ className, ...props }: ComponentProps<"table">) => (
    <div className="mt-7 overflow-x-auto rounded-2xl border border-border">
      <table className={cn("w-full min-w-max border-collapse text-left text-sm", className)} {...props} />
    </div>
  ),
  thead: ({ className, ...props }: ComponentProps<"thead">) => (
    <thead className={cn("bg-muted text-navy", className)} {...props} />
  ),
  th: ({ className, ...props }: ComponentProps<"th">) => (
    <th className={cn("border-b border-border px-4 py-3 font-semibold", className)} {...props} />
  ),
  td: ({ className, ...props }: ComponentProps<"td">) => (
    <td className={cn("border-b border-border px-4 py-3 align-top leading-relaxed text-muted-foreground", className)} {...props} />
  ),
  pre: ({ className, ...props }: ComponentProps<"pre">) => (
    <pre
      className={cn("mt-6 overflow-x-auto rounded-2xl bg-navy p-5 text-sm leading-relaxed text-primary-foreground", className)}
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentProps<"code">) => (
    <code className={cn("rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-navy", className)} {...props} />
  ),
  img: ({ className, alt, ...props }: ComponentProps<"img">) => (
    <img
      className={cn("mt-7 h-auto w-full rounded-2xl border border-border", className)}
      alt={alt ?? ""}
      {...props}
    />
  ),
}

export async function MarkdownContent({ source }: MarkdownContentProps) {
  const { content } = await compileMDX({
    source,
    components,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  })

  return <div>{content}</div>
}
