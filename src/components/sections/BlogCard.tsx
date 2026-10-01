import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blogs";

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article className={featured ? "group grid overflow-hidden border-y border-border bg-card md:grid-cols-[1.35fr_1fr]" : "group"}>
      <Link to="/blogs/$slug" params={{ slug: post.slug }} className={featured ? "block min-h-[280px] overflow-hidden md:min-h-[430px]" : "block aspect-[4/3] overflow-hidden rounded-lg bg-secondary"}>
        <img src={post.image} alt={post.imageAlt} width={900} height={680} loading={featured ? "eager" : "lazy"} decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      </Link>
      <div className={featured ? "flex flex-col justify-center px-5 py-9 sm:px-10 lg:px-14" : "pt-5"}>
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase text-[color:var(--gold-deep)]">
          <span>{post.category}</span><span aria-hidden="true">·</span><span className="inline-flex items-center gap-1 text-muted-foreground"><Clock className="h-3 w-3" />{post.readTime}</span>
        </div>
        <h2 className={featured ? "mt-3 font-display text-3xl leading-tight sm:text-4xl" : "mt-2 font-display text-xl leading-snug sm:text-2xl"}>
          <Link to="/blogs/$slug" params={{ slug: post.slug }} className="transition-colors hover:text-primary">{post.title}</Link>
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
          <span>{post.publishedLabel}</span>
          <Link to="/blogs/$slug" params={{ slug: post.slug }} aria-label={`Read ${post.title}`} className="inline-flex items-center gap-1 font-semibold text-foreground transition-colors hover:text-primary">Read article <ArrowUpRight className="h-3.5 w-3.5" /></Link>
        </div>
      </div>
    </article>
  );
}
