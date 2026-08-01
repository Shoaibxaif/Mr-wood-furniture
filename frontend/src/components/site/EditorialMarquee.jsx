import Marquee from "react-fast-marquee";

const ITEMS = [
  "Modular Kitchens",
  "Wardrobes",
  "Home Interiors",
  "False Ceilings",
  "TV Units",
  "Office Furniture",
  "Wood Work",
];

export const EditorialMarquee = () => (
  <section
    data-testid="marquee-section"
    className="bg-sand border-y border-ink/10 py-8 md:py-10 overflow-hidden"
  >
    <Marquee speed={38} gradient={false} autoFill>
      {ITEMS.map((item, i) => (
        <div key={i} className="flex items-center">
          <span className="font-heading italic text-4xl md:text-6xl text-ink px-10 md:px-16">
            {item}
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-terracotta" />
        </div>
      ))}
    </Marquee>
  </section>
);
