import React from "react";
import styled from "styled-components";

function Exp() {
  const [activeIndex, setActiveIndex] = React.useState(1);

  function handleClick(index) {
    setActiveIndex(activeIndex === index ? -1 : index);
  }

  return (
    <Wrapper
      className="page-100 about-container section__center"
      id="experience"
    >
      <h2 className="title">Experience</h2>
      <hr style={{ width: "100px", margin: "1rem auto" }}></hr>
      <div className="experience__container">
        <div className="container container__1" onClick={() => handleClick(1)}>
          <p className="heading__1">About me</p>
          <div className={`content__1 ${activeIndex === 1 ? "" : "none"}`}>
            Exp1</div>
        </div>
        <div className="container container__2" onClick={() => handleClick(2)}>
          <p className="heading__2">Working experience</p>
          <div className={`content__2 ${activeIndex === 2 ? "" : "none"}`}>
            Exp2
          </div>
        </div>

        <div className="container container__3" onClick={() => handleClick(3)}>
          <p className="heading__3">My projects</p>
          <div className={`content__3 ${activeIndex === 3 ? "" : "none"}`}>
            Exp3
          </div>
        </div>

        <div className="container container__4" onClick={() => handleClick(4)}>
          <p className="heading__4">Other</p>
          <div className={`content__4 ${activeIndex === 4 ? "" : "none"}`}>
            Exp4
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 3rem;
  border: 2px solid red;

  .experience__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 2rem;
  }

  .container {
    height: 10rem;
    margin-bottom: 3rem;
    cursor: pointer;
  }

  .none {
    display: none;
  }
`;

export default Exp;
