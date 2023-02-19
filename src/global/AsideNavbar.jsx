import React, { Fragment, useState, Suspense, lazy } from "react";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
const MobileNavbar = lazy(() => import('./MobileNavbar'))

export default function AsideNavbar() {
  const [isMobileViewOpen, setIsMobileViewOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [isCollapsed, setIsCollapsed] = useState(false);

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
          }  h-screen sticky top-0  text-gray-900 duration-300 border-r border-gray-500
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
          <ul className="space-y-1 my-5 mx-3 cursor-pointer">
            <Link to="/">
              <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2 py-2 hover:rounded-md">
                <DashboardCustomizeOutlinedIcon className="dark:text-white" />
                <span
                  className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}
                >
                  Dashboard
                </span>
              </li>
            </Link>
            <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2 py-2 hover:rounded-md">
              <AnalyticsOutlinedIcon className="dark:text-white" />
              <span
                className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}
              >
                {" "}
                Analytics
              </span>
            </li>
            <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2 py-2 hover:rounded-md">
              <AddShoppingCartOutlinedIcon className="dark:text-white" />
              <span
                className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}
              >
                {" "}
                Orders
              </span>
            </li>
            <Link to="/v3/seller/products">
              <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2 py-2 hover:rounded-md">
                <Inventory2OutlinedIcon className="dark:text-white" />

                <span
                  className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}
                >Products
                </span>
              </li>
            </Link>
            <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2 py-2 hover:rounded-md">
              <SellOutlinedIcon className="dark:text-white" />{" "}
              <span
                className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}
              >
                {" "}
                Sell
              </span>
            </li>
            <Link to="/v3/seller/transactions">
              <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2 py-2 hover:rounded-md">
                <PaymentsOutlinedIcon className="dark:text-white" />
                <span
                  className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}
                >
                  Transaction
                </span>
              </li>
            </Link>
          </ul>
          <ul className="space-y-2 my-5 mx-3 cursor-pointer">
            <Link to="/v3/seller/account">
              <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2 py-2 hover:rounded-md">
                <SwitchAccountOutlinedIcon className="dark:text-white" />
                <span
                  className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}
                >
                  Account
                </span>
              </li>
            </Link>
            <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2 py-2 hover:rounded-md">
              <SettingsOutlinedIcon className="dark:text-white" />
              <span
                className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}
              >
                Settings
              </span>
            </li>
            <li className="space-x-3 hover:bg-indigo-600 hover:text-white px-2 py-2 hover:rounded-md" onClick={ThemeSwithcherFunc}>
              <button>
                {theme === "dark" ? (
                  <LightModeIcon className="dark:text-white" />
                ) : (
                  <DarkModeOutlinedIcon className="dark:text-white" />
                )}
              </button>
              <span
                className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200`}
              >
                Toogle dark mode
              </span>
            </li>
          </ul>
        </div>
        <div className={`logout_section absolute bottom-5 flex space-x-4 mx-3`}>
          <h1 className="flex space-x-2">
            <figure>
              <AccountCircleOutlinedIcon className="dark:text-white" />
            </figure>
            <span
              className={` ${isCollapsed ? "hidden" : ""} dark:text-gray-200 `}
            >
              Hayat ilyas
            </span>
          </h1>
          <KeyboardArrowDownOutlinedIcon className="dark:text-white" />
        </div>
      </aside>
    </Fragment>
  );
}
