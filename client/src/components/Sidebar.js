import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { useGlobalContext } from "../useContext";

function Sidebar() {
  const { isSidebar, setSidebar } = useGlobalContext();
  

const [scroll, setScroll] = React.useState(0);

React.useEffect(() => {
  document.addEventListener("scroll", () => {
    const scrollCheck = window.scrollY >0;
    if (scrollCheck !== scroll) {
      setScroll(scrollCheck);
    }
  });
});

  return (
    <Wrapper
      className={`
        ${!isSidebar
          ? "close section__center"
          : "open section__center sidebar"}`}>
      <div className="links__container">
        <Link to="experience" smooth={true} offset={0} onClick={()=>setSidebar(!isSidebar)}>
        Experience
      </Link>
      <Link to="projects" smooth={true} offset={0} onClick={()=>setSidebar(!isSidebar)}>
        Projects
      </Link>
      <Link to="contact" smooth={true} offset={0} onClick={()=>setSidebar(!isSidebar)}>
        Contact
      </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - 5rem);
  padding: 8rem 3rem;
  right: 0;
  z-index: 1000;
  position: fixed;
  transition: all 0.5s ease;

  &.open {
    background: var(--clr-navy-7);
    transform: translateX(0%);
    transition: all 0.5s ease;
  }

  .links__container {
    margin-top: -3.5rem;
  }

  &.close {
    transform: translateX(100%);
    transition: all 0.5s ease;
  }

  a {
    display: block;
    margin: 0 auto;
    margin-bottom: 3.5rem;
    font-size: 1.2rem;
    letter-spacing: 0.08rem;
    text-align: center;
    cursor: pointer;
    width: max-content;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    letter-spacing: 0.2rem;
    border-bottom: 2px solid var(--clr-grey-8);
    border-radius: 35%;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
