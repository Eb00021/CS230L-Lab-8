import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href='./home.js'>Home</Nav.Link>
        <Nav.Link href='./contact.js'>Contact</Nav.Link>
        <Nav.Link href='./card.js'>Card</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navbar;
