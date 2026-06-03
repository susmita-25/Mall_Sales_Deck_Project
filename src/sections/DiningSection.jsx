import SectionTitle from "../components/SectionTitle";

const DiningSection = () => {
  return (
    <section id="dining" className="px-6 py-24 text-white">
      <SectionTitle title="Dining & Lifestyle" />

      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-xl border p-6">Fine Dining</div>

        <div className="rounded-xl border p-6">Casual Dining</div>

        <div className="rounded-xl border p-6">Coffee & Dessert</div>

        <div className="rounded-xl border p-6">Food Court</div>
      </div>
    </section>
  );
};

export default DiningSection;
