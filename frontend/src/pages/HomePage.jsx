import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { EditorialMarquee } from "@/components/site/EditorialMarquee";
import { Manifesto } from "@/components/site/Manifesto";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { ContactLead } from "@/components/site/ContactLead";
import { Footer } from "@/components/site/Footer";
import { StickyActions } from "@/components/site/StickyActions";
import { ChatWidget } from "@/components/site/ChatWidget";

export default function HomePage() {
  return (
    <main className="bg-bone">
      <Header />
      <Hero />
      <EditorialMarquee />
      <Manifesto />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactLead />
      <Footer />
      <StickyActions />
      <ChatWidget />
    </main>
  );
}
