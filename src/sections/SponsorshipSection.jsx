import SectionTitle from "../components/SectionTitle";

const SponsorshipSection = () => {
  return (
    <section id="sponsors" className="bg-zinc-900 px-6 py-24 text-white">
      <img
        src="/images/Sponsor.jpg"
        alt="Sponsor"
        className="w-full h-[500px] object-cover rounded-3xl mb-10"
      />

      <SectionTitle title="Sponsorship Opportunities" />

      {/* cards */}
    </section>
  );
};

export default SponsorshipSection;
