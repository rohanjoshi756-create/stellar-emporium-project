/**
 * product-copy.ts — per-PRODUCT copy and SEO.
 *
 * Category content (src/data/product-content.ts) made pages category-unique;
 * this layer makes every single product page unique by deriving attributes
 * from the product title (material, mukhi, size, bead count, item form,
 * intent) and composing intro copy, USP highlights, spec rows, FAQs and
 * search metadata from them.
 *
 * Shopify note: on migration each field maps to a product metafield
 * (custom.intro, custom.highlights, custom.faqs, seo.title, seo.description).
 * Nothing here is random — output is deterministic per handle so search
 * engines always see the same text.
 */
import type { Product } from "./products";
import { formatPrice } from "./products";

/* ------------------------------------------------------------------ */
/* Attribute dictionaries                                              */
/* ------------------------------------------------------------------ */

type Material = {
  key: string;
  /** Words matched (lowercase) in the product title. */
  match: string[];
  label: string;
  /** One-line description of the material used in the intro. */
  essence: string;
  /** Primary intent keyword, e.g. "wealth & money flow". */
  intent: string;
  /** Traditional benefits, used for highlights + benefit copy. */
  benefits: string[];
  care: string;
};

const MATERIALS: Material[] = [
  { key: "pyrite", match: ["pyrite", "fool's gold"], label: "Pyrite", essence: "a metallic golden stone long called the merchant's stone", intent: "wealth, cash flow and business growth", benefits: ["Attracts money flow and new business", "Builds confidence in negotiations", "Blocks financial drain and overspending"], care: "Keep pyrite away from water — wipe with a dry cloth and charge in sunlight for an hour." },
  { key: "citrine", match: ["citrine", "sunela"], label: "Citrine", essence: "the sun-bright stone of abundance", intent: "prosperity, optimism and savings", benefits: ["Supports steady income and savings", "Lifts mood and motivation", "Traditionally kept in cash lockers"], care: "Charge in early morning sunlight; avoid harsh chemicals." },
  { key: "amethyst", match: ["amethyst", "jamunia"], label: "Amethyst", essence: "the violet stone of calm and higher clarity", intent: "peace, sleep and intuition", benefits: ["Calms overthinking and anxiety", "Supports deeper sleep", "Aids meditation and intuition"], care: "Cleanse in moonlight; keep out of long direct sunlight to protect the colour." },
  { key: "rose-quartz", match: ["rose quartz", "rose-quartz"], label: "Rose Quartz", essence: "the pink heart stone of love", intent: "love, harmony and self-worth", benefits: ["Opens the heart to love and forgiveness", "Softens conflict at home", "Builds gentle self-confidence"], care: "Rinse under running water weekly and set your intention while wearing it." },
  { key: "tiger-eye", match: ["tiger eye", "tiger-eye", "tigereye"], label: "Tiger Eye", essence: "the banded golden-brown stone of courage", intent: "courage, focus and protection", benefits: ["Strengthens willpower and decisions", "Protects while travelling", "Keeps focus during long work hours"], care: "Wipe dry after use; recharge on a bed of rice or in moonlight." },
  { key: "black-tourmaline", match: ["tourmaline", "black tourmaline"], label: "Black Tourmaline", essence: "the classic shielding stone", intent: "protection from negativity", benefits: ["Deflects drishti and heavy environments", "Grounds anxious energy", "Popular for workplaces and travel"], care: "Cleanse weekly under running water or with incense smoke." },
  { key: "jade", match: ["jade", "aventurine"], label: "Green Jade / Aventurine", essence: "the green stone of luck and opportunity", intent: "luck, growth and new opportunities", benefits: ["Invites opportunity and lucky breaks", "Supports growth in career and studies", "Calming for the heart"], care: "Cleanse in moonlight; a soft dry cloth keeps the polish." },
  { key: "lapis", match: ["lapis", "lazuli"], label: "Lapis Lazuli", essence: "the deep blue stone of truth and expression", intent: "communication and wisdom", benefits: ["Improves clarity of speech", "Supports study and learning", "Calms the mind before big conversations"], care: "Never soak in water; wipe with a dry cloth." },
  { key: "moonstone", match: ["moonstone", "chandrakant"], label: "Moonstone", essence: "the milky stone of emotional balance", intent: "emotional balance and intuition", benefits: ["Softens mood swings", "Supports feminine energy and fertility beliefs", "Calming for sleep"], care: "Charge in full-moon light; store separately to avoid scratches." },
  { key: "clear-quartz", match: ["clear quartz", "sphatik", "crystal quartz"], label: "Sphatik / Clear Quartz", essence: "the master crystal that amplifies every intention", intent: "clarity and amplification", benefits: ["Amplifies the effect of other stones", "Clears mental fog", "Traditional choice for Lakshmi puja"], care: "Rinse in clean water and keep in sunlight briefly to recharge." },
  { key: "garnet", match: ["garnet"], label: "Garnet", essence: "the deep red stone of vitality", intent: "energy, passion and stamina", benefits: ["Restores energy and drive", "Supports circulation beliefs", "Strengthens commitment in relationships"], care: "Wipe dry; avoid perfumes and harsh cleaners." },
  { key: "turquoise", match: ["turquoise", "firoza"], label: "Turquoise (Firoza)", essence: "the sky-blue stone of good fortune", intent: "good fortune and protection", benefits: ["Traditionally worn for luck and safe travel", "Calms the throat chakra and speech", "Believed to warn against harm"], care: "Keep away from oil, soap and perfume — it is a porous stone." },
  { key: "smokey", match: ["smokey", "smoky"], label: "Smokey Quartz", essence: "the grounding brown-grey quartz", intent: "grounding and stress relief", benefits: ["Grounds scattered thoughts", "Absorbs stress after long days", "Supports letting go of old patterns"], care: "Cleanse under running water and dry in shade." },
  { key: "karungali", match: ["karungali", "ebony", "kaya", "black wood"], label: "Karungali (Ebony)", essence: "genuine seasoned black ebony, the classic South Indian protection wood", intent: "protection from evil eye and negativity", benefits: ["Shields against drishti and negative energy", "Grounds restlessness and anger", "Traditionally worn by sadhus for tapas"], care: "Keep away from soap, oil and perfume; wipe dry after a bath." },
  { key: "rudraksha", match: ["rudraksha", "mukhi"], label: "Nepali Rudraksha", essence: "a naturally grown Himalayan Rudraksha bead", intent: "peace of mind and Shiva's protection", benefits: ["Calms the nervous system", "Deflects negativity", "Deepens focus in meditation and study"], care: "Oil once a month with mustard or olive oil; remove during bathing and sleep." },
  { key: "tulsi", match: ["tulsi", "chandan", "sandalwood", "red chandan"], label: "Tulsi / Chandan", essence: "sacred wood revered in Vaishnav tradition", intent: "devotion and purity", benefits: ["Traditional for naam japa and bhakti", "Keeps the aura light and clean", "Cooling and calming to wear"], care: "Keep dry; a light coat of coconut oil restores the shine." },
  { key: "brass", match: ["brass", "panchdhatu", "metal", "copper", "tamba"], label: "Brass / Panchdhatu", essence: "traditional temple metal cast for daily puja", intent: "puja, vastu and prosperity", benefits: ["Made for daily temple use", "Holds mantra energy well", "Long-lasting temple-grade finish"], care: "Polish occasionally with lemon and salt or a brass cleaner." },
  { key: "evil-eye", match: ["evil eye", "nazar", "drishti"], label: "Evil Eye", essence: "the classic blue nazar charm", intent: "protection from the evil eye", benefits: ["Absorbs drishti aimed at you or your home", "Popular for babies, cars and entrances", "Instant, no ritual needed"], care: "Replace if it cracks — tradition says it has absorbed the drishti." },
];

