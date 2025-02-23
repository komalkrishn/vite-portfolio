import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiNetlify,
  SiFigma ,
} from "react-icons/si";

function Toolstack() {
  // Define the toolstack with titles
  const toolStack = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiFigma  />, name: "Figma " },
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