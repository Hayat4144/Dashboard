import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";;
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import AddProducts from "./Components/Shop/AddProducts";
import ProductList from "./Components/Shop/ProductList";
import Products from "./Components/Shop/Products";
import OrderChart from "./global/OrderChart";
import MainAccount from "./Components/Account/MainAccount";
import PasswordChange from "./Components/Account/PasswordChange";
import RequestForgetPassword from "./Components/Account/RequestForgetPassword";
import Address from "./Components/Account/Address";
import Profiles from "./Components/Account/Profiles";
import Transactions from "./Components/Shop/Transactions";
import Orders from "./Components/Shop/Orders";
import EditProduct from "./Components/Shop/EditProduct";

export default function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/v3/seller/add/product" element={<AddProducts />} />
          <Route path="/v3/seller/products" element={<Products />} />
          <Route path="/v3/seller/account" element={<MainAccount />} />
          <Route path="/v3/seller/account/change/password" element={<PasswordChange />} />
          <Route path="/v3/seller/account/request/password/reset" element={<RequestForgetPassword />}/>
          <Route path="/v3/seller/account/address" element={<Address />}/>
          <Route path="/v3/seller/account/profile" element={<Profiles />}/>
          <Route path="/v3/seller/transactions" element={<Transactions />}/>
          <Route path="/v3/seller/orders" element={<Orders />}/>
          <Route path="/v3/seller/edit/product/:id" element={<EditProduct />}/>
          <Route path="/v3/seller/signin" element={<Signin />} />
          <Route path="/3/seller/signup" element={<Signup />} />
        </Routes>
      </Router>
    </Fragment>
  );
}
