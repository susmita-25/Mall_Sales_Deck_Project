const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-4xl md:text-6xl font-bold">{title}</h2>

      {subtitle && (
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
