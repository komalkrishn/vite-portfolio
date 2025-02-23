import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/my-logo.gif";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavbar] = useState(false);

  const scrollHandler = () => {
    setNavbar(window.scrollY >= 20);
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="my-logo img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpand(!expand)} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <NavLink to="/" className="nav-link" exact onClick={() => setExpand(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/about" className="nav-link" onClick={() => setExpand(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/contact" className="nav-link" onClick={() => setExpand(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Contact
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;