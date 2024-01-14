import React from 'react';
import styled from "styled-components";
import { useGlobalContext } from '../useContext';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaHtml5, FaNode } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";




const Home = () => {
  const {isSidebar}=useGlobalContext();
  return (
    <Wrapper className={!isSidebar ? "page-100 home__container section__center" : "hidden"} id="home">
      <div className="home__content">
        <h1>Full Stack React/Node</h1>
        <h1>Web Developer</h1>
        <p>Hi, I'm <span>Mihaela</span>,</p>
        <p>a passionate web developer & content writer</p>
        <div className="home__content__contact__icons">
          <a href="https://github.com/mdcodelab"><FaGithub></FaGithub></a>
          <a href="https://www.linkedin.com/in/mihaela-diaconu-5538a3204/"><CiLinkedin></CiLinkedin></a>
        </div>
        <div className="home__content__tech__icons">
          <div className="home__tech__icons__exp">
            <span>Tech Stack</span>
            <span>|</span>
            <hr className="none"></hr>
          </div>
          <div className="home__tech__icons">
            <FaHtml5 className="icon__html icons" title="HTML5"></FaHtml5>
            <FaCss3Alt className="icon__css icons" title="CSS3"></FaCss3Alt>
            <SiTailwindcss className="icon__tailwind icons" title="Tailwind"></SiTailwindcss>
            <IoLogoJavascript className="icon__javascript icons" title="JaveScript"></IoLogoJavascript>
            <FaReact className="icon__react icons icons" title="React.js"></FaReact>
            <FaNodeJs className="icon__node icons" title="Node.js"></FaNodeJs>
            <SiMongodb className="icon__mongo icons" title="MongoDB"></SiMongodb>         
          </div>
        </div>

      </div> 
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 3rem;
  height: 100vh;
  background-color: var(--clr-navy-7);
  position: relative;
  border: 3px solid red;

  .home__content {
    position: relative;
    height: calc(100vh - 8rem);
    border: 2px solid yellow;
  }

  .home__content h1 {
    margin: 0; padding: 0;
    letter-spacing: 0.1rem;
    margin-bottom: 0.5rem;
  }

  .home__content p {
    margin:0; padding: 0;
    color: #fff;
    padding: 1rem 0;
    letter-spacing: 0.06rem;

  }

  .none {
    display: none;
  }

  .home__content__tech__icons {
    position: absolute;
    bottom: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    height: auto;
    bottom: 1.1rem;
    border: 2px solid white;
  }

  .home__tech__icons {
    width: 25rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid red;
  }

  .icons {
    width: max-content;
    height: max-content;
    font-size: 3.2rem;
    border-radius: 0.3rem;
  }

  .icon__html {
    color: var(--clr-red-light-1);
    background: #fff;
  }

  .icon__css {
    color: var(--clr-light-blue-3);
    background: #fff;
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
`;

export default Home;
