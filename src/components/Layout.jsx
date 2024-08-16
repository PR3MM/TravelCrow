import React from "react";
import Navbar from "./Navbar";
import NewNav from "./NewNav";
import Hero from "./Hero";
import OurServices from "./OurServices";
import Destinations from "./Destinations";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Layout() {
  // const currentUser = useAuth();
  const { currentUser } = useAuth();
  return (
    <div>
      

      {currentUser ? <NewNav /> : <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
