import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
const Menubar = () => {
  const {user, logOut}= useAuth();
  return (
    <>
  <Navbar bg="dark" variant="dark" sticky="top"collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Care Hospital</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
    <Nav.Link as={Link} to="/about">About</Nav.Link>
    
      <Nav.Link  as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="/contuctUs">Contuct Us</Nav.Link>
      <Nav.Link  as={HashLink} to="/home#experts">Experts</Nav.Link>

      {user?.email?

       <Button onClick={logOut} variant="light">Logout</Button>:

      <Nav.Link  as={Link} to="/login">Login</Nav.Link>}
      <Navbar.Text>
        {
          user?.email && 
          <h6>{user.displayName}</h6>
        }
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
  

  
  
</>
  );
};

export default Menubar;