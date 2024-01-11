import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";
import { useGlobalContext } from "../useContext";
import styled from "styled-components";

const Navbar = () => {
  let { isSidebar, setSidebar } = useGlobalContext();
  
  const [activeLink, setActiveLink] = React.useState("home");

  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper
      className={scroll > 0 ? "navbar section__center colorNav" : "navbar section__center"}
    >
      <div className="logo">
        <div className="logo__initial">M</div>
        <div className="logo__name">
          <h5 className="logo__full__name">MIHAELA DIACONU</h5>
          <p>WEB DEVELOPER</p>
        </div>
      </div>
      <div className="nav-links">
        <ul className="links">
          <li>
            <Link
              to="home"
              onClick={() => setActiveLink("home")}
              smooth={true}
              offset={-80}
              className={activeLink === "home" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              onClick={() => setActiveLink("experience")}
              smooth={true}
              offset={-80}
              className={activeLink === "experience" ? "active" : ""}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              onClick={() => setActiveLink("projects")}
              smooth={true}
              offset={-80}
              className={activeLink === "projects" ? "active" : ""}
            >
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
          className="icon__btn"
          onClick={() => setSidebar(!isSidebar)}
        >
          {!isSidebar ? (
            <HiMenuAlt3
              style={{ color: "var(--clr-grey-8)" }}
              className="icon__sidebar"
            ></HiMenuAlt3>
          ) : (
            <IoCloseOutline
              style={{ color: "var(--clr-grey-8)" }}
              className="icon__sidebar"
            ></IoCloseOutline>
          )}
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 5rem;
  width: 100%;
  max-width: var(--max-width);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all 2s linear;


&.colorNav {
  background: linear-gradient(to right, #0C2340 50%, rgb(75,0,130) 50%);
      background-size: 200% 100%;
      animation: gradientAnimation 0.5s linear reverse forwards;
}

@keyframes gradientAnimation {
      0% {
        background-position: 100% 0%;
      }
      100% {
        background-position: 0% 100%;
      }
    }


  div.logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: max-content;
    height: 100%;
  }

  div.logo .logo__initial {
    border: 0.08px solid var(--clr-green-light-1);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
  }

  .logo__name {
    font-family: "Open Sans", sans-serif;
    font-size: 1.9rem;
    color: var(--clr-green-light-1);
    margin-top: 1rem;
  }

  .logo__full__name {
    margin: 0;
    margin-bottom: 0.3rem;
    letter-spacing: 0.08rem;
    font-size: 1.05rem;
  }

  .logo__name p {
    color: var(--clr-grey-6);
    font-size: 0.7rem;
    letter-spacing: var(--spacing);
    text-align: center;
  }

  div.nav-links {
    display: flex;
    flex: 4;
    align-items: center;
    justify-content: flex-end;
  }

  div.nav-links ul.links {
    display: flex;
  }

  div.nav-links ul.links a {
    font-size: 1.05rem;
    letter-spacing: 0.06rem;
    display: inline-block;
    margin-right: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-8);
  }

  button {
    display: none;
  }

  @media only screen and (max-width: 992px) {
    div.nav-links ul.links a {
      display: none;
    }
    button {
      display: inline-block;
    }
  }

  @media only screen and (max-width: 732px) {
    div.nav-links ul.links a {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) {
    .logo__name {
      display: none;
    }
    }
  }

  //effects
  a.active {
    color: var(--clr-red-light-1) !important;
  }

  .icon__btn {
    border: none;
    outline: none;
    font-size: 1.8rem;
    background: transparent;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.3rem;
  }

  .icon__sidebar {
    transition: all 0.5s ease-in-out;
  }

  .icon__btn:hover .icon__sidebar{
    background: var(--clr-grey-8);
    color: var(--clr-navy-7) !important;
    padding: 0.3rem;
    border-radius: 50%;
  }
  ///last
  ul.links li a {
    display: block;
    position: relative;
    padding: 5px;
    font-size: 1rem;
    font-family: sans-serif;
    color: #fff;
    text-transform: uppercase;
    transition: 0.5s;
  }

  ul.links li a:hover {
    transform: scale(1.3);
    opacity: 0.2;
    filter: blur(5px);
  }

  ul.links li a:hover {
    transform: scale(1.3);
    opacity: 1;
    filter: blur(0);
    color: #fff;
    border-radius: 0.3rem;
  }

  ul.links li a:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-grey-6);
    transition: 0.5s;
    transform-origin: right;
    transform: scaleX(0);
    z-index: -1;
    border-radius: 0.3rem;
  }

  ul.links li a:hover:before {
    transition: transform 0.5s;
    transform-origin: left;
    transform: scaleX(1);
    border-radius: 0.3rem;
  }
`;

export default Navbar;



