import React, { Fragment ,Suspense,lazy} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";;
import AddProducts from "./Components/Shop/AddProducts";
import ProductList from "./Components/Shop/ProductList";
import Products from "./Components/Shop/Products";
import OrderChart from "./global/OrderChart";
import PasswordChange from "./Components/Account/PasswordChange";
import RequestForgetPassword from "./Components/Account/RequestForgetPassword";
import Address from "./Components/Account/Address";
import Profiles from "./Components/Account/Profiles";
import EditProduct from "./Components/Shop/EditProduct";
import 'react-loading-skeleton/dist/skeleton.css'
import SignupSkeleton from "./animation/SignupSkeleton";
import SinginSkeleton from "./animation/SinginSkeleton";
import AccountSkeleton from "./animation/AccountSkeleton";
import TransactionSkeleton from "./animation/TransactionSkeleton";
import OrderSkeleton from "./animation/OrderSkeleton";
const MainAccount = lazy(()=>import('./Components/Account/MainAccount'))
const Signup = lazy(()=>import('./auth/Signup'))
const Signin = lazy(()=>import('./auth/Signin'))
const Orders = lazy(()=>import('./Components/Shop/Orders'))
const Transactions = lazy(()=>import('./Components/Shop/Transactions'))


export default function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/v3/seller/add/product" element={<AddProducts />} />
          <Route path="/v3/seller/products" element={<Products />} />
          <Route path="/v3/seller/account" element={<Suspense fallback={<AccountSkeleton />}><MainAccount /></Suspense>} />
          <Route path="/v3/seller/account/change/password" element={<PasswordChange />} />
          <Route path="/v3/seller/account/request/password/reset" element={<RequestForgetPassword />} />
          <Route path="/v3/seller/account/address" element={<Address />} />
          <Route path="/v3/seller/account/profile" element={<Profiles />} />
          <Route path="/v3/seller/transactions" element={<Suspense fallback={<TransactionSkeleton />}><Transactions /></Suspense>} />
          <Route path="/v3/seller/orders" element={<Suspense fallback={<OrderSkeleton />}><Orders /></Suspense>} />
          <Route path="/v3/seller/edit/product/:id" element={<EditProduct />} />
          <Route path="/v3/seller/signin" element={<Suspense fallback={<SinginSkeleton />}><Signin /></Suspense>} />
          <Route path="/v3/seller/signup" element={<Suspense fallback={<SignupSkeleton />}><Signup /></Suspense>} />
        </Routes>
      </Router>
    </Fragment>
  );
}
