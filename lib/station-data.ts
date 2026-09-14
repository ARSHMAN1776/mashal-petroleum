export interface FuelProduct {
  name: string;
  grade: string;
  description: string;
  badge?: string;
}

export interface Amenity {
  title: string;
  description: string;
  iconName: string;
}

export interface StationData {
  id: string;
  brand: "PARCO" | "PSO";
  name: string;
  tagline: string;
  shortAddress: string;
  fullAddress: string;
  city: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  hours: string;
  googleMapsUrl: string;
  embedMapUrl: string;
  theme: {
    primary: string;
    dark: string;
    light: string;
    surface: string;
    border: string;
    text: string;
  };
  fuels: FuelProduct[];
  amenities: Amenity[];
  gallery: {
    src: string;
    alt: string;
    caption: string;
  }[];
}

export const mashalInfo = {
  name: "Mashal Petroleum",
  tagline: "Two forecourts, one standard of integrity.",
  description:
    "Mashal Petroleum is an independent, family-operated fuel retail enterprise in Pakistan. We operate two premier forecourts under official Total PARCO (Khanpur Road, District Rahim Yar Khan) and Pakistan State Oil (Raiwind, Lahore) franchises, bringing verifiable measurement, clean fuels, and well-maintained rest amenities to motorists and commercial fleets.",
  headquarters: "Rahim Yar Khan & Lahore, Punjab, Pakistan",
  centralPhone: "+923286704501",
  centralPhoneDisplay: "0328 6704501",
  centralWhatsApp: "923286704501",
  centralEmail: "management@mashalpetroleum.pk",
  established: "Operating with pride across Punjab",
};

export const parcoStation: StationData = {
  id: "parco",
  brand: "PARCO",
  name: "Mashal Total PARCO Station",
  tagline: "No. 1 Petrol in Rahim Yar Khan & Fuel Excellence on Khanpur Road",
  shortAddress: "Khanpur Road, District Rahim Yar Khan",
  fullAddress: "Khanpur Road, District Rahim Yar Khan, Punjab, Pakistan",
  city: "Rahim Yar Khan",
  phone: "+923286704501",
  phoneDisplay: "0328 6704501",
  whatsapp: "923286704501",
  hours: "Open 24 Hours, 7 Days a Week",
  googleMapsUrl: "https://share.google/l7gvmlbK6ZpSo1mBr",
  embedMapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55833.098296734284!2d70.30138982812498!3d28.4211563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375c713b417c61%3A0x44086050b91e5509!2sRahim%20Yar%20Khan%2C%20Punjab!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk",
  theme: {
    primary: "#C1272D",
    dark: "#961D22",
    light: "#FDF8F7",
    surface: "#FAECEC",
    border: "#F0D0D1",
    text: "#7A1217",
  },
  fuels: [
    {
      name: "PARCO Super Petrol",
      grade: "RON 92",
      description: "Direct refinery-formulated unleaded gasoline for domestic cars and daily commercial commuting.",
      badge: "Everyday Drive",
    },
    {
      name: "PARCO Hi-Octane",
      grade: "RON 97",
      description: "High-octane performance blend designed for modern turbocharged engines, reducing engine knock.",
      badge: "Performance",
    },
    {
      name: "PARCO High-Speed Diesel",
      grade: "Euro 5 Compliant",
      description: "Low-sulfur diesel engineered for high-torque commercial transport, agricultural machinery, and freight.",
      badge: "Commercial Fleet",
    },
  ],
  amenities: [
    {
      title: "M-Mart Convenience",
      description: "Stocked convenience store offering packaged cold refreshments, hot tea, snacks, motor oils, and traveler essentials.",
      iconName: "Store",
    },
    {
      title: "Dedicated Prayer Hall",
      description: "Air-conditioned, carpeted prayer area with clean dedicated ablution (wudu) facilities for men and women.",
      iconName: "Sparkles",
    },
    {
      title: "Clean Restrooms",
      description: "Regularly sanitized and inspected washroom facilities maintained throughout day and night shifts.",
      iconName: "ShieldCheck",
    },
    {
      title: "Digital Air & Water Gauge",
      description: "Accurate tire pressure monitoring and radiator coolant check counter serviced by trained forecourt staff.",
      iconName: "Gauge",
    },
    {
      title: "Lube & Quick Oil Bay",
      description: "TotalEnergies and PARCO genuine lubricants with authorized on-site oil change inspection.",
      iconName: "Wrench",
    },
    {
      title: "Commercial Fleet Fueling",
      description: "Priority high-flow diesel dispensing pumps for trucks, logistics fleets, and passenger buses.",
      iconName: "Truck",
    },
  ],
  gallery: [
    {
      src: "/images/parco/parco-mashaal-night.jpg",
      alt: "Mashal Total PARCO station illuminated at night with red canopy, Excellium totem, and Mashaal brand name on Khanpur Road, Rahim Yar Khan",
      caption: "Mashal Total PARCO flagship forecourt at night with illuminated red canopy and digital dispenser islands.",
    },
    {
      src: "/images/parco/parco-carwash.jpg",
      alt: "Automated Car Wash facility and QUARTZ Auto Service bay with solar rooftop at Mashal Total PARCO Rahim Yar Khan",
      caption: "High-pressure automatic car wash facility and certified TotalEnergies QUARTZ auto service station.",
    },
    {
      src: "/images/parco/parco-day-canopy.jpg",
      alt: "Mashal Total PARCO station daytime forecourt with high-clearance canopy and Excellium dispenser islands in Rahim Yar Khan",
      caption: "Daytime forecourt with multi-lane canopy and Excellium digital dispensers on Khanpur Road.",
    },
    {
      src: "/images/parco/parco-mart.jpg",
      alt: "Mashal Petroleum Welcome 24/7 convenience store with beverage coolers and travel essentials in Rahim Yar Khan",
      caption: "Mashal Petroleum on-site Welcome mart with hot tea, snacks, packaged foods, and lubricants.",
    },
    {
      src: "/images/parco/parco-totem-night.jpg",
      alt: "Total PARCO illuminated totem price board at night showing Hi Super, Hi Octane, Diesel, Excellium, and car wash",
      caption: "Illuminated Total PARCO totem sign displaying certified fuel prices and on-site facilities.",
    },
    {
      src: "/images/parco/parco-day-fueling.jpg",
      alt: "Active vehicle refueling forecourt with passenger car at Total PARCO Excellium dispenser in Rahim Yar Khan",
      caption: "Active day fueling operations with prompt attendant service and wide vehicle turning bay.",
    },
    {
      src: "/images/parco/parco-night-canopy.jpg",
      alt: "Illuminated evening forecourt with red canopy trim and active fueling lanes in Rahim Yar Khan",
      caption: "Night perspective showing illuminated canopy lighting and multi-product dispenser stations.",
    },
  ],
};