const DEFAULT_MATERIAL: Material = {
  key: "sacred",
  match: [],
  label: "Sacred",
  essence: "a hand-selected sacred piece from our Nakshatra collection",
  intent: "balance, protection and positivity",
  benefits: ["Brings calm and positivity to your space", "Traditionally used to clear negativity", "A meaningful gift for a loved one"],
  care: "Keep it clean, dust-free and treated with respect.",
};

type Form = { key: string; match: string[]; label: string; wear: string; usage: string };

const FORMS: Form[] = [
  { key: "bracelet", match: ["bracelet", "kada", "band"], label: "Bracelet", wear: "worn on the wrist", usage: "Wear on the left wrist to receive energy (money, calm, love) and on the right to project it (protection, confidence)." },
  { key: "mala", match: ["mala", "kanthi", "rosary", "japa"], label: "Mala", wear: "worn around the neck or used for japa", usage: "Roll one bead per mantra with your thumb over the middle finger and reverse at the sumeru bead instead of crossing it." },
  { key: "pendant", match: ["pendant", "locket", "kavach", "chain"], label: "Pendant", wear: "worn on a chain over the heart", usage: "Wear over the heart on a silver chain or red thread, ideally after a bath on a Monday." },
  { key: "tree", match: ["tree"], label: "Crystal tree", usage: "Place in the north or south-east of your home or office for money flow, or the living room for harmony.", wear: "placed in the wealth corner" },
  { key: "pyramid", match: ["pyramid", "cone"], label: "Pyramid", wear: "installed in the puja or work area", usage: "Install on a clean raised surface facing east or north and avoid moving it often." },
  { key: "yantra", match: ["yantra", "plate"], label: "Yantra", wear: "installed in the puja room or cash locker", usage: "Place in the puja room or cash locker facing east, and offer incense on Fridays." },
  { key: "statue", match: ["statue", "idol", "murti", "ganesh", "laxmi", "lakshmi", "hanuman", "shiva", "krishna", "buddha"], label: "Idol", wear: "installed in the home temple", usage: "Install in the north-east on a raised platform, never directly on the floor, with the deity facing west or east." },
  { key: "ring", match: ["ring", "anguthi"], label: "Ring", wear: "worn on the finger", usage: "Wear on the recommended finger after a bath on the prescribed weekday for that energy." },
  { key: "hanging", match: ["hanging", "wind chime", "bell", "toran"], label: "Hanging", wear: "hung at the main entrance", usage: "Hang at the main door or a window so it catches light and air, and dust it weekly." },
  { key: "stone", match: ["stone", "raw", "tumble", "cluster", "geode"], label: "Crystal", wear: "kept in the room or carried", usage: "Keep it in your work area, pocket or under your pillow depending on the intention you set." },
];

