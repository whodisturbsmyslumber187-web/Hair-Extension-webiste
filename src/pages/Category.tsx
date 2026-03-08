import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CategoryHeader from "../components/category/CategoryHeader";
import FilterSortBar from "../components/category/FilterSortBar";
import ProductGrid from "../components/category/ProductGrid";
import { categories } from "@/data/products";

const Category = () => {
  const { category } = useParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  const categoryInfo = categories.find(c => c.slug === category);
  const displayName = categoryInfo?.name || category?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "All Products";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-6">
        <CategoryHeader 
          category={displayName} 
        />
        
        <FilterSortBar 
          filtersOpen={filtersOpen}
          setFiltersOpen={setFiltersOpen}
          itemCount={24}
        />
        
        <ProductGrid category={category} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Category;
