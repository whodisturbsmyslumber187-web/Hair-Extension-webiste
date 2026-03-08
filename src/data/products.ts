import hairBundlesStraight from "@/assets/hair-bundles-straight.jpg";
import hairBundlesBodywave from "@/assets/hair-bundles-bodywave.jpg";
import hairBundlesDeepwave from "@/assets/hair-bundles-deepwave.jpg";
import hairFrontal from "@/assets/hair-frontal.jpg";
import hairWigBlonde from "@/assets/hair-wig-blonde.jpg";
import hairClosure from "@/assets/hair-closure.jpg";
import hairHero from "@/assets/hair-hero-1.jpg";

export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory?: string;
  price: string;
  priceNum: number;
  image: string;
  hoverImage: string;
  isNew?: boolean;
  isBestseller?: boolean;
  lengths: string[];
  weights: string[];
  colors: string[];
  description: string;
  /** Price adjustments by length (added to base priceNum) */
  lengthPrices?: Record<string, number>;
  /** Price adjustments by weight (added to base priceNum) */
  weightPrices?: Record<string, number>;
}

/** Calculate the final price for a product given selections */
export const calculatePrice = (product: Product, selectedLength?: string, selectedWeight?: string): number => {
  let price = product.priceNum;
  if (selectedLength && product.lengthPrices?.[selectedLength] !== undefined) {
    price = product.lengthPrices[selectedLength];
  }
  if (selectedWeight && product.weightPrices?.[selectedWeight] !== undefined) {
    price += product.weightPrices[selectedWeight] - product.priceNum;
    if (selectedLength && product.lengthPrices?.[selectedLength] !== undefined) {
      price = product.lengthPrices[selectedLength] + (product.weightPrices[selectedWeight] - product.priceNum);
    }
  }
  return price;
};

/** Generate length-based pricing: base price + increment per step */
const genLengthPrices = (lengths: string[], basePrice: number, increment: number): Record<string, number> => {
  const map: Record<string, number> = {};
  lengths.forEach((l, i) => { map[l] = basePrice + i * increment; });
  return map;
};

