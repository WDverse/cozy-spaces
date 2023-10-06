// Importing necessary components and styles
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import beachHouse from "../../assets/images/beachHouse.jpg";

// Define a functional component called PropertyList
const PropertyList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={beachHouse} />
            <Card.Body>
              <Card.Title>Property Name</Card.Title>
              <Card.Text>Description</Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>

      {/* // Row with responsive column layout */}
      <Row xs={1} sm={2} md={2} lg={4} className="g-4">
        <h2 style={{ width: "100%" }}>Our Vacation Spaces</h2>
        <Col>
          <Card>
            <Card.Img src="" variant="top" height={""} />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text className="project-text">Description</Card.Text>
              <Button variant="dark" onClick={handleShow}>
                Book this space{" "}
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" height={""} />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text className="project-text">Description</Card.Text>
              <Button variant="dark" onClick={handleShow}>Book this space </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" height={""} />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text className="project-text">Description</Card.Text>
              <Button variant="dark" onClick={handleShow}>Book this space </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" height={""} />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text className="project-text">Description</Card.Text>
              <Button variant="dark" onClick={handleShow}>Book this space </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

// Export the PropertyList component as the default export of this module
export default PropertyList;
