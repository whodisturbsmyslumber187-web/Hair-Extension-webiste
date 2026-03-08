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
              <h3 className="text-xl font-black text-foreground mb-6 drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">How to Choose Your Length</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Short & Sassy (10"–14")</h4>
                  <p className="text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    Perfect for bob cuts and shoulder-length styles. Low maintenance, lightweight, and full of body. Great for everyday wear and a natural look.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Medium Glam (16"–20")</h4>
                  <p className="text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    The most popular range. Hits mid-back and gives you versatility — wear it straight, curled, or in an updo. The sweet spot between drama and wearability.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <h4 className="font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Long & Luxe (22"–26")</h4>
                  <p className="text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    Waist-length drama. This is the showstopper length — perfect for special events, photoshoots, and when you want to turn every head in the room.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Extra Long (28"–30")</h4>
                  <p className="text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
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
                  <th className="border border-border p-3 text-left font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Length</th>
                  <th className="border border-border p-3 text-left font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Bundles Needed</th>
                  <th className="border border-border p-3 text-left font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Best For</th>
                  <th className="border border-border p-3 text-left font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Closure/Frontal</th>
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
                    <td className="border border-border p-3 text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{row.length}</td>
                    <td className="border border-border p-3 text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{row.bundles}</td>
                    <td className="border border-border p-3 text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{row.best}</td>
                    <td className="border border-border p-3 text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{row.closure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentSection>

        <ContentSection title="Closure vs. Frontal">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Lace Closures</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">4×4 Closure</span>
                  <span className="text-foreground font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Middle/side part</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">5×5 Closure</span>
                  <span className="text-foreground font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">More parting freedom</span>
                </div>
              </div>
              <p className="text-sm text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Closures sit at the top of your head and give a natural-looking part. Best for sew-ins where you want a defined middle or side part.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Lace Frontals</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">13×4 Frontal</span>
                  <span className="text-foreground font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Ear to ear coverage</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">13×6 Frontal</span>
                  <span className="text-foreground font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Deep parting space</span>
                </div>
              </div>
              <p className="text-sm text-foreground font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Frontals cover the entire front hairline from ear to ear. Perfect for a completely natural-looking hairline with maximum styling versatility.
              </p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Texture Guide">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 bg-muted/10 p-6">
              <h3 className="text-lg font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Straight</h3>
              <p className="text-foreground font-bold text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Bone-straight, sleek, and glossy. The most versatile texture — curl it for volume or keep it pin-straight for a polished look. Blends with relaxed natural hair.
              </p>
            </div>
            <div className="space-y-4 bg-muted/10 p-6">
              <h3 className="text-lg font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Body Wave</h3>
              <p className="text-foreground font-bold text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Loose, flowing S-shaped waves. Adds natural movement and volume without the effort. The #1 best-selling texture for everyday glam.
              </p>
            </div>
            <div className="space-y-4 bg-muted/10 p-6">
              <h3 className="text-lg font-black text-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">Deep Wave</h3>
              <p className="text-foreground font-bold text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
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
