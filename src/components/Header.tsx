import { useState } from "react";
import { Button } from "@/components/ui/button";
import ConsultForm from "@/components/ConsultForm";
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
import { compareCategories } from "@/data/compare";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showConsult, setShowConsult] = useState(false);

  const menuItems = [
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" }
  ];



  return (
    <header className="pt=16">
      {/* Promotional Banner */}

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/favicon.ico"
              alt="Logo"
              className="w-10 h-10 object-contain"
              style={{ background: '#f4f4f4', borderRadius: '0.5rem' }}
            />
            <span className="text-xl font-bold" style={{ color: '#e71a21' }}>
              TopNotch Solutions
            </span>
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary font-medium bg-transparent">
                    Compare
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-6 bg-background border border-border rounded-lg shadow-lg">
                      <div className="grid grid-cols-2 gap-6">
                        {compareCategories.map((category, idx) => (
                          <div key={idx}>
                            <h4 className="font-semibold text-foreground mb-3 text-sm">
                              {category.title}
                            </h4>
                            <ul className="space-y-2">
                              {category.links.map((link) => (
                                <li key={link.slug}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={link.href}
                                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                                    >
                                      {link.name}
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
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 9666736088</span>
            </div>
            <Button variant="cta" size="lg" onClick={() => setShowConsult(true)}>
              Get a Free Quote for Bookkeeping
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

              {/* Compare Dropdown for Mobile */}
              <div className="space-y-2">
                <span className="text-foreground font-medium py-2 block">Compare</span>
                <div className="pl-4 space-y-2">
                  {compareCategories.map((category) => (
                    <div key={category.title} className="space-y-1">
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                        {category.title}
                      </span>
                      {category.links.map((link) => (
                        <Link
                          key={link.slug}
                          to={link.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 pl-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
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
                  <span className="text-sm font-medium">+91 9666736088</span>
                </div>
                <Button variant="cta" size="lg" className="w-full" onClick={() => setShowConsult(true)}>
                  Get a Free Quote for Bookkeeping
                </Button>
              </div>
            </nav>
          </div>
        )}
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
  </header>
);
}

export default Header;