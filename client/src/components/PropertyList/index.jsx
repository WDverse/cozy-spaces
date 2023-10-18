// Import necessary dependencies and styles for the Property component
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Auth from "../../utils/auth";
import { propertyInfo } from "../../propertyInfo";
import "../../styles/Property.css";

// Define the PropertyList component as a functional component
const PropertyList = () => {
  // Define state variables for handling the modal
  const [show, setShow] = useState(false);

  // Function to close the modal
  const handleClose = () => setShow(false);

  // Function to show the modal
  const handleShow = () => setShow(true);

  // Initialize currentInfo with information from the first property in the propertyInfo array
  const [currentInfo, setCurrentInfo] = useState({
    image: propertyInfo[0].image,
    location: propertyInfo[0].location,
    price: propertyInfo[0].price,
    stripeLink: propertyInfo[0].stripeLink,
  });

  return (
    <div className="container">
      {/* Modal for displaying booking details */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Card displaying information about the selected property */}
          <Card style={{ width: "18rem" }}>
            <Card.Img height={"200"} variant="top" src={currentInfo.image} />
            <Card.Body>
              <Card.Title>{currentInfo.location}</Card.Title>
              <Card.Text>{currentInfo.price}</Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          {/* Button to close the modal */}
          <Button className="closeBtn" variant="danger" onClick={handleClose}>
            Close
          </Button>

          {/* Button to initiate the checkout process */}
          <a href={currentInfo.stripeLink}>
            {" "}
            <Button className="chkout-button" variant="primary">
              Checkout
            </Button>
          </a>
        </Modal.Footer>
      </Modal>

      {/* Conditional rendering based on whether the user is logged in */}

      {Auth.loggedIn() ? (
        <div className="spacesList">
          {/* Heading for the list of vacation spaces */}
          <h2 style={{ width: "100%" }}>Our Vacation Spaces</h2>
          <Row xs={1} sm={2} md={2} lg={4} className="g-4">
            {propertyInfo &&
              // Create a card for each object in the propertyInfo array
              propertyInfo.map((user, i) => (
                <Col key={i}>
                  {/* Individual property card */}
                  <Card className="shadow mb-5 bg-body rounded">
                    {/* Property image */}
                    <Card.Img
                      src={propertyInfo[i].image}
                      variant="top"
                      height={"230"}
                    />
                    <Card.Body>
                      {/* Property location */}
                      <Card.Title>{propertyInfo[i].location}</Card.Title>

                      {/* Property price */}
                      <Card.Text>Price: {propertyInfo[i].price}</Card.Text>

                      {/* Property status */}
                      <Card.Text>Status: {propertyInfo[i].status}</Card.Text>

                      {/* Button to book the space */}
                      <Button
                        className="prop-buttons"
                        variant="dark"
                        onClick={() => {
                          handleShow(); // Show the booking modal
                          setCurrentInfo({
                            image: propertyInfo[i].image,
                            location: propertyInfo[i].location,
                            price: propertyInfo[i].price,
                            stripeLink: propertyInfo[i].stripeLink,
                          });
                        }}
                      >
                        Book this space{" "}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      ) : (
        <div className="spacesList">
          {/* Heading for the list of vacation spaces */}
          <h2 style={{ width: "100%" }}>Our Vacation Spaces</h2>
          <p className="para" style={{ width: "100%" }}>
            {/* Message for users who are not logged in */}
            You can only view spaces now. To book a space, please{" "}
            <Link className="prop-link" to="/login">
              login
            </Link>{" "}
            or{" "}
            <Link className="prop-link" to="/signup">
              signup.
            </Link>
          </p>
          <Row xs={1} sm={2} md={2} lg={4} className="g-4">
            {propertyInfo &&
              propertyInfo.map((user, i) => (
                <Col key={propertyInfo[i].id}>
                  {/* Individual property card (for non-logged-in users) */}
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
        </div>
      )}
    </div>
  );
};

// Export the PropertyList component as the default export of this module
export default PropertyList;
