import React from 'react';
import {IoCloseOutline} from "react-icons/io";
import {HiMenuAlt3} from "react-icons/hi";


const Navbar = () => {
  const[activeLink, setActiveLink]=React.useState("home");
  
  const[isNavbarVisible, setIsNavbarVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavbarVisible(currentScrollPos > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <nav className={`navbar section-center ${isNavbarVisible ? "" : "sticky"}`}>
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <div className="nav-links">
        <ul className="links">
          <li><a href="/"
              onClick={() => setActiveLink("home")}
              className={activeLink === "home" ? "active" : ""}>Home</a>
          </li>
          <li><a href="/#about"
              onClick={() => setActiveLink("about")}
              className={activeLink === "about" ? "active" : ""}>About</a>
          </li>
          <li><a href="/#projects"
              onClick={() => setActiveLink("projects")}
              className={activeLink === "projects" ? "active" : ""}> Projects</a>
          </li>
          <li>
            <a href="/#contact"
              onClick={() => setActiveLink("contact")}
              className={activeLink === "contact" ? "active" : ""}>Contact</a>
          </li>
        </ul>
        <button type="button" className="icon-btn">
          <HiMenuAlt3></HiMenuAlt3>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

