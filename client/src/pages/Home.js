import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../useContext"
// import { FaHtml5, FaNode } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { SiTailwindcss } from "react-icons/si";
// import { IoLogoJavascript } from "react-icons/io";
// import { FaReact } from "react-icons/fa";
// import { FaNodeJs } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";

const Home = () => {
  const { isSidebar } = useGlobalContext();

  return (
    <Wrapper
      className={
        !isSidebar ? "page-100 home__container section__center" : "hidden"
      } id="home">
      <article className="home__content">
        <h1 className="title">Full Stack</h1>
        <h1 className="title" style={{paddingBottom: "1rem"}}>Web Developer</h1>
        <p style={{ paddingTop: "1.5rem", paddingBottom: "1rem" }}>
          Hi, I'm <span className="name">Mihaela</span>
        </p>
        <p style={{ paddingBottom: "2.5rem" }}>
          a dedicated Web Developer & Designer.
        </p>
        <a href="#contact" className="btn__contact">
          <div>Get In Touch</div>
        </a>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 3rem;
  height: calc(100vh - 5rem);
  background-color: var(--clr-navy-7);
  background-image: url("assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  /* animation: showImage 0.5s linear forwards;

  @keyframes showImage {
    from {
      background-image: none;
    }
    to {
      background-image: url("assets/background.jpg");
    }
  } */

  .home__content {
    background: transparent;
    padding-top: 1.5rem;
    padding-left: 5rem;
    width: max-content;
  }

  .title {
    letter-spacing: 0.18rem;
    color: var(--clr-title);
    transform: translateY(300px);
    opacity: 0;
    animation: moveTitle 1s linear forwards;
  }

  @keyframes moveTitle {
    0% {
      transform: translateX(-300px);
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  p {
    color: var(--clr-grey-8);
    letter-spacing: 0.1rem;
    transform: translateY(300px);
    opacity: 0;
    animation: moveParagraph 1s linear forwards;
  }

  @keyframes moveParagraph {
    0% {
      opacity: 0;
      transform: translateX(300px);
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  .name {
    font-family: "OpenSans", sans-serif;
    color: var(--clr-grey-8);
    font-weight: bold;
  }

  .btn__contact {
    margin: 0;
    animation: moveButton 1s linear forwards;
  }

  @keyframes moveButton {
    0% {
      opacity: 0;
      transform: translateY(300px);
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @media only screen and (max-width: 992px) {
    .home__container {
      position: relative;
    }
    .home__content {
      padding: 0;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .title {
      text-align: center;
    }
    p {
      text-align: center;
      font-size: 1rem;
    }
    .btn__contact {
      margin: 0 auto;
    }
  }

  @media (max-width: 380px) {
    .title {
      font-size: 1.8rem;
    }
    .home__container {
      height: 100%;
    }
    .home__content {
      height: 100%;
    }

    p {
      font-size: 0.9rem;
      text-align: center;
      max-width: 260px;
    }
  }
`;

export default Home;
