import SectionTitle from "../components/SectionTitle";
import { attractions } from "../data/mallData";

const AttractionsSection = () => {
  return (
    <section id="attractions" className="bg-zinc-900 px-6 py-24 text-white">
      <img
        src="/images/Attractions.jpg"
        alt="Attractions"
        className="w-full h-[500px] object-cover rounded-3xl mb-10"
      />

      <SectionTitle title="Entertainment & Attractions" />

      {/* cards */}
    </section>
  );
};

export default AttractionsSection;
