import { useState } from "react";
import { Link, useLocation } from "wouter";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home", id: "home" },
    { path: "/math", label: "Math", id: "math" },
    { path: "/science", label: "Science", id: "science" },
    { path: "/geography", label: "Geography", id: "geography" },
    { path: "/engineering", label: "Engineer's Toolkit", id: "engineering" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 border-b border-ocean-shallow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <i className="fas fa-water text-ocean-deep text-2xl animate-wave"></i>
            <span className="text-2xl font-bold text-ocean-deep">BlueTrace</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className={`transition-colors duration-300 font-medium ${
                  isActive(item.path)
                    ? "text-ocean-deep"
                    : "text-slate-600 hover:text-ocean-surface"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-ocean-deep hover:text-ocean-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-ocean-shallow">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className={`block py-2 transition-colors ${
                  isActive(item.path)
                    ? "text-ocean-deep"
                    : "text-slate-600 hover:text-ocean-surface"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
