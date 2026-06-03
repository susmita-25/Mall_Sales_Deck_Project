const CTAButton = ({ text }) => {
  return (
    <button className="rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:scale-105">
      {text}
    </button>
  );
};

export default CTAButton;
