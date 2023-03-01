import React, { Fragment ,useState } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function TableSkeleton() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [Color, setColor] = useState(theme === 'dark' ? 'rgb(31 41 55)' : '#ebebeb')
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
                                    <td className="px-4 py-2"><Skeleton  baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} /></td>
                                    <td className="px-4 py-2"><Skeleton  baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} /></td>
                                    <td className="px-4 py-2"><Skeleton  baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} /></td>
                                    <td className="px-4 py-2"><Skeleton  baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} /></td>
                                    <td className="px-4 py-2"><Skeleton  baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} /></td>
                                    <td className="px-4 py-2"><Skeleton  baseColor={Color} highlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : ''} /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </Fragment>
    )
}
