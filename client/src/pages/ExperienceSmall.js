import React from "react";
import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";

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
              <li>
                <FaArrowRightLong
                  style={{ display: "block", marginRight: "0.25rem" }}
                />{" "}
                HTML5
              </li>
              <li>
                <FaArrowRightLong
                  style={{ display: "block", marginRight: "0.25rem" }}
                />{" "}
                CSS3
              </li>
              <li>
                <FaArrowRightLong
                  style={{ display: "block", marginRight: "0.25rem" }}
                />{" "}
                JavaScript (ES6)
              </li>
              <li>
                <FaArrowRightLong
                  style={{ display: "block", marginRight: "0.25rem" }}
                />{" "}
                GraphQL
              </li>
            </ul>
            <ul>
              <h4>FRAMEWORKS & LIBS</h4>
              <div className="hr"></div>
              <li>
                <FaArrowRightLong
                  style={{ display: "block", marginRight: "0.25rem" }}
                />{" "}
                React (Redux, Router, Gatsby, Native)
              </li>
              <li>
                <FaArrowRightLong
                  style={{ display: "block", marginRight: "0.25rem" }}
                />{" "}
                NodeJS (Express, Mongoose, JWT)
              </li>
              <li>
                <FaArrowRightLong
                  style={{ display: "block", marginRight: "0.25rem" }}
                />{" "}
                Axios, Socket.io, Auth0, JQuery
              </li>
              <li>
                <FaArrowRightLong
                  style={{ display: "block", marginRight: "0.25rem" }}
                />{" "}
                Bootstrap, Materialize, Tailwind
              </li>
            </ul>
            <ul>
              <h4>ADDITIONAL STUFF</h4>
              <div className="hr"></div>
              <li>
                <FaArrowRightLong
                  style={{ display: "block", marginRight: "0.25rem" }}
                />{" "}
                GitHub
              </li>
              <li>
                <FaArrowRightLong
                  style={{ display: "block", marginRight: "0.25rem" }}
                />{" "}
                Postman
              </li>
              <li>
                <FaArrowRightLong
                  style={{ display: "block", marginRight: "0.25rem" }}
                />{" "}
                Cloudinary
              </li>
              <li>
                <FaArrowRightLong
                  style={{ display: "block", marginRight: "0.25rem" }}
                />{" "}
                Stripe, PayPal
              </li>
              <li>
                <FaArrowRightLong
                  style={{ display: "block", marginRight: "0.25rem" }}
                />{" "}
                Vegas Pro, Photoshop, Canva
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container container__3" onClick={() => handleClick(3)}>
        <p className="heading__3">My projects</p>
        <div
          className={`content content__3 ${
            activeIndex === 3 ? "active" : "none"
          }`}
        >
          Exp3
        </div>
      </div>

      <div className="container container__4" onClick={() => handleClick(4)}>
        <p className="heading__4">Other</p>
        <div
          className={`content content__4 ${
            activeIndex === 4 ? "active" : "none"
          }`}
        >
          Exp4
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
  height: 100%;
  border-left: 2px solid #f52c57;

  .container {
    height: 100%;
    margin-bottom: 3rem;
    cursor: pointer;
  }

  .container p {
    padding-left: 2rem;
    padding-bottom: 1.75rem;
    font-weight: bold;
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

  /* tect stack - content__2 */
  
  .content__2 p {
    text-align: center;
    padding-bottom: 1.5rem;
    font-size: 1.1rem;
  }
  .details {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    background: var(--clr-millenium-blue);
    box-shadow: 0 0 1px var(--clr-grey-6);
    border-radius: 0.2rem;
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

  @media only screen and (max-width: 773px) {
    .details {
      justify-content: space-evenly;
    }
    ul {
      margin-bottom: 1.5rem;
    }
  }
`;

export default ExperienceSmall;
