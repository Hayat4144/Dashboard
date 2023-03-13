import React, { Fragment, Suspense, useState, lazy, useEffect } from 'react'
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))
const AsideNavbar = lazy(() => import('../../global/AsideNavbar'))
import OrdersSample from './OrdersSample';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import TableSkeleton from '../../animation/TableSkeleton';
import OrderSkeleton from '../../animation/OrderSkeleton';
import { toast } from 'react-toastify';
import { toastifyoption } from '../../global/Notification';
import MobileSkeleton from '../../animation/MobileSkeleton';
import AsideNavbarSkeleton from '../../animation/AsideNavbarSkeleton';

export default function Orders() {
    const [orderData, setOrderData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const current_date = new Date();
    const prevTendays = new Date(current_date)
    prevTendays.setDate(current_date.getDate() - 10)
    const [fromDate, setfromDate] = useState(prevTendays.toISOString().substring(0, 10));
    console.log(prevTendays.toISOString().substring(0, 10))
    const [toDate, setToDate] = useState(current_date.toISOString().substring(0,10))
    const [showProductPerPage, setShowProductPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)

    async function GetOrder() {
        setIsLoading(!isLoading)
        const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/seller/order`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ from: fromDate, to: toDate })
        })
        const { data, error } = await response.json();
        setIsLoading(false)
        if (response.status !== 200) {
            toast.success(error, toastifyoption)
            return;
        }
        const new_data = data.map(order => {
            const date = new Date(order.date);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const humanReadableDate = date.toLocaleDateString('en-US', options);
            return { ...order, date: humanReadableDate }
        })
        setOrderData(new_data)
    }

    useEffect(() => {
        GetOrder();
    }, [fromDate, toDate])


    //  ------------------ pagination logic ----------------
    if (orderData.length > showProductPerPage) {
        var numberofPages = Math.ceil(orderData.length / showProductPerPage);
        console.log(numberofPages);
        var page_number = [...Array(numberofPages + 1).keys()].slice(1)
    }

    const nextPage = () => {
        if (currentPage !== numberofPages) {
            setCurrentPage(currentPage + 1)
        }

    }
    const previousPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
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
                <section className='w-full h-full dark:bg-gray-900'>
                    <div className='page_text mx-2 md:mx-5 lg:mx-10 my-5'>
                        <h2 className='dark:text-gray-200 text-xl lg:text-2xl font-bold'>Your Orders </h2>
                    </div>
                    <div className='order_contianer rounded-md shadow-md border
                    border-gray-300 dark:border-none mx-2 md:mx-5 lg:mx-10 my-5 dark:bg-gray-800'>
                        <div className='order_container_header py-2 sm:flex sm:justify-between sm:items-center sm:mx-2'>
                            <h1 className='dark:text-gray-200 text-xl hidden sm:block'>Orders data </h1>
                            <div className='date_container flex items-center mx-1 justify-between'>
                                <h2 className='from'>
                                    <span className='dark:text-gray-200 px-1'>From</span>
                                    <input
                                        defaultValue={fromDate}
                                        onChange={(e) => setfromDate(e.target.value)}
                                        type={'date'}
                                        className="border border-gray-300 bg-inherit px-2 py-1 rounded-md mx-1
                                        dark:text-gray-200 outline-none focus:border-indigo-700 dark:focus:border-gray-300"
                                    />
                                </h2>
                                <h2 className='To'>
                                    <span className='dark:text-gray-200 px-1'>To</span>
                                    <input
                                        value={toDate}
                                        onChange={(e) => setToDate(e.target.value)}
                                        type={'date'}
                                        className="border border-gray-300 bg-inherit px-2 py-1 rounded-md mx-1
                                        dark:text-gray-200 outline-none focus:border-indigo-700 dark:focus:border-gray-300"
                                    />
                                </h2>
                            </div>
                        </div>
                        {
                            isLoading ? <TableSkeleton />
                                : orderData.length > 0 ?
                                    <Suspense fallback={<TableSkeleton />}>
                                        <OrdersSample OrderData={orderData} />
                                    </Suspense>
                                    :
                                    <div>
                                        <p>You have not order yet.</p>
                                    </div>
                        }

                    </div>
                    {
                        orderData.length > showProductPerPage ? <div className='paginations my-16'>
                            <section className='pagination_container my-5'>
                                <div className='pagination_box flex items-center justify-center space-x-5'>
                                    <div className='previous_btn'>
                                        <button onClick={previousPage} disabled={currentPage === 1 ? true : false}
                                            className='bg-indigo-700 text-white md:px-5 py-1.5 
                                            rounded-md text-center px-3'>
                                            <AiOutlineArrowLeft className='md:text-2xl' />
                                        </button>
                                    </div>
                                    <div className='page_number_container  flex items-center space-x-3'>
                                        {
                                            page_number.map(pg_number => (
                                                <button key={pg_number}
                                                    onClick={() => {
                                                        setCurrentPage(pg_number)
                                                    }}
                                                    className=
                                                    {`${currentPage === pg_number ? 'border-none bg-indigo-700 text-white rounded-full outline-none' : ''}
                                                rounded-full focus:border-non hover:border-none  w-10 h-10 
                                                transition ease-out duration-500 hover:bg-indigo-700 hover:border border-gray-400 border
                                                hover:text-white dark:text-gray-200 dark:focus:text-white`}
                                                >{pg_number}</button>
                                            ))
                                        }
                                    </div>
                                    <div className='next_btn'>
                                        <button onClick={nextPage}
                                            className='bg-indigo-700 md:px-5 text-white py-1.5 
                                    px-4 rounded-md text-center'>
                                            <AiOutlineArrowRight className='md:text-2xl' />
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </div > : ''
                    }

                </section>
            </main>
        </Fragment>
    )
}
