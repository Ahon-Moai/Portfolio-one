import React from "react";

import "../Styles/skills.css";
const Skills = ({
  LangName,
  LangSkills,
  FrontName,
  FrontSkills,
  BackName,
  BackSkills,
}) => {
  return (
    <>
      <div className="Skills-Section">
        <div className="Skill-Header-Section">
          <h1 className="Skills-Title">Skills</h1>

          <button className="Skills-Title_Underline"></button>
        </div>
        <div className="Skills-Front">
          <h1 className="Skill-Name">{FrontName}</h1>
          <p className="Skill-Skills">{FrontSkills}</p>
          <div className="Skills-Back">
            <h1 className="Skill-Name">{BackName}</h1>
            <p className="Skill-Skills">{BackSkills}</p>
           
          </div>
          <h1 className="Skill-Name">{LangName}</h1>
          <p className="Skill-Skills lang">{LangSkills}</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
