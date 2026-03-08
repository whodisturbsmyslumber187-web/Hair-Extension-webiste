import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import StoreMap from "../../components/about/StoreMap";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const StoreLocator = () => {
  const stores = [
    {
      name: "LINEA Hair — Atlanta",
      address: "3500 Peachtree Road NE, Atlanta, GA 30326",
      phone: "+1 (404) 555-0123",
      hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
      services: ["In-Store Pickup", "Hair Consultations", "Colour Matching", "Bundle Deals"]
    },
    {
      name: "LINEA Hair — Houston",
      address: "2800 Post Oak Blvd, Houston, TX 77056",
      phone: "+1 (713) 555-0456",
      hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
      services: ["In-Store Pickup", "Hair Consultations", "VIP Appointments", "Custom Orders"]
    },
    {
      name: "LINEA Hair — London",
      address: "45 Oxford Street, London W1D 2DZ",
      phone: "+44 20 7555 0789",
      hours: "Mon-Sat: 10AM-7PM, Sun: 12PM-5PM",
      services: ["In-Store Pickup", "Hair Consultations", "Texture Matching", "Express Orders"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Store Locator" 
          subtitle="Visit us in person to see and feel the quality before you buy"
        />
        
        <ContentSection title="Find a Store">
          <StoreMap />
        </ContentSection>

        <ContentSection title="Our Locations">
          <div className="grid gap-8">
            {stores.map((store, index) => (
              <div key={index} className="bg-background p-8 border border-border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-light text-foreground">{store.name}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>{store.address}</p>
                      <p>{store.phone}</p>
                      <p>{store.hours}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button variant="outline" className="rounded-none">
                        Get Directions
                      </Button>
                      <Button className="rounded-none">
                        Book Appointment
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-light text-foreground">Services Available</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {store.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="In-Store Experience">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nothing beats touching and feeling the hair in person. Visit any LINEA location to compare textures, get colour-matched, and leave with your bundles the same day.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Hair Consultations</h4>
                <p className="text-muted-foreground text-sm">
                  Our hair specialists will help you choose the right texture, length, and number of bundles for your desired look.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Same-Day Pickup</h4>
                <p className="text-muted-foreground text-sm">
                  Order online and pick up in store within hours. Skip the shipping wait and get your hair today.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">VIP Appointments</h4>
                <p className="text-muted-foreground text-sm">
                  Book a private appointment for a one-on-one session with our team. Perfect for custom orders and bulk purchases.
                </p>
              </div>
            </div>
            
            <div className="pt-8">
              <Button size="lg" className="rounded-none">
                Book Your Appointment
              </Button>
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
