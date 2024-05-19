import React from "react";
import styled from "styled-components";
import ExperienceSmall from "./ExperienceSmall";
import AOS from "aos";
import "aos/dist/aos.css";
import { dataSkills } from "../data/dataSkills";
import { dataLibs, dataAdditional, dataTechLanguages } from "../data/dataTech";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa6";

const Experience = () => {
  const [activeIndex, setActiveIndex] = React.useState(1);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? -1 : index);
  }

  React.useEffect(() => {
    AOS.init();
  }, []);

  ///experience_small
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //console.log(window.innerWidth);

  return (
    <Wrapper className="section__center" id="experience">
      <div className="section__header">
        <p className="section__name">Experience</p>
        <div className="hr" style={{ background: "#f52c57" }}></div>
      </div>
      {window.innerWidth > 1100 && (
        <section className="experience__container">
          <div className="items" data-aos="fade-up" data-aos-duration={2000}>
            <article
              className={`item ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => handleClick(1)}
            >
              <p>About me</p>
            </article>
            <article
              className={`item ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => handleClick(2)}
            >
              <p>Tech Stack</p>
            </article>
            <article
              className={`item ${activeIndex === 3 ? "active" : ""}`}
              onClick={() => handleClick(3)}
            >
              <p>Core Skills</p>
            </article>
          </div>

          <div
            className="explanations"
            data-aos="fade-up"
            data-aos-duration={2000}
          >
            <article
              className={`explanation ${
                activeIndex === 1 ? "active" : "inactive"
              }`}
            >
              <div className="explanation__about">
                <p>
                  My name is Mihaela Diaconu. I’m a freelance full-stack web
                  developer and designer based in Iasi (Romania). My expertise
                  is full website design and development from start to finish. I
                  love to create smart and beautiful user interfaces and to
                  imagine new ways of building things or solving problems.
                </p>
                <p>
                  Despite my academic background as a university professor with
                  a PhD in financial management and extensive experience in the
                  field of finance, I've developed a profound passion for web
                  development and associated technologies. Since 2018, I have
                  been consolidating my knowledge in this field, being involved
                  in courses and personal projects, as well as in projects for
                  family and friends.
                </p>
                <p>
                  My web development roots are in VanillaJs & React. I’ve
                  started to broaden my knowledge of the Node.js ecosystem in
                  2022. Since then, I fell in love with & have been primarily
                  using React in web applications.
                </p>
                <p>
                  Whether you're a business owner looking to get started on a
                  app or web development project with a freelance web developer,
                  a developer looking to collaborate on something cool, or just
                  wanting to say hi, shoot me a message and let's work together.
                </p>
              </div>
            </article>
            <article
              className={`explanation ${
                activeIndex === 2 ? "active" : "inactive"
              }`}
            >
              <div className="explanation__tech">
                <p>
                  Here is a selection of relevant technologies that I have
                  experience width
                </p>
                <div className="details details__tech">
                  <ul>
                    <h4>LANGUAGES</h4>
                    <div className="hr"></div>
                    {dataTechLanguages.map((lg) => {
                      return (
                        <li key={lg.id}>
                          <FaArrowRightLong className="icon" />
                          {lg.tech}
                        </li>
                      );
                    })}
                  </ul>
                  <ul>
                    <h4>FRAMEWORKS & LIBS</h4>
                    <div className="hr"></div>
                    {dataLibs.map((lg) => {
                      return (
                        <li key={lg.id}>
                          <FaArrowRightLong className="icon" />
                          {lg.tech}
                        </li>
                      );
                    })}
                  </ul>
                  <ul>
                    <h4>ADDITIONAL STUFF</h4>
                    <div className="hr"></div>
                    {dataAdditional.map((lg) => {
                      return (
                        <li key={lg.id}>
                          <FaArrowRightLong className="icon" />
                          {lg.tech}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </article>
            <article
              className={`explanation ${
                activeIndex === 3 ? "active" : "inactive"
              }`}
            >
              <div className="explanation__skills">
                <div className="details details__skills">
                  <ul>
                    {dataSkills.map((skill) => {
                      return (
                        <li key={skill.id}>
                          <FaCheckDouble className="icon" />
                          {skill.skill}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}
      {window.innerWidth <= 1100 && <ExperienceSmall></ExperienceSmall>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-navy-7);
  padding: 3rem;

  .section__header {
    margin-bottom: 4rem;
  }

  .experience__container {
    display: flex;
    align-items: center;
    margin-top: 3rem;
    border-left: 2px solid #f52c57;
    height: 100%;
  }

  .items {
    flex: 0.35;
    height: 70vh;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .item {
    cursor: pointer;
    color: var(--clr-grey-8);
    position: relative;
    height: 100%;
    display: flex;
    align-items: flex-end;
    overflow: hidden;

    p {
      margin: 0;
      padding: 1.5rem 0;
      padding-left: 1.5rem;
      color: var(--clr-grey-8);
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      background-color: #f52c57;
      transition: width 0.5s ease-in-out;
    }

    &::before {
      width: ${(props) => (props.active ? "100%" : "0")};
    }

    &::after {
      width: ${(props) => (props.active ? "100%" : "0")};
    }

    &.active {
      font-weight: bold;

      &::before,
      &::after {
        width: 100%;
      }
    }
  }

  .explanations {
    flex: 1;
    height: 70vh;
  }

  .explanation {
    height: 100%;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: max-height 0.7s ease-in-out, opacity 0.7s ease-in-out;

    &.inactive {
      opacity: 0;
      max-height: 0;
    }

    //explanation__about
    .explanation__about {
      padding: 0.5rem;
      padding-top: 1rem;
    }

    .explanation__about p {
      font-size: 1.05rem;
      padding-bottom: 1.5rem;
      text-align: justify;
      color: var(--clr-grey-7);
      line-height: 1.4rem;
    }

    //explanation__tech
    .explanation__tech {
      padding: 0;
    }

    .explanation__tech p {
      text-align: center;
      padding-bottom: 1.5rem;
      font-size: 1.1rem;
    }
    .details {
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
      /* background: var(--clr-millenium-blue);
      box-shadow: 0 0 1px var(--clr-grey-6); */
      /* border-radius: 0.2rem; */
    }

    .details ul {
      width: max-content;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .details ul h4 {
      padding-bottom: 0.5rem;
      padding-top: 0.2rem;
    }

    .details ul .hr {
      width: 25%;
      height: 1.5px;
      background: var(--clr-grey-4);
      margin-bottom: 0.5rem;
      margin-left: 0;
    }

    .details ul li {
      margin-bottom: 0.8rem;
      padding: 0 1.2rem;
      display: flex;
      align-items: center;
      font-size: 1.05rem;
    }

    .icon {
      display: block;
      margin-right: 0.5rem;
      color: #f52c57;
    }

    .details__skills ul li {
      font-size: 1.075rem;
    }

    p {
      color: var(--clr-grey-8);
    }
  }
`;

export default Experience;
