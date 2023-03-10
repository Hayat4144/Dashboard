import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { toastifyoption } from '../global/Notification'

export default function Signup() {
  const [store_name, setStore_name] = useState('')
  const [name, setName] = useState('')
  const [mobile_no, setmobile_no] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfpassword] = useState('')
  const [showPassword1, setshowpassword1] = useState(false)
  const [showPassword2, setshowpassword2] = useState(false)
  const [isLoading, setisLoading] = useState(false)

  const navigate = useNavigate();

  async function SignupFunc() {
    setisLoading(!isLoading)
    const result = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/seller/signup/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        store_name,
        email,
        password,
        confirmpassword:confirmpassword,
      })
    })
    const { data, error } = await result.json();
    setisLoading(false)
    if (result.status !== 200) return toast.error(error, toastifyoption);
    toast.success(data, toastifyoption);
    navigate('/v3/seller/signin')
  }
  return (
    <Fragment>
      <div className='Signup_container my-5'>
        <div className='company_logo my-5 text-2xl  text-center'>
          <h2>Taj Jwellery</h2></div>
        <div className='sm:mx-auto sm:w-[50%] mt-4 xl:mx-auto xl:w-[30%]  
                lg:mx-auto lg:w-[25%] signin-form border md:w-[50%] md:m-auto border-gray-300 
                shadow-lg rounded-md  mx-3 mb-2'>

          <div className='mx-5 mt-2 text-xl  create-account'>
            <h2>Create an account</h2>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            SignupFunc();
          }}>
            <div className='mx-5 lg:mx-4 mt-2'>
              <label htmlFor='Name' className='text-sm  text-gray-700'>
                Name</label>
              <input
                type={'text'}
                required
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                className="border border-gray-300 rounded-md my-2 py-[8px] 
                w-full focus:border-indigo-600 focus:ring-indigo-700 bg-inherit 
                focus:border  px-2 outline-none text-sm text-gray-700
                placeholder:text-gray-500" placeholder='Enter your full name'
              />
            </div>
            <div className='mx-5 lg:mx-4 mt-2'>
              <label htmlFor='Name' className='text-sm  text-gray-700'>
                Store Name</label>
              <input
                type={'text'}
                required
                value={store_name}
                onChange={(e) => { setStore_name(e.target.value) }}
                className="border border-gray-300 rounded-md my-2 py-[8px] 
                w-full focus:border-indigo-600 focus:ring-indigo-700 bg-inherit 
                focus:border  px-2 outline-none text-sm text-gray-700
                placeholder:text-gray-500"
                placeholder='Enter your full name'
              />
            </div>

            <div className='mx-5 lg:mx-4'>
              <label htmlFor='email' className='text-sm  text-gray-700'>
                Email</label>
              <input
                type={'email'} required value={email}
                onChange={(e) => { setemail(e.target.value) }}
                className="border border-gray-300 rounded-md my-2 py-[8px] w-full focus:border-indigo-600
              focus:ring-indigo-700 bg-inherit focus:border  px-2 outline-none text-sm
              text-gray-700 placeholder:text-gray-500" placeholder='Enter your email'
              />

            </div>


            {/* password field */}
            <div className='mx-5 lg:mx-4'>
              <label htmlFor='Password' className='text-sm  text-gray-700'>
                Password</label>
              <input
                type={showPassword1 ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => { setpassword(e.target.value) }}
                className="border border-gray-300 rounded-md my-2 py-[8px] 
                w-full focus:border-indigo-600 focus:ring-indigo-700 bg-inherit 
                focus:border  px-2 outline-none text-sm text-gray-700
                placeholder:text-gray-500"
                placeholder='Enter your password' />
              <span
                className='text-sm mr-1 cursor-pointer relative float-right bottom-9 right-1'
                onClick={(e) => {
                  setshowpassword1(!showPassword1)
                }}> {showPassword1 ? ' hide' : 'show'} </span>

            </div>

            {/* confirm passowrd field */}
            <div className='mx-5 lg:mx-4'>
              <label htmlFor='Password' className='text-sm  text-gray-700'>
                Re-enter Password</label>
              <input
                type={showPassword2 ? 'text' : 'password'}
                required
                value={confirmpassword}
                onChange={(e) => { setconfpassword(e.target.value) }}
                className="border border-gray-300 rounded-md my-2 py-[8px] 
                w-full focus:border-indigo-600 focus:ring-indigo-700 bg-inherit 
                focus:border  px-2 outline-none text-sm text-gray-700
                placeholder:text-gray-500 "
                placeholder='Re-enter your password' />
              <span
                className='text-sm relative float-right bottom-9 right-1 cursor-pointer mr-1'
                onClick={(e) => { setshowpassword2(!showPassword2) }}>
                {showPassword2 ? ' hide' : 'show'}
              </span>

            </div>

            {/* submit button */}
            <div className='mx-5 mb-0 mt-5 lg:mx-4 W-[20em]'>
              {!isLoading ?
                <button
                  type='submit'
                  className='w-full  px-6 py-1.5 
                  mb-5 text-center text-white outline-none text-bold bg-indigo-800 rounded-md
                  hover:bg-indigo-700'>
                  Create an account
                </button> :
                <button type="button"
                  className="inline-flex 
                items-center justify-center py-2 mb-5 leading-4 text-sm shadow rounded-md
                
                text-white bg-indigo-800 hover:bg-indigo-900
                w-full text-center transition ease-in-out duration-150 cursor-not-allowed"
                  disabled="">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-500"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="pacity-25 text-white" cx="12" cy="12" r="10"
                      stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 
                  018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 
                  1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing ...
                </button>
              }
            </div>
          </form>
          <div className='mx-3 text-[15px]'>
            <small>By creating an account, you agree to Taj's
              <Link to="/terms-and-conditions" className='text-blue-700 underline 
            hover:text-indigo-700 cursor-pointer px-2'>Terms and Conditions</Link> of Use and Privacy
              Notice. </small>
          </div>

          <div className='sigin_link mx-3  mb-4'>
            <h4 className='text-sm'>Already have an account ? <a href='/V2/auth/sign_in'
              className='underline text-blue-700  hover:text-indigo-700 '>
              Signin</a></h4>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
