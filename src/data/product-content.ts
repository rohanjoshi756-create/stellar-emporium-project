/**
 * Category-specific PDP content.
 * Every product page pulls its intro, benefits, specs, ritual, mantra, box
 * contents and FAQs from here (keyed by collection handle) so pages are no
 * longer identical. Title-derived attributes (mukhi, bead size, count) are
 * merged into the spec table at render time.
 */

export type ProductContent = {
  eyebrow: string;
  intro: (title: string) => string;
  ritualTitle: string;
  ritualCopy: string;
  ritualPoints: string[];
  benefits: Array<{ icon: string; title: string; copy: string }>;
  specs: Array<[string, string]>;
  howToTitle: string;
  howTo: string[];
  mantra: { script: string; roman: string };
  inTheBox: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const base = {
  ritualTitle: "The energisation ritual",
  mantra: { script: "ॐ नमः शिवाय", roman: "Om Namah Shivaya" },
};

export const productContent: Record<string, ProductContent> = {
  rudraksha: {
    eyebrow: "Sacred Rudraksha",
    intro: (t) =>
      `${t} is a naturally grown Rudraksha bead sourced from the Himalayan belt of Nepal and Indonesia. Each bead is X-ray scanned to confirm its natural mukhi lines and internal compartments, then energised with the prescribed Rudra mantras before it is dispatched to you.`,
    ritualTitle: "How your Rudraksha is awakened",
    ritualCopy:
      "Rudraksha is considered dormant until it is cleansed and charged. Ours goes through milk and Gangajal abhishek, followed by mantra japa specific to its mukhi count.",
    ritualPoints: [
      "✓ Panchamrit & Gangajal abhishek",
      "✓ Mukhi-specific beej mantra japa (108 times)",
      "✓ Rudrabhishek on a Monday or Shivratri",
    ],
    benefits: [
      { icon: "🕉️", title: "Shiva's blessing", copy: "Traditionally worn to invoke Lord Shiva's protection and inner stillness." },
      { icon: "🧘", title: "Calm nervous system", copy: "Wearers report lower stress, steadier breathing and deeper sleep." },
      { icon: "🛡️", title: "Negativity shield", copy: "Used for centuries to deflect drishti and heavy environments." },
      { icon: "🎯", title: "Focus & clarity", copy: "Helps quieten mental chatter during work, study and sadhana." },
    ],
    specs: [
      ["Origin", "Nepal / Indonesia (hand-picked)"],
      ["Bead type", "Natural, untreated Rudraksha"],
      ["Testing", "X-ray + water test verified"],
      ["Energisation", "Rudrabhishek & mantra japa"],
      ["Stringing", "Pure thread / silver capping available"],
    ],
    howToTitle: "How to wear & care",
    howTo: [
      "Wear on a Monday morning after a bath, facing east.",
      "Chant the Rudraksha mantra 11 times before the first wear.",
      "Avoid wearing during sleep, bathing or in impure places.",
      "Oil the bead with mustard or olive oil once a month.",
    ],
    mantra: { script: "ॐ नमः शिवाय", roman: "Om Namah Shivaya" },
    inTheBox: ["Energised Rudraksha", "Lab authenticity certificate", "Pooja kit & mantra card", "Premium wooden gift box"],
    faqs: [
      { question: "Is this Rudraksha natural or lab-made?", answer: "100% natural and untreated. Every bead is X-ray scanned at a government-approved lab and the report travels inside your box." },
      { question: "Who can wear Rudraksha?", answer: "Anyone can wear Rudraksha regardless of age, gender or faith. Only basic purity rules — remove during bath and sleep — are recommended." },
      { question: "Should I wear it in silver, gold or thread?", answer: "All three are valid. Thread is the most traditional; silver capping is preferred for daily wear as it protects the bead." },
      { question: "Does it need to be energised again later?", answer: "No. It arrives fully energised. You may simply chant the mantra weekly to maintain your connection with the bead." },
      { question: "Can I wear it with other malas or gemstones?", answer: "Yes, Rudraksha is compatible with almost every gemstone and mala. If you're unsure, our astrologers will confirm on WhatsApp." },
    ],
  },

  mala: {
    eyebrow: "Japa mala",
    intro: (t) =>
      `${t} is a hand-knotted mala strung bead by bead for japa and daily wear. The count, knotting and sumeru bead follow traditional specifications so your mantra count stays accurate through every round.`,
    ritualTitle: "Strung and charged by hand",
    ritualCopy:
      "Each mala is knotted between beads by our artisans, then placed on the altar for a full round of mantra japa before dispatch.",
    ritualPoints: ["✓ Hand-knotted between every bead", "✓ 108 + 1 sumeru bead count", "✓ Charged with a full japa round"],
    benefits: [
      { icon: "📿", title: "Accurate japa", copy: "Traditional 108-bead count with a sumeru bead to mark each round." },
      { icon: "🧘", title: "Meditative rhythm", copy: "Knotted spacing gives your fingers a steady, calming pace." },
      { icon: "✨", title: "Daily wearable", copy: "Light enough to wear all day, strong enough for years of japa." },
      { icon: "🛡️", title: "Protective energy", copy: "Traditionally worn to keep your aura clean through the day." },
    ],
    specs: [
      ["Bead count", "108 + 1 sumeru"],
      ["Stringing", "Hand-knotted, high-tensile thread"],
      ["Finish", "Natural, unpolished beads"],
      ["Energisation", "Mantra japa before dispatch"],
    ],
    howToTitle: "How to do japa with this mala",
    howTo: [
      "Hold the mala on your middle finger and roll with the thumb.",
      "Never cross the sumeru bead — reverse direction instead.",
      "Complete 108 repetitions for one full round.",
      "Store in the cotton pouch when not in use.",
    ],
    mantra: { script: "ॐ नमः शिवाय", roman: "Om Namah Shivaya" },
    inTheBox: ["Energised japa mala", "Authenticity certificate", "Cotton mala pouch", "Premium gift box"],
    faqs: [
      { question: "Can I wear this mala all day?", answer: "Yes. It's strung for daily wear. Just remove it during bathing and sleeping to keep it clean and long-lasting." },
      { question: "Why is it knotted between beads?", answer: "Knots protect the beads from rubbing, keep the count tactile during japa, and prevent all beads from scattering if the thread ever breaks." },
      { question: "What if the thread breaks?", answer: "Send it back and we'll restring it for you at cost. A broken mala is not inauspicious — it simply needs restringing." },
      { question: "Which mantra should I chant?", answer: "Om Namah Shivaya suits every mala. For a mantra matched to your chart, chat with our astrologer on WhatsApp." },
      { question: "Is it energised before shipping?", answer: "Yes, every mala receives a full japa round on our altar before it is packed." },
    ],
  },

  karungali: {
    eyebrow: "Karungali · Ebony wood",
    intro: (t) =>
      `${t} is crafted from genuine Karungali (Ebony) wood, revered in South Indian tradition as one of the strongest protective woods. Authentic Karungali sinks in water and darkens with wear — both signs you can verify at home.`,
    ritualTitle: "Purified before it reaches you",
    ritualCopy:
      "Raw Karungali is cured, hand-turned and then purified with turmeric water and camphor aarti before mantra charging.",
    ritualPoints: ["✓ Genuine sinking Ebony wood", "✓ Turmeric water purification", "✓ Camphor aarti & mantra charging"],
    benefits: [
      { icon: "🛡️", title: "Strong protection", copy: "Traditionally worn against negative energy and evil eye." },
      { icon: "🔥", title: "Grounding", copy: "Helps settle restlessness, anger and scattered thinking." },
      { icon: "💪", title: "Body balance", copy: "Believed to support circulation and body heat regulation." },
      { icon: "🌑", title: "Ancestral tradition", copy: "Worn for generations across Tamil Nadu and Kerala households." },
    ],
    specs: [
      ["Material", "Genuine Karungali (Diospyros ebenum)"],
      ["Verification", "Sink test + grain inspection"],
      ["Finish", "Hand-polished, no artificial dye"],
      ["Energisation", "Turmeric purification & mantra"],
    ],
    howToTitle: "How to wear & care",
    howTo: [
      "Wear on a Tuesday or Friday morning after a bath.",
      "Keep it dry — remove before swimming or bathing.",
      "Wipe with a dry cloth; apply a drop of coconut oil monthly.",
      "It naturally darkens over time — that is a sign of genuine Ebony.",
    ],
    mantra: { script: "ॐ श्री हनुमते नमः", roman: "Om Shri Hanumate Namah" },
    inTheBox: ["Energised Karungali item", "Authenticity certificate", "Care & mantra card", "Premium gift box"],
    faqs: [
      { question: "How do I know it's real Karungali?", answer: "Genuine Karungali sinks in water and leaves no colour when rubbed on a wet cloth. Test it at home — if it fails, we refund fully." },
      { question: "Will the colour fade?", answer: "No. Real Ebony has no dye; it actually deepens in colour with body oils and wear." },
      { question: "Can it get wet?", answer: "Occasional splashes are fine, but avoid prolonged water contact to preserve the polish." },
      { question: "Who should wear Karungali?", answer: "Anyone seeking protection and grounding. It is especially recommended for those affected by drishti or frequent negativity." },
      { question: "Can I wear it with Rudraksha?", answer: "Yes, Karungali and Rudraksha are commonly worn together with no conflict." },
    ],
  },

  bracelets: {
    eyebrow: "Crystal bracelet",
    intro: (t) =>
      `${t} is made with natural, hand-sorted crystal beads — no glass, no dyed stones. Each bracelet is cleansed, charged under moonlight and set with an intention before it is packed for you.`,
    ritualTitle: "Cleansed, charged, intention-set",
    ritualCopy:
      "Crystals absorb energy in transit. We cleanse each bracelet with sage and salt, charge it overnight, and seal it with a mantra so it reaches you clear.",
    ritualPoints: ["✓ Sage & salt cleansing", "✓ Overnight moonlight charging", "✓ Intention-setting mantra"],
    benefits: [
      { icon: "💎", title: "Natural stones", copy: "Genuine crystal beads, hand-sorted for colour and clarity." },
      { icon: "🌙", title: "Emotional balance", copy: "Worn to steady mood, anxiety and everyday overwhelm." },
      { icon: "🧲", title: "Attraction", copy: "Traditionally used to draw abundance, love or confidence." },
      { icon: "🪶", title: "Everyday comfort", copy: "Elastic fit that stays comfortable through a full day." },
    ],
    specs: [
      ["Bead size", "8 mm (standard)"],
      ["Stone", "Natural, untreated crystal"],
      ["Fit", "Stretchable elastic, 7–7.5 inches"],
      ["Energisation", "Cleansed & charged before dispatch"],
    ],
    howToTitle: "How to wear & recharge",
    howTo: [
      "Wear on your left wrist to receive, right wrist to project energy.",
      "Set your intention while holding it for the first time.",
      "Recharge monthly under moonlight or on a selenite plate.",
      "Remove before applying perfume, sanitiser or during a bath.",
    ],
    mantra: { script: "ॐ श्रीं ह्रीं क्लीं", roman: "Om Shreem Hreem Kleem" },
    inTheBox: ["Energised crystal bracelet", "Authenticity certificate", "Crystal care card", "Premium gift box"],
    faqs: [
      { question: "Are the stones natural or glass?", answer: "100% natural stone. We never use dyed glass or reconstituted beads, and each batch is lab-checked." },
      { question: "Which wrist should I wear it on?", answer: "Left wrist to absorb the stone's energy, right wrist to send it outward. Most people wear it on the left." },
      { question: "How often should I recharge it?", answer: "Once a month is enough — moonlight overnight, or a few hours on a selenite plate." },
      { question: "Will it fit my wrist?", answer: "The elastic fits 7–7.5 inch wrists comfortably. Message us on WhatsApp for a custom size at no extra cost." },
      { question: "Can I wear more than one crystal bracelet?", answer: "Yes. Combining stones is common — ask our astrologer which pairing suits your chart." },
    ],
  },

  "crystal-trees": {
    eyebrow: "Vastu crystal tree",
    intro: (t) =>
      `${t} is hand-wired with natural crystal chips on a metal base, designed to sit in the wealth or relationship corner of your home. Each tree is cleansed and activated for its placement direction before dispatch.`,
    ritualTitle: "Activated for your space",
    ritualCopy:
      "A crystal tree works on the energy of a room, not a person. We cleanse the chips, activate the base with Vastu mantras, and seal it for its intended direction.",
    ritualPoints: ["✓ Chip-by-chip cleansing", "✓ Vastu direction activation", "✓ Mantra sealing before packing"],
    benefits: [
      { icon: "🌳", title: "Wealth corner", copy: "Placed in the north or south-east to invite steady prosperity." },
      { icon: "🏠", title: "Home harmony", copy: "Used to soften arguments and stagnant energy in shared spaces." },
      { icon: "✨", title: "Positive ambience", copy: "A visible reminder of intention on any desk, shelf or altar." },
      { icon: "🎁", title: "Auspicious gift", copy: "A favourite housewarming and Diwali gift across India." },
    ],
    specs: [
      ["Material", "Natural crystal chips, metal wire"],
      ["Base", "Polished stone / metal base"],
      ["Placement", "North, east or south-east corner"],
      ["Energisation", "Vastu mantra activation"],
    ],
    howToTitle: "Where to place it",
    howTo: [
      "Place in the north (wealth) or south-east (prosperity) corner.",
      "Keep it at eye level on a clean, uncluttered surface.",
      "Dust weekly with a dry brush — never submerge in water.",
      "Recharge by placing near a window on a full-moon night.",
    ],
    mantra: { script: "ॐ श्रीं महालक्ष्म्यै नमः", roman: "Om Shreem Mahalakshmyai Namah" },
    inTheBox: ["Energised crystal tree", "Authenticity certificate", "Vastu placement guide", "Protective gift packaging"],
    faqs: [
      { question: "Where should I keep the crystal tree?", answer: "North or south-east corner of the living room or office for wealth; south-west for relationship harmony. A placement guide is included." },
      { question: "Are the crystals natural?", answer: "Yes, all chips are natural stone. Colour and shape vary slightly from piece to piece — that's a sign of genuine crystal." },
      { question: "How do I clean it?", answer: "Dust with a soft dry brush. Avoid water and chemical cleaners, which can loosen the wiring." },
      { question: "Does it need to be recharged?", answer: "Placing it near moonlight once a month is enough to keep it energetically clear." },
      { question: "Is it safe to ship?", answer: "Each tree is foam-cushioned and double-boxed. If it arrives damaged, we replace it free." },
    ],
  },

  yantras: {
    eyebrow: "Sacred yantra",
    intro: (t) =>
      `${t} is engraved to precise geometric proportions, because a yantra only works when its lines and angles are accurate. Ours are etched on high-purity metal and installed with the prescribed pran-pratishtha ritual.`,
    ritualTitle: "Pran-pratishtha before dispatch",
    ritualCopy:
      "An uninstalled yantra is just metal. We perform pran-pratishtha with the deity's beej mantra so it arrives ready to be placed on your altar.",
    ritualPoints: ["✓ Geometry verified against shastra", "✓ Pran-pratishtha with beej mantra", "✓ Kumkum & akshat sanctification"],
    benefits: [
      { icon: "🔯", title: "Precise geometry", copy: "Engraved to shastra-accurate proportions, not decorative prints." },
      { icon: "🏠", title: "Altar energy", copy: "Anchors a steady, protective field in your puja space." },
      { icon: "📈", title: "Focused intention", copy: "Each yantra serves one clear purpose — wealth, protection or study." },
      { icon: "🙏", title: "Ready to worship", copy: "Arrives installed, so you can begin puja the same day." },
    ],
    specs: [
      ["Material", "High-purity metal plate"],
      ["Engraving", "Shastra-accurate geometry"],
      ["Installation", "Pran-pratishtha performed"],
      ["Placement", "East or north-facing altar"],
    ],
    howToTitle: "How to install & worship",
    howTo: [
      "Place on a clean altar facing east or north.",
      "Offer kumkum, akshat and a ghee lamp on the first day.",
      "Chant the beej mantra 11 times each morning.",
      "Wipe with a dry cloth; never use metal polish or acid.",
    ],
    mantra: { script: "ॐ श्रीं ह्रीं श्रीं", roman: "Om Shreem Hreem Shreem" },
    inTheBox: ["Installed yantra", "Authenticity certificate", "Puja & mantra instructions", "Premium gift box"],
    faqs: [
      { question: "Is the yantra already energised?", answer: "Yes. Pran-pratishtha is performed before dispatch, so you can place it on your altar and begin puja immediately." },
      { question: "Which direction should it face?", answer: "East or north-facing is ideal. Detailed placement instructions are included in the box." },
      { question: "How do I clean it?", answer: "Wipe gently with a dry or slightly damp cloth. Avoid chemical polish, which damages the engraving." },
      { question: "Will it tarnish over time?", answer: "Natural metals may develop a patina. That does not affect the yantra's energy; a dry wipe restores the shine." },
      { question: "Can I keep more than one yantra?", answer: "Yes, but keep each on a separate base and avoid stacking them on top of one another." },
    ],
  },

  statues: {
    eyebrow: "Idol & statue",
    intro: (t) =>
      `${t} is hand-finished by temple artisans, with attention to mudra, posture and proportion as prescribed in the shilpa shastra. It is sanctified before dispatch so it is ready for your altar.`,
    ritualTitle: "Sanctified by temple priests",
    ritualCopy:
      "Every idol receives abhishek and the deity's beej mantra invocation before it is wrapped, so it arrives as a worship-ready murti.",
    ritualPoints: ["✓ Abhishek with panchamrit", "✓ Deity beej mantra invocation", "✓ Kumkum & flower offering"],
    benefits: [
      { icon: "🛕", title: "Worship-ready", copy: "Sanctified before dispatch — begin your puja on day one." },
      { icon: "🎨", title: "Artisan finish", copy: "Hand-detailed features, correct mudras and proportions." },
      { icon: "🏠", title: "Home temple", copy: "Anchors a devotional focal point in your puja room." },
      { icon: "🎁", title: "Meaningful gift", copy: "A classic gift for housewarmings, weddings and festivals." },
    ],
    specs: [
      ["Material", "Brass / marble dust / resin (as listed)"],
      ["Craft", "Hand-finished by temple artisans"],
      ["Sanctification", "Abhishek & mantra invocation"],
      ["Placement", "East or north-facing altar"],
    ],
    howToTitle: "How to place & worship",
    howTo: [
      "Place at eye level on a clean altar, facing east or north.",
      "Offer a ghee lamp, incense and fresh flowers daily if possible.",
      "Keep the surroundings clean and clutter-free.",
      "Dust with a soft dry cloth; avoid harsh cleaners.",
    ],
    mantra: { script: "ॐ श्री गणेशाय नमः", roman: "Om Shri Ganeshaya Namah" },
    inTheBox: ["Sanctified idol", "Authenticity certificate", "Puja instructions card", "Protective gift packaging"],
    faqs: [
      { question: "Is the idol already sanctified?", answer: "Yes, abhishek and mantra invocation are performed before dispatch. You can place it on your altar right away." },
      { question: "Which direction should the idol face?", answer: "The idol should face west or north so you face east or south while worshipping." },
      { question: "How do I clean the idol?", answer: "Use a soft dry cloth. For brass, an occasional lemon-and-salt wipe followed by drying restores the shine." },
      { question: "Is the packaging safe for a fragile idol?", answer: "Each idol is foam-wrapped and double-boxed. Damaged deliveries are replaced free of cost." },
      { question: "Can I gift this?", answer: "Yes, it ships in a premium box with no invoice inside. Add a gift note at checkout." },
    ],
  },

  vastu: {
    eyebrow: "Vastu remedy",
    intro: (t) =>
      `${t} is a traditional Vastu remedy meant to correct the energy of a specific direction in your home or workplace. It arrives cleansed, activated and with a placement guide for the correct corner.`,
    ritualTitle: "Activated for direction",
    ritualCopy:
      "Vastu items work on space. Ours are cleansed and activated with direction-specific mantras so they start working the moment they are placed correctly.",
    ritualPoints: ["✓ Salt & camphor cleansing", "✓ Direction-specific mantra activation", "✓ Placement guide included"],
    benefits: [
      { icon: "🧭", title: "Direction correction", copy: "Targets the specific corner causing energy imbalance." },
      { icon: "🏠", title: "Household peace", copy: "Used to reduce friction, delays and stagnation at home." },
      { icon: "💼", title: "Work & wealth", copy: "Popular in offices and shops to support steady growth." },
      { icon: "🛡️", title: "Protection", copy: "Shields the entrance and main rooms from heavy energy." },
    ],
    specs: [
      ["Purpose", "Vastu dosh correction"],
      ["Material", "As listed — metal, crystal or wood"],
      ["Activation", "Direction-specific mantra"],
      ["Placement", "Per included Vastu guide"],
    ],
    howToTitle: "How to place it",
    howTo: [
      "Identify the direction mentioned in the included guide.",
      "Place on a clean surface, away from clutter and dustbins.",
      "Light a ghee lamp nearby on the day of installation.",
      "Do not shift it frequently once installed.",
    ],
    mantra: { script: "ॐ वास्तु पुरुषाय नमः", roman: "Om Vastu Purushaya Namah" },
    inTheBox: ["Activated Vastu item", "Authenticity certificate", "Vastu placement guide", "Premium packaging"],
    faqs: [
      { question: "Do I need a Vastu consultant to place this?", answer: "No. A direction-wise placement guide is included. For a home-specific reading, our astrologers help free on WhatsApp." },
      { question: "How long does it take to show effect?", answer: "Most customers report a change in the feel of the space within 3–6 weeks of correct placement." },
      { question: "Can I move it later?", answer: "Try not to. Once installed in the right direction, frequent shifting weakens the intent behind the placement." },
      { question: "Does it need maintenance?", answer: "Just keep it clean and dust-free. No re-energisation is required." },
      { question: "Is it suitable for offices and shops?", answer: "Yes, the same placement logic applies to commercial spaces." },
    ],
  },
};

export const defaultProductContent: ProductContent = {
  eyebrow: "Certified & energised",
  intro: (t) =>
    `${t} is hand-selected, verified at a government-approved lab and energised by our astrologers with Vedic mantras before it is dispatched to you.`,
  ritualTitle: base.ritualTitle,
  ritualCopy:
    "Recorded inside our puja room. Real priests, real mantras, real abhishek — every order is energised before dispatch.",
  ritualPoints: ["✓ 11-step traditional energisation", "✓ Personal naam-gotra during puja (optional)", "✓ Puja video shared on WhatsApp"],
  benefits: [
    { icon: "👑", title: "Complete protection", copy: "Aligned to your planetary chart so every energy works in your favour." },
    { icon: "🪄", title: "Manifestation", copy: "Worn for generations to attract abundance alongside spiritual clarity." },
    { icon: "🧘", title: "Calm & focus", copy: "Customers report steadier sleep and sharper focus within weeks." },
    { icon: "🛡️", title: "Negativity shield", copy: "Traditionally used to deflect drishti and stagnant home energy." },
  ],
  specs: [
    ["Sourcing", "Nepal & India, hand-selected"],
    ["Energisation", "Vedic puja before dispatch"],
    ["Certification", "Govt.-approved lab certificate"],
  ],
  howToTitle: "How to use & care",
  howTo: [
    "Begin on a Monday morning after a bath.",
    "Chant the mantra 11 times before first use.",
    "Treat it as sacred — keep it clean and respected.",
  ],
  mantra: base.mantra,
  inTheBox: ["Authenticity certificate", "Pooja kit & instructions", "Premium wooden gift box"],
  faqs: [
    { question: "Is this product certified?", answer: "Yes. Every item is verified at a government-approved lab and the certificate travels inside your box." },
    { question: "Is it energised before dispatch?", answer: "Yes, our priests perform the full puja before your order is packed." },
    { question: "How long does delivery take?", answer: "Dispatch within 24 hours; delivery in 2–5 working days across India." },
    { question: "Can I return it?", answer: "Yes, 7-day easy returns on unused items in original packaging." },
    { question: "Can I speak to an astrologer first?", answer: "Absolutely — message us on WhatsApp and our astrologer will guide you free of cost." },
  ],
};

export const contentForCollection = (handle: string): ProductContent =>
  productContent[handle] ?? defaultProductContent;

/** Attributes derived from the product title (mukhi, bead size, bead count). */
export function derivedSpecs(title: string): Array<[string, string]> {
  const out: Array<[string, string]> = [];
  const mukhi = title.match(/(\d+|एक|ek|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|fourteen)[\s-]*mukhi/i);
  if (mukhi) out.push(["Mukhi (faces)", `${mukhi[1]} Mukhi`]);
  const mm = title.match(/(\d{1,2}(?:\.\d)?)\s*mm/i);
  if (mm) out.push(["Bead size", `${mm[1]} mm`]);
  const count = title.match(/\b(108|54|27)\b/);
  if (count) out.push(["Bead count", `${count[1]} beads`]);
  const inch = title.match(/(\d{1,2}(?:\.\d)?)\s*(?:inch|inches|")/i);
  if (inch) out.push(["Size", `${inch[1]} inch`]);
  return out;
}
