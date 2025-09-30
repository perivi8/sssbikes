import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { state } = useCart();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-20 w-full border-b border-primary/20 dark:border-primary/30 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 sm:px-10 py-4">
        <Link to="/" className="flex items-center gap-4">
          <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor"></path>
          </svg>
          <h2 className="text-xl font-bold">SSS Motors</h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          <Link to="/" className={`text-sm font-medium hover:text-primary transition-colors ${
            isActive('/') ? 'text-primary font-semibold' : ''
          }`}>
            Shop
          </Link>
          <Link to="/bikes" className={`text-sm font-medium hover:text-primary transition-colors ${
            isActive('/bikes') ? 'text-primary font-semibold' : ''
          }`}>
            Bikes
          </Link>
          <Link to="/accessories" className={`text-sm font-medium hover:text-primary transition-colors ${
            isActive('/accessories') ? 'text-primary font-semibold' : ''
          }`}>
            Accessories
          </Link>
          <Link to="/about" className={`text-sm font-medium hover:text-primary transition-colors ${
            isActive('/about') ? 'text-primary font-semibold' : ''
          }`}>
            About
          </Link>
          <Link to="/support" className={`text-sm font-medium hover:text-primary transition-colors ${
            isActive('/support') ? 'text-primary font-semibold' : ''
          }`}>
            Support
          </Link>
          <Link to="/contact" className={`text-sm font-medium hover:text-primary transition-colors ${
            isActive('/contact') ? 'text-primary font-semibold' : ''
          }`}>
            Contact
          </Link>
        </nav>

        {/* Cart and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <Button variant="ghost" size="sm" asChild className="relative">
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              {state.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.itemCount}
                </span>
              )}
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-primary/20 dark:border-primary/30 bg-background">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <Link
              to="/"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive('/') ? 'text-primary font-semibold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/bikes"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive('/bikes') ? 'text-primary font-semibold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Bikes
            </Link>
            <Link
              to="/accessories"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive('/accessories') ? 'text-primary font-semibold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accessories
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive('/about') ? 'text-primary font-semibold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/support"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive('/support') ? 'text-primary font-semibold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive('/contact') ? 'text-primary font-semibold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
