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
              <p>Exp1</p>
            </article>
            <article
              className={`explanation ${
                activeIndex === 2 ? "active" : "inactive"
              }`}
            >
                <div className="explanation__tech">
                  <p>Here is a selection of relevant technologies that I have experience width</p>
                  <div className="details">
                    <ul>
                      <h4>LANGUAGES</h4>
                      <div className="hr"></div>
                      <li><FaArrowRightLong style={{display: "block", marginRight: "0.25rem"}}/> HTML5</li>
                      <li><FaArrowRightLong style={{display: "block", marginRight: "0.25rem"}}/> CSS3</li>
                      <li><FaArrowRightLong style={{display: "block", marginRight: "0.25rem"}}/> JavaScript (ES6)</li>
                      <li><FaArrowRightLong style={{display: "block", marginRight: "0.25rem"}}/> GraphQL</li>
                    </ul>
                    <ul style={{margin: "0 2.5rem"}}>
                      <h4>FRAMEWORKS & LIBS</h4>
                      <div className="hr"></div>
                      <li><FaArrowRightLong style={{display: "block", marginRight: "0.25rem"}}/> React (Redux, Router, Gatsby, Native)</li>
                      <li><FaArrowRightLong style={{display: "block", marginRight: "0.25rem"}}/> NodeJS (Express, Mongoose, JWT)</li>
                      <li><FaArrowRightLong style={{display: "block", marginRight: "0.25rem"}}/> Axios, Socket.io, Auth0, JQuery</li>
                      <li><FaArrowRightLong style={{display: "block", marginRight: "0.25rem"}}/> Bootstrap, Materialize, Tailwind</li>
                    </ul>
                    <ul>
                      <h4>ADDITIONAL STUFF</h4>
                      <div className="hr"></div>
                        <li><FaArrowRightLong style={{display: "block", marginRight: "0.25rem"}}/> GitHub</li>
                        <li><FaArrowRightLong style={{display: "block", marginRight: "0.25rem"}}/> Postman</li>
                        <li><FaArrowRightLong style={{display: "block", marginRight: "0.25rem"}}/> Cloudinary</li>
                        <li><FaArrowRightLong style={{display: "block", marginRight: "0.25rem"}}/> Stripe, PayPal</li>
                        <li><FaArrowRightLong style={{display: "block", marginRight: "0.25rem"}}/> Vegas Pro, Photoshop, Canva</li>
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

  .experience__container {
    display: flex;
    align-items: center;
    margin-top: 3rem;
    border-left: 2px solid #f52c57;
  }

  .items {
    flex: 0.35;
    cursor: pointer;
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
    height: auto;
    opacity: 1;
    max-height: 300px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: max-height 0.7s ease-in-out, opacity 0.7s ease-in-out;

    &.inactive {
      opacity: 0;
      max-height: 0;
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
