import React, { Fragment, useState, Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import AsideNavbar from '../../global/AsideNavbar'
import { toastifyoption } from '../../global/Notification'
import {toast} from 'react-toastify'
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))


export default function PasswordChange() {
  const [currentpassword, setcurrentpassword] = useState('')
  const [newpassword, setNewpassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword1, setshowpassword1] = useState(false)
  const [showPassword2, setshowpassword2] = useState(false)
  const [showPassword3, setshowpassword3] = useState(false)
  // submitHandler 
  const SubmitHandler = async () => {
    setIsLoading(!isLoading)
    const result = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/seller/change/password`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentpassword,
        newpassword,
        confirmpassword
      }),
      credentials: 'include'
    })
    const data = await result.json();
    setIsLoading(false)
    if (result.status === 200) {
      console.log(data)
      toast.success(data.data, toastifyoption);
    }
    else {
      toast.error(data.error, toastifyoption)
    }
  }

  const CurrentPasswordChange = (e) => {
    setcurrentpassword(e.target.value)
  }
  const NewPasswordChange = (e) => {
    setNewpassword(e.target.value)
  }
  return (
    <Fragment>
      <div className='md:hidden'>
        <Suspense fallback={'loading...'}>
          <MobileNavbar />
        </Suspense>
      </div>
      <main className='flex'>
        <AsideNavbar />
        <div className='w-full h-screen dark:bg-gray-900'>
          <h1 className='my-5 text-center text-xl dark:text-gray-200'>Change your password</h1>
          <section className='text-gray-700 dark:text-gray-200 border border-gray-300 px-2 mx-2
          rounded-md py-5 dark:bg-gray-800 dark:border-none my-5 dark:shadow-2xl shadow-md
          md:px-5 md:mx-auto md:w-4/6 lg:w-2/5  mt-4 xl:mx-auto  lg:mx-auto 
          md:my-10'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                SubmitHandler();
              }}
            >
              <div className='old_password'>
                <label htmlFor="old_password">Old Password</label>
                <input
                  type={`${showPassword1 ? 'text' : 'password'}`}
                  id="old_password"
                  value={currentpassword}
                  onChange={CurrentPasswordChange}
                  className="px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                  focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                  my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500"
                  placeholder='Enter your old password' />
                <span
                  className='text-sm mr-1 cursor-pointer relative float-right bottom-9 
                  right-1' onClick={(e) => {
                    setshowpassword1(!showPassword1)
                  }}> {showPassword1 ? ' hide' : 'show'}
                </span>
              </div>
              <div className='new_password my-2'>
                <label htmlFor="new_password">New Password</label>
                <input
                  type={`${showPassword2 ? 'text' : 'password'}`}
                  id="new_password"
                  value={newpassword}
                  onChange={NewPasswordChange}
                  className="px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                  focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                  my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500"
                  placeholder='Enter your new password' />
                <span
                  className='text-sm mr-1 cursor-pointer relative float-right bottom-9 
                  right-1' onClick={(e) => {
                    setshowpassword2(!showPassword2)
                  }}> {showPassword2 ? ' hide' : 'show'}
                </span>
              </div>
              <div className='confirm_password my-2'>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                  type={`${showPassword3 ? 'text' : 'password'}`}
                  id="confirm_password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  className="px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                  focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                  my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500"
                  placeholder='confirm your password' />
                <span
                  className='text-sm mr-1 cursor-pointer relative float-right bottom-9 
                  right-1' onClick={(e) => {
                    setshowpassword3(!showPassword3)
                  }}> {showPassword3 ? ' hide' : 'show'}
                </span>
              </div>
              <button
                type='submit'
                className='text-center w-full bg-indigo-700 rounded-md py-2 px-2 hover:bg-indigo-800 text-white
                '>
                Change password
              </button>
            </form>
          </section>
        </div>
      </main>

    </Fragment>
  )
}
