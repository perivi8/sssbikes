import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Auto redirect to home after 5 seconds
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col gap-4 items-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Go to Home
            </Link>
            <p className="text-sm text-muted-foreground">
              Auto-redirecting to home in {countdown} seconds...
            </p>
          </div>
          <div className="mt-8 text-xs text-muted-foreground">
            <p>Route: <code className="bg-muted px-2 py-1 rounded">{location.pathname}</code></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
