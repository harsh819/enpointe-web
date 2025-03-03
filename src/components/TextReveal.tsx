
import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type TextRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
};

const TextReveal = ({
  children,
  className,
  delay = 0,
  threshold = 0.1,
}: TextRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (elementRef.current) {
            elementRef.current.classList.add('animate-text-reveal');
            elementRef.current.style.animationDelay = `${delay}s`;
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: threshold,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold]);

  return (
    <div className="text-animation-container">
      <div 
        ref={elementRef} 
        className={cn('text-animation-item', className)}
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </div>
    </div>
  );
};

export default TextReveal;
