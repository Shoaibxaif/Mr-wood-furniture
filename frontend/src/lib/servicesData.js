// 8 individual service pages — genuinely distinct content per service.
// Pricing tiers are DEMO DATA (Essential / Premium / Signature) until real pricing supplied.

export const SERVICE_LIST = [
  { slug: "modular-kitchen-jaipur", title: "Modular Kitchens", short: "Ergonomic, moisture-smart kitchens built for Indian cooking." },
  { slug: "wardrobes-jaipur", title: "Wardrobes & Storage", short: "Floor-to-ceiling wardrobes with intelligent internal layouts." },
  { slug: "tv-units-jaipur", title: "TV & Media Units", short: "Sculptural entertainment walls with hidden storage." },
  { slug: "false-ceiling-jaipur", title: "False Ceilings & Lighting", short: "Layered POP & gypsum ceilings with mood lighting." },
  { slug: "home-interior-jaipur", title: "Home Interiors", short: "End-to-end residential interiors under one accountable studio." },
  { slug: "commercial-interior-jaipur", title: "Commercial Interiors", short: "Offices & retail built for durability and brand presence." },
  { slug: "renovation-jaipur", title: "Renovation", short: "Thoughtful upgrades to tired or dated spaces." },
  { slug: "custom-furniture-jaipur", title: "Custom Furniture", short: "Bespoke solid-wood pieces made in our workshop." },
];

const IMG = {
  kitchen: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?crop=entropy&cs=srgb&fm=jpg&w=1400&q=80",
  kitchen2: "https://images.unsplash.com/photo-1682662044733-9120471befc7?crop=entropy&cs=srgb&fm=jpg&w=1400&q=80",
  living: "https://images.unsplash.com/photo-1724582586495-d050726cf354?crop=entropy&cs=srgb&fm=jpg&w=1400&q=80",
  living2: "https://images.unsplash.com/photo-1720247520881-672bc136da8a?crop=entropy&cs=srgb&fm=jpg&w=1400&q=80",
  wood: "https://images.unsplash.com/photo-1631396326838-de37e5f8bcbc?crop=entropy&cs=srgb&fm=jpg&w=1400&q=80",
};

