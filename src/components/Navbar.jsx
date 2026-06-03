const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h1 className="text-3xl font-bold text-white">MOA</h1>

        <div className="hidden gap-8 text-white md:flex">
          <a href="#overview" className="hover:text-gray-300">
            Overview
          </a>

          <a href="#retail" className="hover:text-gray-300">
            Retail
          </a>

          <a href="#dining" className="hover:text-gray-300">
            Dining
          </a>

          <a href="#attractions" className="hover:text-gray-300">
            Attractions
          </a>

          <a href="#events" className="hover:text-gray-300">
            Events
          </a>

          <a href="#sponsors" className="hover:text-gray-300">
            Sponsors
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
