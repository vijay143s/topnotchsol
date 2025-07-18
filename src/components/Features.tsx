
const features = [
  {
    img: "https://www.remotebooksonline.com/images/nlp/catch-up-kb-4.webp",
    alt: "Dedicated bookkeeper assigned to your business",
    title: "Dedicated bookkeeper assigned to your business"
  },
  {
    img: "https://www.remotebooksonline.com/images/nlp/sap-kb-4.webp",
    alt: "QuickBooks or Xero software included",
    title: "QuickBooks or Xero software included"
  },
  {
    img: "https://www.remotebooksonline.com/images/nlp/reconciliation.webp",
    alt: "Monthly bank reconciliations and categorized reports",
    title: "Monthly bank reconciliations and categorized reports"
  },
  {
    img: "https://www.remotebooksonline.com/images/nlp/cpa-key-benefits-3.webp",
    alt: "Secure uploads with bank-level encryption",
    title: "Secure uploads with bank-level encryption"
  },
  {
    img: "https://www.remotebooksonline.com/images/nlp/sap-kb-1.webp",
    alt: "Flat-rate pricing starting at just $150/month",
    title: "Flat-rate pricing starting at just $150/month"
  },
  {
    img: "https://www.remotebooksonline.com/images/nlp/sap-kb-2.webp",
    alt: "Try it free for 30 days — no credit card, no contract",
    title: "Try it free for 30 days — no credit card, no contract"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-[#f7f7f9]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-2xl font-bold mb-16 text-[#2346a0]">Why Choose TopNotch Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex items-center mb-6 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex-shrink-0 mr-4">
                <img
                  src={feature.img}
                  alt={feature.alt}
                  loading="lazy"
                  width={60}
                  height={60}
                  className="rounded-lg object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-0">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;