// Importing necessary styles and components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
// Define a functional component called SignUp
const Login = (props) => {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };
    return (
        <div style={{ backgroundColor: "white" }}>
            <h2>Login</h2>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
            <Form style={{ width: "" }}>
                <Form.Group className=" form-input mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Control type="email"  name="email"   value={formState.email}
                  onChange={handleChange} placeholder="Your email" required />
                </Form.Group>

                <Form.Group className="form-input mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control   name="password" tyepe ="password" placeholder="******"   value={formState.password}
                  onChange={handleChange} required />

                </Form.Group>
                <Button variant="dark"  type="submit" value="Submit" >Button</Button>
            </Form>
            )}
             {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
             )}
        </div>
             
    );
};

// Export the SignUp component as the default export of this module
export default Login;
