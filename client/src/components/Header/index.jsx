import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Our Cool Project</Navbar.Brand>
        <p></p>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant='pills' className="me-auto">
          <Link to="/"> <Nav.Link href="#home"  >Home</Nav.Link> </Link>
            <Link to="/login"> <Nav.Link href="#login"  >Login</Nav.Link> </Link>
            <Link to="/signup"> <Nav.Link href="#signup">Signup</Nav.Link> </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;