import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { contactPage, siteConfig } from "@/data/siteData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format booking details for WhatsApp
    const bookingDetails = `*Booking Inquiry from Idika*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Guests:* ${formData.guests}%0A*Preferred Dates:* ${formData.dates}%0A*Special Requests:* ${formData.message || 'None'}%0A%0A_Sent from Idika Website_`;
    
    // Send to WhatsApp
    const whatsappNumber = "+917207357312";
    const whatsappURL = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${bookingDetails}`;
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", dates: "", guests: "", message: "" });
    
    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactDetails = [
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { icon: MapPin, label: "Location", value: "Near Ananthagiri Hills, Hyderabad", href: "#" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background-secondary">
        <div className="container-main text-center">
          <ScrollReveal>
            <p className="text-subtitle text-primary mb-4">{contactPage.hero.subtitle}</p>
            <h1 className="text-display-xl mb-6">{contactPage.hero.title}</h1>
            <p className="text-body-lg max-w-2xl mx-auto">{contactPage.hero.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {isSubmitted ? (
                  <div className="card-luxury p-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <ArrowRight size={24} className="text-primary" />
                    </div>
                    <h2 className="text-2xl font-display mb-4">Message Sent on WhatsApp!</h2>
                    <p className="text-muted-foreground mb-4">
                      Your booking details have been sent to our WhatsApp. Our team will respond shortly with available dates and confirmation.
                    </p>
                    <p className="text-sm text-primary font-medium">
                      WhatsApp: +91 7207357312
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-muted rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-muted rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-muted rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label htmlFor="guests" className="block text-sm font-medium mb-2">
                          Number of Guests <span className="text-primary">*</span>
                        </label>
                        <select
                          id="guests"
                          name="guests"
                          required
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full bg-muted rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                        >
                          <option value="">Select</option>
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="dates" className="block text-sm font-medium mb-2">
                        Preferred Dates <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="dates"
                        name="dates"
                        required
                        value={formData.dates}
                        onChange={handleChange}
                        className="w-full bg-muted rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                        placeholder="e.g., March 15-17, 2026"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Special Requests
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-muted rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                        placeholder="Any dietary preferences, special occasions, or requests..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Inquiry"}
                      <ArrowRight size={18} className="ml-2" />
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="card-luxury p-8 mb-8">
                  <h3 className="text-xl font-display mb-6">Get in Touch</h3>
                  <StaggerContainer className="space-y-6">
                    {contactDetails.map((detail, index) => (
                      <StaggerItem key={index}>
                        <a
                          href={detail.href}
                          className="flex items-start gap-4 group"
                        >
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <detail.icon size={18} className="text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{detail.label}</p>
                            <p className="font-medium group-hover:text-primary transition-colors">
                              {detail.value}
                            </p>
                          </div>
                        </a>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>

                <div className="card-luxury p-8">
                  <h3 className="text-xl font-display mb-4">{contactPage.cta.title}</h3>
                  <p className="text-muted-foreground mb-4">{contactPage.cta.description}</p>
                  <p className="text-sm italic text-primary">{contactPage.cta.note}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
