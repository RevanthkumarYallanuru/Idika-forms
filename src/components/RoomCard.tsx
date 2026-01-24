import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ArrowRight, MessageCircle, Maximize2, Volume2, VolumeX, User, Phone, MapPin as MapPinIcon, Users as UsersIcon, Calendar, Check, Eye, Plus, Minus } from "lucide-react";
import { LazyImage } from "./LazyImage";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
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
import { bookingAddOns, BookingAddOn } from "@/data/siteData";
import {
  Sun,
  Thermometer,
  Bed,
  Waves,
  UtensilsCrossed,
  Trees,
  Mountain,
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
  Coffee,
  Droplet,
  Shirt,
  Lightbulb,
  Clock,
  LogIn,
  LogOut,
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

export interface Room {
  id: number;
  name: string;
  category: string;
  description: string;
  fullDescription?: string;
  images: RoomImage[];
  youtubeVideoId: string;
  amenities: Amenity[];
  maxGuests: number;
  baseGuests: number;
  basePrice: number;
  extraGuestCharge: number;
  gstPercentage: number;
  roomType: "regular" | "large";
  highlights?: string[];
  checkInTime?: string;
  checkOutTime?: string;
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
  Coffee: <Coffee className="w-5 h-5" />,
  Droplet: <Droplet className="w-5 h-5" />,
  Shirt: <Shirt className="w-5 h-5" />,
  Lightbulb: <Lightbulb className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  LogIn: <LogIn className="w-5 h-5" />,
  LogOut: <LogOut className="w-5 h-5" />,
};

// Helper function to calculate room price based on guest count
const calculateRoomPrice = (room: Room, guestCount: number) => {
  const extraGuests = Math.max(0, guestCount - room.baseGuests);
  return room.basePrice + (extraGuests * room.extraGuestCharge);
};

interface RoomCardProps {
  room: Room;
}

export const RoomCard = ({ room }: RoomCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [selectedGuestCount, setSelectedGuestCount] = useState(room.baseGuests);
  const [isInView, setIsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [viewingAddOn, setViewingAddOn] = useState<BookingAddOn | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Booking form state
  const [bookingForm, setBookingForm] = useState({
    guestName: "",
    mobileNumber: "",
    arrivingFrom: "",
    numberOfGuests: String(room.baseGuests),
    checkInDate: "",
    checkOutDate: "",
  });

  // Generate guest count options based on room type
  const guestOptions = useMemo(() => {
    const options = [];
    for (let i = room.baseGuests; i <= room.maxGuests; i++) {
      options.push(i);
    }
    return options;
  }, [room.baseGuests, room.maxGuests]);

  const currentPrice = useMemo(() => {
    const base = calculateRoomPrice(room, selectedGuestCount);
    const gst = base * (room.gstPercentage / 100);
    return { base, gst, total: base + gst };
  }, [selectedGuestCount, room]);

  // Calculate add-ons total
  const addOnsTotal = useMemo(() => {
    return selectedAddOns.reduce((total, addOnId) => {
      const addOn = bookingAddOns.find(a => a.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);
  }, [selectedAddOns]);

  // Intersection Observer for auto-play video when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Play video when element is intersecting with the viewport
          // Using a lower threshold for mobile to trigger earlier
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.25],
        rootMargin: "-5% 0px -5% 0px" // Trigger when 5% from edges
      }
    );

    // Observe the video container if available, otherwise the card
    const elementToObserve = videoContainerRef.current || cardRef.current;
    if (elementToObserve) {
      observer.observe(elementToObserve);
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
      setSelectedGuestCount(parseInt(value) || room.baseGuests);
    }
  };

  // Toggle add-on selection
  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
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
    const guests = parseInt(bookingForm.numberOfGuests) || room.baseGuests;
    const roomBase = calculateRoomPrice(room, guests);
    const nights = calculateNights();
    const totalRoomPrice = roomBase * nights;
    const addOnsPrice = addOnsTotal;
    const subtotal = totalRoomPrice + addOnsPrice;
    const gst = subtotal * (room.gstPercentage / 100);
    const extraGuests = Math.max(0, guests - room.baseGuests);
    const extraGuestTotal = extraGuests * room.extraGuestCharge * nights;
    return { 
      roomBase, 
      nights, 
      totalRoomPrice, 
      addOnsPrice,
      subtotal,
      gst, 
      total: subtotal + gst,
      extraGuests,
      extraGuestTotal
    };
  }, [bookingForm.numberOfGuests, bookingForm.checkInDate, bookingForm.checkOutDate, room, addOnsTotal]);

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

    // Build add-ons list for message
    const selectedAddOnsList = selectedAddOns
      .map(id => bookingAddOns.find(a => a.id === id))
      .filter(Boolean)
      .map(addon => `  • ${addon!.name} - ₹${addon!.price.toLocaleString("en-IN")}`)
      .join('\n');

    const addOnsSection = selectedAddOns.length > 0 
      ? `\n*ADD-ONS SELECTED*\n${selectedAddOnsList}\nAdd-ons Total: ₹${bookingPrice.addOnsPrice.toLocaleString("en-IN")}\n` 
      : '';

    const extraGuestSection = bookingPrice.extraGuests > 0 
      ? `Extra Guests (${bookingPrice.extraGuests}): ₹${bookingPrice.extraGuestTotal.toLocaleString("en-IN")}\n` 
      : '';

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
${addOnsSection}
*PRICING BREAKDOWN*
Base Price (${room.baseGuests} guests): ₹${room.basePrice.toLocaleString("en-IN")}/night
${extraGuestSection}Room Total: ₹${bookingPrice.totalRoomPrice.toLocaleString("en-IN")}
${bookingPrice.addOnsPrice > 0 ? `Add-ons: ₹${bookingPrice.addOnsPrice.toLocaleString("en-IN")}\n` : ''}Subtotal: ₹${bookingPrice.subtotal.toLocaleString("en-IN")}
GST (${room.gstPercentage}%): ₹${Math.round(bookingPrice.gst).toLocaleString("en-IN")}
*TOTAL: ₹${Math.round(bookingPrice.total).toLocaleString("en-IN")}*

