
const Header = () => {
    return (
        <nav className=" text-black p-4 mx-3 md:mx-16">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <h1 className="text-3xl font-extrabold">Shop Dev</h1>
        </div>

        {/* Center: Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-black hover:text-gray-400">Home</a>
          <a href="#" className="text-black hover:text-gray-400">About</a>
          <a href="#" className="text-black hover:text-gray-400">Services</a>
          <a href="#" className="text-black hover:text-gray-400">Contact</a>
        </div>

        {/* Right: Search and Profile */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered input-sm pl-10 pr-4  border-gray-600 text-black placeholder-gray-400"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 19a8 8 0 100-16 8 8 0 000 16zm0 0l6 6"
              />
            </svg>
          </div>

          {/* Profile Icon */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://scontent.fdac31-2.fna.fbcdn.net/v/t39.30808-6/457848023_1575546479977532_357491332968781521_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pIsz78lpUVEQ7kNvgFzppoP&_nc_zt=23&_nc_ht=scontent.fdac31-2.fna&_nc_gid=A8p1YWPRz_GpJdzRzIWeXZp&oh=00_AYDAPJvbZZVgwXSMvvgLMd-_YPGwwAee4xaOfSt6hpN5aQ&oe=671D844A" alt="Profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li><a href="#">Profile</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <ul className="p-4 space-y-4">
          <li><a href="#" className="text-black hover:text-gray-400">Home</a></li>
          <li><a href="#" className="text-black hover:text-gray-400">About</a></li>
          <li><a href="#" className="text-black hover:text-gray-400">Services</a></li>
          <li><a href="#" className="text-black hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
    );
};

export default Header;