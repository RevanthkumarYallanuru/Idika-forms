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
    title: "Return to Earth",
    description: "Discover sustainable luxury at Idika — where earthbag architecture meets modern comfort, just moments from Hyderabad.",
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
      highlight: "Natural"
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
    description: "Idika was born from a simple question: what if luxury meant living in harmony with nature, not despite it?"
  },
  story: {
    title: "Interior Warmth & Privacy",
    paragraphs: [
      "Every corner of Idika is designed with intention. Natural light filters through strategically placed openings, while earthen walls create intimate, cocoon-like spaces.",
      "Our philosophy is simple: true luxury is found in sustainable living, in waking to birdsong rather than alarms, in spaces that breathe with the earth."
    ]
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
        icon: "🏊"
      },
      {
        title: "Community Kitchen",
        description: "Well-equipped kitchen for self-cooking with all essential amenities.",
        icon: "👨‍🍳"
      },
      {
        title: "Spacious Dining Area",
        description: "Comfortable dining space perfect for group meals and conversations.",
        icon: "🍽️"
      },
      {
        title: "Open Lawn",
        description: "Expansive open lawn perfect for relaxation and gatherings.",
        icon: "🌿"
      },
      {
        title: "Music System",
        description: "Quality music system available in common areas for entertainment.",
        icon: "🎵"
      },
      {
        title: "Projector",
        description: "Projector setup for movie nights and group screenings.",
        icon: "🎬"
      },
      {
        title: "Indoor Board Games",
        description: "Collection of board games for fun indoor activities.",
        icon: "🎲"
      },
      {
        title: "Outdoor Games",
        description: "Cricket, badminton, and other outdoor games available.",
        icon: "🏏"
      }
    ]
  },
  gstPercentage: 18
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
    id: "candle-light-dinner",
    name: "Candle Light Dinner",
    price: 2500,
    icon: "🕯️",
    features: [
      "Romantic setup with candles & flowers",
      "3-course gourmet meal for 2",
      "Premium non-alcoholic beverages",
      "Dedicated service staff",
      "Personalized menu options available",
      "Scenic outdoor or private deck location"
    ]
  },
  {
    id: "birthday-celebration",
    name: "Birthday Celebration",
    price: 3000,
    icon: "🎂",
    features: [
      "Customized birthday decoration",
      "Theme-based balloon setup",
      "Premium birthday cake (1 kg)",
      "Photo props & accessories",
      "Birthday banner with name",
      "Confetti & party poppers",
      "Birthday cap for the guest of honor"
    ]
  },
  {
    id: "anniversary-decor",
    name: "Anniversary / Special Event Decor",
    price: 3500,
    icon: "💐",
    features: [
      "Elegant floral arrangements",
      "Romantic lighting setup",
      "Heart-shaped balloon decoration",
      "Rose petal bed decoration",
      "Customized banner",
      "Champagne or sparkling juice",
      "Photo corner setup",
      "Complimentary couple photoshoot (30 mins)"
    ]
  }
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
  priceNote: string;
}

