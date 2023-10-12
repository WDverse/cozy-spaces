// Importing necessary components and styles
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Auth from "../../utils/auth";
import { propertyInfo } from "../../propertyInfo";

// Define a functional component called PropertyList
const PropertyList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currentInfo, setCurrentInfo] = useState({
    image: propertyInfo[0].image,
    location: propertyInfo[0].location,
    price: propertyInfo[0].price,
  });
  // if (!locations.length) {
  //   return <h2>No Bookings Yet</h2>;
  // }

  return (//returns html and react components 
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: "18rem" }}>
            <Card.Img  height={"200"} variant="top" src={currentInfo.image} />
            <Card.Body>
              <Card.Title>{currentInfo.location}</Card.Title>
              <Card.Text>{currentInfo.price}</Card.Text>
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
      {Auth.loggedIn() ? (
        <>
          <h2 style={{ width: "100%" }}>Our Vacation Spaces</h2>
          <Row xs={1} sm={2} md={2} lg={4} className="g-4">
            {propertyInfo &&
              propertyInfo.map((user, i) => (
                <Col key={i}>
                  <Card className="shadow mb-5 bg-body rounded">
                    <Card.Img
                      src={propertyInfo[i].image}
                      variant="top"
                      height={"230"}
                    />
                    <Card.Body>
                      <Card.Title>{propertyInfo[i].location}</Card.Title>
                      <Card.Text>Price: {propertyInfo[i].price}</Card.Text>
                      <Card.Text>Status: {propertyInfo[i].status}</Card.Text>
                      <Button variant="dark" onClick={()=> {handleShow(); setCurrentInfo({
                        image: propertyInfo[i].image, 
                        location: propertyInfo[i].location, 
                        price: propertyInfo[i].price
                      })}}>
                        Book this space{" "}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </>
      ) : (
        <>
          <h2 style={{ width: "100%" }}>Our Vacation Spaces</h2>
          <p style={{ width: "100%" }}>
            You can only view spaces now. To book a space, please{" "}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
          <Row xs={1} sm={2} md={2} lg={4} className="g-4">
            {propertyInfo &&
              propertyInfo.map((user, i) => (
                <Col key={propertyInfo[i].id}>
                  <Card className="shadow mb-5 bg-body rounded">
                    <Card.Img
                      src={propertyInfo[i].image}
                      variant="top"
                      height={"300"}
                    />
                    <Card.Body>
                      <Card.Title>{propertyInfo[i].location}</Card.Title>
                      <Card.Text>Price: {propertyInfo[i].price}</Card.Text>
                      <Card.Text>Status: {propertyInfo[i].status}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </>
      )}
    </>
  );
};

// Export the PropertyList component as the default export of this module
export default PropertyList;
