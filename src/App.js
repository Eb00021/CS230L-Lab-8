import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './home.js';
import Navbar from './navbar.js';
import Card from './card.js';
import Contact from './contact.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="./home.js" element={<Home />}></Route>
              <Route path="./card.js" element={<Card />}></Route>
              <Route path="./contact.js" element={<Contact />}></Route>
            </Routes>
       </BrowserRouter>

      <h1>CS 230L</h1>
	  <h2>Section - 002</h2>
	  <p>WVU ID: 800355267</p>
	  <p>Hi I am Ethan Boyd</p>
    </div>
  );
}

export default App;
