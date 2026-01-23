import { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ArrowRight, MessageCircle, Maximize2, Volume2, VolumeX, User, Phone, MapPin as MapPinIcon, Users as UsersIcon, Calendar } from "lucide-react";
import { LazyImage } from "./LazyImage";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sun,
  Thermometer,
  Bed,
  Waves,
  UtensilsCrossed,
  Trees,
  Mountain,
  Eye,
  Wind,
  Moon,
  Heart,
  Smile,
  Flower2,
  Music,
  Users,
  Home,
  Bath,
  Zap,
  MapPin,
  Flame,
  Leaf,
  Cloud,
} from "lucide-react";

interface RoomImage {
  src: string;
  alt: string;
}

interface Amenity {
  icon: string;
  title: string;
  description?: string;
}

interface Room {
  id: number;
  name: string;
  category: string;
  description: string;
  fullDescription?: string;
  images: RoomImage[];
  youtubeVideoId: string;
  amenities: Amenity[];
  maxGuests: number;
  pricing: Record<number, number>;
  gstPercentage: number;
  highlights?: string[];
}

const iconMap: Record<string, React.ReactNode> = {
  Sun: <Sun className="w-5 h-5" />,
  Thermometer: <Thermometer className="w-5 h-5" />,
  Bed: <Bed className="w-5 h-5" />,
  Waves: <Waves className="w-5 h-5" />,
  UtensilsCrossed: <UtensilsCrossed className="w-5 h-5" />,
  Trees: <Trees className="w-5 h-5" />,
  Wind: <Wind className="w-5 h-5" />,
  Droplets: <Waves className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  Music: <Music className="w-5 h-5" />,
  Mountain: <Mountain className="w-5 h-5" />,
  Eye: <Eye className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  Moon: <Moon className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Smile: <Smile className="w-5 h-5" />,
  Flower2: <Flower2 className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
  Bath: <Bath className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
};

interface RoomCardProps {
  room: Room;
}

