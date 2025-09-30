import { Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const accessories = [
  {
    id: "premium-helmet",
    name: "Premium Helmet",
    description: "Safety-certified helmet with integrated lights and ventilation.",
    price: "₹10,750",
    priceNumber: 10750,
    category: "Safety",
    image: "/ac/1.png",
  },
  {
    id: "led-light-set",
    name: "LED Light Set",
    description: "Front and rear LED lights with multiple brightness modes.",
    price: "₹4,100",
    priceNumber: 4100,
    category: "Lighting",
    image: "/ac/2.png",
  },
  {
    id: "smart-lock",
    name: "Smart Lock",
    description: "Bluetooth-enabled U-lock with GPS tracking and alarm.",
    price: "₹13,250",
    priceNumber: 13250,
    category: "Security",
    image: "/ac/3.png",
  },
  {
    id: "cargo-panniers",
    name: "Cargo Panniers",
    description: "Waterproof panniers with 40L capacity and reflective strips.",
    price: "₹7,400",
    priceNumber: 7400,
    category: "Storage",
    image: "/ac/4.png",
  },
  {
    id: "phone-mount",
    name: "Phone Mount",
    description: "Universal smartphone holder with 360° rotation.",
    price: "₹2,400",
    priceNumber: 2400,
    category: "Electronics",
    image: "/ac/5.png",
  },
  {
    id: "spare-battery",
    name: "Spare Battery",
    description: "Extended range battery compatible with all SSS Motors models.",
    price: "₹58,250",
    priceNumber: 58250,
    category: "Power",
    image: "/ac/6.png",
  },
  {
    id: "bike-cover",
    name: "Bike Cover",
    description: "Weather-resistant cover with reinforced seams and lock hole.",
    price: "₹3,250",
    priceNumber: 3250,
    category: "Protection",
    image: "/ac/7.png",
  },
  {
    id: "repair-kit",
    name: "Repair Kit",
    description: "Complete toolkit with pump, patches, and essential tools.",
    price: "₹4,900",
    priceNumber: 4900,
    category: "Maintenance",
    image: "/ac/8.png",
  },
  {
    id: "comfort-saddle",
    name: "Comfort Saddle",
    description: "Ergonomic gel saddle with memory foam and waterproof cover.",
    price: "₹6,600",
    priceNumber: 6600,
    category: "Comfort",
    image: "/ac/9.png",
  },
];

const Accessories = () => {
  const { addItem } = useCart();

  const handleAddToCart = (accessory: typeof accessories[0]) => {
    addItem({
      id: accessory.id,
      name: accessory.name,
      price: accessory.priceNumber,
      image: accessory.image,
    });
    toast.success(`${accessory.name} added to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Back Button */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <section className="border-b border-primary/20 dark:border-primary/30 py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter">
              Accessories
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
              Enhance your riding experience with our premium accessories. From safety gear to smart technology, we have everything you need.
            </p>
          </div>
        </section>

        {/* Accessories Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {accessories.map((accessory) => (
                <div
                  key={accessory.id}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:shadow-xl hover:scale-[1.02] flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-medium text-primary border border-primary/30 rounded-full px-3 py-1">
                      {accessory.category}
                    </span>
                    <span className="text-xl font-bold">{accessory.price}</span>
                  </div>
                  
                  {/* Clickable Image and Content */}
                  <Link to={`/accessories/${accessory.id}`} className="flex-1">
                    {/* Accessory Image */}
                    <div className="aspect-[4/3] mb-4 bg-muted rounded-lg overflow-hidden hover:bg-muted/80 transition-colors">
                      <img
                        src={accessory.image}
                        alt={accessory.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{accessory.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {accessory.description}
                    </p>
                  </Link>
                  
                  <Button 
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(accessory);
                    }}
                    className="w-full mt-auto"
                    size="sm"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compatible Bikes Section */}
        <section className="border-t border-primary/20 dark:border-primary/30 py-20 bg-background-light/50 dark:bg-background-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-4">
              Compatible with All SSS Motors Models
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              All accessories are designed to work seamlessly with our electric bike models
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Accessories;
