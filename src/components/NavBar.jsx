import React from "react";
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap"
import CartWidget from "./CartWidget/CartWidget";


export default function NavBar ({arrayDeLink}){
    return(
        <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">JV</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Inicio</Nav.Link>
      <Nav.Link href="#pricing">Inmobiliaria</Nav.Link>
      <NavDropdown title="Seguros" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Auto</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Moto</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Vida</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Cotizar</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"> <CartWidget/></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
  
</Navbar>

        </>
    )


}   