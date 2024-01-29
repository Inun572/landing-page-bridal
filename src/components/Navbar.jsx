const Navbar = () => {
  return (
    <header className="navbar fixed top-0 left-0 px-16 bg-slate-400">
      <div className="navbar-start">
        <a className="text-2xl cursor-pointer">
          House of Lea
        </a>
      </div>
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a>Packages</a>
          </li>
        </ul>
      </nav>
      <div className="navbar-end">
        <nav className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Packages</a>
            </li>
            <li className="flex justify-center items-center mt-4">
              <a className="btn btn-outline btn-active w-3/4 h-8 py-3">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <a className="btn btn-outline btn-neutral hidden lg:flex">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Navbar;
