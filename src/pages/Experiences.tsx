import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { LazyImage } from "@/components/LazyImage";
import { experiencesPage, ctaButton } from "@/data/siteData";
import openLawns from "@/assets/open-lawns.jpg";

const Experiences = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage
            src={openLawns}
            alt="Open lawns at Idika"
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

      {/* Experiences Grid */}
      <section className="section-padding">
        <div className="container-main">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiencesPage.experiences.map((experience, index) => (
              <StaggerItem key={index}>
                <div className="card-luxury p-8 h-full flex flex-col group hover:glow-soft transition-shadow duration-500">
                  <div className="flex-1">
                    <h3 className="text-2xl font-display mb-4">{experience.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{experience.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Clock size={16} />
                    <span>{experience.duration}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
