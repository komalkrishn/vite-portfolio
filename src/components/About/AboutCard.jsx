import React from "react";
import Card from "react-bootstrap/Card";
import {
  MdSportsCricket,
  MdTipsAndUpdates,
  MdTravelExplore,
} from "react-icons/md";
import { IoTelescopeSharp } from "react-icons/io5";
import { IoIosBicycle } from "react-icons/io";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Bonjour</span>, I am{' '}
            <span className="purple">Komal Krishna</span> from{' '}
            <span className="purple">Andhra Pradesh, India</span>. I pursued my
            Master’s degree in France, where I gained a global perspective and a
            love for continuous learning.
          </p>
          <p style={{ textAlign: "justify", marginTop: "1rem" }}>
            <strong>Life Beyond the Screen:</strong>
          </p>
          <ul>
            <li className="about-activity">
              <MdSportsCricket color="#c95bf5" size="25px" /> Cricket aficionado
            </li>
            <li className="about-activity">
              <MdTravelExplore color="#c95bf5" size="25px" /> Exploring diverse
              cultures
            </li>
            <li className="about-activity">
              <IoIosBicycle color="#c95bf5" size="25px" /> Cycling through
              scenic routes
            </li>
            <li className="about-activity">
              <IoTelescopeSharp color="#c95bf5" size="25px" /> Hooked on space
              discoveries
            </li>
          </ul>
          <div className="sticker-container">
            <div className="sticker-header">
              <MdTipsAndUpdates size="30px" color="green" />
              <span className="white"> Here’s a thought I live by:</span>
            </div>
            <p className="sticker-text">
              Learn something new everyday—no matter how small or big. By the end
              of the day, that little progress will fill you with confidence,
              making tomorrow brighter and more joyful.
            </p>
          </div>

          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
