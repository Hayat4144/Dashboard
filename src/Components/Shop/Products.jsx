import React, { Fragment } from 'react'
import AsideNavbar from '../../global/AsideNavbar'
import { Link } from 'react-router-dom'
import ProductList from './ProductList'

export default function Products() {
    return (
        <Fragment>
            <div className='flex'>
                <AsideNavbar />
                <main className='dark:bg-gray-900 w-full'>
                    <div className='flex justify-between md:mx-10 my-5'>
                        <h1 className='dark:text-gray-200 text-xl'>Your products</h1>
                        <Link to="/v3/seller/add/product" className='px-3 text-center py-1.5 outline-none text-white
                        rounded-md dark:bg-indigo-600 bg-indigo-700 hover:bg-indigo-700'>Add product</Link>
                    </div>
                    <ProductList />
                </main>
            </div>
        </Fragment>
    )
}
