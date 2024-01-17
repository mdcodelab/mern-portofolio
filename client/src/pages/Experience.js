import React from "react";
import styled from "styled-components";
import Experience_small from "./Experience_small";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  const [activeIndex, setActiveIndex] = React.useState(1);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? -1 : index);
  }

  React.useEffect(() => {
    AOS.init();
  }, []);

  ///experience_small
  const[windowWidth, setWindowWidth]=React.useState(window.innerWidth);
React.useEffect(()=> {
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  window.addEventListener("resize", handleResize);
return () => {
      window.removeEventListener('resize', handleResize);
    };
}, []);

console.log(window.innerWidth);


  return (
    <Wrapper
      className="page-100 section__center" id="experience">
      <h2 className="title">Experience</h2>
      <hr style={{ width: "100px", margin: "1rem auto" }}></hr>
      {window.innerWidth > 1100 && (
        <div className="experience__container">
        <div className="items" data-aos="fade-up" data-aos-duration={2000}>
          <div
            className={`item ${activeIndex === 1 ? "active" : ""}`} onClick={() => handleClick(1)}>
            <p>About me</p>
          </div>
          <div
            className={`item ${activeIndex === 2 ? "active" : ""}`} onClick={() => handleClick(2)}>
            <p>Working experience</p>
          </div>
          <div className={`item ${activeIndex === 3 ? "active" : ""}`} onClick={() => handleClick(3)}>
            <p>My Projects</p>
          </div>
          <div
            className={`item ${activeIndex === 4 ? "active" : ""}`} onClick={() => handleClick(4)}>
            <p>Other</p>
          </div>
        </div>
        <div
          className="explanations" data-aos="fade-up" data-aos-duration={2000}>
          <div
            className={`explanation ${activeIndex === 1 ? "active" : "inactive"}`}>
            <p>Exp1</p>
          </div>
          <div
            className={`explanation ${activeIndex === 2 ? "active" : "inactive"}`}>
            <p>Exp2</p>
          </div>
          <div className={`explanation ${activeIndex === 3 ? "active" : "inactive"}`}>
            <p>Exp3</p>
          </div>
          <div className={`explanation ${activeIndex === 4 ? "active" : "inactive"}`}>
            <p>Exp4</p>
          </div>
        </div>
      </div>
      )}
      {window.innerWidth <= 1100 && (<Experience_small></Experience_small>)}
    </Wrapper>
  );
};

const Wrapper = styled.div`
background: var(--clr-navy-7);
  height: 100%;
  padding: 3rem;
  border: 2px solid red;

  .experience__container {
    display: flex;
    align-items: center;
    margin-top: 3rem;
    border-left: 2px solid var(--clr-red-light-2);
  }

  .items {
    flex: 0.4;
    cursor: pointer;
  }

  .item {
    cursor: pointer;
    color: var(--clr-grey-8);
    position: relative;
    overflow: hidden;

    p {
      margin: 0;
      padding: 1.5rem 0;
      padding-left: 1.5rem;
      color: var(--clr-grey-8);
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      background-color: var(--clr-red-light-1);
      transition: width 0.7s ease-in-out;
    }

    &::before {
      width: ${(props) => (props.active ? "100%" : "0")};
    }

    &::after {
      width: ${(props) => (props.active ? "100%" : "0")};
    }

    &.active {
      font-weight: bold;

      &::before,
      &::after {
        width: 100%;
      }
    }
  }

  .explanations {
    flex: 1;
    height: 100%;
    border: 2px solid red;
  }

  .explanation {
    height: auto;
    opacity: 1;
    max-height: 300px;
    height: 500px;
    transition: max-height 0.7s ease-in-out, opacity 0.7s ease-in-out;

    &.inactive {
      opacity: 0;
      max-height: 0;
    }
    p {
      color: var(--clr-grey-8);
    }
  }
`;

export default Experience;
