import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/hom";
import Weather from "./pages/Weather";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ABout from "./pages/ABout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Weather/:city" element={<Weather />} />
        <Route path='/About' element={<ABout />} />
      </Routes>
    </Router>
  );
}

export default App;