import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { serviceCategories } from "@/data/services";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "About", href: "#about" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Promotional Banner */}
      <div className="bg-accent text-accent-foreground py-2 text-center text-sm font-medium">
        Get Your First Month Bookkeeping Free — Try it free for 30 days — no credit card, no contract
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-primary">TopNotch Accounting</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary font-medium bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-6 bg-background border border-border rounded-lg shadow-lg">
                      <div className="grid grid-cols-3 gap-6">
                        {serviceCategories.map((category, index) => (
                          <div key={index}>
                            <h4 className="font-semibold text-foreground mb-3 text-sm">
                              {category.title}
                            </h4>
                            <ul className="space-y-2">
                              {category.services.map((service) => (
                                <li key={service.slug}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={service.href}
                                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                                    >
                                      {service.name}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">1-800-555-0148</span>
            </div>
            <Button variant="cta" size="lg">
              Get Free Review
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {/* Services Dropdown for Mobile */}
              <div className="space-y-2">
                <span className="text-foreground font-medium py-2 block">Services</span>
                <div className="pl-4 space-y-2">
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="space-y-1">
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                        {category.title}
                      </span>
                      {category.services.map((service) => (
                        <Link
                          key={service.slug}
                          to={service.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 pl-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">1-800-555-0148</span>
                </div>
                <Button variant="cta" size="lg" className="w-full">
                  Get Free Review
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;