import React from "react";
import HomePage from "./pages/HomePage";
import globalStyles from "./theme/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TestRenderer from 'react-test-renderer'; // ES6

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

const testRenderer = TestRenderer.create(
  <App></App>
);
console.log(testRenderer.toJSON());