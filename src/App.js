import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import Blog from './pages/blog';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from "./pages/gallery";
import Guests from "./pages/guests";
import Login from "./pages/login";
import Admin from "./pages/admin"; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />

        <Route path="/admin" element={isLoggedIn ? <Admin /> : <Navigate to="/login" />} />

     
     

       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/gallery" element={<Gallery />} />
       <Route path="/blog" element={<Blog />} />
       <Route path="/guests" element={<Guests />} />
 

   
      </Routes>
    </Router>
  );
}



export default App;
