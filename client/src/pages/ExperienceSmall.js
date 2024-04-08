import React from "react";
import styled from "styled-components";
import { FaArrowRightLong} from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa6";
import { dataSkills } from "../data/dataSkills";
import { dataLibs, dataAdditional, dataTechLanguages } from "../data/dataTech";


function ExperienceSmall() {
  const [activeIndex, setActiveIndex] = React.useState(1);

  function handleClick(index) {
    setActiveIndex(activeIndex === index ? -1 : index);
  }

  return (
    <Wrapper className="experience__container_small">
      <div className="container container__1" onClick={() => handleClick(1)}>
        <p className="heading__1">About me</p>
        <div
          className={`content content__1 ${
            activeIndex === 1 ? "active" : "none"
          }`}
        >
          <p>
            My name is Mihaela Diaconu. I’m a freelance full-stack web developer
            and designer based in Iasi (Romania). My speciality is full website
            design and development from start to finish. I love to create smart
            and beautiful user interfaces and to imagine new ways of building
            things or solving problems.
          </p>
          <p>
            Despite my academic background as a university professor with a PhD
            in financial management and extensive experience in the field of
            finance, I have developed a profound passion for web development and
            associated technologies. Since 2018, I have been consolidating my
            knowledge in this field, being involved in courses and personal
            projects, as well as projects for family and friends. This ongoing
            journey of learning in web development excites and inspires me,
            allowing me to integrate innovative and creative perspectives and
            approaches into my work as a web developer.
          </p>
          <p>
            My web development roots are in VanillaJs & React. In 2022, I
            started to broaden my knowledge of the Node.js ecosystem. Since
            then, I fell in love with & have been primarily using React in web
            applications.
          </p>
          <p>
            Whether you're a business owner looking to get started on a app or
            web development project with a freelance web developer, a developer
            looking to collaborate on something cool, or just wanting to say hi,
            shoot me a message and let's work together.
          </p>
        </div>
      </div>
      <div className="container container__2" onClick={() => handleClick(2)}>
        <p className="heading__2">Tech Stack</p>
        <div
          className={`content content__2 ${
            activeIndex === 2 ? "active" : "none"
          }`}
        >
          <p>
            Here is a selection of relevant technologies that I have experience
            width
          </p>
          <div className="details">
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
      </div>

      <div className="container container__3" onClick={() => handleClick(3)}>
        <p className="heading__3">Core Skills</p>
        <div
          className={`content content__3 ${
            activeIndex === 3 ? "active" : "none"
          }`}
        >
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
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: var(--clr-navy-7);
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border-left: 2px solid #f52c57;

  .container {
    height: 100%;
    margin-bottom: 3rem;
  }

  .container p {
    padding-left: 2rem;
    padding-bottom: 1.75rem;
    font-weight: bold;
    cursor: pointer;
  }

  .active {
    border-bottom: 2px solid #f52c57;
    padding-left: 1rem;
  }

  .none {
    display: none;
  }

  p {
    color: var(--clr-grey-8);
  }

  //about - content__1
  .content__1 p {
    font-weight: normal;
    font-size: 1.05rem;
    text-align: justify;
    padding-left: 0;
  }

  .icon {
    display: block;
    margin-right: 0.25rem;
    color: #f52c57;
  }

  /* tech stack - content__2 */

  .content__2 p {
    text-align: center;
    padding-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  .content__2 .details {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    /* background: var(--clr-millenium-blue);
    box-shadow: 0 0 1px var(--clr-grey-6);
    border-radius: 0.2rem; */
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
    display: flex;
    align-items: center;
    font-size: 1.02rem;
  }

  //core skills
  .content__3 {
    margin-bottom: -50px;
  }

  .content__3 ul {
    width: max-content;
    margin: 0 auto;
  }

  .content__3 ul li {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    font-size: 1.02rem;
  }

  @media only screen and (max-width: 773px) {
    .details ul {
      margin-bottom: 1.75rem;
    }
    .content__3 ul {
      width: 100%;
    }
  }

  @media only screen and (max-width: 660px) {
    .content__1 p {
      font-size: 0.85rem;
    }

    .content__3 ul li {
      font-size: 0.9rem;
    }
  }
`;

export default ExperienceSmall;
