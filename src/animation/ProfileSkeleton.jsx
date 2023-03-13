import React, { Fragment ,useState} from 'react'
import MobileSkeleton from './MobileSkeleton'
import AsideNavbarSkeleton from './AsideNavbarSkeleton'
import Skeleton from 'react-loading-skeleton'

export default function ProfileSkeleton() {
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
                        <div className='md:grid md:grid-cols-2 md:gap-5 py-5 px-2 gap-5 text-gray-700 dark:text-gray-200'>
                            <div className='Street_field'>
                                <Skeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                                <Skeleton className='h-8' baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                            </div>
                            <div className='Area_field'>
                                <Skeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                                <Skeleton className='h-8' baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                            </div>
                            <div className='City_field'>
                                <Skeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                                <Skeleton className='h-8' baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                            </div>
                            <div className='Pincode_field'>
                                <Skeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                                <Skeleton className='h-8' baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                            </div>
                            <div className='State_field  flex my-5 w-full col-span-2'>
                                <Skeleton className='h-10' baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                            </div>
                            <div className='Pincode_field'>
                                <Skeleton className='h-8' baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </Fragment>
    )
}
