import CTAButton from "../components/CTAButton";

const ContactSection = () => {
  return (
    <section className="py-32 px-6 text-center bg-gradient-to-b from-black to-zinc-900">
      <h2 className="text-5xl md:text-7xl font-bold">
        Ready To Be Part Of Mall Of America?
      </h2>

      <p className="mt-6 text-xl text-gray-400">
        Join one of the most visited destinations in America.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <CTAButton text="Lease Space" />
        <CTAButton text="Book Event" />
        <CTAButton text="Become Sponsor" />
      </div>
    </section>
  );
};

export default ContactSection;
