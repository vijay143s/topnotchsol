const TrustedBy = () => {
  const platforms = [
    {
      name: "QuickBooks",
      logo: "https://www.remotebooksonline.com/images/nlp/quickbooks-logo.webp",
      description: "Certified ProAdvisor"
    },
    {
      name: "Xero",
      logo: "https://www.remotebooksonline.com/images/nlp/xero-logo.webp", 
      description: "Xero Partner"
    },
    {
      name: "Wave",
      logo: "https://www.remotebooksonline.com/images/nlp/wave.webp",
      description: "Wave Certified"
    },
    {
      name: "FreshBooks", 
      logo: "https://www.remotebooksonline.com/images/nlp/freshbooks.webp",
      description: "FreshBooks Partner"
    },
    {
      name: "NetSuite",
      logo: "https://www.remotebooksonline.com/images/nlp/NetSuite.webp", 
      description: "NetSuite Certified"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            We work with the platforms you trust, making bookkeeping easy and efficient.
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="group text-center animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-32 h-16 mx-auto mb-2 flex items-center justify-center">
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
                <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBy;