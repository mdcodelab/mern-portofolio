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
          <div className={`content content__1 ${activeIndex === 1 ? "active" : "none"}`}>
            Exp1</div>
        </div>
        <div className="container container__2" onClick={() => handleClick(2)}>
          <p className="heading__2">Tech Stack</p>
          <div className={`content content__2 ${activeIndex === 2 ? "active" : "none"}`}>
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
                    <ul>
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
        </div>

        <div className="container container__3" onClick={() => handleClick(3)}>
          <p className="heading__3">My projects</p>
          <div className={`content content__3 ${activeIndex === 3 ? "active" : "none"}`}>
            Exp3
          </div>
        </div>

        <div className="container container__4" onClick={() => handleClick(4)}>
          <p className="heading__4">Other</p>
          <div className={`content content__4 ${activeIndex === 4 ? "active" : "none"}`}>
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


  /* tect stack - content__2 */
  .cont2nt__2 {
    background: red !important;
  }
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
