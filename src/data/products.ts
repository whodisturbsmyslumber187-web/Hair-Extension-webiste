import hairBundlesStraight from "@/assets/hair-bundles-straight.jpg";
import hairBundlesBodywave from "@/assets/hair-bundles-bodywave.jpg";
import hairBundlesDeepwave from "@/assets/hair-bundles-deepwave.jpg";
import hairFrontal from "@/assets/hair-frontal.jpg";
import hairWigBlonde from "@/assets/hair-wig-blonde.jpg";
import hairClosure from "@/assets/hair-closure.jpg";
import hairHero from "@/assets/hair-hero-1.jpg";
import hairBundlesBrown from "@/assets/hair-bundles-brown.jpg";
import hairBundlesHoneyBlonde from "@/assets/hair-bundles-honey-blonde.jpg";
import hairBundlesJetblack from "@/assets/hair-bundles-jetblack.jpg";
import hairBlondeBodywave from "@/assets/hair-blonde-bodywave.jpg";
import hairBlondeDeepwave from "@/assets/hair-blonde-deepwave.jpg";
import hairBlondeStraight from "@/assets/hair-blonde-straight.jpg";
import hairBlondeFrontal from "@/assets/hair-blonde-frontal.jpg";
import hairClosureBodywave from "@/assets/hair-closure-bodywave.jpg";
import hairFrontalDeepwave from "@/assets/hair-frontal-deepwave.jpg";
import hairWigBodywave from "@/assets/hair-wig-bodywave.jpg";
import hairMicroLoop from "@/assets/hair-micro-loop.jpg";
import hairBundlesBurgundy from "@/assets/hair-bundles-burgundy.jpg";
import hairBundlesGoldenBrown from "@/assets/hair-bundles-golden-brown.jpg";
import hairBundlesOmbre from "@/assets/hair-bundles-ombre.jpg";

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
  lengthPrices?: Record<string, number>;
  weightPrices?: Record<string, number>;
  colorImages?: Record<string, string>;
}

/** Bulk discount rates by weight for bundles */
const weightDiscounts: Record<string, number> = {
  "100g": 0, "150g": 0.10, "200g": 0.15, "300g": 0.20, "400g": 0.25,
};

const weightMultipliers: Record<string, number> = {
  "50g": 0.5, "60g": 0.6, "100g": 1, "120g": 1.2, "150g": 1.5, "160g": 1.6,
  "180g": 1.8, "200g": 2, "220g": 2.2, "250g": 2.5, "300g": 3, "400g": 4,
};

export const calculatePrice = (product: Product, selectedLength?: string, selectedWeight?: string): number => {
  let basePrice = product.priceNum;
  if (selectedLength && product.lengthPrices?.[selectedLength] !== undefined) {
    basePrice = product.lengthPrices[selectedLength];
  }
  if (selectedWeight && product.category === "Bundles") {
    const multiplier = weightMultipliers[selectedWeight] || 1;
    const discount = weightDiscounts[selectedWeight] || 0;
    return Math.round(basePrice * multiplier * (1 - discount));
  }
  if (selectedWeight && product.weightPrices?.[selectedWeight] !== undefined) {
    const weightAdj = product.weightPrices[selectedWeight] - product.priceNum;
    return basePrice + weightAdj;
  }
  return basePrice;
};

export const getWeightDiscount = (weight: string): string | null => {
  const discount = weightDiscounts[weight];
  if (discount && discount > 0) return `${Math.round(discount * 100)}% off`;
  return null;
};

const genLengthPrices = (lengths: string[], basePrice: number, increment: number): Record<string, number> => {
  const map: Record<string, number> = {};
  lengths.forEach((l, i) => { map[l] = basePrice + i * increment; });
  return map;
};

const genWeightPrices = (weights: string[], basePrice: number, increment: number): Record<string, number> => {
  const map: Record<string, number> = {};
  weights.forEach((w, i) => { map[w] = basePrice + i * increment; });
  return map;
};

