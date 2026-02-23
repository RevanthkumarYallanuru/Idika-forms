import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LazyImage } from "@/components/LazyImage";
import { eventsPage, eventTypes, eventVenues, eventAddOns } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Users, 
  MapPin, 
  Check, 
  MessageCircle, 
  Sparkles, 
  Calendar,
  PartyPopper,
  Gift,
  Camera,
  Church,
  UsersRound,
  Building,
  TreePine,
  ArrowRight
} from "lucide-react";

// Icon map for event types
const eventIconMap: Record<string, React.ReactNode> = {
  PartyPopper: <PartyPopper className="w-8 h-8 text-primary" />,
  Gift: <Gift className="w-8 h-8 text-primary" />,
  Camera: <Camera className="w-8 h-8 text-primary" />,
  Church: <Church className="w-8 h-8 text-primary" />,
  UsersRound: <UsersRound className="w-8 h-8 text-primary" />,
  Sparkles: <Sparkles className="w-8 h-8 text-primary" />,
};

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
            src="https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto,c_fill,ar_16:9/v1771865421/IMG_6283_fjrzzp.jpg"
            alt="Events at Idika"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>
        
        <div className="relative z-10 container-main text-center pt-20">
          <ScrollReveal>
            <motion.p
              className="text-subtitle text-secondary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {eventsPage.hero.subtitle}
            </motion.p>
            <motion.h1
              className="text-display-xl mb-8 font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {eventsPage.hero.title}
            </motion.h1>
            <motion.p
              className="text-display-sm font-semibold max-w-2xl mx-auto text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {eventsPage.hero.description}
            </motion.p>
          </ScrollReveal>

          {/* Tags - Infinite Marquee */}
          <motion.div
            className="mt-8 overflow-hidden w-full max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex animate-marquee whitespace-nowrap">
              {[...eventsPage.tags, ...eventsPage.tags].map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-foreground border-primary/30 bg-primary/10 backdrop-blur-sm px-3 py-1 text-xs mx-2 flex-shrink-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-subtitle text-primary">
                  Celebrate Your Way
                </span>
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-display-lg mb-4">
                Events We Host
              </h2>
              <p className="text-body-lg max-w-2xl mx-auto">
                Whether it's an intimate gathering or a grand celebration, Idika offers the perfect backdrop for your special moments.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 0.1}>
                <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <LazyImage
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute top-4 left-4 p-3 bg-background/80 backdrop-blur-sm rounded-xl">
                      {eventIconMap[event.icon] || <PartyPopper className="w-8 h-8 text-primary" />}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl font-display text-foreground">
                        {event.name}
                      </CardTitle>
                      {/* Price Display */}
                      <div className="text-right flex-shrink-0">
                        {event.priceRange ? (
                          <p className="text-lg font-semibold text-secondary">{event.priceRange}</p>
                        ) : (
                          <p className="text-lg font-semibold text-secondary">₹{event.basePrice.toLocaleString()}</p>
                        )}
                        {!event.priceRange && <p className="text-[10px] text-muted-foreground">onwards</p>}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {event.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex-grow flex flex-col">
                    <CardDescription className="text-muted-foreground mb-4">
                      {event.description}
                    </CardDescription>
                    
                    {/* Capacities Section */}
                    {event.capacities && (
                      <div className="mb-4 space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <Users className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-foreground">Stay: </span>
                            <span className="text-muted-foreground">{event.capacities.stay}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <UsersRound className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-foreground">Gathering: </span>
                            <span className="text-muted-foreground">{event.capacities.gathering}</span>
                          </div>
                        </div>
                        {event.capacities.details && (
                          <p className="text-xs text-muted-foreground ml-6 italic">{event.capacities.details}</p>
                        )}
                      </div>
                    )}

                    {/* Includes Section */}
                    {event.includes && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">Package Includes:</p>
                        <ul className="space-y-1">
                          {event.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-auto">
                        <p className="text-xs text-primary/80 italic mb-4 font-medium flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            {event.priceNote}
                        </p>
                        <Button
                        onClick={() => handleWhatsAppInquiry(event.name)}
                        className="w-full btn-primary"
                        >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat on WhatsApp
                        </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* Venues Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-subtitle text-primary">
                  Our Spaces
                </span>
              </div>
              <h2 className="text-display-lg mb-4">
                Event Venues
              </h2>
              <p className="text-body-lg max-w-2xl mx-auto">
                Choose from our thoughtfully designed indoor and outdoor spaces, each offering a unique ambiance for your celebration.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {eventVenues.map((venue, index) => (
              <ScrollReveal key={venue.id} delay={index * 0.15}>
                <Card className="overflow-hidden border-border/50 bg-card hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <LazyImage
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className={`mb-2 ${venue.type === 'indoor' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                        {venue.type === 'indoor' ? (
                          <><Building className="w-3 h-3 mr-1" /> Indoor</>
                        ) : (
                          <><TreePine className="w-3 h-3 mr-1" /> Outdoor</>
                        )}
                      </Badge>
                      <h3 className="text-2xl font-display text-white">{venue.name}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-foreground">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="font-semibold">Up to {venue.capacity} guests</span>
                      </div>
                      <Badge variant="outline" className="text-secondary border-secondary">
                        Starting ₹{venue.basePrice.toLocaleString()}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{venue.description}</p>
                    
                    <div className="mb-4">
                      <p className="font-medium text-foreground mb-2 text-sm">Ideal for:</p>
                      <div className="flex flex-wrap gap-2">
                        {venue.suitableFor.map((item, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-secondary/20 text-secondary border border-secondary/30">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full mb-3 border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary">
                          View Features
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md bg-card border-border">
                        <DialogHeader>
                          <DialogTitle className="font-display text-xl text-foreground">{venue.name}</DialogTitle>
                          <DialogDescription className="text-muted-foreground">
                            Capacity: Up to {venue.capacity} guests
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-3 py-4">
                          <p className="font-medium text-sm text-foreground">Included Features:</p>
                          {venue.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <Check className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      onClick={() => handleWhatsAppInquiry("event", venue.name)}
                      className="w-full btn-primary"
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
      <section className="section-padding bg-background-secondary">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-subtitle text-primary">
                  Customize Your Event
                </span>
              </div>
              <h2 className="text-display-lg mb-4">
                Optional Add-ons
              </h2>
              <p className="text-body-lg max-w-2xl mx-auto">
                Enhance your celebration with our curated services. Mix and match to create your perfect event.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-main">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-display-lg text-primary-foreground mb-6">
                Ready to Plan Your Event?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Let's bring your vision to life. Contact us to discuss your requirements, check availability, and get a customized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => handleWhatsAppInquiry("event")}
                  className="bg-background text-foreground hover:bg-background/90 text-lg px-8"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
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
