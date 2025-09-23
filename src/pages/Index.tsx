import Header from "../components/header/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Temporary content to show the header */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-light tracking-wide text-foreground">
            Welcome to Linea
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Minimalist design meets modern e-commerce. Experience shopping redefined with clean aesthetics and seamless functionality.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
