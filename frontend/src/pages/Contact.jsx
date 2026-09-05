import { Seo } from "@/components/site/Seo";
import { ContactLead } from "@/components/site/ContactLead";

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Mr. Wood Interiors & Furniture",
    telephone: "+91-98290-00000",
    address: { "@type": "PostalAddress", streetAddress: "Tonk Road", addressLocality: "Jaipur", addressRegion: "Rajasthan", postalCode: "302015", addressCountry: "IN" },
    areaServed: ["Jaipur", "Rajasthan"],
    openingHours: "Mo-Sa 10:00-20:00",
  };
  return (
    <>
      <Seo
        title="Contact Mr. Wood | Interior Designers & Furniture Makers in Jaipur"
        description="Get in touch with Mr. Wood Interiors & Furniture in Jaipur — call, WhatsApp, visit our showroom or request a free consultation and transparent estimate."
        path="/contact"
        jsonLd={jsonLd}
      />
      <div className="pt-20">
        <ContactLead />
      </div>
    </>
  );
}
