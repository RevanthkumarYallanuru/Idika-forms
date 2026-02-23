import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { LazyImage } from "@/components/LazyImage";
import { aboutPage, ctaButton } from "@/data/siteData";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage
            src={aboutPage.hero.image.src}
            alt={aboutPage.hero.image.alt}
            className="w-full h-full object-cover"
            priority={true}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>

        <div className="relative z-10 container-main text-center pt-32">
          <ScrollReveal>
            <p className="text-subtitle text-secondary mb-4">{aboutPage.hero.subtitle}</p>
            <h1 className="text-display-xl mb-6">{aboutPage.hero.title}</h1>
            <p className="text-body-lg max-w-2xl mx-auto">{aboutPage.hero.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <h2 className="text-display-lg mb-8">{aboutPage.story.title}</h2>
              {aboutPage.story.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-body-lg mb-6">{paragraph}</p>
              ))}
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <LazyImage
                  src={aboutPage.story.image.src}
                  alt={aboutPage.story.image.alt}
                  className="w-full h-full object-cover img-warm"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <p className="text-subtitle text-primary mb-4">Our Philosophy</p>
            <h2 className="text-display-lg">What We Stand For</h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutPage.values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="card-luxury p-8 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-semibold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-display mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="text-display-lg mb-6">Ready to Experience Idika?</h2>
            <p className="text-body-lg max-w-xl mx-auto mb-10">
              Come stay with us and discover what sustainable luxury truly means.
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

export default About;
