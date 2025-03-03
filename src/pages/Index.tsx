
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TextReveal from '@/components/TextReveal';
import FadeIn from '@/components/FadeIn';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';

const projects = [
  {
    title: "Brand Experience Design",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Digital Platform",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Marketing Website",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "E-commerce Experience",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1920&auto=format&fit=crop"
  }
];

const services = [
  {
    title: "Digital Strategy",
    description: "We develop comprehensive digital strategies that align with your business objectives and drive meaningful results."
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive, engaging user experiences that captivate your audience and enhance usability."
  },
  {
    title: "Web Development",
    description: "Building performant, scalable websites and applications using modern technologies and best practices."
  },
  {
    title: "Brand Identity",
    description: "Crafting distinctive visual identities that communicate your brand's values and resonate with your audience."
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight md:leading-tight mb-8 tracking-tight">
              <TextReveal delay={0.1}>A digital studio crafting</TextReveal>
              <TextReveal delay={0.2}>beautiful & functional</TextReveal>
              <TextReveal delay={0.3}>experiences</TextReveal>
            </h1>
            <FadeIn delay={0.6}>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                We help ambitious brands elevate their digital presence through strategic design and development.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Work Section */}
      <section id="work" className="py-20 md:py-32 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-medium mb-16">Selected Work</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                category={project.category}
                image={project.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mb-16">
              We provide end-to-end solutions to help your business thrive in the digital landscape.
            </p>
          </FadeIn>
          
          <div className="flex flex-wrap gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">About Us</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We are a team of strategists, designers, and developers passionate about creating exceptional digital experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Founded in 2023, our studio has collaborated with businesses of all sizes—from startups to global brands—to craft meaningful digital solutions that deliver results. We believe in a thoughtful approach to design and development, where every decision is intentional and purpose-driven.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="h-full w-full bg-gray-800 rounded-lg overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop')" }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-center">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-16">
              Have a project in mind? We'd love to hear from you.
            </p>
          </FadeIn>
          
          <ContactForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
