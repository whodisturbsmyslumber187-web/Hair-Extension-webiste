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
            <p className="text-lg leading-relaxed">
              By operating exclusively online, we cut out expensive retail overhead and pass those savings directly to you. That means premium, Grade 12A virgin hair at prices you won't find in any salon or beauty supply store.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-3 bg-black/20 backdrop-blur-sm p-6 rounded-sm">
                <h4 className="text-lg">Lower Prices</h4>
                <p className="text-sm">No storefront means no inflated prices. You get the same luxury-grade hair at a fraction of salon markup.</p>
              </div>
              <div className="space-y-3 bg-black/20 backdrop-blur-sm p-6 rounded-sm">
                <h4 className="text-lg">Fast Processing</h4>
                <p className="text-sm">Orders are processed and shipped promptly. Estimated delivery is 4–6 weeks depending on supply and availability.</p>
              </div>
              <div className="space-y-3 bg-black/20 backdrop-blur-sm p-6 rounded-sm">
                <h4 className="text-lg">24/7 Support</h4>
                <p className="text-sm">Our team is always available via WhatsApp, email, and Instagram DM to help you pick the perfect hair.</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="We Ship Worldwide">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl">Delivery Times</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-white/20">
                  <span>Estimated Delivery</span>
                  <span>4–6 weeks</span>
                </div>
                <p className="text-sm">
                  Delivery times may vary depending on supply and availability. You'll receive a tracking number once your order ships.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl">Where We Ship</h3>
              <div className="space-y-3">
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
          <div className="bg-black/20 backdrop-blur-sm p-8 rounded-sm">
            <h3 className="text-xl mb-4">Free Virtual Consultation</h3>
            <p className="mb-6">
              Not sure which texture, length, or bundle count is right for you? Send us a message on WhatsApp or Instagram with a photo of your desired look, and our hair specialists will recommend the perfect package — completely free.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-sm mb-1">WhatsApp</p>
                <p className="text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <p className="text-sm mb-1">Email</p>
                <p className="text-sm">care@nayahair.com</p>
              </div>
              <div className="text-center">
                <p className="text-sm mb-1">Instagram</p>
                <p className="text-sm">@nayahair</p>
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
