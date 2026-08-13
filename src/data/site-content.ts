/**
 * site-content.ts — all static marketing copy for the storefront.
 * Real copy only, no placeholders. Maps to Shopify section settings / metafields.
 */
import cAmethyst from "@/assets/crystal-amethyst.jpg";
import cRose from "@/assets/crystal-rose.jpg";
import cTiger from "@/assets/crystal-tiger.jpg";
import cJade from "@/assets/crystal-jade.jpg";

export const announcements = [
  "Free shipping on prepaid orders 🚚",
  "Energised by Vedic priests before dispatch 🙏",
  "Original Nepali Rudraksha with silver capping ✨",
  "Govt. certified Karungali collection 🖤",
  "Crystal trees for wealth & positivity 🌳",
];

export const trustPoints = ["100% Natural & Authentic", "Energised by Top Astrologers"];

export const whyUs = [
  { title: "Charged for you by Top Astros", description: "All our healing stones are sourced and energised by trusted experts and astrologers with pure intentions before delivery." },
  { title: "100% Natural & Authentic", description: "All our stones are 100% authentic and original, sourced from top international mines across the globe." },
  { title: "Certified by Govt Labs", description: "Certified by trusted experts at the gemology lab. Passed multiple screenings for originality and quality." },
  { title: "Hand Crafted by Artisans", description: "Meticulously crafted by experienced artisans with special attention to detail." },
];

export type Testimonial = { name: string; quote: string; image: string; imageAlt: string };

/** Instagram profile used for the video review section CTA. */
export const instagramProfileUrl = "https://www.instagram.com/nakshatra.store/";

export type InstagramReel = { url: string; caption: string };

/**
 * Customer video reviews (Instagram reels).
 * Paste reel permalinks here, e.g.
 * { url: "https://www.instagram.com/reel/CxxxxxxxxxX/", caption: "Rose quartz bracelet review" }
 */
export const instagramReels: InstagramReel[] = [];

export const testimonials: Testimonial[] = [
  { name: "Nikita", quote: "This is my second purchase in two months! I bought the rose quartz pendant and got so many compliments. Ordered the bracelet as well now!", image: cRose, imageAlt: "Rose quartz crystal — reviewed by customer Nikita" },
  { name: "Archita", quote: "Got the rose quartz set as a gift and started to feel more positive and calm after a few days. Ordered another pair for my mother and sister.", image: cRose, imageAlt: "Rose quartz crystal — reviewed by customer Archita" },
  { name: "Arshita", quote: "I wasn't a big believer lol, but bought the purple amethyst bracelet for sleep. It has worked for me like a charm.", image: cAmethyst, imageAlt: "Purple amethyst crystal — reviewed by customer Arshita" },
  { name: "Aarti", quote: "Got the evil eye bracelet for my mother, she loves it! Her health has also been better since she started to wear this regularly.", image: cJade, imageAlt: "Green jade crystal — reviewed by customer Aarti" },
  { name: "Maanya", quote: "Ordered the wrong bracelet accidentally, the team helped replace it within 7 days! Really happy with my tiger eye bracelet.", image: cTiger, imageAlt: "Tiger eye crystal — reviewed by customer Maanya" },
];

export const homeFaqs = [
  { question: "Q1: What are the benefits of Karungali Mala?", answer: "Karungali Mala protects from negative energy, evil eye, and black magic. It calms the mind, reduces stress, improves focus, and brings spiritual grounding." },
  { question: "Q2: What are the benefits of Pyrite stone?", answer: "Pyrite stone attracts money, abundance, and financial growth. It boosts confidence, blocks negative energy, and stimulates career success." },
  { question: "Q3: What are the benefits of a Pyrite Anklet?", answer: "The original Pyrite anklet attracts wealth, stabilises finances, and protects the wearer's energy field. Especially beneficial for women seeking financial growth." },
  { question: "Q4: What are the benefits of 5 Mukhi Rudraksha?", answer: "5 Mukhi Rudraksha calms the mind, improves memory and concentration, reduces stress, and enhances meditation. Ruled by Lord Shiva, suitable for all ages." },
  { question: "Q5: What are the benefits of 7 Mukhi Rudraksha?", answer: "7 Mukhi Rudraksha is blessed by Goddess Lakshmi and attracts wealth, fortune & business success. It helps reduce the effects of Shani dosha." },
  { question: "Q6: What are the benefits of a Tiger Eye bracelet?", answer: "Tiger Eye bracelet boosts self-confidence, courage, and mental clarity. It protects the wearer and attracts success in career and business." },
  { question: "Q7: What are the benefits of a Lapis Lazuli bracelet?", answer: "Lapis Lazuli enhances wisdom, communication & intellectual ability. It stimulates the Third Eye Chakra and is ideal for students & professionals." },
];

