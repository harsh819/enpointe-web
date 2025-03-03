
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Info */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold tracking-tighter mb-4">utility</h2>
            <p className="text-gray-400 max-w-xs">
              A digital studio crafting beautiful & functional experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#work" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Work
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:hello@utility.studio" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  hello@utility.studio
                </a>
              </li>
              <li className="text-gray-400">
                1234 Design Avenue<br />
                New York, NY 10001
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm">
          <p>© {currentYear} Utility. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
