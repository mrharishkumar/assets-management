import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

import "./Login.scss";

const Login = () => {
  const defaultValues = {
    username: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultValues);

  const field = useRef();

  useEffect(() => {
    field.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const { username, password } = formFields;

  return (
    <div className="Login">
      <Row className="justify-content-md-center pt-5">
        <Col xs="6" lg="4">
          <Form className="p-5">
            <Row className="justify-content-md-center">
              <img
                src="./assets/images/impressico-logo.png"
                alt="logo"
                className="logo center"
              />
            </Row>
            <Form.Group controlId="username">
              <Form.Label className="label">Username</Form.Label>
              <Form.Control
                name="username"
                type="username"
                ref={field}
                value={username}
                onChange={handleChange}
                placeholder="Enter username"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label className="label">Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter password"
              />
            </Form.Group>
            <Row className="justify-content-md-center">
              <Button className="btn py-1 mt-3" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
