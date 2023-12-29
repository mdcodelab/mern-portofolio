import React from "react";
import styled from "styled-components";

const Project = ({ project }) => {

  const {title, image, icon, urlDemo, urlGit, description, tech, icon_1, icon_2}=project;

  return (
    <Wrapper className="project__container">
      <div className="project__image">
          <img src={image} alt={title}></img>
      </div>
      <div className="project__content">
        <div className="project__title">
          <h4>{title}</h4>
          {icon}
        </div>
        <p className="project__description">{description}</p>
        <div className="project__technologies">
          {tech.map((tech, index) => {
            return <span key={index}>{tech}</span>
          })}
        </div>
        <div className="project__watch">
          <a href={urlGit}>Code {icon_1}</a>
          <a href={urlDemo}>Live Demo {icon_2}</a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`

`;

export default Project;
