import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/atish.jpg";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-12 lg:px-16 py-24 lg:py-32">
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl lg:text-6xl font-bold text-gray-800"
        >
          Hi, <br></br>I'm <span className="text-sky-600">Atish Jadhav</span>
        </motion.h1>
        <p className="mt-4 text-gray-600 text-2xl lg:text-3xl max-w-xl">
          Full-stack Web Developer
        </p>
        <div className="mt-6 flex gap-5 justify-center items-center md:justify-start">
          <a
            // href="https://drive.google.com/file/d/1yCVrcGn6WU9IXIoWW3dlTupdNNqA7noF/view?usp=sharing"
            href="https://drive.google.com/file/d/1hU-QZIUaVQHcc7xRpSTahopdfH1yJQgy/view?usp=sharing"
            target="blank"
            className="hover:bg-[#121932] py-2 px-5 rounded-md bg-[#ffffff] transition font-medium text-black border hover:text-white cursor-pointer"
          >
            View Resume
          </a>
          <a
            href="https://github.com/aatishjadhav"
            className="nav-link "
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <FaGithub size={30} />
          </a>

          <a
            href="https://www.linkedin.com/in/atish-jadhav07/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="mt-10 md:mt-0 w-48 h-48 md:w-85 md:h-85 rounded-full overflow-hidden border-4 border-blue-100 shadow-md"
      >
        <img
          src={profilePic}
          alt="Atish Jadhav"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
