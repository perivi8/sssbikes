import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does the battery last?",
    answer: "Battery life varies by model. The Urban Explorer offers 50-70 miles, Adventure Pro provides 40-60 miles, and Model X delivers 60-80 miles on a single charge, depending on terrain and riding mode.",
  },
  {
    question: "What is the warranty coverage?",
    answer: "All SSS Motors bikes come with a 2-year comprehensive warranty covering the frame, motor, and battery. Extended warranty options are available at purchase.",
  },
  {
    question: "How do I maintain my electric bike?",
    answer: "Regular maintenance includes checking tire pressure, cleaning the chain, and ensuring brakes are functioning properly. We recommend a professional service every 6 months or 1,000 miles.",
  },
  {
    question: "Can I ride in the rain?",
    answer: "Yes, all SSS Motors bikes are weather-resistant with IP65 rating. However, avoid riding through deep water and always dry your bike after wet rides.",
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied, return your bike in original condition for a full refund minus shipping costs.",
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we partner with leading financing providers to offer flexible payment plans with 0% APR options for qualified buyers.",
  },
];

const supportCategories = [
  {
    title: "Technical Support",
    description: "Get help with bike setup, troubleshooting, and repairs",
    icon: "⚙️",
  },
  {
    title: "Warranty Claims",
    description: "File a warranty claim or check your coverage status",
    icon: "🛡️",
  },
  {
    title: "Orders & Shipping",
    description: "Track your order or modify shipping details",
    icon: "📦",
  },
  {
    title: "Returns & Exchanges",
    description: "Initiate a return or exchange within 30 days",
    icon: "🔄",
  },
];

const serviceCenters = [
  {
    city: "San Francisco",
    address: "123 Market Street, CA 94103",
    hours: "Mon-Sat: 9AM-6PM",
  },
  {
    city: "Los Angeles",
    address: "456 Venice Blvd, CA 90015",
    hours: "Mon-Sat: 9AM-6PM",
  },
  {
    city: "New York",
    address: "789 Broadway, NY 10003",
    hours: "Mon-Sat: 10AM-7PM",
  },
];

const Support = () => {
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
              How Can We Help?
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
              Find answers to common questions, access user guides, or get in touch with our support team.
            </p>
          </div>
        </section>

        {/* Support Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">Support Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportCategories.map((category) => (
                <div
                  key={category.title}
                  className="rounded-xl border border-primary/20 dark:border-primary/30 bg-background-light dark:bg-background-dark p-6 text-center hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-primary/20 dark:border-primary/30 py-20 bg-background-light/50 dark:bg-background-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Collapsible key={index} className="rounded-xl border border-primary/20 dark:border-primary/30 bg-background-light dark:bg-background-dark overflow-hidden">
                  <CollapsibleTrigger className="flex w-full items-center justify-between p-6 text-left hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 text-primary transition-transform duration-200" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6">
                    <p className="text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </section>

        {/* Service Centers */}
        <section className="border-t border-primary/20 dark:border-primary/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
              Service Centers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCenters.map((center) => (
                <div
                  key={center.city}
                  className="rounded-xl border border-primary/20 dark:border-primary/30 bg-background-light dark:bg-background-dark p-6"
                >
                  <h3 className="text-xl font-bold mb-2">{center.city}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                    {center.address}
                  </p>
                  <p className="text-sm font-medium text-primary">{center.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-t border-primary/20 dark:border-primary/30 py-20 bg-background-light/50 dark:bg-background-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-4">
              Still Need Help?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Our support team is available Monday to Saturday, 9AM-6PM PST
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-background-dark hover:scale-105 transition-transform"
              >
                Contact Support
              </Link>
              <a
                href="tel:1-800-ELECTRA"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-background-dark transition-colors"
              >
                Call: 1-800-ELECTRA
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
