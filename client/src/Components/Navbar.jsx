import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';



const NavBar = () => {


  const { logout } = useContext(AuthContext);
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
     
        <Navbar.Brand as={Link} to="/">
          USER DATA
        </Navbar.Brand>

      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

    
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button as={Link} to="/login" variant="outline-danger" className="me-2" onClick={()=>{logout()}}>
              Logout
            </Button>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
