import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/imgs/logo192.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'

const NavbarBar = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand as={Link} to="/about"><img className="logo" src={logo} alt="logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      <Nav.Link href="https://my.indeed.com/p/elmirl-f4oghj6" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    
    )
}

export default NavbarBar