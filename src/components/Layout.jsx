import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import OurServices from "./OurServices";
import Destinations from "./Destinations";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
