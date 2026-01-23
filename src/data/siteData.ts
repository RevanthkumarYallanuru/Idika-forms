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
      primary: { label: "Explore Our Stay", href: "/stay" },
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
  }
};

export const rooms = [
  {
    id: 1,
    name: "The Sun-Drenched Dome",
    category: "Signature Suite",
    description: "Experience the signature Idika experience with 360° skylights and natural cooling.",
    fullDescription: "Our flagship dome featuring expansive skylights that fill the space with natural light. The curved earthbag walls create a cocoon-like environment that naturally maintains a comfortable temperature year-round.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&h=600&fit=crop",
        alt: "Luxury dome exterior at golden hour"
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
      { icon: "Sun", title: "360° Skylight", description: "Natural light and stargazing" },
      { icon: "Thermometer", title: "Natural Cooling", description: "24°C year-round without AC" },
      { icon: "Bed", title: "King Bed", description: "Premium organic mattress" },
      { icon: "Waves", title: "Rainwater Shower", description: "Cold and hot water available" },
      { icon: "UtensilsCrossed", title: "Kitchenette", description: "Farm-fresh cooking space" },
      { icon: "Trees", title: "Garden Access", description: "Pick your own herbs" }
    ],
    maxGuests: 5,
    pricing: {
      2: 4000,
      3: 5000,
      4: 7000,
      5: 9000
    },
    gstPercentage: 18,
    highlights: ["Largest dome", "Best for stargazing", "Premium amenities", "Perfect for couples or small groups"]
  },
  {
    id: 2,
    name: "The Forest Whisper",
    category: "Retreat Suite",
    description: "Nestled among trees with forest views and natural ventilation.",
    fullDescription: "Surrounded by native trees, this dome offers the most immersive forest experience. Strategic window placements frame the woodland views while maintaining privacy and natural air circulation.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
        alt: "Treehouse style accommodation"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        alt: "Resort room with forest view"
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
        alt: "Forest deck morning view"
      }
    ],
    youtubeVideoId: "5qap5aO4i9A",
    amenities: [
      { icon: "Trees", title: "Forest Views", description: "Surrounded by native trees" },
      { icon: "Wind", title: "Natural Ventilation", description: "Cross breeze throughout" },
      { icon: "Bed", title: "Queen Bed", description: "Orthopedic organic mattress" },
      { icon: "Droplets", title: "Outdoor Shower", description: "Nature-immersed bathing" },
      { icon: "Flame", title: "Fire Pit Access", description: "Evening gatherings" },
      { icon: "Music", title: "Nature Sounds", description: "Bird calls and wind chimes" }
    ],
    maxGuests: 4,
    pricing: {
      2: 4000,
      3: 5000,
      4: 7000,
      5: 9000
    },
    gstPercentage: 18,
    highlights: ["Best forest experience", "Quietest location", "Great for meditation", "Morning bird watching"]
  },
  {
    id: 3,
    name: "The Horizon Dome",
    category: "Vista Suite",
    description: "Panoramic views of rolling hills and valley landscapes.",
    fullDescription: "Positioned on elevated terrain, this dome offers breathtaking views of the surrounding hills and valleys. Perfect for sunrise and sunset viewing with minimal obstruction.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
        alt: "Luxury hotel with mountain view"
      },
      {
        src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
        alt: "Resort room panorama"
      },
      {
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
        alt: "Bedroom with valley view"
      },
      {
        src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
        alt: "Living space overlooking hills"
      },
      {
        src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
        alt: "Terrace with panoramic views"
      }
    ],
    youtubeVideoId: "lTxn2BuqyzU",
    amenities: [
      { icon: "Mountain", title: "Panoramic Views", description: "360° landscape vistas" },
      { icon: "Eye", title: "Observation Deck", description: "Premium viewing platform" },
      { icon: "Bed", title: "Double Bed", description: "Premium natural fiber mattress" },
      { icon: "MapPin", title: "Location", description: "Elevated position" },
      { icon: "Wind", title: "Gentle Breezes", description: "Cooling valley winds" },
      { icon: "Moon", title: "Astronomy Setup", description: "Telescope provided" }
    ],
    maxGuests: 3,
    pricing: {
      2: 4000,
      3: 5000,
      4: 7000,
      5: 9000
    },
    gstPercentage: 18,
    highlights: ["Best views", "Perfect for photography", "Ideal for couples", "Sunrise/sunset paradise"]
  },
  {
    id: 4,
    name: "The Wellness Sanctuary",
    category: "Spa Suite",
    description: "Dedicated wellness space with spa amenities and meditation areas.",
    fullDescription: "Designed for holistic rejuvenation, this dome includes a dedicated spa area, meditation nook, and wellness features. The layout promotes relaxation and inner peace.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
        alt: "Spa and wellness retreat"
      },
      {
        src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&h=600&fit=crop",
        alt: "Meditation corner setup"
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
        alt: "Luxury spa room"
      },
      {
        src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop",
        alt: "Bathtub with natural products"
      },
      {
        src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
        alt: "Wellness sanctuary entrance"
      }
    ],
    youtubeVideoId: "inpok4MKVLM",
    amenities: [
      { icon: "Heart", title: "Spa Amenities", description: "Massage corner available" },
      { icon: "Smile", title: "Meditation Space", description: "Dedicated yoga area" },
      { icon: "Bed", title: "Platform Bed", description: "Elevated sleeping space" },
      { icon: "Flower2", title: "Aromatherapy", description: "Natural essential oils" },
      { icon: "Waves", title: "Wellness Bath", description: "Deep soaking tub" },
      { icon: "Music", title: "Sound System", description: "Meditation music enabled" }
    ],
    maxGuests: 2,
    pricing: {
      2: 4000,
      3: 5000,
      4: 7000,
      5: 9000
    },
    gstPercentage: 18,
    highlights: ["Wellness focused", "Perfect for solo retreats", "Spa treatments available", "Premium relaxation"]
  },
  {
    id: 5,
    name: "The Family Gathering",
    category: "Group Suite",
    description: "Spacious dome with multiple sleeping areas ideal for families.",
    fullDescription: "Our largest and most versatile dome, featuring multiple sleeping zones, a common living space, and full amenities. Perfect for families or small groups seeking shared experiences.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&h=600&fit=crop",
        alt: "Spacious family suite"
      },
      {
        src: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&h=600&fit=crop",
        alt: "Multiple bed arrangement"
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        alt: "Living and dining area"
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
      { icon: "Users", title: "Family Spaces", description: "Multiple sleeping areas" },
      { icon: "Home", title: "Common Area", description: "Shared living room" },
      { icon: "UtensilsCrossed", title: "Full Kitchen", description: "Group cooking space" },
      { icon: "Bath", title: "Multiple Baths", description: "2 full bathrooms" },
      { icon: "Play", title: "Recreation", description: "Board games and activities" },
      { icon: "Zap", title: "Entertainment", description: "Projector available" }
    ],
    maxGuests: 5,
    pricing: {
      2: 4000,
      3: 5000,
      4: 7000,
      5: 9000
    },
    gstPercentage: 18,
    highlights: ["Largest capacity", "Perfect for families", "Group activities", "Shared experiences"]
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
    category: "Interiors",
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
    category: "Grounds",
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
    category: "Sustainability",
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
