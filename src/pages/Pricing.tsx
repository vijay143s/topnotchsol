import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Remote Bookkeeping – Simple Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              No contracts. No hourly fees. No hidden charges.
            </p>
            <Button size="lg" className="text-lg px-8">
              First Month Free
            </Button>
          </div>
        </div>
      </section>

      {/* Small Business Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Small Business Bookkeeping Plans
            </h2>
            <p className="text-xl text-muted-foreground">
              Clear, Flat Pricing for Small Business Owners
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Beginner Plan */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Beginner</CardTitle>
                <div className="flex items-center justify-center mt-4">
                  <span className="text-4xl font-bold">$150</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
                <CardDescription className="mt-4">
                  1 bank account, includes QuickBooks/Xero subscription, reconciliation, financial reports, dedicated team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Dedicated QuickBooks ProAdvisor
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Monthly Reconciliation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Tax-Ready Financial Reports
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Your First Month Free
                  </li>
                </ul>
                <Button className="w-full mt-6" size="lg">
                  Buy Now
                </Button>
              </CardContent>
            </Card>

            {/* Intermediate Plan */}
            <Card className="relative border-primary">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Intermediate</CardTitle>
                <div className="flex items-center justify-center mt-4">
                  <span className="text-4xl font-bold">$195</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
                <CardDescription className="mt-4">
                  2 bank or credit card accounts, unlimited transactions, includes software
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Dedicated QuickBooks ProAdvisor
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Monthly Reconciliation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Tax-Ready Financial Reports
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Your First Month Free
                  </li>
                </ul>
                <Button className="w-full mt-6" size="lg">
                  Buy Now
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="flex items-center justify-center mt-4">
                  <span className="text-4xl font-bold">$225</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
                <CardDescription className="mt-4">
                  $225–$375/month 3–8 accounts or up to $10k in monthly expenses, unlimited transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Dedicated QuickBooks ProAdvisor
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Monthly Reconciliation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Tax-Ready Financial Reports
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Your First Month Free
                  </li>
                </ul>
                <Button className="w-full mt-6" size="lg">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Let's Get Started - Your First Month is Free
          </h2>
          <Button size="lg" className="text-lg px-8">
            Get a Quote in 30 Seconds
          </Button>
        </div>
      </section>

      {/* Dedicated Bookkeeping Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dedicated Bookkeeping for Growing Businesses
            </h2>
            <p className="text-xl text-muted-foreground">
              Need Full-Time Support? We've Got You Covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Basic Plan</CardTitle>
                <div className="flex items-center justify-center mt-4">
                  <span className="text-4xl font-bold">$1,400</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  <p><strong>Hourly Rate:</strong> $35/hour</p>
                  <p><strong>Commitment:</strong> 40 hours / Month</p>
                  <p><strong>Total Monthly Cost:</strong> $1,400</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    No long-term commitments
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Additional hours billed at the same hourly rate
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Ideal for businesses needing a dedicated resource
                  </li>
                </ul>
                <Button className="w-full mt-6" size="lg">
                  Buy Now
                </Button>
              </CardContent>
            </Card>

            {/* Standard Plan */}
            <Card className="border-primary">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Standard Plan</CardTitle>
                <div className="flex items-center justify-center mt-4">
                  <span className="text-4xl font-bold">$2,400</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  <p><strong>Hourly Rate:</strong> $30/hour</p>
                  <p><strong>Commitment:</strong> 80 hours / Month</p>
                  <p><strong>Total Monthly Cost:</strong> $2,400</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    No long-term commitments
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Additional hours billed at the same hourly rate
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Ideal for businesses needing a dedicated resource
                  </li>
                </ul>
                <Button className="w-full mt-6" size="lg">
                  Buy Now
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Premium Plan</CardTitle>
                <div className="flex items-center justify-center mt-4">
                  <span className="text-4xl font-bold">$4,000</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  <p><strong>Hourly Rate:</strong> $25/hour</p>
                  <p><strong>Commitment:</strong> 160 hours / Month</p>
                  <p><strong>Total Monthly Cost:</strong> $4,000</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    No long-term commitments
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Additional hours billed at the same hourly rate
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Ideal for businesses needing a dedicated resource
                  </li>
                </ul>
                <Button className="w-full mt-6" size="lg">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catch-Up Services */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Catch-Up Bookkeeping Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Behind on Your Books? We'll Catch You Up.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Flat-rate pricing based on months and transaction volume
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Up to 12 months cleaned and reconciled within 7 days
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Tax-ready financials delivered fast
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Why Choose Remote Books Online
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">First Month Free</h3>
                    <p className="text-muted-foreground">Try before you commit</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">No Software Headaches</h3>
                    <p className="text-muted-foreground">We manage QuickBooks or Xero for you</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Dedicated, Certified Bookkeepers</h3>
                    <p className="text-muted-foreground">Always accurate, always professional</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Secure & Encrypted</h3>
                    <p className="text-muted-foreground">256-bit SSL, bank-level security</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Trusted Nationwide</h3>
                    <p className="text-muted-foreground">Thousands of small business owners rely on us</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto">
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

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let's Get Started - Your First Month is Free
          </h2>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Get a Quote in 30 Seconds
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
