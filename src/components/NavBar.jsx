import React from "react";
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap"
import CartWidget from "./CartWidget/carrito.png"



export default function NavBar ({arrayDeLink}){
    return(
        <>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">JV</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
          <NavDropdown title="Seguros" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Auto</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Moto</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Vida</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Cotizar</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Inmobiliaria</Nav.Link>
        <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
        <Nav.Link href="#link">Contacto</Nav.Link>
        <Nav.Link href="#link">Log In</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )


}   