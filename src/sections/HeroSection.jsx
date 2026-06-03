import { motion } from "framer-motion";
import CTAButton from "../components/CTAButton";

const HeroSection = () => {
  return (
    <section id="overview" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        onError={(e) => console.log("Video Error", e)}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/mall.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold md:text-8xl"
        >
          Mall of America
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-3xl text-lg text-gray-200 md:text-2xl"
        >
          America's Premier Destination For Retail, Entertainment, Dining &
          Global Events
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10"
        >
          <CTAButton text="Explore Opportunities" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
