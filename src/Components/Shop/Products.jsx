import React, { Fragment, lazy, Suspense, useState, useEffect } from 'react'
import AsideNavbar from '../../global/AsideNavbar'
import { Link } from 'react-router-dom'
import ProductList from './ProductList'
import MobileSkeleton from '../../animation/MobileSkeleton'
import AsideNavbarSkeleton from '../../animation/AsideNavbarSkeleton'
import TableSkeleton from '../../animation/TableSkeleton'
import { toast } from 'react-toastify'
import { toastifyoption } from '../../global/Notification'
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'


export default function Products() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [showProductPerPage, setShowProductPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalProductCount, setTotalProductCount] = useState(Number())

    async function FetchProduct() {
        setIsLoading(!isLoading)
        const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/seller/products?page=${currentPage}`, {
            method: "GET",
            headers: {
                'Content-Type': 'applicition/json'
            },
            credentials: 'include'
        });
        const { data, error, count, totalCount } = await response.json();
        setIsLoading(false)
        if (response.status !== 200) return toast.error(error, toastifyoption);
        setProducts(data)
        setTotalProductCount(totalCount)
    }
    useEffect(() => {
        FetchProduct();
    }, [currentPage])


    //  ------------------ pagination logic ----------------
    if (totalProductCount > showProductPerPage) {
        var numberofPages = Math.ceil(totalProductCount / showProductPerPage);
        console.log(numberofPages);
        var page_number = Array.from({ length: numberofPages }, (_, index) => index + 1);
    }

    console.log(page_number);

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
            <div className='flex'>
                <Suspense fallback={<AsideNavbarSkeleton />}>
                    <AsideNavbar />
                </Suspense>
                <main className='dark:bg-gray-900 w-full'>
                    <div className='flex justify-between mx-2 md:mx-10 my-5'>
                        <h1 className='dark:text-gray-200 text-xl'>Your products</h1>
                        <Link to="/v3/seller/add/product" className='px-3 text-center py-1.5 outline-none text-white
                        rounded-md dark:bg-indigo-600 bg-indigo-700 hover:bg-indigo-700'>Add product</Link>
                    </div>
                    <Suspense fallback={<TableSkeleton />}>
                        {isLoading ? <TableSkeleton /> :
                            <Fragment>
                                <ProductList products={products} />
                                {
                                    totalProductCount > showProductPerPage ? <div className='paginations my-3 md:my-5 lg:my-10'>
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
                                    </div > : null
                                }
                            </Fragment>}
                    </Suspense>
                </main>
            </div>
        </Fragment>
    )
}
