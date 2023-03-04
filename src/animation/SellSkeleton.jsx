import React, { Fragment, useState } from 'react'
import Skeleton from 'react-loading-skeleton';

export default function SellSkeleton() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [Color, setColor] = useState(theme === 'dark' ? 'rgb(31 41 55)' : '#ebebeb')
    return (
        <Fragment>
            <div className='bg-white dark:bg-gray-800 dark:border-none shadow-md border my-5 border-gray-300 rounded-md py-2 '>
                <Skeleton baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
            </div>
        </Fragment>
    )
}
