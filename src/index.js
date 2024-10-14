import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout.js";
import Home from "./components/pages/Home.js";
import Services from "./components/pages/Services.js";
import Products from "./components/pages/Products.js";
import SignUp from "./components/pages/SignUp.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/trvl-website" element={<Layout />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
