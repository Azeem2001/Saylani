import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";
import Home from "Pages/Home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Service from "Pages/Service/Service";
import About from "Pages/About/About";
import Media from "Pages/Media/Media";
import Courses from "Pages/Courses/Courses";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
