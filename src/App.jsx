import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Navbar from "./components/Navbar";
import Blogs from "./sections/Blogs";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="blogs">
        <Blogs />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