/** Generate weight-based pricing */
const genWeightPrices = (weights: string[], basePrice: number, increment: number): Record<string, number> => {
  const map: Record<string, number> = {};
  weights.forEach((w, i) => { map[w] = basePrice + i * increment; });
  return map;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Straight Virgin Bundles",
    category: "Bundles",
    subcategory: "Straight",
    price: "$85",
    priceNum: 85,
    image: hairBundlesStraight,
    hoverImage: hairHero,
    isNew: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\"", "32\"", "34\"", "36\"", "38\"", "40\""],
    weights: ["100g", "150g", "200g", "300g", "400g"],
    colors: ["Natural Black #1B", "Jet Black #1"],
    description: "100% unprocessed Brazilian virgin straight hair bundles. Silky smooth, no tangling, no shedding. Can be colored, bleached, and styled.",
  },
  {
    id: 2,
    name: "Body Wave Bundles",
    category: "Bundles",
    subcategory: "Body Wave",
    price: "$95",
    priceNum: 95,
    image: hairBundlesBodywave,
    hoverImage: hairBundlesStraight,
    isBestseller: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\"", "32\"", "34\"", "36\"", "38\"", "40\""],
    weights: ["100g", "150g", "200g", "300g", "400g"],
    colors: ["Natural Black #1B", "Dark Brown #2"],
    description: "Premium body wave virgin hair with gorgeous S-pattern waves. Bouncy, full, and luxuriously soft. Maintains curl pattern after washing.",
  },
  {
    id: 3,
    name: "Deep Wave Bundles",
    category: "Bundles",
    subcategory: "Deep Wave",
    price: "$105",
    priceNum: 105,
    image: hairBundlesDeepwave,
    hoverImage: hairBundlesBodywave,
    isNew: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\"", "32\""],
    weights: ["100g", "150g", "200g", "300g", "400g"],
    colors: ["Natural Black #1B"],
    description: "Deep wave virgin hair bundles with tight, defined curls. Full and voluminous with a natural bounce. 100% human hair.",
  },
  {
    id: 4,
    name: "13x4 Lace Frontal",
    category: "Frontals",
    subcategory: "Straight",
    price: "$120",
    priceNum: 120,
    image: hairFrontal,
    hoverImage: hairClosure,
    isBestseller: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
    weights: ["100g"],
    colors: ["Natural Black #1B", "Jet Black #1"],
    description: "HD lace frontal with pre-plucked hairline and baby hairs. Ear-to-ear coverage for the most natural look. Bleached knots.",
  },
  {
    id: 5,
    name: "613 Blonde Straight Wig",
    category: "Wigs",
    subcategory: "Blonde",
    price: "$285",
    priceNum: 285,
    image: hairWigBlonde,
    hoverImage: hairFrontal,
    isNew: true,
    lengths: ["16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\"", "32\"", "34\"", "36\"", "38\"", "40\""],
    weights: ["150g", "200g", "250g"],
    colors: ["613 Blonde", "Honey Blonde #27"],
    description: "Platinum blonde 613 full lace wig. Pre-plucked hairline with baby hairs. 150% density. Can be toned to any shade.",
  },
  {
    id: 6,
    name: "4x4 Lace Closure",
    category: "Closures",
    subcategory: "Straight",
    price: "$65",
    priceNum: 65,
    image: hairClosure,
    hoverImage: hairBundlesStraight,
    lengths: ["14\"", "16\"", "18\"", "20\""],
    weights: ["50g"],
    colors: ["Natural Black #1B"],
    description: "Swiss lace closure with natural parting. Pre-plucked with baby hairs. Perfect to complete your bundle install.",
  },
  {
    id: 7,
    name: "Kinky Curly Bundles",
    category: "Bundles",
    subcategory: "Kinky Curly",
    price: "$110",
    priceNum: 110,
    image: hairBundlesDeepwave,
    hoverImage: hairBundlesBodywave,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\""],
    weights: ["100g", "150g", "200g", "300g", "400g"],
    colors: ["Natural Black #1B"],
    description: "Afro kinky curly virgin hair bundles that blend perfectly with natural hair. Soft, full, and tangle-free.",
  },
  {
    id: 8,
    name: "Straight Lace Front Wig",
    category: "Wigs",
    subcategory: "Straight",
    price: "$245",
    priceNum: 245,
    image: hairFrontal,
    hoverImage: hairBundlesStraight,
    isBestseller: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\"", "32\"", "34\"", "36\""],
    weights: ["150g", "200g", "250g"],
    colors: ["Natural Black #1B", "Jet Black #1"],
    description: "Silky straight HD lace front wig with glueless install option. Pre-plucked natural hairline. 180% density for a full, glamorous look.",
  },
  {
    id: 9,
    name: "Loose Wave Bundles",
    category: "Bundles",
    subcategory: "Loose Wave",
    price: "$95",
    priceNum: 95,
    image: hairBundlesBodywave,
    hoverImage: hairBundlesDeepwave,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\""],
    weights: ["100g", "150g", "200g", "300g", "400g"],
    colors: ["Natural Black #1B", "Dark Brown #2"],
    description: "Gorgeous loose wave pattern with natural bounce and movement. 100% virgin Peruvian hair. Minimal shedding guaranteed.",
  },
  {
    id: 10,
    name: "Body Wave Lace Front Wig",
    category: "Wigs",
    subcategory: "Body Wave",
    price: "$265",
    priceNum: 265,
    image: hairBundlesBodywave,
    hoverImage: hairFrontal,
    lengths: ["16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\""],
    weights: ["150g", "200g", "250g"],
    colors: ["Natural Black #1B"],
    description: "Body wave HD lace front wig with pre-plucked hairline. Glueless cap construction. 150% density. Natural and undetectable.",
  },
  {
    id: 11,
    name: "5x5 HD Lace Closure",
    category: "Closures",
    subcategory: "Body Wave",
    price: "$85",
    priceNum: 85,
    image: hairClosure,
    hoverImage: hairBundlesBodywave,
    isNew: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\""],
    weights: ["60g"],
    colors: ["Natural Black #1B"],
    description: "Ultra-thin HD lace closure that melts into the scalp. Free part, middle part, or three part options available.",
  },
  {
    id: 12,
    name: "13x6 Deep Wave Frontal",
    category: "Frontals",
    subcategory: "Deep Wave",
    price: "$145",
    priceNum: 145,
    image: hairBundlesDeepwave,
    hoverImage: hairClosure,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
    weights: ["100g"],
    colors: ["Natural Black #1B"],
    description: "Extended 13x6 lace frontal with deep wave texture. More parting space for versatile styling. Pre-plucked with baby hairs.",
  },
  {
    id: 13,
    name: "Water Wave Bundles",
    category: "Bundles",
    subcategory: "Water Wave",
    price: "$100",
    priceNum: 100,
    image: hairBundlesDeepwave,
    hoverImage: hairBundlesBodywave,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\""],
    weights: ["100g", "150g", "200g", "300g"],
    colors: ["Natural Black #1B"],
    description: "Beautiful water wave pattern that mimics natural ocean waves. Soft, lightweight, and easy to maintain.",
  },
  {
    id: 14,
    name: "Blonde Body Wave Wig",
    category: "Wigs",
    subcategory: "Blonde",
    price: "$295",
    priceNum: 295,
    image: hairWigBlonde,
    hoverImage: hairBundlesBodywave,
    lengths: ["16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\""],
    weights: ["150g", "200g"],
    colors: ["613 Blonde", "Honey Blonde #27", "Ash Blonde"],
    description: "Full lace body wave wig in stunning 613 blonde. Can be toned, dyed, and heat styled. Premium virgin hair.",
  },
  {
    id: 15,
    name: "Straight Clip-In Extensions",
    category: "Clip-Ins",
    subcategory: "Straight",
    price: "$135",
    priceNum: 135,
    image: hairBundlesStraight,
    hoverImage: hairHero,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
    weights: ["100g", "150g", "200g"],
    colors: ["Natural Black #1B", "Jet Black #1", "Dark Brown #2", "613 Blonde"],
    description: "7-piece clip-in set for instant length and volume. No commitment, easy to apply and remove. 100% Remy human hair.",
  },
  {
    id: 16,
    name: "Tape-In Extensions",
    category: "Tape-Ins",
    subcategory: "Straight",
    price: "$155",
    priceNum: 155,
    image: hairBundlesStraight,
    hoverImage: hairClosure,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
    weights: ["50g", "100g", "150g"],
    colors: ["Natural Black #1B", "Dark Brown #2", "613 Blonde"],
    description: "Seamless tape-in extensions that lay flat against the head. 20 pieces per pack. Reusable up to 3 times.",
  },
  {
    id: 17,
    name: "Deep Part Wig 26\"",
    category: "Wigs",
    subcategory: "Deep Wave",
    price: "$275",
    priceNum: 275,
    image: hairBundlesDeepwave,
    hoverImage: hairFrontal,
    lengths: ["22\"", "24\"", "26\"", "28\"", "30\""],
    weights: ["200g", "250g"],
    colors: ["Natural Black #1B"],
    description: "Deep wave wig with 13x4 lace front. Deep parting space for the most natural look. Glueless cap with adjustable straps.",
  },
  {
    id: 18,
    name: "Curly Clip-In Set",
    category: "Clip-Ins",
    subcategory: "Curly",
    price: "$145",
    priceNum: 145,
    image: hairBundlesDeepwave,
    hoverImage: hairBundlesBodywave,
    lengths: ["14\"", "16\"", "18\"", "20\""],
    weights: ["120g", "160g"],
    colors: ["Natural Black #1B"],
    description: "Natural curly clip-in extensions. 7 pieces with secure clips. Blends seamlessly with natural curly and coily textures.",
  },
  {
    id: 19,
    name: "Raw Cambodian Straight",
    category: "Bundles",
    subcategory: "Straight",
    price: "$125",
    priceNum: 125,
    image: hairBundlesStraight,
    hoverImage: hairHero,
    isBestseller: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\"", "32\"", "34\"", "36\""],
    weights: ["100g", "150g", "200g", "300g", "400g"],
    colors: ["Natural Black #1B"],
    description: "Raw unprocessed Cambodian straight bundles. Single donor, cuticle-aligned. The finest quality virgin hair available.",
  },
  {
    id: 20,
    name: "Ponytail Extension",
    category: "Extensions",
    subcategory: "Ponytail",
    price: "$75",
    priceNum: 75,
    image: hairBundlesStraight,
    hoverImage: hairBundlesBodywave,
    lengths: ["18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\""],
    weights: ["100g", "150g"],
    colors: ["Natural Black #1B", "Jet Black #1", "613 Blonde"],
    description: "Wrap-around ponytail extension for an instant glam look. Secure velcro and comb attachment. 100% human hair.",
  },
  {
    id: 21,
    name: "13x4 Body Wave Frontal",
    category: "Frontals",
    subcategory: "Body Wave",
    price: "$130",
    priceNum: 130,
    image: hairBundlesBodywave,
    hoverImage: hairClosure,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\""],
    weights: ["100g"],
    colors: ["Natural Black #1B"],
    description: "Body wave lace frontal with ear-to-ear coverage. HD lace for invisible hairline. Pre-plucked and ready to install.",
  },
  {
    id: 22,
    name: "Blonde Straight Bundles",
    category: "Bundles",
    subcategory: "Blonde",
    price: "$135",
    priceNum: 135,
    image: hairWigBlonde,
    hoverImage: hairBundlesStraight,
    isNew: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\""],
    weights: ["100g", "150g", "200g"],
    colors: ["613 Blonde", "Honey Blonde #27"],
    description: "Premium 613 blonde straight virgin bundles. Pre-bleached and ready to tone. No chemical smell. Silky and manageable.",
  },
  {
    id: 23,
    name: "Curly Full Lace Wig",
    category: "Wigs",
    subcategory: "Kinky Curly",
    price: "$310",
    priceNum: 310,
    image: hairBundlesDeepwave,
    hoverImage: hairFrontal,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
    weights: ["180g", "220g"],
    colors: ["Natural Black #1B"],
    description: "Full lace kinky curly wig for the most versatile styling. Can be worn in a high ponytail. 180% density for maximum volume.",
  },
  {
    id: 24,
    name: "I-Tip Extensions",
    category: "Extensions",
    subcategory: "I-Tip",
    price: "$165",
    priceNum: 165,
    image: hairBundlesStraight,
    hoverImage: hairHero,
    lengths: ["16\"", "18\"", "20\"", "22\"", "24\""],
    weights: ["50g", "100g"],
    colors: ["Natural Black #1B", "Dark Brown #2", "613 Blonde"],
    description: "Pre-bonded I-tip (stick tip) extensions. 100 strands per pack. Keratin bond for long-lasting, damage-free wear.",
  },
];

export const categories = [
  { name: "Bundles", slug: "bundles", description: "Premium virgin hair bundles in all textures" },
  { name: "Wigs", slug: "wigs", description: "HD lace wigs for a flawless, natural look" },
  { name: "Frontals", slug: "frontals", description: "Lace frontals for seamless hairlines" },
  { name: "Closures", slug: "closures", description: "Lace closures to complete your install" },
  { name: "Clip-Ins", slug: "clip-ins", description: "Instant length and volume, no commitment" },
  { name: "Extensions", slug: "extensions", description: "Tape-ins, I-tips, ponytails & more" },
  { name: "Tape-Ins", slug: "tape-ins", description: "Seamless tape-in hair extensions" },
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.isNew || p.isBestseller).slice(0, 8);
};

export const getBestsellers = (): Product[] => {
  return products.filter(p => p.isBestseller);
};
