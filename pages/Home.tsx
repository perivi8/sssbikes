import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bike.jpg";

const Home = () => {
  const products = [
    {
      id: "ampere-nexus-st",
      name: "Ampere Nexus ST High Performance Electric Scooter",
      price: "₹1,24,900",
      image: "/ac/d.jpg",
      description: "Powered by Greaves Electric Mobility, high performance family electric scooter with portable charger."
    },
    {
      id: "eox-e2", 
      name: "EOX E2 Low Speed Electric Scooter",
      price: "₹50,099",
      image: "/ac/e.jpg",
      description: "Non RTO electric scooter with 60-80Km range, red portable lithium battery and charger included."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img
              src={heroImage}
              alt="SSS Motors Hero"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 to-background-dark/40 dark:from-background-dark/90 dark:to-background-dark/60" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-white hero-text-shadow">
                {"Ride Into the Future".split("").map((char, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-gray-100 font-semibold hero-text-shadow">
                {"Experience the perfect blend of cutting-edge technology and sustainable design with SSS Motors.".split("").map((char, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.02}s` }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-background-dark hover:bg-primary/90 font-semibold"
                  asChild
                >
                  <Link to="/bikes">
                    Explore Bikes
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-black bg-white hover:bg-gray-100 hover:text-black font-semibold"
                  asChild
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Bikes Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Bikes</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our range of premium electric bikes, each designed for a unique riding experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {products.map((product) => (
                <div key={product.id} className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col">
                  <Link to={`/products/${product.id}`} className="block">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <Link to={`/products/${product.id}`}>
                      <h3 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{product.price}</span>
                      <Link to={`/products/${product.id}`} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <span className="text-sm font-medium">View Details</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Transform Your Commute?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of riders who have already made the switch to sustainable, efficient transportation.
              </p>
              <Button 
                size="lg" 
                className="bg-primary text-background-dark hover:bg-primary/90 font-semibold"
                asChild
              >
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
