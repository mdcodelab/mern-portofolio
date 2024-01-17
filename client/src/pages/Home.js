import React from 'react';
import styled from "styled-components";
import { useGlobalContext } from '../useContext';
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
  const {isSidebar}=useGlobalContext();

  return (
    <Wrapper
      className={
        !isSidebar ? "page-100 home__container section__center" : "hidden"
      }
      id="home"
    >
      <div className="home__content">
        <h1 className="title">Full Stack</h1>
        <h1 className="title">Web Developer</h1>
        <p style={{ paddingTop: "1.5rem", paddingBottom: "0.5rem" }}>
          Hi, I'm <span className="name">Mihaela</span>
        </p>
        <p>a passionate web developer & content writer.</p>
        <div
          className="home__content__contact__icons">
          <a href="https://github.com/mdcodelab">
            <FiGithub></FiGithub>
          </a>
          <a href="https://www.linkedin.com/in/mihaela-diaconu-5538a3204/">
            <CiLinkedin></CiLinkedin>
          </a>
        </div>
        <div className="home__content__tech__icons">
          <div className="home__tech__icons__intro">
            <p>Tech Stack</p>
            <p className="display">|</p>
            <hr className="none"></hr>
          </div>
          <div className="home__tech__icons">
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
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 3rem;
  height: 100vh;
  background-color: var(--clr-new);
  position: relative;
  background-image: url("assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 2px solid white;
  .home__content {
    position: relative;
    height: calc(100vh - 8rem);
  }

  .home__content h1 {
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
    letter-spacing: 0.15rem;
    margin-bottom: 0.5rem;
    color: var(--clr-title);
  }

  .home__content p {
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

  .home__content__contact__icons {
    width: 6rem;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;
  }

  .home__content__contact__icons a {
    font-size: 2.7rem;
    color: var(--clr-grey-8);
    background: transparent;
  }

  .home__content__tech__icons {
    position: absolute;
    bottom: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30rem;
    height: 100%;
  }

  .home__tech__icons__intro {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 8rem;
  }

  .home__tech__icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20rem;
    flex-wrap: wrap;
    height: 100%;
  }

  @media only screen and (max-width: 500px) {
    .home__content__tech__icons {
      flex-direction: column;
      width: 350px;
      left: 50%;
      transform: translateX(-50%);
      border: 2px solid red;
    }
    .home__tech__icons__intro {
      flex-direction: column;
      margin-bottom: 1rem;
    }
    .home__tech__icons__intro p {
      margin-bottom: 1rem;
    }
    .display {
      display: none;
    }
    .none {
      display: block;
      width: 10rem;
      height: 1.5px;
    }
    .title {
      font-size: 1.8rem;
      text-align: center;
    }
    .home__content p {
      font-size: 1.2rem;
      text-align: center;
      line-height: 2.5rem;
    }
    .home__content__contact__icons {
      margin: 3rem auto;
    }
  }

  @media only screen and (max-width: 350px) {
.home__tech__icons {
  width: 200px;
  flex-wrap: wrap;
}
.icons {
  font-size: 1.5rem;
}
  }


  .icons {
    width: max-content;
    height: max-content;
    font-size: 2.5rem;
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

  .image {
  }
`;

export default Home;
