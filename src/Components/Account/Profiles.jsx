import React, { Fragment, lazy, Suspense, useState } from 'react'
import AsideNavbar from '../../global/AsideNavbar'
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))

export default function Profiles() {
    const [isLoading, setIsLoading] = useState(false)
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [Store_name, setStore_name] = useState('')
    const [mobile_number, setMobile_number] = useState(null)
    const [email, setEmail] = useState('')
    const [date_of_birth, setDate_of_birth] = useState(null)
    const [uploaded_images, setUploaded_images] = useState([])

    function handleFileUpload(event) {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        const updated_image_url = [...uploaded_images, imageUrl]
        setUploaded_images(updated_image_url)

    }


    const submitHandler = async () => {
        const formdata = new FormData();
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formdata,
        })
            .then(async (res) => {
                if (res.status === 200) {
                    const { data } = await res.json();
                    console.log('ok');
                    console.log(data);
                }
                else {
                    const { error } = await res.json();
                    console.log(error);
                }
            })
            .catch(error => console.log(error))
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
                <div className='w-full h-full dark:bg-gray-900'>
                    <h2 className='text-center dark:text-gray-200 text-gray-700 my-5 text-xl'>Update your profiles</h2>
                    <section className='dark:bg-gray-800 my-5 mx-3 rounded-md shadow-md border border-gray-300 dark:border-none '>
                        <form className='md:grid md:grid-cols-2 md:gap-5 py-5 px-2 gap-5 text-gray-700 dark:text-gray-200'>
                            <div className='First name_field'>
                                <label htmlFor="First name">First name</label>
                                <input
                                    type="text"
                                    id="First name"
                                    className='px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500'
                                    value={firstName}
                                    onChange={(e) => setfirstName(e.target.value)}
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div className='last name_field'>
                                <label htmlFor="last name">last name</label>
                                <input
                                    type="text"
                                    id="last name"
                                    className='px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500'
                                    value={lastName}
                                    onChange={(e) => setlastName(e.target.value)}
                                    placeholder="Enter your last name"
                                />
                            </div>
                            <div className='mobile number'>
                                <label htmlFor="mobile number ">Mobile Number</label>
                                <input
                                    type="number"
                                    id="mobile number "
                                    className='px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500'
                                    value={mobile_number}
                                    onChange={(e) => setMobile_number(e.target.value)}
                                    placeholder="Enter your mobile number "
                                />
                            </div>
                            <div className='Store_name_field'>
                                <label htmlFor="Store_name ">Store Name</label>
                                <input
                                    type="text"
                                    id="Store"
                                    className='px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500'
                                    value={Store_name}
                                    onChange={(e) => setStore_name(e.target.value)}
                                    placeholder="Enter your Store name"
                                />
                            </div>
                            <div className="flex my-5 w-full col-span-2">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" strokeWidth="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input
                                        multiple
                                        id="dropzone-file"
                                        type="file"
                                        className="hidden"
                                        onChange={handleFileUpload}
                                    />
                                </label>
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
                    </section>
                </div>
            </main>
        </Fragment>
    )
}
