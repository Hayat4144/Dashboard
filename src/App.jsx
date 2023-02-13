import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import AsideNavbar from "./global/AsideNavbar";
import Signin from "./auth/Signin";

export default function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
        </Routes>
      </Router>
    </Fragment>
  );
}
