import React, { Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function MobileSkeleton() {
    return (
        <Fragment>
            <nav className="md:hidden flex justify-between w-full z-50 h-20 border-b border-gray-300 dark:border-none
            items-center bg-white  shadow-md px-5 ">
                <Skeleton width={60} height={40}/>
                <Skeleton  width={100} height={40}/>
                <Skeleton  width={60} height={40}/>
            </nav>
        </Fragment>
    )
}
