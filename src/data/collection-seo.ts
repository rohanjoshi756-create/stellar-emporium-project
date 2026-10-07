// Central collection metadata, buying guidance and visible FAQs.
export type CollectionSeo = {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  about: string;
  benefits: { t: string; d: string }[];
  faqs: { q: string; a: string }[];
};

export const collectionSeo: Record<string, CollectionSeo> = {
  "best-sellers": {
    "seoTitle": "Best Selling Spiritual Products Online | Nakshatra Store",
    "seoDescription": "Shop popular Rudraksha, Karungali malas, crystal bracelets and Vastu items at Nakshatra Store. Compare products and prices to find your next spiritual essential.",
    "h1": "Best Selling Spiritual Products",
    "intro": "Explore popular spiritual products, from Rudraksha and Karungali malas to crystal bracelets and home accessories. Compare the individual materials, dimensions and prices to choose something suited to your routine.",
    "about": "Explore popular spiritual products in one place, from Rudraksha beads and Karungali malas to crystal bracelets and Vastu accessories. Compare materials, bead sizes, prices and availability before choosing a piece for everyday wear, meditation or your home temple.",
    "benefits": [
      {
        "t": "Wearable pieces",
        "d": "Compare bracelets and malas for your daily routine."
      },
      {
        "t": "Home accessories",
        "d": "Choose decor by dimensions and available display space."
      },
      {
        "t": "Compare details",
        "d": "Review the individual specifications before ordering."
      }
    ],
    "faqs": [
      {
        "q": "How do I choose between popular spiritual products?",
        "a": "Start with the intended use: wearable jewellery, mantra practice or a home display. Then compare material, size, price and availability on the individual pages."
      },
      {
        "q": "Does a best-selling product suit everyone?",
        "a": "No. Popularity does not establish suitability, fit, certification or a guaranteed spiritual result. Check the actual specifications before buying."
      },
      {
        "q": "What should I check when buying a spiritual gift?",
        "a": "Confirm jewellery fit or display dimensions, the recipient’s preferences, and current delivery and return conditions. Ask the team about missing details before ordering."
      },
      {
        "q": "Where can I check authenticity and certification details?",
        "a": "Read the individual listing for material, origin and any available verification information. If a certificate is mentioned, ask which item it covers and request the details before buying. Do not assume every item in a collection has the same documentation."
      },
      {
        "q": "How can I confirm delivery and return eligibility?",
        "a": "Check the current shipping and returns policies before placing an order. Delivery depends on your address and product availability; confirm any time-sensitive purchase with our team. Review the conditions for your chosen item rather than assuming every product has identical return eligibility."
      }
    ]
  },
  "bracelets": {
    "seoTitle": "Crystal & Rudraksha Bracelets Online | Nakshatra Store",
    "seoDescription": "Explore crystal and Rudraksha bracelets, including pyrite, tiger eye, rose quartz and Karungali. Compare bead sizes, materials and prices at Nakshatra Store.",
    "h1": "Crystal & Rudraksha Bracelets",
    "intro": "Shop crystal and Rudraksha bracelets, including pyrite, tiger eye, rose quartz, amethyst and Karungali designs. Compare bead sizes, fit and current prices for daily wear or gifting.",
    "about": "Choose a bracelet by material, bead size and the way you plan to wear it. Browse crystal bracelets such as pyrite, tiger eye, rose quartz and amethyst alongside Rudraksha and Karungali designs. Read each product description for its fit, finish and care guidance; spiritual associations are traditional beliefs, not guaranteed outcomes.",
    "benefits": [
      {
        "t": "Crystal designs",
        "d": "Compare pyrite, tiger eye, rose quartz and amethyst."
      },
      {
        "t": "Natural textures",
        "d": "Explore Rudraksha and Karungali options."
      },
      {
        "t": "Comfortable fit",
        "d": "Check bead size, bracelet length and fastening."
      }
    ],
    "faqs": [
      {
        "q": "Which hand should I wear a crystal bracelet on?",
        "a": "For practical use, choose the wrist where it fits comfortably. Left- and right-hand symbolism differs between spiritual traditions and is not a universal rule."
      },
      {
        "q": "Can I wash every crystal bracelet in water?",
        "a": "No single cleaning method suits every stone, wood, thread or metal fitting. Follow the listing’s care instructions and ask for guidance if the material is unclear."
      },
      {
        "q": "How do I choose the right bracelet size?",
        "a": "Check bracelet circumference or length and the fastening type. A bead size such as 8mm describes the bead, not your wrist measurement; ask about fit if the dimensions are missing."
      },
      {
        "q": "Where can I check authenticity and certification details?",
        "a": "Read the individual listing for material, origin and any available verification information. If a certificate is mentioned, ask which item it covers and request the details before buying. Do not assume every item in a collection has the same documentation."
      },
      {
        "q": "How can I confirm delivery and return eligibility?",
        "a": "Check the current shipping and returns policies before placing an order. Delivery depends on your address and product availability; confirm any time-sensitive purchase with our team. Review the conditions for your chosen item rather than assuming every product has identical return eligibility."
      }
    ]
  },
  "mala": {
    "seoTitle": "Buy Tulsi, Rudraksha & Crystal Malas | Nakshatra Store",
    "seoDescription": "Shop Tulsi, Rudraksha, Karungali and crystal malas at Nakshatra Store. Explore japa malas and necklaces by bead count, material, length and price.",
    "h1": "Tulsi, Rudraksha & Crystal Malas",
    "intro": "Browse japa malas and devotional necklaces in tulsi, rudraksha, karungali and crystal. Choose a traditional 108-bead mala for mantra practice or compare shorter necklaces for daily wear; bead counts and lengths vary by product.",
    "about": "Find a mala for mantra practice, meditation or devotional wear. This collection includes Tulsi, Rudraksha, Karungali and gemstone designs in different lengths and bead counts. A 108-bead japa mala and a shorter Kanthi necklace serve different purposes, so check the individual listing for the bead count, length and care instructions.",
    "benefits": [
      {
        "t": "Devotional wear",
        "d": "Compare Tulsi Kanthi lengths and finishes."
      },
      {
        "t": "Mantra practice",
        "d": "Check the stated bead count for japa."
      },
      {
        "t": "Material choice",
        "d": "Explore wood, Rudraksha and crystal designs."
      }
    ],
    "faqs": [
      {
        "q": "Is a Tulsi Kanthi mala the same as a japa mala?",
        "a": "A Kanthi is selected for devotional wear, while a japa mala is selected for counting repetitions. Check the individual bead count, length and construction; not every mala contains 108 beads."
      },
      {
        "q": "How do I choose a Tulsi or Rudraksha mala?",
        "a": "Choose by intended use, bead size, stated length and material. For mantra counting, confirm the bead count; for wearing, check the length and fittings."
      },
      {
        "q": "How should I store a mala?",
        "a": "Store it in a clean, dry place, separately from items that can catch the thread or scratch the beads. Follow material-specific guidance rather than soaking every mala."
      },
      {
        "q": "Where can I check authenticity and certification details?",
        "a": "Read the individual listing for material, origin and any available verification information. If a certificate is mentioned, ask which item it covers and request the details before buying. Do not assume every item in a collection has the same documentation."
      },
      {
        "q": "How can I confirm delivery and return eligibility?",
        "a": "Check the current shipping and returns policies before placing an order. Delivery depends on your address and product availability; confirm any time-sensitive purchase with our team. Review the conditions for your chosen item rather than assuming every product has identical return eligibility."
      }
    ]
  },
  "crystal-trees": {
    "seoTitle": "Buy Crystal Trees for Home & Office | Nakshatra Store",
    "seoDescription": "Browse pyrite, amethyst, citrine and seven-chakra crystal trees for home decor, office desks and gifts. Compare designs and prices at Nakshatra Store.",
    "h1": "Crystal Trees for Home & Office",
    "intro": "Browse crystal trees for home, office desks and gifting. Compare single-stone and seven-chakra designs by their colours, materials and listed dimensions to find a piece that suits your space.",
    "about": "Explore decorative crystal trees for desks, shelves and gifting. Select a stone, colour and design that suits your space, then check the product listing for dimensions and materials. Pyrite, amethyst and seven-chakra trees are often chosen for their traditional spiritual symbolism; they are decorative pieces rather than a promise of wealth or health benefits.",
    "benefits": [
      {
        "t": "Desk or shelf",
        "d": "Choose dimensions to suit your display area."
      },
      {
        "t": "Stone and colour",
        "d": "Compare single-stone and multicolour designs."
      },
      {
        "t": "Thoughtful gifts",
        "d": "Check the recipient’s space and preferences."
      }
    ],
    "faqs": [
      {
        "q": "Where should I place a crystal tree?",
        "a": "Use a stable desk or shelf with enough clearance for the branches. If you follow placement traditions, refer to the specific item’s guidance; there is no universal direction for every tree."
      },
      {
        "q": "Does a higher bead count mean a larger crystal tree?",
        "a": "Compare the listed height and width as well as bead count. Arrangement and base design can differ, so bead count alone does not establish the finished dimensions."
      },
      {
        "q": "Is a crystal tree suitable as a housewarming gift?",
        "a": "It can be a decorative gift when its size and colours suit the recipient’s space. Check dimensions, availability and delivery details before buying for a specific date."
      },
      {
        "q": "Where can I check authenticity and certification details?",
        "a": "Read the individual listing for material, origin and any available verification information. If a certificate is mentioned, ask which item it covers and request the details before buying. Do not assume every item in a collection has the same documentation."
      },
      {
        "q": "How can I confirm delivery and return eligibility?",
        "a": "Check the current shipping and returns policies before placing an order. Delivery depends on your address and product availability; confirm any time-sensitive purchase with our team. Review the conditions for your chosen item rather than assuming every product has identical return eligibility."
      }
    ]
  },
  "vastu": {
    "seoTitle": "Buy Vastu Items for Home & Office | Nakshatra Store",
    "seoDescription": "Shop Vastu pyramids, tortoise figurines, evil-eye hangings and energy accessories. Explore home and office Vastu items and compare prices at Nakshatra Store.",
    "h1": "Vastu Items for Home & Office",
    "intro": "Explore Vastu items for home and office, including pyramids, tortoise figurines and decorative hangings. Choose by the intended location, dimensions and placement guidance for the individual piece.",
    "about": "Browse Vastu-inspired accessories for entrances, desks, shelves and puja spaces, including pyramids, tortoise figurines and evil-eye hangings. Choose by the item type, dimensions and placement guidance on its product page. Vastu associations reflect traditional practices and should not be treated as guaranteed changes to finances, health or relationships.",
    "benefits": [
      {
        "t": "Home display",
        "d": "Choose accessories for your entrance or puja space."
      },
      {
        "t": "Office pieces",
        "d": "Compare compact options for desks and shelves."
      },
      {
        "t": "Placement guidance",
        "d": "Review instructions for the particular item."
      }
    ],
    "faqs": [
      {
        "q": "Which Vastu items should I choose for home?",
        "a": "Choose by the location, available space, dimensions and installation requirements. Check the specific item’s instructions rather than applying one placement rule to the entire collection."
      },
      {
        "q": "Can I use Vastu products in an office?",
        "a": "Consider compact pieces that fit safely without obstructing work. Traditional meanings are personal beliefs, not a promise of business growth or financial results."
      },
      {
        "q": "Do Vastu items guarantee a change in luck or finances?",
        "a": "No. Treat them as decorative or devotional accessories with traditional symbolism, not a replacement for practical decisions or professional advice."
      },
      {
        "q": "Where can I check authenticity and certification details?",
        "a": "Read the individual listing for material, origin and any available verification information. If a certificate is mentioned, ask which item it covers and request the details before buying. Do not assume every item in a collection has the same documentation."
      },
      {
        "q": "How can I confirm delivery and return eligibility?",
        "a": "Check the current shipping and returns policies before placing an order. Delivery depends on your address and product availability; confirm any time-sensitive purchase with our team. Review the conditions for your chosen item rather than assuming every product has identical return eligibility."
      }
    ]
  },
  "rudraksha": {
    "seoTitle": "Buy Rudraksha Beads, Malas & Bracelets | Nakshatra Store",
    "seoDescription": "Explore Nepali and Indonesian Rudraksha beads, malas and bracelets. Compare mukhi counts, silver-capped designs and prices online at Nakshatra Store.",
    "h1": "Rudraksha Beads, Malas & Bracelets",
    "intro": "Explore Rudraksha beads, malas and bracelets in Nepali and Indonesian designs. Compare mukhi counts, bead sizes and silver-capped options, with exact specifications on each product page.",
    "about": "Compare individual Rudraksha beads, malas and bracelets by mukhi count, origin and finish. The range includes Nepali and Indonesian designs, with silver-capped options where specified. Check each product page for its exact origin, size, certification details and wearing guidance rather than assuming every bead has the same specifications.",
    "benefits": [
      {
        "t": "Mukhi options",
        "d": "Compare the mukhi count stated in each listing."
      },
      {
        "t": "Origin details",
        "d": "Explore Nepali and Indonesian designs."
      },
      {
        "t": "Wearing formats",
        "d": "Choose a single bead, mala or bracelet."
      }
    ],
    "faqs": [
      {
        "q": "How can I identify original Rudraksha?",
        "a": "Check the stated mukhi count, origin and dimensions and request any verification details offered for the specific item. Water or coin tests alone do not establish authenticity."
      },
      {
        "q": "Do you have Nepali and Indonesian Rudraksha?",
        "a": "The catalogue includes designs labelled Nepali and Indonesian. Read the individual page for its stated origin and specifications rather than assuming the entire range is from one place."
      },
      {
        "q": "How should I choose a Rudraksha mukhi?",
        "a": "Compare the available specifications and choose a wearable format. If you follow a devotional tradition, seek guidance within that practice; mukhi associations are not guaranteed health or financial outcomes."
      },
      {
        "q": "Where can I check authenticity and certification details?",
        "a": "Read the individual listing for material, origin and any available verification information. If a certificate is mentioned, ask which item it covers and request the details before buying. Do not assume every item in a collection has the same documentation."
      },
      {
        "q": "How can I confirm delivery and return eligibility?",
        "a": "Check the current shipping and returns policies before placing an order. Delivery depends on your address and product availability; confirm any time-sensitive purchase with our team. Review the conditions for your chosen item rather than assuming every product has identical return eligibility."
      }
    ]
  },
  "statues": {
    "seoTitle": "Buy God Statues & Puja Idols Online | Nakshatra Store",
    "seoDescription": "Explore Ganesha, Lakshmi, Shiva, Hanuman and Krishna statues for your home temple. Compare idol designs, materials and prices online at Nakshatra Store.",
    "h1": "Divine Statues for Your Home Temple",
    "intro": "Browse Ganesh idols and other deity statues for your home temple or devotional corner. Compare designs, dimensions, materials and finishes before selecting a piece for worship or gifting.",
    "about": "Select a deity statue for a home temple, devotional corner or gift. Browse Ganesha, Lakshmi, Shiva, Hanuman and Krishna designs, checking each listing for the actual material, finish and dimensions. Consider the size of your puja space and the care requirements of the chosen finish before ordering.",
    "benefits": [
      {
        "t": "Deity designs",
        "d": "Choose a pose suited to your devotional practice."
      },
      {
        "t": "Size and finish",
        "d": "Confirm dimensions and material before ordering."
      },
      {
        "t": "Care guidance",
        "d": "Follow instructions for the individual finish."
      }
    ],
    "faqs": [
      {
        "q": "How do I choose a Ganesh idol for my home temple?",
        "a": "Measure the space and compare the listed height, width, depth, pose and material. Confirm what accessories are included and choose according to your devotional preference."
      },
      {
        "q": "Are all metallic-looking idols solid brass?",
        "a": "Do not infer material from appearance alone. Read the individual listing for material and finish, and ask for clarification if these details are not stated."
      },
      {
        "q": "How do I clean a puja statue?",
        "a": "Follow the instructions for its material and coating. Avoid abrasive polish or soaking unless the product guidance permits it."
      },
      {
        "q": "Where can I check authenticity and certification details?",
        "a": "Read the individual listing for material, origin and any available verification information. If a certificate is mentioned, ask which item it covers and request the details before buying. Do not assume every item in a collection has the same documentation."
      },
      {
        "q": "How can I confirm delivery and return eligibility?",
        "a": "Check the current shipping and returns policies before placing an order. Delivery depends on your address and product availability; confirm any time-sensitive purchase with our team. Review the conditions for your chosen item rather than assuming every product has identical return eligibility."
      }
    ]
  },
  "karungali": {
    "seoTitle": "Buy Karungali Malas & Bracelets Online | Nakshatra Store",
    "seoDescription": "Explore Karungali black ebony malas, bracelets and pendant designs at Nakshatra Store. Compare bead sizes, finishes and prices for daily or devotional wear.",
    "h1": "Karungali Malas & Bracelets",
    "intro": "Explore Karungali malas, bracelets and pendant designs for daily or devotional wear. Compare bead sizes, lengths, finishes and the sourcing information available for each item before ordering.",
    "about": "Explore Karungali black ebony designs for devotional and everyday wear, from simple bracelets to malas with pendants or caps. Compare the bead size, length and finish in each listing. Protect wood jewellery from prolonged moisture, soap and perfume, and follow the specific care guidance supplied with your piece.",
    "benefits": [
      {
        "t": "Mala or bracelet",
        "d": "Compare devotional and everyday wearing formats."
      },
      {
        "t": "Bead size",
        "d": "Review 8mm and 10mm bracelet options."
      },
      {
        "t": "Wood care",
        "d": "Follow item-specific guidance for wood and fittings."
      }
    ],
    "faqs": [
      {
        "q": "How can I check an original Karungali mala?",
        "a": "Request material, sourcing and any available verification details for the specific item. Colour, price and household water tests are not sufficient proof of origin; avoid tests that could damage the jewellery."
      },
      {
        "q": "What is the difference between 8mm and 10mm Karungali bracelets?",
        "a": "Those labels describe bead diameter, not wrist circumference. Compare overall bracelet length and construction separately; 10mm beads have a more prominent appearance."
      },
      {
        "q": "Can I wear a Karungali mala daily?",
        "a": "Choose a comfortable length and follow the item’s care instructions. Avoid prolonged moisture and contact with perfume or harsh cleaners; remove it for activities that could damage wood or fittings."
      },
      {
        "q": "Where can I check authenticity and certification details?",
        "a": "Read the individual listing for material, origin and any available verification information. If a certificate is mentioned, ask which item it covers and request the details before buying. Do not assume every item in a collection has the same documentation."
      },
      {
        "q": "How can I confirm delivery and return eligibility?",
        "a": "Check the current shipping and returns policies before placing an order. Delivery depends on your address and product availability; confirm any time-sensitive purchase with our team. Review the conditions for your chosen item rather than assuming every product has identical return eligibility."
      }
    ]
  },
  "yantras": {
    "seoTitle": "Buy Shree, Kuber & Vastu Yantras | Nakshatra Store",
    "seoDescription": "Shop Shree Yantra, Kuber Yantra, Vastu and planetary yantras at Nakshatra Store. Compare sacred designs, materials, sizes and prices for your puja space.",
    "h1": "Shree, Kuber & Planetary Yantras",
    "intro": "Browse Shree Yantra, Kuber Yantra, Vastu and planetary designs for your puja space. Compare materials, dimensions and display formats, with traditional associations explained on the individual listings.",
    "about": "Choose a yantra by its traditional purpose, design, dimensions and material. Browse Shree, Kuber, Vastu and planetary yantras for a puja space or devotional display. Read the individual listing for placement and ritual guidance, and treat spiritual associations as matters of tradition rather than guaranteed results.",
    "benefits": [
      {
        "t": "Sacred designs",
        "d": "Compare Shree, Kuber and planetary designs."
      },
      {
        "t": "Display formats",
        "d": "Check dimensions and the type of piece."
      },
      {
        "t": "Devotional use",
        "d": "Follow guidance from your own tradition."
      }
    ],
    "faqs": [
      {
        "q": "What should I check before buying a Shree Yantra?",
        "a": "Check the design, material, dimensions and display format, plus any guidance or accessories supplied. Do not compare products solely by an advertised spiritual outcome."
      },
      {
        "q": "Where should I keep a Shree Yantra at home?",
        "a": "Use a clean, stable space suited to your devotional practice and the item’s dimensions. Direction and ritual guidance varies by tradition; consult the instructions for that piece."
      },
      {
        "q": "Are Shree Yantra and Kuber Yantra the same?",
        "a": "They are different traditional designs. Compare the actual product descriptions and choose according to your practice, available space and preferred format."
      },
      {
        "q": "Where can I check authenticity and certification details?",
        "a": "Read the individual listing for material, origin and any available verification information. If a certificate is mentioned, ask which item it covers and request the details before buying. Do not assume every item in a collection has the same documentation."
      },
      {
        "q": "How can I confirm delivery and return eligibility?",
        "a": "Check the current shipping and returns policies before placing an order. Delivery depends on your address and product availability; confirm any time-sensitive purchase with our team. Review the conditions for your chosen item rather than assuming every product has identical return eligibility."
      }
    ]
  }
};

