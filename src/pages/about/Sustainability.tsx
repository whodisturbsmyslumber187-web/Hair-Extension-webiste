import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";
import BackgroundSlideshow from "../../components/about/BackgroundSlideshow";

const Sustainability = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundSlideshow />
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Hair Quality" 
          subtitle="What sets Naya hair apart — from source to slay"
        />
        
        <ContentSection title="Our Sourcing Standards">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Ethically Sourced</h3>
              <p className="text-muted-foreground leading-relaxed">
                All Naya hair is ethically sourced from single donors. We work directly with trusted collectors who ensure fair compensation and transparent practices. Every bundle can be traced back to its origin.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Cuticle-Aligned</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our hair is collected with cuticles running in the same direction — root to tip. This eliminates tangling and matting, giving you that silky, natural movement that cheap hair simply can't replicate.
              </p>
            </div>
          </div>

          <div className="bg-muted/10 p-8">
            <h3 className="text-2xl font-light text-foreground mb-6">Quality Benchmarks</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-light text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Virgin human hair — no synthetics, no blends</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">Grade 12A</div>
                <p className="text-sm text-muted-foreground">Highest quality grade available on the market</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">12–24 mo</div>
                <p className="text-sm text-muted-foreground">Lifespan with proper care and maintenance</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Quality Control Process">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every bundle goes through a 5-step quality check before it reaches you. We reject anything that doesn't meet our standards — no exceptions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Texture Verification</h3>
                <p className="text-muted-foreground">
                  Every bundle is checked to ensure the texture pattern (straight, body wave, deep wave) is consistent from root to tip and holds its shape after washing.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Weight & Length Accuracy</h3>
                <p className="text-muted-foreground">
                  We weigh every bundle and verify the length so you always receive the exact inches and grams you ordered — no stretching, no short bundles.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Hair Care Tips">
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              Proper care extends the life of your Naya hair. Follow these expert tips to keep your hair looking fresh.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 bg-muted/10 p-6">
                <h4 className="font-light text-foreground">Washing</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use sulfate-free shampoo and conditioner</li>
                  <li>• Wash in a downward motion — never scrub</li>
                  <li>• Co-wash between full washes to maintain moisture</li>
                  <li>• Air dry when possible to preserve texture</li>
                </ul>
              </div>
              <div className="space-y-4 bg-muted/10 p-6">
                <h4 className="font-light text-foreground">Styling & Maintenance</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Always use heat protectant before flat-ironing or curling</li>
                  <li>• Sleep on a silk or satin pillowcase</li>
                  <li>• Detangle from ends to roots with a wide-tooth comb</li>
                  <li>• Deep condition weekly for maximum softness</li>
                </ul>
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

export default Sustainability;
