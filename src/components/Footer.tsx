import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter } from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#23409a] text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-6 border-b border-white/20">
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Core Bookkeeping Services</li>
              <li>Bookkeeping for Industries</li>
              <li>Outsourced Bookkeeping</li>
              <li>Resources</li>
            </ul>
          </div>
          {/* Businesses we serve */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Businesses we serve</h3>
            <ul className="space-y-2 text-sm">
              <li>Real Estate</li>
              <li>Nonprofits</li>
              <li>Law Firms</li>
              <li>Medical Practices</li>
              <li>E-Commerce</li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>Pricing</li>
              <li>Blog</li>
              <li>Testimonials</li>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>How it works</li>
            </ul>
          </div>
          {/* Quick Links */}
          
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Contact Information</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="inline-block align-middle mr-2">📍</span>India Location: TopNotch Solutions, 506 Manjeera Majestic Commercial, Hyderabad, Telangana 500072</li>
              <li><span className="inline-block align-middle mr-2">📍</span>US Location: 941 W Morse Blvd, Suite#100 Winter Park, FL 32789</li>
              <li><span className="inline-block align-middle mr-2">📞</span>+91 9666736088</li>
              <li><span className="inline-block align-middle mr-2">✉️</span>info@topnotchsol.com</li>
            </ul>
            
            
          </div>
        </div>
        {/* Disclaimer */}
        <div className="text-xs text-white/80 mt-6 max-w-5xl mx-auto text-center">
          *Disclaimer: Remote Books Online provides bookkeeping, tax preparation, tax filing, and accounting services for small businesses using third-party accounting software. We are a THIRD PARTY accounting & bookkeeping solution and we are NOT AFFILIATED with any brands, trademarks, logos, or any other company names used. The brand names, trademarks, and logos belong to their respective owners and are for representation purposes only.
        </div>
        {/* Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-6 text-xs text-white/70 gap-2">
          <div>
            Privacy Policy &nbsp; Terms &nbsp; Refund Policy
          </div>
          <div>
            © {currentYear} TopNotch Solutions Ltd. All rights reserved. Updated May {currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;