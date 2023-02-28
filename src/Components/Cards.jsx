import React, { Fragment } from 'react'

export default function Cards() {
    return (
        <Fragment>
            <div className='card_container grid grid-cols-1 md:grid-cols-2
         lg:grid-cols-3 gap-5 my-5 mx-2 md:mx-5 lg:mx-10'>
                {
                    [1, 2, 3].map((cards, index) => (
                        <div key={index} className='cards border  dark:bg-gray-800 dark:border-none  shadow-md h-28 px-5 py-2  
                        cursor-pointer  duration-300  border-gray-300 rounded-md  hover:translate-y-2'>
                            <h1 className='card_name text-xl dark:text-gray-100'>Orders</h1>
                            <h2 className='orders_value flex items-center space-x-4 dark:text-gray-100  my-2'>
                                <span className='total_orders text-xl'>Total order</span>
                                <span className='value font-bold text-xl'>453</span>
                            </h2>
                        </div>
                    ))
                }

            </div>
        </Fragment>
    )
}
