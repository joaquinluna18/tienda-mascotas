import React from 'react';
import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';
import { SiDatadog } from "react-icons/si";
import './Navbar.scss';
import { CardWiget } from './CartWidget';
import {Link} from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className='App-header'>
      <Container>
        <Navbar.Brand>
          <Link to={"/"} id="brand">
            <SiDatadog></SiDatadog>
               Koda Pet Shop
          </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item >
                <Link to={"/category/perro"}>
                Perros
                </Link>
                </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to={"/category/gato"}>
                Gatos
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                Otros
                </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CardWiget></CardWiget>
      </Container>
    </Navbar>
  );
}

export default NavBar;