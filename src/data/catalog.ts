import heroRud from "@/assets/hero-rudraksha.jpg";
import catBracelets from "@/assets/cat-bracelets.jpg";
import catMala from "@/assets/cat-mala.jpg";
import catYantra from "@/assets/cat-yantra.jpg";
import catGems from "@/assets/cat-gems.jpg";
import cPyrite from "@/assets/crystal-pyrite.jpg";
import cAmethyst from "@/assets/crystal-amethyst.jpg";
import cRose from "@/assets/crystal-rose.jpg";
import cCitrine from "@/assets/crystal-citrine.jpg";
import cTiger from "@/assets/crystal-tiger.jpg";
import cJade from "@/assets/crystal-jade.jpg";
import cBlack from "@/assets/crystal-black.jpg";

export type P = { name: string; price: string; old: string; reviews: number; img: string; tag?: string };

export const img = { heroRud, catBracelets, catMala, catYantra, catGems, cPyrite, cAmethyst, cRose, cCitrine, cTiger, cJade, cBlack };

export const bestSellers: P[] = [
  { name: "Metal Dhan Yog Bracelet for Women", price: "₹899", old: "₹1,400", reviews: 1654, img: catBracelets },
  { name: "Dhan Yog Bracelet (Lab Certified)", price: "₹699", old: "₹1,999", reviews: 1623, img: cPyrite },
  { name: "Gemini (मिथुन राशि) Zodiac Green Aventurine & Milky Quartz Bracelet", price: "₹899", old: "₹2,800", reviews: 1980, img: cJade },
  { name: "Metal Dhan Yog Bracelet - Silver", price: "₹999", old: "₹1,700", reviews: 741, img: catBracelets },
  { name: "7 Horses on Raw Pyrite Frame", price: "₹999", old: "₹2,900", reviews: 809, img: catYantra },
  { name: "Raw Pyrite Anklet", price: "₹899", old: "₹1,400", reviews: 1531, img: cPyrite },
];

export const zodiacNew: P[] = [
  { name: "Libra Zodiac Metal Bracelet", price: "₹999", old: "₹1,700", reviews: 103, img: catBracelets },
  { name: "Taurus Zodiac Metal Bracelet", price: "₹999", old: "₹1,700", reviews: 151, img: catBracelets },
  { name: "Aries (मेष राशि) Zodiac Red Jasper & Tiger Eye Bracelet", price: "₹899", old: "₹2,800", reviews: 210, img: cTiger, tag: "Selling Fast" },
  { name: "Pisces (मीन राशि) Zodiac Citrine & Tiger Eye Bracelet", price: "₹899", old: "₹2,800", reviews: 188, img: cCitrine },
  { name: "Taurus (वृषभ राशि) Zodiac Sunstone & Carnelian Bracelet", price: "₹899", old: "₹2,800", reviews: 174, img: cCitrine },
  { name: "Cancer (कर्क राशि) Zodiac Moonstone Bracelet", price: "₹899", old: "₹2,800", reviews: 141, img: catGems },
];

export const rudraksha: P[] = [
  { name: "7 Mukhi Rudraksha Bracelet", price: "₹799", old: "₹2,499", reviews: 629, img: heroRud },
  { name: "Shiv Rudraksha Mala with Om Shiva Trishul Pendant", price: "₹999", old: "₹1,700", reviews: 147, img: catMala },
  { name: "Nepal Origin 7 Mukhi Rudraksha - 17mm to 22mm", price: "₹799", old: "₹1,700", reviews: 332, img: heroRud },
  { name: "Divya Shankh Rudraksha Mala", price: "₹999", old: "₹1,700", reviews: 139, img: catMala },
  { name: "Surya Shakti Rudraksha Mala", price: "₹999", old: "₹1,700", reviews: 144, img: catMala },
  { name: "5 Mukhi Rudraksha Bracelet", price: "₹499", old: "₹1,999", reviews: 512, img: heroRud },
];

