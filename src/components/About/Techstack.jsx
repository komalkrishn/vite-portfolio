import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTestinglibrary, SiTypescript } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiSass,
} from "react-icons/di";
import {
  SiBootstrap, SiCss3, SiJest, SiCypress, SiRedux,
} from "react-icons/si";

function Techstack() {
  // Define the tech stack with titles
  const techStack = [
    { icon: <DiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
    { icon: <DiSass />, name: "Sass" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiJest />, name: "Jest" },
    { icon: <SiTestinglibrary />, name: "RTL" },
    { icon: <SiCypress />, name: "Cypress" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <DiGit />, name: "Git" },
    { icon: <TbBrandNextjs />, name: "Next.js" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiPython />, name: "Python" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <div className="icon-container">
            {tech.icon}
            <div className="icon-title">{tech.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;