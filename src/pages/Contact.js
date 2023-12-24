import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper className="section__center" id="contact">
      <div className="">
        <div className="about-container section contact-container section__center">
          Contact
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div `
height: 100vh;
`;

export default Contact;
