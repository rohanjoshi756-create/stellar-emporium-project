// Per-collection SEO copy: unique titles, meta descriptions, intro copy and FAQs.
// Used by /collections/$slug for search + Google Ads landing quality.
export type CollectionSeo = {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  about: string;
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
      "Shop popular Rudraksha, Karungali malas, crystal bracelets and Vastu items at Nakshatra Store. Compare products and prices to find your next spiritual essential.",
    h1: "Best Selling Spiritual Products",
    intro:
      "These are the products our customers reorder the most — original Nepali Rudraksha, Karungali malas, crystal bracelets and vastu essentials. Each one is lab tested, energised by our astrologers and shipped free across India on prepaid orders.",
    about: "Explore popular spiritual products in one place, from Rudraksha beads and Karungali malas to crystal bracelets and Vastu accessories. Compare materials, bead sizes, prices and availability before choosing a piece for everyday wear, meditation or your home temple.",
    benefits: [
      { t: "Proven favourites", d: "Ranked by real orders and repeat purchases, not by guesswork." },
      { t: "Lab certified", d: "Originality verified in government-approved gemology labs." },
      { t: "Energised before dispatch", d: "Vedic mantra energisation by our in-house priests." },
    ],
    faqs: common("Best Seller"),
  },
  bracelets: {
    seoTitle: "Crystal & Rudraksha Bracelets Online | Nakshatra Store",
    seoDescription:
      "Explore crystal and Rudraksha bracelets, including pyrite, tiger eye, rose quartz and Karungali. Compare bead sizes, materials and prices at Nakshatra Store.",
    h1: "Original Crystal & Rudraksha Bracelets",
    intro:
      "Wear your intention every day. Our bracelet collection covers pyrite for wealth, tiger eye for confidence, rose quartz for love, amethyst for calm and rudraksha for protection — all strung on durable elastic and energised before dispatch.",
    about: "Choose a bracelet by material, bead size and the way you plan to wear it. Browse crystal bracelets such as pyrite, tiger eye, rose quartz and amethyst alongside Rudraksha and Karungali designs. Read each product description for its fit, finish and care guidance; spiritual associations are traditional beliefs, not guaranteed outcomes.",
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
    seoTitle: "Buy Tulsi, Rudraksha & Crystal Malas | Nakshatra Store",
    seoDescription:
      "Shop Tulsi, Rudraksha, Karungali and crystal malas at Nakshatra Store. Explore japa malas and necklaces by bead count, material, length and price.",
    h1: "Tulsi, Rudraksha & Crystal Malas",
    intro:
      "Browse japa malas and devotional necklaces in tulsi, rudraksha, karungali and crystal. Choose a traditional 108-bead mala for mantra practice or compare shorter necklaces for daily wear; bead counts and lengths vary by product.",
    about: "Find a mala for mantra practice, meditation or devotional wear. This collection includes Tulsi, Rudraksha, Karungali and gemstone designs in different lengths and bead counts. A 108-bead japa mala and a shorter Kanthi necklace serve different purposes, so check the individual listing for the bead count, length and care instructions.",
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
    seoTitle: "Buy Crystal Trees for Home & Office | Nakshatra Store",
    seoDescription:
      "Browse pyrite, amethyst, citrine and seven-chakra crystal trees for home decor, office desks and gifts. Compare designs and prices at Nakshatra Store.",
    h1: "Crystal Trees for Wealth & Positivity",
    intro:
      "A crystal tree is the easiest vastu upgrade for a home or workspace. Place a pyrite or citrine tree in the north for money flow, amethyst in the north-east for calm, and a seven-chakra tree in the living room for overall harmony.",
    about: "Explore decorative crystal trees for desks, shelves and gifting. Select a stone, colour and design that suits your space, then check the product listing for dimensions and materials. Pyrite, amethyst and seven-chakra trees are often chosen for their traditional spiritual symbolism; they are decorative pieces rather than a promise of wealth or health benefits.",
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
    seoTitle: "Buy Vastu Items for Home & Office | Nakshatra Store",
    seoDescription:
      "Shop Vastu pyramids, tortoise figurines, evil-eye hangings and energy accessories. Explore home and office Vastu items and compare prices at Nakshatra Store.",
    h1: "Vastu Items for Home & Office",
    intro:
      "Correct the energy of your space without construction. Our vastu range includes pyramids for dosh correction, tortoise for stability, hanging crystals for entrances and yantra plates for the puja room — all energised before dispatch.",
    about: "Browse Vastu-inspired accessories for entrances, desks, shelves and puja spaces, including pyramids, tortoise figurines and evil-eye hangings. Choose by the item type, dimensions and placement guidance on its product page. Vastu associations reflect traditional practices and should not be treated as guaranteed changes to finances, health or relationships.",
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
    seoTitle: "Buy Rudraksha Beads, Malas & Bracelets | Nakshatra Store",
    seoDescription:
      "Explore Nepali and Indonesian Rudraksha beads, malas and bracelets. Compare mukhi counts, silver-capped designs and prices online at Nakshatra Store.",
    h1: "Rudraksha Beads, Malas & Bracelets",
    intro:
      "Explore Rudraksha beads, malas and bracelets in Nepali and Indonesian designs. Compare mukhi counts, bead sizes and silver-capped options, with exact specifications on each product page.",
    about: "Compare individual Rudraksha beads, malas and bracelets by mukhi count, origin and finish. The range includes Nepali and Indonesian designs, with silver-capped options where specified. Check each product page for its exact origin, size, certification details and wearing guidance rather than assuming every bead has the same specifications.",
    benefits: [
      { t: "5 Mukhi", d: "Calms the mind, improves memory and focus. Suitable for everyone." },
      { t: "7 Mukhi", d: "Blessed by Goddess Lakshmi — wealth, business growth and Shani relief." },
      { t: "Silver capped", d: "Pure silver capping so the bead can be worn daily on a chain." },
    ],
    faqs: [
      { q: "How do I know my Rudraksha is original?", a: "Check the origin, mukhi count and certification information on the individual product page. Ask our team for the available verification details before ordering." },
      { q: "Who can wear Rudraksha?", a: "Anyone can wear 5 Mukhi Rudraksha regardless of age, gender or horoscope. Higher mukhi beads are best chosen with an astrologer's guidance." },
      ...common("Rudraksha"),
    ],
  },
  statues: {
    seoTitle: "Buy God Statues & Puja Idols Online | Nakshatra Store",
    seoDescription:
      "Explore Ganesha, Lakshmi, Shiva, Hanuman and Krishna statues for your home temple. Compare idol designs, materials and prices online at Nakshatra Store.",
    h1: "Divine Statues for Your Home Temple",
    intro:
      "A home temple deserves a murti made with care. Our statues collection covers Ganesha, Lakshmi, Shiva, Hanuman and Krishna in brass and metal finishes, each energised with mantras before it is packed for your puja space.",
    about: "Select a deity statue for a home temple, devotional corner or gift. Browse Ganesha, Lakshmi, Shiva, Hanuman and Krishna designs, checking each listing for the actual material, finish and dimensions. Consider the size of your puja space and the care requirements of the chosen finish before ordering.",
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
    seoTitle: "Buy Karungali Malas & Bracelets Online | Nakshatra Store",
    seoDescription:
      "Explore Karungali black ebony malas, bracelets and pendant designs at Nakshatra Store. Compare bead sizes, finishes and prices for daily or devotional wear.",
    h1: "Original Karungali (Black Ebony) Collection",
    intro:
      "Karungali, or black ebony, is the classic South Indian protection wood. Our karungali malas, bracelets and chains are made from genuine seasoned wood — no dyed substitutes — and energised before dispatch for daily wear.",
    about: "Explore Karungali black ebony designs for devotional and everyday wear, from simple bracelets to malas with pendants or caps. Compare the bead size, length and finish in each listing. Protect wood jewellery from prolonged moisture, soap and perfume, and follow the specific care guidance supplied with your piece.",
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
    seoTitle: "Buy Shree, Kuber & Vastu Yantras | Nakshatra Store",
    seoDescription:
      "Shop Shree Yantra, Kuber Yantra, Vastu and planetary yantras at Nakshatra Store. Compare sacred designs, materials, sizes and prices for your puja space.",
    h1: "Energised Yantras",
    intro:
      "Yantras are sacred geometry that hold a specific energy. Install a Shree Yantra for prosperity, Kuber Yantra for savings, Vastu Yantra for the home and planetary yantras to soften a difficult mahadasha — all charged with their specific mantra.",
    about: "Choose a yantra by its traditional purpose, design, dimensions and material. Browse Shree, Kuber, Vastu and planetary yantras for a puja space or devotional display. Read the individual listing for placement and ritual guidance, and treat spiritual associations as matters of tradition rather than guaranteed results.",
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

// Visible collection buying and care guidance.
export const collectionGuides: Record<string, { heading: string; text: string }[]> = {
  "best-sellers": [
    {
      "heading": "Choose by your daily routine",
      "text": "Decide how you intend to use the item before choosing a popular design. A bracelet is compact for everyday wear, a mala can support mantra counting, and a decorative tree or idol needs a suitable display space. Compare the material, bead size or dimensions on the individual page. A popular item is not automatically the right choice for everyone."
    },
    {
      "heading": "Compare before ordering",
      "text": "Check current availability, price and the specifications provided for your chosen product. For jewellery, review the listed length and fit; for home accessories, measure the shelf or desk first. Ask about any missing material or verification details before ordering. Traditional spiritual associations do not guarantee health, financial or personal outcomes."
    }
  ],
  "bracelets": [
    {
      "heading": "How to choose a crystal or Rudraksha bracelet",
      "text": "Choose a material and colour you enjoy wearing, then compare bead size and fit on the product page. Pyrite, tiger eye, rose quartz and amethyst have different appearances, while Rudraksha and Karungali offer a natural texture. Check wrist measurements and fastening details rather than assuming every bracelet fits alike. Smaller beads may feel less bulky during daily tasks."
    },
    {
      "heading": "Care for your bracelet",
      "text": "Care depends on the stone, wood, thread and metal in the piece. Do not assume every crystal can be soaked in water or cleaned with chemicals. Avoid pulling hard on elastic or thread and store jewellery separately to limit scratches. Follow the specific product instructions and ask for guidance when a material is unclear. Spiritual associations are traditional beliefs, not medical or financial promises."
    }
  ],
  "mala": [
    {
      "heading": "Japa mala or devotional necklace?",
      "text": "A mantra-counting mala and a daily devotional necklace need not have the same construction. For japa, check the stated bead count and whether a guru bead is included; not every listing contains 108 beads. For a necklace or Kanthi, compare length and bead size with how you plan to wear it. Tulsi, Rudraksha, Karungali and crystal designs each have a different feel."
    },
    {
      "heading": "Choosing and storing your mala",
      "text": "Read the listing for thread, material and finishing details. Larger beads may be easier to handle for counting but can feel heavier when worn. Keep the mala in a clean, dry place and avoid perfume or harsh cleaners unless its care instructions permit them. For mantra practice, follow your own devotional tradition rather than expecting one ritual to apply to every mala."
    }
  ],
  "crystal-trees": [
    {
      "heading": "Choose a crystal tree for your space",
      "text": "Match the dimensions to the desk, shelf or display area where the tree will sit. Compare the stone colour, branch arrangement and base described in the listing: a close-up photograph may not convey actual scale. A compact design can suit a desk, while a larger piece needs more shelf space. Choose a style that fits your room rather than relying only on spiritual symbolism."
    },
    {
      "heading": "Display and gifting considerations",
      "text": "Use a stable surface where the tree is unlikely to be knocked over. Follow the care guidance for its stones, wire and base. For gifting, check the dimensions and the recipient’s available space before choosing. Crystal trees are decorative objects with spiritual meaning for some people; their placement does not guarantee changes to income, health or relationships."
    }
  ],
  "vastu": [
    {
      "heading": "Selecting Vastu-inspired accessories",
      "text": "Begin with the intended location: an entrance, desk, shelf or puja area. Compare dimensions, material and installation needs for pyramids, tortoise figurines, hangings and other accessories. A hanging item needs a suitable attachment point, while a tabletop piece needs a stable surface. Check what is included on the individual product page before ordering."
    },
    {
      "heading": "Placement without unrealistic expectations",
      "text": "Placement guidance varies with the object and tradition. Read instructions for the specific item rather than applying one direction to the entire collection. Keep walkways clear and decorative pieces away from shelf edges. These accessories can complement a meaningful home arrangement but should not replace practical decisions about safety, finances, wellbeing or building maintenance."
    }
  ],
  "rudraksha": [
    {
      "heading": "Compare Rudraksha by type and origin",
      "text": "Decide whether you want a single bead, bracelet or mala, then compare the stated mukhi count, origin and bead dimensions. The collection includes Nepali and Indonesian designs, so check each listing instead of treating all beads alike. Silver-capped options also need a review of their finishing and wearing details. Price alone is not proof of origin or authenticity."
    },
    {
      "heading": "What to check before buying Rudraksha",
      "text": "Look for clear specifications and any verification information available for the individual piece. Ask the team if origin, capping material or certification details are unclear. Follow care instructions for both the bead and its fittings, and avoid improvised tests that could cause damage. Mukhi associations are part of spiritual tradition, not guaranteed health, academic or financial results."
    }
  ],
  "statues": [
    {
      "heading": "Choose an idol for your home temple",
      "text": "Measure the available height, width and depth before selecting a statue. Compare the deity, pose, material and finish to suit your devotional practice or display. A close-up photograph may not convey the real scale. A small desk idol and a larger home-temple statue need different amounts of space even when they depict the same deity."
    },
    {
      "heading": "Handling and caring for statues",
      "text": "Use a stable surface and keep the idol away from shelf edges. Cleaning depends on material and coating, so avoid abrasive polish or soaking unless the product guidance allows it. Follow your family’s or tradition’s practice for any installation ceremony. Check the listing for included accessories rather than assuming a stand or puja items come with every statue."
    }
  ],
  "karungali": [
    {
      "heading": "Choose a Karungali mala or bracelet",
      "text": "Compare bead size, length and finishing before choosing. A bracelet and longer mala feel different in daily use, while pendant or capped designs may contain additional materials with their own care needs. Review information for the specific piece and ask about sourcing or verification if it is unclear. Colour or price on its own is not a reliable authenticity test."
    },
    {
      "heading": "Looking after wood jewellery",
      "text": "Protect wood jewellery from prolonged moisture, harsh soap and perfume, and store it in a dry place. Do not soak a piece to test authenticity: household tests can damage wood or its fittings and do not establish origin. Follow the care guidance supplied with your purchase. Protective or grounding associations reflect traditional beliefs rather than a guaranteed result."
    }
  ],
  "yantras": [
    {
      "heading": "Selecting a yantra for devotional use",
      "text": "Compare Shree, Kuber, Vastu and planetary designs by traditional purpose and your display space. Check actual material, dimensions and whether the item is a plate or framed piece. Measure your puja area or shelf before ordering. Different formats need different display arrangements, so do not judge size from a close-up photograph alone."
    },
    {
      "heading": "Placement and care for your yantra",
      "text": "Use product guidance and your devotional tradition when deciding on placement or rituals. Keep the piece on a stable, clean surface and follow material-specific cleaning instructions. Avoid abrasive products that could affect printing, engraving or finish. Yantras carry spiritual meaning for practitioners, but buying or placing one does not guarantee prosperity or resolve practical financial, health or personal problems."
    }
  ]
};
