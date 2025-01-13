
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
        
        <div className="text-3xl font-bold text-indigo-500">
          <NavLink to="/">Portfolio</NavLink>
        </div>

       
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition"
            }
          >
            Project
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition"
            }
          >
            Contact
          </NavLink>
        </div>

        
        <div
          className="md:hidden text-3xl cursor-pointer text-yellow-400"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-gray-200 flex flex-col items-center space-y-6 py-10 z-40">
          <NavLink
            to="/"
            className="text-2xl hover:text-yellow-400 transition"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-2xl hover:text-yellow-400 transition"
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/project"
            className="text-2xl hover:text-yellow-400 transition"
            onClick={toggleMenu}
          >
            Project
          </NavLink>
          <NavLink
            to="/contact"
            className="text-2xl hover:text-yellow-400 transition"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;

