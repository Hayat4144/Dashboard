import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Components/Dashboard";;
import 'react-loading-skeleton/dist/skeleton.css'
import SignupSkeleton from "./animation/SignupSkeleton";
import SinginSkeleton from "./animation/SinginSkeleton";
import AccountSkeleton from "./animation/AccountSkeleton";
import TransactionSkeleton from "./animation/TransactionSkeleton";
import OrderSkeleton from "./animation/OrderSkeleton";
import ProfileSkeleton from './animation/ProfileSkeleton'
import AddressSkeleton from "./animation/AddressSkeleton";
import PasswordChangeSkeleton from './animation/PasswordChangeSkeleton'
import EmailSkeleton from './animation/EmailSkeleton'
import AddProductSkeleton from './animation/AddProductSkeleton'
const MainAccount = lazy(() => import('./Components/Account/MainAccount'))
const ForgetPasswordDone = lazy(() => import('./Components/Account/ForgetPasswordDone'))
const Signup = lazy(() => import('./auth/Signup'))
const Signin = lazy(() => import('./auth/Signin'))
const Orders = lazy(() => import('./Components/Shop/Orders'))
const Profiles = lazy(() => import('./Components/Account/Profiles'))
const Address = lazy(() => import('./Components/Account/Address'))
const EditProduct = lazy(() => import('./Components/Shop/EditProduct'))
const RequestForgetPassword = lazy(() => import('./Components/Account/RequestForgetPassword'))
const PasswordChange = lazy(() => import('./Components/Account/PasswordChange'))
const AddProducts = lazy(() => import('./Components/Shop/AddProducts'))
const Transactions = lazy(() => import('./Components/Shop/Transactions'))
const Products = lazy(() => import('./Components/Shop/Products'))


export default function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/v3/seller/add/product" element={<Suspense fallback={<AddProductSkeleton />}><AddProducts /></Suspense>} />
          <Route path="/v3/seller/account/address" element={<Suspense fallback={<AddressSkeleton />}><Address /></Suspense>} />
          <Route path="/v3/seller/products" element={<Suspense fallback={<TransactionSkeleton />}><Products /></Suspense>} />
          <Route path="/v3/seller/account" element={<Suspense fallback={<AccountSkeleton />}><MainAccount /></Suspense>} />
          <Route path="/v3/seller/account/change/password" element={<Suspense fallback={<PasswordChangeSkeleton />}><PasswordChange /></Suspense>} />
          <Route path="/v3/seller/account/request/password/reset" element={<Suspense fallback={<EmailSkeleton />}><RequestForgetPassword /></Suspense>} />
          <Route path="/v3/seller/account/request/password/reset/:token" element={<Suspense fallback={<PasswordChangeSkeleton />}><ForgetPasswordDone /></Suspense>} />
          <Route path="/v3/seller/account/profile" element={<Suspense fallback={<ProfileSkeleton />}><Profiles /></Suspense>} />
          <Route path="/v3/seller/transactions" element={<Suspense fallback={<TransactionSkeleton />}><Transactions /></Suspense>} />
          <Route path="/v3/seller/orders" element={<Suspense fallback={<OrderSkeleton />}><Orders /></Suspense>} />
          <Route path="/v3/seller/edit/product/:id" element={<Suspense fallback={<AddProductSkeleton />}><EditProduct /></Suspense>} />
          <Route path="/v3/seller/signin" element={<Suspense fallback={<SinginSkeleton />}><Signin /></Suspense>} />
          <Route path="/v3/seller/signup" element={<Suspense fallback={<SignupSkeleton />}><Signup /></Suspense>} />
        </Routes>
      </Router>
      <ToastContainer />
    </Fragment>
  );
}
