import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface CategoryHeaderProps {
  category: string;
}

const CategoryHeader = ({ category }: CategoryHeaderProps) => {
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
  return (
    <section className="w-full px-6 mb-8">
        <div className="text-sm font-light text-muted-foreground mb-6">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-foreground font-normal">{capitalizedCategory}</span>
        </div>
        
        <div>
          <h1 className="text-3xl md:text-4xl font-light text-foreground">
            {capitalizedCategory}
          </h1>
        </div>
    </section>
  );
};

export default CategoryHeader;