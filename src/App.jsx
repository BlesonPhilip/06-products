import React from "react";
import "./app.css";
import Home from "./pages/Home/home";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details/details";
import Extra from "./extra/extra";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </div>
  );
};

export default App;
