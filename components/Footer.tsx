import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 dark:border-primary/30 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor"></path>
              </svg>
              <h3 className="text-xl font-bold">SSS Motors</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for premium electric bikes and accessories.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/leader-e-power-l6" className="text-muted-foreground hover:text-primary transition-colors">
                  Leader E-Power L6 Pro
                </Link>
              </li>
              <li>
                <Link to="/products/ninety-one-zx" className="text-muted-foreground hover:text-primary transition-colors">
                  NINETY ONE ZX
                </Link>
              </li>
              <li>
                <Link to="/products/zeeta-plus-ic" className="text-muted-foreground hover:text-primary transition-colors">
                  Zeeta Plus IC
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-muted-foreground hover:text-primary transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20 dark:border-primary/30 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SSS Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
