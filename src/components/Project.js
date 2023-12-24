import React from 'react';

const Project = ({filteredResults}) => {
    console.log(filteredResults);


  return (
    <div className="">
      {filteredResults.map((project) => {
        return <div>{project.title}</div>
      })}
    </div>
  );
}

export default Project;
