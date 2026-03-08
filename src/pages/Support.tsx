import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ChatWindow from "@/components/chat/ChatWindow";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1
            className="text-3xl md:text-4xl font-light text-foreground mb-3"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Chat With Us
          </h1>
          <p className="text-muted-foreground text-sm font-body max-w-md mx-auto">
            Our AI assistant can help you find products, track orders, and answer questions about hair care.
          </p>
        </div>
        <div className="h-[600px] border border-border rounded-2xl overflow-hidden">
          <ChatWindow onClose={() => {}} fullPage />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
