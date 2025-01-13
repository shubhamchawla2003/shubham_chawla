import { NavLink } from "react-router-dom";
import photo1 from "../assets/photo1.jpg";
import Typewriter from "typewriter-effect";
import {motion} from "framer-motion";

const Home = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 md:py-32 gap-16">
        <motion.div
        initial = {{scale:0}}
        animate = {{scale:1}}
        transition={{duration:1}}
         className="flex flex-col justify-center items-start md:w-1/2">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["I'm a Web Developer"],
              }}
            />
          </h1>

          <p className="text-gray-400 text-lg text-justify mb-6 leading-relaxed">
            I am an experienced Frontend Developer with professional expertise
            in the field. My passion for frontend development is reflected in my
            dedication and creativity in every project I undertake. Let's build
            something amazing together!
          </p>

          <NavLink
            to="/about"
            className="text-lg font-semibold text-white bg-gradient-to-r
             from-cyan-500 to-blue-500
             px-6 py-3 rounded-lg shadow-lg hover:scale-105
              transform transition duration-300"
          >
            Learn More
          </NavLink>
        </motion.div>

        <div className="flex justify-center items-center md:w-1/2">
          <img
            className="rounded-full w-80 h-80 object-cover shadow-xl md:w-96 md:h-96"
            src={photo1}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
