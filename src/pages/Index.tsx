import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, CloudRain, Filter, Recycle, Droplets, LucideIcon } from "lucide-react";
import { Layout } from "@/components/Layout";
import { LazyImage } from "@/components/LazyImage";
import { lazy, Suspense } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { homePage, reviews, siteConfig } from "@/data/siteData";

// Lazy load the 3D Dome component - only needed on desktop
const Dome3D = lazy(() => import("@/components/Dome3D").then(m => ({ default: m.Dome3D })));

const Dome3DFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-background-secondary rounded-2xl">
    <div className="w-16 h-16 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
  </div>
);

const heroImage = "https://raw.githubusercontent.com/RevanthkumarYallanuru/assets/main/heros/IMG_5907.JPG";

const iconMap: Record<string, LucideIcon> = {
  CloudRain,
  Filter,
  Recycle,
  Droplets,
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <LazyImage
            src={heroImage}
            alt="Idika Earthbag Dome at twilight"
            className="w-full h-full object-cover"
            priority={true}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-main text-center pt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-subtitle text-secondary mb-6"
          >
            {homePage.hero.subtitle}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-wider leading-none mb-8"
          >
            {homePage.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-display-sm font-semibold max-w-2xl mx-auto mb-12 text-white"
          >
            {homePage.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to={homePage.hero.cta.primary.href} className="btn-primary">
              {homePage.hero.cta.primary.label}
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to={homePage.hero.cta.secondary.href} className="btn-secondary">
              {homePage.hero.cta.secondary.label}
            </Link>
          </motion.div>
        </div>

      </section>

      {/* 3D Dome Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <p className="text-subtitle text-primary mb-4">{homePage.intro.subtitle}</p>
              <h2 className="text-display-lg mb-6">{homePage.intro.title}</h2>
              <p className="text-body-lg mb-10">{homePage.intro.description}</p>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
                {homePage.intro.stats.map((stat, index) => (
                  <div key={index} className="text-center px-1 sm:px-2">
                    <p className="stat-value">{stat.value}</p>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Gallery Image */}
            <ScrollReveal direction="right" delay={0.2} className="hidden lg:block">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <LazyImage
                  src="https://raw.githubusercontent.com/RevanthkumarYallanuru/assets/main/gallery/IMG_5914.JPG"
                  alt="Idika open spaces"
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interior Feature */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <LazyImage
                  src={homePage.features[0].image.src}
                  alt={homePage.features[0].image.alt}
                  className="w-full h-full object-cover img-warm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal className="order-1 lg:order-2" direction="right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm mb-6">
                {homePage.features[0].highlight}
              </span>
              <h2 className="text-display-lg mb-6">{homePage.features[0].title}</h2>
              <p className="text-body-lg">{homePage.features[0].description}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sustainability Feature */}
      <section className="section-padding bg-background-secondary">
        <div className="container-main">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-subtitle text-primary mb-4">{homePage.sustainability.subtitle}</p>
            <h2 className="text-display-lg mb-6">{homePage.sustainability.title}</h2>
            <p className="text-body-lg">{homePage.sustainability.description}</p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {homePage.features[1].items?.map((item, index) => {
              const IconComponent = typeof item === 'object' && item.icon ? iconMap[item.icon] : null;
              const label = typeof item === 'object' ? item.label : item;
              return (
                <StaggerItem key={index}>
                  <div className="card-luxury p-6 text-center group hover:glow-soft transition-shadow duration-500">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      {IconComponent ? (
                        <IconComponent size={20} className="text-primary group-hover:scale-110 transition-transform" />
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                      )}
                    </div>
                    <p className="text-sm font-medium">{label}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal>
              <p className="text-subtitle text-primary mb-4">{homePage.experience.subtitle}</p>
              <h2 className="text-display-lg mb-6">{homePage.experience.title}</h2>
              <p className="text-body-lg mb-10">{homePage.experience.description}</p>

              <div className="space-y-6">
                {homePage.experience.features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-1 bg-primary rounded-full" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden aspect-[3/4]">
                    <LazyImage
                      src={homePage.experience.images[0].src}
                      alt={homePage.experience.images[0].alt}
                      className="w-full h-full object-cover img-warm"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-xl overflow-hidden aspect-[3/4]">
                    <LazyImage
                      src={homePage.experience.images[1].src}
                      alt={homePage.experience.images[1].alt}
                      className="w-full h-full object-cover img-warm"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <p className="text-subtitle text-primary mb-4">Guest Experiences</p>
            <h2 className="text-display-lg">What Our Guests Say</h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review) => (
              <StaggerItem key={review.id}>
                <div className="card-luxury p-8 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-secondary text-secondary"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground/90 leading-relaxed flex-1 mb-6">
                    "{review.text}"
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-border/30">
                    <p className="font-medium">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container-main relative z-10">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <h2 className="text-display-lg mb-6">{homePage.cta.title}</h2>
            <p className="text-body-lg mb-10">{homePage.cta.description}</p>
            <Link to={homePage.cta.button.href} className="btn-primary">
              {homePage.cta.button.label}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
