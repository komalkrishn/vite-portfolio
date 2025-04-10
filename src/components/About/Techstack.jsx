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
  SiBootstrap, SiCss3, SiJest, SiCypress, SiRedux, SiExpress
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";

function Techstack() {
  // Define the tech stack with titles
  const techStack = [
    { icon: <DiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
    { icon: <DiSass />, name: "Sass" },
    {icon: <FaFigma />, name: "Figma" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <TbBrandNextjs />, name: "Next.js" },
    { icon: <SiJest />, name: "Jest" },
    { icon: <SiTestinglibrary />, name: "RTL" },
    { icon: <SiCypress />, name: "Cypress" },
    { icon: <DiGit />, name: "Git" },
    { icon: <DiNodejs />, name: "Node.js" },
    {icon: <SiExpress />, name: "Express.js"},
    { icon: <DiMongodb />, name: "MongoDB" },
    {icon: <GrGraphQl />, name: "GraphQL"},
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