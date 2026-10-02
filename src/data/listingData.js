export const listingData = {
  id: "ug10-candolim-mirashya",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  subtitle: "Entire serviced apartment in Candolim, India",
  propertyType: "Entire serviced apartment",
  location: "Candolim, Goa, India",
  rating: 4.92,
  reviewCount: 24,
  isGuestFavorite: true,
  isSuperhost: true,
  basePrice: 4850,
  currency: "₹",
  cleaningFee: 950,
  serviceFeeRate: 0.14,
  taxesRate: 0.12,
  guestDiscountRate: 0.10, // 10% promo
  
  stats: {
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1
  },

  host: {
    name: "Mirashya Homes",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    isSuperhost: true,
    yearsHosting: 3,
    coHosts: ["Sagar", "Priya"],
    responseRate: "100%",
    responseTime: "within an hour"
  },

  highlights: [
    {
      icon: "Sparkles",
      title: "Guest favourite",
      description: "One of the most loved homes on Airbnb based on ratings, reviews and reliability."
    },
    {
      icon: "Wifi",
      title: "Fast wifi",
      description: "At 120 Mbps, you can take video calls and stream videos for your whole group."
    },
    {
      icon: "Key",
      title: "Self check-in",
      description: "Check yourself in with the digital keypad door lock."
    },
    {
      icon: "Calendar",
      title: "Free cancellation before 48 hours",
      description: "Get a full refund if you change your mind prior to check-in."
    }
  ],

  description: `Escape to our designer romantic 1BHK sanctuary in Candolim, Goa. Specially curated for couples and discerning travelers seeking luxury, privacy, and serene relaxation.

Nestled inside the prestigious Botanica gated enclave, this retreat features your own private outdoor heated jacuzzi on a screened terrace, high-speed WiFi, modern climate control, a fully equipped modular kitchen, and access to a massive shared lap pool and fitness gym. 

Stroll just 800 meters to the pristine sands of Candolim Beach or explore world-class cafes, beach shacks, and vibrant nightlife within minutes.`,

  sleepingArrangements: [
    {
      roomName: "Bedroom",
      bedType: "1 queen bed",
      icon: "BedDouble",
      description: "Plush orthopedic mattress with 400-thread-count Egyptian cotton linens."
    }
  ],

  amenities: [
    {
      category: "Standout amenities",
      items: [
        { name: "Private Jacuzzi / Hot tub", icon: "bath", note: "Heated outdoor jacuzzi on your private terrace" },
        { name: "Shared resort swimming pool", icon: "pool", note: "Large lap pool with loungers" },
        { name: "Gymnasium / Fitness centre", icon: "gym", note: "Fully equipped Botanica gym" },
        { name: "Self check-in with keypad", icon: "lock" },
      ]
    },
    {
      category: "Bedroom and laundry",
      items: [
        { name: "Queen bed with premium linens", icon: "bed" },
        { name: "Washing machine", icon: "star" },
        { name: "Hangers & wardrobe storage", icon: "star" },
        { name: "Iron & ironing board", icon: "star" },
      ]
    },
    {
      category: "Kitchen and dining",
      items: [
        { name: "Fully equipped kitchen", icon: "kitchen" },
        { name: "Refrigerator & Freezer", icon: "kitchen" },
        { name: "Microwave oven", icon: "kitchen" },
        { name: "Induction stove & cookware", icon: "kitchen" },
        { name: "Coffee maker & electric kettle", icon: "coffee" },
        { name: "Wine glasses", icon: "star" },
      ]
    },
    {
      category: "Bathroom",
      items: [
        { name: "Walk-in rain shower", icon: "bath" },
        { name: "Hair dryer", icon: "bath" },
        { name: "Shampoo, conditioner & body soap", icon: "bath" },
        { name: "Hot water", icon: "heat" },
        { name: "Bathtub", icon: "bath", unavailable: true },
      ]
    },
    {
      category: "Entertainment",
      items: [
        { name: '55" 4K Smart TV', icon: "tv", note: "Netflix, Prime Video & more" },
        { name: "High-speed Wi-Fi (120 Mbps)", icon: "wifi" },
        { name: "Bluetooth sound system", icon: "star" },
        { name: "Game console", icon: "star", unavailable: true },
      ]
    },
    {
      category: "Outdoor",
      items: [
        { name: "Private balcony terrace", icon: "outdoor" },
        { name: "Outdoor furniture & sun loungers", icon: "outdoor" },
        { name: "BBQ grill", icon: "outdoor", unavailable: true },
      ]
    },
    {
      category: "Heating and cooling",
      items: [
        { name: "Dual-zone Air conditioning", icon: "ac" },
        { name: "Ceiling fans", icon: "fan" },
      ]
    },
    {
      category: "Parking and facilities",
      items: [
        { name: "Free allocated parking", icon: "parking" },
        { name: "Elevator in building", icon: "luggage" },
        { name: "EV charger", icon: "power", unavailable: true },
      ]
    },
    {
      category: "Safety",
      items: [
        { name: "Smoke alarm", icon: "security" },
        { name: "Carbon monoxide alarm", icon: "security" },
        { name: "Fire extinguisher", icon: "security" },
        { name: "First aid kit", icon: "security" },
        { name: "24/7 Gated security", icon: "security" },
      ]
    },
  ],

  categories: [
    {
      id: "living-1",
      name: "Living room 1",
      emoji: "🛋️",
      coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=300&q=75",
      amenities: ["Sofa", "Air conditioning", "Ceiling fan", "TV", "Warm ambient lighting"],
      photos: [
        {
          id: "p1",
          url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=75",
          title: "Living room 1",
          caption: "Spacious living area featuring custom wicker seating, natural stone wall, and recessed spotlighting."
        },
        {
          id: "p2",
          url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=75",
          title: "Living room 1",
          caption: "Warm ambiance with minimalist designer furniture and indoor greenery."
        },
        {
          id: "p3",
          url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=75",
          title: "Living room 1",
          caption: "Handcrafted coffee table, textured rug, and soothing earthy decor."
        }
      ]
    },
    {
      id: "living-2",
      name: "Living room 2",
      emoji: "🪴",
      coverImage: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=300&q=75",
      amenities: ["Comfortable lounge seating", "Reading nook", "Terrace view"],
      photos: [
        {
          id: "p4",
          url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=75",
          title: "Living room 2",
          caption: "Sunlit lounge area opening directly to the private terrace."
        },
        {
          id: "p5",
          url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=75",
          title: "Living room 2",
          caption: "Evening mood lighting across the living and lounge corner."
        }
      ]
    },
    {
      id: "kitchen",
      name: "Full kitchen",
      emoji: "👨‍🍳",
      coverImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=300&q=75",
      amenities: ["Refrigerator", "Microwave", "Stove", "Cooking basics", "Electric kettle", "Dining counter"],
      photos: [
        {
          id: "p6",
          url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=75",
          title: "Full kitchen",
          caption: "Modern kitchen equipped with induction hob, cookware, and sleek cabinetry."
        },
        {
          id: "p7",
          url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=75",
          title: "Full kitchen",
          caption: "Spacious countertop setup with complimentary tea, coffee, and mineral water."
        }
      ]
    },
    {
      id: "bedroom",
      name: "Bedroom",
      emoji: "🛏️",
      coverImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=300&q=75",
      amenities: ["Queen bed", "Air conditioning", "Ceiling fan", "Wardrobe", "Ensuite access", "Reading lamps"],
      photos: [
        {
          id: "p8",
          url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=75",
          title: "Bedroom",
          caption: "Tranquil master bedroom with premium queen mattress and soft luxury linens."
        },
        {
          id: "p9",
          url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=75",
          title: "Bedroom",
          caption: "Warm ambient bed lighting and designer wooden side tables."
        },
        {
          id: "p10",
          url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=75",
          title: "Bedroom",
          caption: "Full view of the master bedroom suite and spacious closet area."
        }
      ]
    },
    {
      id: "bathroom",
      name: "Full bathroom",
      emoji: "🚿",
      coverImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=75",
      amenities: ["Walk-in shower", "Hot water", "Vanity mirror", "Hair dryer", "Toiletries provided"],
      photos: [
        {
          id: "p11",
          url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=75",
          title: "Full bathroom",
          caption: "Immaculate tiled bathroom with glass rain shower and heated water."
        },
        {
          id: "p12",
          url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=75",
          title: "Full bathroom",
          caption: "Backlit vanity mirror and plush organic cotton towels."
        }
      ]
    },
    {
      id: "gym",
      name: "Gym",
      emoji: "🏋️",
      coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=300&q=75",
      amenities: ["Treadmill", "Elliptical", "Free weights & Dumbbells", "Yoga mats", "Air conditioned"],
      photos: [
        {
          id: "p13",
          url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=75",
          title: "Gym",
          caption: "Botanica resident fitness center with modern cardio and weight machines."
        }
      ]
    },
    {
      id: "exterior",
      name: "Exterior",
      emoji: "🏡",
      coverImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=300&q=75",
      amenities: ["Botanica building facade", "Private balconies", "Tropical gardens", "Gated security 24/7"],
      photos: [
        {
          id: "p14",
          url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=75",
          title: "Exterior",
          caption: "The elegant Botanica by Raichandani residential community in Candolim."
        },
        {
          id: "p15",
          url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=75",
          title: "Exterior",
          caption: "Lush tropical palm tree landscaping surrounding the property."
        }
      ]
    },
    {
      id: "pool",
      name: "Pool",
      emoji: "🏊",
      coverImage: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=300&q=75",
      amenities: ["Shared lap pool", "Sunbathing loungers", "Poolside showers", "Pool towels"],
      photos: [
        {
          id: "p16",
          url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=75",
          title: "Pool",
          caption: "Large sparkling swimming pool surrounded by greenery and private cabanas."
        },
        {
          id: "p17",
          url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=75",
          title: "Pool",
          caption: "Peaceful afternoon relaxation by the poolside sun loungers with resort ambiance."
        },
        {
          id: "p17b",
          url: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=600&q=75",
          title: "Pool",
          caption: "Crystal clear pool waters under the sunny Goa tropical sky."
        }
      ]
    },
    {
      id: "additional",
      name: "Jacuzzi & Views",
      emoji: "🛁",
      coverImage: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=300&q=75",
      amenities: ["Private Jacuzzi", "Terrace view", "Candolim neighborhood", "Atmospheric evening lights"],
      photos: [
        {
          id: "p18",
          url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=75",
          title: "Private Jacuzzi",
          caption: "The signature romantic private heated jacuzzi on your terrace under starlit Goa skies."
        },
        {
          id: "p19",
          url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=75",
          title: "Private Jacuzzi",
          caption: "Therapeutic water jets and soothing aromatherapy ambiance."
        },
        {
          id: "p20",
          url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=85",
          thumbnail: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=75",
          title: "Candolim Sunset",
          caption: "Golden hour sunset along the nearby Candolim beach, just an 8-minute walk away."
        }
      ]
    }
  ],

  // 5 Hero Photos matching reference exactly
  heroPhotos: [
    {
      id: "hero-1",
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      title: "Living Room with Natural Stone Wall and Wicker Chairs",
      category: "Living room 1"
    },
    {
      id: "hero-2",
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      title: "Cozy Living and Lounge Corner",
      category: "Living room 1"
    },
    {
      id: "hero-3",
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80",
      title: "Private Outdoor Heated Jacuzzi",
      category: "Additional photos"
    },
    {
      id: "hero-4",
      url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
      title: "Master Bedroom with Queen Bed",
      category: "Bedroom"
    },
    {
      id: "hero-5",
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      title: "Botanica Residence Exterior & Grounds",
      category: "Exterior"
    }
  ],

  reviews: {
    overall: 4.92,
    totalCount: 24,
    categories: [
      { name: "Cleanliness", rating: 4.9 },
      { name: "Accuracy", rating: 5.0 },
      { name: "Communication", rating: 5.0 },
      { name: "Location", rating: 4.8 },
      { name: "Check-in", rating: 4.9 },
      { name: "Value", rating: 4.9 }
    ],
    items: [
      {
        id: "r1",
        author: "Arjun Mehta",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        location: "Mumbai, India",
        date: "January 2026",
        rating: 5,
        content: "Mirashya UG10 exceeded our expectations! The private jacuzzi on the terrace was blissful after days exploring North Goa. Spotless apartment, super comfortable bed, and the host team responded within 5 minutes to every query."
      },
      {
        id: "r2",
        author: "Sarah Jenkins",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        location: "London, UK",
        date: "December 2025",
        rating: 5,
        content: "A hidden romantic gem in Candolim! The property looks even better than the photos. Very peaceful community, yet only minutes from the beach and phenomenal restaurants. Would definitely stay again!"
      },
      {
        id: "r3",
        author: "Rohan & Sneha",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        location: "Bengaluru, India",
        date: "November 2025",
        rating: 5,
        content: "The jacuzzi is absolutely the highlight! Very clean, well maintained, and private. The high-speed internet allowed us to work smoothly while enjoying a workation. Highly recommended for couples."
      },
      {
        id: "r4",
        author: "Elena Rostova",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
        location: "Berlin, Germany",
        date: "October 2025",
        rating: 5,
        content: "Beautifully styled apartment, great pool in the complex, and easy self-checkin. Mirashya was an outstanding superhost. 10/10 experience in Goa!"
      }
    ]
  },

  houseRules: [
    { icon: "Clock", title: "Check-in: 2:00 PM – 10:00 PM" },
    { icon: "Clock", title: "Checkout before 11:00 AM" },
    { icon: "Users", title: "2 guests maximum" },
    { icon: "ShieldAlert", title: "No smoking inside the apartment" },
    { icon: "VolumeX", title: "Quiet hours: 10:00 PM – 8:00 AM" },
    { icon: "Heart", title: "Couple-friendly & Local IDs accepted" }
  ]
};

// Flattened list of all gallery photos for rapid indexing and lightbox navigation
export const allGalleryPhotos = listingData.categories.flatMap(cat => 
  cat.photos.map(photo => ({
    ...photo,
    categoryName: cat.name,
    categoryId: cat.id
  }))
);
