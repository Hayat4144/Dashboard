import React, { Fragment, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import AsideNavbarSkeleton from './AsideNavbarSkeleton'
import MobileSkeleton from './MobileSkeleton'

export default function AddProductSkeleton() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [Color, setColor] = useState(theme === 'dark' ? 'rgb(31 41 55)' : '#ebebeb')
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
                        <div className='mx-5 my-5 grid grid-cols-1 lg:grid-cols-2  gap-5 rounded-lg  shadow-2xl
                            px-5 dark:bg-gray-800 py-5'>
                            <div className='products_attributes md:grid md:grid-cols-2 gap-5'>
                                <div className='Street_field'>
                                    <Skeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
                                    <Skeleton className='h-8' baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
                                </div>
                                <div className='Area_field'>
                                    <Skeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
                                    <Skeleton className='h-8' baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
                                </div>
                                <div className='Pincode_field'>
                                    <Skeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
                                    <Skeleton className='h-8' baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
                                </div>
                                <div className='State_field col-span-2'>
                                    <Skeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
                                    <Skeleton className='h-8' baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
                                </div>
                                <div className='Country_field col-span-2'>
                                    <Skeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
                                    <Skeleton className='h-14' baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
                                </div>
                                <div className='w-24 mb-5'>
                                    <Skeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
                                </div>
                            </div>
                            <div className='my-5'>
                                <div className="flex my-5 w-full col-span-2">
                                    <Skeleton className='h-32' />
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </main>
        </Fragment>
    )
}
