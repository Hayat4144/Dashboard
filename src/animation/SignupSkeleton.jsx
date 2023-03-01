import React, { Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function SignupSkeleton() {
    return (
        <Fragment>
            <div className='Signup_container my-5'>
                <div className='company_logo my-5 text-2xl  text-center'>
                    <Skeleton className='w-20 h-6' />
                </div>
                <div className='sm:mx-auto sm:w-[50%] mt-4 xl:mx-auto xl:w-[30%]  
                lg:mx-auto lg:w-[25%] signin-form border md:w-[50%] md:m-auto border-gray-300 
                shadow-lg rounded-md  mx-3 mb-2'>
                    <div className='mx-5 mt-2 text-xl  create-account'>
                        <Skeleton />
                    </div>
                    <div>
                        {[1, 2, 3, 4].map((index) => (
                            <div className='mx-5 lg:mx-4 mt-2' key={index}>
                                <Skeleton />
                                <Skeleton className='h-10  my-2' />
                            </div>
                        ))}
                        <div className='mx-5 lg:mx-4 mt-2'>
                            <Skeleton className='h-10' />
                        </div>
                    </div>
                    <div className='mx-5 my-2 text-[15px]'>
                        <Skeleton  count={2}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
