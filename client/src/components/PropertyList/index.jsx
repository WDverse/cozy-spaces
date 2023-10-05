// Importing necessary components and styles
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Define a functional component called PropertyList
const PropertyList = () => {
    return (
        // Row with responsive column layout
        <Row xs={1} sm={2} md={2} lg={4} className="g-4">
            <h2 style={{ width: "100%" }}>Cool Heading</h2>
            <Col>
                <Card>
                    <Card.Img src = "" variant="top" height={""} />
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Text className="project-text">Description</Card.Text>
                        <Button variant="dark">Add to cart </Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" height={""} />
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Text className="project-text">Description</Card.Text>
                        <Button variant="dark">Add to cart </Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" height={""} />
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Text className="project-text">Description</Card.Text>
                        <Button variant="dark">Add to cart </Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" height={""} />
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Text className="project-text">Description</Card.Text>
                        <Button variant="dark">Add to cart </Button>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    );
};

// Export the PropertyList component as the default export of this module
export default PropertyList;
