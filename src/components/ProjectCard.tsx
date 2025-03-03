
import { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';

type ProjectCardProps = {
  title: string;
  category: string;
  image: string;
  index: number;
};

const ProjectCard = ({ title, category, image, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <FadeIn 
      delay={0.1 * index} 
      className="w-full h-full"
    >
      <a 
        href="#" 
        className="group block w-full h-full overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full aspect-[4/3] overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        
        <div className="pt-5 pb-8">
          <p className="text-sm tracking-wide text-gray-500 mb-2">{category}</p>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        
        <div 
          className={cn(
            "absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-500",
            isHovered ? "scale-x-100" : "scale-x-0"
          )}
        />
      </a>
    </FadeIn>
  );
};

export default ProjectCard;
