import React, { Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'
import AsideNavbarSkeleton from './AsideNavbarSkeleton'
import MobileSkeleton from './MobileSkeleton'

export default function AddressSkeleton() {
    return (
        <Fragment>
            <div className='md:hidden'>
                <MobileSkeleton />
            </div>
            <main className='flex'>
                <AsideNavbarSkeleton />
                <div className='w-full h-screen dark:bg-gray-900'>
                    <h2 className='text-center dark:text-gray-200 text-gray-700 my-5 text-xl'><Skeleton /></h2>
                    <section className='dark:bg-gray-800 my-5 mx-3 rounded-md shadow-md border border-gray-300 dark:border-none '>
                        <div className='grid grid-cols-1 md:grid-cols-2 py-5 px-2 gap-5 text-gray-700 dark:text-gray-200'>
                            <div className='Street_field'>
                                <Skeleton />
                                <Skeleton className='h-8' />
                            </div>
                            <div className='Area_field'>
                                <Skeleton />
                                <Skeleton className='h-8' />
                            </div>
                            <div className='City_field'>
                                <Skeleton />
                                <Skeleton className='h-8' />
                            </div>
                            <div className='Pincode_field'>
                                <Skeleton />
                                <Skeleton className='h-8' />
                            </div>
                            <div className='State_field'>
                                <Skeleton />
                                <Skeleton className='h-8' />
                            </div>
                            <div className='Country_field'>
                                <Skeleton />
                                <Skeleton className='h-8' />
                            </div>
                            <div className='submit_btn mb-5 my-2'>
                                <Skeleton className='h-8' />
                            </div>
                        </div>

                    </section>
                </div>
            </main>
        </Fragment>

    )
}
