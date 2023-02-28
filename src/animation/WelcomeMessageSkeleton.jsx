import React, { Fragment, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function WelcomeMessageSkeleton() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [Color, setColor] = useState(theme === 'dark' ? 'rgb(31 41 55)' : '#ebebeb')
    return (
        <Fragment>
            <section className='md:mx-5 mx-2 my-5 lg:mx-10 dark:text-gray-100'>
                <div className='welcome_message flex space-x-2 text-2xl'>
                    <h1 className='welcome_text'>
                        <Skeleton className='w-72 h-10' baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
                    </h1>
                </div>
                <Skeleton className='my-2 w-96' baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} />
            </section>
        </Fragment>
    )
}
