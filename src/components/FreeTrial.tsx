import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const FreeTrial = () => {
  const benefits = [
    "One full month of bookkeeping at no cost",
    "No commitment, no contracts required", 
    "No credit card needed to start",
    "Full access to your dedicated bookkeeper",
    "Complete financial reports included"
  ];

  return (
    <section className="py-20 gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Try TopNotch Free for 30 Days
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              We'll reconcile one full month of your books at no cost. Experience the 
              TopNotch difference risk-free.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 text-left animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90 group shadow-xl">
              Get a Quote in 30 Seconds
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="text-sm text-white/70">
              ⭐ Join 5,000+ satisfied small business owners
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;