import React from "react";
import Select from "react-select";
import { data1 } from "../data1";
import Project from "../components/Project";
import styled from "styled-components";

const customStyles = {
  control: (provided) => ({
    ...provided,
    padding: "5px",
    fontSize: "1.1rem",
    border: "0.5px solid #ccc",
    outline: "none",
    borderRadius: "4px",
    width: "290px",
    textAlign: "center",
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    width: "290px",
    marginTop: "1.5mm",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#eaeaea" : "transparent",
    color: state.isFocused ? "#333333" : "#777777",
    fontSize: "1.1rem",
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
      ? data1
      : data1.filter((project) => project.type === selectedType);

  return (
    <Wrapper
      className="page-100 projects__container section__center section-pad"
      id="projects"
    >
      <h2 className="title">Some of my projects</h2>
      <div className="hr"></div>
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
  border: 3px solid red;
  padding: 3rem;

  div.searchInput {
    margin: 0 auto;
    width: max-content;
  }

  @media (max-width: 700px) {
    .title {
      font-size: 1.5rem;
    }
  }
`;

export default Projects;
