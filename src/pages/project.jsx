import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/Projectlist";
import "../Styles/DisplayProject.css";
import "../Styles/Projects.css";

function Projects({ props }) {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              key={idx}
              id={idx}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
