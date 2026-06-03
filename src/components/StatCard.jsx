const StatCard = ({ value, label }) => {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-white">
      <h3 className="text-5xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-3 text-gray-400">
        {label}
      </p>
    </div>
  );
};

export default StatCard;