export const womens: P[] = [
  { name: "Metal Dhan Yog Bracelet for Women", price: "₹899", old: "₹1,400", reviews: 1654, img: catBracelets },
  { name: "Pyrite Sun Ring", price: "₹699", old: "₹1,300", reviews: 1214, img: cPyrite },
  { name: "Dhan Yog Necklace", price: "₹999", old: "₹1,700", reviews: 1001, img: catGems },
  { name: "Pyrite Tortoise Pendant", price: "₹799", old: "₹1,400", reviews: 100, img: cPyrite },
  { name: "Love & Money Metal Bracelet for Women", price: "₹999", old: "₹1,700", reviews: 1261, img: cRose },
  { name: "Raw Pyrite Anklet", price: "₹899", old: "₹1,400", reviews: 1531, img: cPyrite },
];

export const karungali: P[] = [
  { name: "Divya Raksha Rudraksha & Karungali Mala with Gold Capping", price: "₹799", old: "₹1,300", reviews: 113, img: cBlack },
  { name: "Karungali Malai 8mm – 108+1 Authentic Ebony Wood Beads (Govt. Certified)", price: "₹799", old: "₹1,600", reviews: 176, img: cBlack },
  { name: "Karungali Murugan Raksha Mala", price: "₹999", old: "₹1,700", reviews: 188, img: catMala },
  { name: "Karungali Malai with Copper Wire – 8mm (54+1 Beads)", price: "₹999", old: "₹2,000", reviews: 112, img: cBlack },
  { name: "Silver Capped Karungali Malai – with Free Karungali Bracelet", price: "₹899", old: "₹2,800", reviews: 117, img: cBlack },
  { name: "Metal Karungali Bracelet - Silver", price: "₹899", old: "₹1,700", reviews: 205, img: catBracelets },
];

export const domeTrees: P[] = [
  { name: "Pyrite Dome Tree", price: "₹999", old: "₹2,499", reviews: 103, img: cPyrite },
  { name: "7 Chakra Dome Tree", price: "₹999", old: "₹2,499", reviews: 1044, img: catGems },
  { name: "Evil Eye Dome Tree", price: "₹999", old: "₹2,499", reviews: 1017, img: cJade },
  { name: "Citrine Dome Tree", price: "₹999", old: "₹2,499", reviews: 1180, img: cCitrine },
  { name: "Love Attraction Dome Tree", price: "₹999", old: "₹2,499", reviews: 1119, img: cRose },
  { name: "Amethyst Dome Tree", price: "₹999", old: "₹2,499", reviews: 1214, img: cAmethyst },
];

const pyrite: P[] = [
  { name: "Raw Pyrite Bracelet 8mm", price: "₹699", old: "₹1,599", reviews: 2101, img: cPyrite },
  { name: "Raw Pyrite Anklet", price: "₹899", old: "₹1,400", reviews: 1531, img: cPyrite },
  { name: "Pyrite Money Magnet Pyramid", price: "₹999", old: "₹2,500", reviews: 880, img: catYantra },
  { name: "Pyrite Tortoise for Vastu", price: "₹1,299", old: "₹2,400", reviews: 612, img: cPyrite },
  { name: "7 Horses on Raw Pyrite Frame", price: "₹999", old: "₹2,900", reviews: 809, img: catYantra },
  { name: "Pyrite Sun Ring", price: "₹699", old: "₹1,300", reviews: 1214, img: cPyrite },
];

const vastu: P[] = [
  { name: "Rinmukteshwar Siddh Lakshmi Yantra Pyramid", price: "₹999", old: "₹2,999", reviews: 741, img: catYantra },
  { name: "Vastu Pyrite Tortoise Combo", price: "₹2,899", old: "₹4,999", reviews: 320, img: cPyrite },
  { name: "Black Obsidian Pyramid with Selenite Plate", price: "₹999", old: "₹2,500", reviews: 402, img: cBlack },
  { name: "Selenite Charging Plate", price: "₹599", old: "₹1,200", reviews: 275, img: catGems },
  { name: "Evil Eye Dome Tree", price: "₹999", old: "₹2,499", reviews: 1017, img: cJade },
  { name: "7 Chakra Vastu Wall Frame", price: "₹1,499", old: "₹2,900", reviews: 188, img: catYantra },
];

