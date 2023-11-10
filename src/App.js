import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/card" element={<Card />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
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
