import React, { Fragment ,useState} from 'react'
import Skeleton from 'react-loading-skeleton'

export default function MobileSkeleton() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [Color, setColor] = useState(theme === 'dark' ? 'rgb(31 41 55)' : '#ebebeb')
    return (
        <Fragment>
            <nav className="md:hidden flex justify-between w-full z-50 h-20 border-b border-gray-300 dark:border-none
            items-center bg-white dark:bg-gray-800 shadow-md px-5 ">
                <Skeleton width={60} height={40}  baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                <Skeleton  width={100} height={40} baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
                <Skeleton  width={60} height={40} baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}/>
            </nav>
        </Fragment>
    )
}
