import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";
import BackgroundSlideshow from "../../components/about/BackgroundSlideshow";

const StoreLocator = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundSlideshow />
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6 about-text-bold">
        <PageHeader 
          title="Shop Online" 
          subtitle="We're 100% online — luxury hair delivered straight to your door"
        />
        
        <ContentSection title="Why We're Online Only">
          <div className="space-y-6">
            <p className="text-lg text-foreground font-bold leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              By operating exclusively online, we cut out expensive retail overhead and pass those savings directly to you. That means premium, Grade 12A virgin hair at prices you won't find in any salon or beauty supply store.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-3 bg-muted/10 p-6">
                <h4 className="text-lg font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Lower Prices</h4>
                <p className="text-foreground font-bold text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  No storefront means no inflated prices. You get the same luxury-grade hair at a fraction of salon markup.
                </p>
              </div>
              <div className="space-y-3 bg-muted/10 p-6">
                <h4 className="text-lg font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Fast Processing</h4>
                <p className="text-foreground font-bold text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Orders are processed and shipped promptly. Estimated delivery is 4–6 weeks depending on supply and availability.
                </p>
              </div>
              <div className="space-y-3 bg-muted/10 p-6">
                <h4 className="text-lg font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">24/7 Support</h4>
                <p className="text-foreground font-bold text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Our team is always available via WhatsApp, email, and Instagram DM to help you pick the perfect hair.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="We Ship Worldwide">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Delivery Times</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Estimated Delivery</span>
                  <span className="text-foreground font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">4–6 weeks</span>
                </div>
                <p className="text-sm text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Delivery times may vary depending on supply and availability. You'll receive a tracking number once your order ships.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Where We Ship</h3>
              <div className="space-y-3 text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                <p>🇺🇸 United States</p>
                <p>🇬🇧 United Kingdom</p>
                <p>🇪🇺 Europe (all EU countries)</p>
                <p>🇨🇦 Canada</p>
                <p>🇦🇪 UAE & Middle East</p>
                <p>🌍 Rest of world — contact us for rates</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Need Help Choosing?">
          <div className="bg-muted/10 p-8">
            <h3 className="text-xl font-black text-foreground mb-4 drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Free Virtual Consultation</h3>
            <p className="text-foreground font-bold mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Not sure which texture, length, or bundle count is right for you? Send us a message on WhatsApp or Instagram with a photo of your desired look, and our hair specialists will recommend the perfect package — completely free.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-sm font-black text-foreground mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">WhatsApp</p>
                <p className="text-sm font-bold text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-black text-foreground mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Email</p>
                <p className="text-sm font-bold text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">care@nayahair.com</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-black text-foreground mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Instagram</p>
                <p className="text-sm font-bold text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">@nayahair</p>
              </div>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default StoreLocator;
