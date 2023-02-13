import React, { Fragment } from 'react'

export default function TransactionSample() {
    const transactions = [
        { name: 'Product 1', price: 19.99, date: '2022-12-31', amount: 2, paymentMethod: 'Credit Card', id: '1' },
        { name: 'Product 2', price: 9.99, date: '2023-01-01', amount: 1, paymentMethod: 'Paypal', id: '2' },
        { name: 'Product 3', price: 4.99, date: '2023-01-02', amount: 3, paymentMethod: 'Debit Card', id: '3' },
    ];

    return (
        <Fragment>
            <section className='transaction_data rounded-md shadow-lg my-10 mx-5 md:mx-10 overflow-x-auto dark:bg-gray-800'>
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
                        {transactions.map((transaction, index) => (
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
