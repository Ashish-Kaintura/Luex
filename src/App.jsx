// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Aboutus" element={<Aboutus/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Contact" element={<Contact/>} />
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}
