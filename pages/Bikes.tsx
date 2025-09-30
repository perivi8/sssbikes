import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const bikes = [
  {
    id: "leader-e-power-l6",
    name: "Leader Unisex E-Power L6 Pro",
    description: "High-performance electric cycle with removable Li-Ion battery, 250W motor, and dual disc brakes.",
    price: "₹18,999",
    image: "/ac/a.jpg",
    category: "Electric",
  },
  {
    id: "ninety-one-zx",
    name: "NINETY ONE ZX Electric Cycle",
    description: "Premium electric cycle with 10.4Ah battery, front suspension, and 250W BLDC motor.",
    price: "₹27,499",
    image: "/ac/b.jpg",
    category: "Electric",
  },
  {
    id: "zeeta-plus-ic",
    name: "Zeeta Plus IC Electric Bicycle",
    description: "Advanced electric bicycle with modern design and reliable performance for urban commuting.",
    price: "₹33,495",
    image: "/ac/c.jpg",
    category: "Electric",
  },
  {
    id: "ampere-nexus-st",
    name: "Ampere Nexus ST High Performance Electric Scooter",
    description: "Powered by Greaves Electric Mobility, high performance family electric scooter with portable charger.",
    price: "₹1,24,900",
    image: "/ac/d.jpg",
    category: "Electric Scooter",
  },
  {
    id: "eox-e2",
    name: "EOX E2 Low Speed Electric Scooter",
    description: "Non RTO electric scooter with 60-80Km range, red portable lithium battery and charger included.",
    price: "₹50,099",
    image: "/ac/e.jpg",
    category: "Electric Scooter",
  },
  {
    id: "amo-electric-scooter",
    name: "AMO Electric Scooter Single Light",
    description: "Lead acid low speed electric scooter with 25kmph speed, 60-70 Km range, Non RTO with portable charger.",
    price: "₹37,999",
    image: "/ac/f.jpg",
    category: "Electric Scooter",
  },
];

const Bikes = () => {
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
              Our Collection
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
              Discover our range of electric bikes designed for every lifestyle. From urban commuting to off-road adventures, find the perfect ride for you.
            </p>
          </div>
        </section>

        {/* Bikes Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bikes.map((bike) => (
                <Link
                  key={bike.id}
                  to={`/products/${bike.id}`}
                  className="group relative overflow-hidden rounded-xl border border-primary/20 dark:border-primary/30 bg-background-light dark:bg-background-dark transition-all hover:shadow-xl hover:scale-[1.02]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{bike.name}</h3>
                      <span className="text-xs font-medium text-primary border border-primary/30 rounded-full px-3 py-1">
                        {bike.category}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                      {bike.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">{bike.price}</span>
                      <span className="text-sm font-medium text-primary group-hover:underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-primary/20 dark:border-primary/30 py-20 bg-background-light/50 dark:bg-background-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-4">
              Not sure which bike is right for you?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Contact our team for personalized recommendations
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-background-dark hover:scale-105 transition-transform"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Bikes;
