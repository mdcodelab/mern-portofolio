import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";
import { useGlobalContext } from "../useContext";
import styled from "styled-components";

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
    <Wrapper className={`navbar section-center ${isNavbarVisible ? "" : "sticky"}`}>
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
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 5rem;
  width: 100%;
  background: var(--clr-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: top 0.5s ease-in-out;
  border-bottom: 2px solid black;

  .sticky {
    top: 20px;
  }

  div.logo {
    flex: 1;
  }

  div.nav-links {
    display: flex;
    flex: 4;
    align-items: center;
    justify-content: end;
  }

  div.nav-links ul.links {
    display: flex;
    border: 2px solid red;
  }

  div.nav-links ul.links a {
    font-size: 1.2rem;
    display: inline-block;
    margin-right: 1.5rem;
    cursor: pointer;
    color: var(--clr-primary-1);
  }

  button {
    display: none;
  }

  @media only screen and (max-width: 992px) {
    .nav-links ul {
      display: none;
    }
    button {
      display: inline-block;
    }
  }

  a.active {
    color: red;
  }

  .icon-btn {
    border: none;
    outline: none;
    font-size: 1.8rem;
    background: transparent;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.3rem;
    transition: background 0.5se ease;
  }

  .icon-btn:hover {
    background: var(--clr-grey-9);
  }
///last
  ul.links li a {
    display: block;
    position: relative;
    padding: 5px;
    font-size: 18px;
    font-family: sans-serif;
    color: #fff;
    text-transform: uppercase;
    transition: 0.5s;
  }

  ul.links:hover li a {
    transform: scale(1.5);
    opacity: 0.2;
    filter: blur(5px);
  }

  ul.links li a:hover {
    transform: scale(1.7);
    opacity: 1;
    filter: blur(0);
    color: #fff;
  }

  ul.links li a:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ff497c;
    transition: 0.5s;
    transform-origin: right;
    transform: scaleX(0);
    z-index: -1;
  }

  ul.links li a:hover:before {
    transition: transform 0.5s;
    transform-origin: left;
    transform: scaleX(1);
  }
`;

export default Navbar;
