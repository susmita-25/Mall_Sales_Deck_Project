import SectionTitle from "../components/SectionTitle";
import { retailBrands } from "../data/mallData";

const RetailSection = () => {
  return (
    <section id="retail" className="px-6 py-24 text-white">
      <img
        src="/images/Retail.jpg"
        alt="Retail"
        className="w-full h-[500px] object-cover"
      />

      <SectionTitle title="Retail Ecosystem" />

      {/* cards */}
    </section>
  );
};

export default RetailSection;
