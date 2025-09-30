import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Star, Shield, Truck, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

interface Accessory {
  id: string;
  name: string;
  description: string;
  price: string;
  priceNumber: number;
  category: string;
  image: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  compatibility: string[];
  rating: number;
  reviews: number;
}

const accessories: Record<string, Accessory> = {
  "premium-helmet": {
    id: "premium-helmet",
    name: "Premium Helmet",
    description: "Safety-certified helmet with integrated lights and ventilation system. Designed for maximum protection and comfort during your rides.",
    price: "₹10,750",
    priceNumber: 10750,
    category: "Safety",
    image: "/ac/1.png",
    features: [
      "CE safety certified",
      "Integrated LED lights",
      "Advanced ventilation system",
      "Adjustable fit system",
      "Lightweight carbon fiber shell",
      "Anti-bacterial padding"
    ],
    specifications: {
      "Weight": "280g",
      "Material": "Carbon Fiber + EPS",
      "Sizes": "S, M, L, XL",
      "Certification": "CE EN 1078",
      "Battery Life": "8 hours (LED lights)",
      "Charging": "USB-C"
    },
    compatibility: ["Urban Explorer", "Adventure Pro", "Model X"],
    rating: 4.8,
    reviews: 124
  },
  "led-light-set": {
    id: "led-light-set",
    name: "LED Light Set",
    description: "High-intensity front and rear LED lights with multiple brightness modes and long battery life.",
    price: "₹4,100",
    priceNumber: 4100,
    category: "Lighting",
    image: "/ac/2.png",
    features: [
      "Ultra-bright LED technology",
      "Multiple brightness modes",
      "Waterproof design (IPX6)",
      "Quick-release mounting",
      "USB rechargeable",
      "Low battery indicator"
    ],
    specifications: {
      "Front Light": "1000 lumens",
      "Rear Light": "200 lumens",
      "Battery Life": "2-12 hours",
      "Charging Time": "3 hours",
      "Water Rating": "IPX6",
      "Mounting": "Universal clamp"
    },
    compatibility: ["Urban Explorer", "Adventure Pro", "Model X"],
    rating: 4.6,
    reviews: 89
  },
  "smart-lock": {
    id: "smart-lock",
    name: "Smart Lock",
    description: "Bluetooth-enabled U-lock with GPS tracking, alarm system, and smartphone app control.",
    price: "₹13,250",
    priceNumber: 13250,
    category: "Security",
    image: "/ac/3.png",
    features: [
      "Bluetooth connectivity",
      "GPS tracking",
      "Motion alarm",
      "Smartphone app control",
      "Hardened steel shackle",
      "Weather resistant"
    ],
    specifications: {
      "Shackle": "13mm hardened steel",
      "Dimensions": "230 x 110mm",
      "Weight": "1.2kg",
      "Battery": "Rechargeable Li-ion",
      "App": "iOS & Android",
      "Range": "10m Bluetooth"
    },
    compatibility: ["Urban Explorer", "Adventure Pro", "Model X"],
    rating: 4.7,
    reviews: 67
  },
  "cargo-panniers": {
    id: "cargo-panniers",
    name: "Cargo Panniers",
    description: "Waterproof panniers with 40L capacity and reflective strips. Perfect for carrying your essentials during long rides and commutes.",
    price: "₹7,400",
    priceNumber: 7400,
    category: "Storage",
    image: "/ac/4.png",
    features: [
      "40L total capacity",
      "100% waterproof design",
      "Reflective safety strips",
      "Quick-release mounting",
      "Reinforced attachment points",
      "Multiple compartments"
    ],
    specifications: {
      "Capacity": "40L (20L each)",
      "Material": "Waterproof PVC",
      "Dimensions": "32 x 14 x 30cm",
      "Weight": "1.8kg",
      "Mounting": "Universal rack system",
      "Water Rating": "IPX7"
    },
    compatibility: ["Urban Explorer", "Adventure Pro", "Model X"],
    rating: 4.5,
    reviews: 92
  },
  "phone-mount": {
    id: "phone-mount",
    name: "Phone Mount",
    description: "Universal smartphone holder with 360° rotation and secure grip. Keep your phone accessible for navigation and calls while riding.",
    price: "₹2,400",
    priceNumber: 2400,
    category: "Electronics",
    image: "/ac/5.png",
    features: [
      "Universal phone compatibility",
      "360° rotation capability",
      "Secure grip mechanism",
      "One-handed operation",
      "Shock-absorbing design",
      "Weather-resistant materials"
    ],
    specifications: {
      "Phone Size": "4.7-6.8 inches",
      "Material": "ABS + Silicone",
      "Weight": "150g",
      "Mounting": "Handlebar clamp",
      "Rotation": "360° full rotation",
      "Grip Width": "55-95mm"
    },
    compatibility: ["Urban Explorer", "Adventure Pro", "Model X"],
    rating: 4.3,
    reviews: 156
  },
  "spare-battery": {
    id: "spare-battery",
    name: "Spare Battery",
    description: "Extended range battery compatible with all SSS Motors models. Double your riding range with this high-capacity lithium-ion battery.",
    price: "₹58,250",
    priceNumber: 58250,
    category: "Power",
    image: "/ac/6.png",
    features: [
      "High-capacity lithium-ion",
      "Compatible with all models",
      "Fast charging capability",
      "Battery management system",
      "Temperature protection",
      "LED charge indicator"
    ],
    specifications: {
      "Capacity": "48V 14Ah",
      "Chemistry": "Lithium-ion",
      "Weight": "3.2kg",
      "Charging Time": "4-6 hours",
      "Cycles": "1000+ charge cycles",
      "Temperature": "-10°C to 60°C"
    },
    compatibility: ["Urban Explorer", "Adventure Pro", "Model X"],
    rating: 4.8,
    reviews: 43
  },
  "bike-cover": {
    id: "bike-cover",
    name: "Bike Cover",
    description: "Weather-resistant cover with reinforced seams and lock hole. Protect your electric bike from the elements when parked outdoors.",
    price: "₹3,250",
    priceNumber: 3250,
    category: "Protection",
    image: "/ac/7.png",
    features: [
      "Weather-resistant fabric",
      "Reinforced seams",
      "Lock access hole",
      "Elastic hem cord",
      "Compact storage bag",
      "UV protection coating"
    ],
    specifications: {
      "Material": "210D Oxford fabric",
      "Size": "200 x 110 x 70cm",
      "Weight": "800g",
      "Water Rating": "3000mm",
      "UV Protection": "UPF 50+",
      "Storage": "Compact carry bag"
    },
    compatibility: ["Urban Explorer", "Adventure Pro", "Model X"],
    rating: 4.4,
    reviews: 78
  },
  "repair-kit": {
    id: "repair-kit",
    name: "Repair Kit",
    description: "Complete toolkit with pump, patches, and essential tools. Everything you need for roadside repairs and basic maintenance.",
    price: "₹4,900",
    priceNumber: 4900,
    category: "Maintenance",
    image: "/ac/8.png",
    features: [
      "Portable mini pump",
      "Tire patch kit",
      "Multi-tool with 15 functions",
      "Tire levers",
      "Chain breaker tool",
      "Compact carrying case"
    ],
    specifications: {
      "Pump": "Mini frame pump",
      "Tools": "15-in-1 multi-tool",
      "Patches": "6 self-adhesive patches",
      "Case Size": "20 x 12 x 5cm",
      "Weight": "650g",
      "Material": "Steel + Aluminum"
    },
    compatibility: ["Urban Explorer", "Adventure Pro", "Model X"],
    rating: 4.6,
    reviews: 134
  },
  "comfort-saddle": {
    id: "comfort-saddle",
    name: "Comfort Saddle",
    description: "Ergonomic gel saddle with memory foam and waterproof cover. Designed for maximum comfort during long rides and daily commutes.",
    price: "₹6,600",
    priceNumber: 6600,
    category: "Comfort",
    image: "/ac/9.png",
    features: [
      "Memory foam padding",
      "Gel insert technology",
      "Waterproof cover",
      "Ergonomic design",
      "Pressure relief channels",
      "Universal mounting rails"
    ],
    specifications: {
      "Dimensions": "280 x 155mm",
      "Weight": "420g",
      "Material": "Memory foam + Gel",
      "Cover": "Waterproof synthetic",
      "Rails": "Steel 7mm",
      "Padding": "High-density foam"
    },
    compatibility: ["Urban Explorer", "Adventure Pro", "Model X"],
    rating: 4.7,
    reviews: 89
  }
};