// ─── Color → Image maps by texture ───
const straightColorMap: Record<string, string> = {
  "Natural Black #1B": hairBundlesStraight,
  "Jet Black #1": hairBundlesJetblack,
  "Dark Brown #2": hairBundlesBrown,
  "Golden Brown #4": hairBundlesGoldenBrown,
  "Burgundy #99J": hairBundlesBurgundy,
  "613 Blonde": hairBlondeStraight,
  "Honey Blonde #27": hairBundlesHoneyBlonde,
  "Ombre T1B/27": hairBundlesOmbre,
};

const bodywaveColorMap: Record<string, string> = {
  "Natural Black #1B": hairBundlesBodywave,
  "Dark Brown #2": hairBundlesBrown,
  "Golden Brown #4": hairBundlesGoldenBrown,
  "Burgundy #99J": hairBundlesBurgundy,
  "613 Blonde": hairBlondeBodywave,
  "Honey Blonde #27": hairBundlesHoneyBlonde,
  "Ombre T1B/27": hairBundlesOmbre,
};

const deepwaveColorMap: Record<string, string> = {
  "Natural Black #1B": hairBundlesDeepwave,
  "Dark Brown #2": hairBundlesBrown,
  "Burgundy #99J": hairBundlesBurgundy,
  "613 Blonde": hairBlondeDeepwave,
  "Honey Blonde #27": hairBundlesHoneyBlonde,
};

