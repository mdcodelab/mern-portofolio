import React from "react";
//pages
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
//components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { AppProvider, useGlobalContext } from "./useContext";
import ChatEntrancer from "./components/ChatEntrancer";



const App = () => {
const [showEn, setShowEn] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowEn(true);
    }, 6000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <AppProvider>
      <div className="app-container section__center">
        <Navbar />
        <Sidebar></Sidebar>
        <Chat></Chat>
        {showEn && (
          <ChatEntrancer shoeEn={showEn} setShowEn={setShowEn}></ChatEntrancer>
        )}
        <div className="container">
          <Home />
          <Experience />
          <Projects />
          <Contact />
          <Footer></Footer>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
