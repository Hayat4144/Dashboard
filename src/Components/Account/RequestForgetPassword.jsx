import React, { Fragment, Suspense, lazy, useState } from 'react'
import AsideNavbarSkeleton from '../../animation/AsideNavbarSkeleton'
import MobileSkeleton from '../../animation/MobileSkeleton'
import AsideNavbar from '../../global/AsideNavbar'
import { toastifyoption } from '../../global/Notification'
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))
import {toast} from 'react-toastify'

export default function RequestForgetPassword() {
    const [email, setemail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    // submitHandler 
    const SubmitHandler = async () => {
        setIsLoading(!isLoading)
        const result = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/seller/reset/password/request`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                current_email: email
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
                    <h1 className='my-5 text-center text-xl dark:text-gray-200'>Forget password Request</h1>
                    <section
                        className='text-gray-700 dark:text-gray-200 border border-gray-300 px-2 mx-2
                        rounded-md py-5 dark:bg-gray-800 dark:border-none my-5 dark:shadow-2xl shadow-md
                        md:px-5 md:mx-auto md:w-4/6 lg:w-2/5  mt-4 xl:mx-auto  lg:mx-auto 
                        md:my-10'>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                SubmitHandler();
                            }}
                        >
                            <div className='email mt-2 mb-5'>
                                <label htmlFor="email">Email </label>
                                <input
                                    type={'email'}
                                    value={email}
                                    onChange={(e) => { setemail(e.target.value) }}
                                    className="px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500"
                                    placeholder='Enter your email '
                                />
                            </div>
                            <button
                                type='submit'
                                className='text-center w-full bg-indigo-700 rounded-md py-2 px-2 hover:bg-indigo-800 text-white'>
                                Submit
                            </button>
                        </form>
                    </section>
                </div>
            </main>
        </Fragment>
    )
}
