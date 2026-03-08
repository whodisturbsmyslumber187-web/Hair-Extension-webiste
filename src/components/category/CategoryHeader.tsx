import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import heroBundles from "@/assets/hero-bundles.jpg";
import heroCategory from "@/assets/hero-category.jpg";
import heroWigs from "@/assets/hero-wigs.jpg";

interface CategoryHeaderProps {
  category: string;
}

const categoryHeroMap: Record<string, string> = {
  "Bundles": heroBundles,
  "Wigs": heroWigs,
  "Frontals": heroCategory,
  "Closures": heroCategory,
  "Clip-Ins": heroWigs,
  "Extensions": heroCategory,
  "Tape-Ins": heroBundles,
  "New In": heroCategory,
};

const categoryDescriptions: Record<string, string> = {
  "Bundles": "Premium virgin hair bundles in every texture — silky, bouncy, and made to last.",
  "Wigs": "HD lace wigs crafted for a flawless, undetectable finish. Slay every look.",
  "Frontals": "Ear-to-ear lace frontals for the most natural, seamless hairline.",
  "Closures": "Swiss & HD lace closures to complete your sew-in with perfection.",
  "Clip-Ins": "Instant length and volume — no commitment, no damage. Just glam.",
  "Extensions": "I-tips, micro loops, ponytails & more for every style need.",
  "Tape-Ins": "Seamless, reusable tape-in extensions that lay perfectly flat.",
  "New In": "The latest drops — fresh textures, new lengths, exclusive colors.",
};

const CategoryHeader = ({ category }: CategoryHeaderProps) => {
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  const heroImage = categoryHeroMap[capitalizedCategory] || heroCategory;
  const description = categoryDescriptions[capitalizedCategory] || "Explore our premium collection of luxury hair extensions.";
  
  return (
    <section className="w-full mb-8">
      {/* Hero Banner */}
      <div className="relative w-full h-[240px] md:h-[320px] overflow-hidden mb-6">
        <img src={heroImage} alt={capitalizedCategory} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-8">
          <div className="max-w-4xl">
            <div className="mb-3">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="text-white/70 hover:text-white text-xs">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/40" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-white text-xs">{capitalizedCategory}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <h1 className="text-3xl md:text-5xl font-light text-white mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {capitalizedCategory}
            </h1>
            <p className="text-white/70 font-body text-sm md:text-base max-w-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHeader;
