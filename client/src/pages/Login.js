// Importing necessary styles and components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Define a functional component called SignUp
const Login = () => {
    return (
        <div class="text" style={{ backgroundColor: "white" }}>
            <h2 className="contact">Login</h2>

            <Form style={{ width: "" }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Your email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control  tyepe ="password" placeholder="******" required />
                </Form.Group>
                <Button variant="dark" as="input" type="submit" value="Submit" />{" "}
            </Form>
        </div>
    );
};
// Export the SignUp component as the default export of this module
export default Login;
