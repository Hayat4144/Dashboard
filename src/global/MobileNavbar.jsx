import React, { Fragment, useState, useEffect } from 'react'
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
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'

export default function MobileNavbar({ mobileModal, MobileSideModalToggle }) {
  const [isMobileViewOpen, setIsMobileViewOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  
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

  const OpenMobileeView = () => {
    console.log('click')
    setIsMobileViewOpen(!isMobileViewOpen)
  }



  return (
    <Fragment>
      <nav className="md:hidden flex justify-between w-full h-20 border-b border-gray-300 dark:border-none
      items-center bg-white dark:bg-gray-800 shadow-md px-5 dark:text-gray-200 text-gray-900">
        <div className='mobile_view flex items-center'>
          <div className='burger_menu cursor-pointer' onClick={OpenMobileeView}>
            <div className='burger_line_1 w-5 h-[2px] bg-black dark:bg-white m-1'></div>
            <div className='burger_line_2 w-5 h-[2px] bg-black dark:bg-white m-1'></div>
            <div className='burger_line_3 w-5 h-[2px] bg-black dark:bg-white m-1'></div>
          </div>
        </div>
        <h1>logo</h1>
        <div className="">
          <h1>account icon</h1>
        </div>
      </nav>
      <aside
        className={`fixed top-0  md:hidden bg-black w-full opacity-100
        bg-opacity-30 inset ${isMobileViewOpen ? 'flex' : 'hidden'}`}>
        <div className='w-3/4 h-screen  bg-white text-gray-900 dark:text-gray-200 dark:bg-gray-800'>
          <div className='user_header text-white h-20 px-5 space-x-5 flex 
            items-center bg-gray-700'>
            <div className='user_avtar'>
              <FaUserCircle fontSize={'28px'} className="cursor-pointer" />
            </div>
            <div className='user_name '>
              <h2 className='user_name_text'>
                Hello , Signin
              </h2>
            </div>
          </div>
          {/* ---- Navigations Menu for mobile */}
          <div className='mobile_view_link  w-full h-full'>
            <div className="nav_links">
              <ul className="space-y-1 my-5 mx-3 cursor-pointer">
                <Link to="/">
                  <li className="space-x-3 hover:text-white px-2 py-2 hover:rounded-md">
                    <DashboardCustomizeOutlinedIcon className="dark:text-white" />
                    <span
                      className={`dark:text-gray-200`}
                    >
                      Dashboard
                    </span>
                  </li>
                </Link>
                <li className="space-x-3 hover:text-white px-2 py-2 hover:rounded-md">
                  <AnalyticsOutlinedIcon className="dark:text-white" />
                  <span
                    className={`dark:text-gray-200`}
                  >
                    {" "}
                    Analytics
                  </span>
                </li>
                <li className="space-x-3 hover:text-white px-2 py-2 hover:rounded-md">
                  <AddShoppingCartOutlinedIcon className="dark:text-white" />
                  <span
                    className={`dark:text-gray-200`}
                  >
                    {" "}
                    Orders
                  </span>
                </li>
                <Link to="/v3/seller/products">
                  <li className="space-x-3 hover:text-white px-2 py-2 hover:rounded-md">
                    <Inventory2OutlinedIcon className="dark:text-white" />
                    <span
                      className={`dark:text-gray-200`}
                    >Products
                    </span>
                  </li>
                </Link>
                <li className="space-x-3 hover:text-white px-2 py-2 hover:rounded-md">
                  <SellOutlinedIcon className="dark:text-white" />{" "}
                  <span
                    className={`dark:text-gray-200`}
                  >
                    {" "}
                    Sell
                  </span>
                </li>
                <li className="space-x-3 hover:text-white px-2 py-2 hover:rounded-md">
                  <PaymentsOutlinedIcon className="dark:text-white" />
                  <span
                    className={`dark:text-gray-200`}
                  >
                    {" "}
                    Transaction
                  </span>
                </li>
              </ul>
              <ul className="space-y-2 my-5 mx-3 cursor-pointer">
                <li className="space-x-3 hover:text-white px-2 py-2 hover:rounded-md">
                  <SwitchAccountOutlinedIcon className="dark:text-white" />
                  <span
                    className={`dark:text-gray-200`}
                  >
                    {" "}
                    Account
                  </span>
                </li>
                <li className="space-x-3 hover:text-white px-2 py-2 hover:rounded-md">
                  <SettingsOutlinedIcon className="dark:text-white" />
                  <span
                    className={`dark:text-gray-200`}
                  >
                    Settings
                  </span>
                </li>
                <li className="space-x-3 hover:text-white px-2 py-2 hover:rounded-md" onClick={ThemeSwithcherFunc}>
                  <button>
                    {theme === "dark" ? (
                      <LightModeIcon className="dark:text-white" />
                    ) : (
                      <DarkModeOutlinedIcon className="dark:text-white" />
                    )}
                  </button>
                  <span
                    className={`dark:text-gray-200`}
                  >
                    Toogle dark mode
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  ---- Close Mobile Menu Button */}
        <div className='close_icon ml-5 mt-5 text-white'>
          <AiOutlineCloseCircle className='text-4xl cursor-pointer'
            onClick={() => setIsMobileViewOpen(!isMobileViewOpen)} />
        </div>
      </aside>
    </Fragment>
  )
}
