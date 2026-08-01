// Central business + content data for Mr. Wood Interiors & Furniture
export const BUSINESS = {
  name: "Mr. Wood",
  fullName: "Mr. Wood Interiors & Furniture",
  phone: "+91 98290 00000",
  phoneRaw: "919829000000",
  whatsapp: "919829000000",
  email: "hello@mrwoodinteriors.in",
  address: "Tonk Road, Jaipur, Rajasthan 302015",
  city: "Jaipur",
  mapQuery: "Tonk+Road+Jaipur+Rajasthan",
  hours: "Mon–Sat, 10 AM – 8 PM",
};

export const whatsappLink = (text = "Hi Mr. Wood, I'd like to discuss an interior project.") =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;

export const NAV_LINKS = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#manifesto" },
  { label: "Studio", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  { no: "01", title: "Modular Kitchens", desc: "Ergonomic, moisture-resistant kitchens engineered for Indian cooking — soft-close hardware, tall units and finishes that last." },
  { no: "02", title: "Wardrobes & Storage", desc: "Floor-to-ceiling wardrobes with intelligent internal layouts, sliding or hinged, tailored to your room and rituals." },
  { no: "03", title: "TV & Media Units", desc: "Statement entertainment walls that balance storage, cable management and sculptural presence." },
  { no: "04", title: "False Ceilings & Lighting", desc: "Layered POP and gypsum ceilings with cove and profile lighting that shape the mood of every room." },
  { no: "05", title: "Home Interiors", desc: "End-to-end residential interiors — space planning, joinery, finishes and styling under one accountable studio." },
  { no: "06", title: "Office & Commercial", desc: "Workspaces and retail interiors built for durability, brand presence and fast, low-disruption execution." },
];

export const PROJECTS = [
  { title: "Malviya Nagar Residence", cat: "Full Home Interior", img: "https://images.unsplash.com/photo-1724582586495-d050726cf354?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxwcmVtaXVtJTIwbW9kZXJuJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc4NTYwODA3NHww&ixlib=rb-4.1.0&q=85", span: "lg:col-span-7" },
  { title: "Vaishali Nagar Kitchen", cat: "Modular Kitchen", img: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBtb2R1bGFyJTIwa2l0Y2hlbiUyMGx1eHVyeSUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3ODU2MDgwNzV8MA&ixlib=rb-4.1.0&q=85", span: "lg:col-span-5" },
  { title: "Bespoke Walnut Joinery", cat: "Custom Furniture", img: "https://images.unsplash.com/photo-1631396326838-de37e5f8bcbc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHw0fHxjdXN0b20lMjB3b29kJTIwZnVybml0dXJlJTIwY3JhZnRzbWFuc2hpcCUyMGRldGFpbGVkfGVufDB8fHx8MTc4NTYwODA3NHww&ixlib=rb-4.1.0&q=85", span: "lg:col-span-5" },
  { title: "C-Scheme Living Room", cat: "Residential", img: "https://images.unsplash.com/photo-1720247520881-672bc136da8a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxwcmVtaXVtJTIwbW9kZXJuJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc4NTYwODA3NHww&ixlib=rb-4.1.0&q=85", span: "lg:col-span-7" },
];

export const MANIFESTO = [
  { no: "01", title: "Listen & Understand", body: "We begin with your life, not a catalogue. A conversation about how you live, cook, host and rest shapes every decision that follows." },
  { no: "02", title: "Design With Intent", body: "Detailed 3D layouts, honest material choices and transparent estimates — so you approve a space you can already picture." },
  { no: "03", title: "Craft In-House", body: "Our own Jaipur workshop mills, joins and finishes every piece. No middlemen, no compromise on the joints that matter." },
  { no: "04", title: "Install & Stand Behind", body: "Precise on-site installation, a spotless handover and a warranty that means we answer the phone long after the invoice." },
];

export const WHY = [
  { stat: "12+", label: "Years crafting Jaipur homes" },
  { stat: "600+", label: "Spaces designed & delivered" },
  { stat: "4.9★", label: "Average client rating" },
  { stat: "100%", label: "In-house manufacturing" },
];

export const TESTIMONIALS = [
  { quote: "Mr. Wood turned a bare 3BHK into a home that feels like us. The kitchen joinery is flawless and they finished a week early.", author: "Ritu & Anand Sharma", role: "Malviya Nagar, Jaipur" },
  { quote: "The most honest studio we met. They talked us out of an expensive finish we didn't need and the result still looks premium.", author: "Dr. Meenakshi Rao", role: "C-Scheme, Jaipur" },
  { quote: "We fitted out our whole office in six weeks with zero downtime. Solid wood work and genuinely reliable people.", author: "Karan Mehta", role: "Founder, Mehta & Co." },
];

export const FAQS = [
  { q: "How much does a modular kitchen cost in Jaipur?", a: "Most of our modular kitchens in Jaipur range from ₹1.5 lakh to ₹5 lakh depending on size, core material (BWP plywood vs MDF), hardware brand and finish (laminate, acrylic or PU). We share a transparent, itemised estimate after a free measurement visit." },
  { q: "Do you handle full home interiors or only furniture?", a: "Both. Mr. Wood offers end-to-end interiors — space planning, false ceilings, electricals coordination, custom furniture, wardrobes and styling — as well as standalone furniture pieces. One studio stays accountable from design to handover." },
  { q: "How long does a project take?", a: "A single modular kitchen or wardrobe set typically takes 3–4 weeks. A full 2–3 BHK home interior runs 8–12 weeks. Because we manufacture in our own Jaipur workshop, timelines stay predictable." },
  { q: "What materials do you use, and are they durable?", a: "We default to BWP/BWR grade plywood for wet areas, branded laminates, and soft-close hardware. We explain the trade-offs of plywood vs MDF and laminate vs acrylic vs PU so you choose what fits your budget and usage." },
  { q: "Do you offer a warranty?", a: "Yes. We provide a written warranty on our carpentry and hardware, and we service what we build. Being a local Jaipur studio, support is always a call or WhatsApp away." },
  { q: "Which areas of Jaipur do you serve?", a: "We serve all of Jaipur — Malviya Nagar, Vaishali Nagar, C-Scheme, Mansarovar, Jagatpura, Tonk Road and beyond — and take select projects across Rajasthan." },
];
