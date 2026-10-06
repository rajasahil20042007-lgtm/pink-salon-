export interface ServiceItem {
  id: string;
  name: string;
  category: 'HAIR' | 'COLOR' | 'SKIN' | 'MAKEUP' | 'NAILS';
  description: string;
  included: string;
  price: number;
  duration: string;
  isSignature?: boolean;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: string;
  description: string;
  artist: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: 'square' | 'portrait' | 'landscape';
}

export interface TestimonialItem {
  id: string;
  name: string;
  service: string;
  rating: number;
  quote: string;
  date: string;
}

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
}

export interface SalonConfig {
  salonName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  phone: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  mapsUrl: string;
  openingHours: {
    weekdays: string;
    sunday: string;
  };
  stats: StatItem[];
  services: ServiceItem[];
  transformations: TransformationItem[];
  gallery: GalleryItem[];
  team: TeamMember[];
  testimonials: TestimonialItem[];
  socialLinks: {
    instagram: string;
    facebook: string;
    whatsapp: string;
  };
}

export const SALON_DATA: SalonConfig = {
  salonName: "PINK SALON",
  tagline: "Premium beauty, personalised for you.",
  headline: "Beauty, Refined.",
  subheadline: "Exceptional hair, beauty and self-care experiences designed around you.",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  whatsappRaw: "919876543210",
  email: "hello@pinksalon.in",
  address: "Park Street, Kolkata, West Bengal, India",
  city: "Kolkata",
  state: "West Bengal",
  country: "India",
  pincode: "700016",
  mapsUrl: "https://maps.google.com/?q=Park+Street+Kolkata",
  openingHours: {
    weekdays: "Monday – Saturday: 10:00 AM – 8:00 PM",
    sunday: "Sunday: 11:00 AM – 6:00 PM"
  },
  stats: [
    {
      value: "8+",
      label: "Years Experience",
      subtext: "Master craft & hospitality"
    },
    {
      value: "2,500+",
      label: "Happy Clients",
      subtext: "Delighted transformations"
    },
    {
      value: "15+",
      label: "Beauty Services",
      subtext: "Bespoke treatments"
    },
    {
      value: "4.9/5",
      label: "Client Rating",
      subtext: "Verified guest reviews"
    }
  ],
  services: [
    {
      id: "sig-haircut",
      name: "Signature Haircut",
      category: "HAIR",
      description: "Precision customized haircut tailored to facial architecture and texture.",
      included: "Cut + Wash + Styling",
      price: 999,
      duration: "45 min",
      isSignature: true,
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "hair-color",
      name: "Hair Color",
      category: "COLOR",
      description: "Professional Ammonia-free rich dimension and tonal balancing.",
      included: "Professional Color Treatment",
      price: 2499,
      duration: "120 min",
      isSignature: true,
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "hair-spa",
      name: "Hair Spa",
      category: "HAIR",
      description: "Intensive moisture therapy, scalp massage and cuticle sealing.",
      included: "Deep Nourishment & Repair",
      price: 1499,
      duration: "60 min",
      isSignature: true,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "facial-skincare",
      name: "Facial & Skincare",
      category: "SKIN",
      description: "Targeted botanical peptide revival for luminous, supple skin.",
      included: "Premium Facial Treatment",
      price: 1299,
      duration: "60 min",
      isSignature: true,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "bridal-makeup",
      name: "Bridal Makeup",
      category: "MAKEUP",
      description: "Bespoke HD bridal look with couture draping, lashes, and hair couture.",
      included: "Complete Bridal Look",
      price: 7999,
      duration: "150 min",
      isSignature: true,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nail-care",
      name: "Nail Care",
      category: "NAILS",
      description: "Deluxe cuticle care, exfoliation, massage, and high-shine polish.",
      included: "Manicure & Nail Care",
      price: 799,
      duration: "45 min",
      isSignature: true,
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80"
    },
    // Additional menu items for complete categories
    {
      id: "balayage-foil",
      name: "Balayage & Highlights",
      category: "COLOR",
      description: "Hand-painted sun-kissed dimension with customized gloss finish.",
      included: "Balayage + Toner + Gloss Treatment",
      price: 3999,
      duration: "180 min",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "keratin-smoothing",
      name: "Keratin Smooth Treatment",
      category: "HAIR",
      description: "Frizz elimination and mirror-like silkiness lasting up to 4 months.",
      included: "Infusion + Steam + Thermal Seal",
      price: 4499,
      duration: "150 min",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "radiance-cleanup",
      name: "Radiance Hydra Cleanup",
      category: "SKIN",
      description: "Deep pore ultrasonic extraction with hyaluronic infusion.",
      included: "Cleanse + Gentle Exfoliation + Cold Mask",
      price: 899,
      duration: "40 min",
      image: "https://images.unsplash.com/photo-1512290900672-1f5be670499d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "party-glam",
      name: "Party & Occasion Glam",
      category: "MAKEUP",
      description: "Camera-ready soft glam or sultry evening artistry with contouring.",
      included: "HD Makeup + Hair Styling + Lashes",
      price: 2999,
      duration: "75 min",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gel-extensions",
      name: "Gel Nail Extensions",
      category: "NAILS",
      description: "Sculpted lightweight tips with long-lasting gel overlay and nail art.",
      included: "Sculpting + Custom Shape + Gel Color",
      price: 1999,
      duration: "90 min",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "botanical-pedicure",
      name: "Botanical Spa Pedicure",
      category: "NAILS",
      description: "Therapeutic soak, dead sea salt scrub, reflex pressure massage.",
      included: "Soak + Callus Care + Polish",
      price: 999,
      duration: "50 min",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80"
    }
  ],
  transformations: [
    {
      id: "trans-color",
      title: "Dimensional Hazel Balayage",
      category: "Hair Color",
      description: "Transitioned from brassy warm tones into a luminous, dimensional hazel balayage with seamless blending and gloss.",
      artist: "Ananya Sharma",
      beforeImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
      duration: "3.5 hrs"
    },
    {
      id: "trans-cut",
      title: "Curtain Bangs & French Layers",
      category: "Haircut & Styling",
      description: "Weight reduction and soft frame-contouring layers for naturally voluminous movement.",
      artist: "Ananya Sharma",
      beforeImage: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
      duration: "1 hr"
    },
    {
      id: "trans-bridal",
      title: "Royal Bengali Bridal Aura",
      category: "Bridal Makeup",
      description: "Radiant dewy HD base, intricate Chandan artistry, traditional Kohl gaze, and velvet rose lips.",
      artist: "Meera Kapoor",
      beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
      duration: "2.5 hrs"
    },
    {
      id: "trans-spa",
      title: "Silk Recovery Hair Spa",
      category: "Hair Spa & Repair",
      description: "Deep bonded peptide repair converting heat-damaged brittleness into touchable, light-catching silk.",
      artist: "Riya Sen",
      beforeImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
      duration: "1.5 hrs"
    }
  ],
  team: [
    {
      id: "artist-ananya",
      name: "Ananya Sharma",
      role: "Creative Hair Stylist",
      specialty: "Hair Color & Transformation",
      experience: "9+ Years Experience",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "artist-riya",
      name: "Riya Sen",
      role: "Senior Beauty Artist",
      specialty: "Skin & Beauty Rituals",
      experience: "7+ Years Experience",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "artist-meera",
      name: "Meera Kapoor",
      role: "Makeup Artist",
      specialty: "Bridal & Occasion Makeup",
      experience: "8+ Years Experience",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "artist-arjun",
      name: "Arjun Das",
      role: "Senior Stylist",
      specialty: "Men's Grooming & Styling",
      experience: "6+ Years Experience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    }
  ],
  gallery: [
    {
      id: "gal-1",
      title: "Architectural Interior & Styling Chairs",
      category: "Salon Interior",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape"
    },
    {
      id: "gal-2",
      title: "Editorial Sunlit Balayage Waves",
      category: "Hair Color",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
      aspect: "portrait"
    },
    {
      id: "gal-3",
      title: "Royal Bride Traditional Elegance",
      category: "Bridal Looks",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
      aspect: "square"
    },
    {
      id: "gal-4",
      title: "Minimalist Aesthetic Wash Lounges",
      category: "Salon Interior",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
      aspect: "square"
    },
    {
      id: "gal-5",
      title: "Gloss Finish Precision Cutting",
      category: "Hair Styling",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      aspect: "portrait"
    },
    {
      id: "gal-6",
      title: "Couture Chrome Nail Sculpting",
      category: "Nail Care",
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
      aspect: "landscape"
    },
    {
      id: "gal-7",
      title: "Botanical Facial & Skin Restoration",
      category: "Beauty Treatments",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      aspect: "portrait"
    },
    {
      id: "gal-8",
      title: "Dewy Glow Wedding Reception",
      category: "Bridal Looks",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      aspect: "square"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      name: "Ananya S.",
      service: "Signature Haircut & Color",
      rating: 5,
      quote: "Absolutely loved my transformation. The stylist understood exactly what I wanted and the result was even better than I imagined. The atmosphere is calm, sophisticated, and genuinely welcoming.",
      date: "September 2026"
    },
    {
      id: "test-2",
      name: "Pooja Banerjee",
      service: "Bridal Makeup Package",
      rating: 5,
      quote: "Meera and her team handled my wedding look with so much grace. My makeup lasted throughout the ceremony without feeling heavy or artificial. Everyone complimented the subtle elegance.",
      date: "August 2026"
    },
    {
      id: "test-3",
      name: "Siddharth Roy",
      service: "Hair Spa & Grooming",
      rating: 5,
      quote: "Top-tier hospitality on Park Street. The scalp massage during the hair spa is second to none, and Arjun's styling precision is consistent every single visit.",
      date: "September 2026"
    },
    {
      id: "test-4",
      name: "Debolina Mukherjee",
      service: "Balayage & Treatment",
      rating: 5,
      quote: "I was terrified of coloring my dark hair, but Ananya did a consultation first to check texture. The dimension is radiant and healthy. Truly more than a salon.",
      date: "July 2026"
    }
  ],
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/919876543210"
  }
};
