import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import ImageTextBlock from "../../components/about/ImageTextBlock";
import AboutSidebar from "../../components/about/AboutSidebar";
import BackgroundSlideshow from "../../components/about/BackgroundSlideshow";
import heroImage from "@/assets/hero-bundles.jpg";

const OurStory = () => {
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
            title="Our Story" 
            subtitle="Premium virgin hair extensions — crafted for confidence, designed for queens"
          />
          
          <ContentSection>
            <ImageTextBlock
              image={heroImage}
              imageAlt="Naya Hair Extensions founders"
              title="Over 20 Years of Excellence"
              content="For over 20 years, we have been a trusted source in the hair industry, supplying premium virgin human hair to both retail customers and professional salons worldwide. Founded by women who were tired of low-quality hair that tangled after one wash, we went straight to the source — partnering with ethical suppliers to bring you 100% virgin human hair that looks, feels, and moves like your own."
              imagePosition="left"
            />
          </ContentSection>

          <ContentSection title="Why We're Different">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl">100% Virgin Human Hair</h3>
                <p className="leading-relaxed">
                  Every bundle, closure, and frontal in our collection is made from unprocessed, single-donor virgin hair. The cuticles are aligned in one direction, which means zero tangling, minimal shedding, and a natural lustre that lasts for years — not days.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl">Direct From Source</h3>
                <p className="leading-relaxed">
                  We cut out the middleman entirely. Our hair is sourced directly from trusted collectors and goes through rigorous quality control before it ever reaches you. That means luxury-grade hair at prices that actually make sense.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Our Promise">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg">Luxury Quality</h3>
                <p>Every texture is hand-selected and tested. We stand behind the quality of every single bundle we ship.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg">True to Texture</h3>
                <p>What you see is what you get. Our straight is bone-straight, our body wave holds its pattern, and our deep wave stays defined wash after wash.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg">Built to Last</h3>
                <p>With proper care, our hair lasts 12–24 months. Colour it, curl it, flat-iron it — it bounces back every time.</p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="The Naya Standard">
            <div className="bg-black/20 backdrop-blur-sm p-8 space-y-6 rounded-sm">
              <p className="text-lg leading-relaxed">
                Every order is double-checked, carefully packaged, and shipped with love. We're not just selling hair — we're delivering confidence. Whether it's your first install or your hundredth, Naya is designed to make you feel like the most beautiful version of yourself.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">10K+</div>
                  <p className="text-sm">Happy customers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">100%</div>
                  <p className="text-sm">Virgin human hair</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">5+</div>
                  <p className="text-sm">Textures available</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">24/7</div>
                  <p className="text-sm">Customer support</p>
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

export default OurStory;
