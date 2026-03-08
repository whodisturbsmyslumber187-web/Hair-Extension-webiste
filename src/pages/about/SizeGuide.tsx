import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";
import BackgroundSlideshow from "../../components/about/BackgroundSlideshow";

const SizeGuide = () => {
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
          title="Length Guide" 
          subtitle="Find the perfect length for your desired look"
        />
        
        <ContentSection title="Bundle Lengths">
          <div className="space-y-8">
            <div className="bg-muted/10 p-8">
              <h3 className="text-xl font-medium text-foreground mb-6">How to Choose Your Length</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Short & Sassy (10"–14")</h4>
                  <p className="text-foreground/80 font-normal">
                    Perfect for bob cuts and shoulder-length styles. Low maintenance, lightweight, and full of body. Great for everyday wear and a natural look.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Medium Glam (16"–20")</h4>
                  <p className="text-foreground/80 font-normal">
                    The most popular range. Hits mid-back and gives you versatility — wear it straight, curled, or in an updo. The sweet spot between drama and wearability.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Long & Luxe (22"–26")</h4>
                  <p className="text-foreground/80 font-normal">
                    Waist-length drama. This is the showstopper length — perfect for special events, photoshoots, and when you want to turn every head in the room.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Extra Long (28"–30")</h4>
                  <p className="text-foreground/80 font-normal">
                    Maximum length for the boldest looks. Reaches hip-length and creates a dramatic, high-fashion silhouette. Requires 4+ bundles for full coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="How Many Bundles Do I Need?">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted/20">
                  <th className="border border-border p-3 text-left font-medium">Length</th>
                  <th className="border border-border p-3 text-left font-medium">Bundles Needed</th>
                  <th className="border border-border p-3 text-left font-medium">Best For</th>
                  <th className="border border-border p-3 text-left font-medium">Closure/Frontal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { length: "10\"–14\"", bundles: "2–3", best: "Bob, shoulder length", closure: "4×4 Closure" },
                  { length: "16\"–18\"", bundles: "3", best: "Mid-back, everyday glam", closure: "4×4 or 5×5 Closure" },
                  { length: "20\"–22\"", bundles: "3–4", best: "Waist-length, versatile", closure: "13×4 Frontal" },
                  { length: "24\"–26\"", bundles: "4", best: "Hip-length, dramatic", closure: "13×4 or 13×6 Frontal" },
                  { length: "28\"–30\"", bundles: "4–5", best: "Maximum length, editorial", closure: "13×6 Frontal" }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-muted/10">
                    <td className="border border-border p-3 text-foreground font-normal">{row.length}</td>
                    <td className="border border-border p-3 text-foreground font-normal">{row.bundles}</td>
                    <td className="border border-border p-3 text-foreground/80 font-normal">{row.best}</td>
                    <td className="border border-border p-3 text-foreground/80 font-normal">{row.closure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentSection>

        <ContentSection title="Closure vs. Frontal">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Lace Closures</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground/80 font-normal">4×4 Closure</span>
                  <span className="text-foreground font-medium">Middle/side part</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground/80 font-normal">5×5 Closure</span>
                  <span className="text-foreground font-medium">More parting freedom</span>
                </div>
              </div>
              <p className="text-sm text-foreground/70 font-normal">
                Closures sit at the top of your head and give a natural-looking part. Best for sew-ins where you want a defined middle or side part.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Lace Frontals</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground/80 font-normal">13×4 Frontal</span>
                  <span className="text-foreground font-medium">Ear to ear coverage</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground/80 font-normal">13×6 Frontal</span>
                  <span className="text-foreground font-medium">Deep parting space</span>
                </div>
              </div>
              <p className="text-sm text-foreground/70 font-normal">
                Frontals cover the entire front hairline from ear to ear. Perfect for a completely natural-looking hairline with maximum styling versatility.
              </p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Texture Guide">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 bg-muted/10 p-6">
              <h3 className="text-lg font-medium text-foreground">Straight</h3>
              <p className="text-foreground/70 font-normal text-sm">
                Bone-straight, sleek, and glossy. The most versatile texture — curl it for volume or keep it pin-straight for a polished look. Blends with relaxed natural hair.
              </p>
            </div>
            <div className="space-y-4 bg-muted/10 p-6">
              <h3 className="text-lg font-medium text-foreground">Body Wave</h3>
              <p className="text-foreground/70 font-normal text-sm">
                Loose, flowing S-shaped waves. Adds natural movement and volume without the effort. The #1 best-selling texture for everyday glam.
              </p>
            </div>
            <div className="space-y-4 bg-muted/10 p-6">
              <h3 className="text-lg font-medium text-foreground">Deep Wave</h3>
              <p className="text-foreground/70 font-normal text-sm">
                Tight, defined curls with lots of volume and texture. A bold, full look that makes a statement. Perfect for those who love big, voluminous hair.
              </p>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default SizeGuide;
