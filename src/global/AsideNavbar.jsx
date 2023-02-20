import React, { Fragment, useState, Suspense, lazy } from "react";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from "@mui/icons-material/LightMode";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { toastifyoption } from "./Notification";
import { useDispatch } from "react-redux";
import { SIGNIN } from "../Context/actions/ActionsType";
const MobileNavbar = lazy(() => import('./MobileNavbar'))


export default function AsideNavbar() {
  const [isMobileViewOpen, setIsMobileViewOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [isCollapsed, setIsCollapsed] = useState(false);
  const dispatch = useDispatch();

  // ----------------- stop scrolling if the modal is open ------------------- //
  if (isMobileViewOpen) {
    document.body.classList.toggle('modal-open');
  }
  else {
    document.body.classList.remove('modal-open')
  }

  const MobileSideModalToggle = (state) => {
    setIsMobileViewOpen(!state)
  }

  const LogoutFunc = async () => {
    const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v3/seller/auth/logout`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    const { data, error } = await response.json();
    if (response.status !== 200) return toast.error(error, toastifyoption);
    dispatch({ type: SIGNIN })
    toast.success(data, toastifyoption)
  }

  // theme switcher function
  const ThemeSwithcherFunc = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };


  return (
    <Fragment>
      <aside
        className={`aside_navbar hidden ${!isCollapsed ? "w-72" : "text-center w-20"
          }  h-screen sticky top-0  text-gray-900 duration-300 border-r border-gray-500 z-10
        ${theme !== 'dark' ? 'border-r border-gray-400' : ''} hidden md:block dark:bg-gray-800 shadow-lg`}
      >
        <div className="logo my-5">
          {isCollapsed ? (
            <BsArrowRightShort
              className="text-gray-900 bg-white dark:bg-indigo-700 dark:text-white rounded-full absolute top-5 -right-3 border border-gray-400 
         text-3xl cursor-pointer  dark:border-gray-500"
              onClick={() => setIsCollapsed(!isCollapsed)}
            />
          ) : (
            <BsArrowLeftShort
              className="text-gray-900 absolute top-5 -right-3 dark:bg-indigo-700 dark:text-white bg-white rounded-full
        border-gray-400 border text-3xl cursor-pointer"
              onClick={() => setIsCollapsed(!isCollapsed)}
            />
          )}
          <h1 className="origin-left mx-5 dark:text-gray-200">logo</h1>
        </div>
        <div className="nav_links">
          <ul className="my-5 mx-3 cursor-pointer">
            <Link to="/" >
              <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2 my-1  py-2 hover:rounded-md">
                <DashboardCustomizeOutlinedIcon className="dark:text-white" />
                <span className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}>Dashboard</span>
              </li>
            </Link>
            <Link>
              <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2 my-1 py-2 hover:rounded-md">
                <AnalyticsOutlinedIcon className="dark:text-white" />
                <span className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}>Analytics</span>
              </li>
            </Link>
            <Link to={'/v3/seller/orders'}>
              <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2 my-1  py-2 hover:rounded-md">
                <AddShoppingCartOutlinedIcon className="dark:text-white" />
                <span className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}>Orders</span>
              </li>
            </Link>
            <Link to="/v3/seller/products">
              <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2  py-2 my-1 hover:rounded-md">
                <Inventory2OutlinedIcon className="dark:text-white" />
                <span className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}>Products</span>
              </li>
            </Link>
            <Link to="/v3/seller/transactions">
              <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2  py-2 my-1 hover:rounded-md">
                <PaymentsOutlinedIcon className="dark:text-white" />
                <span className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}>Transactions</span>
              </li>
            </Link>
            <Link to="/v3/seller/account">
              <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2  py-2 my-1 hover:rounded-md">
                <SwitchAccountOutlinedIcon className="dark:text-white" />
                <span className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}>Account</span>
              </li>
            </Link>
            <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2  py-2 my-1 hover:rounded-md">
              <SettingsOutlinedIcon className="dark:text-white" />
              <span className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`} >Settings</span>
            </li>
            <li className="space-x-3  hover:bg-indigo-600 hover:text-white px-2 py-2 my-1  hover:rounded-md" onClick={ThemeSwithcherFunc}>
              <button>
                {theme === "dark" ? (
                  <LightModeIcon className="dark:text-white" />
                ) : (
                  <DarkModeOutlinedIcon className="dark:text-white" />
                )}
              </button>
              <span className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}>Toogle Dark Mode</span>
            </li>
          </ul>
        </div>
        <div className={`logout_section relative top-28 mx-3 `}>
          <div
            onClick={(e)=>{
              e.preventDefault();
              LogoutFunc();
            }}
            className="flex space-x-3 hover:bg-indigo-600 cursor-pointer
           hover:text-white px-2  py-2 my-1 hover:rounded-md">
            <LogoutIcon className="dark:text-white" />
            <span className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}>Log out</span>
          </div>
        </div>
      </aside>
    </Fragment>
  );
}
