import { CheckCircle, Users, Shield, Calendar, DollarSign, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Dedicated bookkeeper assigned to your business",
      description: "Your personal expert who knows your business inside and out"
    },
    {
      icon: CheckCircle,
      title: "QuickBooks or Xero software included",
      description: "Full access to professional accounting software at no extra cost"
    },
    {
      icon: Calendar,
      title: "Monthly bank reconciliations and categorized reports",
      description: "Complete financial clarity delivered every month"
    },
    {
      icon: Shield,
      title: "Secure uploads with bank-level encryption",
      description: "Your financial data is protected with enterprise-grade security"
    },
    {
      icon: DollarSign,
      title: "Flat-rate pricing starting at just $150/month",
      description: "Transparent pricing with no hidden fees or surprises"
    },
    {
      icon: Clock,
      title: "Try it free for 30 days — no commitment",
      description: "Full month of service at no cost, no credit card required"
    }
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Choose TopNotch Accounting
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional bookkeeping services designed specifically for small business success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 animate-fade-in border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-card-foreground leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;