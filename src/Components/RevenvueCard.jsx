import React, { Fragment , } from 'react'

export default function RevenvueCard() {
    return (
        <Fragment>
            <div className='card_container gap-5 my-5'>
                <div className='cards border  dark:bg-gray-800 dark:border-none  shadow-md h-28 px-5 py-1  
                        cursor-pointer  duration-300  border-gray-300 rounded-md  hover:translate-y-2 dark:text-gray-200'>
                    <div className='flex justify-between items-center'>
                        <h1 className='today_order capitalize text-xl'>today Revenue</h1>
                    </div>
                    <span className='font-semibold text-2xl'>Rs 3,43,256</span>
                    <h2 className='orders_value flex items-center space-x-4 dark:text-gray-100  my-2'>
                        <span className='total_orders '>Total Revenue</span>
                        <span className='value'>Rs 6,234,590</span>
                    </h2>
                </div>
            </div>
        </Fragment>
    )
}
