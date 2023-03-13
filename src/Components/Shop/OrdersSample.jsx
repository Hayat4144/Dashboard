import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrdersSample({ OrderData }) {
    const navigate = useNavigate();
    function ChangeRoute(id) {
        navigate(`/v3/seller/order/product/${id}`)
    }
    return (
        <Fragment>
            <section className='transaction_data rounded-b-md overflow-x-auto dark:bg-gray-800'>
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-indigo-700 text-white text-justify">
                            <th className="px-4 py-2">Order id</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody className='mb-2'>
                        {OrderData.map((transaction, index) => (
                            <tr key={index} onClick={(e)=> ChangeRoute(transaction._id)} className="border-b border-gray-300 dark:border-gray-500 cursor-pointer  hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200">
                                <td className="px-4 py-2">{transaction._id}</td>
                                <td className="px-4 py-2">{transaction.status}</td>
                                <td className="px-4 py-2">{transaction.date}</td>
                                <td className="px-4 py-2">{transaction.totalPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </Fragment>
    )
}
