import React from "react";
import "../Styles/Projects.css";
function ProjectItem({ image, name, id }) {
  return (
    <>
      <div>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {name} </h1>
      </div>
    </>
  );
}

export default ProjectItem;
