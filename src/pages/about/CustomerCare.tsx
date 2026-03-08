import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import AboutSidebar from "../../components/about/AboutSidebar";
import BackgroundSlideshow from "../../components/about/BackgroundSlideshow";

const CustomerCare = () => {
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
          title="Customer Care" 
          subtitle="We're here to help you with your hair needs"
        />
        
        <ContentSection title="Get in Touch">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">WhatsApp</h3>
              <p className="text-foreground/80 font-normal">+1 (555) 123-4567</p>
              <p className="text-sm text-foreground/70 font-normal">Fastest response — message us anytime</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Email</h3>
              <p className="text-foreground/80 font-normal">care@nayahair.com</p>
              <p className="text-sm text-foreground/70 font-normal">Response within 24 hours</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Instagram DM</h3>
              <p className="text-foreground/80 font-normal">@nayahair</p>
              <p className="text-sm text-foreground/70 font-normal">Send us a DM for quick questions</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Frequently Asked Questions">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="hair-type" className="border border-border px-6">
              <AccordionTrigger className="text-left hover:no-underline font-medium">
                What type of hair do you sell?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 font-normal">
                We sell 100% virgin human hair — unprocessed, single-donor, cuticle-aligned. Our hair is Grade 12A quality and comes in Straight, Body Wave, and Deep Wave textures in lengths from 10" to 30".
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bundles-needed" className="border border-border px-6">
              <AccordionTrigger className="text-left hover:no-underline font-medium">
                How many bundles do I need for a full head?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 font-normal">
                For lengths 10"–14", 2–3 bundles are sufficient. For 16"–22", we recommend 3–4 bundles. For 24"–30", you'll need 4–5 bundles. Check our Length Guide for a detailed breakdown including closure and frontal recommendations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="coloring" className="border border-border px-6">
              <AccordionTrigger className="text-left hover:no-underline font-medium">
                Can I colour or bleach the hair?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 font-normal">
                Yes! Our virgin hair takes colour beautifully. We recommend having a professional stylist handle bleaching and colouring for best results. Always do a strand test first. Our blonde and coloured bundles are pre-processed for your convenience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="longevity" className="border border-border px-6">
              <AccordionTrigger className="text-left hover:no-underline font-medium">
                How long does the hair last?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 font-normal">
                The lifespan of your hair depends entirely on how you care for it. Using sulfate-free products, sleeping on a silk or satin pillowcase, deep conditioning regularly, and avoiding excessive heat will all help extend the life of your bundles. The better you treat your hair, the longer it lasts — it's up to you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="shipping" className="border border-border px-6">
              <AccordionTrigger className="text-left hover:no-underline font-medium">
                What are your shipping options?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 font-normal">
                Estimated delivery is 4–6 weeks depending on supply and availability. All orders include tracking and are shipped in discreet luxury packaging. You'll receive a tracking number via email once your order ships.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="returns" className="border border-border px-6">
              <AccordionTrigger className="text-left hover:no-underline font-medium">
                What is your return policy?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 font-normal">
                All sales are final. Due to the intimate nature of hair products, we cannot accept returns or exchanges once the hair has been opened, worn, or installed. Please review our Length Guide and reach out to our team before ordering if you're unsure.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ContentSection>

        <ContentSection title="Contact Form">
          <div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input className="rounded-none" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input className="rounded-none" placeholder="Your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" className="rounded-none" placeholder="Your email address" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Order Number (Optional)</label>
                <Input className="rounded-none" placeholder="e.g. NAYA-12345" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">How can we help?</label>
                <Textarea 
                  className="rounded-none min-h-[120px]" 
                  placeholder="Tell us about your question — include your hair length, texture, and any details that will help us assist you faster"
                />
              </div>
              
              <Button type="submit" className="w-full rounded-none">
                Send Message
              </Button>
            </form>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default CustomerCare;
