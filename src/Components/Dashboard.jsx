import React, { Fragment } from 'react'
import AsideNavbar from '../global/AsideNavbar'
import Cards from './Cards'
import TransactionSample from './TransactionSample'
import WelcomeMessage from '../global/WelcomeMessage'
import ProductList from './Shop/ProductList'

export default function Dashboard() {
    return (
        <Fragment>
            <div className='flex'>
                <AsideNavbar />
                <main className='dark:bg-gray-900 w-full h-full'>
                    <WelcomeMessage />
                    <Cards />
                    <TransactionSample />
                    <ProductList />
                </main>
            </div>
        </Fragment>
    )
}
