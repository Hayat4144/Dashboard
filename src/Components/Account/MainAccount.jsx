import React, { Fragment, Suspense, lazy } from 'react'
import AsideNavbar from '../../global/AsideNavbar'
import AccoutnImage from '../../assets/images/account.png'
import SecurityImage from '../../assets/images/security.png'
import OrderImage from '../../assets/images/Order.webp'
import WishlistImage from '../../assets/images/Wishlist.png'
import PasswordImage from '../../assets/images/passwordProtect.webp'
import EmailImage from '../../assets/images/mail.webp'
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
                <div className='dark:bg-gray-900 w-full'>
                    <section className='grid grid-cols-1 my-5 mx-5 md:mx-10
                        md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                        <div className='border border-gray-300 dark:border-none h-28
                            text-gray-900 dark:text-gray-200 rounded-md px-5 py-2 flex 
                            space-x-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800
                            dark:bg-gray-800 duration-300 hover:translate-y-2'>
                            <figure>
                                <img src={AccoutnImage} className="w-[80px]" alt='product-image' />
                            </figure>
                            <div className='address_text'>
                                <h3 className='text-bold'>Your Address</h3>
                                <p className='text-sm'>
                                    Manage, add, edit your address
                                </p>
                            </div>
                        </div>
                        <div className='border border-gray-300 dark:border-none h-28
                            text-gray-900 dark:text-gray-200 rounded-md px-5 py-2 flex 
                            space-x-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800
                            dark:bg-gray-800 duration-300 hover:translate-y-2'>
                            <figure>
                                <img src={OrderImage} className="rounded-full w-[80px] h-[80px]" />
                            </figure>
                            <div className='profile_text'>
                                <h3 className='text-bold'>Your Orders</h3>
                                <p className='text-sm'>
                                    Track your orders, buy things again
                                </p>
                            </div>
                        </div>

                        <div className='border border-gray-300 dark:border-none h-28
                            text-gray-900 dark:text-gray-200 rounded-md px-5 py-2 flex 
                            space-x-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800
                            dark:bg-gray-800 duration-300 hover:translate-y-2'>
                            <figure>
                                <img src={AccoutnImage} className="w-[128px]" />
                            </figure>
                            <div className='profile_text'>
                                <h3 className='text-bold'>Your Profiles</h3>
                                <p className='text-sm'>
                                    Manage, add or remove user profile for personalized experiences
                                </p>
                            </div>
                        </div>

                        <div className='border border-gray-300 dark:border-none h-28
                            text-gray-900 dark:text-gray-200 rounded-md px-5 py-2 flex 
                            space-x-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800
                            dark:bg-gray-800 duration-300 hover:translate-y-2'>
                            <figure>
                                <img src={PasswordImage} className="h-[70px] rounded-full w-[70px]" />
                            </figure>
                            <div className='password_text'>
                                <h3 className='text-bold'>Change your password</h3>
                                <p className='text-sm'>
                                    you can change your password here.
                                </p>
                            </div>
                        </div>
                        <div className='border border-gray-300 dark:border-none h-28
                            text-gray-900 dark:text-gray-200 rounded-md px-5 py-2 flex 
                            space-x-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800
                            dark:bg-gray-800 duration-300 hover:translate-y-2'>
                            <figure>
                                <img src={EmailImage} className="h-[70px] " />
                            </figure>
                            <div className='password_text'>
                                <h3 className='text-bold'>Change your email</h3>
                                <p className='text-sm'>
                                    you can change your email here.
                                </p>
                            </div>
                        </div>
                        <div className='border border-gray-300 dark:border-none h-28
                            text-gray-900 dark:text-gray-200 rounded-md px-5 py-2 flex 
                            space-x-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800
                            dark:bg-gray-800 duration-300 hover:translate-y-2'>
                            <figure>
                                <img src={EmailImage} className="h-[70px] " />
                            </figure>
                            <div className='password_text'>
                                <h3 className='text-bold'>Your transactions</h3>
                                <p className='text-sm'>
                                    check your all transactions.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}
