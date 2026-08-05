/**
 * Home page — pure composition of self-contained sections.
 * All copy lives in `src/data/site-content.ts`, all products in
 * `src/data/products.ts`. Nothing is hardcoded inline in this file.
 */
import { createFileRoute } from "@tanstack/react-router";
import {
  AnnouncementBar,
  Header,
  Hero,
  PromoBanner,
  PressBar,
  CategoryGrid,
  Bestsellers,
  FeaturedProducts,
  ShopByPurpose,
  Testimonials,
  NewArrivals,
  AboutStore,
  AstrologerCTA,
  FAQ,
  Footer,
} from "@/components/sections";
import { ReviewsSummary } from "@/components/sections/ReviewsSummary";
import { RecentlyViewed } from "@/components/sections/RecentlyViewed";
import {
  rudrakshaProducts,
  malaProducts,
  braceletProducts,
  karungaliProducts,
  crystalTreeProducts,
  yantraProducts,
  statueProducts,
} from "@/data/products";
import { homeFaqs } from "@/data/site-content";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shop Karungali, Rudraksha, Pyrite & Zodiac — Nakshatra Store" },
      {
        name: "description",
        content:
          "Buy original Karungali Mala, Rudraksha, Pyrite, Zodiac bracelets, Yantras & Vastu products. Government certified, energised by top astrologers, 7-day returns.",
      },
      { property: "og:title", content: "Nakshatra Store — Authentic Spiritual Products" },
      {
        property: "og:description",
        content:
          "Karungali, Rudraksha, Pyrite, Zodiac bracelets & Vastu products. Lab certified and energised by top astrologers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://stellar-emporium-project.lovable.app/" },
      { property: "og:site_name", content: "Nakshatra Store" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: "https://stellar-emporium-project.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "Nakshatra Store",
          url: "https://stellar-emporium-project.lovable.app/",
          description:
            "Original Karungali Mala, Rudraksha, Pyrite, Zodiac bracelets, Yantras & Vastu products — certified and energised by astrologers.",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 01 Announcement bar */}
      <AnnouncementBar />
      {/* 02 Header + cart trigger */}
      <Header />
      <main id="main">
      {/* 03 Hero */}
      <Hero />
      {/* 04 Promo banners */}
      <PromoBanner />
      {/* 05 Press / trust bar */}
      <PressBar />
      {/* 06 Category grid */}
      <CategoryGrid />
      {/* 07 Bestsellers */}
      <Bestsellers />
      {/* 08 Featured collection rows */}
      <FeaturedProducts title="Rudraksha Collections" products={rudrakshaProducts} collectionHandle="rudraksha" />
      <div className="bg-secondary/40 border-y border-border">
        <FeaturedProducts title="Malas" products={malaProducts} collectionHandle="mala" />
      </div>
      <FeaturedProducts title="Bracelets" products={braceletProducts} collectionHandle="bracelets" />
      <div className="bg-secondary/40 border-y border-border">
        <FeaturedProducts title="Sacred Karungali Store" products={karungaliProducts} collectionHandle="karungali" />
      </div>
      <FeaturedProducts title="Crystal Trees For Wealth & Luck" products={crystalTreeProducts} collectionHandle="crystal-trees" />
      <div className="bg-secondary/40 border-y border-border">
        <FeaturedProducts title="Yantras" products={yantraProducts} collectionHandle="yantras" />
      </div>
      <FeaturedProducts title="Statues Collection" products={statueProducts} collectionHandle="statues" />
      {/* 09 Shop by purpose / why us */}
      <ShopByPurpose />
      {/* 10 Testimonials */}
      <Testimonials />
      {/* 10b Aggregate review proof */}
      <ReviewsSummary />
      {/* 11 Full catalogue grid */}
      <NewArrivals />
      {/* 11b Recently viewed — returns ad traffic to intent products */}
      <RecentlyViewed />
      {/* 12 About the store */}
      <AboutStore />
      {/* 13 Foundation CTA */}
      <AstrologerCTA />
      {/* 14 FAQ */}
      <FAQ items={homeFaqs} />
      </main>
      {/* 15 Footer (includes newsletter lead capture) */}
      <Footer />
    </div>
  );
}
