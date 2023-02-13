import React, { Fragment } from 'react'
import AsideNavbar from '../global/AsideNavbar'
import Cards from './Cards'
import TransactionSample from './TransactionSample'
import WelcomeMessage from './WelcomeMessage'

export default function Dashboard() {
    return (
        <Fragment>
            <div className='flex'>
                <AsideNavbar />
                <main className='dark:bg-gray-900 w-full h-screen'>
                    <WelcomeMessage />
                    <Cards />
                    <TransactionSample />
                </main>
            </div>
        </Fragment>
    )
}
