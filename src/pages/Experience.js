import React from 'react';
import styled from "styled-components"

const Experience = () => {
  return (
    <Wrapper
      className="page-100 about-container section__center"id="experience">
      <h2 className="title">Experience</h2>
      <hr style={{ width: "100px", margin: "1rem auto" }}></hr>
      <div className="experience__container">
        <div className="items">

        </div>
        <div className="explanations">

        </div>
      </div>
      <div className="cover"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 3rem;
border: 2px solid red;

.experience__container {

}

`;

export default Experience;
