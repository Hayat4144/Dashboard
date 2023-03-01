import React, { Fragment, Suspense ,useState } from 'react'
import AsideNavbarSkeleton from './AsideNavbarSkeleton'
import CardSkeleton from './CardSkeleton'
import MobileSkeleton from './MobileSkeleton'



export default function AccountSkeleton() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [Color, setColor] = useState(theme === 'dark' ? 'rgb(31 41 55)' : '#ebebeb')
    return (
        <Fragment>
            <div className='md:hidden'>
                <MobileSkeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
            </div>
            <div className='flex'>
                <AsideNavbarSkeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                <div className='dark:bg-gray-900 w-full'>
                    <CardSkeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                    <CardSkeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                </div>
            </div>
        </Fragment>
    )
}
