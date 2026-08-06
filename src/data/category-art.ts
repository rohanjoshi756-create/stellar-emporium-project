/** Editorial imagery per collection handle — used for category tiles and collection banners. */
import catBracelets from "@/assets/cat-bracelets.jpg";
import catMala from "@/assets/cat-mala.jpg";
import catCrystalTree from "@/assets/cat-crystal-tree.jpg";
import catVastu from "@/assets/cat-vastu.jpg";
import catRudraksha from "@/assets/cat-rudraksha.jpg";
import catStatues from "@/assets/cat-statues.jpg";
import catKarungali from "@/assets/cat-karungali.jpg";
import catYantra from "@/assets/cat-yantra.jpg";

export const categoryArt: Record<string, string> = {
  bracelets: catBracelets,
  mala: catMala,
  "crystal-trees": catCrystalTree,
  vastu: catVastu,
  rudraksha: catRudraksha,
  statues: catStatues,
  karungali: catKarungali,
  yantras: catYantra,
  "best-sellers": catBracelets,
};

export const artFor = (handle: string, fallback: string) => categoryArt[handle] ?? fallback;
