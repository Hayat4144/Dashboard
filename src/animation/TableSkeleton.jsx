import React, { Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function TableSkeleton() {
    return (
        <Fragment>
            <section className='transaction_data rounded-b-md overflow-x-auto'>
                <table className="table-auto w-full">
                    <thead>
                        <tr className="text-justify">
                            {[1, 2, 3, 4, 5, 6].map((index) => (<th className="px-4 py-2" key={index}><Skeleton className='h-10'/></th>))}
                        </tr>
                    </thead>
                    <tbody className='mb-2'>
                        {
                            [1, 2, 3, 4, 5, 6].map((index) => (
                                <tr key={index} className="border-b border-gray-300 dark:border-gray-500">
                                    <td className="px-4 py-2"><Skeleton /></td>
                                    <td className="px-4 py-2"><Skeleton /></td>
                                    <td className="px-4 py-2"><Skeleton /></td>
                                    <td className="px-4 py-2"><Skeleton /></td>
                                    <td className="px-4 py-2"><Skeleton /></td>
                                    <td className="px-4 py-2"><Skeleton /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </Fragment>
    )
}
