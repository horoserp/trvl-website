import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import Services from "./components/pages/Services.js";
import Products from "./components/pages/Products.js";
import SignUp from "./components/pages/SignUp.js";
import Footer from "./components/Footer.js";
import Layout from "./components/pages/Layout.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
