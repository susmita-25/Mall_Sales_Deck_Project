import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import WhyProperty from "./sections/WhyProperty";
import RetailSection from "./sections/RetailSection";
import LuxurySection from "./sections/LuxurySection";
import DiningSection from "./sections/DiningSection";
import AttractionsSection from "./sections/AttractionsSection";
import EventsSection from "./sections/EventsSection";
import SponsorshipSection from "./sections/SponsorshipSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />

      <main>
        <HeroSection />
        <WhyProperty />
        <RetailSection />
        <LuxurySection />
        <DiningSection />
        <AttractionsSection />
        <EventsSection />
        <SponsorshipSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;