const DEFAULT_FORM: Form = { key: "item", match: [], label: "Sacred item", wear: "kept in your sacred space", usage: "Keep it in your puja space or carry it with you after setting a clear intention." };

const low = (s: string) => s.toLowerCase();

/** Stable numeric hash so wording varies across products but never per render. */
const hash = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};
const pick = <T,>(arr: T[], seed: number, offset = 0): T => arr[(seed + offset) % arr.length];

const MUKHI_MEANING: Record<string, string> = {
  "1": "the rarest bead, ruled by the Sun — worn for leadership and moksha",
  "2": "ruled by the Moon — worn for harmony in relationships and marriage",
  "3": "ruled by Mars — worn to release guilt and past-life karma",
  "4": "ruled by Mercury — worn for memory, study and clear speech",
  "5": "ruled by Jupiter — the most-worn bead, for peace of mind and health",
  "6": "ruled by Venus — worn for willpower, charm and focus",
  "7": "blessed by Goddess Lakshmi — worn for wealth and relief from Shani",
  "8": "ruled by Ketu and Lord Ganesha — worn to clear obstacles",
  "9": "ruled by Rahu and Goddess Durga — worn for fearlessness and energy",
  "10": "governed by Lord Vishnu — worn as an all-round protective shield",
  "11": "ruled by Hanuman — worn for courage, discipline and success",
  "12": "ruled by the Sun — worn for radiance, authority and confidence",
  "13": "ruled by Venus and Kamadeva — worn for attraction and fulfilment of desires",
  "14": "the Deva Mani, ruled by Saturn — worn for intuition and sharp decision-making",
};

export type ProductCopy = {
  material: string;
  form: string;
  intent: string;
  /** 2-paragraph unique description. */
  intro: string[];
  /** 4 short USP lines shown under the buy box. */
  highlights: string[];
  /** Extra attribute rows merged into the spec table. */
  specs: Array<[string, string]>;
  /** How to use, specific to material + form. */
  usage: string;
  care: string;
  /** Product-specific FAQs (merged ahead of the category set). */
  faqs: Array<{ question: string; answer: string }>;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  /** Short one-liner used in list/meta contexts. */
  summary: string;
};

const matchFrom = <T extends { match: string[] }>(list: T[], t: string): T | undefined =>
  list.find((m) => m.match.some((w) => t.includes(w)));

