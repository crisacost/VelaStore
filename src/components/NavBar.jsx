import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">VelaStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
          <CartWidget /> {}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
