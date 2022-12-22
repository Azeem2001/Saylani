import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";
import Home from "Pages/Home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
