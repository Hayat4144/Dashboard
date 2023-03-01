import React, { Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'
import AsideNavbarSkeleton from './AsideNavbarSkeleton'
import MobileSkeleton from './MobileSkeleton'
import TableSkeleton from './TableSkeleton'

export default function OrderSkeleton() {
    return (
        <Fragment>
            <header className='md:hidden'>
                <MobileSkeleton />
            </header>
            <main className='flex'>
                <AsideNavbarSkeleton />
                <section className='w-full h-full dark:bg-gray-900'>
                    <div className='page_text mx-2 md:mx-5 lg:mx-10 my-5'>
                        <Skeleton className='w-80' />
                    </div>
                    <div className='order_contianer rounded-md shadow-md border
                    border-gray-300 dark:border-none mx-2 md:mx-5 lg:mx-10 my-5 dark:bg-gray-800'>
                        <div className='order_container_header py-2 sm:flex sm:justify-between sm:items-center sm:mx-2'>
                            <Skeleton className='dark:text-gray-200 text-xl hidden sm:block' />
                        </div>
                        <div className='date_container flex items-center mx-4 justify-between'>
                            <Skeleton  className='w-20 h-8'/>
                            <Skeleton  className='w-20 h-8'/>
                        </div>
                        <TableSkeleton />
                    </div>
                </section>
            </main>


        </Fragment>

    )
}
