import React from "react";
import "../Styles/home.css";
import { FaFacebook as FB } from "react-icons/fa6";
import { IoMail as MAIL } from "react-icons/io5";
import { FaGithub as HUB } from "react-icons/fa";
import Skills from "../components/Skills";
function home() {
  return (
    <>
      <div className="Hero-Section">
        <div className="Hero-Titles">
          <h3 className="Title">Hola, My Name is Ahon</h3>
          <p className="Para">
            A software developer with passion for learning and creating.
          </p>
          <div className="Social-Icons">
            <FB className="fb" size={52} color="white" />
            <HUB className="hub" size={52} color="white" />
            <MAIL className="mail" size={56} color="white" />
          </div>
        </div>
      </div>
      <Skills
        FrontName="Front-End"
        FrontSkills=" ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
        Bootstrap, Material UI, Yarn, TailwindCSS, StyledComponents"
        BackName="Back-End"
        BackSkills="NodeJS , Java, Python, Rust, Rail, Ruby, C/C#, ExpressJS, Kotlin, Swift, SQL, Chakra. "
        LangName="Language"
        LangSkills="Javascript, CS, Cleo, Ruby, C#"
      />
    </>
  );
}

export default home;
