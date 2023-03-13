import React, { Fragment, Suspense, lazy, useState } from 'react'
import { toastifyoption } from '../../global/Notification'
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))
const AsideNavbar = lazy(() => import('../../global/AsideNavbar'))
import { toast } from 'react-toastify';
import MobileSkeleton from '../../animation/MobileSkeleton'
import AsideNavbarSkeleton from '../../animation/AsideNavbarSkeleton'

export default function EmailChange() {
    const [old_email, setOld_email] = useState('')
    const [new_email, setNew_email] = useState('')
    const [confirm_email, setConfirm_email] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    // change handler
    function oldEmailChange(e) {
        setOld_email(e.target.value)
    }
    function newEmailChange(e) {
        setNew_email(e.target.value)
    }
    function confirmEmailChange(e) {
        setConfirm_email(e.target.value)
    }

    async function EmailChangeHandler() {
        setIsLoading(!isLoading)
        const result = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/seller/change/email`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                new_email,
                old_email,
                confirm_email
            }),
            credentials: 'include'
        })
        const { data, error } = await result.json();
        setIsLoading(false)
        if (result.status !== 200) return toast.error(error, toastifyoption);
        toast.success(data, toastifyoption);
        setConfirm_email('')
        setNew_email('')
        setOld_email('')
    }
    return (
        <Fragment>
            <div className='md:hidden'>
                <Suspense fallback={<MobileSkeleton />}>
                    <MobileNavbar />
                </Suspense>
            </div>
            <main className='flex'>
                <Suspense fallback={<AsideNavbarSkeleton />}>
                    <AsideNavbar />
                </Suspense>
                <div className='w-full h-screen dark:bg-gray-900'>
                    <h2 className='text-center dark:text-gray-200 text-gray-700 my-5 text-xl'>Change your email</h2>
                    <form
                        className='text-gray-700 dark:text-gray-200 border border-gray-300 px-2 mx-2
                        rounded-md py-5 dark:bg-gray-800 dark:border-none my-5 dark:shadow-2xl shadow-md
                        md:px-5 md:mx-auto md:w-4/6 lg:w-2/5  mt-4 xl:mx-auto  lg:mx-auto 
                        md:my-10'
                        onSubmit={(e) => {
                            e.preventDefault();
                            EmailChangeHandler();
                        }}>
                        <div className='old_email'>
                            <label htmlFor="old_email">Old Email</label>
                            <input
                                type={'email'}
                                id="old_email"
                                value={old_email}
                                onChange={oldEmailChange}
                                className="px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                                focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                                my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500"
                                placeholder='Enter your old email' />
                        </div>
                        <div className='new_email'>
                            <label htmlFor="new_email">New Email</label>
                            <input
                                type={'email'}
                                id="new_email"
                                value={new_email}
                                onChange={newEmailChange}
                                className="px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                                focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                                my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500"
                                placeholder='Enter your new email' />
                        </div>
                        <div className='confirm_email'>
                            <label htmlFor="confirm_email">Confirm Email</label>
                            <input
                                type={'email'}
                                id="confirm_email"
                                value={confirm_email}
                                onChange={confirmEmailChange}
                                className="px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                                focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                                my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500"
                                placeholder='Enter your confirm email' />
                        </div>
                        <div className='submit_btn mb-5 my-2'>
                            {!isLoading ? <button type='submit' className='h-10 w-full md:w-24 text-center
                             text-white outline-none  text-bold bg-indigo-800 rounded-md
                              hover:bg-indigo-700'>Submit</button> : <button type="button"
                                className="inline-flex items-center justify-center py-2  leading-4 
                              text-sm shadow rounded-md text-white bg-indigo-800 hover:bg-indigo-900
                               w-full md:w-24 text-center transition ease-in-out duration-150 cursor-not-allowed"
                                disabled="">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-500"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="pacity-25 text-white" cx="12" cy="12" r="10"
                                        stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 
                                    018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 
                                    3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing ...
                            </button>
                            }
                        </div>
                    </form>
                </div>
            </main>
        </Fragment>
    )
}
