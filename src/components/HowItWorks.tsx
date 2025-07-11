import { Upload, Settings, FileCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Upload Your Financials",
      description: "Securely upload bank statements or connect your accounts. Our bank-level encryption keeps your data safe.",
      highlight: "Setup takes less than 5 minutes"
    },
    {
      icon: Settings,
      number: "02", 
      title: "We Handle Your Bookkeeping",
      description: "Your dedicated bookkeeper categorizes and reconciles transactions and prepares monthly reports.",
      highlight: "Done within 3-5 business days"
    },
    {
      icon: FileCheck,
      number: "03",
      title: "Receive CPA-Ready Books",
      description: "Tax-ready financials delivered monthly. Contact your lead accountant anytime by phone or email.",
      highlight: "Always ready for tax season"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get professional bookkeeping in three simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative text-center group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/20 transform translate-x-6"></div>
                )}

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-card border-2 border-primary/20 rounded-2xl flex items-center justify-center group-hover:border-primary/40 transition-all duration-300 shadow-card">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-trust/10 text-trust text-sm font-medium rounded-full">
                    ✓ {step.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-accent/10 text-accent rounded-lg text-sm font-medium mb-6">
            🎉 Ready to get started? It only takes 30 seconds
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;