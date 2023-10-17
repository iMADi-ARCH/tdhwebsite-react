import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import "./index.css";
import Layout from "./layout";
import Home from "./routes/home";
import Events from "./routes/events";
import About from "./routes/about";
import Login from "./routes/login";
import Register from "./routes/register";
import SignUp from "./routes/signup";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
