import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.webp";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function HomeIntro() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME SHARE <span className="purple">MY STORY </span>
            </h1>
            <p className="home-about-body">
              Programming has been a journey of learning and growth.… 🤷‍♂️
              <br />
              <br />I am good at classics like{" "}
              <i>
                <b className="purple">
                  HTML, CSS, Javascript, ReactJS and NodeJS{" "}
                </b>
              </i>
              <br />
              <br />I focus on building practical {" "}
              <i>
                <b className="purple">Web Technologies and Products </b>
                <b className="purple">
                  while exploring areas in Data Science like Generative AI, NLP,
                  Machine Learning, and Power BI
                </b>
              </i>
              <br />
              <br />I harness the power of <b className="purple">Node.js</b> and
              cutting-edge {" "}
              <i>
                <b className="purple">JavaScript frameworks like React.js</b>
              </i>
              {" "} to craft impactful and seamless solutions
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ width: "200px", height: "auto" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CATCH ME ON</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/komalkrishn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Komal11055700"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/komal-krishna-kavula/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeIntro;