export const RoomCard = ({ room }: RoomCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedGuestCount, setSelectedGuestCount] = useState(2);
  const [isInView, setIsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  // Booking form state
  const [bookingForm, setBookingForm] = useState({
    guestName: "",
    mobileNumber: "",
    arrivingFrom: "",
    numberOfGuests: "2",
    checkInDate: "",
    checkOutDate: "",
  });

  const pricing = useMemo(() => ({
    2: room.pricing[2] || 4000,
    3: room.pricing[3] || 5000,
    4: room.pricing[4] || 7000,
    5: room.pricing[5] || 9000,
  }), [room.pricing]);

  const currentPrice = useMemo(() => {
    const base = pricing[selectedGuestCount as keyof typeof pricing] || pricing[2];
    const gst = base * (room.gstPercentage / 100);
    return { base, gst, total: base + gst };
  }, [pricing, selectedGuestCount, room.gstPercentage]);

  // Intersection Observer for auto-play video when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only play video when more than 50% of card is visible
          setIsInView(entry.isIntersecting && entry.intersectionRatio > 0.5);
        });
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? Math.min(room.images.length, 5) - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === Math.min(room.images.length, 5) - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsImageModalOpen(true);
  };

  const openBookingForm = () => {
    setIsBookingModalOpen(true);
  };

  const handleBookingFormChange = (field: string, value: string) => {
    setBookingForm(prev => ({ ...prev, [field]: value }));
    // Update guest count for pricing calculation
    if (field === "numberOfGuests") {
      setSelectedGuestCount(parseInt(value) || 2);
    }
  };

  const calculateNights = () => {
    if (bookingForm.checkInDate && bookingForm.checkOutDate) {
      const checkIn = new Date(bookingForm.checkInDate);
      const checkOut = new Date(bookingForm.checkOutDate);
      const diffTime = checkOut.getTime() - checkIn.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    }
    return 1;
  };

  const bookingPrice = useMemo(() => {
    const guests = parseInt(bookingForm.numberOfGuests) || 2;
    const base = pricing[guests as keyof typeof pricing] || pricing[2];
    const nights = calculateNights();
    const totalBase = base * nights;
    const gst = totalBase * (room.gstPercentage / 100);
    return { base, nights, totalBase, gst, total: totalBase + gst };
  }, [bookingForm.numberOfGuests, bookingForm.checkInDate, bookingForm.checkOutDate, pricing, room.gstPercentage]);

  const handleWhatsAppBooking = () => {
    // Validate form
    if (!bookingForm.guestName || !bookingForm.mobileNumber || !bookingForm.checkInDate || !bookingForm.checkOutDate) {
      alert("Please fill all required fields");
      return;
    }

    const checkInFormatted = new Date(bookingForm.checkInDate).toLocaleDateString("en-IN", { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
    const checkOutFormatted = new Date(bookingForm.checkOutDate).toLocaleDateString("en-IN", { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });

    const message = `Hi Idika Team! 🌿

I would like to make a booking:

*ROOM:* ${room.name}
*CATEGORY:* ${room.category}

*GUEST DETAILS*
Name: ${bookingForm.guestName}
Mobile: ${bookingForm.mobileNumber}
Arriving From: ${bookingForm.arrivingFrom || "Not specified"}
No. of Guests: ${bookingForm.numberOfGuests}

*STAY DATES*
Check-in: ${checkInFormatted}
Check-out: ${checkOutFormatted}
Nights: ${bookingPrice.nights}

*PRICING*
₹${bookingPrice.base.toLocaleString("en-IN")} × ${bookingPrice.nights} night(s) = ₹${bookingPrice.totalBase.toLocaleString("en-IN")}
GST (${room.gstPercentage}%): ₹${Math.round(bookingPrice.gst).toLocaleString("en-IN")}
*Total: ₹${Math.round(bookingPrice.total).toLocaleString("en-IN")}*

Please confirm availability. Thank you!`;

    const whatsappLink = `https://wa.me/917207357312?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
    setIsBookingModalOpen(false);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const displayImages = room.images.slice(0, 5);

  // YouTube embed URL with autoplay (muted for browser compliance)
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${room.youtubeVideoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${room.youtubeVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

  return (
    <>
      <div ref={cardRef}>
        {/* Desktop Layout - Horizontal */}
        <div className="hidden lg:block bg-card rounded-2xl overflow-hidden border border-border/50">
          <div className="flex">
            {/* Left Side - Video/Image Gallery */}
            <div className="w-[55%] p-4 flex flex-col gap-3">
              {/* Main Video/Image Area */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden group bg-black">
                {isInView ? (
                  <>
                    {/* YouTube Video - Autoplay when in view */}
                    <iframe
                      src={youtubeEmbedUrl}
                      title={room.name}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    {/* Mute/Unmute Button */}
                    <button
                      onClick={toggleMute}
                      className="absolute bottom-3 right-3 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-300"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                  </>
                ) : (
                  <>
                    {/* Fallback Image when not in view */}
                    <LazyImage
                      src={displayImages[0]?.src || ""}
                      alt={displayImages[0]?.alt || room.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="text-white text-sm">Scroll to play video</div>
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Grid - 5 images in a row (clickable for fullscreen) */}
              <div className="grid grid-cols-5 gap-2">
                {displayImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={handleImageClick}
                    onMouseEnter={() => setCurrentImageIndex(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 group/thumb ${
                      currentImageIndex === index
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-card"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <LazyImage
                      src={image.src}
                      alt={image.alt || `${room.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Fullscreen icon on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <Maximize2 className="w-4 h-4 text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Room Info */}
            <div className="w-[45%] p-6 pl-4 flex flex-col relative">
              {/* Category Badge */}
              <span className="inline-block w-fit text-xs font-semibold tracking-widest text-primary uppercase mb-4">
                {room.category}
              </span>

              {/* Room Name - Split into two lines */}
              <h3 className="text-4xl font-display text-foreground mb-6 leading-tight">
                {room.name.includes(' ') ? (
                  <>
                    {room.name.split(' ').slice(0, 2).join(' ')}
                    <br />
                    {room.name.split(' ').slice(2).join(' ')}
                  </>
                ) : room.name}
              </h3>

              {/* Amenities - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {room.amenities.slice(0, 4).map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="text-secondary">
                      {iconMap[amenity.icon] || <Sun className="w-5 h-5" />}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {amenity.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pricing Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-4 py-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">2 Guests</p>
                  <p className="text-lg font-display">
                    <span className="text-secondary">₹{pricing[2].toLocaleString("en-IN")}</span>
                    <span className="text-sm text-muted-foreground">/night</span>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">3 Guests</p>
                  <p className="text-lg font-display">
                    <span className="text-secondary">₹{pricing[3].toLocaleString("en-IN")}</span>
                    <span className="text-sm text-muted-foreground">/night</span>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">4 Guests</p>
                  <p className="text-lg font-display">
                    <span className="text-secondary">₹{pricing[4].toLocaleString("en-IN")}</span>
                    <span className="text-sm text-muted-foreground">/night</span>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">5 Guests (Max)</p>
                  <p className="text-lg font-display">
                    <span className="text-secondary">₹{pricing[5].toLocaleString("en-IN")}</span>
                    <span className="text-sm text-muted-foreground">/night</span>
                  </p>
                </div>
              </div>

              {/* GST Note */}
              <p className="text-xs text-muted-foreground mb-6">
                +18% GST applicable at checkout
              </p>

              {/* Book Now Button */}
              <motion.button
                onClick={openBookingForm}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-6 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 mt-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                RESERVE YOUR STAY
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {/* Side Dots Navigation */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                {displayImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`w-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index
                        ? "bg-primary h-6"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50 h-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Vertical Card */}
        <motion.div 
          className="lg:hidden bg-card border border-border rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Video/Image Area */}
          <div className="relative aspect-video group bg-black">
            {isInView ? (
              <>
                {/* YouTube Video - Autoplay when in view */}
                <iframe
                  src={youtubeEmbedUrl}
                  title={room.name}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* Mute/Unmute Button */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-2 right-2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-300"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </>
            ) : (
              <>
                <LazyImage
                  src={displayImages[currentImageIndex]?.src || ""}
                  alt={displayImages[currentImageIndex]?.alt || room.name}
                  className="w-full h-full object-cover"
                />
                {/* Navigation */}
                <button
                  onClick={handlePreviousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                {/* Image Counter */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white px-2 py-0.5 rounded-full text-xs">
                  {currentImageIndex + 1} / {displayImages.length}
                </div>
              </>
            )}
          </div>

          {/* Image Thumbnails - Clickable for fullscreen */}
          <div className="grid grid-cols-5 gap-1 p-2 bg-background-secondary">
            {displayImages.map((image, index) => (
              <button
                key={index}
                onClick={handleImageClick}
                onTouchStart={() => setCurrentImageIndex(index)}
                className={`relative aspect-square rounded overflow-hidden ${
                  currentImageIndex === index ? "ring-2 ring-primary" : "opacity-70"
                }`}
              >
                <LazyImage
                  src={image.src}
                  alt={image.alt || `${room.name} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 active:bg-black/40 flex items-center justify-center">
                  <Maximize2 className="w-3 h-3 text-white opacity-0 active:opacity-100" />
                </div>
              </button>
            ))}
          </div>

          {/* Room Info Section */}
          <div className="flex flex-col p-5">
            {/* Category Badge */}
            <span className="inline-block w-fit text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
              {room.category}
            </span>

            {/* Title and Description */}
            <h3 className="text-xl font-display text-foreground mb-2">
              {room.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {room.description}
            </p>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {room.amenities.slice(0, 4).map((amenity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 bg-background-secondary rounded-lg text-xs"
                >
                  <div className="text-secondary flex-shrink-0">
                    {iconMap[amenity.icon] || <Cloud className="w-4 h-4" />}
                  </div>
                  <span className="text-muted-foreground truncate">
                    {amenity.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Guest Selector */}
            <div className="mb-4">
              <label className="text-sm font-medium text-foreground mb-2 block">
                Select Guests
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[2, 3, 4, 5].map((guests) => (
                  <motion.button
                    key={guests}
                    onClick={() => setSelectedGuestCount(guests)}
                    className={`py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                      selectedGuestCount === guests
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-background-secondary text-foreground hover:bg-secondary/20"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {guests}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-background-secondary p-4 rounded-lg mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Base Price:</span>
                <span className="font-semibold text-foreground">
                  ₹{currentPrice.base.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  GST ({room.gstPercentage}%):
                </span>
                <span className="font-semibold text-foreground">
                  ₹{Math.round(currentPrice.gst).toLocaleString("en-IN")}
                </span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between items-center">
                <span className="font-semibold text-foreground">Total:</span>
                <span className="text-xl font-display text-secondary">
                  ₹{Math.round(currentPrice.total).toLocaleString("en-IN")}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 text-right">
                per night
              </p>
            </div>

            {/* Book Now Button */}
            <motion.button
              onClick={openBookingForm}
              className="w-full btn-primary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={18} />
              Book via WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Booking Form Modal */}
      <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
        <DialogContent className="max-w-md w-[95vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-display flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              Book {room.name}
            </DialogTitle>
            <DialogDescription>
              Fill in your details and we'll send your booking request via WhatsApp
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            {/* Guest Name */}
            <div className="space-y-2">
              <Label htmlFor="guestName" className="flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                Guest Name *
              </Label>
              <Input
                id="guestName"
                placeholder="Enter your full name"
                value={bookingForm.guestName}
                onChange={(e) => handleBookingFormChange("guestName", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <Label htmlFor="mobileNumber" className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                Mobile Number *
              </Label>
              <Input
                id="mobileNumber"
                type="tel"
                placeholder="+91 98765 43210"
                value={bookingForm.mobileNumber}
                onChange={(e) => handleBookingFormChange("mobileNumber", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Arriving From */}
            <div className="space-y-2">
              <Label htmlFor="arrivingFrom" className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-muted-foreground" />
                Arriving From
              </Label>
              <Input
                id="arrivingFrom"
                placeholder="City / Location"
                value={bookingForm.arrivingFrom}
                onChange={(e) => handleBookingFormChange("arrivingFrom", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Number of Guests */}
            <div className="space-y-2">
              <Label htmlFor="numberOfGuests" className="flex items-center gap-2">
                <UsersIcon className="w-4 h-4 text-muted-foreground" />
                Number of Guests *
              </Label>
              <Select
                value={bookingForm.numberOfGuests}
                onValueChange={(value) => handleBookingFormChange("numberOfGuests", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 Guests - ₹{pricing[2].toLocaleString("en-IN")}/night</SelectItem>
                  <SelectItem value="3">3 Guests - ₹{pricing[3].toLocaleString("en-IN")}/night</SelectItem>
                  <SelectItem value="4">4 Guests - ₹{pricing[4].toLocaleString("en-IN")}/night</SelectItem>
                  <SelectItem value="5">5 Guests - ₹{pricing[5].toLocaleString("en-IN")}/night</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Check-in Date */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="checkInDate" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  Check-in *
                </Label>
                <Input
                  id="checkInDate"
                  type="date"
                  value={bookingForm.checkInDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => handleBookingFormChange("checkInDate", e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Check-out Date */}
              <div className="space-y-2">
                <Label htmlFor="checkOutDate" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  Check-out *
                </Label>
                <Input
                  id="checkOutDate"
                  type="date"
                  value={bookingForm.checkOutDate}
                  min={bookingForm.checkInDate || new Date().toISOString().split('T')[0]}
                  onChange={(e) => handleBookingFormChange("checkOutDate", e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="bg-background-secondary p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-foreground mb-3">Pricing Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rate per night:</span>
                  <span className="font-medium">₹{bookingPrice.base.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Number of nights:</span>
                  <span className="font-medium">{bookingPrice.nights}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="font-medium">₹{bookingPrice.totalBase.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST ({room.gstPercentage}%):</span>
                  <span className="font-medium">₹{Math.round(bookingPrice.gst).toLocaleString("en-IN")}</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between">
                  <span className="font-semibold text-foreground">Total Amount:</span>
                  <span className="text-lg font-display text-secondary">₹{Math.round(bookingPrice.total).toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              onClick={handleWhatsAppBooking}
              className="w-full btn-primary mt-4"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Send Booking Request via WhatsApp
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By clicking above, your booking details will be sent to our WhatsApp for confirmation.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Fullscreen Image Gallery Modal */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 bg-black/95 border-none">
          <DialogHeader className="sr-only">
            <DialogTitle>{room.name} Gallery</DialogTitle>
            <DialogDescription>View room images in fullscreen</DialogDescription>
          </DialogHeader>
          
          {/* Close Button */}
          <button
            onClick={() => setIsImageModalOpen(false)}
            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <motion.img
              key={currentImageIndex}
              src={displayImages[currentImageIndex]?.src || ""}
              alt={displayImages[currentImageIndex]?.alt || room.name}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Navigation Arrows */}
            <button
              onClick={handlePreviousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {displayImages.length}
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {displayImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                    currentImageIndex === index
                      ? "ring-2 ring-white scale-110"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt || `${room.name} - Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
