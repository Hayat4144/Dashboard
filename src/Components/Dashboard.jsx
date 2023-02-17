import React, { Fragment, lazy, Suspense } from 'react'
import AsideNavbar from '../global/AsideNavbar'
import Cards from './Cards'
import TransactionSample from './TransactionSample'
import WelcomeMessage from '../global/WelcomeMessage'
import ProductList from './Shop/ProductList'
import OrderChart from '../global/OrderChart'
const MobileNavbar = lazy(()=>import('../global/MobileNavbar'))

export default function Dashboard() {
    return (
        <Fragment>
            <div className='md:hidden'>
                <Suspense fallback={'loading...'}>
                    <MobileNavbar/>
                </Suspense>
            </div>
            <div className='flex'>
                <AsideNavbar />
                <main className='dark:bg-gray-900 h-full w-full'>
                    <WelcomeMessage />
                    <Cards />
                    <TransactionSample />
                    <ProductList />
                </main>
            </div>
        </Fragment>
    )
}
