import React, { Fragment, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function AsideNavbarSkeleton() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    return (
        <Fragment>
            <aside
                className={`aside_navbar hidden w-72 text-center 
                     h-screen sticky top-0  text-gray-900 duration-300 border-r border-gray-500 z-10
                    ${theme !== 'dark' ? 'border-r border-gray-400' : ''} hidden md:block dark:bg-gray-800 shadow-lg`}
            >
                <div className='logo mx-5'>
                    <Skeleton className='h-10 mt-5' />
                </div>

                <div className="nav_links">
                    <ul className="my-5 mx-3 cursor-pointer">
                        <li className="px-2  py-2 my-1">
                            <Skeleton className='w-full h-8' />
                        </li>
                        <li className="px-2  py-2 my-1">
                            <Skeleton className='w-full h-8' />
                        </li>
                        <li className="px-2  py-2 my-1">
                            <Skeleton className='w-full h-8' />
                        </li>
                        <li className="px-2  py-2 my-1">
                            <Skeleton className='w-full h-8' />
                        </li>
                        <li className="px-2  py-2 my-1">
                            <Skeleton className='w-full h-8' />
                        </li>
                        <li className="px-2  py-2 my-1">
                            <Skeleton className='w-full h-8' />
                        </li>
                    </ul>
                </div>
                <div className={`logout_section relative top-28 mx-3 `}>
                    <Skeleton  className='h-8'/>
                </div>
            </aside>
        </Fragment>

    )
}
