import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center">
        
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <NavLink
            to="/"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            About
          </NavLink>
          <NavLink
            to="/project"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Contact
          </NavLink>
        </div>

        
        <div className="flex gap-6 mb-4">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition duration-300"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-300 transition duration-300"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
        </div>

        
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