const AccessoryDetail = () => {
  const { accessoryId } = useParams<{ accessoryId: string }>();
  const accessory = accessoryId ? accessories[accessoryId] : null;
  const { addItem } = useCart();

  if (!accessory) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Accessory Not Found</h1>
            <Link to="/accessories">
              <Button>Back to Accessories</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
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
      
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <Link to="/accessories" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Accessories
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="rounded-xl overflow-hidden bg-muted">
              <img
                src={accessory.image}
                alt={accessory.name}
                className="w-full h-full object-cover aspect-square"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-sm font-medium text-primary border border-primary/30 rounded-full px-3 py-1 mb-4 inline-block">
                  {accessory.category}
                </span>
                <h1 className="text-4xl font-bold tracking-tight mb-2">{accessory.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(accessory.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {accessory.rating} ({accessory.reviews} reviews)
                  </span>
                </div>
                <p className="text-3xl font-bold text-primary">{accessory.price}</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {accessory.description}
              </p>

              <Button
                size="lg"
                onClick={handleAddToCart}
                className="w-full sm:w-auto bg-primary text-background-dark hover:bg-primary/90 font-semibold"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              {/* Key Features */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {accessory.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Specifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(accessory.specifications).map(([key, value]) => (
                    <div key={key} className="p-4 bg-card rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground mb-1">{key}</p>
                      <p className="font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compatibility */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Compatibility</h2>
                <div className="flex flex-wrap gap-2">
                  {accessory.compatibility.map((model) => (
                    <span
                      key={model}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg border border-border text-center">
              <Truck className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">
                Free delivery on orders over ₹4,200
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">1-Year Warranty</h3>
              <p className="text-sm text-muted-foreground">
                Full warranty coverage included
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border text-center">
              <RotateCcw className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">30-Day Returns</h3>
              <p className="text-sm text-muted-foreground">
                Easy returns within 30 days
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccessoryDetail;
