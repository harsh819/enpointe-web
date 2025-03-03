
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';

type ServiceCardProps = {
  title: string;
  description: string;
  index: number;
};

const ServiceCard = ({ title, description, index }: ServiceCardProps) => {
  return (
    <FadeIn 
      delay={0.1 * index} 
      className="flex-1 min-w-[280px]"
    >
      <div className="p-8 bg-white rounded-lg border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
        <div className="mb-6 flex items-center justify-center w-12 h-12 text-lg font-semibold bg-black text-white rounded-full">
          {index + 1}
        </div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </FadeIn>
  );
};

export default ServiceCard;
