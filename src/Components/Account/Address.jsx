import React, { useState, Fragment, lazy, Suspense } from 'react'
import AsideNavbar from '../../global/AsideNavbar'
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))

export default function Address() {
    // ------------ all states ----------------------- //
    // const { user_address } = useSelector(state => state.Address)
    const [Street, setStreet] = useState('')
    const [Area, setArea] = useState('')
    const [city, setCity] = useState('')
    const [State, setState] = useState('')
    const [pincode, setPincode] = useState('')
    const [Country, setCountry] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    // submitHandler 
    const SubmitHandler = async () => {
        setIsLoading(!isLoading)
        const result = await fetch(`${import.meta.env.VITE_BACKEND_URL}/v3/api/user/create/address`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Street,
                Area,
                city,
                State,
                pincode,
                Country
            }),
            credentials: 'include'
        })
        const data = await result.json();
        setIsLoading(false)
        if (result.status === 200) {
            console.log(data.doc)
            const m = dispatch({ type: CREATEADDRESS, payload: data.doc })
            console.log(m)
            toast.success(data.data, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            toast.error(data.error, {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
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
                    <h2 className='text-center dark:text-gray-200 text-gray-700 my-5 text-xl'>Your Shipping Address</h2>
                    <section className='dark:bg-gray-800 my-5 mx-3 rounded-md shadow-md border border-gray-300 dark:border-none '>
                        <form className='grid grid-cols-1 md:grid-cols-2 py-5 px-2 gap-5 text-gray-700 dark:text-gray-200'>
                            <div className='Street_field'>
                                <label htmlFor="Street">Street</label>
                                <input
                                    type="text"
                                    id=""
                                    className='px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500'
                                    value={Street}
                                    onChange={(e) => setStreet(e.target.value)}
                                    placeholder="enter your Street"
                                />
                            </div>
                            <div className='Area_field'>
                                <label htmlFor="Street">Area</label>
                                <input
                                    type="text"
                                    id="Area"
                                    className='px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500'
                                    value={Area}
                                    onChange={(e) => setArea(e.target.value)}
                                    placeholder="enter your Area"
                                />
                            </div>
                            <div className='City_field'>
                                <label htmlFor="City">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    className='px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500'
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="enter your City"
                                />
                            </div>
                            <div className='Pincode_field'>
                                <label htmlFor="Pincode">Pincode</label>
                                <input
                                    type="number"
                                    id="pincode"
                                    className='px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500'
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                    placeholder="enter your pin code"
                                />
                            </div>
                            <div className='State_field'>
                                <label htmlFor="State">State</label>
                                <input
                                    type="text"
                                    id="State"
                                    className='px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500'
                                    value={State}
                                    onChange={(e) => setPincode(e.target.value)}
                                    placeholder="enter your  State"
                                />
                            </div>
                            <div className='Country_field'>
                                <label htmlFor="Country">Country</label>
                                <input
                                    type="text"
                                    id="Country"
                                    className='px-2 py-2 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:shadow-md dark:bg-inherit dark:focus:border-gray-400 focus:border-indigo-800
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500'
                                    value={Country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    placeholder="enter your country"
                                />
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
