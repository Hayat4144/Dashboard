import React, { Fragment, Suspense, useState, lazy } from 'react'
import AsideNavbarSkeleton from '../../animation/AsideNavbarSkeleton'
import MobileSkeleton from '../../animation/MobileSkeleton'
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))
const AsideNavbar = lazy(() => import('../../global/AsideNavbar'))
import { AiOutlineClose } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { toastifyoption } from '../../global/Notification'
import { toast } from 'react-toastify'


export default function AddVareint() {
    const [isLoading, setIsLoading] = useState(false)
    const [defaultSize, setDefaultSize] = useState('Choose multiple size')
    const [sizes, setSizes] = useState(['small', 'medium', 'large', 'xl', 'xxl'])
    const [selectedsize, setSetselectedsize] = useState([])
    const [uniquesize, setuniquesize] = useState([])
    const [color, setColor] = useState('')
    const [unique_color, setUnique_color] = useState([])
    const [price, setPrice] = useState('')
    const [unique_price, setunique_price] = useState([])
    const [stock, setStock] = useState('')
    const [unique_stock, setUnique_stock] = useState([])
    const { id } = useParams();

    const Remove_size = (size) => {
        setuniquesize(uniquesize.filter(item => item !== size));
    }
    const Remove_color = (color) => {
        setUnique_color(unique_color.filter(item => item !== color));
    }
    const Remove_price = (price) => {
        setunique_price(unique_price.filter(item => item !== price));
    }
    const Remove_stock = (stock) => {
        setUnique_stock(unique_stock.filter(item => item !== stock));
    }

    const handleOptionChange = (event) => {
        setDefaultSize(event.target.value)
        selectedsize.push(event.target.value)
        setuniquesize(Array.from(new Set(selectedsize.map(item => item))))
    };

    const colorChange = (event) => {
        setColor(event.target.value);
        setUnique_color(Array.from(new Set(color.split(',').map(item => item))))
    }
    const priceChange = (event) => {
        setPrice(event.target.value);
        setunique_price(Array.from(new Set(price.split(',').map(item => Number(item)))))
    }
    const stockChange = (event) => {
        setStock(event.target.value);
        setUnique_stock(Array.from(new Set(stock.split(',').map(item => Number(item)))))
    }


    async function AddProdductVarient() {
        setIsLoading(!isLoading)
        const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/create/product/varient`, {
            method: "POST",
            credentials: 'include',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                stocks: unique_stock,
                prices: unique_price,
                colors: unique_color,
                sizes: uniquesize,
                productId:id
            })
        })
        const { data, error } = await response.json();
        setIsLoading(false)
        if (response.status !== 200) return toast.error(error, toastifyoption);
        toast.success(data, toastifyoption)
        setunique_price([])
        setUnique_stock([])
        setUnique_color([])
        setuniquesize([])
        setColor('')
        setStock('')
        setPrice('')
        
    }

    return (
        <Fragment>
            <header className='md:hidden'>
                <Suspense fallback={<MobileSkeleton />}>
                    <MobileNavbar />
                </Suspense>
            </header>
            <main className='flex'>
                <Suspense fallback={<AsideNavbarSkeleton />}>
                    <AsideNavbar />
                </Suspense>
                <div className='w-full h-screen dark:bg-gray-900'>
                    <div className='page_text mx-2 md:mx-5 lg:mx-10 my-5'>
                        <h2 className='dark:text-gray-200 text-xl lg:text-2xl font-bold'>Add Product varients</h2>
                    </div>
                    <form className='mx-2 my-5  rounded-lg  shadow-2xl
                      px-5 dark:bg-gray-800 py-5'
                        onSubmit={(e) => {
                            e.preventDefault();
                            AddProdductVarient();
                        }}>
                        <div className='form'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                <div className='varient_size my-1'>
                                    <label htmlFor="name" className='dark:text-gray-200 text-gray-700'>Size</label>
                                    <select
                                        defaultValue={defaultSize}
                                        onChange={handleOptionChange}
                                        className='px-2 py-1.5 outline-none rounded-md border border-gray-400
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 dark:bg-gray-800'
                                    >
                                        <option value={defaultSize} className='dark:bg-gray-700'>{defaultSize}</option>
                                        {
                                            sizes.map((item, index) => (
                                                <option className='dark:bg-gray-700' value={item} key={index}>{item}</option>
                                            ))
                                        }
                                    </select>
                                    <div className='attributes_container flex flex-wrap space-x-3 mt-2'>
                                        {selectedsize.length > 0 ? uniquesize.map((size, index) => (
                                            <div
                                                className='border-gray-500 border rounded-full dark:text-gray-200
                                            px-5 text-center py-1 flex items-center space-x-2'
                                                key={index}>
                                                <span>{size}</span>
                                                <AiOutlineClose onClick={() => {
                                                    console.log('clicked');
                                                    Remove_size(size)
                                                }} />
                                            </div>

                                        )) : null}
                                    </div>
                                </div>
                                <div className='varient_color my-1'>
                                    <label htmlFor="name" className='dark:text-gray-200 text-gray-700'>Color</label>
                                    <input
                                        type={'text'}
                                        value={color}
                                        onChange={colorChange}
                                        required
                                        placeholder='Enter your color respectively'
                                        className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                        focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                        my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500'
                                    />
                                    <div className='attributes_container flex flex-wrap space-x-3 mt-2'>
                                        {unique_color.length > 0 ? unique_color.map((color, index) => (
                                            <div
                                                className='border-gray-500 border rounded-full dark:text-gray-200
                                            px-5 text-center py-1 flex items-center space-x-2'
                                                key={index}>
                                                <span>{color}</span>
                                                <AiOutlineClose onClick={() => {
                                                    console.log('clicked');
                                                    Remove_color(color)
                                                }} />
                                            </div>

                                        )) : null}
                                    </div>
                                </div>
                                <div className='varient_price my-1'>
                                    <label htmlFor="name" className='dark:text-gray-200 text-gray-700'>Price</label>
                                    <input
                                        type={'text'}
                                        value={price}
                                        onChange={priceChange}
                                        required
                                        placeholder='Enter your price respectively'
                                        className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                        focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                        my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500'
                                    />
                                    <div className='attributes_container flex flex-wrap space-x-3 mt-2'>
                                        {unique_price.length > 0 ? unique_price.map((price, index) => (
                                            <div
                                                className='border-gray-500 border rounded-full dark:text-gray-200
                                            px-5 text-center py-1 flex items-center space-x-2'
                                                key={index}>
                                                <span>{price}</span>
                                                <AiOutlineClose onClick={() => {
                                                    console.log('clicked');
                                                    Remove_price(price)
                                                }} />
                                            </div>

                                        )) : null}
                                    </div>
                                </div>
                                <div className='varient_stock my-1'>
                                    <label htmlFor="name" className='dark:text-gray-200 text-gray-700'>Stock</label>
                                    <input
                                        type={'text'}
                                        value={stock}
                                        onChange={stockChange}
                                        required
                                        placeholder='Enter your stock respectively'
                                        className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                        focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                        my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500'
                                    />
                                    <div className='attributes_container flex flex-wrap space-x-3 mt-2'>
                                        {unique_stock.length > 0 ? unique_stock.map((stock, index) => (
                                            <div
                                                className='border-gray-500 border rounded-full dark:text-gray-200
                                            px-5 text-center py-1 flex items-center space-x-2'
                                                key={index}>
                                                <span>{stock}</span>
                                                <AiOutlineClose onClick={() => {
                                                    console.log('clicked');
                                                    Remove_stock(stock)
                                                }} />
                                            </div>

                                        )) : null}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-24 my-2'>
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

                    </form>
                </div>

            </main>
        </Fragment>
    )
}
