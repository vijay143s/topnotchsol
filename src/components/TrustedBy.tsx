const TrustedBy = () => {
  const platforms = [
    { name: "QuickBooks", logo: "📊" },
    { name: "Xero", logo: "📈" },
    { name: "FreshBooks", logo: "📋" },
    { name: "Wave", logo: "🌊" },
    { name: "Zoho", logo: "📁" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            We work with the platforms you trust, making bookkeeping easy and efficient.
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-2xl">{platform.logo}</span>
                <span className="font-medium text-lg">{platform.name}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-border/30">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-trust rounded-full"></div>
                <span>BBB Accredited</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-trust rounded-full"></div>
                <span>QuickBooks Certified ProAdvisor</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-trust rounded-full"></div>
                <span>Trusted by 5,000+ Businesses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;