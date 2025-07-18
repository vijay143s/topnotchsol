import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Star,ArrowRight } from "lucide-react";
import { useState } from "react";
import ConsultForm from "@/components/ConsultForm";
const Pricing = () => {
  const [showConsult, setShowConsult] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Blue BG and Image */}
      <section className="relative min-h-[340px] md:min-h-[400px] flex items-center overflow-hidden bg-[#1746a2]">
        {/* Desktop/Tablet BG Image */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <img
            src="https://www.remotebooksonline.com/images/nlp/latest-pricing-banner.webp"
            alt="Pricing Hero"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 340 }}
          />
          <div className="absolute inset-0 bg-[#1746a2] opacity-90" />
        </div>
        {/* Mobile BG Image */}
        <div className="md:hidden absolute inset-0 w-full h-full">
          <img
            src="https://www.remotebooksonline.com/images/nlp/latest-pricing-mobile-banner.webp"
            alt="Pricing Hero"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 340 }}
          />
          <div className="absolute inset-0 bg-[#1746a2] opacity-90" />
        </div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10 py-10 md:py-0 min-h-[340px] md:min-h-[400px]">
          <div className="text-white max-w-xl md:py-8 md:pl-8 md:text-left text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">TopNotch Bookkeeping – Simple Pricing</h1>
            <p className="mb-8 text-lg md:text-2xl">No contracts. No hourly fees. No hidden charges.</p>
            <div className="space-y-6">
            <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90 group shadow-xl" onClick={() => setShowConsult(true)}>
              First Month Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
          </div>
          </div>
        </div>
      </section>

      {/* Small Business Bookkeeping Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Small Business Bookkeeping Plans</h2>
          <p className="text-center text-lg mb-12">Clear, Flat Pricing for Small Business Owners</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Beginner Plan */}
            <Card className="border-t-4 border-[#1746a2]">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">BEGINNER</CardTitle>
                <div className="flex items-end justify-center mt-4">
                  <span className="text-4xl font-bold">$150</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <CardDescription className="mt-4 text-gray-600 text-sm">
                  1 bank account, includes QuickBooks/Xero subscription, reconciliation, financial reports, dedicated team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Dedicated QuickBooks ProAdvisor</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Monthly Reconciliation</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Tax-Ready Financial Reports</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Your First Month Free</li>
                </ul>
                <Button className="w-full mt-6 bg-[#1746a2] text-white font-bold" size="lg">Buy Now</Button>
              </CardContent>
            </Card>
            {/* Intermediate Plan */}
            <Card className="border-t-4 border-[#1746a2] relative">
              <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00c3ff] text-[#1746a2] font-bold px-4 py-1 rounded shadow">Most Popular</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">INTERMEDIATE</CardTitle>
                <div className="flex items-end justify-center mt-4">
                  <span className="text-4xl font-bold">$195</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <CardDescription className="mt-4 text-gray-600 text-sm">
                  2 bank or credit card accounts, unlimited transactions, includes software
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Dedicated QuickBooks ProAdvisor</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Monthly Reconciliation</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Tax-Ready Financial Reports</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Your First Month Free</li>
                </ul>
                <Button className="w-full mt-6 bg-[#1746a2] text-white font-bold" size="lg">Buy Now</Button>
              </CardContent>
            </Card>
            {/* Enterprise Plan */}
            <Card className="border-t-4 border-[#1746a2]">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">ENTERPRISE</CardTitle>
                <div className="flex items-end justify-center mt-4">
                  <span className="text-4xl font-bold">$225</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <CardDescription className="mt-4 text-gray-600 text-sm">
                  $225–$375/month 3–8 accounts or up to $10k in monthly expenses, unlimited transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Dedicated QuickBooks ProAdvisor</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Monthly Reconciliation</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Tax-Ready Financial Reports</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Your First Month Free</li>
                </ul>
                <Button className="w-full mt-6 bg-[#1746a2] text-white font-bold" size="lg">Buy Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blue CTA Section */}
      <section className="bg-[#1746a2] py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Let's Get Started - Your First Month is Free</h2>
          <div className="space-y-6">
            <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90 group shadow-xl" onClick={() => setShowConsult(true)}>
              Get a Free Quote for Bookkeeping
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
          </div>
          {/* ConsultForm Modal */}
          {showConsult && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  onClick={() => setShowConsult(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <ConsultForm onSuccess={() => setShowConsult(false)} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Dedicated Bookkeeping for Growing Businesses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Dedicated Bookkeeping for Growing Businesses</h2>
          <p className="text-center text-lg mb-12">Need Full Time Support? We've Got You Covered.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="border-t-4 border-[#1746a2]">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">BASIC PLAN</CardTitle>
                <div className="flex items-end justify-center mt-4">
                  <span className="text-4xl font-bold">$1,400</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <CardDescription className="mt-4 text-gray-600 text-sm">
                  <span className="font-semibold">Hourly Rate:</span> $35/hour<br />
                  <span className="font-semibold">Commitment:</span> 40 hours / Month<br />
                  <span className="font-semibold">Total Monthly Cost:</span> $1,400
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> No long term commitments</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Additional hours billed at the same hourly rate</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Ideal for businesses needing a dedicated resource</li>
                </ul>
                <Button className="w-full mt-6 bg-[#1746a2] text-white font-bold" size="lg">Buy Now</Button>
              </CardContent>
            </Card>
            {/* Standard Plan */}
            <Card className="border-t-4 border-[#1746a2]">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">STANDARD PLAN</CardTitle>
                <div className="flex items-end justify-center mt-4">
                  <span className="text-4xl font-bold">$2,400</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <CardDescription className="mt-4 text-gray-600 text-sm">
                  <span className="font-semibold">Hourly Rate:</span> $30/hour<br />
                  <span className="font-semibold">Commitment:</span> 80 hours / Month<br />
                  <span className="font-semibold">Total Monthly Cost:</span> $2,400
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> No long term commitments</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Additional hours billed at the same hourly rate</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Ideal for businesses needing a dedicated resource</li>
                </ul>
                <Button className="w-full mt-6 bg-[#1746a2] text-white font-bold" size="lg">Buy Now</Button>
              </CardContent>
            </Card>
            {/* Premium Plan */}
            <Card className="border-t-4 border-[#1746a2]">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">PREMIUM PLAN</CardTitle>
                <div className="flex items-end justify-center mt-4">
                  <span className="text-4xl font-bold">$4,000</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <CardDescription className="mt-4 text-gray-600 text-sm">
                  <span className="font-semibold">Hourly Rate:</span> $25/hour<br />
                  <span className="font-semibold">Commitment:</span> 160 hours / Month<br />
                  <span className="font-semibold">Total Monthly Cost:</span> $4,000
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> No long term commitments</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Additional hours billed at the same hourly rate</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#1746a2] mr-2" /> Ideal for businesses needing a dedicated resource</li>
                </ul>
                <Button className="w-full mt-6 bg-[#1746a2] text-white font-bold" size="lg">Buy Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catch-Up Bookkeeping Services */}
      <section className="py-16 bg-[#f7fafd]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Catch-Up Bookkeeping Services</h2>
          <p className="text-center text-lg mb-12">Behind on Your Books? We'll Catch You Up.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-[#e6f2ff] rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-[#1746a2]" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">Flat-rate pricing based on months and transaction volume</h3>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-[#e6f2ff] rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-[#1746a2]" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">Up to 12 months cleaned and reconciled within 7 days</h3>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-[#e6f2ff] rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-[#1746a2]" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">Tax-ready financials delivered fast</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose Remote Books Online</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-[#e6f2ff] rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-[#1746a2]" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">First Month Free</h3>
                <p className="text-gray-600 text-center">Try before you commit</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-[#e6f2ff] rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-[#1746a2]" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">No Software Headaches</h3>
                <p className="text-gray-600 text-center">We manage QuickBooks or Xero for you</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-[#e6f2ff] rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-[#1746a2]" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">Dedicated, Certified Bookkeepers</h3>
                <p className="text-gray-600 text-center">Always accurate, always professional</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-[#e6f2ff] rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-[#1746a2]" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">Secure & Encrypted</h3>
                <p className="text-gray-600 text-center">256-bit SSL, bank-level security</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-[#e6f2ff] rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-[#1746a2]" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">Trusted Nationwide</h3>
                <p className="text-gray-600 text-center">Thousands of small business owners rely on us</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f7fafd]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What's included in the $150/month plan?</AccordionTrigger>
                <AccordionContent>
                  The Beginner plan includes bookkeeping for one bank account, a QuickBooks or Xero subscription, monthly reconciliation, tax-ready reports, and a dedicated bookkeeping team.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I upgrade anytime?</AccordionTrigger>
                <AccordionContent>
                  Yes! You can upgrade to a higher plan at any time based on your account volume, transactions, or business growth.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you support QuickBooks and Xero?</AccordionTrigger>
                <AccordionContent>
                  Yes, we support both QuickBooks Online/Desktop and Xero. Your subscription is included with every plan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What if I'm behind on my books?</AccordionTrigger>
                <AccordionContent>
                  No problem - our Catch-Up Bookkeeping service will clean up your books fast, with a turnaround of 7 days for up to 12 months.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Are there any contracts or hidden fees?</AccordionTrigger>
                <AccordionContent>
                  Nope. All our plans are month-to-month with transparent pricing and no hidden charges.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Do I need to manage the bookkeeping software?</AccordionTrigger>
                <AccordionContent>
                  Not at all. We handle the software for you, so you can focus on running your business.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Pricing;
