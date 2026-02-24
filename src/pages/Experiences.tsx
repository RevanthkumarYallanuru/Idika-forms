import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, Bath, Sparkles, BedDouble, Waves, TreePine, Film, LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LazyImage } from "@/components/LazyImage";
import { experiencesPage, ctaButton } from "@/data/siteData";
import { Button } from "@/components/ui/button";

const experiencesHeroImage = "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto:best,c_fill,g_center,w_1920/v1771865404/15_ea2hdx.jpg";

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Bath,
  Sparkles,
  BedDouble,
  Waves,
  TreePine,
  Film,
};

const Experiences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const experiences = experiencesPage.experiences;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = experiences.length - 1;
      if (nextIndex >= experiences.length) nextIndex = 0;
      return nextIndex;
    });
  }, [experiences.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentExperience = experiences[currentIndex];
  const IconComponent = currentExperience.icon ? iconMap[currentExperience.icon] : null;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage
            src={experiencesHeroImage}
            alt="Experiences at Idika"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>

        <div className="relative z-10 container-main text-center pt-32">
          <ScrollReveal>
            <p className="text-subtitle text-secondary mb-4">{experiencesPage.hero.subtitle}</p>
            <h1 className="text-display-xl mb-6">{experiencesPage.hero.title}</h1>
            <p className="text-body-lg max-w-2xl mx-auto">{experiencesPage.hero.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Experiences Carousel */}
      <section className="section-padding">
        <div className="container-main max-w-5xl">
          <div className="relative">
            {/* Main Carousel Card */}
            <div className="card-luxury overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (offset.x < -50) {
                      paginate(1);
                    } else if (offset.x > 50) {
                      paginate(-1);
                    }
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-0 cursor-grab active:cursor-grabbing"
                >
                  {/* Image Side */}
                  <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden max-h-[400px] md:max-h-[500px]">
                    <LazyImage
                      src={currentExperience.image || ""}
                      alt={currentExperience.title}
                      className="w-full h-full object-cover object-center pointer-events-none"
                    />
                  </div>

                  {/* Content Side */}
                  <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                    {IconComponent && (
                      <div className="mb-4 text-primary">
                        <IconComponent size={40} strokeWidth={1.5} />
                      </div>
                    )}
                    <h3 className="text-2xl md:text-3xl font-display mb-4">
                      {currentExperience.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {currentExperience.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows - Hidden on mobile, visible on md+ */}
            <div className="hidden md:flex absolute top-1/3 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none md:-mx-6 lg:-mx-12">
              <Button
                variant="outline"
                size="icon"
                className="pointer-events-auto rounded-full bg-background/80 backdrop-blur-sm border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all w-12 h-12"
                onClick={() => paginate(-1)}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="pointer-events-auto rounded-full bg-background/80 backdrop-blur-sm border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all w-12 h-12"
                onClick={() => paginate(1)}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Swipe hint for mobile */}
            <p className="text-center text-sm text-muted-foreground mt-4 md:hidden">
              Swipe to explore
            </p>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4 md:mt-6">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="text-display-lg mb-6">Craft Your Perfect Retreat</h2>
            <p className="text-body-lg max-w-xl mx-auto mb-10">
              Each experience is included with your stay or can be booked in advance. 
              Let us know your interests and we'll curate the perfect itinerary.
            </p>
            <Link to={ctaButton.href} className="btn-primary">
              {ctaButton.label}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Experiences;
