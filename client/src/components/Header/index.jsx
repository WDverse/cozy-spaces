import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Auth from "../../utils/auth";
//imports react packages and user authorization

const Header = () => { //creates react component for header
  const location = useLocation();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return ( //returns html and react components
    <Navbar expand="lg" className="bg-body-tertiary">
      {location.pathname !== "/" && (
        <Container>
          <Navbar.Brand href="#home">Cozy Spaces</Navbar.Brand>
          <p></p>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" className="me-auto">
              <Link to="/spaces">
                {" "}
                <Nav.Link href="#home">Our Spaces</Nav.Link>{" "}
              </Link>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link>
                    <Link to="/me">{Auth.getProfile().data.username}'s account</Link>
                  </Nav.Link>
                  <Nav.Link onClick={logout}> Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    {" "}
                    <Nav.Link href="#login">Login</Nav.Link>{" "}
                  </Link>
                  <Link to="/signup">
                    {" "}
                    <Nav.Link href="#signup">Signup</Nav.Link>{" "}
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      )
      }
    </Navbar>
  );
};
// Export the Header component as the default export of this module
export default Header;
