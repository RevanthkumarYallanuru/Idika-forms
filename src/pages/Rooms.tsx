import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Zap, Waves, ChefHat, UtensilsCrossed, Leaf, Music, Film, Gamepad2, Trophy } from "lucide-react";
import { Layout } from "@/components/Layout";
import { MemoizedRoomCard } from "@/components/RoomCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LazyImage, preloadImages } from "@/components/LazyImage";
import { Button } from "@/components/ui/button";
import { roomsPage, rooms as allRooms } from "@/data/siteData";
import type { Room } from "@/components/RoomCard";

const roomsHeroImage = "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865435/2_compressed_rtbpjc.jpg";

type RoomCategory = "all" | "Regular Dome" | "Large Dome";

const amenityIconMap: Record<string, React.ReactNode> = {
  Waves: <Waves className="w-12 h-12 text-primary" />,
  ChefHat: <ChefHat className="w-12 h-12 text-primary" />,
  UtensilsCrossed: <UtensilsCrossed className="w-12 h-12 text-primary" />,
  Leaf: <Leaf className="w-12 h-12 text-primary" />,
  Music: <Music className="w-12 h-12 text-primary" />,
  Film: <Film className="w-12 h-12 text-primary" />,
  Gamepad2: <Gamepad2 className="w-12 h-12 text-primary" />,
  Trophy: <Trophy className="w-12 h-12 text-primary" />,
};

const Rooms = () => {
  const [selectedCategory, setSelectedCategory] = useState<RoomCategory>("all");

  // Use useMemo instead of useEffect for filtering - more efficient and avoids stale state
  const filteredRooms = useMemo(() => {
    if (selectedCategory === "all") {
      return allRooms;
    }
    return allRooms.filter((room) => room.category === selectedCategory);
  }, [selectedCategory]);

  // Preload all room images on initial mount for smoother scrolling
  useEffect(() => {
    const allImageSrcs: string[] = [];
    allRooms.forEach(room => {
      // Preload first 3 images per room and YouTube thumbnails
      room.images.slice(0, 3).forEach(img => allImageSrcs.push(img.src));
      allImageSrcs.push(`https://img.youtube.com/vi/${room.youtubeVideoId}/hqdefault.jpg`);
    });
    preloadImages(allImageSrcs);
  }, []);

  const categories: { value: RoomCategory; label: string }[] = [
    { value: "all", label: "All Domes" },
    { value: "Regular Dome", label: "Regular Domes" },
    { value: "Large Dome", label: "Large Dome" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0">
          <LazyImage
            src={roomsHeroImage}
            alt="Rooms at Idika"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>

        <div className="relative z-10 container-main">
          <ScrollReveal>
            <div className="text-center mb-12">
              <motion.p
                className="text-subtitle text-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {roomsPage.hero.subtitle}
              </motion.p>
              <motion.h1
                className="text-display-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {roomsPage.hero.title}
              </motion.h1>
              <motion.p
                className="text-body-lg max-w-2xl mx-auto text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {roomsPage.hero.description}
              </motion.p>
            </div>
          </ScrollReveal>

          {/* Filter Section */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter size={18} />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    selectedCategory === category.value
                      ? "bg-secondary text-secondary-foreground shadow-lg"
                      : "bg-background-secondary text-foreground hover:bg-secondary/20 border border-border"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Info Banner */}
          <motion.div
            className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">
                  Direct Booking Available
                </p>
                <p>
                 Call/WhatsApp +91 7207357312 for Direct Bookings
                </p>
                <p className="text-sm text-muted-foreground">
                  
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rooms Grid - Single column for desktop (horizontal cards), responsive for mobile */}
      <section className="py-12 lg:py-16">
        <div className="container-main">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filteredRooms.map((room) => (
                <div key={room.id}>
                  <MemoizedRoomCard room={room} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredRooms.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-muted-foreground mb-4">
                No rooms found in this category.
              </p>
              <Button
                onClick={() => setSelectedCategory("all")}
                variant="outline"
              >
                View All Rooms
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Common Amenities Section */}
      <section className="py-16 lg:py-20 bg-background-secondary">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-subtitle text-primary mb-2">{roomsPage.commonAmenities.subtitle}</p>
              <h2 className="text-display-lg mb-4">{roomsPage.commonAmenities.title}</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roomsPage.commonAmenities.items.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{amenityIconMap[feature.icon] || <Zap className="w-12 h-12 text-primary" />}</div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="container-main">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-lg mb-6">Ready for Your Escape?</h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose your perfect room and begin your journey back to earth. Every dome is waiting to welcome you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => setSelectedCategory("all")}
                className="btn-primary"
              >
                Explore All Rooms
              </Button>
              <Button
                onClick={() =>
                  window.location.href =
                    "https://wa.me/917207357312?text=Hi%20Idika%21%20I'd%20like%20to%20know%20more%20about%20available%20rooms%20and%20dates."
                }
                variant="outline"
              >
                Contact Us on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Rooms;
