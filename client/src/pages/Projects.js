import React from "react";
import Select from "react-select";
import { data } from "../data";
import Project from "../components/Project";
import styled from "styled-components";

const customStyles = {
  control: (provided) => ({
    ...provided,
    padding: "0 60px",
    margin: "0 auto",
    fontSize: "1.05rem",
    letterSpacing: "0.08rem",
    border: "0.5px solid #ccc",
    outline: "none",
    borderRadius: "5px",
    width: "100%",
    textAlign: "center",
    backgroundColor: "var(--clr-grey-8)",
    cursor: "pointer",
    boxShadow: "inset 0px 0px 9px var(--clr-grey-10)"
  }),
  menu: (provided) => ({
    ...provided,
    width: "100%",
    marginTop: "1.5mm",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "var(--clr-grey-8)" : "transparent",
    color: state.isFocused ? "var(--clr-navy-7)" : "#777777",
    fontSize: "1.05rem",
    cursor: "pointer",
    textTransform: "capitalize",
    textAlign: "center",
  }),
};

const options = [
  { value: "all", label: "Projects" },
  { value: "full-stack", label: "Full Stack" },
  { value: "front-end", label: "Front-End" },
  { value: "w", label: "Web Apps" },
  { value: "l", label: "Landing Pages" },
];

const Projects = () => {
  const [selectedType, setSelectedType] = React.useState("all");

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption.value);
  };

  const filteredProjects =
    selectedType === "all"
      ? data
      : data.filter((project) => project.type === selectedType);

  return (
    <Wrapper
      className="page-100 projects__container section__center"
      id="projects">
      <div className="section__header">
         <h4 className="title">Projects</h4>
         <hr></hr>
      </div>
      <h4 className="subtitle">Some of my work</h4>
      <div className="searchInput">
        <Select
          value={options.find((option) => option.value === selectedType)}
          onChange={handleTypeChange}
          options={options}
          placeholder="Select a type of project"
          styles={customStyles}
        />
      </div>
      <div className="searchResults">
        {filteredProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-navy-7);
  padding: 3rem;

  div.searchInput {
    margin: 0 auto;
    width: max-content;
  }

  .title {
    margin-bottom: 0.5rem;
  }

  .subtitle {
    text-align: center;
    margin-top: 2rem;
  }

  @media screen and (max-width: 700px) {
    .title {
      font-size: 1.5rem;
    }
  }
`;

export default Projects;
