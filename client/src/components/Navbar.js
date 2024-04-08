import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { useGlobalContext } from "../useContext";
import styled from "styled-components";

const Navbar = () => {
  let { isSidebar, setSidebar } = useGlobalContext();

  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  //for img:
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


//for the image
  const handleClickImage = () => {
    scrollToTop();
    window.history.replaceState({}, document.title, window.location.pathname); //replace old url
    setSidebar(false);
  };

//for the rest of links
  const handleClick = (e, id) => {
    e.preventDefault();
    window.location.hash = id;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({ top: y - 80, behavior: "smooth" }); // Aplicăm offset-ul de înălțime aici
    setSidebar(false);
  };




  return (
    <Wrapper
      className={
        scroll > 0
          ? "navbar section__center colorNav"
          : "navbar section__center"
      }
    >
        <div className="logo">
          <img src="assets/logo.png" alt="logo" onClick={()=> handleClickImage()}></img>
        </div>
      <div className="nav-links">
        <ul className="links">
          <li>
            <a href="#home"></a>
          </li>
          <li>
            <a
              href="#experience" onClick={(e)=> handleClick(e, "experience")}>
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects" onClick={(e)=> handleClick(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact" onClick={(e)=> handleClick(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="icon__btn button"
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
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 5rem;
  width: 100%;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: var(--clr-navy-7);


&.colorNav {
  background: linear-gradient(to right, #0C2340 50%,  #290916 50%);
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

  .logo {
    width: 2.7rem;
    height: 2.7rem;
    cursor: pointer;
  }

  .logo img {
  width: 100%;
  height: auto;
  }

  .nav-links {
    display: flex;
    flex: 4;
    align-items: center;
    justify-content: flex-end;
  }

  .nav-links ul.links {
    display: flex;
  }

  .nav-links ul.links a {
    font-size: 0.9rem;
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
    .nav-links ul.links a {
      display: none;
    }
    button {
      display: inline-block;
      position: absolute;
      right: 1rem;
    }
  }

  @media only screen and (max-width: 732px) {
    .nav-links ul.links a {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) {
    .logo__name {
      display: none;
    }
    }

  //effects
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
    transform: scale(1.1);
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
