import React from 'react';
import styled from "styled-components";
import ReactPlayer from "react-player";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Project({project, index}) {
    const {
      id,
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

    React.useEffect (() => {
      AOS.init();
    }, []);

  return (
    <Wrapper>
      <div className="container">
        <div
          className={`left ${id % 2 === 0 ? "even" : "odd"}`}
          data-aos="fade-left"
          data-aos-duration={1500}
        >
          <div className="video" style={{ borderRadius: "0.5rem" }}>
            <ReactPlayer
              className="video"
              playing
              loop={true}
              controls={true}
              style={{
                maxWidth: "100%",
                padding: "1rem 1rem",
                width: "100%",
                height: "auto",
                borderRadius: "1rem",
                margin: "0 auto",
              }}
              url={video}
            />
          </div>
        </div>
        <div
          className={`right ${id % 2 === 0 ? "even" : "odd"}`}
          data-aos="fade-right"
          data-aos-duration={1500}
        >
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
                Demo <span>{icon_2}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-top: 3rem;
    box-shadow: inset 0px 0px 4px var(--clr-grey-6);
    border-radius: 0.5rem;
    background: #192a4c;
  }

  .left,
  .right {
    width: 50%;
  }

  .right {
    padding: 0 2rem;
  }

  .left.even,
  .right.odd {
    order: 2;
  }

  .left.odd,
  .right.even {
    order: 1;
  }

  //right side
  .project__title {
    display: flex;
    align-items: center;
    height: max-content;
    width: 100%;
    margin-bottom: 1.5rem;
    letter-spacing: 0.5rem;
  }

  .project__content h3 {
    margin: 0;
    padding: 0;
  }

  .project__title__icon {
    margin-left: 1rem;
    display: block;
    font-size: 1.2rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    padding: 0.3rem !important;
    color: var(--clr-grey-8);
    background: var(--clr-navy-7);
    border: 0.07rem solid lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.7s ease-in-out;
  }

  .project__title__icon:hover {
    color: var(--clr-navy-7);
    background: var(--clr-grey-8);
  }

  .project__description {
    color: var(--clr-grey-6);
    font-size: 1rem;
    text-align: justify;
    margin-bottom: 0.5rem;
  }

  .project__technologies {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .project__technologies span {
    color: var(--clr-grey-10);
    display: block;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
  }

  .project__watch {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 13rem;
  }

  .project__watch a {
    display: flex;
    align-items: center;
    font-size: 1rem !important;
  }

  .project__watch span {
    display: block;
    margin-left: 0.5rem;
    font-size: 1.2rem;
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
    color: var(--clr-navy-7);
    background: var(--clr-grey-8);
  }

  .project__watch a,
  .project__watch span {
    font-size: 1.2rem;
    color: var(--clr-grey-6);
  }

  @media only screen and (max-width: 1100px) {
    .container {
      flex-direction: column;
      height: 100%;
    }
    .left,
    .right {
      width: 100%;
      height: auto;
    }

    .left {
      padding: 0 1rem;
      order: 1;
    }
    .right {
      padding: 0 1rem;
      order: 2;
    }
    .video {
      margin: 0 auto;
    }
    .project__title {
      width: max-content;
      margin: 0 auto;
      margin-bottom: 1rem;
    }
    .project__technologies {
      margin: 0 auto;
      width: max-content;
    }
    .project__watch {
      margin: 0 auto;
      width: 13rem;
    }
  }

  @media only screen and (max-width: 681px) {
    .video {
      margin: -50px auto;
    }
  }

  @media only screen and (max-width: 454px) {
    .container {
      width: 100%;
      padding: 0.5rem;
    }
    .video {
      margin: -100px auto;
    }
    .project__title {
      flex: none;
      margin: 0 auto;
      margin-bottom: 1rem;
      width: 100%;
      text-align: center;
    }
    .project__title h3 {
      font-size: 1rem;
      letter-spacing: none;
      margin: 0 auto;
    }
    .project__title__icon {
      display: none;
    }
    .project__description {
      font-size: 0.85rem;
    }
    .project__technologies {
      display: flex;
      flex-direction: column;
    }
    .project__technologies span {
      font-size: 0.85rem;
    }
    .project__watch {
      width: 10rem;
    }
    .project__watch a {
      font-size: 1rem;
    }
    .project__watch a span {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media only screen and (max-width: 350px) {
    .video {
      margin: -120px auto;
    }
  }
`;

export default Project;

