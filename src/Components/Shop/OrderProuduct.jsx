import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react'
import MobileSkeleton from '../../animation/MobileSkeleton';
import AsideNavbarSkeleton from '../../animation/AsideNavbarSkeleton'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastifyoption } from '../../global/Notification';
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))
const AsideNavbar = lazy(() => import('../../global/AsideNavbar'))
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { FcProcess } from 'react-icons/fc'

export default function OrderProuduct() {
    const [isLoading, setIsLoading] = useState(false)
    const [OrderData, setOrderData] = useState([])
    const { id } = useParams();

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
            console.table(element);
            element.products.forEach(vairentitem => {
                varients.push(vairentitem.varientId)
            });
        });
        setOrderData(result)
    }

    useEffect(() => {
        GetSellerOrderProduct();
    }, [])

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
                                                    <div className='order_history_box_header border-b border-gray-300 flex justify-between items-center px-2 md:px-5 h-24 py-10 '>
                                                        <div className='order_id'>
                                                            <h3 className='orderId_text font-bold'>Order Id</h3>
                                                            <span className='order_number text-gray-600'>{item._id}</span>
                                                        </div>
                                                        <div className='order_totalPrice'>
                                                            <h3 className='ordertotalPrice_text font-bold'>Total Amount</h3>
                                                            <span className='order_totalpriceValue text-gray-600'>{item.totalPrice}</span>
                                                        </div>
                                                        <div className='order_date hidden sm:block'>
                                                            <h3 className='orderDate_text font-bold'>Order Date</h3>
                                                            <span className='order_OrderDate text-gray-600'>{item.created_at}</span>
                                                        </div>
                                                    </div>
                                                    <div className="order_products_display_area my-5 mx-5">
                                                        {item.products.map((varient, index) => (
                                                            <div className="order_product border-b border-gray-300 my-5 pb-5" key={index}>
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
                                                                        {item.status == 'delivered' ?
                                                                            <div className='flex space-x-3 items-center'>
                                                                                <BsFillCheckCircleFill className='text-green-900 text-xl' />
                                                                                <span className='status_text'> Deliverd on </span>
                                                                                <h1 className='status'>
                                                                                    {item.updated_at}
                                                                                </h1>
                                                                            </div> :
                                                                            <div className='flex space-x-3 items-center'>
                                                                                <FcProcess className='text-2xl' />
                                                                                <span className='status_text'>Processing </span>
                                                                            </div>
                                                                        }

                                                                    </div>
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
