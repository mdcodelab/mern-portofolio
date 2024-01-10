import React from "react";
import ScrollIcon from "./components/ScrollIcon"
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { SidebarProvider} from "./useContext";
import ChatEntrancer from "./components/ChatEntrancer";


const App = () => {
  return (
    <SidebarProvider>
      <div className="app-container">
        <Navbar />
        <Sidebar></Sidebar>
        <div className="container">
          <Home />
          <Experience />
          <Projects />
          <Contact/>
          <ScrollIcon></ScrollIcon>
          <Chat></Chat>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default App;
