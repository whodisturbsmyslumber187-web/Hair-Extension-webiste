import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { products, type Product } from "@/data/products";

interface ProductGridProps {
  category?: string;
}

const ProductGrid = ({ category }: ProductGridProps) => {
  const displayProducts = category && category !== "all" && category !== "new-in"
    ? products.filter(p => p.category.toLowerCase() === category.toLowerCase().replace(/-/g, ' ') || p.category.toLowerCase() === category.toLowerCase())
    : category === "new-in"
    ? products.filter(p => p.isNew)
    : products;

  return (
    <section className="w-full px-6 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {displayProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <Card className="border-none shadow-none bg-transparent group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-square mb-3 overflow-hidden bg-muted/10 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} alternate`}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-300 opacity-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-foreground/[0.03]"></div>
                  {product.isNew && (
                    <div className="absolute top-2 left-2 px-2 py-1 text-xs font-body font-medium text-primary bg-card/80 rounded-sm">
                      NEW
                    </div>
                  )}
                  {product.isBestseller && !product.isNew && (
                    <div className="absolute top-2 left-2 px-2 py-1 text-xs font-body font-medium text-primary bg-card/80 rounded-sm">
                      BESTSELLER
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-body font-light text-muted-foreground">
                    {product.category}
                  </p>
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-body font-medium text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-sm font-body font-light text-foreground">
                      from {product.price}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      {displayProducts.length > 20 && <Pagination />}
    </section>
  );
};

export default ProductGrid;
