import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "../src/layouts/NavBar";
import Bandeja from "./components/Bandeja";
import Servicios from "./components/Servicios";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Bandeja" element={<Bandeja />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
