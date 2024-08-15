import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Destinations from "./components/Destinations.jsx";
import OurServices from "./components/OurServices.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import About from "./components/about.jsx";
import AuthProvider from "./contexts/AuthContext.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <PrivateRoute path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="destinations" element={<Destinations />} />
      <Route path="ourservices" element={<OurServices />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<About />} />
    </PrivateRoute>
  )
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  // {/* </StrictMode> */}
);
