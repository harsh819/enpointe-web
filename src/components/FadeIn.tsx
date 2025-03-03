
import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'none';
};

const FadeIn = ({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  direction = 'up',
}: FadeInProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (elementRef.current) {
            const animation = direction === 'up' 
              ? 'animate-slide-up' 
              : direction === 'down' 
                ? 'animate-slide-down' 
                : 'animate-fade-in';
                
            elementRef.current.classList.add(animation);
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
  }, [delay, direction, threshold]);

  return (
    <div 
      ref={elementRef} 
      className={cn('opacity-0', className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
