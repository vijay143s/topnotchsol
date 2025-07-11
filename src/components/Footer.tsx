import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }, 
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const footerLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Refund Policy", href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold">TopNotch Accounting</span>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Professional bookkeeping services for small businesses. Accurate, CPA-ready 
              financials from certified experts. Flat pricing, no contracts.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm">123 Business Center Dr, Suite 100, Your City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-sm">1-800-583-0148</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-sm">contact@topnotchaccounting.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm">Monday to Friday, 8 AM – 10 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">Services</a></li>
              <li><a href="#how-it-works" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">How It Works</a></li>
              <li><a href="#pricing" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">Pricing</a></li>
              <li><a href="#faq" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">FAQ</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">About</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">Monthly Bookkeeping</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">Catch-Up Bookkeeping</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">QuickBooks Setup</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">Financial Reports</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">CPA Review</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-primary-foreground/60">
                © {currentYear} TopNotch Accounting. All rights reserved.
              </p>
              <p className="text-xs text-primary-foreground/50 mt-1">
                TopNotch provides third-party bookkeeping services and is not affiliated with QuickBooks, Xero, or other software brands mentioned.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6 pt-6 border-t border-primary-foreground/10">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-xs text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;