import React from "react";
import './App.css';
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import FicheLogement from "./pages/ficheLogement";

function App() {
  return (
    <div className="App">
        <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fichelogement/:id" element={<FicheLogement />} />
        
      </Routes>
    </HashRouter>
     
    </div>
  );
}

export default App;