export const eventTypes: EventType[] = [
  {
    id: "parties",
    name: "Parties",
    description: "Host memorable get-togethers with friends and family in our serene natural setting.",
    icon: "🎉",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
    tags: ["#PrivateParties", "#NatureEvents"],
    basePrice: 15000,
    priceNote: "Basic package • Customizations available"
  },
  {
    id: "birthday",
    name: "Birthday Celebrations",
    description: "Make birthdays special with nature as your backdrop. Perfect for all ages.",
    icon: "🎂",
    image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&h=600&fit=crop",
    tags: ["#BirthdayCelebrations", "#NatureEvents"],
    basePrice: 12000,
    priceNote: "Basic package • Customizations available"
  },
  {
    id: "pre-wedding",
    name: "Pre-Wedding Shoots",
    description: "Capture your love story amidst lush greenery, rustic domes, and golden sunsets.",
    icon: "📸",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    tags: ["#PreWeddingShoot", "#WeddingsAtIdika"],
    basePrice: 10000,
    priceNote: "Location fee only • Customizations available"
  },
  {
    id: "wedding",
    name: "Wedding Celebrations",
    description: "Exchange vows surrounded by nature. An intimate, earthy celebration of love.",
    icon: "💒",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
    tags: ["#WeddingsAtIdika", "#NatureEvents"],
    basePrice: 50000,
    priceNote: "Basic package • Customizations available"
  },
  {
    id: "private-gathering",
    name: "Private Gatherings",
    description: "Corporate retreats, family reunions, or friend circles—find your space here.",
    icon: "👥",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
    tags: ["#PrivateParties", "#NatureEvents"],
    basePrice: 20000,
    priceNote: "Basic package • Customizations available"
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
    suitableFor: ["Weddings", "Receptions", "Large Celebrations", "Pre-Wedding Shoots"],
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

export const rooms = [
  {
    id: 1,
    name: "Tvara",
    category: "Regular Dome",
    description: "Experience tranquility in our air-conditioned dome with plush bedding and modern amenities.",
    fullDescription: "Tvara offers a perfect blend of comfort and nature. This air-conditioned dome features a plush bed with bunk bed options, a spacious bathroom with natural bathing tub, and high-speed Wi-Fi connectivity for your convenience.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&h=600&fit=crop",
        alt: "Tvara dome exterior"
      },
      {
        src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop",
        alt: "Cozy bedroom with natural lighting"
      },
      {
        src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
        alt: "Modern interior with warm tones"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        alt: "Spacious bedroom with skylight"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        alt: "Private deck with garden view"
      }
    ],
    youtubeVideoId: "dQw4w9WgXcQ",
    amenities: [
      { icon: "Wind", title: "Air-conditioned Dome", description: "Climate controlled comfort" },
      { icon: "Bed", title: "Plush Bed with Bunk Bed", description: "Comfortable sleeping arrangements" },
      { icon: "Bath", title: "Spacious Bathroom", description: "Natural bathing tub included" },
      { icon: "Zap", title: "High-speed 4G/5G Wi-Fi", description: "Stay connected always" }
    ],
    maxGuests: 5,
    baseGuests: 2,
    basePrice: 7000,
    extraGuestCharge: 1000,
    gstPercentage: 18,
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
        src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
        alt: "Neer dome exterior"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        alt: "Resort room with serene view"
      },
      {
        src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop",
        alt: "Peaceful bedroom retreat"
      },
      {
        src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop",
        alt: "Natural bathroom design"
      },
      {
        src: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?w=800&h=600&fit=crop",
        alt: "Morning deck view"
      }
    ],
    youtubeVideoId: "5qap5aO4i9A",
    amenities: [
      { icon: "Wind", title: "Air-conditioned Dome", description: "Climate controlled comfort" },
      { icon: "Bed", title: "Plush Bed with Bunk Bed", description: "Comfortable sleeping arrangements" },
      { icon: "Bath", title: "Spacious Bathroom", description: "Natural bathing tub included" },
      { icon: "Zap", title: "High-speed 4G/5G Wi-Fi", description: "Stay connected always" }
    ],
    maxGuests: 5,
    baseGuests: 2,
    basePrice: 7000,
    extraGuestCharge: 1000,
    gstPercentage: 18,
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
        src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
        alt: "Vana dome exterior"
      },
      {
        src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
        alt: "Room with forest view"
      },
      {
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
        alt: "Bedroom with nature views"
      },
      {
        src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
        alt: "Living space with greenery"
      },
      {
        src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
        alt: "Terrace with garden views"
      }
    ],
    youtubeVideoId: "lTxn2BuqyzU",
    amenities: [
      { icon: "Wind", title: "Air-conditioned Dome", description: "Climate controlled comfort" },
      { icon: "Bed", title: "Plush Bed with Bunk Bed", description: "Comfortable sleeping arrangements" },
      { icon: "Bath", title: "Spacious Bathroom", description: "Natural bathing tub included" },
      { icon: "Zap", title: "High-speed 4G/5G Wi-Fi", description: "Stay connected always" }
    ],
    maxGuests: 5,
    baseGuests: 2,
    basePrice: 7000,
    extraGuestCharge: 1000,
    gstPercentage: 18,
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
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
        alt: "Oorja dome exterior"
      },
      {
        src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&h=600&fit=crop",
        alt: "Wellness corner setup"
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
        alt: "Luxury room interior"
      },
      {
        src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop",
        alt: "Bathtub with natural products"
      },
      {
        src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
        alt: "Dome entrance"
      }
    ],
    youtubeVideoId: "inpok4MKVLM",
    amenities: [
      { icon: "Wind", title: "Air-conditioned Dome", description: "Climate controlled comfort" },
      { icon: "Bed", title: "Plush Bed with Bunk Bed", description: "Comfortable sleeping arrangements" },
      { icon: "Bath", title: "Spacious Bathroom", description: "Natural bathing tub included" },
      { icon: "Zap", title: "High-speed 4G/5G Wi-Fi", description: "Stay connected always" }
    ],
    maxGuests: 5,
    baseGuests: 2,
    basePrice: 7000,
    extraGuestCharge: 1000,
    gstPercentage: 18,
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
        src: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&h=600&fit=crop",
        alt: "Antara large dome exterior"
      },
      {
        src: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&h=600&fit=crop",
        alt: "Multiple bed arrangement"
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        alt: "Living and gathering area"
      },
      {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        alt: "Modern bathroom facilities"
      },
      {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        alt: "Outdoor deck for groups"
      }
    ],
    youtubeVideoId: "L_LUpnjgPso",
    amenities: [
      { icon: "Home", title: "Extra-spacious Dome", description: "Perfect for groups" },
      { icon: "Bed", title: "Large Bed + Huge Bunk Bed", description: "Ample sleeping space" },
      { icon: "Wind", title: "Air-conditioned Comfort", description: "Climate controlled" },
      { icon: "Bath", title: "Spacious Bathroom", description: "Natural bathing tub included" }
    ],
    maxGuests: 8,
    baseGuests: 6,
    basePrice: 12000,
    extraGuestCharge: 1000,
    gstPercentage: 18,
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
    description: "Whether you seek stillness or exploration, every experience at Idika is designed to reconnect you with nature and yourself."
  },
  experiences: [
    {
      title: "Sunrise Yoga",
      description: "Begin your day on our open lawn as the sun rises over the hills.",
      duration: "90 minutes"
    },
    {
      title: "Farm-to-Table Cooking",
      description: "Harvest from our garden and learn to prepare traditional Telangana cuisine.",
      duration: "3 hours"
    },
    {
      title: "Nature Walks",
      description: "Guided walks through the surrounding forests, identifying native flora and fauna.",
      duration: "2 hours"
    },
    {
      title: "Stargazing",
      description: "No light pollution means crystal-clear night skies. Telescope provided.",
      duration: "Open-ended"
    },
    {
      title: "Pottery Workshop",
      description: "Work with local clay to create your own earthen vessel to take home.",
      duration: "2 hours"
    },
    {
      title: "Digital Detox",
      description: "Lock away your devices and rediscover presence. Journaling materials provided.",
      duration: "Full stay"
    }
  ]
};