export const seoFor = (slug: string): CollectionSeo | undefined => collectionSeo[slug];

// Keyword-led guidance supports buying decisions, not promises of spiritual outcomes.
export const collectionGuides: Record<string, { heading: string; text: string }[]> = {
  "best-sellers": [
    {
      "heading": "Choose by your daily routine",
      "text": "Decide how you intend to use the item before choosing a popular design. A bracelet is compact for everyday wear, a mala can support mantra counting, and a decorative tree or idol needs a suitable display space. Compare the material, bead size or dimensions on the individual page. A popular item is not automatically the right choice for everyone."
    },
    {
      "heading": "Compare before ordering",
      "text": "Check current availability, price and the specifications provided for your chosen product. For jewellery, review the listed length and fit; for home accessories, measure the shelf or desk first. Ask about any missing material or verification details before ordering. Traditional spiritual associations do not guarantee health, financial or personal outcomes."
    },
    {
      "heading": "Popular spiritual products: choose the right format first",
      "text": "Use this collection to compare popular formats, not as a substitute for checking product details. A bracelet suits someone looking for a compact wearable accessory, a mala may suit mantra practice, and a crystal tree or statue needs a suitable display area. Before comparing prices, decide which of those uses matters to you. Review material, dimensions, bead count where relevant, and availability on the individual product page. A place in the Best Sellers collection is not proof that an item is suitable for everyone, that it has a particular certificate, or that its spiritual associations guarantee a result."
    },
    {
      "heading": "Buying spiritual gifts without guessing the size",
      "text": "For jewellery gifts, confirm the recipient’s preferred format and check the listed fit rather than assuming all bracelets or necklaces share a standard size. For home accessories, compare the item’s dimensions with the intended shelf or desk. If you are unsure which material or design is appropriate, browse the dedicated collection for a more focused comparison. Check the current delivery and returns information before ordering for a particular occasion, and ask our team to clarify anything missing. Choose based on what the recipient can comfortably wear or display, not on an unsupported promise about health, wealth or relationships."
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
    },
    {
      "heading": "Pyrite, tiger eye, rose quartz or amethyst bracelet?",
      "text": "Choose a crystal bracelet by the appearance you enjoy, the stated material and the practical fit. Pyrite designs have a different visual character from tiger eye, rose quartz or amethyst, so compare product photographs alongside the actual specifications. A stone name does not tell you the bracelet circumference, bead diameter or fastening type. Check those details separately, particularly when buying a gift. If you are choosing around traditional crystal bracelet benefits, treat the symbolism as a personal or devotional preference rather than a promise of wealth, better sleep or improved health. The product that you can wear comfortably is a more practical choice than one chosen only for an advertised outcome."
    },
    {
      "heading": "How to wear a crystal bracelet for everyday use",
      "text": "Wear the bracelet on whichever wrist feels comfortable and does not interfere with a watch, work or other jewellery. Some spiritual traditions attach meaning to the left or right hand, but that is not a universal sizing or care rule. Before wearing a new piece, check that the fit is comfortable and that the thread, elastic or clasp is not under strain. Remove it for activities that expose it to impact, chemicals or prolonged moisture unless the specific instructions permit them. When comparing a Rudraksha bracelet with a crystal bracelet, also check the different material and fitting requirements; a single cleaning method should not be applied to both."
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
    },
    {
      "heading": "Tulsi Kanthi mala vs 108-bead japa mala",
      "text": "A Tulsi Kanthi mala is generally selected as a devotional necklace, while a japa mala is selected for counting repetitions during mantra practice. Do not assume that a necklace contains 108 beads simply because its title includes the word mala. The catalogue has Tulsi Kanthi designs labelled with different lengths, so choose the stated length that suits how you intend to wear it and confirm the construction on the product page. For japa, look for an explicit bead count and information about the guru bead. If a listing does not state these details, ask before purchasing. Choose according to your own practice rather than treating one design as universally appropriate."
    },
    {
      "heading": "Tulsi, Rudraksha or crystal mala: comparing materials",
      "text": "Begin by deciding whether you will mostly wear the mala or handle its beads while counting. Wood, textured Rudraksha beads and polished crystal beads offer different surfaces and appearances. Compare the bead dimensions, overall length, thread and any metal caps described in the listing. Two similarly named malas may differ in construction, so read both pages before comparing prices. More expensive does not necessarily mean better suited to your routine. Spiritual meanings can help inform a personal choice, but claims about Tulsi mala benefits or Rudraksha mala benefits should not be taken as evidence of a medical effect or a guaranteed life outcome."
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
    },
    {
      "heading": "Seven-chakra crystal tree or a single-stone design?",
      "text": "A seven-chakra crystal tree and a single-stone tree can create different visual effects on a desk or shelf. Compare the colours, stones and base described for each item, not just the collection photograph. If the listing gives a bead count, use it alongside the height and width: bead count alone is not a reliable measure of the finished size. A compact tree may be easier to display in a small workspace, while a larger arrangement needs enough clearance around its branches. Choose according to the actual dimensions and the room, rather than assuming one stone or a larger tree will produce a stronger spiritual result."
    },
    {
      "heading": "Where to place a crystal tree at home or in the office",
      "text": "For practical display, choose a stable shelf or desk where the base sits securely and the branches do not obstruct everyday movement. Keep delicate pieces away from shelf edges and from areas where children or pets could pull them down. People who follow Vastu or crystal traditions may also consider symbolic placement, but directions vary with the practice and the particular item. Check any instructions supplied with the tree instead of applying one universal direction to all stones. For a housewarming gift, ask about the recipient’s display space and colour preferences. Placement is a decorative or devotional choice, not a guarantee of prosperity."
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
    },
    {
      "heading": "Vastu items for home: start with the intended location",
      "text": "When comparing Vastu items for home, decide whether the object is intended for an entrance, a puja space, a desk or a shelf. Check its dimensions, weight if provided, and how it is installed. A hanging accessory needs a secure attachment point; a pyramid or tortoise figurine needs a level surface. Look at the material and finish too, especially in a location exposed to moisture or frequent handling. Buying several objects is not automatically more suitable than choosing one piece that fits the space. Use the product description to make a practical comparison and ask about any missing installation information before ordering."
    },
    {
      "heading": "Vastu products for office desks and gifting",
      "text": "For an office, choose an accessory that fits the available desk space without blocking paperwork, screens or walkways. A compact tabletop design and an entrance hanging serve different display needs, even if both are described as Vastu products. For gifting, compare dimensions and the recipient’s preferences rather than selecting only by a claimed benefit. Placement guidance belongs to a particular tradition and can differ by object. These products can be meaningful decorative accessories, but they should not replace structural safety checks, practical workspace improvements or professional advice about finances and wellbeing."
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
    },
    {
      "heading": "How to identify original Rudraksha before ordering",
      "text": "Begin with an explicit description of the bead, including its stated mukhi count, origin and dimensions. Ask for clear photographs and for any verification documentation that is actually offered for that item. If a certificate is available, check how it identifies the bead or product you are purchasing rather than assuming a generic certificate covers everything. A water test, price comparison or photograph alone cannot establish all authenticity claims. Avoid improvised tests that might damage the bead or its fittings. If the product description leaves its origin, treatment or capping material uncertain, request clarification before buying an original Rudraksha."
    },
    {
      "heading": "Nepali vs Indonesian Rudraksha: compare the actual listing",
      "text": "This catalogue includes both Nepali and Indonesian Rudraksha products. Origin is one useful comparison point, but it does not replace a review of mukhi count, bead dimensions and the format you want to wear. Compare a single bead with another single bead, or a mala with a comparable mala, rather than treating their prices as interchangeable. Silver-capped designs also need a review of what is specified about the cap and how the bead is intended to be worn. Select a size and construction suited to your routine. Traditional mukhi associations can be meaningful to practitioners, but neither origin nor mukhi count guarantees health, financial or academic results."
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
    },
    {
      "heading": "Ganesh idol and other puja statues: compare size and material",
      "text": "When choosing a Ganesh idol or another deity statue, begin with the height, width and depth available in your home temple. Allow room for safe handling and for the other items you already use during worship. Confirm the actual material and finish in the product listing: a metallic appearance does not by itself establish that a statue is solid brass or another specific metal. Compare the pose and base along with the dimensions. A compact desk idol and a home-temple murti may depict the same deity but suit different spaces. Check whether a stand or accessories are included before placing your order."
    },
    {
      "heading": "Choosing a deity statue as a devotional gift",
      "text": "Consider the recipient’s devotional preference, available display space and ability to care for the finish. A photograph can show the design clearly without conveying its actual scale, so review measurements before purchasing. If the gift is needed for a specific occasion, confirm current availability and delivery expectations with the team. Do not assume a particular installation ceremony or cleaning method is appropriate for every statue; practices differ and materials need different care. Select a piece for its stated construction and devotional relevance rather than an assurance that keeping it will produce a specific financial or personal outcome."
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
    },
    {
      "heading": "Original Karungali mala: what should you ask the seller?",
      "text": "When shopping for an original Karungali mala, start with the information attached to the actual item, not a general claim about the whole range. Ask what wood is specified, whether the beads have a coating, what fittings are included and what sourcing or verification information is available. Close-up photographs can help you assess the finish and construction, but they cannot independently establish the botanical identity of wood. A dark colour, a heavy bead or a higher price is not proof of authenticity. Avoid soaking, heating or scratching jewellery to test it at home: these steps can damage the beads, thread or metal parts without proving their origin. If the details remain unclear, ask for clarification before ordering."
    },
    {
      "heading": "Karungali bracelet 8mm or 10mm: choosing a comfortable fit",
      "text": "The catalogue includes Karungali bracelet designs labelled 8mm and 10mm. These measurements describe bead size, not wrist circumference. An 8mm design may suit someone who prefers a less bulky bracelet, while 10mm beads create a more prominent look; neither size guarantees a particular fit. Check the bracelet length and fastening information separately, especially if you wear it alongside a watch. For a Karungali mala, compare the necklace length and pendant or cap details rather than using bracelet sizing as a guide. Decide between daily wear and devotional use first, then compare the relevant products and their current prices."
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
    },
    {
      "heading": "Shree Yantra, Kuber Yantra or a planetary yantra?",
      "text": "Start with the traditional design you want to include in your practice, then compare the physical product. Shree Yantra, Kuber Yantra, Vastu and planetary designs are not interchangeable names for the same item. Check whether the listing describes a plate, framed piece or another format, and confirm its dimensions and material. For a small puja shelf, the display arrangement may matter as much as the design. If you are researching Shree Yantra benefits, separate traditional devotional associations from proven product specifications. A yantra can carry spiritual meaning, but its purchase does not establish that prosperity or other outcomes will follow."
    },
    {
      "heading": "Where to keep a Shree Yantra at home",
      "text": "Choose a clean, stable place suited to the item’s dimensions and your devotional routine. Some practitioners follow direction-based guidance, but requirements vary by tradition and the specific yantra; follow your trusted practice and any instructions supplied with the product. Check whether the piece needs a stand or hanging attachment before ordering. Keep it away from locations where its engraving, print or finish could be scratched or exposed to moisture. For ritual questions, ask for guidance rather than assuming every yantra needs the same ceremony. Placement should also respect everyday safety and available space."
    }
  ]
};
