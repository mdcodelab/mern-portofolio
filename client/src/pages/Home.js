import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../useContext";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaHtml5, FaNode } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Home = () => {
  const { isSidebar } = useGlobalContext();

  return (
    <Wrapper
      className={
        !isSidebar ? "page-100 home__container section__center" : "hidden"} id="home">
      
        <h1 className="title">Full Stack</h1>
        <h1 className="title">Web Developer</h1>
        <p style={{ paddingTop: "1.5rem", paddingBottom: "1rem" }}>
          Hi, I'm <span className="name">Mihaela</span>
        </p>
        <p style={{marginBottom: "2rem"}}>a passionate web developer & content writer.</p>
        <div className="contact__icons">
          <a href="https://github.com/mdcodelab">
            <FiGithub className="icons"></FiGithub>
          </a>
          <a href="https://www.linkedin.com/in/mihaela-diaconu-5538a3204/">
            <CiLinkedin className="icons"></CiLinkedin>
          </a>
        </div>
        <div className="tech__icons__container">
          <div className="icons__intro">
            <p>Tech Stack</p>
            <p className="display" style={{color: "var(--clr-grey-8", marginLeft: "0.2rem"}}>|</p>
            <hr className="none"></hr>
          </div>
          <div className="tech__icons">
            <FaHtml5 className="icon__html icons" title="HTML5"></FaHtml5>
            <FaCss3Alt className="icon__css icons" title="CSS3"></FaCss3Alt>
            <SiTailwindcss
              className="icon__tailwind icons"
              title="Tailwind"
            ></SiTailwindcss>
            <IoLogoJavascript
              className="icon__javascript icons"
              title="JavaScript"
            ></IoLogoJavascript>
            <FaReact className="icon__react icons" title="React.js"></FaReact>
            <FaNodeJs className="icon__node icons" title="Node.js"></FaNodeJs>
            <SiMongodb
              className="icon__mongo icons"
              title="MongoDB"
            ></SiMongodb>
          </div>
        </div>
    
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3rem;
  height: calc(100vh - 5rem);
  background-color: var(--clr-new);
  background-image: url("assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  border: 2px solid red;

  .title {
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
    letter-spacing: 0.15rem;
    margin-bottom: 0.5rem;
    color: var(--clr-title);
  }

  p {
    margin: 0;
    padding: 0;
    color: var(--clr-grey-8);
    letter-spacing: 0.06rem;
  }

  .name {
    font-family: "OpenSans", sans-serif;
    color: var(--clr-green-light-1);
    font-weight: bold;
  }

  .none {
    display: none;
  }

  //contact icons
  .contact__icons {
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .contact__icons a {
    font-size: 2.7rem;
    color: var(--clr-grey-8);
  }

  //tech icons
  .tech__icons__container {
    position: absolute;
    left: 3rem;
    bottom: 5.8rem;
    width: 450px;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icons__intro {
    display: flex;
    width: 120px;
    align-items: center;
    justify-content: space-between;
  }

  .icons__intro p {
    color: var(--clr-gey-8);
    margin: 0; padding: 0;
  }

  .display {
    
  }

  .tech__icons {
    width: 320px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .icons {
    font-size: 2.5rem;
    display: block;
    width: max-content;
    height: max-content;
    border-radius: 50%;
  }

  .icon__html {
    color: var(--clr-red-light-1);
    background: var(--clr-grey-8);
  }

  .icon__css {
    color: var(--clr-light-blue-3);
    background: var(--clr-grey-8);
  }

  .icon__tailwind {
    color: green;
    background: black;
  }

  .icon__javascript {
    color: black;
    background: #fcf55f;
  }

  .icon__react {
    color: var(--clr-light-blue-2);
    background: black;
  }

  .icon__mongo {
    color: var(--clr-green-dark);
    background: black;
  }

  @media only screen and (max-width: 500px) {
    .title {
        text-align: center;
    }
    p {
        text-align: center;
        font-size: 1rem;
    }
    .contact__icons {
        margin: 0 auto;
    }
    .tech__icons__container {
      width: 100%;
      flex-direction: column;
      margin-top: 3rem;
      position: static;
    }
    .none {
      display: block;
      width: 10rem;
      height: 1.5px;
      color: var(--clr-grey-8);
      margin: 1rem auto;
    }
    .icons__intro {
      flex-direction: column;
      width: 100%;
    }

    .display {
      display: none;
    }
    .tech__icons {
        width: 100%;
        height: 100%;
    }
  }

  @media (max-width: 350px) {
    .home__container {
        height: 100%;
    }
    p {
        font-size: 1.2rem;
    }
    .contact__icons {
        width: 4rem;
    }
    .tech__icons__container {
        width: 100%;
      height: 8rem;
    }
    .icons {
      font-size: 1.8rem;
    }
  }
`;

export default Home;
