import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";


import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <Toaster />
    </>
  );
}


   
  
export default App;