// ─── Products (all prices +12% markup) ───
export const products: Product[] = [
  {
    id: 1,
    name: "Straight Virgin Bundles",
    category: "Bundles",
    subcategory: "Straight",
    price: "$71",
    priceNum: 71,
    image: hairBundlesStraight,
    hoverImage: hairHero,
    isNew: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\"", "32\"", "34\"", "36\"", "38\"", "40\""],
    weights: ["100g", "150g", "200g", "300g", "400g"],
    colors: ["Natural Black #1B", "Jet Black #1", "Dark Brown #2", "Golden Brown #4", "Burgundy #99J", "613 Blonde", "Honey Blonde #27", "Ombre T1B/27"],
    description: "100% unprocessed Brazilian virgin straight hair bundles. Silky smooth, no tangling, no shedding. Can be colored, bleached, and styled.",
    colorImages: { ...straightColorMap },
  },
  {
    id: 2,
    name: "Body Wave Bundles",
    category: "Bundles",
    subcategory: "Body Wave",
    price: "$84",
    priceNum: 84,
    image: hairBundlesBodywave,
    hoverImage: hairBundlesStraight,
    isBestseller: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\"", "32\"", "34\"", "36\"", "38\"", "40\""],
    weights: ["100g", "150g", "200g", "300g", "400g"],
    colors: ["Natural Black #1B", "Dark Brown #2", "Golden Brown #4", "Burgundy #99J", "Honey Blonde #27", "613 Blonde", "Ombre T1B/27"],
    description: "Premium body wave virgin hair with gorgeous S-pattern waves. Bouncy, full, and luxuriously soft. Maintains curl pattern after washing.",
    colorImages: { ...bodywaveColorMap },
  },
  {
    id: 3,
    name: "Deep Wave Bundles",
    category: "Bundles",
    subcategory: "Deep Wave",
    price: "$86",
    priceNum: 86,
    image: hairBundlesDeepwave,
    hoverImage: hairBundlesBodywave,
    isNew: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\"", "32\""],
    weights: ["100g", "150g", "200g", "300g", "400g"],
    colors: ["Natural Black #1B", "Dark Brown #2", "Burgundy #99J", "613 Blonde", "Honey Blonde #27"],
    description: "Deep wave virgin hair bundles with tight, defined curls. Full and voluminous with a natural bounce. 100% human hair.",
    colorImages: { ...deepwaveColorMap },
  },
  {
    id: 4,
    name: "13x4 Lace Frontal",
    category: "Frontals",
    subcategory: "Straight",
    price: "$102",
    priceNum: 102,
    image: hairFrontal,
    hoverImage: hairClosure,
    isBestseller: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
    weights: ["100g"],
    colors: ["Natural Black #1B", "Jet Black #1", "Dark Brown #2", "613 Blonde"],
    description: "HD lace frontal with pre-plucked hairline and baby hairs. Ear-to-ear coverage for the most natural look. Bleached knots.",
    colorImages: { "Natural Black #1B": hairFrontal, "Jet Black #1": hairBundlesJetblack, "Dark Brown #2": hairBundlesBrown, "613 Blonde": hairBlondeFrontal },
  },
  {
    id: 5,
    name: "613 Blonde Straight Wig",
    category: "Wigs",
    subcategory: "Blonde",
    price: "$217",
    priceNum: 217,
    image: hairWigBlonde,
    hoverImage: hairFrontal,
    isNew: true,
    lengths: ["16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\"", "32\"", "34\"", "36\"", "38\"", "40\""],
    weights: ["150g", "200g", "250g"],
    colors: ["613 Blonde", "Honey Blonde #27", "Ash Blonde"],
    description: "Platinum blonde 613 full lace wig. Pre-plucked hairline with baby hairs. 150% density. Can be toned to any shade.",
    colorImages: { "613 Blonde": hairWigBlonde, "Honey Blonde #27": hairBundlesHoneyBlonde, "Ash Blonde": hairBlondeFrontal },
  },
  {
    id: 6,
    name: "4x4 Lace Closure",
    category: "Closures",
    subcategory: "Straight",
    price: "$52",
    priceNum: 52,
    image: hairClosure,
    hoverImage: hairBundlesStraight,
    lengths: ["14\"", "16\"", "18\"", "20\""],
    weights: ["50g"],
    colors: ["Natural Black #1B", "Dark Brown #2", "613 Blonde"],
    description: "Swiss lace closure with natural parting. Pre-plucked with baby hairs. Perfect to complete your bundle install.",
    colorImages: { "Natural Black #1B": hairClosure, "Dark Brown #2": hairBundlesBrown, "613 Blonde": hairBlondeFrontal },
  },
  {
    id: 7,
    name: "Kinky Curly Bundles",
    category: "Bundles",
    subcategory: "Kinky Curly",
    price: "$91",
    priceNum: 91,
    image: hairBundlesDeepwave,
    hoverImage: hairBundlesBodywave,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\""],
    weights: ["100g", "150g", "200g", "300g", "400g"],
    colors: ["Natural Black #1B", "Dark Brown #2", "Burgundy #99J"],
    description: "Afro kinky curly virgin hair bundles that blend perfectly with natural hair. Soft, full, and tangle-free.",
    colorImages: { "Natural Black #1B": hairBundlesDeepwave, "Dark Brown #2": hairBundlesBrown, "Burgundy #99J": hairBundlesBurgundy },
  },
  {
    id: 8,
    name: "Straight Lace Front Wig",
    category: "Wigs",
    subcategory: "Straight",
    price: "$183",
    priceNum: 183,
    image: hairFrontal,
    hoverImage: hairBundlesStraight,
    isBestseller: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\"", "32\"", "34\"", "36\""],
    weights: ["150g", "200g", "250g"],
    colors: ["Natural Black #1B", "Jet Black #1", "Dark Brown #2", "613 Blonde", "Burgundy #99J"],
    description: "Silky straight HD lace front wig with glueless install option. Pre-plucked natural hairline. 180% density for a full, glamorous look.",
    colorImages: { "Natural Black #1B": hairFrontal, "Jet Black #1": hairBundlesJetblack, "Dark Brown #2": hairBundlesBrown, "613 Blonde": hairWigBlonde, "Burgundy #99J": hairBundlesBurgundy },
  },
  {
    id: 9,
    name: "Loose Wave Bundles",
    category: "Bundles",
    subcategory: "Loose Wave",
    price: "$75",
    priceNum: 75,
    image: hairBundlesBodywave,
    hoverImage: hairBundlesDeepwave,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\""],
    weights: ["100g", "150g", "200g", "300g", "400g"],
    colors: ["Natural Black #1B", "Dark Brown #2", "Golden Brown #4", "Honey Blonde #27", "Ombre T1B/27"],
    description: "Gorgeous loose wave pattern with natural bounce and movement. 100% virgin Peruvian hair. Minimal shedding guaranteed.",
    colorImages: { ...bodywaveColorMap },
  },
  {
    id: 10,
    name: "Body Wave Lace Front Wig",
    category: "Wigs",
    subcategory: "Body Wave",
    price: "$201",
    priceNum: 201,
    image: hairWigBodywave,
    hoverImage: hairFrontal,
    lengths: ["16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\""],
    weights: ["150g", "200g", "250g"],
    colors: ["Natural Black #1B", "Dark Brown #2", "613 Blonde"],
    description: "Body wave HD lace front wig with pre-plucked hairline. Glueless cap construction. 150% density. Natural and undetectable.",
    colorImages: { "Natural Black #1B": hairWigBodywave, "Dark Brown #2": hairBundlesGoldenBrown, "613 Blonde": hairWigBlonde },
  },
  {
    id: 11,
    name: "5x5 HD Lace Closure",
    category: "Closures",
    subcategory: "Body Wave",
    price: "$68",
    priceNum: 68,
    image: hairClosureBodywave,
    hoverImage: hairBundlesBodywave,
    isNew: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\""],
    weights: ["60g"],
    colors: ["Natural Black #1B", "Dark Brown #2"],
    description: "Ultra-thin HD lace closure that melts into the scalp. Free part, middle part, or three part options available.",
    colorImages: { "Natural Black #1B": hairClosureBodywave, "Dark Brown #2": hairBundlesBrown },
  },
  {
    id: 12,
    name: "13x6 Deep Wave Frontal",
    category: "Frontals",
    subcategory: "Deep Wave",
    price: "$125",
    priceNum: 125,
    image: hairFrontalDeepwave,
    hoverImage: hairClosure,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
    weights: ["100g"],
    colors: ["Natural Black #1B", "Dark Brown #2"],
    description: "Extended 13x6 lace frontal with deep wave texture. More parting space for versatile styling. Pre-plucked with baby hairs.",
    colorImages: { "Natural Black #1B": hairFrontalDeepwave, "Dark Brown #2": hairBundlesBrown },
  },
  {
    id: 13,
    name: "Water Wave Bundles",
    category: "Bundles",
    subcategory: "Water Wave",
    price: "$79",
    priceNum: 79,
    image: hairBundlesDeepwave,
    hoverImage: hairBundlesBodywave,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\""],
    weights: ["100g", "150g", "200g", "300g"],
    colors: ["Natural Black #1B", "Dark Brown #2", "Burgundy #99J"],
    description: "Beautiful water wave pattern that mimics natural ocean waves. Soft, lightweight, and easy to maintain.",
    colorImages: { "Natural Black #1B": hairBundlesDeepwave, "Dark Brown #2": hairBundlesBrown, "Burgundy #99J": hairBundlesBurgundy },
  },
  {
    id: 14,
    name: "Blonde Body Wave Wig",
    category: "Wigs",
    subcategory: "Blonde",
    price: "$229",
    priceNum: 229,
    image: hairWigBlonde,
    hoverImage: hairBundlesBodywave,
    lengths: ["16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\""],
    weights: ["150g", "200g"],
    colors: ["613 Blonde", "Honey Blonde #27", "Ash Blonde", "Golden Brown #4"],
    description: "Full lace body wave wig in stunning 613 blonde. Can be toned, dyed, and heat styled. Premium virgin hair.",
    colorImages: { "613 Blonde": hairWigBlonde, "Honey Blonde #27": hairBundlesHoneyBlonde, "Ash Blonde": hairBlondeFrontal, "Golden Brown #4": hairBundlesGoldenBrown },
  },
  {
    id: 15,
    name: "Straight Clip-In Extensions",
    category: "Clip-Ins",
    subcategory: "Straight",
    price: "$114",
    priceNum: 114,
    image: hairBundlesStraight,
    hoverImage: hairHero,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
    weights: ["100g", "150g", "200g"],
    colors: ["Natural Black #1B", "Jet Black #1", "Dark Brown #2", "Golden Brown #4", "613 Blonde", "Burgundy #99J"],
    description: "7-piece clip-in set for instant length and volume. No commitment, easy to apply and remove. 100% Remy human hair.",
    colorImages: { ...straightColorMap },
  },
  {
    id: 16,
    name: "Tape-In Extensions",
    category: "Tape-Ins",
    subcategory: "Straight",
    price: "$125",
    priceNum: 125,
    image: hairBundlesStraight,
    hoverImage: hairClosure,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
    weights: ["50g", "100g", "150g"],
    colors: ["Natural Black #1B", "Dark Brown #2", "Golden Brown #4", "613 Blonde", "Honey Blonde #27"],
    description: "Seamless tape-in extensions that lay flat against the head. 20 pieces per pack. Reusable up to 3 times.",
    colorImages: { ...straightColorMap },
  },
  {
    id: 17,
    name: "Deep Part Wig 26\"",
    category: "Wigs",
    subcategory: "Deep Wave",
    price: "$213",
    priceNum: 213,
    image: hairWigBodywave,
    hoverImage: hairFrontal,
    lengths: ["22\"", "24\"", "26\"", "28\"", "30\""],
    weights: ["200g", "250g"],
    colors: ["Natural Black #1B", "Dark Brown #2"],
    description: "Deep wave wig with 13x4 lace front. Deep parting space for the most natural look. Glueless cap with adjustable straps.",
    colorImages: { "Natural Black #1B": hairWigBodywave, "Dark Brown #2": hairBundlesGoldenBrown },
  },
  {
    id: 18,
    name: "Curly Clip-In Set",
    category: "Clip-Ins",
    subcategory: "Curly",
    price: "$125",
    priceNum: 125,
    image: hairBundlesDeepwave,
    hoverImage: hairBundlesBodywave,
    lengths: ["14\"", "16\"", "18\"", "20\""],
    weights: ["120g", "160g"],
    colors: ["Natural Black #1B", "Dark Brown #2"],
    description: "Natural curly clip-in extensions. 7 pieces with secure clips. Blends seamlessly with natural curly and coily textures.",
    colorImages: { "Natural Black #1B": hairBundlesDeepwave, "Dark Brown #2": hairBundlesBrown },
  },
  {
    id: 19,
    name: "Raw Cambodian Straight",
    category: "Bundles",
    subcategory: "Straight",
    price: "$102",
    priceNum: 102,
    image: hairBundlesStraight,
    hoverImage: hairHero,
    isBestseller: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\"", "32\"", "34\"", "36\""],
    weights: ["100g", "150g", "200g", "300g", "400g"],
    colors: ["Natural Black #1B", "Jet Black #1", "Dark Brown #2"],
    description: "Raw unprocessed Cambodian straight bundles. Single donor, cuticle-aligned. The finest quality virgin hair available.",
    colorImages: { "Natural Black #1B": hairBundlesStraight, "Jet Black #1": hairBundlesJetblack, "Dark Brown #2": hairBundlesBrown },
  },
  {
    id: 20,
    name: "Ponytail Extension",
    category: "Extensions",
    subcategory: "Ponytail",
    price: "$56",
    priceNum: 56,
    image: hairBundlesStraight,
    hoverImage: hairBundlesBodywave,
    lengths: ["18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\""],
    weights: ["100g", "150g"],
    colors: ["Natural Black #1B", "Jet Black #1", "Dark Brown #2", "613 Blonde", "Burgundy #99J"],
    description: "Wrap-around ponytail extension for an instant glam look. Secure velcro and comb attachment. 100% human hair.",
    colorImages: { ...straightColorMap },
  },
  {
    id: 21,
    name: "13x4 Body Wave Frontal",
    category: "Frontals",
    subcategory: "Body Wave",
    price: "$109",
    priceNum: 109,
    image: hairClosureBodywave,
    hoverImage: hairClosure,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\""],
    weights: ["100g"],
    colors: ["Natural Black #1B", "Dark Brown #2", "613 Blonde"],
    description: "Body wave lace frontal with ear-to-ear coverage. HD lace for invisible hairline. Pre-plucked and ready to install.",
    colorImages: { "Natural Black #1B": hairClosureBodywave, "Dark Brown #2": hairBundlesBrown, "613 Blonde": hairBlondeFrontal },
  },
  {
    id: 22,
    name: "Blonde Straight Bundles",
    category: "Bundles",
    subcategory: "Blonde",
    price: "$109",
    priceNum: 109,
    image: hairBlondeStraight,
    hoverImage: hairBundlesStraight,
    isNew: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\""],
    weights: ["100g", "150g", "200g"],
    colors: ["613 Blonde", "Honey Blonde #27", "Ash Blonde"],
    description: "Premium 613 blonde straight virgin bundles. Pre-bleached and ready to tone. No chemical smell. Silky and manageable.",
    colorImages: { "613 Blonde": hairBlondeStraight, "Honey Blonde #27": hairBundlesHoneyBlonde, "Ash Blonde": hairBlondeFrontal },
  },
  {
    id: 23,
    name: "Curly Full Lace Wig",
    category: "Wigs",
    subcategory: "Kinky Curly",
    price: "$247",
    priceNum: 247,
    image: hairWigBodywave,
    hoverImage: hairFrontal,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
    weights: ["180g", "220g"],
    colors: ["Natural Black #1B", "Dark Brown #2"],
    description: "Full lace kinky curly wig for the most versatile styling. Can be worn in a high ponytail. 180% density for maximum volume.",
    colorImages: { "Natural Black #1B": hairWigBodywave, "Dark Brown #2": hairBundlesGoldenBrown },
  },
  {
    id: 24,
    name: "I-Tip Extensions",
    category: "Extensions",
    subcategory: "I-Tip",
    price: "$137",
    priceNum: 137,
    image: hairBundlesStraight,
    hoverImage: hairHero,
    lengths: ["16\"", "18\"", "20\"", "22\"", "24\""],
    weights: ["50g", "100g"],
    colors: ["Natural Black #1B", "Dark Brown #2", "Golden Brown #4", "613 Blonde"],
    description: "Pre-bonded I-tip (stick tip) extensions. 100 strands per pack. Keratin bond for long-lasting, damage-free wear.",
    colorImages: { ...straightColorMap },
  },
  {
    id: 25,
    name: "4x4 Body Wave Closure",
    category: "Closures",
    subcategory: "Body Wave",
    price: "$56",
    priceNum: 56,
    image: hairClosureBodywave,
    hoverImage: hairClosure,
    lengths: ["14\"", "16\"", "18\"", "20\""],
    weights: ["50g"],
    colors: ["Natural Black #1B", "Dark Brown #2", "613 Blonde"],
    description: "Body wave Swiss lace closure with natural parting. Pre-plucked with baby hairs. Seamless blend for a flawless install.",
    colorImages: { "Natural Black #1B": hairClosureBodywave, "Dark Brown #2": hairBundlesBrown, "613 Blonde": hairBlondeFrontal },
  },
  {
    id: 26,
    name: "5x5 Deep Wave Closure",
    category: "Closures",
    subcategory: "Deep Wave",
    price: "$75",
    priceNum: 75,
    image: hairClosureBodywave,
    hoverImage: hairBundlesDeepwave,
    isNew: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\""],
    weights: ["60g"],
    colors: ["Natural Black #1B", "Dark Brown #2"],
    description: "Deep wave HD lace closure with tight defined curls. Invisible lace that melts into the scalp. Multiple parting options.",
    colorImages: { "Natural Black #1B": hairClosureBodywave, "Dark Brown #2": hairBundlesBrown },
  },
  {
    id: 27,
    name: "13x4 Kinky Curly Frontal",
    category: "Frontals",
    subcategory: "Kinky Curly",
    price: "$132",
    priceNum: 132,
    image: hairFrontalDeepwave,
    hoverImage: hairBundlesDeepwave,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\""],
    weights: ["100g"],
    colors: ["Natural Black #1B", "Dark Brown #2"],
    description: "Kinky curly lace frontal for the most natural-looking protective style. Pre-plucked with baby hairs. Bleached knots.",
    colorImages: { "Natural Black #1B": hairFrontalDeepwave, "Dark Brown #2": hairBundlesBrown },
  },
  {
    id: 28,
    name: "13x6 Straight HD Frontal",
    category: "Frontals",
    subcategory: "Straight",
    price: "$144",
    priceNum: 144,
    image: hairFrontal,
    hoverImage: hairClosure,
    isBestseller: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\""],
    weights: ["100g"],
    colors: ["Natural Black #1B", "Jet Black #1", "Dark Brown #2", "613 Blonde"],
    description: "Premium 13x6 HD lace frontal with extended parting space. Ultra-thin lace for the most undetectable hairline.",
    colorImages: { "Natural Black #1B": hairFrontal, "Jet Black #1": hairBundlesJetblack, "Dark Brown #2": hairBundlesBrown, "613 Blonde": hairBlondeFrontal },
  },
  {
    id: 29,
    name: "Water Wave Lace Wig",
    category: "Wigs",
    subcategory: "Water Wave",
    price: "$224",
    priceNum: 224,
    image: hairWigBodywave,
    hoverImage: hairBundlesDeepwave,
    isNew: true,
    lengths: ["16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\""],
    weights: ["150g", "200g", "250g"],
    colors: ["Natural Black #1B", "Dark Brown #2"],
    description: "Water wave HD lace front wig with natural ocean wave pattern. Glueless cap, pre-plucked hairline. 180% density.",
    colorImages: { "Natural Black #1B": hairWigBodywave, "Dark Brown #2": hairBundlesGoldenBrown },
  },
  {
    id: 30,
    name: "Micro Loop Extensions",
    category: "Extensions",
    subcategory: "Micro Loop",
    price: "$102",
    priceNum: 102,
    image: hairMicroLoop,
    hoverImage: hairBundlesStraight,
    lengths: ["16\"", "18\"", "20\"", "22\"", "24\""],
    weights: ["50g", "100g"],
    colors: ["Natural Black #1B", "Dark Brown #2", "Golden Brown #4", "Honey Blonde #27", "613 Blonde"],
    description: "Micro loop ring extensions with pre-attached silicone-lined beads. No heat, no glue. Easy DIY install. 100 strands per pack.",
    colorImages: { "Natural Black #1B": hairMicroLoop, "Dark Brown #2": hairBundlesBrown, "Golden Brown #4": hairBundlesGoldenBrown, "Honey Blonde #27": hairBundlesHoneyBlonde, "613 Blonde": hairBlondeStraight },
  },
  {
    id: 31,
    name: "Blonde Frontal 13x4",
    category: "Frontals",
    subcategory: "Blonde",
    price: "$155",
    priceNum: 155,
    image: hairBlondeFrontal,
    hoverImage: hairWigBlonde,
    isNew: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\""],
    weights: ["100g"],
    colors: ["613 Blonde", "Honey Blonde #27"],
    description: "613 blonde HD lace frontal. Pre-bleached, ready to tone. Ear-to-ear coverage with a seamless, invisible hairline.",
    colorImages: { "613 Blonde": hairBlondeFrontal, "Honey Blonde #27": hairBundlesHoneyBlonde },
  },
  {
    id: 32,
    name: "5x5 Blonde Closure",
    category: "Closures",
    subcategory: "Blonde",
    price: "$86",
    priceNum: 86,
    image: hairBlondeFrontal,
    hoverImage: hairWigBlonde,
    lengths: ["14\"", "16\"", "18\"", "20\""],
    weights: ["50g"],
    colors: ["613 Blonde", "Honey Blonde #27"],
    description: "613 blonde HD lace closure. Pre-bleached knots for undetectable parting. Perfect to complete a blonde bundle install.",
    colorImages: { "613 Blonde": hairBlondeFrontal, "Honey Blonde #27": hairBundlesHoneyBlonde },
  },
  {
    id: 33,
    name: "Invisible Wire Extensions",
    category: "Extensions",
    subcategory: "Wire",
    price: "$91",
    priceNum: 91,
    image: hairBundlesStraight,
    hoverImage: hairHero,
    lengths: ["16\"", "18\"", "20\"", "22\"", "24\""],
    weights: ["100g", "150g"],
    colors: ["Natural Black #1B", "Dark Brown #2", "Golden Brown #4", "613 Blonde"],
    description: "Invisible wire halo extensions with adjustable transparent wire. No clips, no glue. Put on in seconds for instant volume.",
    colorImages: { ...straightColorMap },
  },
  {
    id: 34,
    name: "Raw Vietnamese Straight",
    category: "Bundles",
    subcategory: "Straight",
    price: "$114",
    priceNum: 114,
    image: hairBundlesStraight,
    hoverImage: hairBundlesJetblack,
    isBestseller: true,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\"", "32\"", "34\""],
    weights: ["100g", "150g", "200g", "300g", "400g"],
    colors: ["Natural Black #1B", "Jet Black #1", "Dark Brown #2"],
    description: "Raw Vietnamese single-donor straight hair. The thickest, most durable virgin hair. Lasts 3-5 years with proper care.",
    colorImages: { "Natural Black #1B": hairBundlesStraight, "Jet Black #1": hairBundlesJetblack, "Dark Brown #2": hairBundlesBrown },
  },
  {
    id: 35,
    name: "Burmese Curly Bundles",
    category: "Bundles",
    subcategory: "Burmese Curly",
    price: "$98",
    priceNum: 98,
    image: hairBundlesDeepwave,
    hoverImage: hairBundlesBodywave,
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
    weights: ["100g", "150g", "200g", "300g", "400g"],
    colors: ["Natural Black #1B", "Dark Brown #2"],
    description: "Burmese curly virgin hair with a beautiful 3B/3C curl pattern. Blends seamlessly with natural curls. Zero processing.",
    colorImages: { "Natural Black #1B": hairBundlesDeepwave, "Dark Brown #2": hairBundlesBrown },
  },
];

// Auto-generate length and weight pricing for all products
products.forEach(p => {
  const lengthIncrement = p.category === "Wigs" ? 14 : p.category === "Frontals" ? 9 : p.category === "Closures" ? 7 : p.category === "Clip-Ins" ? 9 : p.category === "Tape-Ins" ? 7 : p.category === "Extensions" ? 7 : 9;
  const weightIncrement = p.category === "Wigs" ? 23 : 14;
  p.lengthPrices = genLengthPrices(p.lengths, p.priceNum, lengthIncrement);
  p.weightPrices = genWeightPrices(p.weights, p.priceNum, weightIncrement);
});

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
