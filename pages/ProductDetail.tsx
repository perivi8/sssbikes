import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

interface Product {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  description: string;
  image: string;
  specs: {
    motor: string;
    battery: string;
    range: string;
    topSpeed: string;
    weight: string;
    frameSize: string;
  };
  features: string[];
}

const products: Record<string, Product> = {
  "leader-e-power-l6": {
    id: "leader-e-power-l6",
    name: "Leader Unisex E-Power L6 Pro",
    price: "₹18,999",
    priceNumber: 18999,
    description: "Leader Unisex E-Power L6 Pro 27.5T Electric Cycle with removable Li-Ion battery. Features high-performance 250W motor, dual disc brakes, and front suspension. Comes with 1 year warranty and suitable for 12+ years age group.",
    image: "/ac/a.jpg",
    specs: {
      motor: "250W High-Performance Motor",
      battery: "Removable Li-Ion Battery",
      range: "Up to 25 km",
      topSpeed: "25 kmph",
      weight: "22 kg",
      frameSize: "19 Inch"
    },
    features: [
      "Removable Li-Ion battery",
      "Dual disc brakes",
      "Front suspension",
      "27.5T wheel size",
      "1 year warranty",
      "Suitable for 12+ years"
    ]
  },
  "ninety-one-zx": {
    id: "ninety-one-zx",
    name: "NINETY ONE ZX Electric Cycle",
    price: "₹27,499",
    priceNumber: 27499,
    description: "NINETY ONE ZX Electric Cycle with 10.4Ah battery and 27.5T wheels. Features 91 Tuf Shox front suspension with 80mm travel, 250 Watt IP65 BLDC motor. Comes 85% pre-assembled with 2 years battery warranty.",
    image: "/ac/b.jpg",
    specs: {
      motor: "250W IP65 BLDC Motor",
      battery: "10.4Ah Lithium-Ion",
      range: "Up to 50 km",
      topSpeed: "25 kmph",
      weight: "24 kg",
      frameSize: "27.5T"
    },
    features: [
      "10.4Ah high-capacity battery",
      "91 Tuf Shox front suspension",
      "80mm suspension travel",
      "IP65 rated motor",
      "85% pre-assembled",
      "2 years battery warranty"
    ]
  },
  "zeeta-plus-ic": {
    id: "zeeta-plus-ic",
    name: "Zeeta Plus IC Electric Bicycle",
    price: "₹33,495",
    priceNumber: 33495,
    description: "Zeeta Plus IC Electric Bicycle with advanced features and modern design. Perfect for urban commuting with reliable performance, efficient battery system, and comfortable riding experience.",
    image: "/ac/c.jpg",
    specs: {
      motor: "250W Brushless Motor",
      battery: "Lithium-Ion Battery",
      range: "Up to 40 km",
      topSpeed: "25 kmph",
      weight: "23 kg",
      frameSize: "Standard"
    },
    features: [
      "Modern design",
      "Efficient battery system",
      "Comfortable riding position",
      "Urban commuting optimized",
      "Reliable performance",
      "Easy maintenance"
    ]
  },
  "ampere-nexus-st": {
    id: "ampere-nexus-st",
    name: "Ampere Nexus ST High Performance Electric Scooter",
    price: "₹1,24,900",
    priceNumber: 124900,
    description: "Ampere Powered by Greaves Electric Mobility Nexus ST High Performance Family Electric Scooter with Portable Charger. Designed for modern families seeking reliable and efficient electric mobility with premium features and excellent build quality.",
    image: "/ac/d.jpg",
    specs: {
      motor: "BLDC Hub Motor",
      battery: "Lithium-Ion Battery",
      range: "Up to 100 km",
      topSpeed: "50 kmph",
      weight: "95 kg",
      frameSize: "Standard"
    },
    features: [
      "High performance BLDC motor",
      "Portable charger included",
      "Family-friendly design",
      "Premium build quality",
      "Digital instrument cluster",
      "LED lighting system"
    ]
  },
  "eox-e2": {
    id: "eox-e2",
    name: "EOX E2 Low Speed Electric Scooter",
    price: "₹50,099",
    priceNumber: 50099,
    description: "EOX E2 Low Speed Electric Scooter Non RTO with 60-80Km Range. Features red portable lithium battery and charger for convenient charging. Perfect for city commuting without registration requirements.",
    image: "/ac/e.jpg",
    specs: {
      motor: "BLDC Motor",
      battery: "Portable Lithium-Ion",
      range: "60-80 km",
      topSpeed: "25 kmph",
      weight: "75 kg",
      frameSize: "Compact"
    },
    features: [
      "Non RTO registration",
      "Portable lithium battery",
      "60-80 km range",
      "Low speed compliance",
      "Removable battery pack",
      "Eco-friendly design"
    ]
  },
  "amo-electric-scooter": {
    id: "amo-electric-scooter",
    name: "AMO Electric Scooter Single Light",
    price: "₹37,999",
    priceNumber: 37999,
    description: "AMO Electric Scooter Single Light Lead Acid Low Speed with 25kmph speed and 60-70 Km range. Non RTO compliant electric scooter in white color with portable charger for convenient urban mobility.",
    image: "/ac/f.jpg",
    specs: {
      motor: "BLDC Motor",
      battery: "Lead Acid Battery",
      range: "60-70 km",
      topSpeed: "25 kmph",
      weight: "80 kg",
      frameSize: "Standard"
    },
    features: [
      "Lead acid battery technology",
      "25 kmph speed limit",
      "Non RTO compliance",
      "Portable charger",
      "Single light design",
      "Affordable pricing"
    ]
  }
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? products[productId] : null;
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.priceNumber,
        image: product.image,
      });
      toast.success(`${product.name} added to cart!`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <Link to="/bikes" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Bikes
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="rounded-xl overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover aspect-square"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">{product.name}</h1>
                <p className="text-3xl font-bold text-primary">{product.price}</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Add to Cart button removed as requested */}

              {/* Specifications */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Specifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Motor</p>
                    <p className="font-semibold">{product.specs.motor}</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Battery</p>
                    <p className="font-semibold">{product.specs.battery}</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Range</p>
                    <p className="font-semibold">{product.specs.range}</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Top Speed</p>
                    <p className="font-semibold">{product.specs.topSpeed}</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Weight</p>
                    <p className="font-semibold">{product.specs.weight}</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Frame Sizes</p>
                    <p className="font-semibold">{product.specs.frameSize}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-lg font-bold mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">
                Complimentary delivery on all orders within the continental US.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-lg font-bold mb-2">2-Year Warranty</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive coverage on frame, motor, and battery components.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-lg font-bold mb-2">30-Day Returns</h3>
              <p className="text-sm text-muted-foreground">
                Not satisfied? Return within 30 days for a full refund.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
