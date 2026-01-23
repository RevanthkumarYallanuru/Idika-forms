import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LazyImage } from "@/components/LazyImage";
import { eventsPage, eventTypes, eventVenues, eventAddOns } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, MapPin, Check, MessageCircle, Sparkles, Heart, Calendar } from "lucide-react";

const Events = () => {
  const handleWhatsAppInquiry = (eventName: string, venueName?: string) => {
    const message = venueName 
      ? `Hi, I'm interested in hosting a ${eventName} at ${venueName} in Idika. Can you share more details about availability and pricing?`
      : `Hi, I'm interested in hosting a ${eventName} at Idika. Can you share more details about availability and pricing?`;
    const whatsappUrl = `https://wa.me/917207357312?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=1080&fit=crop"
            alt="Events at Idika"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <ScrollReveal>
            <motion.p
              className="text-idika-accent font-serif text-lg md:text-xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {eventsPage.hero.subtitle}
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {eventsPage.hero.title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {eventsPage.hero.description}
            </motion.p>
          </ScrollReveal>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {eventsPage.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-white border-white/40 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm"
              >
                {tag}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 bg-gradient-to-b from-idika-cream to-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-idika-accent" />
                <span className="text-idika-accent font-medium uppercase tracking-widest text-sm">
                  Celebrate Your Way
                </span>
                <Sparkles className="w-5 h-5 text-idika-accent" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-idika-brown mb-4">
                Events We Host
              </h2>
              <p className="text-idika-textLight max-w-2xl mx-auto">
                Whether it's an intimate gathering or a grand celebration, Idika offers the perfect backdrop for your special moments.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 0.1}>
                <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <LazyImage
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-4 left-4 text-4xl">{event.icon}</span>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl font-serif text-idika-brown">
                        {event.name}
                      </CardTitle>
                      <div className="text-right flex-shrink-0">
                        <p className="text-lg font-bold text-idika-accent">₹{event.basePrice.toLocaleString()}</p>
                        <p className="text-[10px] text-idika-textLight">onwards</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {event.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-idika-sand/50 text-idika-brown">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-idika-textLight mb-2">
                      {event.description}
                    </CardDescription>
                    <p className="text-xs text-idika-accent/80 italic mb-4">{event.priceNote}</p>
                    <Button
                      onClick={() => handleWhatsAppInquiry(event.name)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Inquire on WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Poetic Section */}
      <section className="py-20 bg-idika-brown text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <LazyImage
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&h=1080&fit=crop"
            alt="Nature background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="w-12 h-12 mx-auto mb-6 text-idika-accent" />
              <h2 className="text-3xl md:text-4xl font-serif mb-8">
                {eventsPage.poeticSection.title}
              </h2>
              <div className="space-y-6">
                {eventsPage.poeticSection.lines.map((line, index) => (
                  <motion.p
                    key={index}
                    className="text-lg md:text-xl font-serif italic text-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    "{line}"
                  </motion.p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-20 bg-[#010101]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-idika-accent" />
                <span className="text-idika-accent font-medium uppercase tracking-widest text-sm">
                  Our Spaces
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-idika-brown mb-4">
                Event Venues
              </h2>
              <p className="text-idika-textLight max-w-2xl mx-auto">
                Choose from our thoughtfully designed indoor and outdoor spaces, each offering a unique ambiance for your celebration.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {eventVenues.map((venue, index) => (
              <ScrollReveal key={venue.id} delay={index * 0.15}>
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <LazyImage
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className={`mb-2 ${venue.type === 'indoor' ? 'bg-idika-brown' : 'bg-idika-accent'}`}>
                        {venue.type === 'indoor' ? '🏛️ Indoor' : '🌳 Outdoor'}
                      </Badge>
                      <h3 className="text-2xl font-serif text-white">{venue.name}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-idika-brown">
                        <Users className="w-5 h-5" />
                        <span className="font-semibold">Up to {venue.capacity} guests</span>
                      </div>
                      <Badge variant="outline" className="text-idika-accent border-idika-accent">
                        Starting ₹{venue.basePrice.toLocaleString()}
                      </Badge>
                    </div>
                    
                    <p className="text-idika-textLight mb-4">{venue.description}</p>
                    
                    <div className="mb-4">
                      <p className="font-medium text-idika-brown mb-2 text-sm">Ideal for:</p>
                      <div className="flex flex-wrap gap-2">
                        {venue.suitableFor.map((item, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-idika-accent/20 text-idika-accent border border-idika-accent/30">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full mb-3 border-idika-brown text-idika-brown hover:bg-idika-brown hover:text-white">
                          View Features
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="font-serif text-xl">{venue.name}</DialogTitle>
                          <DialogDescription>
                            Capacity: Up to {venue.capacity} guests
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-3 py-4">
                          <p className="font-medium text-sm text-idika-brown">Included Features:</p>
                          {venue.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-idika-textLight">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      onClick={() => handleWhatsAppInquiry("event", venue.name)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Book This Venue
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gradient-to-b from-idika-cream to-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-idika-accent" />
                <span className="text-idika-accent font-medium uppercase tracking-widest text-sm">
                  Customize Your Event
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-idika-brown mb-4">
                Optional Add-ons
              </h2>
              <p className="text-idika-textLight max-w-2xl mx-auto">
                Enhance your celebration with our curated services. Mix and match to create your perfect event.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {eventAddOns.map((addOn, index) => (
              <ScrollReveal key={addOn.id} delay={index * 0.05}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full border-idika-sand/50">
                  <CardContent className="pt-6 pb-4">
                    <span className="text-4xl mb-4 block">{addOn.icon}</span>
                    <h3 className="font-semibold text-idika-brown mb-2">{addOn.name}</h3>
                    <p className="text-sm text-idika-textLight mb-3">{addOn.description}</p>
                    <Badge className="bg-idika-accent text-white">
                      {addOn.id === 'catering' ? `₹${addOn.price}/plate` : `₹${addOn.price.toLocaleString()}`}
                    </Badge>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-idika-brown text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Ready to Plan Your Event?
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                Let's bring your vision to life. Contact us to discuss your requirements, check availability, and get a customized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => handleWhatsAppInquiry("event")}
                  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-idika-brown text-lg px-8"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
