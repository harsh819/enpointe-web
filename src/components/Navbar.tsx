
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-6 px-6 md:px-12",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tighter">
          utility
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#work" 
            className="text-sm font-medium hover:opacity-70 transition-opacity relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Work
          </a>
          <a 
            href="#services" 
            className="text-sm font-medium hover:opacity-70 transition-opacity relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Services
          </a>
          <a 
            href="#about" 
            className="text-sm font-medium hover:opacity-70 transition-opacity relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium bg-black text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition-all duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span 
              className={cn(
                "block h-0.5 w-6 bg-black transition-transform duration-300",
                isMenuOpen && "rotate-45 translate-y-2"
              )}
            ></span>
            <span 
              className={cn(
                "block h-0.5 w-6 bg-black transition-opacity duration-300",
                isMenuOpen && "opacity-0"
              )}
            ></span>
            <span 
              className={cn(
                "block h-0.5 w-6 bg-black transition-transform duration-300",
                isMenuOpen && "-rotate-45 -translate-y-2"
              )}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-opacity duration-300 md:hidden",
          isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-8">
          <a
            href="#work"
            className="text-2xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </a>
          <a
            href="#services"
            className="text-2xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="text-2xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-2xl font-medium bg-black text-white px-6 py-3 rounded-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
