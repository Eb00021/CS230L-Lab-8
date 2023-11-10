import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home.js';
import Card from './card.js';
import Contact from './contact.js';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">CS 230L</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/card">Card</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <h1>CS 230L</h1>
        <h2>Section - 002</h2>
        <p>WVU ID: 800355267</p>
        <p>Hi, I am Ethan Boyd</p>
      </BrowserRouter>
    </div>
  );
}

export default App;