// Import necessary styles and components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import "../styles/Login.css";

// Define a functional component called Login
const Login = (props) => {
  // Initialize form state with email and password fields
  const [formState, setFormState] = useState({ email: "", password: "" });
  // Use Apollo Client's useMutation hook to handle user login
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // Function to update form state based on input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      // Call the Auth.login method to store the user's authentication token
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // Clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div className="box">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      {data ? ( // If user login is successful
        <p>
          Success! You may now head{" "}
          <Link to="/spaces">back to book a space.</Link>
        </p>
      ) : (
        <div className="form-box">
          <Form style={{ width: "" }} onSubmit={handleFormSubmit}>
            <h3>Login</h3>
            <Form.Group className="form-input mb-3" controlId="login.email">
              <Form.Control
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </Form.Group>
            <Form.Group className="form-input mb-3" controlId="login.password">
              <Form.Control
                name="password"
                type="password"
                placeholder="******"
                value={formState.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="dark" type="submit" value="Submit">
              Login
            </Button>{" "}
          </Form>
        </div>
      )}
      {error && ( // If there is an error during login
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

// Export the Login component as the default export of this module
export default Login;
