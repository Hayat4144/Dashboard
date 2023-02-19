import React, { Fragment, useEffect, useState } from 'react'

export default function TransactionSample({ transactionData }) {

    return (
        <Fragment>
            <section className='transaction_data rounded-b-md overflow-x-auto dark:bg-gray-800'>
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-indigo-700 text-white text-justify">
                            <th className="px-4 py-2">id</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Amount</th>
                            <th className="px-4 py-2">Payment Method</th>
                        </tr>
                    </thead>
                    <tbody className='mb-2'>
                        {transactionData.map((transaction, index) => (
                            <tr key={index} className="border-b border-gray-300 dark:border-gray-500 cursor-pointer  hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200">
                                <td className="px-4 py-2">{transaction.id}</td>
                                <td className="px-4 py-2">{transaction.name}</td>
                                <td className="px-4 py-2">{transaction.price}</td>
                                <td className="px-4 py-2">{transaction.date}</td>
                                <td className="px-4 py-2">{transaction.amount}</td>
                                <td className="px-4 py-2">{transaction.paymentMethod}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </Fragment>
    )
}
