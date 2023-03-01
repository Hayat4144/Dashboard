import React, { Fragment ,useState } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function OrderChartSkeleton() {
    const [theme, setTheme] = useState( localStorage.getItem('theme'))
    const [Color, setColor] = useState(theme === 'dark' ? 'rgb(31 41 55)': '#ebebeb')
    console.log(Color)
    return (
        <Fragment>
            <div className='dark:bg-gray-800 shadow-md  my-10 
            mx-2 md:mx-5 lg:mx-10 rounded-md'>
                <div className='relative h-[50vh]'>
                    <Skeleton baseColor={Color} highlightColor={theme=== 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                    <Skeleton className='w-full h-full' baseColor={Color} highlightColor={theme=== 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                </div>
            </div>
        </Fragment>
    )
}
