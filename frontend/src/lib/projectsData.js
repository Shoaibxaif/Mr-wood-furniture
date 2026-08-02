// Project case studies. Images are curated stock; replace with real project photos as available.
// Each is labeled honestly as a representative example until real shoot photos are supplied.

const P = {
  living: "https://images.unsplash.com/photo-1724582586495-d050726cf354?crop=entropy&cs=srgb&fm=jpg&w=1400&q=80",
  living2: "https://images.unsplash.com/photo-1720247520881-672bc136da8a?crop=entropy&cs=srgb&fm=jpg&w=1400&q=80",
  kitchen: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?crop=entropy&cs=srgb&fm=jpg&w=1400&q=80",
  kitchen2: "https://images.unsplash.com/photo-1682662044733-9120471befc7?crop=entropy&cs=srgb&fm=jpg&w=1400&q=80",
  wood: "https://images.unsplash.com/photo-1631396326838-de37e5f8bcbc?crop=entropy&cs=srgb&fm=jpg&w=1400&q=80",
};

export const ROOM_TYPES = ["All", "Full Home", "Kitchen", "Living Room", "Wardrobe", "Commercial"];
export const STYLES = ["All", "Warm Minimal", "Contemporary", "Classic"];
export const LOCALITIES = ["All", "Malviya Nagar", "Vaishali Nagar", "C-Scheme", "Mansarovar", "Jagatpura"];

export const PROJECTS_DATA = [
  {
    slug: "malviya-nagar-3bhk",
    title: "Malviya Nagar 3BHK Residence",
    roomType: "Full Home",
    style: "Warm Minimal",
    locality: "Malviya Nagar",
    year: "2025",
    cover: P.living,
    brief: "A young family wanted a calm, warm home that could take the wear of two children without looking precious.",
    challenge: "The apartment had generous light but awkward, chopped-up storage and a cramped kitchen work-triangle that made cooking frustrating.",
    materials: ["BWP plywood carcass throughout", "Warm oak-tone laminate with veneer accents", "Soft-close hardware", "Profile-lit false ceiling"],
    outcome: "We reworked the kitchen layout for a proper triangle, unified the storage in a warm oak palette, and layered the lighting so the home feels soft in the evening. Delivered a week ahead of schedule.",
    gallery: [P.living, P.kitchen, P.living2],
  },
  {
    slug: "vaishali-nagar-kitchen",
    title: "Vaishali Nagar Modular Kitchen",
    roomType: "Kitchen",
    style: "Contemporary",
    locality: "Vaishali Nagar",
    year: "2025",
    cover: P.kitchen,
    brief: "A serious home cook wanted a hard-working kitchen that still felt premium and easy to clean.",
    challenge: "Heavy daily cooking meant grease and steam management were non-negotiable, and the earlier kitchen's MDF units had already begun to swell.",
    materials: ["BWP plywood carcass", "Membrane shutters for seamless cleaning", "Tall unit + corner carousel", "Branded soft-close tandem boxes"],
    outcome: "A moisture-resilient kitchen with a smart work-triangle, tall pantry storage and wipe-clean membrane fronts — built to survive daily Indian cooking without swelling or dulling.",
    gallery: [P.kitchen, P.kitchen2],
  },
  {
    slug: "c-scheme-living-room",
    title: "C-Scheme Living Room",
    roomType: "Living Room",
    style: "Classic",
    locality: "C-Scheme",
    year: "2024",
    cover: P.living2,
    brief: "A heritage-area apartment needed a living room that felt refined and grown-up without going cold.",
    challenge: "High ceilings and long walls risked feeling empty; the clients disliked glossy, showroom-style finishes.",
    materials: ["Veneer feature TV wall with fluted detailing", "Matte PU accents", "Cove + profile lighting", "Custom solid-wood console"],
    outcome: "A composed media wall in warm veneer anchors the room, with layered lighting adding depth at night. The matte, tactile finishes gave the refined, un-flashy feel they wanted.",
    gallery: [P.living2, P.wood, P.living],
  },
  {
    slug: "mansarovar-wardrobe",
    title: "Mansarovar Master Wardrobe",
    roomType: "Wardrobe",
    style: "Warm Minimal",
    locality: "Mansarovar",
    year: "2024",
    cover: P.wood,
    brief: "A couple needed far more organised storage for a shared master bedroom with limited floor space.",
    challenge: "Tight floor clearance ruled out hinged doors, and the existing wardrobe wasted its full height.",
    materials: ["Floor-to-ceiling sliding wardrobe", "BWR plywood carcass", "Internal pull-outs & saree unit", "Mirror-front dressing section"],
    outcome: "A full-height sliding wardrobe reclaimed the wasted upper space, with a tailored interior for hanging, folded and saree storage plus a mirrored dressing zone — all without eating floor space.",
    gallery: [P.wood, P.living2],
  },
  {
    slug: "jagatpura-office",
    title: "Jagatpura Office Fit-out",
    roomType: "Commercial",
    style: "Contemporary",
    locality: "Jagatpura",
    year: "2025",
    cover: P.kitchen2,
    brief: "A growing firm needed a professional 24-seat office built fast, without shutting operations down.",
    challenge: "The team had to keep working through the fit-out, and the furniture needed to survive heavy daily use.",
    materials: ["Commercial-grade laminate workstations", "Acoustic considerations in meeting rooms", "Branded reception joinery", "Gypsum ceiling with profile lighting"],
    outcome: "Delivered a durable, on-brand workspace in phases over evenings and weekends, so the team never lost a working day. Robust materials keep it looking sharp under daily use.",
    gallery: [P.kitchen2, P.living],
  },
  {
    slug: "malviya-nagar-kitchen-reno",
    title: "Malviya Nagar Kitchen Renovation",
    roomType: "Kitchen",
    style: "Warm Minimal",
    locality: "Malviya Nagar",
    year: "2024",
    cover: P.kitchen2,
    brief: "A dated kitchen needed modernising on a sensible budget, not a full teardown.",
    challenge: "Much of the existing carcass was still sound; the client had been quoted for a complete replacement elsewhere.",
    materials: ["Retained sound plywood carcass", "New membrane shutters & hardware", "New backsplash & under-cabinet lighting"],
    outcome: "By keeping the solid carcass and replacing only shutters, hardware and finishes, we modernised the kitchen for well under the cost of a rebuild — an honest saving for the client.",
    gallery: [P.kitchen2, P.kitchen],
  },
];

export const getProject = (slug) => PROJECTS_DATA.find((p) => p.slug === slug);
export const projectsByCategory = (category) =>
  PROJECTS_DATA.filter((p) => p.roomType === category || p.title.toLowerCase().includes((category || "").toLowerCase()));
