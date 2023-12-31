import React from "react";
import styled from "styled-components";
import laptop from "../assets/laptop.png";
import ReactPlayer from "react-player";

const Project = ({ project, index }) => {
  const {
    title,
    icon,
    video,
    urlDemo,
    urlGit,
    description,
    tech,
    icon_1,
    icon_2,
  } = project;

  return (
    <Wrapper>
      <div
        className={`project__container project ${
          index % 2 === 0 ? "even" : "odd"
        }`}
      >
        <div className="left__side">
          <div className="project__video">
            <ReactPlayer className="video"
              playing
              loop
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "1rem",
                objectFit: "cover",
              }}
              url="assets/videos_projects/winter_2.mp4"
            />
          </div>
        </div>

        <div className="right__side">
          <div className="project__content">
            <div className="project__title">
              <h3>{title}</h3>
              <a href="#" className="project__title__icon">
                {icon}
              </a>
            </div>
            <p className="project__description">{description}</p>
            <div className="project__technologies">
              {tech.map((tech, index) => {
                return <span key={index}>{tech}</span>;
              })}
            </div>
            <div className="project__watch">
              <a href={urlGit}>
                Code <span>{icon_1}</span>
              </a>
              <a href={urlDemo}>
                Live Demo <span>{icon_2}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .project__container {
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    box-shadow: inset 0 1px 3px var(--clr-grey-6),
      0 1px 3px rgba(255, 255, 255, 0.5);
    border-radius: 0.5rem;
    padding: 1.5rem;
  }

  .left__side, .right__side {
    flex: 1;
  }

  .project__video {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
    text-align: center;
    margin: 0 auto;
  }

  .project__content {
    width: 100%;
  }

  //right side
  .project__title {
    display: flex;
    align-items: center;
    height: max-content;
    width: 100%;
    margin-bottom: 2rem;
    letter-spacing: 0.5rem;
  }

  .project__content h3 {
    margin: 0;
    padding: 0;
  }

  .project__title__icon {
    margin-left: 1rem;
    display: block;
    font-size: 1.3rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    padding: 0.3rem !important;
    color: var(--clr-grey-8);
    border: 0.07rem solid lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.7s ease-in-out;
  }

  .project__title__icon:hover {
    color: black;
    background: var(--clr-grey-8);
  }

  .project__description {
    color: var(--clr-grey-6);
    font-size: 1.1rem;
    text-align: justify;
    padding-right: 2rem;
  }

  .project__technologies {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .project__technologies span {
    color: var(--clr-grey-10);
    display: block;
    margin-right: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .project__watch {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15rem;
  }

  .project__watch a {
    display: flex;
    align-items: center;
  }

  .project__watch span {
    display: block;
    margin-left: 0.5rem;
    font-size: 1.3rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    padding: 0.3rem !important;
    color: var(--clr-grey-8);
    border: 0.07rem solid lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.7s ease-in-out;
  }

  .project__watch span:hover {
    color: black;
    background: var(--clr-grey-8);
  }

  .project__watch a,
  .project__watch span {
    font-size: 1.2rem;
    color: var(--clr-grey-6);
  }

  @media (max-width: 1103px) {
    .project__container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
    .project__video {
      margin: 0 auto;
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }
    .project__content {
      margin-top: 2rem;
      margin-left: 0;
    }
    .project__content {
      width: 100%;
      padding: 0 5rem;
    }
    .project__description {
      padding: 0;
    }
  }

  @media (max-width: 608px) {
    .project__video {
      width: 70%;
      margin: 0 auto;
      border: 2px solid white;
    }
    .video {
      width: 100%;
      height: auto;
    }
    .project__content {
      width: 60%;
      border: 2px solid red;
    }
    .project__title h3 {
      font-size: 1.2rem;
    }
    .project__description {
      font-size: 0.8rem;
      width: 50%;
    }

    
  }
`;

export default Project

