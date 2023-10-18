// Import necessary dependencies and styles for the Header component
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Auth from "../../utils/auth";
import "../../styles/Header.css";

// Define the Header component as a functional component
const Header = () => {
  const location = useLocation();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      {location.pathname !== "/" && (
        <Navbar expand="lg" className="bg-body-secondary">
          <Container>
            <Navbar.Brand className="brand" href="#logo">
              Cozy Spaces
            </Navbar.Brand>
            <p></p>
            <Nav variant="pills" className="justify-content-end">
              <Link className="navLink" to="/spaces">
                {" "}
                <Nav.Item>
                  <Nav.Link className="navLink" href="#spaces">
                    Our Spaces
                  </Nav.Link>{" "}
                </Nav.Item>
              </Link>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Item>
                    <Nav.Link>
                      <Link children="nav-link.active" to="/me">
                        {Auth.getProfile().data.username}'s account
                      </Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="navLink" onClick={logout}>
                      {" "}
                      Logout
                    </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  <Link className="navLink" to="/login">
                    <Nav.Item>
                      {" "}
                      <Nav.Link className="navLink" href="#login">
                        Login
                      </Nav.Link>{" "}
                    </Nav.Item>
                  </Link>
                  <Link className="navLink" to="/signup">
                    <Nav.Item>
                      {" "}
                      <Nav.Link className="navLink" href="#signup">
                        Signup
                      </Nav.Link>{" "}
                    </Nav.Item>
                  </Link>
                </>
              )}
            </Nav>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default Header;
