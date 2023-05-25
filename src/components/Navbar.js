import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";
import { useGlobalContext } from "../useContext";

const Navbar = () => {
  let { isSidebar, setSidebar } = useGlobalContext();

  const [activeLink, setActiveLink] = React.useState("home");

  const [isNavbarVisible, setIsNavbarVisible] = React.useState(true);

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
          <li>
            <Link
              to="home"
              onClick={() => setActiveLink("home")}
              smooth={true} offset={-80}
              className={activeLink === "home" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              onClick={() => setActiveLink("about")}
              smooth={true} offset={-80}
              className={activeLink === "about" ? "active" : ""}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              onClick={() => setActiveLink("projects")}
              smooth={true} offset={-80}
              className={activeLink === "projects" ? "active" : ""}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              onClick={() => setActiveLink("contact")}
              smooth={true}
              offset={-80}
              className={activeLink === "contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="icon-btn"
          onClick={() => setSidebar(!isSidebar)}
        >
          {!isSidebar ? (
            <HiMenuAlt3></HiMenuAlt3>
          ) : (
            <IoCloseOutline></IoCloseOutline>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