export function productCopy(p: Product): ProductCopy {
  const t = low(p.title);
  const seed = hash(p.handle);
  const material = matchFrom(MATERIALS, t) ?? DEFAULT_MATERIAL;
  const form = matchFrom(FORMS, t) ?? DEFAULT_FORM;

  const mukhi = p.title.match(/(\d{1,2})\s*mukhi/i)?.[1];
  const mm = p.title.match(/(\d{1,2}(?:\.\d)?)\s*mm/i)?.[1];
  const inch = p.title.match(/(\d{1,2}(?:\.\d)?)\s*(?:inch|inches|")/i)?.[1];
  const count = p.title.match(/\b(108|54|27)\b/)?.[1];

  const mukhiLine = mukhi && MUKHI_MEANING[mukhi] ? ` A ${mukhi} Mukhi bead is ${MUKHI_MEANING[mukhi]}.` : "";

  const opener = pick(
    [
      `${p.title} is ${material.essence}, ${form.wear} for ${material.intent}.`,
      `Made from ${material.label.toLowerCase()}, the ${p.title} is ${form.wear} by those working on ${material.intent}.`,
      `The ${p.title} brings together ${material.essence} in a form that is ${form.wear} — a daily reminder of your intention for ${material.intent}.`,
    ],
    seed,
  );

  const proof = pick(
    [
      "Each piece is inspected by hand, verified at a government-approved lab and energised with its own mantra before we pack it.",
      "Before dispatch it passes our authenticity check, receives a lab certificate and is charged on our altar with the prescribed mantra.",
      "We test every unit for authenticity, include the lab report in the box and complete the puja before it is sealed for shipping.",
    ],
    seed,
    1,
  );

  const sizeLine = mm
    ? ` Beads are ${mm} mm, sized for comfortable all-day wear.`
    : inch
      ? ` It measures approximately ${inch} inch, suited to a home temple or work desk.`
      : "";

  const countLine = count ? ` The traditional ${count}-bead count keeps your japa accurate through every round.` : "";

  const intro = [
    `${opener}${mukhiLine}${sizeLine}${countLine}`,
    `${proof} ${form.usage} ${material.care}`,
  ];

  const highlights = [
    material.benefits[0],
    material.benefits[1] ?? "Energised with Vedic mantras before dispatch",
    mukhi ? `${mukhi} Mukhi Nepali bead, X-ray verified` : material.benefits[2] ?? "Government-approved lab certificate inside the box",
    `Free shipping on prepaid orders · 7-day returns`,
  ];

  const specs: Array<[string, string]> = [
    ["Material", material.label],
    ["Form", form.label],
    ["Best for", material.intent.replace(/^./, (c) => c.toUpperCase())],
  ];
  if (mukhi) specs.push(["Mukhi", `${mukhi} Mukhi`]);
  if (mm) specs.push(["Bead size", `${mm} mm`]);
  if (inch) specs.push(["Dimensions", `${inch} inch (approx.)`]);
  if (count) specs.push(["Bead count", `${count} + 1 sumeru`]);

  const faqs = [
    {
      question: `What is the ${p.title} used for?`,
      answer: `It is traditionally used for ${material.intent}. ${material.benefits.join(". ")}.`,
    },
    {
      question: `How do I wear or place the ${p.title}?`,
      answer: form.usage,
    },
    {
      question: `How do I care for ${material.label.toLowerCase()}?`,
      answer: material.care,
    },
    {
      question: `Is the ${p.title} original and energised?`,
      answer: `Yes. This piece is verified at a government-approved lab and energised with Vedic mantras by our priests before dispatch. The certificate travels inside your box, and you can also verify it with our team on WhatsApp.`,
    },
    {
      question: `What does the ${p.title} cost and what is included?`,
      answer: `It is priced at ${formatPrice(p.price)}${p.compareAtPrice ? ` (down from ${formatPrice(p.compareAtPrice)})` : ""}, inclusive of all taxes. The price includes the energised product, its authenticity certificate, a mantra card and premium gift packaging. Prepaid orders ship free across India.`,
    },
  ];

  const clip = (text: string, max: number) =>
    text.length <= max ? text : `${text.slice(0, text.lastIndexOf(" ", max - 1)).replace(/[\s,.–—-]+$/, "")}…`;

  const seoTitle =
    p.title.length > 44
      ? clip(`${p.title} | Nakshatra Store`, 62)
      : `${p.title} — Original & Energised | Nakshatra Store`;
  const seoDescription = clip(
    `Buy ${p.title} online at ${formatPrice(p.price)}. ${material.label} for ${material.intent}. Lab certified, energised by astrologers, free prepaid shipping & 7-day returns.`,
    157,
  );

  const keywords = [
    p.title.toLowerCase(),
    `${material.label.toLowerCase()} ${form.label.toLowerCase()}`,
    `original ${material.label.toLowerCase()}`,
    `${material.label.toLowerCase()} for ${material.intent.split(",")[0]}`,
    `buy ${p.title.toLowerCase()} online`,
  ].join(", ");

  return {
    material: material.label,
    form: form.label,
    intent: material.intent,
    intro,
    highlights,
    specs,
    usage: form.usage,
    care: material.care,
    faqs,
    seoTitle,
    seoDescription,
    keywords,
    summary: `${material.label} ${form.label.toLowerCase()} for ${material.intent}.`,
  };
}
