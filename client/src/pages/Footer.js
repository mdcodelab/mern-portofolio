import React from "react";
import styled from "styled-components";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClickImage = () => {
    scrollToTop();
    window.history.replaceState({}, document.title, window.location.pathname); //delete old irl
  };

  return (
    <Wrapper>
      <p className="footer">
        &copy; {new Date().getFullYear()}
        <button onClick={()=> handleClickImage()}>
          <img src="assets/logo__footer.png" alt="logo"></img>
        </button>
        . All Rights Reserved.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 5rem;
  background: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .footer {
    display: flex;
    align-items: center;
    width: 14rem;
    justify-content: space-between;
    font-size: 0.9rem;
    color: var(--clr-grey-8);
  }

  .footer button {
    background: none;
    border: none;
    color: var(--clr-grey-8);
    cursor: pointer;
  }

  .footer button img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default Footer;
