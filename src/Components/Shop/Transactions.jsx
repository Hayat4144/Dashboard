import React, { Fragment, useState, Suspense, useEffect, lazy } from 'react'
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))
const AsideNavbar = lazy(() => import('../../global/AsideNavbar'))
const TransactionSample = lazy(() => import("../TransactionSample"))
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import AsideNavbarSkeleton from '../../animation/AsideNavbarSkeleton'
import MobileSkeleton from '../../animation/MobileSkeleton'
import TableSkeleton from '../../animation/TableSkeleton'


export default function Transactions() {
    const [transactionData, setTransactionData] = useState([
        { name: 'Product 1', price: 19.99, date: '2022-12-31', amount: 42, paymentMethod: 'Credit Card', id: '1' },
        { name: 'Product 2', price: 9.99, date: '2023-01-01', amount: 42, paymentMethod: 'Paypal', id: '2' },
        { name: 'Product 3', price: 4.99, date: '2023-01-02', amount: 25, paymentMethod: 'Debit Card', id: '3' },
        { name: 'Product 4', price: 355.32, date: '2023-01-02', amount: 423, paymentMethod: 'Debit Card', id: '4' },
        { name: 'Product 5', price: 342, date: '2023-01-02', amount: 534, paymentMethod: 'Debit Card', id: '5' },
        { name: 'Product 6', price: 2430, date: '2023-01-02', amount: 235, paymentMethod: 'Debit Card', id: '6' },
        { name: 'Product 7', price: 2430, date: '2023-05-12', amount: 235, paymentMethod: 'Debit Card', id: '7' },
        { name: 'Product 8', price: 2430, date: '2023-07-23', amount: 235, paymentMethod: 'Debit Card', id: '8' },
        { name: 'Product 9', price: 2430, date: '2023-08-20', amount: 2352, paymentMethod: 'Cash on delivary', id: '9' },
        { name: 'Product 10', price: 2430, date: '2023-01-02', amount: 397, paymentMethod: 'Net banking', id: '10' },
    ])
    const [showProductPerPage, setShowProductPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const current_date = new Date();
    const prevTendays = new Date(current_date)
    prevTendays.setDate(current_date.getDate() - 10)
    const [fromDate, setfromDate] = useState(prevTendays.toISOString().substring(0, 10));
    console.log(prevTendays.toISOString().substring(0, 10))
    const [toDate, setToDate] = useState(current_date.toISOString().substring(0,10))



    //  ------------------ pagination logic ----------------
    if (transactionData.length > showProductPerPage) {
        var numberofPages = Math.ceil(transactionData.length / showProductPerPage);
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
                        <h2 className='dark:text-gray-200 text-xl lg:text-2xl font-bold'>Your overall transactions history </h2>
                    </div>
                    <div className='transaction_contianer rounded-md shadow-md border
                    border-gray-300 dark:border-none  mx-2 md:mx-5 lg:mx-10 my-5 dark:bg-gray-800'>
                        <div className='transaction_container_header py-2 sm:flex sm:justify-between sm:items-center sm:mx-2'>
                            <h1 className='dark:text-gray-200 text-xl hidden sm:block'>Transaction data </h1>
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
                        <Suspense fallback={<TableSkeleton />}>
                            <TransactionSample transactionData={transactionData} />
                        </Suspense>
                    </div>
                    {/* {
                        transactionData.length > showProductPerPage ? <div className='paginations my-16'>
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
                    } */}
                </section>
            </main>
        </Fragment>
    )
}
