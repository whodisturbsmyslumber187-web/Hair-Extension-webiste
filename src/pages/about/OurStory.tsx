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
              title="Born From a Need"
              content="Naya was founded by women who were tired of low-quality hair that tangled after one wash, shed after a week, and never matched the photos online. We went straight to the source — partnering with ethical suppliers to bring you 100% virgin human hair that looks, feels, and moves like your own. No shortcuts. No synthetics. Just premium hair you can trust."
              imagePosition="left"
            />
          </ContentSection>

          <ContentSection title="Why We're Different">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">100% Virgin Human Hair</h3>
                <p className="text-foreground font-bold leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Every bundle, closure, and frontal in our collection is made from unprocessed, single-donor virgin hair. The cuticles are aligned in one direction, which means zero tangling, minimal shedding, and a natural lustre that lasts for years — not days.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Direct From Source</h3>
                <p className="text-foreground font-bold leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  We cut out the middleman entirely. Our hair is sourced directly from trusted collectors and goes through rigorous quality control before it ever reaches you. That means luxury-grade hair at prices that actually make sense.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Our Promise">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Luxury Quality</h3>
                <p className="text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Every texture is hand-selected and tested. We stand behind the quality of every single bundle we ship.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">True to Texture</h3>
                <p className="text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  What you see is what you get. Our straight is bone-straight, our body wave holds its pattern, and our deep wave stays defined wash after wash.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Built to Last</h3>
                <p className="text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  With proper care, our hair lasts 12–24 months. Colour it, curl it, flat-iron it — it bounces back every time.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="The Naya Standard">
            <div className="bg-muted/10 p-8 space-y-6">
              <p className="text-lg text-foreground font-bold leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Every order is double-checked, carefully packaged, and shipped with love. We're not just selling hair — we're delivering confidence. Whether it's your first install or your hundredth, Naya is designed to make you feel like the most beautiful version of yourself.
              </p>
              <div className="grid md:grid-cols-4 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-2 drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">10K+</div>
                  <p className="text-sm font-bold text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Happy customers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-2 drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">100%</div>
                  <p className="text-sm font-bold text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Virgin human hair</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-2 drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">5+</div>
                  <p className="text-sm font-bold text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Textures available</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-2 drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">24/7</div>
                  <p className="text-sm font-bold text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Customer support</p>
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
