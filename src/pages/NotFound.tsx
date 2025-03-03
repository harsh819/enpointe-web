
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";
import FadeIn from "@/components/FadeIn";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-32 px-6 md:px-12">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-8xl font-bold mb-6">
            <TextReveal>404</TextReveal>
          </h1>
          
          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-gray-600 mb-10">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <a 
              href="/" 
              className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-opacity-80 transition-all duration-300"
            >
              Return Home
            </a>
          </FadeIn>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
