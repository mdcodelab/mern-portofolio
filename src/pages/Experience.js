import React from "react";
import styled from "styled-components";

const Experience = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? -1 : index);
  }

  return (
    <Wrapper
      className="page-100 about-container section__center"
      id="experience"
    >
      <h2 className="title">Experience</h2>
      <hr style={{ width: "100px", margin: "1rem auto" }}></hr>
      <div className="experience__container">
        <div className="items">
          <div
            className={`item item__1 ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => handleClick(0)}
          >
            <p>About me</p>
          </div>
          <div
            className={`item item__2 ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleClick(1)}
          >
            <p>Working experience</p>
          </div>
          <div
            className={`item item__3 ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => handleClick(2)}
          >
            <p>My projects</p>
          </div>
          <div
            className={`item item__4 ${activeIndex === 3 ? "active" : ""}`}
            onClick={() => handleClick(3)}
          >
            <p>Other</p>
          </div>
        </div>
        <div className="explanations">
          <div
            className={`explanation explanations__1 ${
              activeIndex === 0 ? "active" : "inactive"
            }`}
          >
            <p>Exp1</p>
          </div>
          <div
            className={`explanation explanations__2 ${
              activeIndex === 1 ? "active" : "inactive"
            }`}
          >
            <p>Exp2</p>
          </div>
          <div
            className={`explanation explanations__3 ${
              activeIndex === 2 ? "active" : "inactive"
            }`}
          >
            <p>Exp3</p>
          </div>
          <div
            className={`explanation explanations__4 ${
              activeIndex === 3 ? "active" : "inactive"
            }`}
          >
            <p>Exp4</p>
          </div>
        </div>
        <div className="cover"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem;
  border: 2px solid red;

  .experience__container {
    display: flex;
    align-items: center;
    margin-top: 3rem;
    border-left: 2px solid var(--clr-red-light-2);
  }

  .items {
    flex: 1;
    cursor: pointer;

    .item {
      cursor: pointer;
      color: var(--clr-grey-6);
      position: relative;

      &.active {
        font-weight: bold; /* Add your styling for the active state */
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px; /* Height of the bottom border */
          background-color: blue; /* Your desired color for the bottom border */
        }
      }
    }
  }

  .explanations {
    flex: 1;

    .explanation {
      &.active {
        display: block;
      }
      &.inactive {
        display: none;
      }
    }
  }
`;

export default Experience;
