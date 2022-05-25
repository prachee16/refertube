import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./login.css";
import GoogleButton from 'react-google-button'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
    <GoogleButton className='google'
  onClick={() => { console.log('Google button clicked') }}
/>
    
      <Form onSubmit={handleSubmit}>
      
        <Form.Group size="sm" controlId="email">
          <Form.Label className="deets">Email Address</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group size="sm" controlId="password">
          <Form.Label className="deets">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <label>
        <input type="checkbox" />
         <span> Remember me</span>
      </label>
      <br></br>
        </Form.Group>
        <Button className="btn" block="true" size="md" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <span className="unregistered">Not registered yet? Create an account</span>
      </Form>
      </div>

  );
}