export const psoStation: StationData = {
  id: "pso",
  brand: "PSO",
  name: "Mashal PSO Station",
  tagline: "Flagship Pakistan State Oil Forecourt in Raiwind",
  shortAddress: "Raiwind, Lahore",
  fullAddress: "Raiwind Road, Raiwind, Lahore, Punjab, Pakistan",
  city: "Lahore",
  phone: "+923286704501",
  phoneDisplay: "0328 6704501",
  whatsapp: "923286704501",
  hours: "Open 24 Hours, 7 Days a Week",
  googleMapsUrl: "https://maps.google.com/?q=Raiwind+Lahore",
  embedMapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54497.689694294025!2d74.18182745304033!3d31.250523099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919b4cf53b3848b%3A0x6b86bf071c356f9!2sRaiwind%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk",
  theme: {
    primary: "#0B4A2D",
    dark: "#07331F",
    light: "#F5F9F6",
    surface: "#E7F1EB",
    border: "#CBE0D4",
    text: "#083722",
  },
  fuels: [
    {
      name: "Altron Premium Euro 5",
      grade: "RON 92",
      description: "Clean combustion petrol engineered with additive technology to clean injectors and preserve engine life.",
      badge: "Core Fuel",
    },
    {
      name: "Altron X High Octane",
      grade: "RON 97",
      description: "Flagship high-octane formulation for luxury SUVs, German sedans, and high-compression powertrains.",
      badge: "High Performance",
    },
    {
      name: "Action+ High Speed Diesel",
      grade: "Euro 5 Specification",
      description: "Cetane-boosted heavy-duty diesel designed for freight, transit buses, and industrial generators.",
      badge: "Heavy Duty",
    },
  ],
  amenities: [
    {
      title: "Shop Stop Express",
      description: "Comprehensive convenience outlet featuring hot chai, fresh bottled beverages, road snacks, and personal goods.",
      iconName: "ShoppingBag",
    },
    {
      title: "24/7 ATM Cash Point",
      description: "Secure, on-site linked banking ATM available for motorists and long-distance drivers round the clock.",
      iconName: "CreditCard",
    },
    {
      title: "PSO Fleet & Card Terminal",
      description: "Full integration with PSO Fleet Cards, corporate billing, and all major debit/credit networks.",
      iconName: "Wallet",
    },
    {
      title: "Masjid & Ablution Facility",
      description: "Spacious, peaceful on-site mosque area with dedicated wudu station for regular and travelers' prayer.",
      iconName: "Building2",
    },
    {
      title: "Sanitized Restrooms",
      description: "Separated male and female facilities maintained on an hourly cleaning roster by dedicated attendants.",
      iconName: "CheckCircle2",
    },
    {
      title: "Heavy Vehicle Forecourt Lane",
      description: "Extra-wide turning radius and dedicated high-clearance canopy designed for trucks, buses, and containers.",
      iconName: "Container",
    },
  ],
  gallery: [
    {
      src: "/images/pso/pso-night-full.jpg",
      alt: "Mashal PSO Station night view with illuminated canopy, crescent on roof, digital fuel dispensers, and Shop Stop in Raiwind, Lahore",
      caption: "Mashal PSO flagship forecourt at night with illuminated canopy, Shop Stop, and digital dispensers in Raiwind, Lahore.",
    },
    {
      src: "/images/pso/pso-day-forecourt.jpg",
      alt: "Daytime perspective of Mashal PSO forecourt showing fuel dispenser islands, totem sign, and vehicle parking",
      caption: "Daytime view of multi-lane fuel islands, totem signage, and transit parking.",
    },
  ],
};

export const whyChooseUs = [
  {
    title: "Direct Refinery Sourcing & Seal Integrity",
    description:
      "Every fuel drop is sourced straight from state-authorized PARCO and PSO supply terminals under strict seals. We do not blend, dilute, or purchase secondary wholesale stock.",
  },
  {
    title: "Certified Digital Volume Calibration",
    description:
      "Our multi-product dispensers undergo routine physical calibration tests using certified measures, ensuring that the volume printed on your receipt is exactly what enters your fuel tank.",
  },
  {
    title: "Accountable, Permanent Forecourt Staff",
    description:
      "Our station managers, cashiers, and attendants are permanent members of our team, trained to serve with dignity, honesty, and prompt attention.",
  },
];
