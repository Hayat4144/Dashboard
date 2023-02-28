import React, { Fragment ,useState} from 'react'
import Skeleton from 'react-loading-skeleton'

export default function CardSkeleton() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [Color, setColor] = useState(theme === 'dark' ? 'rgb(31 41 55)' : '#ebebeb')
    return (
        <Fragment>
            <div className='card_container grid grid-cols-1 md:grid-cols-2
         lg:grid-cols-3 gap-5 my-5 mx-2 md:mx-5 lg:mx-10'>
                {[1, 2, 3].map((index) => (
                    <Skeleton
                    baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''}
                        key={index}
                        className='shadow-md h-28 px-5 py-2  
                        cursor-pointer  duration-300  hover:translate-y-2' />
                ))}
            </div>

        </Fragment>
    )
}
