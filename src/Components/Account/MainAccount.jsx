import React, { Fragment, Suspense, lazy } from 'react'
import AsideNavbar from '../../global/AsideNavbar'
import PasswordChange from './PasswordChange'
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))

export default function MainAccount() {
    return (
        <Fragment>
            <div className='md:hidden'>
                <Suspense fallback={'loading...'}>
                    <MobileNavbar />
                </Suspense>
            </div>
            <div className='flex'>
                <AsideNavbar />
                <section className='dark:bg-gray-900 h-screen w-full grid grid-cols-1 
                md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className='border border=gray-300 dark:border-none  h-60
                    text-gray-900 dark:text-gray-200 shadow-md px-5 py-2 flex 
                    space-x-5 cursor-pointer  hover:bg-gray-100'>
                        <figure>
                            <img src={AccoutnImage} className="w-[80px]" alt='product-image' />
                        </figure>
                        <div className='address_text'>
                            <h3 className='text-bold'>Your Address</h3>
                            <p className='text-gray-700 text-sm'>
                                Manage, add, edit your address
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}
