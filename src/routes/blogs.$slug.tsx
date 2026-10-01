import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, Sparkles } from "lucide-react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/sections/BlogCard";
import { blogBySlug, blogPosts, type BlogPost } from "@/data/blogs";

const SITE = "https://stellar-emporium-project.lovable.app";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }): { post: BlogPost } => {
    const post = blogBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article not found — Nakshatra Store" }, { name: "robots", content: "noindex" }] };
    const { post } = loaderData;
    const url = `${SITE}/blogs/${params.slug}`;
    return {
      meta: [
        { title: `${post.title} | Nakshatra Journal` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "article:published_time", content: post.publishedAt },
        { name: "article:author", content: post.author },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Article", headline: post.title, description: post.excerpt, datePublished: post.publishedAt, author: { "@type": "Organization", name: post.author }, publisher: { "@type": "Organization", name: "Nakshatra Store" }, mainEntityOfPage: url }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE }, { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE}/blogs` }, { "@type": "ListItem", position: 3, name: post.title, item: url }] }] }) }],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: BlogArticlePage,
});

function ArticleNotFound() {
  return <div className="min-h-screen bg-background text-foreground"><AnnouncementBar /><Header /><main id="main" className="container-x py-24 text-center"><h1 className="font-display text-4xl">Article not found</h1><p className="mt-3 text-muted-foreground">This guide may have moved.</p><Link to="/blogs" className="btn-ink mt-7 inline-flex rounded-md px-6 py-3 text-sm font-semibold">Browse all articles</Link></main><Footer /></div>;
}

function BlogArticlePage() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar /><Header />
      <main id="main">
        <article>
          <header className="container-x py-7 sm:py-12">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"><Link to="/" className="hover:text-primary">Home</Link><span>/</span><Link to="/blogs" className="hover:text-primary">Journal</Link><span>/</span><span className="line-clamp-1 text-foreground">{post.category}</span></nav>
            <div className="mx-auto max-w-4xl text-center">
              <p className="eyebrow text-[color:var(--gold-deep)]">{post.category}</p>
              <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">{post.title}</h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground"><span>{post.author}</span><span aria-hidden="true">·</span><time dateTime={post.publishedAt}>{post.publishedLabel}</time><span aria-hidden="true">·</span><span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.readTime}</span></div>
            </div>
          </header>

          <div className="mx-auto max-w-[1180px] px-4"><div className="aspect-[16/9] max-h-[630px] overflow-hidden rounded-lg bg-secondary"><img src={post.image} alt={post.imageAlt} width={1400} height={788} fetchPriority="high" className="h-full w-full object-cover" /></div></div>

          <div className="mx-auto grid max-w-[1050px] gap-10 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:py-16">
            <div className="min-w-0">
              <p className="font-display text-2xl leading-relaxed text-foreground sm:text-3xl">{post.intro}</p>
              <div className="mt-10 space-y-10">
                {post.sections.map((section, index) => (
                  <section key={section.heading} className="border-t border-border pt-8">
                    <p className="eyebrow">0{index + 1}</p>
                    <h2 className="mt-2 font-display text-3xl">{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-[15px] leading-8 text-muted-foreground sm:text-base">{paragraph}</p>)}
                    {section.points && <ul className="mt-5 grid gap-3">{section.points.map((point) => <li key={point} className="flex gap-3 rounded-md bg-secondary/60 px-4 py-3 text-sm leading-6"><span className="mt-1 text-[color:var(--gold-deep)]" aria-hidden="true">◆</span><span>{point}</span></li>)}</ul>}
                  </section>
                ))}
              </div>
              <aside className="mt-10 border-l-2 border-[color:var(--gold)] bg-secondary/60 p-6 sm:p-8"><div className="flex items-center gap-2 text-sm font-semibold"><Sparkles className="h-4 w-4 text-[color:var(--gold-deep)]" />Key takeaway</div><p className="mt-3 font-display text-xl leading-relaxed">{post.takeaway}</p></aside>
            </div>

            <aside className="lg:sticky lg:top-40 lg:self-start">
              <div className="border-y border-border py-6"><p className="eyebrow">Continue exploring</p><p className="mt-3 text-sm leading-6 text-muted-foreground">Discover authentic, carefully selected products related to this guide.</p><Link to="/collections/$slug" params={{ slug: post.collectionHandle }} className="btn-ink mt-5 inline-flex w-full items-center justify-between rounded-md px-4 py-3 text-sm font-semibold">{post.collectionLabel}<ArrowRight className="h-4 w-4" /></Link></div>
            </aside>
          </div>
        </article>

        <section className="border-t border-border bg-secondary/35"><div className="container-x section-y"><div className="mb-8 flex items-center justify-between gap-4"><div><p className="eyebrow">From the journal</p><h2 className="mt-1 font-display text-3xl sm:text-4xl">Read next</h2></div><Link to="/blogs" className="inline-flex items-center gap-1 text-sm font-semibold hover:text-primary"><ArrowLeft className="h-4 w-4" />All articles</Link></div><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <BlogCard key={item.slug} post={item} />)}</div></div></section>
      </main>
      <Footer />
    </div>
  );
}