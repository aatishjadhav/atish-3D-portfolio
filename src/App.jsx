import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blogs from "./sections/Blogs";

function App() {
  return (
    <>
    <Navbar />
      <div id="home"><Hero /></div>
       <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="blogs"><Blogs /></div>
     

      
    </>
  );
}

export default App;
