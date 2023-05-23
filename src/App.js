import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { SidebarProvider} from "./useContext";
import { useGlobalContext } from "./useContext";

const App = () => {

  //const { isSidebar, setSidebar } = useGlobalContext();

  return (
    <SidebarProvider>
      <div className="app-container">
        <Navbar />
        <Sidebar></Sidebar>
        <div className="container">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default App;
