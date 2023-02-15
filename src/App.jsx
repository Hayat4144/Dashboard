import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";;
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import AddProducts from "./Components/Shop/AddProducts";
import ProductList from "./Components/Shop/ProductList";
import Products from "./Components/Shop/Products";

export default function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/v3/seller/add/product" element={<AddProducts />} />
          <Route path="/v3/seller/products" element={<Products />} />
          <Route path="/3" element={<Signin />} />
          <Route path="/2" element={<Signup />} />
        </Routes>
      </Router>
    </Fragment>
  );
}
