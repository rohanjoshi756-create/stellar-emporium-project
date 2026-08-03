// Per-collection SEO copy: unique titles, meta descriptions, intro copy and FAQs.
// Used by /collections/$slug for search + Google Ads landing quality.
export type CollectionSeo = {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  benefits: { t: string; d: string }[];
  faqs: { q: string; a: string }[];
};

const common = (name: string) => [
  {
    q: `Are these ${name} products original and certified?`,
    a: `Yes. Every ${name.toLowerCase()} product is sourced from trusted mines and artisans and verified in government-approved gemology labs before it is listed.`,
  },
  {
    q: `Are the products energised before dispatch?`,
    a: `Every order is energised with Vedic mantras by our astrologers and priests before dispatch, so you can start wearing or placing it right away.`,
  },
  {
    q: `What is the delivery time and return policy?`,
    a: `Orders are dispatched within 24–48 hours and usually delivered in 3–6 days across India. Prepaid orders ship free and every product carries a 7-day return policy.`,
  },
];

export const collectionSeo: Record<string, CollectionSeo> = {
  "best-sellers": {
    seoTitle: "Best Selling Spiritual Products Online | Nakshatra Store",
    seoDescription:
      "Shop Nakshatra Store best sellers — original Rudraksha, Karungali malas, crystal bracelets and vastu items. Lab certified, energised, free shipping & 7-day returns.",
    h1: "Best Selling Spiritual Products",
    intro:
      "These are the products our customers reorder the most — original Nepali Rudraksha, Karungali malas, crystal bracelets and vastu essentials. Each one is lab tested, energised by our astrologers and shipped free across India on prepaid orders.",
    benefits: [
      { t: "Proven favourites", d: "Ranked by real orders and repeat purchases, not by guesswork." },
      { t: "Lab certified", d: "Originality verified in government-approved gemology labs." },
      { t: "Energised before dispatch", d: "Vedic mantra energisation by our in-house priests." },
    ],
    faqs: common("Best Seller"),
  },
  bracelets: {
    seoTitle: "Buy Original Crystal & Rudraksha Bracelets Online | Nakshatra Store",
    seoDescription:
      "Buy certified crystal, pyrite, tiger eye and rudraksha bracelets for money, protection, love and health. Energised by astrologers. Free shipping, 7-day returns.",
    h1: "Original Crystal & Rudraksha Bracelets",
    intro:
      "Wear your intention every day. Our bracelet collection covers pyrite for wealth, tiger eye for confidence, rose quartz for love, amethyst for calm and rudraksha for protection — all strung on durable elastic and energised before dispatch.",
    benefits: [
      { t: "Wealth & career", d: "Pyrite, citrine and tiger eye for money flow, focus and confidence." },
      { t: "Love & calm", d: "Rose quartz and amethyst for relationships, sleep and emotional balance." },
      { t: "Protection", d: "Black tourmaline, karungali and evil-eye bracelets against negativity." },
    ],
    faqs: [
      { q: "Which hand should I wear a crystal bracelet on?", a: "Wear it on the left hand to receive energy (money, calm, love) and on the right hand to project energy (protection, confidence)." },
      { q: "How do I cleanse my bracelet?", a: "Rinse under running water or keep it in moonlight for a few hours once a week, then set your intention while wearing it." },
      ...common("Bracelet"),
    ],
  },
  mala: {
    seoTitle: "108 Bead Japa Mala Online — Tulsi, Rudraksha & Crystal | Nakshatra",
    seoDescription:
      "Buy authentic 108-bead japa malas — tulsi, rudraksha, karungali and crystal. Hand-knotted, energised by priests. Free shipping across India, 7-day returns.",
    h1: "108 Bead Japa Malas",
    intro:
      "A traditional 108-bead mala keeps your japa count effortless. Choose tulsi for devotion, rudraksha for peace, karungali for protection or crystal malas for a specific intention — each mala is hand-knotted and energised before it reaches you.",
    benefits: [
      { t: "108 beads + guru bead", d: "Traditional count for accurate mantra japa and meditation." },
      { t: "Hand-knotted", d: "Knotted between beads so the mala lasts years of daily use." },
      { t: "Energised", d: "Chanted over with Vedic mantras before dispatch." },
    ],
    faqs: [
      { q: "How do I use a japa mala?", a: "Hold the mala in your right hand, start next to the guru bead and move one bead per mantra with your thumb. Do not cross the guru bead — turn around instead." },
      ...common("Mala"),
    ],
  },
  "crystal-trees": {
    seoTitle: "Crystal Trees for Money & Positivity — Buy Online | Nakshatra Store",
    seoDescription:
      "Handcrafted crystal trees for wealth, luck and positive energy at home or office. Pyrite, citrine, amethyst & seven-chakra trees. Energised, free shipping.",
    h1: "Crystal Trees for Wealth & Positivity",
    intro:
      "A crystal tree is the easiest vastu upgrade for a home or workspace. Place a pyrite or citrine tree in the north for money flow, amethyst in the north-east for calm, and a seven-chakra tree in the living room for overall harmony.",
    benefits: [
      { t: "Wealth corner", d: "Pyrite & citrine trees for cash flow, business growth and savings." },
      { t: "Peaceful home", d: "Amethyst and rose quartz trees for calm and better relationships." },
      { t: "Gift ready", d: "Popular housewarming, Diwali and office-opening gift." },
    ],
    faqs: [
      { q: "Where should I keep a crystal tree?", a: "Keep money trees (pyrite, citrine, green aventurine) in the north or south-east of your home or office, and calming trees (amethyst, rose quartz) in the bedroom or north-east." },
      ...common("Crystal Tree"),
    ],
  },
  vastu: {
    seoTitle: "Vastu Items Online — Pyramids, Tortoise & Energy Tools | Nakshatra",
    seoDescription:
      "Buy vastu items online — vastu pyramids, tortoise, hanging crystals and energy tools to correct dosh and balance your home or office. Energised, 7-day returns.",
    h1: "Vastu Items for Home & Office",
    intro:
      "Correct the energy of your space without construction. Our vastu range includes pyramids for dosh correction, tortoise for stability, hanging crystals for entrances and yantra plates for the puja room — all energised before dispatch.",
    benefits: [
      { t: "Dosh correction", d: "Vastu pyramids and plates for direction-based defects." },
      { t: "Entrance energy", d: "Hanging crystals, bells and evil-eye pieces for your main door." },
      { t: "Prosperity tools", d: "Tortoise, kuber items and money bowls for stability and savings." },
    ],
    faqs: [
      { q: "Do vastu items need any ritual before use?", a: "Simply wipe them clean, place them in the recommended direction and light a diya or incense once. They arrive already energised." },
      ...common("Vastu"),
    ],
  },
  rudraksha: {
    seoTitle: "Original Nepali Rudraksha 1 to 14 Mukhi — Buy Online | Nakshatra Store",
    seoDescription:
      "Buy original Nepali Rudraksha with silver capping — 1 to 14 Mukhi beads, malas and bracelets. Lab tested, energised by priests. Free shipping, 7-day returns.",
    h1: "Original Nepali Rudraksha Collection",
    intro:
      "Every bead in this collection is Nepali origin, x-ray and lab tested, and finished with pure silver capping. From 5 Mukhi for peace of mind to 7 Mukhi for wealth and 14 Mukhi for decision-making — pick by your need or ask our astrologers.",
    benefits: [
      { t: "5 Mukhi", d: "Calms the mind, improves memory and focus. Suitable for everyone." },
      { t: "7 Mukhi", d: "Blessed by Goddess Lakshmi — wealth, business growth and Shani relief." },
      { t: "Silver capped", d: "Pure silver capping so the bead can be worn daily on a chain." },
    ],
    faqs: [
      { q: "How do I know my Rudraksha is original?", a: "Each bead is x-ray tested for the correct number of internal compartments matching its mukhi count, and ships with lab verification." },
      { q: "Who can wear Rudraksha?", a: "Anyone can wear 5 Mukhi Rudraksha regardless of age, gender or horoscope. Higher mukhi beads are best chosen with an astrologer's guidance." },
      ...common("Rudraksha"),
    ],
  },
  statues: {
    seoTitle: "Buy God Statues & Idols Online for Home Temple | Nakshatra Store",
    seoDescription:
      "Shop divine statues and idols for your home temple — brass, marble finish and metal murtis crafted with devotion. Energised before dispatch, free shipping.",
    h1: "Divine Statues for Your Home Temple",
    intro:
      "A home temple deserves a murti made with care. Our statues collection covers Ganesha, Lakshmi, Shiva, Hanuman and Krishna in brass and metal finishes, each energised with mantras before it is packed for your puja space.",
    benefits: [
      { t: "Puja ready", d: "Energised with mantras so you can install them the same day." },
      { t: "Durable finish", d: "Brass and alloy murtis that keep their shine for years." },
      { t: "Safe packing", d: "Multi-layer protective packing for damage-free delivery." },
    ],
    faqs: [
      { q: "Which direction should the idol face?", a: "Ideally place idols in the north-east of your home with the deity facing west or east, and avoid keeping them directly on the floor." },
      ...common("Statue"),
    ],
  },
  karungali: {
    seoTitle: "Original Karungali Mala & Bracelet Online (Govt Certified) | Nakshatra",
    seoDescription:
      "Buy 100% original Karungali (black ebony) mala, bracelet and chain for protection from negativity and evil eye. Govt certified, energised, free shipping in India.",
    h1: "Original Karungali (Black Ebony) Collection",
    intro:
      "Karungali, or black ebony, is the classic South Indian protection wood. Our karungali malas, bracelets and chains are made from genuine seasoned wood — no dyed substitutes — and energised before dispatch for daily wear.",
    benefits: [
      { t: "Protection", d: "Shields the wearer from negative energy, evil eye and drishti." },
      { t: "Grounding", d: "Calms restlessness, reduces stress and improves focus." },
      { t: "Verified wood", d: "Genuine seasoned karungali with certification — never dyed timber." },
    ],
    faqs: [
      { q: "How do I check if Karungali is original?", a: "Original karungali sinks in water, does not release colour when rubbed, and gives a faint natural scent when warmed. Every piece we ship is certified." },
      { q: "Can karungali be worn daily?", a: "Yes. Keep it away from soap, oil and perfume, and wipe it dry after a bath to preserve the natural finish." },
      ...common("Karungali"),
    ],
  },
  yantras: {
    seoTitle: "Energised Yantras Online — Shree, Kuber & Vastu Yantra | Nakshatra",
    seoDescription:
      "Buy energised yantras online — Shree Yantra, Kuber Yantra, Vastu and planetary yantras for prosperity and protection. Mantra-charged, free shipping in India.",
    h1: "Energised Yantras",
    intro:
      "Yantras are sacred geometry that hold a specific energy. Install a Shree Yantra for prosperity, Kuber Yantra for savings, Vastu Yantra for the home and planetary yantras to soften a difficult mahadasha — all charged with their specific mantra.",
    benefits: [
      { t: "Mantra charged", d: "Each yantra is activated with its own beej mantra before dispatch." },
      { t: "Puja room ready", d: "Sizes suited to a home temple, office desk or cash locker." },
      { t: "Traditional etching", d: "Accurate geometry etched on quality metal plates." },
    ],
    faqs: [
      { q: "Where should a Shree Yantra be placed?", a: "Place it in your puja room or cash locker facing east or north, and offer incense and a diya on Fridays for best results." },
      ...common("Yantra"),
    ],
  },
};

export const seoFor = (slug: string): CollectionSeo | undefined => collectionSeo[slug];
