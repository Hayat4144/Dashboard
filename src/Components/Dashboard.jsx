import React, { Fragment, useState, lazy, Suspense, useEffect } from 'react'
import CardSkeleton from '../animation/CardSkeleton'
import MobileSkeleton from '../animation/MobileSkeleton'
import AsideNavbarSkeleton from '../animation/AsideNavbarSkeleton'
import WelcomeMessageSkeleton from '../animation/WelcomeMessageSkeleton'
import OrderChartSkeleton from '../animation/OrderChartSkeleton'
import TableSkeleton from '../animation/TableSkeleton'
import SellSkeleton from '../animation/SellSkeleton'
const MobileNavbar = lazy(() => import('../global/MobileNavbar'))
const AsideNavbar = lazy(() => import('../global/AsideNavbar'))
const WelcomeMessage = lazy(() => import('../global/WelcomeMessage'))
const Cards = lazy(() => import('./Cards'))
const RevenvueCard = lazy(() => import('./RevenvueCard'))
const OrderChart = lazy(() => import('../global/OrderChart'))
const Sell_Transaction = lazy(() => import('../global/Sell_Transaction'))
const ProductList = lazy(() => import('./Shop/ProductList'))
const TransactionSample = lazy(() => import('./TransactionSample'))

export default function Dashboard() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
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
    const [toDate, setToDate] = useState(nextTendays.toISOString().substring(0, 10))

    async function FetchProduct() {
        setIsLoading(!isLoading)
        const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/seller/products`, {
            method: "GET",
            headers: {
                'Content-Type': 'applicition/json'
            },
            credentials: 'include'
        });
        const { data, error } = await response.json();
        setIsLoading(false)
        if (response.status !== 200) return toast.error(error, toastifyoption);
        setProducts(data)
    }
    useEffect(() => {
        FetchProduct();
    }, [])

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
                        <div className='grid grid-cols-1 gap-2 mx-2 md:mx-5 lg:mx-10 md:grid-cols-2 lg:grid-cols-3'>
                            <Cards />
                            <RevenvueCard />
                        </div>

                    </Suspense>
                    <div className='grid grid-cols-1 md:grid-cols-3 mx-2 md:mx-5 lg:mx-10 gap-5'>
                        <Suspense fallback={<OrderChartSkeleton />}>
                            <div className="col-span-2">
                                <OrderChart />
                            </div>
                        </Suspense>
                        <Suspense fallback={<SellSkeleton />}>
                            <Sell_Transaction />
                        </Suspense>
                    </div>

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
                        <Suspense fallback={<TableSkeleton />}>
                            <TransactionSample transactionData={transactionData} />
                        </Suspense>
                    </div>
                    <Suspense fallback={<TableSkeleton />}>
                        {isLoading ? <TableSkeleton /> :
                            <Fragment>
                                <ProductList products={products} setproducts={setProducts} />
                                <Fragment />
                            </Fragment>
                        }
                    </Suspense>

                </main>
            </div>
        </Fragment>
    )
}
