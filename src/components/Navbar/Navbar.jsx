import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SiDatadog} from "react-icons/si";
import { Link } from 'react-router-dom';
import './Navbar.scss';
import CardWiget from './CartWidget';



function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >
          <Link to={"/"} id="brand">
          <SiDatadog></SiDatadog>
          Koda Pet Shop
          </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to={"/category/perro"}>
                Perros
                </Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to={"/category/gato"}>
                Gatos
                </Link>
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

export default BasicExample;
