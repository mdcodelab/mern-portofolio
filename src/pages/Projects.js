import React, { useState } from "react";
import Select from "react-select";
import { data } from "../data";
import Project from "../components/Project";

const customStyles = {
  control: (provided) => ({
    ...provided,
    padding: "8px",
    fontSize: "1.1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "20rem",
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    width: "20rem",
    marginTop: "1.5mm",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#eaeaea" : "transparent",
    color: state.isFocused ? "#333333" : "#777777",
    fontSize: "1.1rem",
    cursor: "pointer",
    textTransform: "capitalize",
  }),
};

const Projects = () => {
  const [selectedType, setSelectedType] = useState("");
  const uniqueTypes = Array.from(new Set(data.map((project) => project.type)));

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption.value);
  };

  const filteredResults = selectedType
    ? data.filter((project) => project.type === selectedType)
    : data;

  const selectOptions = [
    { value: "", label: "Select a project type" },
    ...uniqueTypes.map((type) => ({
      value: type,
      label: type,
    })),
  ];

  return (
    <div className="page-100 projects-container section__center section-pad" id="projects">
      <h2>Some of my projects</h2>
      <div className="hr"></div>
      <div className="searchInput">
        <Select
          options={selectOptions}
          value={selectedType ? { value: selectedType, label: selectedType } : null}
          onChange={handleTypeChange}
          placeholder="Select a project type"
          styles={customStyles}
        />
      </div>
      <div className="searchResults">
        <Project filteredResults={filteredResults} />
      </div>
    </div>
  );
};

export default Projects;
