import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import styled from "styled-components";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper href="https://github.com/mdcodelab" className="scroll__btn"><FaGithubAlt></FaGithubAlt></Wrapper>
  );
};

const Wrapper = styled.a`
  position: fixed;
  bottom: 20px;
  left: 20px;
  font-size: 24px;
  cursor: pointer;
  color: var(--clr-red-light-2);
  text-decoration: none;
  font-size: 2rem;
  opacity: 0.8;
  transition: all 0.7s ease;

  &:hover {
    color: var(--clr-red-light-1);
    transform: scale(1.1);
    opacity: 1;
  }
`;

export default ScrollToTopButton;

