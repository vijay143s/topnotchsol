import { Upload, Settings, FileCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Upload Your Financials',
      description: 'Securely upload your bank statements or connect your accounts. We take it from there.'
    },
    {
      step: 'Step 2',
      title: 'We Handle Your Bookkeeping',
      description: 'Your dedicated bookkeeper categorizes and reconciles all transactions and prepares your monthly reports.'
    },
    {
      step: 'Step 3',
      title: 'Receive CPA-Ready Books',
      description: 'Get tax-ready financials each month. Contact your lead accountant anytime by phone or email.'
    }
  ];

  return (
    <section className="py-16 bg-[#f7f7f9]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2346a0] mb-12">How It Works</h2>
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 flex-1 min-w-[280px] max-w-md mx-auto flex flex-col items-start relative animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <span className="absolute -top-5 left-6 px-5 py-2 rounded-full bg-[#19c6f7] text-white font-semibold text-base shadow-md">{step.step}</span>
              <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-base mb-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;