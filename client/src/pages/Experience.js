import React from "react";
import styled from "styled-components";
import ExperienceSmall from "./ExperienceSmall";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Experience = () => {
  const [activeIndex, setActiveIndex] = React.useState(1);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? -1 : index);
  }

  React.useEffect(() => {
    AOS.init();
  }, []);

  ///experience_small
  const[windowWidth, setWindowWidth]=React.useState(window.innerWidth);
React.useEffect(()=> {
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  window.addEventListener("resize", handleResize);
return () => {
      window.removeEventListener('resize', handleResize);
    };
}, []);

console.log(window.innerWidth);


  return (
    <Wrapper className="section__center" id="experience">
      <div className="section__header">
        <p className="section__name">Experience</p>
        <div className="hr" style={{ background: "#f52c57" }}></div>
      </div>
      {window.innerWidth > 1100 && (
        <div className="experience__container">
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
              <p>My Projects</p>
            </article>
            <article
              className={`item ${activeIndex === 4 ? "active" : ""}`}
              onClick={() => handleClick(4)}
            >
              <p>Other</p>
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
                  developer and designer based in Iasi (Romania). My speciality
                  is full website design and development from start to finish. I
                  love to create smart and beautiful user interfaces and to
                  imagine new ways of building things or solving problems.
                </p>
                <p>
                  Despite my academic background as a university professor with
                  a PhD in financial management and extensive experience in the
                  field of finance, I have developed a profound passion for web
                  development and associated technologies. Since 2018, I have
                  been consolidating my knowledge in this field, being involved
                  in courses and personal projects, as well as projects for
                  family and friends. This ongoing journey of learning in web
                  development excites and inspires me, allowing me to integrate
                  innovative and creative perspectives and approaches into my
                  work as a web developer.
                </p>
                <p>
                  My web development roots are in VanillaJS & React. In 2022, I
                  started to broaden my knowledge of the Node.js ecosystem.
                  Since then, I fell in love with & have been primarily using
                  React in web applications.
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
                  <ul style={{ margin: "0 2.5rem" }}>
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
            </article>
            <article
              className={`explanation ${
                activeIndex === 3 ? "active" : "inactive"
              }`}
            >
              <p>Exp3</p>
            </article>
            <article
              className={`explanation ${
                activeIndex === 4 ? "active" : "inactive"
              }`}
            >
              <p>Exp4</p>
            </article>
          </div>
        </div>
      )}
      {window.innerWidth <= 1100 && <ExperienceSmall></ExperienceSmall>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-navy-7);
  padding: 3rem;
  border: 2px solid white;

  .section__header {
    margin-bottom: 4rem;
  }

  .experience__container {
    display: flex;
    align-items: center;
    margin-top: 3rem;
    border-left: 2px solid #f52c57;
    height: 70vh;
  }

  .items {
    flex: 0.35;
    height: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .item {
    cursor: pointer;
    color: var(--clr-grey-8);
    position: relative;
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
      transition: width 0.7s ease-in-out;
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
    height: 100%;
    border: 2px solid red;
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
.explanation__about p {
  font-size: 1.05rem;
  padding-left: 0.5rem;
  padding-bottom: 0.75rem;
  text-align: justify;
  color: var(--clr-grey-8);
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


    p {
      color: var(--clr-grey-8);
    }
  }
`;

export default Experience;