Please confirm availability. Thank you!`;

    const whatsappLink = `https://wa.me/917207357312?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
    setIsBookingModalOpen(false);
    setSelectedAddOns([]);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const displayImages = room.images.slice(0, 5);

  // YouTube embed URL with autoplay (muted for browser compliance on mobile)
  // Using youtube-nocookie.com for privacy-enhanced mode (reduces tracking warnings)
  // Note: autoplay requires mute=1 on mobile browsers due to browser policies
  const youtubeEmbedUrl = useMemo(() => {
    const baseUrl = `https://www.youtube-nocookie.com/embed/${room.youtubeVideoId}`;
    const params = new URLSearchParams({
      autoplay: '1',
      mute: isMuted ? '1' : '0',
      loop: '1',
      playlist: room.youtubeVideoId,
      controls: '0',
      showinfo: '0',
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
      enablejsapi: '1',
      iv_load_policy: '3', // Hide video annotations
      fs: '0', // Disable fullscreen button
    });
    if (typeof window !== 'undefined') {
      params.set('origin', window.location.origin);
    }
    return `${baseUrl}?${params.toString()}`;
  }, [room.youtubeVideoId, isMuted]);

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
                      referrerPolicy="strict-origin-when-cross-origin"
                      loading="lazy"
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
              <div className="grid grid-cols-2 gap-4 mb-4">
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

              {/* View All Amenities Button */}
              <button
                onClick={() => setIsAmenitiesModalOpen(true)}
                className="text-sm text-primary hover:text-primary/80 font-medium mb-4 flex items-center gap-1 w-fit"
              >
                <Eye className="w-4 h-4" />
                View All Amenities
              </button>

              {/* Check-in / Check-out Times */}
              {(room.checkInTime || room.checkOutTime) && (
                <div className="flex items-center gap-4 mb-4 text-sm">
                  {room.checkInTime && (
                    <div className="flex items-center gap-2">
                      <LogIn className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Check-in:</span>
                      <span className="font-medium text-foreground">{room.checkInTime}</span>
                    </div>
                  )}
                  {room.checkOutTime && (
                    <div className="flex items-center gap-2">
                      <LogOut className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Check-out:</span>
                      <span className="font-medium text-foreground">{room.checkOutTime}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Pricing Section */}
              <div className="mb-4 py-4 border-t border-border">
                <div className="mb-3">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    {room.roomType === "large" ? `Up to ${room.baseGuests} Guests` : `${room.baseGuests} Guests`}
                  </p>
                  <p className="text-2xl font-display">
                    <span className="text-secondary">₹{room.basePrice.toLocaleString("en-IN")}</span>
                    <span className="text-sm text-muted-foreground">/night</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Plus className="w-4 h-4" />
                  <span>₹{room.extraGuestCharge.toLocaleString("en-IN")} per extra guest</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Max {room.maxGuests} guests • +{room.gstPercentage}% GST
                </p>
              </div>

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
          <div ref={videoContainerRef} className="relative aspect-video group bg-black">
            {isInView ? (
              <>
                {/* YouTube Video - Autoplay when in view */}
                <iframe
                  src={youtubeEmbedUrl}
                  title={room.name}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="lazy"
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
            <div className="mb-4">
              <p className={`text-sm text-muted-foreground ${isDescriptionExpanded ? '' : 'line-clamp-2'}`}>
                {room.fullDescription || room.description}
              </p>
              {(room.fullDescription || room.description).length > 100 && (
                <button
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                  className="text-xs text-primary font-medium mt-1 hover:text-primary/80"
                >
                  {isDescriptionExpanded ? 'Show Less' : 'Read More'}
                </button>
              )}
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              {room.amenities.slice(0, 4).map((amenity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 bg-background-secondary rounded-lg text-xs"
                >
                  <div className="text-secondary flex-shrink-0">
                    {iconMap[amenity.icon] || <Cloud className="w-4 h-4" />}
                  </div>
                  <span className="text-muted-foreground">
                    {amenity.title}
                  </span>
                </div>
              ))}
            </div>

            {/* View All Amenities Button - Mobile */}
            <button
              onClick={() => setIsAmenitiesModalOpen(true)}
              className="text-sm text-primary hover:text-primary/80 font-medium mb-4 flex items-center gap-1"
            >
              <Eye className="w-4 h-4" />
              View All Amenities
            </button>

            {/* Check-in / Check-out Times - Mobile */}
            {(room.checkInTime || room.checkOutTime) && (
              <div className="flex items-center gap-4 mb-4 text-sm">
                {room.checkInTime && (
                  <div className="flex items-center gap-2">
                    <LogIn className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Check-in:</span>
                    <span className="font-medium text-foreground">{room.checkInTime}</span>
                  </div>
                )}
                {room.checkOutTime && (
                  <div className="flex items-center gap-2">
                    <LogOut className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Check-out:</span>
                    <span className="font-medium text-foreground">{room.checkOutTime}</span>
                  </div>
                )}
              </div>
            )}

            {/* Guest Selector */}
            <div className="mb-4">
              <label className="text-sm font-medium text-foreground mb-2 block">
                Select Guests (Max {room.maxGuests})
              </label>
              <div className="flex flex-wrap gap-2">
                {guestOptions.map((guests) => (
                  <motion.button
                    key={guests}
                    onClick={() => setSelectedGuestCount(guests)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
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
                <span className="text-sm text-muted-foreground">
                  Base ({room.baseGuests} guests):
                </span>
                <span className="font-semibold text-foreground">
                  ₹{room.basePrice.toLocaleString("en-IN")}
                </span>
              </div>
              {selectedGuestCount > room.baseGuests && (
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Extra ({selectedGuestCount - room.baseGuests} guests):
                  </span>
                  <span className="font-semibold text-foreground">
                    +₹{((selectedGuestCount - room.baseGuests) * room.extraGuestCharge).toLocaleString("en-IN")}
                  </span>
                </div>
              )}
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
        <DialogContent className="max-w-lg w-[96vw] sm:w-[90vw] max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col p-0">
          {/* Close Button - Fixed Position for Mobile */}
          <button
            onClick={() => setIsBookingModalOpen(false)}
            className="absolute right-3 top-3 sm:right-4 sm:top-4 z-20 rounded-full p-1.5 sm:p-2 bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <DialogHeader className="px-4 pt-4 pb-2 sm:px-6 sm:pt-6 pr-12 sm:pr-14 border-b border-border sticky top-0 bg-background z-10">
            <DialogTitle className="text-lg sm:text-xl font-display flex items-center gap-2">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              Book {room.name}
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm">
              Fill in your details and we'll send your booking request via WhatsApp
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="space-y-3 sm:space-y-4 py-3 sm:py-4">
              {/* Guest Name */}
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="guestName" className="flex items-center gap-2 text-sm">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                  Guest Name *
                </Label>
                <Input
                  id="guestName"
                  placeholder="Enter your full name"
                  value={bookingForm.guestName}
                  onChange={(e) => handleBookingFormChange("guestName", e.target.value)}
                  className="w-full h-10 sm:h-11 text-base"
                />
              </div>

              {/* Mobile Number */}
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="mobileNumber" className="flex items-center gap-2 text-sm">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                  Mobile Number *
                </Label>
                <Input
                  id="mobileNumber"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={bookingForm.mobileNumber}
                  onChange={(e) => handleBookingFormChange("mobileNumber", e.target.value)}
                  className="w-full h-10 sm:h-11 text-base"
                />
              </div>

              {/* Arriving From */}
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="arrivingFrom" className="flex items-center gap-2 text-sm">
                  <MapPinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                  Arriving From
                </Label>
                <Input
                  id="arrivingFrom"
                  placeholder="City / Location"
                  value={bookingForm.arrivingFrom}
                  onChange={(e) => handleBookingFormChange("arrivingFrom", e.target.value)}
                  className="w-full h-10 sm:h-11 text-base"
                />
              </div>

              {/* Number of Guests */}
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="numberOfGuests" className="flex items-center gap-2 text-sm">
                  <UsersIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                  Number of Guests *
                </Label>
                <Select
                  value={bookingForm.numberOfGuests}
                  onValueChange={(value) => handleBookingFormChange("numberOfGuests", value)}
                >
                  <SelectTrigger id="numberOfGuests" className="w-full h-10 sm:h-11 text-base">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {guestOptions.map((guests) => {
                      const price = calculateRoomPrice(room, guests);
                      return (
                        <SelectItem key={guests} value={String(guests)} className="text-sm sm:text-base">
                          {guests} Guests - ₹{price.toLocaleString("en-IN")}/night
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              {/* Check-in/Check-out Dates */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="checkInDate" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                    Check-in *
                  </Label>
                  <Input
                    id="checkInDate"
                    type="date"
                    value={bookingForm.checkInDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => handleBookingFormChange("checkInDate", e.target.value)}
                    className="w-full h-10 sm:h-11 text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="checkOutDate" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                    Check-out *
                  </Label>
                  <Input
                    id="checkOutDate"
                    type="date"
                    value={bookingForm.checkOutDate}
                    min={bookingForm.checkInDate || new Date().toISOString().split('T')[0]}
                    onChange={(e) => handleBookingFormChange("checkOutDate", e.target.value)}
                    className="w-full h-10 sm:h-11 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Add-Ons Section */}
              <div className="space-y-2 sm:space-y-3">
                <Label className="flex items-center gap-2 text-sm">
                  <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                  Add-Ons (Optional)
                </Label>
                <div className="space-y-2">
                  {bookingAddOns.map((addOn) => (
                    <div
                      key={addOn.id}
                      className={`p-2.5 sm:p-3 rounded-lg border transition-all duration-200 ${
                        selectedAddOns.includes(addOn.id)
                          ? "border-primary bg-primary/5"
                          : "border-border bg-background-secondary"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                          <button
                            type="button"
                            onClick={() => toggleAddOn(addOn.id)}
                            className={`w-5 h-5 flex-shrink-0 rounded border-2 flex items-center justify-center transition-all ${
                              selectedAddOns.includes(addOn.id)
                                ? "bg-primary border-primary"
                                : "border-muted-foreground"
                            }`}
                          >
                            {selectedAddOns.includes(addOn.id) && (
                              <Check className="w-3 h-3 text-primary-foreground" />
                            )}
                          </button>
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-lg sm:text-xl flex-shrink-0">{addOn.icon}</span>
                            <span className="font-medium text-xs sm:text-sm truncate">{addOn.name}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                          <span className="font-semibold text-secondary text-xs sm:text-sm whitespace-nowrap">
                            ₹{addOn.price.toLocaleString("en-IN")}
                          </span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="h-7 w-7 sm:h-8 sm:w-8 p-0"
                            onClick={() => setViewingAddOn(addOn)}
                          >
                            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Summary */}
              <div className="bg-background-secondary p-3 sm:p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">Pricing Summary</h4>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Base ({room.baseGuests} guests):
                    </span>
                    <span className="font-medium">₹{room.basePrice.toLocaleString("en-IN")}/night</span>
                  </div>
                  {bookingPrice.extraGuests > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Extra guests ({bookingPrice.extraGuests}):
                      </span>
                      <span className="font-medium">
                        +₹{(bookingPrice.extraGuests * room.extraGuestCharge).toLocaleString("en-IN")}/night
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Number of nights:</span>
                    <span className="font-medium">{bookingPrice.nights}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Room Total:</span>
                    <span className="font-medium">₹{bookingPrice.totalRoomPrice.toLocaleString("en-IN")}</span>
                  </div>
                  {bookingPrice.addOnsPrice > 0 && (
                    <div className="flex justify-between text-primary">
                      <span>Add-ons:</span>
                      <span className="font-medium">+₹{bookingPrice.addOnsPrice.toLocaleString("en-IN")}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t border-border pt-1.5 sm:pt-2">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="font-medium">₹{bookingPrice.subtotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">GST ({room.gstPercentage}%):</span>
                    <span className="font-medium">₹{Math.round(bookingPrice.gst).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="border-t border-border pt-1.5 sm:pt-2 flex justify-between">
                    <span className="font-semibold text-foreground">Total Amount:</span>
                    <span className="text-base sm:text-lg font-display text-secondary">₹{Math.round(bookingPrice.total).toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button 
                  onClick={() => setIsBookingModalOpen(false)}
                  variant="outline"
                  className="w-full sm:w-auto sm:flex-1 h-10 sm:h-12 text-sm sm:text-base order-2 sm:order-1"
                  size="lg"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleWhatsAppBooking}
                  className="w-full sm:flex-[2] btn-primary h-11 sm:h-12 text-sm sm:text-base order-1 sm:order-2"
                  size="lg"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send via WhatsApp
                </Button>
              </div>

              <p className="text-[10px] sm:text-xs text-muted-foreground text-center">
                By clicking above, your booking details will be sent to our WhatsApp for confirmation.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add-On Features Bottom Sheet / Modal */}
      <Drawer open={!!viewingAddOn} onOpenChange={(open) => !open && setViewingAddOn(null)}>
        <DrawerContent className="max-h-[80vh]">
          <DrawerHeader>
            <DrawerTitle className="flex items-center gap-2">
              <span className="text-2xl">{viewingAddOn?.icon}</span>
              {viewingAddOn?.name}
            </DrawerTitle>
            <DrawerDescription>
              ₹{viewingAddOn?.price.toLocaleString("en-IN")} per booking
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-6">
            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
              What's Included
            </h4>
            <ul className="space-y-2">
              {viewingAddOn?.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setViewingAddOn(null)}
              >
                Close
              </Button>
              <Button
                className="flex-1"
                onClick={() => {
                  if (viewingAddOn && !selectedAddOns.includes(viewingAddOn.id)) {
                    toggleAddOn(viewingAddOn.id);
                  }
                  setViewingAddOn(null);
                }}
              >
                {viewingAddOn && selectedAddOns.includes(viewingAddOn.id) ? "Already Added" : "Add to Booking"}
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

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

      {/* Amenities Modal */}
      <Dialog open={isAmenitiesModalOpen} onOpenChange={setIsAmenitiesModalOpen}>
        <DialogContent className="max-w-md w-[95vw] sm:max-w-lg max-h-[85vh] overflow-hidden flex flex-col">
          <DialogHeader className="pb-4 border-b border-border">
            <DialogTitle className="text-xl font-display flex items-center gap-2">
              <Home className="w-5 h-5 text-primary" />
              {room.name} - Amenities
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              All amenities included with your stay
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-y-auto flex-1 py-4">
            {/* Check-in / Check-out Times */}
            {(room.checkInTime || room.checkOutTime) && (
              <div className="mb-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Timings
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {room.checkInTime && (
                    <div className="flex items-center gap-2">
                      <LogIn className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Check-in</p>
                        <p className="font-medium text-foreground">{room.checkInTime}</p>
                      </div>
                    </div>
                  )}
                  {room.checkOutTime && (
                    <div className="flex items-center gap-2">
                      <LogOut className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Check-out</p>
                        <p className="font-medium text-foreground">{room.checkOutTime}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 gap-3">
              {room.amenities.map((amenity, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-3 bg-background-secondary rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="text-primary">
                      {iconMap[amenity.icon] || <Check className="w-5 h-5" />}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{amenity.title}</h4>
                    {amenity.description && (
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {amenity.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4 border-t border-border">
            <Button
              onClick={() => setIsAmenitiesModalOpen(false)}
              className="w-full"
              variant="outline"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
