import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import "./index.css";
import Home from "./routes/home";
import Layout from "./layout";
import Nav from "./components/shared/Nav";
import Events from "./routes/events";
import About from "./routes/about";

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
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
