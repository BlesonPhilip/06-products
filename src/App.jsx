import React from "react";
import "./app.css";
import Home from "./pages/Home/home";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details/details";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
