import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Placeholder = () => {
  const location = useLocation();
  const pageName = location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {pageName || "Page"} Coming Soon
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            We're working on something amazing. Check back soon!
          </p>
          <Button asChild className="bg-primary text-background-dark hover:bg-primary/90">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Placeholder;