export const galleryImages = [
  {
    id: 1,
    title: "Dome Exterior at Dusk",
    category: "Architecture",
    alt: "Earthbag dome structure glowing at sunset"
  },
  {
    id: 2,
    title: "Interior Sanctuary",
    category: "Architecture",
    alt: "Warm bedroom interior with natural lighting"
  },
  {
    id: 3,
    title: "Natural Pool",
    category: "Amenities",
    alt: "Chemical-free pool surrounded by native plants"
  },
  {
    id: 4,
    title: "Open Lawns",
    category: "Amenities",
    alt: "Expansive green spaces at golden hour"
  },
  {
    id: 5,
    title: "Sunrise View",
    category: "Views",
    alt: "Misty sunrise over the Ananthagiri hills"
  },
  {
    id: 6,
    title: "Organic Garden",
    category: "Experiences",
    alt: "Herb and vegetable garden with morning dew"
  },
  {
    id: 7,
    title: "Evening Gathering",
    category: "Experiences",
    alt: "Guests gathered around a fire pit under stars"
  },
  {
    id: 8,
    title: "Earthen Details",
    category: "Architecture",
    alt: "Close-up of earthbag wall texture and craftsmanship"
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
  greeting: "Welcome to Idika! I'm here to help you plan your eco-retreat. What would you like to know?",
  quickReplies: [
    "Tell me about Idika",
    "How do I book?",
    "What's included?",
    "Sustainability practices"
  ],
  faqs: [
    {
      question: "What is Idika?",
      answer: "Idika is an eco-friendly earthbag dome homestay near Hyderabad. We offer a unique blend of sustainable architecture and luxury hospitality, perfect for those seeking a peaceful retreat in nature."
    },
    {
      question: "How do I book a stay?",
      answer: "You can book directly through our website by visiting the 'Plan Your Stay' page, or contact us via email at hello@idika.in or WhatsApp. We recommend booking at least 2 weeks in advance."
    },
    {
      question: "What's included in my stay?",
      answer: "Your stay includes accommodation in our earthbag dome, breakfast, farm-to-table dinner, access to the natural pool, organic garden, and common areas. Experiences like yoga and nature walks can be added."
    },
    {
      question: "How do you practice sustainability?",
      answer: "Everything at Idika is designed for minimal impact: earthbag construction, 100% solar power, rainwater harvesting, greywater recycling, organic gardens, and a zero-waste kitchen philosophy."
    },
    {
      question: "Where is Idika located?",
      answer: "We're located near Ananthagiri Hills, approximately 90 minutes from Hyderabad city center. Detailed directions are provided upon booking."
    },
    {
      question: "Is the dome suitable for couples?",
      answer: "Absolutely! Idika is perfect for couples seeking a romantic, peaceful getaway. The dome offers complete privacy with stunning views and intimate spaces."
    },
    {
      question: "What's the best time to visit?",
      answer: "Idika is beautiful year-round. October to March offers pleasant weather, while monsoon season (July-September) brings lush greenery. The earthbag dome maintains a comfortable temperature in all seasons."
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
        { label: "Stay", href: "/stay" },
        { label: "Sustainability", href: "/sustainability" },
        { label: "Experiences", href: "/experiences" }
      ]
    },
    {
      title: "Connect",
      links: [
        { label: "Gallery", href: "/gallery" },
        { label: "Reviews", href: "/reviews" },
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