export const SERVICES_DATA = {
  "modular-kitchen-jaipur": {
    title: "Modular Kitchens",
    h1: "Modular Kitchen Design & Manufacturing in Jaipur",
    metaTitle: "Modular Kitchen in Jaipur | Custom Design & Installation | Mr. Wood",
    metaDescription: "Custom modular kitchens in Jaipur built for Indian cooking — BWP plywood, soft-close hardware, laminate/acrylic/PU finishes. Free measurement & transparent quote.",
    keyword: "modular kitchen Jaipur",
    heroImg: IMG.kitchen,
    intro: "A kitchen is the hardest-working room in an Indian home — heat, steam, oil and daily wear. We engineer ours around that reality, not around a showroom photo. Every Mr. Wood kitchen is designed for your cooking style, then milled and finished in our own Jaipur workshop.",
    included: [
      "On-site measurement, 3D layout and work-triangle planning",
      "BWP/BWR plywood carcass with your choice of shutter finish",
      "Branded soft-close hinges, channels, tandem boxes and tall units",
      "Countertop, backsplash, chimney and hob coordination",
      "In-house manufacturing, delivery and precise installation",
    ],
    options: [
      { name: "Carcass material", detail: "We default to BWP (boiling-water-proof) plywood for the wet, humid environment of a kitchen. MDF and particle board cost less but swell if water sits — we only recommend them for dry, low-risk areas." },
      { name: "Shutter finishes", detail: "Laminate (durable, budget-friendly), acrylic (high-gloss, premium look), membrane (seamless, easy to clean) and PU/veneer (rich, natural). We help you match finish to budget and maintenance appetite." },
      { name: "Hardware", detail: "Soft-close hinges and channels from trusted brands, tall units, corner solutions and lift-up mechanisms — the parts you touch every day are where quality is felt most." },
    ],
    pricingNote: "Indicative per-running-foot ranges. Final quote depends on kitchen size, layout and finishes after a free measurement.",
    tiers: [
      { name: "Essential", price: "₹1,500–2,200 / sq ft", features: ["BWP ply carcass", "Premium laminate shutters", "Standard soft-close hardware", "1-year workmanship warranty"] },
      { name: "Premium", price: "₹2,500–4,000 / sq ft", features: ["BWP ply carcass", "Acrylic / membrane shutters", "Branded hardware + tall units", "Corner & lift-up solutions", "3-year warranty"], featured: true },
      { name: "Signature", price: "₹4,000–7,000+ / sq ft", features: ["Premium ply / marine grade", "PU, veneer or lacquered glass", "Top-tier imported hardware", "Integrated appliances & lighting", "5-year warranty"] },
    ],
    faqs: [
      { q: "How much does a modular kitchen cost in Jaipur?", a: "Most Jaipur modular kitchens land between ₹1.5 lakh and ₹5 lakh depending on size, carcass material, finish and hardware. We share an itemised, no-obligation estimate after a free measurement visit." },
      { q: "Which is better for a kitchen — plywood or MDF?", a: "For kitchens we strongly prefer BWP plywood because it resists the moisture and steam that make MDF swell. MDF is fine for dry areas but risky under a sink or near a hob." },
      { q: "How long does a modular kitchen take?", a: "Typically 3–4 weeks from design sign-off, because we manufacture in-house in Jaipur rather than waiting on outsourced vendors." },
    ],
    category: "Modular Kitchen",
  },

  "wardrobes-jaipur": {
    title: "Wardrobes & Storage",
    h1: "Custom Wardrobes & Storage in Jaipur",
    metaTitle: "Custom Wardrobes in Jaipur | Sliding & Hinged | Mr. Wood",
    metaDescription: "Bespoke wardrobes in Jaipur — sliding or hinged, floor-to-ceiling, with intelligent internal layouts. BWR plywood, soft-close fittings. Free design consultation.",
    keyword: "wardrobes Jaipur",
    heroImg: IMG.living2,
    intro: "Storage fails when it's designed as an afterthought. We plan wardrobes around what you actually own — the ratio of hanging to folded, the sarees, the suitcases, the seasonal shift — so every inch earns its place.",
    included: [
      "Internal layout planned around your wardrobe inventory",
      "Sliding or hinged configurations, floor-to-ceiling",
      "BWR plywood carcass with laminate/acrylic/veneer shutters",
      "Soft-close fittings, pull-out trays, mirror & lighting options",
      "Loft storage and corner utilisation where space allows",
    ],
    options: [
      { name: "Sliding vs hinged", detail: "Sliding doors save floor space and look sleek but reduce visibility of the full wardrobe. Hinged doors give full access and cost less. We recommend based on your room's clearance and how you use the wardrobe." },
      { name: "Internal fit-out", detail: "Pull-out trays, tie/belt racks, jewellery drawers, saree units and adjustable shelves — the interior is where a wardrobe becomes genuinely useful." },
      { name: "Finishes", detail: "Laminate for durability, acrylic for a premium sheen, or veneer for warmth. Mirror-fronted and profile-lit options for dressing areas." },
    ],
    pricingNote: "Indicative per-square-foot (of front elevation) ranges. Final quote after measurement.",
    tiers: [
      { name: "Essential", price: "₹1,300–1,900 / sq ft", features: ["BWR ply carcass", "Laminate shutters", "Standard fittings", "Adjustable shelves"] },
      { name: "Premium", price: "₹2,000–3,200 / sq ft", features: ["BWR ply carcass", "Acrylic / sliding system", "Pull-outs & organisers", "Profile lighting"], featured: true },
      { name: "Signature", price: "₹3,200–5,500+ / sq ft", features: ["Premium ply", "Veneer / lacquered glass", "Walk-in configuration", "Integrated lighting & sensors"] },
    ],
    faqs: [
      { q: "Sliding or hinged wardrobe — which should I choose?", a: "Choose sliding if floor space is tight and you value a clean look; choose hinged for full access and a lower cost. We assess your room clearance before recommending." },
      { q: "What material do you use for wardrobes?", a: "BWR-grade plywood as standard for durability against Jaipur's humidity, with your choice of laminate, acrylic or veneer shutters." },
      { q: "Can you build around an irregular or corner wall?", a: "Yes — because we manufacture custom, we build to your exact wall, including corners, slopes and loft areas that ready-made wardrobes can't use." },
    ],
    category: "Wardrobe",
  },

  "tv-units-jaipur": {
    title: "TV & Media Units",
    h1: "TV Units & Media Walls in Jaipur",
    metaTitle: "Custom TV Units in Jaipur | Media Walls | Mr. Wood",
    metaDescription: "Bespoke TV units and media walls in Jaipur — balanced storage, clean cable management and a sculptural focal point for your living room. Free design consultation.",
    keyword: "TV unit Jaipur",
    heroImg: IMG.living,
    intro: "A TV unit anchors the living room, so it should do more than hold a screen. We balance display, concealed storage and proportion to create a wall that looks composed whether the television is on or off.",
    included: [
      "Wall-proportioned design with display and closed storage",
      "Concealed cable management and device ventilation",
      "Optional back-panelling in veneer, fluted wood or stone-look",
      "Integrated or profile lighting to frame the composition",
      "In-house manufacturing and precise wall installation",
    ],
    options: [
      { name: "Back-panel treatment", detail: "Fluted wood, veneer, PU or textured laminate change the entire mood of the wall. We match it to your flooring and sofa so the room reads as one design." },
      { name: "Storage mix", detail: "Open niches for display, closed cabinets for clutter, and drawers for media — we tune the ratio to how tidy you like the room to feel." },
      { name: "Lighting", detail: "Cove or profile lighting behind the panel adds depth in the evening and makes the wall a feature, not just furniture." },
    ],
    pricingNote: "Indicative ranges for a standard living-room wall. Final quote after measurement.",
    tiers: [
      { name: "Essential", price: "₹35,000–60,000", features: ["Laminate finish", "Basic storage + display", "Cable management"] },
      { name: "Premium", price: "₹65,000–1,20,000", features: ["Veneer / fluted panel", "Integrated lighting", "Mixed open + closed storage"], featured: true },
      { name: "Signature", price: "₹1,20,000+", features: ["Full media wall", "Premium panelling & stone-look", "Concealed devices & speakers"] },
    ],
    faqs: [
      { q: "How much does a custom TV unit cost in Jaipur?", a: "A standard laminate TV unit starts around ₹35,000, while a full media wall with panelling and lighting can range from ₹1 lakh upward, depending on size and finish." },
      { q: "Can you hide the wires and set-top box?", a: "Yes — concealed conduits and ventilated cabinets keep cables and devices out of sight while allowing airflow and remote access." },
    ],
    category: "TV Unit",
  },

  "false-ceiling-jaipur": {
    title: "False Ceilings & Lighting",
    h1: "False Ceiling & Lighting Design in Jaipur",
    metaTitle: "False Ceiling in Jaipur | POP & Gypsum | Mr. Wood",
    metaDescription: "POP and gypsum false ceilings in Jaipur with layered cove and profile lighting. Honest guidance on POP vs gypsum and a clean, dust-free finish. Free consultation.",
    keyword: "false ceiling Jaipur",
    heroImg: IMG.kitchen2,
    intro: "Ceilings shape how a room feels more than most people realise. Done well, a false ceiling hides services, layers light and lifts proportion. Done cheaply, it cracks and dulls the space. We treat it as design, not just a contractor's line item.",
    included: [
      "Ceiling design coordinated with your lighting plan",
      "POP or gypsum board execution with clean, level finish",
      "Cove, profile and spot lighting layout",
      "Concealment of wiring, ducts and AC lines",
      "Dust-controlled site practices and proper curing",
    ],
    options: [
      { name: "POP vs gypsum board", detail: "POP allows curved, sculptural designs and costs less per foot but is messier and slower to cure. Gypsum board is faster, cleaner and gives crisp straight lines, ideal for modern flat ceilings. We recommend based on your design and timeline." },
      { name: "Lighting layers", detail: "Ambient (cove), task (spots/pendants) and accent (profile) lighting used together is what makes a ceiling feel designed rather than lit." },
      { name: "Design complexity", detail: "From a simple perimeter cove to multi-level coffered designs — complexity drives both cost and drama, and we'll show you where spend actually shows." },
    ],
    pricingNote: "Indicative per-square-foot ranges. Final quote after site assessment.",
    tiers: [
      { name: "Essential", price: "₹65–90 / sq ft", features: ["Single-level ceiling", "Basic cove lighting", "Clean level finish"] },
      { name: "Premium", price: "₹100–150 / sq ft", features: ["Multi-level design", "Cove + profile lighting", "Concealed services"], featured: true },
      { name: "Signature", price: "₹160+ / sq ft", features: ["Sculptural / coffered design", "Full lighting scenes", "Premium detailing"] },
    ],
    faqs: [
      { q: "POP or gypsum false ceiling — which is better?", a: "Gypsum board is cleaner, faster and best for crisp modern lines; POP is more economical and better for curved, sculptural designs. Both are durable when executed properly." },
      { q: "How much does a false ceiling cost in Jaipur?", a: "Expect roughly ₹65–150 per square foot depending on POP vs gypsum, number of levels and lighting complexity." },
    ],
    category: "False Ceiling",
  },

  "home-interior-jaipur": {
    title: "Home Interiors",
    h1: "Full Home Interior Design in Jaipur",
    metaTitle: "Home Interior Designers in Jaipur | Turnkey Interiors | Mr. Wood",
    metaDescription: "End-to-end home interior design in Jaipur — space planning, furniture, wardrobes, kitchens, ceilings and styling under one accountable, in-house studio. Free consultation.",
    keyword: "home interior Jaipur",
    heroImg: IMG.living,
    intro: "Turnkey interiors go wrong when a dozen vendors each own a fragment and no one owns the outcome. Mr. Wood stays accountable from the first layout to the final handover — design, manufacturing and installation, one studio, one promise.",
    included: [
      "Space planning, mood-boards and detailed 3D visualisation",
      "Custom furniture, wardrobes, kitchen and TV units",
      "False ceilings, lighting and electrical coordination",
      "Finishes, paint, flooring guidance and styling",
      "Single point of accountability from design to handover",
    ],
    options: [
      { name: "Scope", detail: "From a single room refresh to a complete 3–4 BHK fit-out. We scope honestly so you spend where it changes daily life, not where it just looks good in a render." },
      { name: "Design language", detail: "Warm minimal, classic, contemporary or a considered mix — we design to how you live and host, not to a trend that dates in two years." },
      { name: "Phasing", detail: "If budget or occupancy requires, we can phase the project room by room without compromising the overall design intent." },
    ],
    pricingNote: "Indicative all-in ranges for a full apartment interior. Final quote after requirement study.",
    tiers: [
      { name: "Essential", price: "₹6–10 lakh", features: ["2 BHK core interiors", "Laminate finishes", "Kitchen + wardrobes + units", "Basic ceiling & lighting"] },
      { name: "Premium", price: "₹12–20 lakh", features: ["3 BHK full interior", "Mixed premium finishes", "Designed ceilings & lighting", "Custom furniture"], featured: true },
      { name: "Signature", price: "₹22 lakh+", features: ["Luxury turnkey interior", "Veneer/PU & imported hardware", "Bespoke everything", "Styling & décor"] },
    ],
    faqs: [
      { q: "Do you handle the entire home or only furniture?", a: "The entire home — space planning, ceilings, electricals coordination, custom furniture, wardrobes, kitchen and styling — as one accountable studio, or standalone pieces if you prefer." },
      { q: "How long does a full home interior take in Jaipur?", a: "A typical 2–3 BHK runs 8–12 weeks. In-house manufacturing keeps our timelines more predictable than dealer-led projects." },
      { q: "Why choose an in-house studio over a dealer?", a: "Because the people who design and promise are the people who build and install — fewer handoffs, tighter quality control and one number to call afterwards." },
    ],
    category: "Full Home Interior",
  },

  "commercial-interior-jaipur": {
    title: "Commercial Interiors",
    h1: "Office & Commercial Interior Design in Jaipur",
    metaTitle: "Commercial & Office Interiors in Jaipur | Mr. Wood",
    metaDescription: "Office and retail interior fit-outs in Jaipur built for durability, brand presence and fast, low-disruption execution. In-house manufacturing. Request a spec.",
    keyword: "office interior Jaipur",
    heroImg: IMG.kitchen2,
    intro: "Commercial spaces are judged in seconds and used for years. We build workspaces and retail interiors that hold up to heavy use, express your brand clearly, and go up fast enough to keep your business moving.",
    included: [
      "Workspace planning for headcount, meeting and collaboration zones",
      "Durable, commercial-grade materials and finishes",
      "Custom workstations, storage, reception and cabin joinery",
      "Ceiling, lighting and electrical/network coordination",
      "Phased or after-hours execution to minimise downtime",
    ],
    options: [
      { name: "Durability first", detail: "Commercial furniture takes far more abuse than home furniture. We spec higher-grade materials and hardware so the fit-out still looks sharp after years of daily use." },
      { name: "Brand expression", detail: "Reception, signage zones and material palette are tuned to your brand so the space works as marketing, not just function." },
      { name: "Execution schedule", detail: "We can work in phases or after-hours to keep your team productive during the fit-out." },
    ],
    pricingNote: "Indicative per-seat / per-sq-ft ranges. Final quote after a site and requirement study.",
    tiers: [
      { name: "Essential", price: "₹800–1,200 / sq ft", features: ["Efficient workstations", "Durable laminate finishes", "Standard lighting"] },
      { name: "Premium", price: "₹1,300–2,000 / sq ft", features: ["Branded reception & cabins", "Acoustic & lighting design", "Premium materials"], featured: true },
      { name: "Signature", price: "₹2,000+ / sq ft", features: ["Flagship / retail fit-out", "Bespoke joinery & feature walls", "Full MEP coordination"] },
    ],
    faqs: [
      { q: "Can you fit out our office without shutting it down?", a: "Yes. We routinely phase work or run after-hours shifts so your team keeps working while we build." },
      { q: "How fast can a commercial fit-out be completed?", a: "A mid-sized office typically takes 4–8 weeks. Because we manufacture joinery in-house, we control the critical-path items ourselves." },
    ],
    category: "Commercial",
  },

  "renovation-jaipur": {
    title: "Renovation",
    h1: "Home & Space Renovation in Jaipur",
    metaTitle: "Renovation Services in Jaipur | Interior Renovation | Mr. Wood",
    metaDescription: "Interior renovation in Jaipur — modernise tired kitchens, wardrobes and living spaces without a full rebuild. Honest assessment of what to keep and what to replace.",
    keyword: "renovation Jaipur",
    heroImg: IMG.wood,
    intro: "Not every space needs to be gutted. Good renovation is knowing what to keep, what to refinish and what to genuinely replace — so you get a transformed space without paying to redo things that still work.",
    included: [
      "Honest condition assessment of existing carpentry and services",
      "Selective replacement, refinishing and re-lamination",
      "Kitchen and wardrobe upgrades and reconfiguration",
      "Ceiling, lighting and paint refresh",
      "Minimal-disruption execution and thorough cleanup",
    ],
    options: [
      { name: "Keep vs replace", detail: "We tell you honestly when a carcass is sound and only shutters/hardware need updating — saving you money — versus when water damage or swelling means replacement is the smarter spend." },
      { name: "Refinishing", detail: "Re-lamination, PU re-coating and hardware upgrades can transform a dated piece for a fraction of a rebuild, where the structure is still solid." },
      { name: "Reconfiguration", detail: "Sometimes the fix is layout, not new furniture — reworking a cramped kitchen triangle or an awkward storage wall." },
    ],
    pricingNote: "Renovation is highly variable — pricing follows a site assessment. Ranges below are broad guidance.",
    tiers: [
      { name: "Refresh", price: "₹1–3 lakh", features: ["Re-lamination & hardware", "Paint & lighting refresh", "Minor repairs"] },
      { name: "Upgrade", price: "₹3–7 lakh", features: ["Kitchen / wardrobe rebuild", "New ceilings & lighting", "Selective new furniture"], featured: true },
      { name: "Transform", price: "₹7 lakh+", features: ["Full space overhaul", "Reconfigured layout", "Premium new finishes"] },
    ],
    faqs: [
      { q: "Is renovation cheaper than a full new interior?", a: "Usually yes, when the existing structure is sound. We assess honestly and only replace what genuinely needs replacing, refinishing the rest." },
      { q: "Can you renovate just my kitchen or wardrobe?", a: "Absolutely — targeted renovations of a single kitchen, wardrobe or living wall are among our most common projects." },
    ],
    category: "Renovation",
  },

  "custom-furniture-jaipur": {
    title: "Custom Furniture",
    h1: "Bespoke Custom Furniture in Jaipur",
    metaTitle: "Custom Furniture in Jaipur | Solid Wood, Made-to-Order | Mr. Wood",
    metaDescription: "Made-to-order custom furniture in Jaipur — beds, tables, storage and statement pieces milled and finished in our own workshop. Solid wood and engineered options.",
    keyword: "custom furniture Jaipur",
    heroImg: IMG.wood,
    intro: "Ready-made furniture is designed for the average room and the average person. Custom furniture is designed for yours. We make beds, dining tables, storage and statement pieces to your exact dimensions, in materials chosen to last.",
    included: [
      "Made-to-measure pieces designed for your space",
      "Solid wood or engineered wood options with honest guidance",
      "Choice of finishes — natural, stained, PU, laminate or veneer",
      "Sturdy joinery built in our own Jaipur workshop",
      "Delivery and placement",
    ],
    options: [
      { name: "Solid vs engineered wood", detail: "Solid wood is beautiful and long-lived but costs more and can move with humidity; quality engineered wood is stable and cost-effective. We recommend the right material per piece and use case." },
      { name: "Finish", detail: "Natural oil, stain, PU lacquer, laminate or veneer — each changes durability, feel and price. We match finish to how the piece will be used." },
      { name: "Joinery", detail: "The joints decide how long furniture lasts. We build with proper joinery, not just screws and glue, so pieces stay tight for years." },
    ],
    pricingNote: "Custom pieces are quoted individually. Ranges below are typical starting points.",
    tiers: [
      { name: "Essential", price: "from ₹15,000", features: ["Engineered wood", "Laminate finish", "Made to measure"] },
      { name: "Premium", price: "from ₹40,000", features: ["Solid/engineered mix", "PU / veneer finish", "Designed detailing"], featured: true },
      { name: "Signature", price: "from ₹90,000", features: ["Premium solid wood", "Hand-finished", "Statement / heirloom piece"] },
    ],
    faqs: [
      { q: "Do you make furniture to my exact size?", a: "Yes — that's the point of custom. We build to your dimensions and space, which ready-made furniture can rarely match." },
      { q: "Is solid wood always better than engineered wood?", a: "Not always. Solid wood is beautiful and durable but pricier and can move with humidity. Good engineered wood is stable and economical. We advise per piece." },
    ],
    category: "Custom Furniture",
  },
};
