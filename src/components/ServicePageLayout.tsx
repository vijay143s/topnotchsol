import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone, Shield, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  pricing?: {
    startingPrice: string;
    description: string;
  };
  whatIncluded: string[];
  benefits: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  features,
  pricing,
  whatIncluded,
  benefits,
  faq
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Get Free Review
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Call 1-800-583-0148
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Why Choose Our {title}?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border border-border/50 shadow-card">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {whatIncluded.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Upload Your Financials</h3>
                <p className="text-muted-foreground">
                  Securely upload bank statements or connect your accounts through our secure portal.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">We Handle Your Bookkeeping</h3>
                <p className="text-muted-foreground">
                  Your dedicated bookkeeper categorizes transactions, reconciles accounts, and prepares reports.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Receive CPA-Ready Books</h3>
                <p className="text-muted-foreground">
                  Get professional financial statements monthly. Contact your lead accountant anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      {pricing && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-foreground">
                Simple, Transparent Pricing
              </h2>
              <Card className="border border-border/50 shadow-card">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl font-bold text-primary">
                    {pricing.startingPrice}
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {pricing.description}
                  </p>
                  <Button variant="cta" size="lg">
                    Get Started Today
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faq.map((item, index) => (
                <Card key={index} className="border border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-cta">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of businesses who trust TopNotch Accounting with their bookkeeping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Get Free Review
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Call 1-800-583-0148
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;