import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";

const StoreLocator = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Shop Online" 
          subtitle="We're 100% online — luxury hair delivered straight to your door"
        />
        
        <ContentSection title="Why We're Online Only">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              By operating exclusively online, we cut out expensive retail overhead and pass those savings directly to you. That means premium, Grade 12A virgin hair at prices you won't find in any salon or beauty supply store.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-3 bg-muted/10 p-6">
                <h4 className="text-lg font-light text-foreground">Lower Prices</h4>
                <p className="text-muted-foreground text-sm">
                  No storefront means no inflated prices. You get the same luxury-grade hair at a fraction of salon markup.
                </p>
              </div>
              <div className="space-y-3 bg-muted/10 p-6">
                <h4 className="text-lg font-light text-foreground">Fast Shipping</h4>
                <p className="text-muted-foreground text-sm">
                  Orders ship within 24 hours. Standard delivery in 5–7 days, express in 2–3 days, or next-day if you need it ASAP.
                </p>
              </div>
              <div className="space-y-3 bg-muted/10 p-6">
                <h4 className="text-lg font-light text-foreground">24/7 Support</h4>
                <p className="text-muted-foreground text-sm">
                  Our team is always available via WhatsApp, email, and Instagram DM to help you pick the perfect hair.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="We Ship Worldwide">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Shipping Options</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Standard (5–7 days)</span>
                  <span className="text-foreground">Free over €150</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Express (2–3 days)</span>
                  <span className="text-foreground">€15</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Next-Day</span>
                  <span className="text-foreground">€35</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Where We Ship</h3>
              <div className="space-y-3 text-muted-foreground">
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
            <h3 className="text-xl font-light text-foreground mb-4">Free Virtual Consultation</h3>
            <p className="text-muted-foreground mb-6">
              Not sure which texture, length, or bundle count is right for you? Send us a message on WhatsApp or Instagram with a photo of your desired look, and our hair specialists will recommend the perfect package — completely free.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-sm font-medium text-foreground mb-1">WhatsApp</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-foreground mb-1">Email</p>
                <p className="text-sm text-muted-foreground">care@nayahair.com</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-foreground mb-1">Instagram</p>
                <p className="text-sm text-muted-foreground">@nayahair</p>
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
