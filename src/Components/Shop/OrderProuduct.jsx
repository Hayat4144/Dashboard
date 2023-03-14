import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react'
import MobileSkeleton from '../../animation/MobileSkeleton';
import AsideNavbarSkeleton from '../../animation/AsideNavbarSkeleton'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastifyoption } from '../../global/Notification';
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))
const AsideNavbar = lazy(() => import('../../global/AsideNavbar'))

export default function OrderProuduct() {
    // -------------------------- All States ------------------ //
    const [isLoading, setIsLoading] = useState(false)
    const [OrderData, setOrderData] = useState([])
    const [OrderStatusDefault, setOrderStatusDefault] = useState('Change a order status')
    const [status, setStatus] = useState('')
    const { id } = useParams();
    const [isUpdate, setIsUpdate] = useState(false)


    // ---------------------------- handle state change ------------------ //
    const handleStatusChange = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value)
    }


    // ------------------------ Get Order Details ------------------ //
    async function GetSellerOrderProduct() {
        setIsLoading(!isLoading)
        const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/seller/orderbyId?orderId=${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
        })
        const { data, error } = await response.json();
        setIsLoading(false)
        if (response.status !== 200) {
            toast.error(error, toastifyoption);
            return;
        }
        // --------------- make human readable format for date ------------ //
        const result = data.map(item => {
            const date = new Date(item.created_at);
            const updateData = new Date(item.updated_at)
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const humanReadableDate = date.toLocaleDateString('en-US', options);
            const updated_at = date.toLocaleDateString('en-us', options)
            return { ...item, created_at: humanReadableDate, updated_at }

        })

        //  -------------------- iterating over data to get varient and push into an array for fetching products ----------- //
        let varients = []
        result.forEach(element => {
            element.products.forEach(vairentitem => {
                varients.push(vairentitem.varientId)
            });
        });
        setOrderData(result)
    }

    useEffect(() => {
        GetSellerOrderProduct();
    }, [])


    //  ----------------------- Update Order ------------------- //
    async function UpdateOrder() {
        setIsUpdate(!isUpdate)
        const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/seller/order/update`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                status,
                Orderid: id
            })
        })
        const { data, error } = await response.json();
        setIsUpdate(false)
        if (error) return toast.error(error, toastifyoption);
        GetSellerOrderProduct();
        toast.success(data, toastifyoption)
    }
    console.clear();
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
                <section className='w-full h-full dark:bg-gray-900'>
                    <div className='page_text mx-2 md:mx-5 lg:mx-10 my-5'>
                        <h2 className='dark:text-gray-200 text-xl lg:text-2xl font-bold'>Order information</h2>
                    </div>
                    <div className='mx-2 md:mx-5 lg:mx-10 my-5'>
                        {
                            isLoading ?
                                <Fragment>
                                    loading..
                                </Fragment> : OrderData.length > 0 ?
                                    <Fragment>
                                        {
                                            OrderData.map(item => (
                                                <div key={item._id} className="order_history_box border my-10 border-gray-300 shadow-sm rounded-md">
                                                    <div className='order_history_box_header border-b dark:text-gray-200 border-gray-300 flex justify-between items-center px-2 md:px-5 h-24 py-10 '>
                                                        <div className='order_id'>
                                                            <h3 className='orderId_text font-bold'>Order Id</h3>
                                                            <span className='order_number text-gray-600 dark:text-gray-200 '>{item._id}</span>
                                                        </div>
                                                        <div className='order_totalPrice'>
                                                            <h3 className='ordertotalPrice_text font-bold'>Total Amount</h3>
                                                            <span className='order_totalpriceValue text-gray-600 dark:text-gray-200'>{item.totalPrice}</span>
                                                        </div>
                                                        <div className='order_date hidden sm:block'>
                                                            <h3 className='orderDate_text font-bold'>Order Date</h3>
                                                            <span className='order_OrderDate text-gray-600 dark:text-gray-200'>{item.created_at}</span>
                                                        </div>
                                                    </div>
                                                    <div className="order_products_display_area my-5 mx-5 dark:text-gray-200">
                                                        {item.products.map((varient, index) => (
                                                            <div className="order_product  my-5 pb-5" key={index}>
                                                                <div className='product_image_container '>
                                                                    <div className='flex space-x-3'>
                                                                        <figure className='w-28 sm:w-56'>
                                                                            {
                                                                                varient.varientId.product.assets.images.map((image, index) => (
                                                                                    <img
                                                                                        src={image.url}
                                                                                        key={index}
                                                                                        alt="product_pic"
                                                                                        className='h-28 w-full rounded-sm'

                                                                                    />
                                                                                ))
                                                                            }
                                                                        </figure>
                                                                        <div className='product_name_quantity px-2 sm:flex sm:justify-between w-full'>
                                                                            <div>
                                                                                <div className='product_name_price'>
                                                                                    <h2 className='product_name text-xl md:text-2xl capitalize'>{varient.varientId.product.name}</h2>
                                                                                </div>
                                                                                <h2 className='capitalize'>quantity: <span>{varient.quantity}</span></h2>
                                                                            </div>
                                                                            <h2 className='product_varient_price text-xl font-bold space-x-2'>
                                                                                <span className='currency_symbol'>Rs</span>
                                                                                <span className='amount_value'>{varient.varientId.product.price}</span>
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <section className='delivary_info my-2'>
                                                                    <div className='order_status flex items-center space-x-2'>
                                                                        <h1 className='text-xl'>Status : <span className='capitalize'>{item.status}</span></h1>
                                                                    </div>
                                                                    {item.status !== 'delivered' ?
                                                                        <Fragment>
                                                                            <form
                                                                                className='update_order_form my-1 sm:grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3'
                                                                                onSubmit={(e) => {
                                                                                    e.preventDefault();
                                                                                    UpdateOrder();
                                                                                }}>
                                                                                <select
                                                                                    defaultValue={OrderStatusDefault}
                                                                                    onChange={handleStatusChange}
                                                                                    className='px-2 py-1.5 outline-none  rounded-md border border-gray-400
                                                                            focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                                                            my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 dark:bg-gray-800'>
                                                                                    <option className="dark:bg-gray-700">Change a order status</option>
                                                                                    {
                                                                                        item.status == 'processing' ?
                                                                                            <option className="dark:bg-gray-700" value="shipped">Shipped</option>
                                                                                            :
                                                                                            null
                                                                                    }
                                                                                    {
                                                                                        item.status === 'shipped' ?
                                                                                            <option className="dark:bg-gray-700" value="delivered">Delivered</option>
                                                                                            :
                                                                                            null
                                                                                    }
                                                                                </select>
                                                                                <div className='sumbit-btn my-1 sm:w-32'>
                                                                                    {!isUpdate ?
                                                                                        <button
                                                                                            type='submit'
                                                                                            disabled={status.length < 1 || status === OrderStatusDefault ? true : false}
                                                                                            className='w-full h-10 text-center
                                                                                text-white outline-none text-bold bg-indigo-800 rounded-md
                                                                                hover:bg-indigo-700'>Update Order</button>
                                                                                        : <button type="button"
                                                                                            className="inline-flex items-center justify-center py-2  leading-4 
                                                                                    text-sm shadow rounded-md text-white bg-indigo-800 hover:bg-indigo-900
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
                                                                        </Fragment> : null}
                                                                </section>
                                                            </div>
                                                        ))}
                                                    </div>

                                                </div>
                                            ))
                                        }
                                    </Fragment> :
                                    <Fragment>
                                        <p>No Product has been found.</p>
                                    </Fragment>
                        }
                    </div>
                </section>
            </main>

        </Fragment>
    )
}
