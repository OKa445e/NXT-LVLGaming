// NEXT LVL Gaming Cafe - Website Configuration

export const siteDetails = {
  brand: "NEXT LVL",
  primaryPhone: "9990870608",
  secondaryPhone: "7428771081",
  whatsappNumber: "919990870608",
  address:
    "Rishab Homes, 4/13, Sector 2, Rajendra Nagar, Sahibabad, Ghaziabad, Uttar Pradesh 201005",
  openingHours: "",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rishab+Homes%2C+4%2F13%2C+Sector+2%2C+Rajendra+Nagar%2C+Sahibabad%2C+Ghaziabad%2C+Uttar+Pradesh+201005",
  instagramUrl: "https://www.instagram.com/next_lvl_gamers/",
  email: "nextlvlgaming2026@gmail.com",
};

export const navItems = [
  ["HOME", "#home"],
  ["GAMING ZONES", "#zones"],
  ["PRICING", "#pricing"],
  ["THE EXPERIENCE", "#experience"],
  ["GALLERY", "#gallery"],
  ["CONTACT", "#contact"],
];

export function whatsappLink(
  message = "Hi NEXT LVL! I would like to know more about gaming, pricing and slot availability.",
) {
  return `https://wa.me/${siteDetails.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function emailEnquiryLink() {
  const subject = encodeURIComponent("Gaming enquiry for NEXT LVL");
  const body = encodeURIComponent(
    "Hi NEXT LVL,\n\nI would like to enquire about your gaming services and availability.\n\nThank you.",
  );

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteDetails.email)}&su=${subject}&body=${body}`;
}

// GAMING ZONES

export const gamingZones = [
  {
    number: "01",
    title: "PS5",
    subtitle: "NEXT-GEN ARENA",
    description:
      "Experience next-generation gaming with stunning visuals, immersive gameplay and exciting challenges with your friends.",
    icon: "gamepad",
    accent: "cyan",
    tags: ["Next-gen gaming", "Exclusive experiences"],
  },
  {
    number: "02",
    title: "PS4",
    subtitle: "CLASSIC PLAY ZONE",
    description:
      "Revisit fan-favourite games, enjoy classic multiplayer battles and create unforgettable gaming moments with your squad.",
    icon: "gamepad",
    accent: "purple",
    tags: ["Fan-favourite titles", "Classic battles"],
  },
  {
    number: "03",
    title: "PC GAMING",
    subtitle: "ULTIMATE PC ARENA",
    description:
      "Enter the gaming arena, sharpen your skills and experience competitive PC gaming with your squad.",
    icon: "monitor",
    accent: "purple",
    tags: ["PC gaming", "Competitive play"],
  },
  {
    number: "04",
    title: "RACING SIMULATOR",
    subtitle: "DRIVER MODE",
    description:
      "Take the wheel, hit the track and experience the thrill of virtual racing. Every turn brings a new challenge.",
    icon: "car",
    accent: "pink",
    tags: ["Racing experience", "Time trials"],
  },
  {
    number: "05",
    title: "MULTIPLAYER",
    subtitle: "SQUAD UP",
    description:
      "Bring your friends together, build your squad and compete in exciting multiplayer gaming sessions.",
    icon: "users",
    accent: "cyan",
    tags: ["Play together", "Challenge friends"],
  },
];

// THE NEXT LVL EXPERIENCE

export const experiences = [
  {
    icon: "trophy",
    title: "BRING YOUR A-GAME",
    text: "Challenge your friends, compete for victories and create unforgettable gaming moments.",
  },
  {
    icon: "headphones",
    title: "GET IN THE ZONE",
    text: "Immerse yourself in gaming, escape the routine and enjoy every moment of the experience.",
  },
  {
    icon: "zap",
    title: "PLAY. COMPETE. LEVEL UP.",
    text: "From intense racing challenges to multiplayer battles, take your gaming experience to the NEXT LVL.",
  },
];
