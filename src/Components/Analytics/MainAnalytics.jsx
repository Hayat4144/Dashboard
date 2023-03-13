import React, { Fragment, lazy,Suspense } from 'react'
import MobileSkeleton from '../../animation/MobileSkeleton'
import AsideNavbarSkeleton from '../../animation/AsideNavbarSkeleton'
import OrderChartSkeleton from '../../animation/OrderChartSkeleton'
import SellSkeleton from '../../animation/SellSkeleton'
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))
const AsideNavbar = lazy(() => import('../../global/AsideNavbar'))
const OrderChart = lazy(() => import('../../global/OrderChart'))
const Sell_Transaction = lazy(() => import('../../global/Sell_Transaction'))

export default function MainAnalytics() {
    return (
        <Fragment>
            <div className='md:hidden'>
                <Suspense fallback={<MobileSkeleton />}>
                    <MobileNavbar />
                </Suspense>
            </div>
            <main className='flex'>
                <Suspense fallback={<AsideNavbarSkeleton />}>
                    <AsideNavbar />
                </Suspense>
                <section className='w-full h-full'>
                    <h2 className='text-center dark:text-gray-200 text-gray-700 my-5 text-xl'>Analytic Charts</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 mx-2 md:mx-5 lg:mx-10 gap-5'>
                        <Suspense fallback={<OrderChartSkeleton />}>
                            <div className="col-span-2">
                                <OrderChart />
                            </div>
                        </Suspense>
                        <Suspense fallback={<SellSkeleton />}>
                            <Sell_Transaction />
                        </Suspense>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}
