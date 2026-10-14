export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Candid' | 'Pre-Wedding' | 'Rituals & Haldi' | 'Films';
  location: string;
  image: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  source: 'Google Maps' | 'Justdial' | 'Verified Client';
  rating: number;
  date: string;
  text: string;
}

export const BUSINESS_INFO = {
  name: "Anjani Wedding Photography",
  altName: "Anjani Srinu Photography",
  founder: "Srinivas Chary (Srinu)",
  category: "Wedding Photography & Cinematography Studio",
  experienceYears: "22+",
  establishedYear: 2002,
  rating: "5.0",
  reviewCount: "320+",
  phone: "+91 98498 43723",
  formattedPhone: "+91 98498 43723",
  whatsappNumber: "919849843723",
  email: "contact@anjaniweddingphotography.demo", // Editable placeholder
  address: {
    line1: "MJS COMPLEX, 6-5-77/A/1",
    street: "Gandhi Rd, Islampura, Ashoknagar",
    city: "Karimnagar",
    state: "Telangana",
    pincode: "505001",
    full: "MJS COMPLEX, 6-5-77/A/1, Gandhi Rd, Islampura, Ashoknagar, Karimnagar, Telangana 505001"
  },
  links: {
    googleMapsListing: "https://maps.app.goo.gl/JaJf5dRCoV2rNz469",
    googleMapsDirections: "https://www.google.com/maps/dir/?api=1&destination=Anjani+Wedding+Photography,+MJS+COMPLEX,+6-5-77%2FA%2F1,+Gandhi+Rd,+Islampura,+Ashoknagar,+Karimnagar,+Telangana+505001",
    instagram: "https://www.instagram.com/anjani_srinu_photography",
    facebook: "https://www.facebook.com/Anjani-Srinu-Photography",
    whatsappChat: "https://wa.me/919849843723?text=Hello%20Anjani%20Wedding%20Photography!%20I%20am%20interested%20in%20wedding%20photography%20services.%20Please%20share%20availability%20and%20packages."
  },
  operatingHours: "Monday – Sunday: 9:30 AM – 9:00 PM",
  highlights: [
    { title: "22+ Years Legacy", desc: "Capturing love stories across Karimnagar & Telangana since 2002" },
    { title: "5.0 Star Rating", desc: "Trusted by 320+ families with stellar public ratings" },
    { title: "4K Cinematic Films", desc: "State-of-the-art cameras, prime lenses & drone aerial gear" },
    { title: "Master Candid Craft", desc: "Led by Srinu Chary with bespoke candid storytelling" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "candid-wedding",
    title: "Candid Wedding Photography",
    category: "Signature Craft",
    tagline: "Unstaged, raw, and full of heartfelt emotion",
    description: "Capturing real laughter, happy tears, stolen glances, and spontaneous family moments without forced poses.",
    features: ["Dedicated candid master photographer", "High-speed prime glass for low-light mantap ceremonies", "Artistic color grading", "Full resolution digital gallery"],
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    popular: true
  },
  {
    id: "cinematic-films",
    title: "Cinematic Wedding Films & Teasers",
    category: "Cinematography",
    tagline: "Your love story directed like a timeless feature film",
    description: "Ultra HD 4K wedding films with tailored background scores, traditional music weaving, and couple interviews.",
    features: ["4K multi-cam ceremony coverage", "1-minute social media viral teaser", "3-5 min highlight film & full docu-cut", "Licensed emotional audio scoring"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    popular: true
  },
  {
    id: "pre-post-wedding",
    title: "Pre & Post Wedding Romantic Shoots",
    category: "Couples",
    tagline: "Celebrate your chemistry at breathtaking backdrops",
    description: "Casual, artistic, and dreamy shoots at heritage forts, lakes, lush gardens, or contemporary studio setups.",
    features: ["Styling and posture guidance", "Drone aerial perspectives", "Sunset and golden-hour sessions", "Save-The-Date digital invitations"],
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "traditional-photography",
    title: "Traditional Photography & Videography",
    category: "Rituals & Family",
    tagline: "Complete, thorough coverage of every sacred ritual",
    description: "Documenting every guest, family elder blessing, muhurtham timing, and ceremonial detail with clarity.",
    features: ["Full ceremony coverage without missed steps", "Studio lighting for stage and reception", "Crisp audio recording of mantras", "Archival ready delivery"],
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "haldi-mehendi",
    title: "Haldi, Mehendi & Sangeet Celebrations",
    category: "Pre-Functions",
    tagline: "Vibrant yellow splashes, mehendi intricate art, and dance madness",
    description: "High-energy photo and video coverage capturing dance performances, flower showers, and celebration excitement.",
    features: ["Fast-action burst shots for dance moves", "Vibrant festive color enhancement", "Candid moments with cousins and friends", "Same-day photo sneak-peeks"],
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "luxury-albums",
    title: "Luxury Photo Albums & Coffee Table Books",
    category: "Heirloom Prints",
    tagline: "Handcrafted physical albums to cherish for generations",
    description: "Premium lay-flat velvet, leatherette, and metallic photo albums printed on non-tearable archival feather paper.",
    features: ["Custom bespoke layout design", "Scratch-resistant velvet/matte lamination", "Personalized acrylic/leather case", "Lifetime color durability"],
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
  }
];

export const PORTFOLIO_GALLERY: PortfolioItem[] = [
  {
    id: "p1",
    title: "The Royal Muhurtham",
    category: "Weddings",
    location: "Karimnagar Grand Kalyana Mandapam",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80",
    description: "Sacred Jeelakarra Bellam moment captured with golden cinematic back-lighting."
  },
  {
    id: "p2",
    title: "Sunset Whispers",
    category: "Pre-Wedding",
    location: "Lower Manair Dam Shores",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80",
    description: "Golden hour silhouettes reflecting pure affection and playful bond."
  },
  {
    id: "p3",
    title: "Joy of Haldi",
    category: "Rituals & Haldi",
    location: "Ashoknagar Celebrations",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80",
    description: "Unfiltered laughter as turmeric petals shower down on the beaming bride."
  },
  {
    id: "p4",
    title: "Stolen Glance",
    category: "Candid",
    location: "Karimnagar Wedding Palace",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    description: "A tender private smile exchanged across the crowded wedding mandapam."
  },
  {
    id: "p5",
    title: "The Bridal Elegance",
    category: "Weddings",
    location: "Studio & Bridal Suite",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    description: "Intricate temple jewellery, silk saree drape, and graceful timeless portraiture."
  },
  {
    id: "p6",
    title: "Cinematic Drone Aerials",
    category: "Films",
    location: "Heritage Fort Grounds",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
    description: "Sweeping panoramic 4K aerial perspective framing the magnificent marriage procession."
  },
  {
    id: "p7",
    title: "Mehendi Intricacies",
    category: "Rituals & Haldi",
    location: "Karimnagar Residence",
    image: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1000&q=80",
    description: "Delicate henna motifs detailed with macro lens clarity and soft bokeh."
  },
  {
    id: "p8",
    title: "Pure Celebration",
    category: "Candid",
    location: "Sangeet Night Venue",
    image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80",
    description: "High spirited dance choreography and joy frozen in crisp freeze-frame."
  }
];

export const CLIENT_REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    author: "Ramesh & Swapna Reddy",
    role: "Bride & Groom",
    source: "Google Maps",
    rating: 5,
    date: "Recent Wedding",
    text: "Srinu garu and the entire Anjani Wedding Photography team gave us memories for a lifetime! The candid shots captured real expressions that we didn't even notice during the rush. The wedding teaser looked like a Telugu movie teaser!"
  },
  {
    id: "r2",
    author: "Venkatesh Rao",
    role: "Father of the Bride",
    source: "Justdial",
    rating: 5,
    date: "Verified Review",
    text: "Very professional and punctual service in Karimnagar. We have known Anjani Photography for years. All rituals were documented with full respect and patience. Album quality is premium layflat."
  },
  {
    id: "r3",
    author: "Prashanth & Anusha",
    role: "Pre-Wedding & Wedding",
    source: "Google Maps",
    rating: 5,
    date: "Verified Review",
    text: "Best photography studio in Karimnagar without a doubt. Our pre-wedding shoot was super comfortable even though we were camera-shy. They guided us naturally. Highly recommended!"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Friendly Consultation",
    desc: "Connect on WhatsApp or visit our MJS Complex studio to discuss dates, venues, ceremony schedules, and your vision."
  },
  {
    step: "02",
    title: "Personalized Roadmap",
    desc: "We coordinate camera teams, lighting, candid specialists, and drone operators tailored to your family traditions."
  },
  {
    step: "03",
    title: "The Big Day Magic",
    desc: "Unobtrusive, professional documentation from morning rituals to evening reception with cutting-edge equipment."
  },
  {
    step: "04",
    title: "Cinematic Delivery & Albums",
    desc: "Hand-graded photos, teaser edits, 4K films, and luxury heirloom photobooks delivered on time."
  }
];
