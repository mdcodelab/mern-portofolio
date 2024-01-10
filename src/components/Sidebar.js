import React from "react";
import { useGlobalContext } from "../useContext";
import { Link } from "react-scroll";

const Sidebar = () => {
  const { isSidebar, setSidebar } = useGlobalContext();
  const [activeLink, setActiveLink] = React.useState("home");

  const handleClick = (value) => {
    setSidebar(!isSidebar);
    setActiveLink(value);
  };

  return (
    <div className={isSidebar ? "close section__center" : "sidebar__container section__center sidebar"}>
      <ul className="links sidebar-links">
        <li>
          <Link to="/"
            onClick={() => handleClick("home")}
            className={activeLink === "home" ? "active" : ""}
            smooth={true} offset={0}>
            Home
          </Link>
        </li>
        <li>
          <Link to="experience"
            onClick={() => handleClick("experience")}
            className={activeLink === "experience" ? "active" : ""}
            smooth={true} offset={-455}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="projects"
            onClick={() => handleClick("projects")}
            className={activeLink === "projects" ? "active" : ""} 
            smooth={true} offset={-155}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact"
            onClick={() => handleClick("contact")}
            className={activeLink === "contact" ? "active" : ""}
            smooth={true} offset={-155}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
