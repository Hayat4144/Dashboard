import React, { Fragment, lazy, Suspense } from 'react'
import AsideNavbar from '../../global/AsideNavbar'
import { Link } from 'react-router-dom'
import ProductList from './ProductList'
import MobileSkeleton from '../../animation/MobileSkeleton'
import AsideNavbarSkeleton from '../../animation/AsideNavbarSkeleton'
import TableSkeleton from '../../animation/TableSkeleton'
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))
export default function Products() {
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
                        <ProductList />
                    </Suspense>
                </main>
            </div>
        </Fragment>
    )
}