const gemstones: P[] = [
  { name: "Certified Amethyst Bracelet", price: "₹899", old: "₹1,900", reviews: 940, img: cAmethyst },
  { name: "Rose Quartz Bracelet for Love", price: "₹799", old: "₹1,700", reviews: 1502, img: cRose },
  { name: "Tiger Eye Bracelet for Confidence", price: "₹799", old: "₹1,700", reviews: 1330, img: cTiger },
  { name: "Citrine Bracelet for Prosperity", price: "₹899", old: "₹1,800", reviews: 870, img: cCitrine },
  { name: "Green Jade Bracelet for Luck", price: "₹899", old: "₹1,800", reviews: 640, img: cJade },
  { name: "Lapis Lazuli Bracelet for Wisdom", price: "₹899", old: "₹1,900", reviews: 511, img: catGems },
];

const gifting: P[] = [
  { name: "Sacred Gift Box – Rudraksha & Pyrite", price: "₹1,499", old: "₹2,999", reviews: 233, img: heroRud },
  { name: "Love Gift Set – Rose Quartz Duo", price: "₹1,299", old: "₹2,400", reviews: 410, img: cRose },
  { name: "Prosperity Hamper – Pyrite Tree & Mala", price: "₹1,999", old: "₹3,600", reviews: 176, img: cPyrite },
  { name: "Zodiac Bracelet Gift Card Set", price: "₹999", old: "₹1,900", reviews: 288, img: catBracelets },
  { name: "Karungali Protection Gift Set", price: "₹1,199", old: "₹2,200", reviews: 154, img: cBlack },
  { name: "Amethyst Calm Gift Box", price: "₹1,099", old: "₹2,100", reviews: 199, img: cAmethyst },
];

export type Collection = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  hero: string;
  products: P[];
};

export const collections: Collection[] = [
  { slug: "best-sellers", title: "Best Sellers", tagline: "Most loved by 5 lakh+ customers", description: "Our top-selling energised bracelets, malas and vastu products, chosen by thousands of customers every month.", hero: catBracelets, products: bestSellers },
  { slug: "zodiac", title: "Zodiac Collection", tagline: "Choose your zodiac, wear your energy", description: "Rashi-specific gemstone bracelets for all 12 zodiac signs, energised with Vedic mantras.", hero: catBracelets, products: zodiacNew },
  { slug: "rudraksha", title: "Rudraksha Collection", tagline: "Kashi energised, Nepal origin", description: "Authentic 1–14 Mukhi Rudraksha beads, malas and bracelets, lab certified and energised by Vedic priests.", hero: heroRud, products: rudraksha },
  { slug: "karungali", title: "Sacred Karungali Collection", tagline: "Govt. certified black ebony wood", description: "Original Karungali Malai and bracelets for protection from negative energy, evil eye and black magic.", hero: cBlack, products: karungali },
  { slug: "womens-jewellery", title: "Women's Jewellery", tagline: "Attract wealth, love & luck", description: "Handcrafted anklets, rings, necklaces and bracelets designed for women, in pyrite, rose quartz and more.", hero: cRose, products: womens },
  { slug: "dome-trees", title: "Vastu Crystal Dome Trees", tagline: "For wealth & luck", description: "Handcrafted crystal dome trees that invite abundance, positivity and harmony into your home or office.", hero: cAmethyst, products: domeTrees },
  { slug: "pyrite", title: "Pyrite Collection", tagline: "The money magnet stone", description: "Raw pyrite bracelets, anklets, pyramids and frames to attract money, abundance and financial growth.", hero: cPyrite, products: pyrite },
  { slug: "vastu", title: "Vastu Collection", tagline: "Harmony for home & office", description: "Yantras, pyramids, tortoises and selenite plates to balance the energy of your space.", hero: catYantra, products: vastu },
  { slug: "gemstones", title: "Gemstones", tagline: "100% natural & lab certified", description: "Healing crystal bracelets in amethyst, rose quartz, tiger eye, citrine, jade and lapis lazuli.", hero: catGems, products: gemstones },
  { slug: "gifting", title: "Gifting Collection", tagline: "Sacred gifts for every occasion", description: "Curated spiritual gift boxes and hampers, beautifully packed and energised before shipping.", hero: catBracelets, products: gifting },
];

export const collectionBySlug = (slug: string) => collections.find((c) => c.slug === slug);
