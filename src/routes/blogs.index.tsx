import { createFileRoute, Link } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/sections/BlogCard";
import { blogPosts } from "@/data/blogs";

const SITE = "https://stellar-emporium-project.lovable.app";

export const Route = createFileRoute("/blogs/")({
  component: BlogsPage,
  head: () => ({
    meta: [
      { title: "Nakshatra Journal — Rudraksha, Crystals & Vastu Guides" },
      { name: "description", content: "Practical guides to Rudraksha, Karungali, crystals, malas, zodiac jewellery and Vastu from the Nakshatra editorial team." },
      { property: "og:title", content: "Nakshatra Journal — Sacred Living Guides" },
      { property: "og:description", content: "Thoughtful guides for choosing, wearing and caring for authentic spiritual products." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/blogs` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/blogs` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Blog", name: "Nakshatra Journal", url: `${SITE}/blogs`, blogPost: blogPosts.map((post) => ({ "@type": "BlogPosting", headline: post.title, url: `${SITE}/blogs/${post.slug}`, datePublished: post.publishedAt })) }) }],
  }),
});

function BlogsPage() {
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  if (!featured) return null;
  const remaining = blogPosts.filter((post) => post.slug !== featured.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar /><Header />
      <main id="main">
        <section className="container-x py-10 text-center sm:py-14">
          <nav aria-label="Breadcrumb" className="mb-7 text-left text-xs text-muted-foreground"><Link to="/" className="hover:text-primary">Home</Link> / Journal</nav>
          <p className="eyebrow text-[color:var(--gold-deep)]">Wisdom for intentional living</p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl sm:text-5xl md:text-6xl">The Nakshatra Journal</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">Clear, thoughtful guidance on sacred beads, crystals, Vastu and everyday spiritual practice.</p>
        </section>

        <section aria-label="Featured article"><BlogCard post={featured} featured /></section>

        <section className="container-x section-y">
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-4">
            <div><p className="eyebrow">Read & discover</p><h2 className="mt-1 font-display text-3xl sm:text-4xl">Latest articles</h2></div>
            <p className="hidden text-xs text-muted-foreground sm:block">{blogPosts.length} guides</p>
          </div>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {remaining.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
