import React from "react";

// import bootstrap components
import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';

import OffCanvasComponent from "./OffCanvasComponent";

// import logo
import logo from '../images/logo.svg';

// import cart icon
import imageAvatar from '../images/image-avatar.png'
function NavBarComponent() {
  
  return (
    <Navbar expand="lg" className="">
      <Container>
        <div className="mobile" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Colections</Nav.Link>
            <Nav.Link href="#link">Men</Nav.Link>
            <Nav.Link href="#link">Women</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
        <Navbar.Brand href="#home">
          <img src={logo} alt="sneakers logo" />
        </Navbar.Brand>
        <div className="web">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Colections</Nav.Link>
            <Nav.Link href="#link">Men</Nav.Link>
            <Nav.Link href="#link">Women</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        </div>
        <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">
              <Image src={imageAvatar} roundedCircle />
            </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
