import React, { Fragment, lazy, Suspense, useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastifyoption } from '../../global/Notification';
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))
const AsideNavbar = lazy(() => import('../../global/AsideNavbar'))

export default function EditProduct() {
    const [attributes, setAttributes] = useState('');
    const [selectedAttributes, setSelectedAttributes] = useState([])
    const [uploaded_images, setUploaded_images] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [productDetails, setProductDetails] = useState([])
    const { id } = useParams();
    console.log(id);
    const handleOptionChange = (event) => {
        setAttributes(event.target.value)
        selectedAttributes.push(event.target.value)
    };
    const unique_attributes = Array.from(new Set(selectedAttributes.map(item => item)))

    // -------------- Get Product Details ----------------- //
    async function GetProductDetails() {
        setIsLoading(!isLoading)
        const response = await fetch('ulr', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const { data, error } = await response.json();
        setIsLoading(!isLoading)
        if (response.status !== 200) return toast.error(error, toastifyoption);
        setProductDetails([data])
    }

    useEffect(() => {
        // GetProductDetails();
    }, [])

    async function EditProductFunc() {
        setIsLoading(!isLoading)
        const response = await fetch('ulr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({})
        })
        const { data, error } = await response.json();
        if (response.status !== 200) return toast.error(error, toastifyoption);
        setIsLoading(!isLoading)
        toast.success(data,toastifyoption)
    }


    return (
        <Fragment>
            <header className='md:hidden'>
                <Suspense fallback={'loading...'}>
                    <MobileNavbar />
                </Suspense>
            </header>
            <div className='flex'>
                <Suspense fallback={<p>loading..</p>}>
                    <AsideNavbar />
                </Suspense>
                <main className='w-full h-full dark:bg-gray-900'>
                    <h1 className='product_add_text dark:text-gray-200 my-5 mx-5 md:mx-8 lg:mx-10 text-2xl'>Edit product attributes</h1>
                    <form className='mx-5 my-5 rounded-lg  shadow-2xl
                      px-5 dark:bg-gray-800 py-5 border border-gray-300 dark:border-none' onSubmit={(e)=>{
                        e.preventDefault();
                        EditProductFunc();
                      }}>
                        <div className='products_attributes md:grid md:grid-cols-2 gap-5'>
                            <div className='product_name my-1'>
                                <label htmlFor="name" className='dark:text-gray-200 text-gray-700'>Name</label>
                                <input
                                    type={'text'}
                                    required
                                    placeholder='Enter product name'
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500'
                                />
                            </div>
                            <div className='price my-1'>
                                <label htmlFor="price" className='dark:text-gray-200 text-gray-700'>Price</label>
                                <input
                                    type={'number'}
                                    required
                                    placeholder='Enter product price'
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500 appearance-none'
                                />
                            </div>
                            <div className='stock'>
                                <label htmlFor="stock" className='dark:text-gray-200 text-gray-700'>Stock</label>
                                <input
                                    type={'number'}
                                    required
                                    placeholder='Enter product stock'
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500 appearance-none'
                                />
                            </div>
                            <div className='category'>
                                <label htmlFor="category" className='dark:text-gray-200 text-gray-700'>Category</label>
                                <input
                                    type={'text'}
                                    required
                                    placeholder='Enter product category'
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500 appearance-none'
                                />
                            </div>
                            <div className='brand'>
                                <label htmlFor="brand" className='dark:text-gray-200 text-gray-700'>Brand</label>
                                <input
                                    type={'text'}
                                    required
                                    placeholder='Enter product brand'
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500 appearance-none'
                                />
                            </div>
                            <div className='total_attributes'>
                                <label htmlFor="total_attributes" className='dark:text-gray-200 text-gray-700'>Cnt</label>
                                <input
                                    type={'number'}
                                    required
                                    placeholder='Enter total attributes count'
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500 appearance-none'
                                />
                            </div>
                            <div className='description col-span-2'>
                                <label htmlFor="description" className='dark:text-gray-200 text-gray-700'>Description</label>
                                <textarea
                                    type={'text'}
                                    required
                                    placeholder='write something about your product'
                                    rows={5}
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500 appearance-none'
                                />
                            </div>
                            <div className='attributes col-span-2 mb-2'>
                                <label htmlFor="attributes" className='dark:text-gray-200 text-gray-700'>Attributes</label>
                                <select
                                    defaultValue={attributes}
                                    onChange={handleOptionChange}
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 dark:bg-gray-800'
                                >
                                    <option defaultValue={'size'} className="dark:bg-gray-700">size</option>
                                    <option value={'hieght'} className="dark:bg-gray-700">Hieght</option>
                                    <option value={'color'} className="dark:bg-gray-700">color</option>
                                </select>
                            </div>
                            <div className='w-24 mb-5'>
                                {!isLoading ?
                                    <button type='submit' className='w-full h-10 text-center bg-indigo-700 hover:bg-indigo-800
                                        text-white outline-none text-bold dark:bg-indigo-600 rounded-md
                                        dark:hover:bg-indigo-700'>Submit</button> : <button type="button"
                                        className="inline-flex items-center justify-center py-2  leading-4 
                                            text-sm shadow rounded-md text-white dark:bg-indigo-600 bg-indigo-700 hover:bg-indigo-800
                                            w-full text-center transition ease-in-out duration-150 cursor-not-allowed"
                                        disabled="">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-500"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="pacity-25 text-white" cx="12" cy="12" r="10"
                                                stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 
                                                018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 
                                                3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>
                                        Processing ...
                                    </button>
                                }
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </Fragment>
    )
}
