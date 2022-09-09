import React from 'react';
import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';
import { SiDatadog } from "react-icons/si";
import './Navbar.scss';
import { CardWiget } from './CartWidget';

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className='App-header'>
      <Container>
        <Navbar.Brand >
          <SiDatadog></SiDatadog>
          Koda Pet Shop
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Perros
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Gatos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Otros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CardWiget></CardWiget>
      </Container>
    </Navbar>
  );
}

export default NavBar;