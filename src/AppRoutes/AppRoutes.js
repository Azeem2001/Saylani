import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";
import Home from "Pages/Home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Service from "Pages/Service/Service";
import About from "Pages/About/About";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
