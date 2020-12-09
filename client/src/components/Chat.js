import React, { useRef } from "react";
import { Container, Form } from "react-bootstrap";

export default function Chat() {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Container
        className="align-items-center d-flex"
        style={{ height: "100vh", color: "white" }}
      >
        <Form onSubmit={handleSubmit} className="w-100">
          <Form.Group>
            <Form.Label>Enter Your Id</Form.Label>
            <Form.Control type="text" ref={idRef}></Form.Control>
          </Form.Group>
          <button type="submit">Login</button>
          <button variant="secondary">Sign Up</button>
        </Form>
      </Container>
    </div>
  );
}
