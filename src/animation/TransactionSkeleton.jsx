import React , {Fragment ,useState} from 'react'
import Skeleton from 'react-loading-skeleton'
import AsideNavbarSkeleton from './AsideNavbarSkeleton'
import MobileSkeleton from './MobileSkeleton'
import TableSkeleton from './TableSkeleton'

export default function TransactionSkeleton() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [Color, setColor] = useState(theme === 'dark' ? 'rgb(31 41 55)' : '#ebebeb')
    return (
        <Fragment>
            <header className='md:hidden'>
                <MobileSkeleton  baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
            </header>
            <main className='flex'>
                <AsideNavbarSkeleton  baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
                <section className='w-full h-full dark:bg-gray-900'>
                    <div className='page_text mx-2 md:mx-5 lg:mx-10 my-5'>
                        <Skeleton  baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} className='w-80' />
                    </div>
                    <div className='order_contianer rounded-md shadow-md border
                    border-gray-300 dark:border-none mx-2 md:mx-5 lg:mx-10 my-5 dark:bg-gray-800'>
                        <div className='order_container_header py-2 sm:flex sm:justify-between sm:items-center sm:mx-2'>
                            <Skeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}  className='dark:text-gray-200 text-xl hidden sm:block' />
                        </div>
                        <div className='date_container flex items-center mx-4 justify-between'>
                            <Skeleton  baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} className='w-20 h-8' />
                            <Skeleton  baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} className='w-20 h-8' />
                        </div>
                        <TableSkeleton  baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
                    </div>
                </section>
            </main>
        </Fragment>

    )
}
