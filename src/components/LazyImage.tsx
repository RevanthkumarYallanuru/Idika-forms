import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  [key: string]: any;
}

export const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  ...props 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(priority ? src : null);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // For priority images, load immediately
    if (priority) {
      setImageSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.01, // Lower threshold for earlier loading
        rootMargin: "200px 0px" // Start loading 200px before entering viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, priority]);

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true); // Still mark as loaded to prevent infinite loading state
  };

  return (
    <motion.img
      ref={imgRef}
      src={imageSrc || undefined}
      alt={alt}
      className={className}
      onLoad={() => setIsLoaded(true)}
      onError={handleError}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      sizes={sizes}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ 
        backgroundColor: !isLoaded ? 'rgba(0,0,0,0.1)' : undefined,
        minHeight: !isLoaded ? '100px' : undefined
      }}
      {...props}
    />
  );
};
