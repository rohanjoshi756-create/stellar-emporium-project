import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogs";
import { BlogCard } from "./BlogCard";

export function HomeBlogs() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="border-y border-border bg-secondary/35" aria-labelledby="home-journal-title">
      <div className="container-x section-y">
        <div className="mb-8 flex items-end justify-between gap-5 border-b border-border pb-5">
          <div>
            <p className="eyebrow text-[color:var(--gold-deep)]">Wisdom & guidance</p>
            <h2 id="home-journal-title" className="mt-2 font-display text-3xl sm:text-4xl">
              From the Nakshatra Journal
            </h2>
          </div>
          <Link
            to="/blogs"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold transition-colors hover:text-primary sm:inline-flex"
          >
            View all blogs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>

        <Link
          to="/blogs"
          className="btn-ink mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold sm:hidden"
        >
          View all blogs <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}