import React, { Fragment, Suspense } from 'react'
import AsideNavbarSkeleton from './AsideNavbarSkeleton'
import CardSkeleton from './CardSkeleton'
import MobileSkeleton from './MobileSkeleton'



export default function AccountSkeleton() {
    return (
        <Fragment>
            <div className='md:hidden'>
                <MobileSkeleton />
            </div>
            <div className='flex'>
                <AsideNavbarSkeleton />
                <div className='dark:bg-gray-900 w-full'>
                    <CardSkeleton />
                    <CardSkeleton />
                </div>
            </div>
        </Fragment>
    )
}
