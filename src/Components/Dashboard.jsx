import React, { Fragment, useState, lazy, Suspense } from 'react'
import TransactionSample from './TransactionSample'
import ProductList from './Shop/ProductList'
import CardSkeleton from '../animation/CardSkeleton'
import MobileSkeleton from '../animation/MobileSkeleton'
import AsideNavbarSkeleton from '../animation/AsideNavbarSkeleton'
import WelcomeMessageSkeleton from '../animation/WelcomeMessageSkeleton'
import OrderChartSkeleton from '../animation/OrderChartSkeleton'
const MobileNavbar = lazy(() => import('../global/MobileNavbar'))
const AsideNavbar = lazy(() => import('../global/AsideNavbar'))
const WelcomeMessage = lazy(() => import('../global/WelcomeMessage'))
const Cards = lazy(() => import('./Cards'))
const OrderChart = lazy(()=>import('../global/OrderChart'))

export default function Dashboard() {
    const [transactionData, setTransactionData] = useState([
        { name: 'Product 1', price: 19.99, date: '2022-12-31', amount: 2, paymentMethod: 'Credit Card', id: '1' },
        { name: 'Product 2', price: 9.99, date: '2023-01-01', amount: 1, paymentMethod: 'Paypal', id: '2' },
        { name: 'Product 3', price: 4.99, date: '2023-01-02', amount: 3, paymentMethod: 'Debit Card', id: '3' },
        { name: 'Product 3', price: 4.99, date: '2023-01-02', amount: 3, paymentMethod: 'Debit Card', id: '3' },
        { name: 'Product 3', price: 4.99, date: '2023-01-02', amount: 3, paymentMethod: 'Debit Card', id: '3' },
        { name: 'Product 3', price: 4.99, date: '2023-01-02', amount: 3, paymentMethod: 'Debit Card', id: '3' },
    ])
    const current_date = new Date();
    const [fromDate, setfromDate] = useState(current_date.toISOString().substring(0, 10));
    const nextTendays = new Date(current_date)
    nextTendays.setDate(current_date.getDate() + 10)
    console.log(nextTendays.toISOString().substring(0, 10))
    const [toDate, setToDate] = useState(nextTendays.toISOString().substring(0, 10))
    return (
        <Fragment>
            <div className='md:hidden'>
                <Suspense fallback={<MobileSkeleton />}>
                    <MobileNavbar />
                </Suspense>
            </div>
            <div className='flex'>
                <Suspense fallback={<AsideNavbarSkeleton />}>
                    <AsideNavbar />
                </Suspense>
                <main className='dark:bg-gray-900 h-full w-full'>
                    <Suspense fallback={<WelcomeMessageSkeleton />}>
                        <WelcomeMessage />
                    </Suspense>
                    <Suspense fallback={<CardSkeleton />}>
                        <Cards />
                    </Suspense>
                    <Suspense fallback={<OrderChartSkeleton />}>
                        <OrderChart />
                    </Suspense>
                    <div className='transaction_contianer rounded-md shadow-md border
                    border-gray-300 dark:border-none mx-2 md:mx-5 lg:mx-10 my-5 dark:bg-gray-800'>
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
                        <Suspense fallback={<p>loading..</p>}>
                            <TransactionSample transactionData={transactionData} />
                        </Suspense>
                    </div>
                    <ProductList />
                </main>
            </div>
        </Fragment>
    )
}
