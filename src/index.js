import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/style.css';
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import FicheLogement from "./pages/ficheLogement";
import ErrorPage from "./pages/errorPage";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div className="App">
        <HashRouter>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
     
    </div>
  </React.StrictMode>
);
reportWebVitals();
