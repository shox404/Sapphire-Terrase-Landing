import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Apartments from "./pages/apartments";
import Gallery from "./pages/gallery";
import Saved from "./pages/saved";
import Info from "./pages/info";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import Call from "./pages/call";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/info" element={<Info />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/call" element={<Call />} />
      </Routes>
      {location.pathname !== "/contacts" && location.pathname !== "/call" ? (
        <Footer />
      ) : (
        ""
      )}
    </>
  );
}
