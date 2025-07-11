import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bookkeeper.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Online Bookkeeping Services for Small Businesses
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                 Accurate, CPA-ready financials from certified QuickBooks and Xero experts. 
                 Flat pricing. No contracts.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Get Your Free Bookkeeping Review
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                <Phone className="w-5 h-5" />
                Call Me Back
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-2 h-2 bg-trust rounded-full"></div>
                <span className="text-sm font-medium">Trusted by 5,000+ Businesses</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-2 h-2 bg-trust rounded-full"></div>
                <span className="text-sm font-medium">QuickBooks Certified ProAdvisor</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-2 h-2 bg-trust rounded-full"></div>
                <span className="text-sm font-medium">BBB Accredited</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional accountant working on financial documents"
                className="w-full h-auto rounded-xl shadow-hero"
              />
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-card animate-scale-in">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">$150</div>
                  <div className="text-sm text-muted-foreground">Starting monthly</div>
                  <div className="text-xs text-trust font-medium">✓ No contracts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;