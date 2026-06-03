import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";

const WhyProperty = () => {
  return (
    <section className="bg-black px-6 py-32 text-white">
      <SectionTitle
        title="Why This Property"
        subtitle="A destination that attracts millions of visitors every year."
      />

      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        <StatCard value="40M+" label="Annual Visitors" />
        <StatCard value="500+" label="Retail Stores" />
        <StatCard value="5.6M" label="Square Feet" />
        <StatCard value="50+" label="Major Attractions" />
      </div>
    </section>
  );
};

export default WhyProperty;
