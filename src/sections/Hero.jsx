import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import profilePic from "../assets/atish.jpg";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-10 mt-24 lg:py-12">
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-6xl font-bold text-gray-800"
        >
          Hi, <br></br>I'm <span className="text-blue-600">Atish Jadhav</span>
        </motion.h1>
        <p className="mt-4 text-gray-600 text-3xl max-w-xl">
          Full-stack Web Developer
        </p>
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition"
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
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/atish-jadhav07/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <FaLinkedin size={30} />
          </a>
          {/* <a
            href="mailto:you@example.com"
            className="border border-gray-300 px-5 py-2 rounded-xl hover:bg-gray-100"
          >
            Contact
          </a> */}
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
