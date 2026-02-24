// Idika - Centralized Data Management
// All site content, navigation, SEO metadata, images, and configuration

export const siteConfig = {
  name: "Idika",
  tagline: "Earth's Essence, Your Escape",
  description: "An eco-friendly earthbag dome homestay near Hyderabad. Experience sustainable luxury in harmony with nature.",
  url: "https://idika.in",
  email: "hello@idika.in",
  phone: "+91 72073 57312",
  address: {
    line1: "Idika Earthbag Retreat",
    line2: "Near Ananthagiri Hills",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    pincode: "501512"
  },
  social: {
    instagram: "https://instagram.com/idika.retreat",
    facebook: "https://facebook.com/idikaretreat",
    whatsapp: "+91 7207357312"
  }
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  { label: "Events", href: "/events" },
  { label: "Experiences", href: "/experiences" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const ctaButton = {
  label: "Plan Your Stay",
  href: "/rooms"
};

export const homePage = {
  hero: {
    subtitle: "An Eco-Friendly Earthbag Homestay",
    title: "Idika",
    description: "Discover sustainable luxury at Idika",
    cta: {
      primary: { label: "Explore Our Stay", href: "/rooms" },
      secondary: { label: "View Gallery", href: "/gallery" }
    }
  },
  intro: {
    subtitle: "The Living Dome",
    title: "Conscious Systems",
    description: "Our earthbag dome is more than architecture — it's a living system. Built with natural materials, it breathes with the earth, maintaining natural temperature and humidity year-round.",
    stats: [
      { value: "24°C", label: "Natural Temperature" },
      { value: "100%", label: "Eco Materials" },
      { value: "Net Zero", label: "Carbon Footprint" }
    ]
  },
  features: [
    {
      title: "The Earth as Substance",
      description: "Our walls are built from the very earth beneath your feet. Each bag filled with local soil creates a structure that's thermal, acoustic, and deeply connected to the land.",
      highlight: "Natural",
      image: {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865430/1_mczacs.jpg",
        alt: "Interior of Idika dome bedroom"
      }
    },
    {
      title: "Circular Hydrology",
      description: "Rainwater harvesting, greywater recycling, and natural filtration. Every drop is honored in our closed-loop water system.",
      items: [
        { label: "Rainwater Capture", icon: "CloudRain" },
        { label: "Natural Filtration", icon: "Filter" },
        { label: "Greywater Recycling", icon: "Recycle" },
        { label: "Zero Waste Flow", icon: "Droplets" }
      ]
    }
  ],
  sustainability: {
    subtitle: "Nothing Wasted, Everything Respected",
    title: "Living Lightly",
    description: "From solar power to organic gardens, every element of Idika is designed to leave the gentlest footprint while offering the deepest rest."
  },
  experience: {
    subtitle: "The Art of Stillness",
    title: "Poolside Calm",
    description: "Our natural pool invites you to immerse in tranquility. Chemical-free, naturally filtered, and surrounded by native plants — it's a sanctuary within a sanctuary.",
    features: [
      { title: "Open Lawns", description: "Expansive green spaces for yoga, meditation, or simply watching the sky." },
      { title: "Nature-driven Stillness", description: "No television, minimal WiFi zones. Just birdsong, breeze, and the rhythm of nature." }
    ],
    images: [
      { src: "https://raw.githubusercontent.com/RevanthkumarYallanuru/assets/main/Domess/IMG_5899.JPG", alt: "Natural pool at Idika" },
      { src: "https://raw.githubusercontent.com/RevanthkumarYallanuru/assets/main/Domess/IMG_6229.JPG", alt: "Open lawns at Idika" }
    ]
  },
  cta: {
    title: "Return to Yourself",
    description: "Experience Idika for yourself. Book a night, stay a week. Discover what happens when luxury meets earth.",
    button: { label: "Reserve Your Space", href: "/contact" }
  }
};

export const aboutPage = {
  hero: {
    subtitle: "Our Story",
    title: "Living Within the Earth",
    description: "Idika was born from a simple question: what if luxury meant living in harmony with nature, not despite it?",
    image: {
      src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865402/11_b69qsq.jpg",
      alt: "Idika Earthbag Dome"
    }
  },
  story: {
    title: "Interior Warmth & Privacy",
    paragraphs: [
      "Every corner of Idika is designed with intention. Natural light filters through strategically placed openings, while earthen walls create intimate, cocoon-like spaces.",
      "Our philosophy is simple: true luxury is found in sustainable living, in waking to birdsong rather than alarms, in spaces that breathe with the earth."
    ],
    image: {
      src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865432/1_t3k7lc.jpg",
      alt: "Interior of Idika dome"
    }
  },
  values: [
    { title: "Sustainable", description: "Every decision prioritizes the planet" },
    { title: "Authentic", description: "Real materials, real experiences" },
    { title: "Restorative", description: "Designed for deep rest and renewal" }
  ]
};

export const roomsPage = {
  hero: {
    subtitle: "Our Collection",
    title: "Choose Your Sanctuary",
    description: "Each dome is uniquely designed to offer distinct experiences while maintaining our commitment to sustainability and comfort."
  },
  commonAmenities: {
    subtitle: "Common Amenities",
    title: "Shared Spaces for Every Guest",
    items: [
      {
        title: "Beach-themed Swimming Pool",
        description: "Enjoy a refreshing dip in our beautiful beach-themed swimming pool.",
        icon: "Waves"
      },
      {
        title: "Community Kitchen",
        description: "Well-equipped kitchen for self-cooking with all essential amenities.",
        icon: "ChefHat"
      },
      {
        title: "Spacious Dining Area",
        description: "Comfortable dining space perfect for group meals and conversations.",
        icon: "UtensilsCrossed"
      },
      {
        title: "Open Lawn",
        description: "Expansive open lawn perfect for relaxation and gatherings.",
        icon: "Leaf"
      },
      {
        title: "Music System",
        description: "Quality music system available in common areas for entertainment.",
        icon: "Music"
      },
      {
        title: "Projector",
        description: "Projector setup for movie nights and group screenings.",
        icon: "Film"
      },
      {
        title: "Indoor Board Games",
        description: "Collection of board games for fun indoor activities.",
        icon: "Gamepad2"
      },
      {
        title: "Outdoor Games",
        description: "Cricket, badminton, and other outdoor games available.",
        icon: "Trophy"
      }
    ]
  },
  gstPercentage: 5
};

// Booking Add-Ons Configuration
export interface BookingAddOn {
  id: string;
  name: string;
  price: number;
  icon: string;
  features: string[];
}

export const bookingAddOns: BookingAddOn[] = [
  {
    id: "candlelight-dinner",
    name: "Candlelight Dinner",
    price: 1000,
    icon: "Flame",
    features: [
      "Intimate dining experience under the stars",
      "Beautiful poolside setup",
      "Adorned with roses and candlelight",
      "Surrounded by nature",
      "Perfect setting for a magical evening"
    ]
  },
  {
    id: "basic-anniversary-decor",
    name: "Basic Anniversary Décor",
    price: 500,
    icon: "Heart",
    features: [
      "Celebrate your special milestone",
      "Thoughtfully styled room",
      "\"Happy Anniversary\" written on bed",
      "Elegant decorative touches"
    ]
  },
  {
    id: "basic-birthday-decor",
    name: "Basic Birthday Décor",
    price: 500,
    icon: "Gift",
    features: [
      "Make birthdays memorable",
      "Beautifully arranged room setup",
      "\"Happy Birthday\" styled on bed",
      "Festive decorative touches"
    ]
  },
  {
    id: "romantic-rose-decor",
    name: "Romantic Rose Décor",
    price: 1500,
    icon: "Sparkles",
    features: [
      "Elevated romantic experience",
      "Hanging roses throughout",
      "Petals spread across the room",
      "Flowers placed in the bathtub",
      "Luxurious, dreamy ambiance"
    ]
  },
  {
    id: "bonfire-barbecue",
    name: "Bonfire & Barbecue Setup",
    price: 1500,
    icon: "Flame",
    features: [
      "Cozy evening by the bonfire",
      "Delightful barbecue experience",
      "Under the open sky",
      "Perfect for groups and couples"
    ]
  },
  {
    id: "picnic-decor",
    name: "Picnic Décor",
    price: 1500,
    icon: "TreePine",
    features: [
      "Charming outdoor picnic setup",
      "Complete picnic table arrangement",
      "Glasses and elegant tablecloth",
      "Fresh flowers decoration",
      "Perfect for a relaxed, intimate escape"
    ]
  },
 /* {
    id: "private-party-gathering",
    name: "Parties & Corporate Gatherings",
    price: 40000,
    icon: "UsersRound",
    features: [
      "Access to all 5 domes",
      "Spacious lawn area",
      "Beach-themed swimming pool",
      "Dining area",
      "Community kitchen access",
      "Stay capacity: 25-30 guests",
      "Gathering capacity: Up to 150 guests"
    ]
  },
  {
    id: "birthday-anniversary-event",
    name: "Birthday / Anniversary Event Package",
    price: 40000,
    icon: "Gift",
    features: [
      "Access to all 5 domes",
      "Beach-themed pool",
      "Lawn & dining area",
      "Indoor AC hall",
      "Community kitchen access",
      "Stay capacity: 25-30 guests",
      "Gathering capacity: Up to 150 guests"
    ]
  },
  {
    id: "pre-wedding-event",
    name: "Pre-Wedding Event Package",
    price: 50000,
    icon: "Sparkles", 
    features: [
      "Haldi, Mehendi, Sangeet, Engagement etc.",
      "Access to all 5 domes",
      "Indoor AC hall (50 guests)",
      "Garden & stage area (100 guests)",
      "Beach-themed pool",
      "Lawn & dining spaces",
      "Stay capacity: 25-30 guests",
      "Gathering capacity: Up to 150 guests"
    ]
  }*/
];

// Events Page Configuration
export const eventsPage = {
  hero: {
    subtitle: "Celebrate at Idika",
    title: "Where Nature Hosts Your Moments",
    description: "Create unforgettable memories in our nature-immersed event spaces. From intimate gatherings to grand celebrations, let the earth cradle your special moments."
  },
  poeticSection: {
    title: "Experience the Essence",
    lines: [
      "Celebrate life with your loved ones in beautiful indoor and outdoor spaces, immersed in nature.",
      "Come. Take off your shoes.",
      "Lie down on the earth that cradles you like a mother.",
      "Let the mud walls whisper you back to what's real."
    ]
  },
  tags: [
    "#NatureEvents",
    "#WeddingsAtIdika",
    "#BirthdayCelebrations",
    "#PreWeddingShoot",
    "#PrivateParties"
  ]
};

// Event Types
export interface EventType {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  tags: string[];
  basePrice: number;
  priceRange?: string;
  priceNote: string;
  includes?: string[];
  capacities?: {
    stay: string;
    gathering: string;
    details?: string;
  };
}

export const eventTypes: EventType[] = [
  {
    id: "birthdays-anniversaries",
    name: "Birthdays / Anniversaries",
    description: "Celebrate your special moments in a private and peaceful setting.",
    icon: "Gift",
    image: "https://res.cloudinary.com/danxmgylf/image/upload/v1771865418/IMG_4960_ltuffh.jpg",
    tags: ["#PrivateParties", "#NatureEvents", "#Celebrations"],
    basePrice: 40000,
    priceRange: "₹40,000 - ₹75,000",
    priceNote: "Customizations Available",
    includes: [
      "Access to all 5 domes",
      "Beach-themed pool",
      "Lawn & dining area",
      "Indoor AC hall",
      "Community kitchen access"
    ],
    capacities: {
      stay: "25–30 guests",
      gathering: "Up to 150 guests",
      details: "(Indoor AC Hall: up to 50 guests | Garden & Stage: up to 100 guests)"
    }
  },
  {
    id: "pre-wedding",
    name: "Pre-Wedding Events",
    description: "Host intimate and elegant pre-wedding celebrations like Haldi, Mehendi, Sangeet with full property access.",
    icon: "Sparkles", 
    image: "https://res.cloudinary.com/danxmgylf/image/upload/v1771865420/IMG_4965_l6khjq.jpg",
    tags: ["#Haldi", "#Mehendi", "#Sangeet", "#Engagement"],
    basePrice: 50000,
    priceRange: "₹50,000 - ₹75,000",
    priceNote: "Customizations Available",
    includes: [
      "Access to all 5 domes",
      "Indoor AC hall (up to 50 guests)",
      "Garden & stage area (up to 100 guests)",
      "Beach-themed pool",
      "Lawn & dining spaces"
    ],
    capacities: {
      stay: "25–30 guests",
      gathering: "Up to 150 guests"
    }
  },
  {
    id: "corporate-parties",
    name: "Parties & Corporate Gatherings",
    description: "Perfect for team outings, private parties, and group celebrations in a relaxed setting.",
    icon: "UsersRound",
    image: "https://res.cloudinary.com/danxmgylf/image/upload/v1771865420/IMG_4961_cm92hj.jpg",
    tags: ["#CorporateEvents", "#TeamOutings", "#PrivateParties"],
    basePrice: 40000,
    priceRange: "₹40,000 - ₹75,000",
    priceNote: "Customizations Available",
    includes: [
      "Access to all 5 domes",
      "Spacious lawn area",
      "Beach-themed swimming pool",
      "Dining area",
       "Community kitchen with basic equipment"
    ],
    capacities: {
      stay: "25–30 guests",
      gathering: "Up to 150 guests" // Changed from "Total gathering capacity" to match interface key
    }
  }
];

// Event Venues
export interface EventVenue {
  id: string;
  name: string;
  type: "indoor" | "outdoor";
  capacity: number;
  description: string;
  features: string[];
  suitableFor: string[];
  basePrice: number;
  image: string;
}

export const eventVenues: EventVenue[] = [
  {
    id: "indoor-hall",
    name: "Indoor AC Hall",
    type: "indoor",
    capacity: 50,
    description: "A climate-controlled space with elegant earthen aesthetics, perfect for intimate celebrations.",
    features: [
      "Air-conditioned comfort",
      "Ambient lighting options",
      "Sound system included",
      "Flexible seating arrangements",
      "Attached restrooms",
      "Catering setup area"
    ],
    suitableFor: ["Birthdays", "Private Parties", "Ceremonies", "Corporate Events"],
    basePrice: 25000,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop"
  },
  {
    id: "garden-stage",
    name: "Garden & Stage",
    type: "outdoor",
    capacity: 100,
    description: "An expansive outdoor space with a dedicated stage, surrounded by lush greenery and open skies.",
    features: [
      "Covered stage area",
      "Open lawn seating",
      "Natural ambiance",
      "String lights setup",
      "Bonfire area available",
      "Ample parking space"
    ],
    suitableFor: ["Weddings", "Receptions", "Large Celebrations"],
    basePrice: 45000,
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop"
  }
];

// Event Add-ons/Services
export interface EventAddOn {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: string;
}

export const eventAddOns: EventAddOn[] = [
  {
    id: "decor-basic",
    name: "Basic Decor Package",
    price: 5000,
    description: "Balloon arrangements, flower vases, and table decorations",
    icon: "🎈"
  },
  {
    id: "decor-premium",
    name: "Premium Decor Package",
    price: 15000,
    description: "Themed decorations, floral arches, drapes, and centerpieces",
    icon: "💐"
  },
  {
    id: "lighting",
    name: "Professional Lighting",
    price: 8000,
    description: "String lights, spotlights, and ambient lighting setup",
    icon: "💡"
  },
  {
    id: "sound-system",
    name: "DJ & Sound System",
    price: 10000,
    description: "Professional DJ setup with speakers and microphones",
    icon: "🎵"
  },
  {
    id: "photography",
    name: "Event Photography",
    price: 12000,
    description: "Professional photographer for 4 hours with edited photos",
    icon: "📷"
  },
  {
    id: "catering",
    name: "Catering (Per Plate)",
    price: 500,
    description: "Veg/Non-veg menu options with starters, main course, and dessert",
    icon: "🍽️"
  },
  {
    id: "seating",
    name: "Premium Seating",
    price: 3000,
    description: "Cushioned chairs and decorated tables",
    icon: "🪑"
  },
  {
    id: "stage-decor",
    name: "Stage Decoration",
    price: 8000,
    description: "Floral backdrop, lighting, and stage props",
    icon: "🎭"
  }
];

import type { Room } from "@/components/RoomCard";

export const rooms: Room[] = [
  {
    id: 1,
    name: "Tvara",
    category: "Regular Dome",
    description: "Experience tranquility in our air-conditioned dome with plush bedding and modern amenities.",
    fullDescription: "Tvara offers a perfect blend of comfort and nature. This air-conditioned dome features a plush bed with bunk bed options, a spacious bathroom with natural bathing tub, and high-speed Wi-Fi connectivity for your convenience.",
    images: [
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865432/1_t3k7lc.jpg",
        alt: "Tvara dome interior"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865431/2_compressed_dbljtk.jpg",
        alt: "Tvara cozy bedroom"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865432/3_k282bo.jpg",
        alt: "Tvara dome details"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865431/4_compressed_yjoqip.jpg",
        alt: "Tvara bathroom"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865432/5_gxnedc.jpg",
        alt: "Tvara overview"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865432/6_cgnzqg.png",
        alt: "Tvara bedroom view"
      }
    ],
    youtubeVideoId: "dQw4w9WgXcQ",
    amenities: [
      { icon: "Bed", title: "Plush Bed & Thoughtfully Designed Bunk Bed", description: "Comfortable sleeping arrangements for the whole family" },
      { icon: "Wind", title: "Air-Conditioned Rooms", description: "Complete comfort in all seasons" },
      { icon: "Zap", title: "High-Speed 4G/5G Wi-Fi", description: "Stay connected with seamless connectivity" },
      { icon: "Bath", title: "Spacious Bathroom with Natural Bathing Tub", description: "Spa-like experience with well-maintained facilities" },
      { icon: "Droplet", title: "24-Hour Hot Water Facility", description: "Hot water available round the clock" },
      { icon: "Shirt", title: "Fresh Linens, Towels & Toiletries", description: "High-quality linens and curated toiletries provided" },
      { icon: "Coffee", title: "Electric Kettle with Cups", description: "For relaxed in-room moments" },
      { icon: "Lightbulb", title: "Warm Ambient Lighting", description: "Complements the natural surroundings" }
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
    maxGuests: 5,
    baseGuests: 2,
    basePrice: 7000,
    extraGuestCharge: 1000,
    gstPercentage: 5,
    roomType: "regular",
    highlights: ["Air-conditioned", "Bunk bed option", "Natural bathing tub", "High-speed Wi-Fi"]
  },
  {
    id: 2,
    name: "Neer",
    category: "Regular Dome",
    description: "Immerse yourself in serenity with our water-themed dome featuring premium amenities.",
    fullDescription: "Neer, meaning water, offers a calming retreat with its soothing ambiance. Enjoy air-conditioned comfort, plush bedding with bunk bed options, and a spa-like bathroom experience with natural bathing tub.",
    images: [
        {
          src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865435/1_compressed_rlikns.jpg",
          alt: "Neer dome interior"
        },
        {
          src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865435/2_compressed_rtbpjc.jpg",
          alt: "Neer bedroom view"
        },
        {
          src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865436/3_zv7ows.png",
          alt: "Neer dome details"
        },
        {
          src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865435/4_compressed_fx1fmp.jpg",
          alt: "Neer bathroom"
        },
        {
          src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865436/5_compressed_y1wpkm.jpg",
          alt: "Neer amenities"
        },
        {
          src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865435/6_ntzp95.jpg",
          alt: "Neer view"
        }
    ],
    youtubeVideoId: "5qap5aO4i9A",
    amenities: [
      { icon: "Bed", title: "Plush Bed & Thoughtfully Designed Bunk Bed", description: "Comfortable sleeping arrangements for the whole family" },
      { icon: "Wind", title: "Air-Conditioned Rooms", description: "Complete comfort in all seasons" },
      { icon: "Zap", title: "High-Speed 4G/5G Wi-Fi", description: "Stay connected with seamless connectivity" },
      { icon: "Bath", title: "Spacious Bathroom with Natural Bathing Tub", description: "Spa-like experience with well-maintained facilities" },
      { icon: "Droplet", title: "24-Hour Hot Water Facility", description: "Hot water available round the clock" },
      { icon: "Shirt", title: "Fresh Linens, Towels & Toiletries", description: "High-quality linens and curated toiletries provided" },
      { icon: "Coffee", title: "Electric Kettle with Cups", description: "For relaxed in-room moments" },
      { icon: "Lightbulb", title: "Warm Ambient Lighting", description: "Complements the natural surroundings" }
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
    maxGuests: 5,
    baseGuests: 2,
    basePrice: 7000,
    extraGuestCharge: 1000,
    gstPercentage: 5,
    roomType: "regular",
    highlights: ["Air-conditioned", "Bunk bed option", "Natural bathing tub", "High-speed Wi-Fi"]
  },
  {
    id: 3,
    name: "Vana",
    category: "Regular Dome",
    description: "Connect with nature in our forest-inspired dome surrounded by lush greenery.",
    fullDescription: "Vana, meaning forest, brings you closer to nature while providing all modern comforts. The air-conditioned dome features plush bedding, bunk bed options, and a luxurious bathroom with natural bathing tub.",
    images: [
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865410/1_compressed_phxtqq.jpg",
        alt: "Vana dome interior"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865410/2_compressed_ca6sox.jpg",
        alt: "Vana bedroom"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865411/3_sple3j.png",
        alt: "Vana dome details"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865408/4_compressed_cnftab.jpg",
        alt: "Vana nature view"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865410/5_compressed_lscl35.jpg",
        alt: "Vana exterior"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865409/6_compressed_wpjfwt.jpg",
        alt: "Vana overview"
      }
    ],
    youtubeVideoId: "lTxn2BuqyzU",
    amenities: [
      { icon: "Bed", title: "Plush Bed & Thoughtfully Designed Bunk Bed", description: "Comfortable sleeping arrangements for the whole family" },
      { icon: "Wind", title: "Air-Conditioned Rooms", description: "Complete comfort in all seasons" },
      { icon: "Zap", title: "High-Speed 4G/5G Wi-Fi", description: "Stay connected with seamless connectivity" },
      { icon: "Bath", title: "Spacious Bathroom with Natural Bathing Tub", description: "Spa-like experience with well-maintained facilities" },
      { icon: "Droplet", title: "24-Hour Hot Water Facility", description: "Hot water available round the clock" },
      { icon: "Shirt", title: "Fresh Linens, Towels & Toiletries", description: "High-quality linens and curated toiletries provided" },
      { icon: "Coffee", title: "Electric Kettle with Cups", description: "For relaxed in-room moments" },
      { icon: "Lightbulb", title: "Warm Ambient Lighting", description: "Complements the natural surroundings" }
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
    maxGuests: 5,
    baseGuests: 2,
    basePrice: 7000,
    extraGuestCharge: 1000,
    gstPercentage: 5,
    roomType: "regular",
    highlights: ["Air-conditioned", "Bunk bed option", "Natural bathing tub", "High-speed Wi-Fi"]
  },
  {
    id: 4,
    name: "Oorja",
    category: "Regular Dome",
    description: "Energize your spirit in our vibrant dome designed for rejuvenation and wellness.",
    fullDescription: "Oorja, meaning energy, is designed to revitalize your senses. This air-conditioned dome offers plush bedding with bunk bed options, a spa-inspired bathroom with natural bathing tub, and seamless connectivity.",
    images: [
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865427/1_tzjlo3.jpg",
        alt: "Oorja dome interior"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865427/2_dqjqu0.jpg",
        alt: "Oorja bedroom"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865427/4_compressed_k9sofi.jpg",
        alt: "Oorja dome details"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865426/5_compressed_appzxy.jpg",
        alt: "Oorja bathroom"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865426/6_compressed_grbfso.jpg",
        alt: "Oorja overview"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865425/7_compressed_mu2evf.jpg",
        alt: "Oorja bed view"
      }
    ],
    youtubeVideoId: "inpok4MKVLM",
    amenities: [
      { icon: "Bed", title: "Plush Bed & Thoughtfully Designed Bunk Bed", description: "Comfortable sleeping arrangements for the whole family" },
      { icon: "Wind", title: "Air-Conditioned Rooms", description: "Complete comfort in all seasons" },
      { icon: "Zap", title: "High-Speed 4G/5G Wi-Fi", description: "Stay connected with seamless connectivity" },
      { icon: "Bath", title: "Spacious Bathroom with Natural Bathing Tub", description: "Spa-like experience with well-maintained facilities" },
      { icon: "Droplet", title: "24-Hour Hot Water Facility", description: "Hot water available round the clock" },
      { icon: "Shirt", title: "Fresh Linens, Towels & Toiletries", description: "High-quality linens and curated toiletries provided" },
      { icon: "Coffee", title: "Electric Kettle with Cups", description: "For relaxed in-room moments" },
      { icon: "Lightbulb", title: "Warm Ambient Lighting", description: "Complements the natural surroundings" }
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
    maxGuests: 5,
    baseGuests: 2,
    basePrice: 7000,
    extraGuestCharge: 1000,
    gstPercentage: 5,
    roomType: "regular",
    highlights: ["Air-conditioned", "Bunk bed option", "Natural bathing tub", "High-speed Wi-Fi"]
  },
  {
    id: 5,
    name: "Antara",
    category: "Large Dome",
    description: "Our largest dome perfect for groups and families seeking shared experiences.",
    fullDescription: "Antara, meaning inner space, is our most spacious dome designed for groups and families. Featuring extra-large living areas, large bed with huge bunk bed, air-conditioned comfort, and a luxurious bathroom with natural bathing tub.",
    images: [
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865430/1_mczacs.jpg",
        alt: "Antara large dome interior"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865430/2_rqq5uy.jpg",
        alt: "Antara bedroom"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865429/3_fhomb9.png",
        alt: "Antara living area"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865428/4_compressed_iapmde.jpg",
        alt: "Antara overview"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865428/5_compressed_lmakpt.jpg",
        alt: "Antara dome details"
      },
      {
        src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865429/6_rqhayj.jpg",
        alt: "Antara exterior view"
      }
    ],
    youtubeVideoId: "L_LUpnjgPso",
    amenities: [
      { icon: "Home", title: "Spacious Dome for Groups", description: "Designed to comfortably accommodate groups" },
      { icon: "Bed", title: "Large Bed & Huge Bunk Bed", description: "Ample sleeping space for everyone" },
      { icon: "Wind", title: "Air-Conditioned", description: "All-season comfort" },
      { icon: "Zap", title: "High-Speed 4G/5G Wi-Fi", description: "Stay connected with seamless connectivity" },
      { icon: "Bath", title: "Spacious Bathroom with Natural Bathing Tub", description: "Well-maintained facilities with spa-like experience" },
      { icon: "Droplet", title: "24-Hour Hot Water Facility", description: "Hot water available round the clock" },
      { icon: "Shirt", title: "Fresh Premium Linens, Towels & Toiletries", description: "Premium linens and eco-friendly toiletries provided" },
      { icon: "Coffee", title: "Electric Kettle with Cups", description: "For relaxed in-room moments" },
      { icon: "Lightbulb", title: "Soft Ambient Lighting", description: "Blends beautifully with nature" }
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
    maxGuests: 8,
    baseGuests: 6,
    basePrice: 12000,
    extraGuestCharge: 1000,
    gstPercentage: 5,
    roomType: "large",
    highlights: ["Extra spacious", "Up to 8 guests", "Group friendly", "Large bunk bed"]
  }
];

export const stayPage = {
  hero: {
    subtitle: "Your Sanctuary",
    title: "The Living Dome",
    description: "Step inside a space that breathes, regulates, and nurtures. Our earthbag dome offers an experience unlike any hotel."
  },
  amenities: [
    { title: "King-size Bed", description: "Organic cotton linens, natural mattress" },
    { title: "Private Bathroom", description: "Rainwater shower, natural toiletries" },
    { title: "Kitchenette", description: "Farm-fresh provisions, filtered water" },
    { title: "Outdoor Deck", description: "Sunrise views, evening stargazing" },
    { title: "Natural Pool", description: "Chemical-free, naturally filtered" },
    { title: "Organic Garden", description: "Pick your own herbs and vegetables" }
  ],
  pricing: {
    weekday: "₹8,500",
    weekend: "₹10,500",
    note: "Per night, includes breakfast and farm-to-table dinner"
  }
};

export const sustainabilityPage = {
  hero: {
    subtitle: "Our Commitment",
    title: "Nothing Wasted, Everything Respected",
    description: "Sustainability isn't a feature at Idika — it's the foundation everything is built upon."
  },
  pillars: [
    {
      title: "Earthbag Construction",
      description: "Walls built from local soil, minimal cement, maximum thermal efficiency. Our structure maintains 24°C year-round without mechanical cooling."
    },
    {
      title: "Solar Power",
      description: "100% off-grid electricity from rooftop panels. Excess energy is stored for cloudy days."
    },
    {
      title: "Water Wisdom",
      description: "Rainwater harvesting, greywater recycling, and a natural pool that uses plants instead of chemicals."
    },
    {
      title: "Zero Waste Kitchen",
      description: "Organic garden, composting, local sourcing. We grow what we serve and return the rest to the earth."
    }
  ]
};

export const experiencesPage = {
  hero: {
    subtitle: "Curated Moments",
    title: "Experiences at Idika",
    description: "More than all these, it's the stillness you feel, the warmth of our stay, and the quiet, homely charm of Idika that becomes the experience you carry with you long after you leave."
  },
  experiences: [
    {
      title: "Slow Living",
      description: "Unplug from the rush of everyday life, embrace a slower rhythm, and reconnect with yourself in a space designed for calm and clarity.",
      icon: "Leaf",
      image: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865411/1_wav44p.png"
    },
    {
      title: "Natural Bathing Tubs",
      description: "Relax and rejuvenate in our natural bathing tubs, created for deep soaking, serenity, and complete unwinding.",
      icon: "Bath",
      image: "https://res.cloudinary.com/danxmgylf/image/upload/v1771865408/4_compressed_cnftab.jpg"
    },
    {
      title: "Candlelight Dinner Under the Stars",
      description: "Experience an intimate evening beneath the open sky, surrounded by the soft glow of candlelight — set beautifully by the pool for a truly magical ambiance.",
      icon: "Sparkles",
      image: "https://res.cloudinary.com/danxmgylf/image/upload/v1771865422/IMG_6458_k8aecm.jpg"
    },
    {
      title: "Thoughtfully Curated Bunk Bed",
      description: "Climb up, switch off, share a laugh. A cozy corner that brings back simple joys.",
      icon: "BedDouble",
      image: "https://res.cloudinary.com/danxmgylf/image/upload/v1771865411/3_sple3j.png"
    },
    {
      title: "Beach Themed Pool",
      description: "Calm waters, easy sunshine. A little beach escape, right where you are.",
      icon: "Waves",
      image: "https://res.cloudinary.com/danxmgylf/image/upload/v1771865415/IMG_4967_lvrnv3.jpg"
    },
    {
      title: "Picnic on the Lawn",
      description: "Enjoy a beautifully curated picnic set against lush greenery — where simple pleasures become lasting memories.",
      icon: "TreePine",
      image: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865414/6_gkrxkv.png"
    },
    {
      title: "Movie Night",
      description: "End your day with a cozy movie night, where comfort and atmosphere come together for the perfect evening.",
      icon: "Film",
      image: "https://res.cloudinary.com/danxmgylf/image/upload/v1771865405/14_emxmzj.jpg"
    }
  ]
};

export const galleryImages = [
  // Architecture
  {
    id: 1,
    title: "Earthbag Dome Structure",
    category: "Architecture",
    alt: "Beautiful earthbag dome architecture at Idika",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865406/3_fqw9jh.jpg"
  },
  {
    id: 2,
    title: "Dome Interior Design",
    category: "Architecture",
    alt: "Stunning interior design of Idika dome",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865404/15_ea2hdx.jpg"
  },
  {
    id: 3,
    title: "Natural Construction",
    category: "Architecture",
    alt: "Natural earthbag construction technique",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865402/11_b69qsq.jpg"
  },
  {
    id: 4,
    title: "Dome Exterior",
    category: "Architecture",
    alt: "Idika dome exterior view",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865401/2_vh6hya.jpg"
  },
  {
    id: 5,
    title: "Sustainable Architecture",
    category: "Architecture",
    alt: "Sustainable dome architecture at Idika",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865430/1_mczacs.jpg"
  },
  // Amenities
  {
    id: 6,
    title: "Cozy Interiors",
    category: "Amenities",
    alt: "Cozy interior amenities at Idika",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865416/DSC09792_compressed_bdaah3.jpg"
  },
  {
    id: 7,
    title: "Comfortable Living Space",
    category: "Amenities",
    alt: "Comfortable living space inside dome",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865416/DSC09795_compressed_fvllqv.jpg"
  },
  {
    id: 8,
    title: "Natural Decor",
    category: "Amenities",
    alt: "Natural decor and furnishings",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865416/IMG_3436_fabdmk.jpg"
  },
  {
    id: 9,
    title: "Relaxation Space",
    category: "Amenities",
    alt: "Relaxation space at Idika",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865415/DSC09802_compressed_bwutys.jpg"
  },
  {
    id: 10,
    title: "Eco-Friendly Features",
    category: "Amenities",
    alt: "Eco-friendly amenities",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865405/6_hvy5hf.png"
  },
  // Views
  {
    id: 11,
    title: "Nature Views",
    category: "Views",
    alt: "Beautiful nature views from Idika",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865401/8_tnxrbe.jpg"
  },
  {
    id: 12,
    title: "Scenic Landscape",
    category: "Views",
    alt: "Scenic landscape surrounding Idika",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865421/edf29dd0-8693-4fd8-84fb-69cabac6773d_ctvs2t.jpg"
  },
  {
    id: 13,
    title: "Green Surroundings",
    category: "Views",
    alt: "Lush green surroundings at Idika",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865436/5_compressed_y1wpkm.jpg"
  },
  {
    id: 14,
    title: "Natural Beauty",
    category: "Views",
    alt: "Natural beauty of Idika grounds",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865402/11_b69qsq.jpg"
  },
  {
    id: 15,
    title: "Outdoor Vista",
    category: "Views",
    alt: "Beautiful outdoor vista",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865401/2_vh6hya.jpg"
  },
  // Experiences
  {
    id: 16,
    title: "Idika Experience",
    category: "Experiences",
    alt: "Unique experiences at Idika",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865422/IMG_4814_nwpg2x.jpg"
  },
  {
    id: 17,
    title: "Nature Activities",
    category: "Experiences",
    alt: "Nature activities at Idika",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865430/1_mczacs.jpg"
  },
  {
    id: 18,
    title: "Outdoor Adventures",
    category: "Experiences",
    alt: "Outdoor adventures at Idika",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865423/IMG_6384_jhutsw.jpg"
  },
  {
    id: 19,
    title: "Peaceful Retreat",
    category: "Experiences",
    alt: "Peaceful retreat experience",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865421/IMG_4962_nvobrw.jpg"
  },
  {
    id: 20,
    title: "Memorable Moments",
    category: "Experiences",
    alt: "Memorable moments at Idika",
    src: "https://res.cloudinary.com/danxmgylf/image/upload/f_auto,q_auto/v1771865417/IMG_4964_nhykoj.jpg"
  }
];

export const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Idika is not just a stay — it's a transformation. I arrived exhausted and left renewed. The dome's natural temperature was remarkable, and the silence... the silence was healing.",
    date: "December 2025"
  },
  {
    id: 2,
    name: "Arjun & Meera",
    location: "Bangalore",
    rating: 5,
    text: "We've stayed at luxury resorts worldwide, but nothing compares to Idika. The sustainability isn't performative — it's integral. And somehow, it enhances the luxury rather than compromising it.",
    date: "November 2025"
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    location: "London",
    rating: 5,
    text: "Worth the journey from anywhere in the world. The earthbag architecture is fascinating, but what truly sets Idika apart is the sense of peace. I've never slept better.",
    date: "October 2025"
  },
  {
    id: 4,
    name: "Vikram Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "As a local, I'm amazed this exists so close to our city. It's a masterclass in sustainable design and hospitality. I bring every out-of-town guest here now.",
    date: "January 2026"
  },
  {
    id: 5,
    name: "Ananya Krishnan",
    location: "Chennai",
    rating: 5,
    text: "The farm-to-table experience was extraordinary. Picking herbs from the garden for dinner, sleeping in a dome that stays cool without AC — this is the future of travel.",
    date: "September 2025"
  }
];

export const contactPage = {
  hero: {
    subtitle: "Begin Your Journey",
    title: "Plan Your Stay",
    description: "Ready to experience Idika? Let us help you create your perfect escape."
  },
  details: [
    { label: "Email", value: siteConfig.email },
    { label: "Phone", value: siteConfig.phone },
    { label: "Location", value: "Near Ananthagiri Hills, Hyderabad" }
  ],
  formFields: [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: false },
    { name: "dates", label: "Preferred Dates", type: "text", required: true },
    { name: "guests", label: "Number of Guests", type: "select", options: ["1", "2", "3", "4"], required: true },
    { name: "message", label: "Special Requests", type: "textarea", required: false }
  ],
  cta: {
    title: "A Collective Void",
    description: "A collective that breathes with the earth. A stay that restores the soul.",
    note: "Experience the essence of Idika."
  }
};

