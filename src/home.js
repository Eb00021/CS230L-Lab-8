import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <Container className="mt-5 text-center">
      <h1>CS 230L</h1>
      <h2>Section - 002</h2>
      <p>WVU ID: 800355267</p>
      <p>Hi, I am Ethan Boyd</p>
    </Container>
  );
}

export default Home;