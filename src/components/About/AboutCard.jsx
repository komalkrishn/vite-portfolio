import React from "react";
import Card from "react-bootstrap/Card";
import { MdSportsCricket } from "react-icons/md";
import { GrInternetExplorer } from "react-icons/gr";
import { IoIosBicycle } from "react-icons/io";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Komal krishna </span>
            from <span className="purple"> Andhra pradesh, India.</span>
            <br />I did my Masters from France
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <MdSportsCricket color="#c95bf5" size="25px" /> Playing Cricket
            </li>
            <li className="about-activity">
              <GrInternetExplorer color="#c95bf5" size="25px" /> Surfing On Internet
            </li>
            <li className="about-activity">
              <IoIosBicycle color="#c95bf5" size="25px" /> Cycling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
