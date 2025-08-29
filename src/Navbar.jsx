import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const link =
    "px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-50 hover:text-green-700";

  const activeLink =
    "px-3 py-2 rounded-lg text-sm font-medium bg-green-600 text-white";

  return (
    <header className="border-b fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="data:image/png;base64,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"
            alt="AgroMart Logo"
            className="h-14"
          />
          <div className="font-bold text-lg text-green-700 ml-2">AgroMart</div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : link)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeLink : link)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeLink : link)}
          >
            Contact
          </NavLink>
        </nav>

        {/* Search + Cart (desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <input
            className="border rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/30"
            placeholder="Search products..."
          />
          <button className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm hover:bg-gray-50">
            <ShoppingCart size={18} /> Cart
          </button>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="sm:hidden text-2xl text-green-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white shadow-md border-t">
          <nav className="flex flex-col p-4 space-y-3">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? activeLink : link)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? activeLink : link)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? activeLink : link)}
            >
              Contact
            </NavLink>

            {/* Search + Cart (mobile) */}
            <input
              className="border rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/30"
              placeholder="Search products..."
            />
            <button className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm hover:bg-gray-50">
              <ShoppingCart size={18} /> Cart
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
