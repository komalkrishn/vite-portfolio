import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiNetlify,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { FaJenkins } from "react-icons/fa";

function Toolstack() {
  // Define the toolstack with titles
  const toolStack = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <VscAzure />, name: "Azure" },
    { icon: <FaJenkins />, name: "Jenkins" },
    { icon: <SiNetlify />, name: "Netlify" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolStack.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <div className="icon-container">
            {tool.icon}
            <div className="icon-title">{tool.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;