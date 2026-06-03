import SectionTitle from "../components/SectionTitle";
import { events } from "../data/mallData";

const EventsSection = () => {
  return (
    <section id="events" className="px-6 py-24 text-white">
      <img
        src="/images/Events.jpg"
        alt="Events"
        className="w-full h-[500px] object-cover rounded-3xl mb-10"
      />

      <SectionTitle title="Events Platform" />

      {/* cards */}
    </section>
  );
};

export default EventsSection;