export const serviceFaqs = [
  { question: "Do you offer free shipping?", answer: "Yes — all prepaid orders across India ship free of charge. There is no minimum order value. Cash on Delivery (COD) is also available on select products for a small convenience fee shown at checkout." },
  { question: "How long does delivery take?", answer: "We dispatch orders within 24 hours of confirmation. Delivery usually takes 3–5 working days for metro and Tier-2 cities. Remote pincodes may take 5–7 working days. You will receive a tracking link via WhatsApp and email once the order is shipped." },
  { question: "Is Cash on Delivery available?", answer: "COD is available on most products. A small COD fee may apply depending on your location and will be displayed at checkout before you confirm the order." },
  { question: "How do I track my order?", answer: "Once dispatched, you will receive an SMS/WhatsApp message and email with the courier tracking number. You can also contact our support team Mon–Sat, 10AM–7PM for order updates." },
  { question: "Are your products authentic and certified?", answer: "Absolutely. Every Rudraksha, Karungali, Pyrite and crystal product is tested and comes with a government-lab authenticity certificate or a Nakshatra Store authenticity card. We source directly from Nepal, mines and trusted artisans." },
  { question: "What is the return and refund policy?", answer: "Unused products in original packaging can be returned within 7 days of delivery. Initiate a return via WhatsApp or email; we will arrange a reverse pickup. Refunds are processed within 5–7 business days after the product reaches our centre." },
  { question: "What if I receive a damaged or wrong product?", answer: "We pack every order carefully, but if a product arrives damaged or incorrect, share an unboxing video and photos within 24 hours. We will replace it free of charge or issue a full refund." },
  { question: "Do products come energised?", answer: "Yes. Spiritual products are energised with Vedic mantras by experienced astrologers and priests before dispatch, so they reach you ready to wear or place in your sacred space." },
  { question: "Do you ship internationally?", answer: "Currently we ship across India only. International shipping will be introduced soon. Please follow our Instagram or WhatsApp channel for updates." },
  { question: "How can I contact customer support?", answer: "Reach us on WhatsApp at +91 99999 99999, email us at support@nakshatrastore.com, or use the chat button on the site. Support hours: Mon–Sat, 10AM–7PM IST." },
];

export const aboutParagraphs = [
  "Nakshatra Store is India's most trusted destination for authentic spiritual products. We specialise in original Karungali Mala, Pyrite Stone, Rudraksha, Zodiac bracelets, Vastu products and healing crystal jewellery, all government-certified for authenticity.",
  "Our Karungali Mala collection features original Black Ebony wood beads certified by government labs. Benefits include protection from negative energy, evil eye and black magic, mental peace and spiritual grounding. Available in 6mm and 8mm with silver and gold capping variants.",
  "Our Pyrite Stone collection includes Raw Pyrite bracelets, anklets, pyramids and frames. Pyrite benefits include attracting money and abundance, boosting confidence and blocking negative energy.",
  "For Rudraksha, we offer the complete range from 5 Mukhi to 14 Mukhi — Nepal origin and Kashi energised. Explore our Zodiac bracelet collection with rashi-specific gemstone combinations for all 12 signs, and Vastu products that bring harmony, wealth and positive energy to your home and office.",
  "Every product is energised by top astrologers with Vedic mantras before shipping. Shop with confidence with our 7-day return policy and fast delivery across India.",
];

export const foundation = {
  eyebrow: "Nakshatra Foundation",
  heading: "One Purchase.   One Promise.",
  body: "With every purchase, we contribute towards educating and empowering underprivileged children, helping them grow into confident and capable individuals.",
  ctaLabel: "Read More",
};

export const footerPurposeLinks = [
  { label: "Karungali for protection", handle: "karungali" },
  { label: "Rudraksha for peace", handle: "rudraksha" },
  { label: "Crystal trees for wealth", handle: "crystal-trees" },
  { label: "Yantras for prosperity", handle: "yantras" },
  { label: "Malas for daily japa", handle: "mala" },
  { label: "Statues for home temple", handle: "statues" },
];

export const footerHelpLinks = [
  "Shipping & Delivery",
  "Returns & Refunds",
  "Track your order",
  "Contact support",
  "Terms & Privacy",
];

export const storeInfo = {
  name: "Nakshatra Store",
  blurb: "Nakshatra Store brings you authentic spiritual products — Rudraksha, Malas, Karungali, Crystal Trees, Yantras, Statues and Vastu items.",
  support: "Energised before dispatch. 7-day return policy. Support Mon–Sat, 10AM–7PM.",
  whatsappUrl: "https://wa.me/919999999999",
};

export const heroContent = {
  titleLine1: "Nakshatra",
  titleLine2: "Store",
  subtitle: "Rudraksha, Malas, Karungali & Vastu — energised for you",
  ctaLabel: "SHOP NOW",
  ctaCollection: "best-sellers",
  imageAlt: "Nakshatra Store spiritual collection of rudraksha, malas and crystals",
};

export const categoryStripHeading = "Shop Rudraksha, Malas, Karungali, Crystal Trees & Vastu Products";