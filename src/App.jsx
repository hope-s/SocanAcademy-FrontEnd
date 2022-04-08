import React from "react";
import HomePage from "./components/HomePage";
import globalStyles from "./theme/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  globalStyles();
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
