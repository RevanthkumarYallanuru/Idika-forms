import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { LazyImage } from "@/components/LazyImage";
import { ScrollReveal } from "@/components/ScrollReveal";
import { galleryImages } from "@/data/siteData";

// Category filter colors
const categoryColors: Record<string, string> = {
  "Architecture": "from-amber-500 to-orange-500",
  "Interiors": "from-rose-500 to-pink-500",
  "Amenities": "from-blue-500 to-cyan-500",
  "Grounds": "from-green-500 to-emerald-500",
  "Views": "from-purple-500 to-indigo-500",
  "Sustainability": "from-lime-500 to-green-500",
  "Experiences": "from-yellow-500 to-amber-500",
};

type CategoryFilter = "all" | string;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const categories = ["all", "Architecture", "Amenities", "Views", "Experiences"];
  
  const filteredImages = useMemo(() => {
    if (filter === "all") return galleryImages;
    return galleryImages.filter(img => img.category === filter);
  }, [filter]);

  const selectedItem = selectedImage !== null 
    ? galleryImages.find(img => img.id === selectedImage) 
    : null;

  const selectedIndex = filteredImages.findIndex(img => img.id === selectedImage);
  
  const handlePrevious = () => {
    if (selectedIndex > 0) {
      setSelectedImage(filteredImages[selectedIndex - 1].id);
    } else {
      setSelectedImage(filteredImages[filteredImages.length - 1].id);
    }
  };

  const handleNext = () => {
    if (selectedIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[selectedIndex + 1].id);
    } else {
      setSelectedImage(filteredImages[0].id);
    }
  };

  const getImageClass = (aspect: "square" | "landscape" | "portrait") => {
    switch (aspect) {
      case "landscape":
        return "aspect-video";
      case "portrait":
        return "aspect-[3/4]";
      case "square":
      default:
        return "aspect-square";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-background-secondary to-background overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-main text-center relative z-10">
          <ScrollReveal>
            <motion.p 
              className="text-subtitle text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Visual Storytelling
            </motion.p>
            <motion.h1 
              className="text-display-xl mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Gallery
            </motion.h1>
            <motion.p 
              className="text-body-lg max-w-2xl mx-auto text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A glimpse into the world of Idika — where architecture meets nature, 
              and every moment invites stillness.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background">
        <div className="container-main">
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === "all" ? "All" : category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatePresence mode="wait">
            <motion.div 
              key={filter}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[280px]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredImages.map((image) => {
              return (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  className="aspect-auto"
                >
                  <motion.button
                    onClick={() => setSelectedImage(image.id)}
                    className="relative w-full h-full overflow-hidden rounded-2xl group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LazyImage
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <motion.div
                      className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${categoryColors[image.category] || "from-gray-500 to-gray-600"} shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                    >
                      {image.category}
                    </motion.div>

                    {/* Content */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-5 text-white"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      
                      <p className="text-sm text-white/80">{image.alt}</p>
                    </motion.div>

                    {/* Play Icon */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-14 h-14 rounded-full border-2 border-white/60 flex items-center justify-center backdrop-blur-sm bg-white/10">
                        <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                      </div>
                    </motion.div>
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button - Responsive for mobile */}
            <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300 backdrop-blur-md border border-white/20 z-[60] md:w-12 md:h-12 md:top-6 md:right-6 sm:w-11 sm:h-11 sm:top-4 sm:right-4"
              style={{
                touchAction: 'manipulation',
                minWidth: 44,
                minHeight: 44,
                zIndex: 60,
                background: 'rgba(0,0,0,0.7)',
                border: '2px solid #fff',
                color: '#fff',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={28} />
            </motion.button>

            {/* Navigation Buttons - Responsive for mobile */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/20 z-[50] md:w-12 md:h-12 md:left-6 sm:w-11 sm:h-11 sm:left-4"
              style={{ touchAction: 'manipulation', zIndex: 50, transition: 'none', transform: 'translateY(-50%)', margin: 0, padding: 0 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/20 z-[50] md:w-12 md:h-12 md:right-6 sm:w-11 sm:h-11 sm:right-4"
              style={{ touchAction: 'manipulation', zIndex: 50, transition: 'none', transform: 'translateY(-50%)', margin: 0, padding: 0 }}
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-black/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
                <motion.img
                  key={selectedImage}
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ touchAction: 'pan-x' }}
                />
                {/* Pagination Dots REMOVED for mobile fullscreen */}
              </div>

              {/* Image Info */}
              <motion.div 
                className="mt-6 text-center text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${categoryColors[selectedItem.category]} text-white`}>
                    {selectedItem.category}
                  </span>
                  <p className="text-sm text-white/70">{selectedIndex + 1} / {filteredImages.length}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Keyboard Navigation Hint - Desktop Only */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Use arrow keys or buttons to navigate
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
