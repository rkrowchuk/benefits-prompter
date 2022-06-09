import { React, useEffect, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
