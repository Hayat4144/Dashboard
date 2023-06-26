import React, { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { toastifyoption } from '../global/Notification'
import { BsCartDashFill } from 'react-icons/bs'

export default function Cards() {
    const [TotalOrder, setTotalOrder] = useState(Number())
    const [TodayOrder, setTodayOrder] = useState(Number())
    async function GetTotalOrders() {
        const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/seller/total/orders`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include"
        });
        const { data, error } = await response.json();
        if (error) return toast.error(error, toastifyoption);
        setTotalOrder(data)
    }
    async function GetTodayOrders() {
        const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/seller/today/orders`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include"
        });
        const { data, error } = await response.json();
        if (error) return toast.error(error, toastifyoption);
        setTodayOrder(data)
    }
    useEffect(() => {
        GetTotalOrders();
        GetTodayOrders();
    }, [])

    return (
        <Fragment>
            <div className='card_container my-5'>
                <div className='cards border  dark:bg-gray-800 dark:border-none  shadow-md h-28 px-5 py-1  
                        cursor-pointer  duration-300  border-gray-300 rounded-md  dark:text-gray-200 hover:translate-y-2'>
                    <div className='flex justify-between items-center'>
                        <h1 className='today_order capitalize text-xl'>today order</h1>
                    </div>
                    <span className='font-semibold text-2xl'>{TodayOrder < 10 && TodayOrder > 0 ? `0${TodayOrder}` : TodayOrder}</span>
                    <h2 className='orders_value flex items-center space-x-4 dark:text-gray-100  my-2'>
                        <span className='total_orders'>Total order</span>
                        <span className='value'>{TotalOrder < 10 && TotalOrder > 0 ? `0${TotalOrder}` : TotalOrder}</span>
                    </h2>
                </div>
            </div>
        </Fragment>
    )
}
