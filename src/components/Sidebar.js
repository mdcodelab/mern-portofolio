import React from 'react';


const Sidebar = () => {
  const [activeLink, setActiveLink] = React.useState("home");
  return (
    <div className=" sidebar-container">
        <ul className="links">
          <li>
            <a href="/"
              onClick={() => setActiveLink("home")}
              className={activeLink === "home" ? "active" : ""}
            >Home</a>
          </li>
          <li>
            <a href="/#about"
              onClick={() => setActiveLink("about")}
              className={activeLink === "about" ? "active" : ""}
            >About</a>
          </li>
          <li>
            <a href="/#projects"
              onClick={() => setActiveLink("projects")}
              className={activeLink === "projects" ? "active" : ""}
            >Projects</a>
          </li>
          <li>
            <a href="/#contact"
              onClick={() => setActiveLink("contact")}
              className={activeLink === "contact" ? "active" : ""}>
              Contact</a>
          </li>
        </ul>
    </div>
  );
}

export default Sidebar;
