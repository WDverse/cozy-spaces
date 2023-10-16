// Importing necessary styles and components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import "../styles/Signup.css";

// Define a functional component called SignUp
const SignUp = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <div className="box">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      {data ? (
        <p>
          Success! You may now head <Link to="/spaces">back to book a space.</Link>
        </p>
      ) : (
        <div className="form-box">
          <Form style={{ width: "" }} onSubmit={handleFormSubmit}>
            <h3>Signup</h3>
            <Form.Group className="mb-3 form-input" controlId="signup.username">
              <Form.Control
                name="username"
                type="text"
                placeholder="Your username"
                value={formState.name}
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 form-input" controlId="signup.email">
              <Form.Control
                name="email"
                type="email"
                placeholder="Your email"
                value={formState.email}
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 form-input" controlId="signup.password">
              <Form.Control
                name="password"
                type="password"
                placeholder="******"
                value={formState.password}
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>
            <Button variant="dark" type="submit" value="Submit">
              Submit
            </Button>
          </Form>
        </div>
      )}
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};
// Export the SignUp component as the default export of this module
export default SignUp;
