// App.js
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