export const chatbotConfig = {
  greeting: "Welcome to Idika! 🌿 I'm here to help you plan your eco-retreat. What would you like to know?",
  quickReplies: [
    "Tell me about Idika",
    "Room prices",
    "How to book?",
    "Location & directions"
  ],
  faqs: [
    // About Idika
    {
      keywords: ["what", "idika", "about", "tell me"],
      question: "What is Idika?",
      answer: "Idika is an eco-luxury earthbag dome homestay near Hyderabad, located close to Ananthagiri Hills. We offer 5 unique domes (Tvara, Neer, Vana, Oorja, Antara) built with sustainable earthbag construction. It's the perfect retreat for couples, families, and groups seeking peace in nature."
    },
    {
      keywords: ["why", "special", "unique", "different"],
      question: "What makes Idika special?",
      answer: "Idika is unique because of our earthbag dome architecture that maintains 24°C naturally year-round. We're 100% solar powered, practice rainwater harvesting, have organic gardens, and follow zero-waste principles. It's where luxury meets sustainability!"
    },
    
    // Rooms & Pricing
    {
      keywords: ["room", "dome", "accommodation", "stay", "types"],
      question: "What rooms do you have?",
      answer: "We have 5 domes:\n• Tvara, Neer, Vana, Oorja - Regular domes (2-5 guests) at ₹7,000/night base\n• Antara - Large dome (6-8 guests) at ₹12,000/night base\n\nAll include AC, plush beds, bunk beds, natural bathing tub, and high-speed WiFi."
    },
    {
      keywords: ["price", "cost", "rate", "tariff", "charge", "how much", "₹"],
      question: "What are your prices?",
      answer: "Room rates:\n• Regular Domes (Tvara/Neer/Vana/Oorja): ₹7,000/night for 2 guests + ₹1,000 per extra guest\n• Large Dome (Antara): ₹12,000/night for 6 guests + ₹1,000 per extra guest\n\n5% GST applicable. Breakfast & dinner included!"
    },
    {
      keywords: ["tvara"],
      question: "Tell me about Tvara dome",
      answer: "Tvara is our air-conditioned Regular Dome featuring plush bedding with bunk bed options, spacious bathroom with natural bathing tub, and high-speed WiFi. Perfect for 2-5 guests at ₹7,000/night (base for 2 guests) + ₹1,000 per extra guest."
    },
    {
      keywords: ["neer"],
      question: "Tell me about Neer dome",
      answer: "Neer (meaning water) offers a calming, water-themed retreat. It's an air-conditioned dome with plush bedding, bunk bed options, and spa-like bathroom with natural bathing tub. Accommodates 2-5 guests at ₹7,000/night base."
    },
    {
      keywords: ["vana"],
      question: "Tell me about Vana dome",
      answer: "Vana (meaning forest) is our nature-inspired dome surrounded by lush greenery. Features AC, plush beds with bunk option, natural bathing tub, and WiFi. Perfect for nature lovers! 2-5 guests at ₹7,000/night base."
    },
    {
      keywords: ["oorja"],
      question: "Tell me about Oorja dome",
      answer: "Oorja (meaning energy) is designed for rejuvenation and wellness. Air-conditioned dome with plush bedding, bunk bed options, spa-inspired bathroom with natural bathing tub. 2-5 guests at ₹7,000/night base."
    },
    {
      keywords: ["antara", "large", "group", "family", "big"],
      question: "Tell me about Antara dome",
      answer: "Antara is our LARGEST dome - perfect for groups and families! Features extra-spacious living areas, large bed + huge bunk bed, AC, and luxurious bathroom. Accommodates 6-8 guests at ₹12,000/night base + ₹1,000 per extra guest."
    },
    {
      keywords: ["guest", "capacity", "people", "how many", "max"],
      question: "How many guests can stay?",
      answer: "Guest capacity:\n• Regular Domes (Tvara/Neer/Vana/Oorja): 2-5 guests each\n• Large Dome (Antara): 6-8 guests\n\nTotal property capacity: Up to 28 guests if all 5 domes booked!"
    },
    
    // Amenities
    {
      keywords: ["amenity", "amenities", "facilities", "include", "what's included"],
      question: "What amenities are included?",
      answer: "All domes include:\n✓ Air conditioning\n✓ Plush beds with bunk bed options\n✓ Natural bathing tub\n✓ High-speed 4G/5G WiFi\n✓ Breakfast & dinner\n✓ Access to organic gardens\n✓ Nature trails\n✓ Common areas & bonfire space"
    },
    {
      keywords: ["wifi", "internet", "connectivity", "network"],
      question: "Do you have WiFi?",
      answer: "Yes! All domes have high-speed 4G/5G WiFi connectivity. Stay connected while enjoying nature - perfect for remote work or staying in touch with loved ones."
    },
    {
      keywords: ["ac", "air condition", "cooling", "temperature"],
      question: "Are the domes air-conditioned?",
      answer: "Yes, all 5 domes are fully air-conditioned! Plus, our earthbag construction naturally maintains around 24°C, so you'll be comfortable even without AC most of the time."
    },
    {
      keywords: ["food", "meal", "breakfast", "dinner", "lunch", "eat"],
      question: "What about food/meals?",
      answer: "Your stay includes:\n✓ Farm-to-table breakfast\n✓ Delicious dinner\n\nWe use fresh ingredients from our organic gardens. Lunch can be arranged on request. We accommodate vegetarian and dietary preferences - just let us know!"
    },
    {
      keywords: ["pool", "swimming"],
      question: "Is there a swimming pool?",
      answer: "We have a natural pool that uses plants instead of chemicals for filtration - it's eco-friendly and refreshing! Perfect for a relaxing dip surrounded by nature."
    },
    
    // Booking
    {
      keywords: ["book", "booking", "reserve", "reservation", "how to"],
      question: "How do I book?",
      answer: "You can book through:\n1. 📱 WhatsApp: +91 7207357312 (fastest!)\n2. 🌐 Website: Click 'Book Now' on any room\n3. 📧 Email: hello@idika.in\n\nWe recommend booking 2 weeks in advance for weekends!"
    },
    {
      keywords: ["whatsapp", "contact", "phone", "call", "number"],
      question: "What's your contact number?",
      answer: "📱 WhatsApp/Call: +91 7207357312\n📧 Email: hello@idika.in\n\nWhatsApp is the fastest way to reach us for bookings and inquiries!"
    },
    {
      keywords: ["check in", "check out", "checkin", "checkout", "time", "timing"],
      question: "What are check-in/check-out times?",
      answer: "⏰ Check-in: 2:00 PM\n⏰ Check-out: 11:00 AM\n\nEarly check-in or late check-out may be available on request (subject to availability)."
    },
    {
      keywords: ["cancel", "cancellation", "refund", "policy"],
      question: "What's your cancellation policy?",
      answer: "Please contact us directly at +91 7207357312 for our cancellation policy. We try to be flexible and accommodate genuine circumstances. Reach out via WhatsApp for the fastest response!"
    },
    {
      keywords: ["payment", "pay", "upi", "card", "cash"],
      question: "What payment methods do you accept?",
      answer: "We accept:\n✓ UPI payments\n✓ Bank transfer\n✓ Cash on arrival\n\nA 50% advance is typically required to confirm your booking."
    },
    
    // Location
    {
      keywords: ["location", "where", "address", "place", "situated"],
      question: "Where is Idika located?",
      answer: "📍 Idika is located near Ananthagiri Hills, approximately 90 minutes (60-70 km) from Hyderabad city center. Detailed directions with Google Maps link are provided upon booking confirmation."
    },
    {
      keywords: ["direction", "route", "reach", "get there", "how to reach", "travel"],
      question: "How do I reach Idika?",
      answer: "From Hyderabad:\n🚗 By car: ~90 minutes via NH 44 towards Ananthagiri Hills\n🚕 Cab: We can help arrange pickup\n\nExact location and Google Maps link shared after booking confirmation. The drive itself is scenic and beautiful!"
    },
    {
      keywords: ["distance", "far", "km", "kilometer", "hyderabad"],
      question: "How far is Idika from Hyderabad?",
      answer: "Idika is approximately 60-70 km from Hyderabad city center, about 90 minutes drive via NH 44. It's near Ananthagiri Hills - a beautiful scenic drive through nature!"
    },
    {
      keywords: ["pickup", "drop", "transport", "cab", "taxi"],
      question: "Do you provide pickup service?",
      answer: "We can help arrange cab pickup from Hyderabad on request. Contact us via WhatsApp (+91 7207357312) with your requirements, and we'll coordinate the transport for you."
    },
    
    // Events
    {
      keywords: ["event", "party", "celebration", "wedding", "birthday", "corporate"],
      question: "Can we host events at Idika?",
      answer: "Yes! We host:\n🎉 Birthday Parties - from ₹12,000\n💍 Weddings - from ₹50,000\n📸 Pre-wedding Shoots - from ₹10,000\n🎊 Private Gatherings - from ₹20,000\n🥳 Parties - from ₹15,000\n\nVisit our Events page or WhatsApp us for customized quotes!"
    },
    {
      keywords: ["wedding", "marriage"],
      question: "Can we have a wedding at Idika?",
      answer: "Absolutely! We host intimate weddings starting from ₹50,000. Our beautiful outdoor and indoor spaces are perfect for nature-themed celebrations. Contact us on WhatsApp (+91 7207357312) for customized wedding packages!"
    },
    {
      keywords: ["birthday"],
      question: "Can we celebrate a birthday at Idika?",
      answer: "Yes! Birthday celebrations start from ₹12,000. We offer indoor and outdoor venue options, catering, decorations, and bonfire arrangements. Perfect for a memorable celebration in nature! 🎂"
    },
    
    // Sustainability
    {
      keywords: ["sustain", "eco", "green", "environment", "solar", "organic"],
      question: "How is Idika sustainable?",
      answer: "Idika is built on sustainability:\n🏠 Earthbag construction (natural 24°C)\n☀️ 100% solar powered\n💧 Rainwater harvesting\n♻️ Greywater recycling\n🌱 Organic gardens\n🍽️ Zero-waste kitchen\n\nWe're net-zero and proud of it!"
    },
    {
      keywords: ["earthbag", "construction", "building", "architecture"],
      question: "What is earthbag construction?",
      answer: "Our domes are built using earthbag technology - bags filled with local soil, stacked and compressed. This creates thick walls that naturally regulate temperature (staying ~24°C year-round), uses minimal cement, and has very low environmental impact. It's ancient wisdom meets modern comfort!"
    },
    
    // Experiences
    {
      keywords: ["experience", "activity", "activities", "things to do", "do there"],
      question: "What activities are available?",
      answer: "At Idika you can enjoy:\n🧘 Yoga sessions\n🚶 Nature walks & trails\n🌿 Organic garden tours\n🔥 Bonfire evenings\n⭐ Stargazing\n🏊 Natural pool\n📸 Photography\n\nSome experiences may have additional charges."
    },
    {
      keywords: ["yoga", "meditation", "wellness"],
      question: "Do you offer yoga sessions?",
      answer: "Yes! We offer yoga and meditation sessions that can be arranged during your stay. Connect with nature while finding inner peace. Ask us when booking or via WhatsApp to schedule a session."
    },
    {
      keywords: ["bonfire", "campfire", "fire"],
      question: "Can we have a bonfire?",
      answer: "Yes! Bonfire evenings can be arranged at Idika. It's perfect for stargazing, storytelling, and creating memories with loved ones. Let us know in advance so we can set it up for you! 🔥"
    },
    
    // Best time & weather
    {
      keywords: ["weather", "climate", "season", "best time", "when to visit", "monsoon", "summer", "winter"],
      question: "What's the best time to visit?",
      answer: "Idika is beautiful year-round:\n🍂 Oct-Mar: Pleasant weather, ideal for outdoor activities\n🌧️ Jul-Sep: Lush monsoon greenery, magical atmosphere\n☀️ Apr-Jun: Warm but our domes stay cool at 24°C!\n\nEach season offers a unique experience."
    },
    
    // Couples & families
    {
      keywords: ["couple", "romantic", "honeymoon", "anniversary"],
      question: "Is Idika good for couples?",
      answer: "Absolutely! Idika is perfect for couples seeking a romantic, peaceful getaway. Our domes offer complete privacy, stunning nature views, and intimate spaces. Ideal for honeymoons, anniversaries, or just quality time together! 💑"
    },
    {
      keywords: ["family", "kid", "child", "children"],
      question: "Is Idika family-friendly?",
      answer: "Yes! Families love Idika. Our Antara dome accommodates 6-8 guests, perfect for family trips. Kids enjoy nature walks, organic gardens, and outdoor activities. It's a great way to disconnect from screens and connect with nature! 👨‍👩‍👧‍👦"
    },
    {
      keywords: ["pet", "dog", "animal"],
      question: "Are pets allowed?",
      answer: "Please contact us directly at +91 7207357312 regarding pet policies. We evaluate pet requests on a case-by-case basis to ensure comfort for all guests and the local ecosystem."
    },
    
    // Practical
    {
      keywords: ["pack", "bring", "carry", "need"],
      question: "What should I pack/bring?",
      answer: "We recommend bringing:\n👕 Comfortable clothes\n👟 Walking shoes for nature trails\n🧴 Personal toiletries (we provide basics)\n💊 Personal medications\n📱 Phone charger\n📷 Camera for memories!\n\nWe provide towels, linens, and basic amenities."
    },
    {
      keywords: ["safe", "safety", "secure", "security"],
      question: "Is Idika safe?",
      answer: "Yes! Idika is a secure property with staff available on-site. We're located in a peaceful area near Ananthagiri Hills. The property is gated and we prioritize guest safety and privacy."
    }
  ]
};

export const footer = {
  tagline: "Earth's Essence, Your Escape",
  sections: [
    {
      title: "Explore",
      links: [
        { label: "About", href: "/about" },
        
        { label: "Experiences", href: "/experiences" }
      ]
    },
    {
      title: "Connect",
      links: [
        { label: "Gallery", href: "/gallery" },
        
        { label: "Contact", href: "/contact" }
      ]
    }
  ],
  legal: {
    copyright: `© ${new Date().getFullYear()} Idika. All rights reserved.`,
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" }
    ]
  }
};

export const seoDefaults = {
  titleTemplate: "%s | Idika — Eco-Luxury Earthbag Homestay",
  defaultTitle: "Idika — Eco-Friendly Earthbag Dome Homestay Near Hyderabad",
  description: "Experience sustainable luxury at Idika, an eco-friendly earthbag dome homestay near Hyderabad. Natural temperature regulation, solar power, organic gardens, and soul-restoring stillness.",
  keywords: ["eco homestay", "earthbag dome", "sustainable travel", "Hyderabad retreat", "eco luxury", "nature stay", "organic farm stay", "wellness retreat"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Idika"
  }
};
