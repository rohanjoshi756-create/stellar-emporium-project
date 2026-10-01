import rudrakshaImage from "@/assets/hero-rudraksha.jpg";
import zodiacImage from "@/assets/hero-zodiac.jpg";
import karungaliImage from "@/assets/cat-karungali.jpg";
import malaImage from "@/assets/cat-mala.jpg";
import crystalImage from "@/assets/crystal-citrine.jpg";
import vastuImage from "@/assets/cat-vastu.jpg";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  publishedLabel: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  intro: string;
  sections: BlogSection[];
  takeaway: string;
  collectionHandle: string;
  collectionLabel: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-original-rudraksha",
    title: "How to Choose an Original Rudraksha: A Practical Guide",
    excerpt: "Understand mukhi types, certification, natural features and the right checks before selecting a Rudraksha.",
    category: "Rudraksha Guide",
    author: "Nakshatra Editorial",
    publishedAt: "2026-09-26",
    publishedLabel: "26 September 2026",
    readTime: "7 min read",
    image: rudrakshaImage,
    imageAlt: "Natural Rudraksha beads arranged for authenticity inspection",
    featured: true,
    intro: "A Rudraksha is chosen for both spiritual significance and daily wear. The most important step is to look beyond surface polish and understand its natural structure, origin and certification.",
    sections: [
      { heading: "Begin with the mukhi", paragraphs: ["Mukhi are the natural lines running from one end of the bead to the other. Each type is traditionally associated with a particular intention, but the best choice is one that fits your purpose and can be worn consistently."], points: ["5 Mukhi is widely chosen for calm and everyday spiritual practice.", "Special mukhi beads are generally selected after guidance.", "Natural lines should be continuous and not carved or artificially joined."] },
      { heading: "Check authenticity, not perfection", paragraphs: ["An original bead may have an uneven shape, natural texture and small variations. A perfectly identical batch is not automatically a sign of quality. Ask for clear photographs and a recognised laboratory certificate."], points: ["Inspect the bead under neutral light.", "Check whether the certificate identifies the same bead.", "Avoid relying only on water or coin tests; they are not conclusive."] },
      { heading: "Choose a wearable size", paragraphs: ["The largest bead is not always the best. Consider whether it will be worn as a pendant, bracelet or mala. Comfort, skin contact and secure capping matter more for everyday use."], points: ["Small and medium beads suit daily wear.", "Silver capping should hold the bead without covering its natural faces.", "Keep the bead dry and away from chemical fragrances."] },
    ],
    takeaway: "Choose a Rudraksha with visible natural mukhi, transparent sourcing and a certificate that matches the individual bead.",
    collectionHandle: "rudraksha",
    collectionLabel: "Explore Rudraksha",
  },
  {
    slug: "karungali-mala-benefits-and-care",
    title: "Karungali Mala: Traditional Benefits, Use and Care",
    excerpt: "A straightforward guide to Karungali ebony, how people wear it and how to protect its natural finish.",
    category: "Sacred Woods",
    author: "Nakshatra Editorial",
    publishedAt: "2026-09-18",
    publishedLabel: "18 September 2026",
    readTime: "5 min read",
    image: karungaliImage,
    imageAlt: "Natural dark Karungali ebony prayer beads",
    intro: "Karungali, a dark ebony wood used in South Indian spiritual traditions, is valued for its grounded feel and distinctive natural grain. It is commonly worn as a mala or bracelet.",
    sections: [
      { heading: "Why Karungali is worn", paragraphs: ["Traditional practice associates Karungali with steadiness, protection and focused intention. Its significance comes from devotional use rather than decorative appearance alone."], points: ["Suitable for quiet prayer and mantra practice.", "Often selected as a simple everyday spiritual accessory.", "Every natural wood bead can vary slightly in tone and grain."] },
      { heading: "How to begin wearing it", paragraphs: ["Keep the first wear simple. Clean hands, a calm setting and a personal prayer or intention are enough. If you follow a family or guru-led practice, prioritise that guidance."], points: ["Wear it comfortably without stretching the thread.", "Remove it before swimming or bathing.", "Store it separately in a dry cloth pouch."] },
      { heading: "Caring for natural ebony", paragraphs: ["Wood responds to moisture and heat. Wipe the mala gently after use and let it air dry away from direct sunlight. Do not apply perfume, soap or harsh cleaners."], points: ["Use a soft, dry cloth.", "Avoid long exposure to water.", "A tiny amount of natural oil may be used occasionally if recommended by the maker."] },
    ],
    takeaway: "Treat Karungali as a natural sacred material: wear it intentionally, keep it dry and let its authentic grain remain visible.",
    collectionHandle: "karungali",
    collectionLabel: "Shop Karungali",
  },
  {
    slug: "crystals-for-wealth-and-prosperity",
    title: "5 Crystals Traditionally Chosen for Wealth and Prosperity",
    excerpt: "Discover popular prosperity crystals, their traditional associations and thoughtful ways to place or wear them.",
    category: "Crystal Wisdom",
    author: "Nakshatra Editorial",
    publishedAt: "2026-09-09",
    publishedLabel: "9 September 2026",
    readTime: "6 min read",
    image: crystalImage,
    imageAlt: "Golden citrine crystal used in prosperity practices",
    intro: "Crystals are often used as visual anchors for intention. For prosperity, the most useful choice is one whose colour, form and traditional meaning align with the habit or goal you want to reinforce.",
    sections: [
      { heading: "Citrine and Pyrite", paragraphs: ["Citrine is traditionally associated with confidence and abundance, while Pyrite is chosen for action, protection and a practical money mindset."], points: ["Place Citrine near a workspace or cash area.", "Keep Pyrite dry and avoid prolonged water contact.", "Use either as a cue for regular financial planning."] },
      { heading: "Green Jade and Tiger Eye", paragraphs: ["Green Jade represents steady growth and harmony. Tiger Eye is often selected for courage, discernment and consistency—qualities that support long-term progress."], points: ["Choose Jade for a calm, growth-focused setting.", "Wear Tiger Eye when building confidence around decisions.", "Clean both gently with a soft cloth."] },
      { heading: "Clear Quartz as an amplifier", paragraphs: ["Clear Quartz is traditionally used to clarify and strengthen an intention. Pair it with one primary prosperity crystal rather than filling a space with many unrelated stones."], points: ["Write a specific intention beside it.", "Refresh your intention monthly.", "Choose quality and authenticity over quantity."] },
    ],
    takeaway: "Crystals work best as meaningful reminders alongside clear goals and consistent action—not as a replacement for either.",
    collectionHandle: "bracelets",
    collectionLabel: "Explore Crystal Bracelets",
  },
  {
    slug: "how-to-use-japa-mala",
    title: "How to Use a Japa Mala for Daily Mantra Practice",
    excerpt: "Learn the meaning of 108 beads, how to count a mantra and create a sustainable daily practice.",
    category: "Daily Practice",
    author: "Nakshatra Editorial",
    publishedAt: "2026-08-28",
    publishedLabel: "28 August 2026",
    readTime: "5 min read",
    image: malaImage,
    imageAlt: "Traditional Japa mala arranged for mantra meditation",
    intro: "A Japa Mala gives rhythm and structure to mantra repetition. It helps the hands track each recitation so the mind can remain with sound, breath and intention.",
    sections: [
      { heading: "Understanding the 108 beads", paragraphs: ["Most traditional malas contain 108 counting beads plus one larger guru bead. The guru bead marks the beginning and end of a round; it is not crossed during practice."], points: ["Start on the bead beside the guru bead.", "Move one bead after each complete mantra.", "At the end, turn the mala and continue in the opposite direction if desired."] },
      { heading: "A simple daily method", paragraphs: ["Sit comfortably, choose one mantra and decide on one round or a shorter fixed count. Consistency is more valuable than rushing through a large number."], points: ["Practise at a regular time.", "Keep the mala in one hand and use gentle movement.", "Return attention without judgment whenever it wanders."] },
      { heading: "Respectful storage", paragraphs: ["Keep a practice mala clean and separate from ordinary jewellery when possible. A cotton or silk pouch protects the beads and reinforces the sense of ritual."], points: ["Avoid placing it directly on the floor.", "Keep it away from moisture and fragrance.", "Check the thread periodically for wear."] },
    ],
    takeaway: "A short, regular Japa practice with one chosen mantra is more sustainable than an elaborate routine you cannot maintain.",
    collectionHandle: "mala",
    collectionLabel: "Shop Sacred Malas",
  },
  {
    slug: "vastu-crystal-tree-placement-guide",
    title: "Where to Place a Crystal Tree According to Vastu",
    excerpt: "Use room purpose, direction and visual balance to choose a thoughtful location for your crystal tree.",
    category: "Vastu Living",
    author: "Nakshatra Editorial",
    publishedAt: "2026-08-17",
    publishedLabel: "17 August 2026",
    readTime: "6 min read",
    image: vastuImage,
    imageAlt: "Decorative Vastu crystal tree placed in a bright home interior",
    intro: "A crystal tree combines symbolic gemstones with a tree form representing growth. In Vastu-inspired homes, placement is selected according to the intention of the room and the type of stone.",
    sections: [
      { heading: "Match the tree to the intention", paragraphs: ["A Citrine or Pyrite tree is commonly chosen for prosperity, Rose Quartz for relationships, and a mixed seven-chakra tree for overall balance."], points: ["Define one primary intention before choosing.", "Select a size that does not overcrowd the surface.", "Keep the tree visible rather than hidden in a cabinet."] },
      { heading: "Popular placement ideas", paragraphs: ["The north and north-east are frequently used for calm or spiritual pieces, while the south-east is traditionally associated with resources and activity. Practical room use should always come first."], points: ["Use a stable, clean surface.", "Avoid damp corners and direct harsh sunlight.", "Keep it away from clutter to preserve visual focus."] },
      { heading: "Refresh the setting", paragraphs: ["Dust the branches gently and rearrange them when needed. You can revisit the intention attached to the tree at the beginning of each month."], points: ["Wipe stones with a dry cloth.", "Do not soak wired crystal trees.", "Pair the placement with a real habit connected to your goal."] },
    ],
    takeaway: "Place a crystal tree where its intention supports the room, while prioritising cleanliness, stability and daily visibility.",
    collectionHandle: "crystal-trees",
    collectionLabel: "Explore Crystal Trees",
  },
  {
    slug: "zodiac-gemstone-bracelet-guide",
    title: "A Beginner’s Guide to Zodiac and Gemstone Bracelets",
    excerpt: "How to select a gemstone bracelet by intention, zodiac tradition, comfort and authentic material quality.",
    category: "Zodiac Guide",
    author: "Nakshatra Editorial",
    publishedAt: "2026-08-05",
    publishedLabel: "5 August 2026",
    readTime: "7 min read",
    image: zodiacImage,
    imageAlt: "Zodiac wheel and gemstone jewellery arranged together",
    intro: "Zodiac and gemstone bracelets bring traditional symbolism into an easy-to-wear form. A good selection balances astrological guidance with genuine material, practical sizing and personal intention.",
    sections: [
      { heading: "Zodiac sign or personal intention?", paragraphs: ["You can begin with the stone traditionally associated with your sign, or choose according to an intention such as calm, confidence, focus or protection. For stronger astrological remedies, personalised guidance is preferable."], points: ["Use zodiac correspondence as a starting point, not a rigid rule.", "Choose one clear intention.", "Notice which stone you are comfortable wearing regularly."] },
      { heading: "Check fit and material", paragraphs: ["A bracelet should sit securely without pressing into the wrist. Genuine natural stones often show subtle variation in pattern and colour rather than looking perfectly uniform."], points: ["Measure the wrist before ordering.", "Read whether bead size is listed in millimetres.", "Ask about treatment or dye when colour looks unusually uniform."] },
      { heading: "Wear it consistently", paragraphs: ["There is no benefit in choosing a bracelet that stays in a drawer. Select a design that suits your routine, then connect wearing it with a small practice such as a morning intention or evening reflection."], points: ["Remove it during heavy exercise or bathing.", "Store it dry and separately.", "Restring it if the elastic shows wear."] },
    ],
    takeaway: "The right bracelet is authentic, comfortable and meaningful enough to become part of your everyday routine.",
    collectionHandle: "bracelets",
    collectionLabel: "Shop Bracelets",
  },
];

export const blogBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);
