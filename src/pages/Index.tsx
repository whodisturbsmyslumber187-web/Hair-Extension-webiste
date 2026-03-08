import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import LargeHero from "../components/content/LargeHero";
import FiftyFiftySection from "../components/content/FiftyFiftySection";
import OneThirdTwoThirdsSection from "../components/content/OneThirdTwoThirdsSection";
import ProductCarousel from "../components/content/ProductCarousel";
import EditorialSection from "../components/content/EditorialSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-6">
        <LargeHero />
        
        <div className="mb-4 px-6">
          <h2 className="text-sm font-body tracking-wide text-foreground">Bestsellers</h2>
        </div>
        <ProductCarousel />
        
        <FiftyFiftySection />
        
        <div className="mb-4 px-6">
          <h2 className="text-sm font-body tracking-wide text-foreground">New Arrivals</h2>
        </div>
        <ProductCarousel filterCategory="Bundles" />
        
        <OneThirdTwoThirdsSection />
        <EditorialSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
