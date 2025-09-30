import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex flex-1 justify-center py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-20">
          {/* Back Button */}
          <div className="text-left">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter">About SSS Motors</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We're more than just an electric bike company; we're a movement towards a greener, more efficient future. Our journey began with a simple vision: to revolutionize urban mobility by creating high-performance, sustainable electric bikes that seamlessly integrate into modern lifestyles.
            </p>
          </section>

          {/* Mission Section */}
          <section className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At SSS Motors, we believe that transportation should be accessible, sustainable, and enjoyable. Our mission is to empower individuals to embrace eco-friendly commuting without compromising on performance or style. Every bike we create is a testament to our commitment to innovation, quality, and environmental responsibility.
            </p>
          </section>

          {/* Vision Section */}
          <section className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a world where cities are quieter, cleaner, and more connected. Where people choose electric bikes not just for their environmental benefits, but because they offer a superior riding experience. Through continuous innovation and customer-centric design, we're working to make this vision a reality.
            </p>
          </section>

          {/* History Section */}
          <section className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Our History</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2018, SSS Motors emerged from a passion for sustainable technology and urban design. Our founders, a team of engineers and environmental advocates, recognized the growing need for efficient urban transportation solutions.
              </p>
              <p>
                What started as a small workshop in Tamil Nadu has grown into a trusted brand, serving thousands of riders across India. Yet, we've never lost sight of our core values: sustainability, innovation, and community.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  Every decision we make considers its environmental impact. From sourcing materials to manufacturing processes, we prioritize the planet.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly push boundaries, integrating cutting-edge technology to enhance performance, safety, and user experience.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  Each bike undergoes rigorous testing and quality control. We stand behind our products with comprehensive warranties and support.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We're building more than bikes—we're fostering a global community of riders committed to sustainable living.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Behind every SSS Motors bike is a dedicated team of designers, engineers, and sustainability experts. United by a shared passion for innovation and environmental stewardship, our team works tirelessly to create bikes that exceed expectations and inspire change.
            </p>
          </section>

          {/* Timeline Section */}
          <section className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Journey</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <div className="w-0.5 h-full bg-border"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold mb-2">2018 - The Beginning</h3>
                  <p className="text-muted-foreground">
                    SSS Motors was founded with a vision to revolutionize urban mobility through sustainable electric bikes.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <div className="w-0.5 h-full bg-border"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold mb-2">2019 - First Product Launch</h3>
                  <p className="text-muted-foreground">
                    We launched our flagship Urban Explorer model, receiving overwhelming positive response from the community.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <div className="w-0.5 h-full bg-border"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold mb-2">2021 - Global Expansion</h3>
                  <p className="text-muted-foreground">
                    Expanded operations to Europe and Asia, bringing sustainable transportation to riders worldwide.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">2024 - Innovation Continues</h3>
                  <p className="text-muted-foreground">
                    Launched the Model X, our most advanced electric bike featuring cutting-edge AI and connectivity features.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
