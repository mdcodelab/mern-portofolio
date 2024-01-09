import React from "react";
import styled from "styled-components";

function Experience_small() {
  const [activeIndex, setActiveIndex] = React.useState(1);

  function handleClick(index) {
    setActiveIndex(activeIndex === index ? -1 : index);
  }

  return (
    <Wrapper className="experience__container_small">
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
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

export default Experience_small;
