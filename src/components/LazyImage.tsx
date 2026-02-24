import { useState, useEffect, useRef, memo } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  [key: string]: any;
}

// Global image cache to prevent re-loading images
const imageCache = new Set<string>();

// Preload an image and add to cache
export const preloadImage = (src: string): Promise<void> => {
  if (imageCache.has(src)) return Promise.resolve();
  
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      imageCache.add(src);
      resolve();
    };
    img.onerror = () => resolve(); // Don't block on error
    img.src = src;
  });
};

// Preload multiple images
export const preloadImages = (srcs: string[]): void => {
  srcs.forEach(src => {
    if (!imageCache.has(src)) {
      const img = new Image();
      img.onload = () => imageCache.add(src);
      img.src = src;
    }
  });
};

export const LazyImage = memo(({ 
  src, 
  alt, 
  className = "", 
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  ...props 
}: LazyImageProps) => {
  // Check if image is already cached
  const isCached = imageCache.has(src);
  const [isLoaded, setIsLoaded] = useState(isCached);
  const [imageSrc, setImageSrc] = useState<string | null>(priority || isCached ? src : null);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // If already cached or priority, load immediately
    if (priority || imageCache.has(src)) {
      setImageSrc(src);
      if (imageCache.has(src)) {
        setIsLoaded(true);
      }
      return;
    }

    // Create observer only once per component
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observerRef.current?.disconnect();
          }
        },
        { 
          threshold: 0.01,
          rootMargin: "300px 0px" // Increased margin for earlier loading
        }
      );
    }

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [src, priority]);

  const handleLoad = () => {
    imageCache.add(src);
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc || undefined}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      onLoad={handleLoad}
      onError={handleError}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      sizes={sizes}
      style={{ 
        backgroundColor: !isLoaded ? 'rgba(0,0,0,0.1)' : undefined,
        minHeight: !isLoaded ? '100px' : undefined
      }}
      {...props}
    />
  );
});
