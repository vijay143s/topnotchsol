
import { useState } from "react";


const Hero = () => {
  const [showConsult, setShowConsult] = useState(false);
  return (
    <>
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-36"
        style={{
          backgroundImage: "url('https://www.remotebooksonline.com/images/nlp/home-new-banner.webp')",
          backgroundSize: '100%', // Zoomed out 10%
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto px-4 relative z-5">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Content */}
            <div className="text-white space-y-4 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-2xl md:text-5xl lg:text-4xl font-bold leading-tight text-balance">
                  Online Bookkeeping Services for Small Businesses
                </h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                  Accurate, CPA-ready financials from certified QuickBooks and Xero experts. 
                  Flat pricing. No contracts.
                </p>
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
          </div>
        </div>
        
      </section>
      
      
    </>
  );
};

export default Hero;