import React, { useState } from "react";
import './name.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
        <Form onSubmit={handleSubmit}>
        
          <Form.Group size="sm" controlId="email">
            <Form.Label className="deets">Email Address</Form.Label>
            <Form.Control className="cont"
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group size="sm" controlId="password">
            <Form.Label className="deets">Password</Form.Label>
            <Form.Control className="cont"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>
          <input type="checkbox" />
           <span className="terms"> I agree to the Terms & Conditions</span>
        </label>
        <br></br>
          </Form.Group>
          <Button className="btn" block="true" size="md" type="submit" disabled={!validateForm()}>
            Login
          </Button>
          <span className="unregistered">Already have an account? Login</span>
        </Form>
        </div>
        
  
    );
  }