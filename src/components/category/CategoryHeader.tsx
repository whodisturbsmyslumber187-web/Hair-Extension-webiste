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
  return (
    <section className="w-full px-6 mb-8">
        <div className="text-sm font-light text-muted-foreground mb-6">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-foreground font-normal">{category}</span>
        </div>
        
        <div>
          <h1 className="text-3xl md:text-4xl font-light text-foreground">
            {category}
          </h1>
        </div>
    </section>
  );
};

export default CategoryHeader;