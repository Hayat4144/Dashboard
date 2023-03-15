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
import ProtectedRoutes from "./global/ProtectedRoutes";
const MainAccount = lazy(() => import('./Components/Account/MainAccount'))
const ForgetPasswordDone = lazy(() => import('./Components/Account/ForgetPasswordDone'))
const EmailChange = lazy(() => import('./Components/Account/EmailChange'))
const EmailChangeRequest = lazy(() => import('./Components/Account/EmailChangeRequest'))
const Signup = lazy(() => import('./auth/Signup'))
const Signin = lazy(() => import('./auth/Signin'))
const Orders = lazy(() => import('./Components/Shop/Orders'))
const OrderProuduct = lazy(() => import('./Components/Shop/OrderProuduct'))
const AddVareint = lazy(() => import('./Components/Shop/AddVareint'))
const Profiles = lazy(() => import('./Components/Account/Profiles'))
const Address = lazy(() => import('./Components/Account/Address'))
const EditProduct = lazy(() => import('./Components/Shop/EditProduct'))
const RequestForgetPassword = lazy(() => import('./Components/Account/RequestForgetPassword'))
const PasswordChange = lazy(() => import('./Components/Account/PasswordChange'))
const AddProducts = lazy(() => import('./Components/Shop/AddProducts'))
const Transactions = lazy(() => import('./Components/Shop/Transactions'))
const Products = lazy(() => import('./Components/Shop/Products'))
const MainAnalytics = lazy(() => import('./Components/Analytics/MainAnalytics'))


export default function App() {
  console.clear();
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route
              path="/"
              element={<Dashboard />} />
            <Route
              path="/v3/seller/add/product"
              element={<Suspense fallback={<AddProductSkeleton />}><AddProducts /></Suspense>}
            />
            <Route
              path="/v3/seller/account/address"
              element={<Suspense fallback={<AddressSkeleton />}><Address /></Suspense>}
            />
            <Route
              path="/v3/seller/products"
              element={<Suspense fallback={<TransactionSkeleton />}><Products /></Suspense>}
            />
            <Route
              path="/v3/seller/account"
              element={<Suspense fallback={<AccountSkeleton />}><MainAccount /></Suspense>}
            />
            <Route
              path="/v3/seller/account/change/password"
              element={<Suspense fallback={<PasswordChangeSkeleton />}><PasswordChange /></Suspense>}
            />
            <Route
              path="/v3/seller/account/request/password/reset"
              element={<Suspense fallback={<EmailSkeleton />}><RequestForgetPassword /></Suspense>}
            />
            <Route
              path="/v3/seller/account/request/password/reset/:token"
              element={<Suspense fallback={<PasswordChangeSkeleton />}><ForgetPasswordDone /></Suspense>}
            />
            <Route
              path="/v3/seller/account/profile"
              element={<Suspense fallback={<ProfileSkeleton />}><Profiles /></Suspense>}
            />
            <Route
              path="/v3/seller/transactions"
              element={<Suspense fallback={<TransactionSkeleton />}><Transactions /></Suspense>}
            />
            <Route
              path="/v3/seller/orders"
              element={<Suspense fallback={<OrderSkeleton />}><Orders /></Suspense>}
            />
            <Route
              path="/v3/seller/edit/product/:id"
              element={<Suspense fallback={<AddProductSkeleton />}><EditProduct /></Suspense>}
            />

            <Route
              path="/v3/seller/product/add/varient/:id"
              element={<Suspense fallback={'loding'}><AddVareint /></Suspense>}
            />
            <Route
              path="/v3/seller/order/product/:id"
              element={<Suspense fallback={<p>loading..</p>}><OrderProuduct /></Suspense>}
            />
            <Route
              path="/v3/seller/account/change/email/request"
              element={<Suspense fallback={<PasswordChangeSkeleton />}><EmailChangeRequest /></Suspense>}
            />
            <Route
              path="/v3/seller/change/email/link/verify/:id/:token"
              element={<Suspense fallback={<PasswordChangeSkeleton />}><EmailChange /></Suspense>}
            />
            <Route
              path="/v3/seller/analytic"
              element={<Suspense fallback={<p>loading..</p>}><MainAnalytics /></Suspense>}
            />
          </Route>
          <Route
            path="/v3/seller/signin"
            element={<Suspense fallback={<SinginSkeleton />}><Signin /></Suspense>}
          />
          <Route
            path="/v3/seller/signup"
            element={<Suspense fallback={<SignupSkeleton />}><Signup /></Suspense>}
          />
        </Routes>
      </Router>
      <ToastContainer />
    </Fragment>
  );
}
