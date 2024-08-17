import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from "./contexts/AuthContext.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import About from "./components/about.jsx";
import Destinations from "./components/Destinations.jsx";
import OurServices from "./components/OurServices.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import ViewProfile from "./components/ViewProfile.jsx";
import AIContentPage from "./components/AIContentPage.jsx";
import NewDestinationPage from "./components/NewDestinationPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<PrivateRoute />}>
        <Route path="" element={<Home />} />
        <Route path="destination" element={<NewDestinationPage />} />
        <Route path="ourservices" element={<OurServices />} />
      </Route>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<About />} />
      <Route path="ForgotPassword" element={<ForgotPassword />} />
      <Route path="profile" element={<ViewProfile />} />
      {/* <Route path="/destination/:destination" component={AIContentPage} /> */}
      <Route path="destination/:destination" element={<AIContentPage />} />


      </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
