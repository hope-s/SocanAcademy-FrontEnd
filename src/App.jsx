import React from "react";
import HomePage from "./views/pages/HomePage";
import globalStyles from "./theme/globalStyles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./layout/Navbar";
import TestRenderer from "react-test-renderer";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  globalStyles();
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

const testRenderer = TestRenderer.create(<App />);
console.log(testRenderer.toJSON());
