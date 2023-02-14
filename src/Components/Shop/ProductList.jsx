import React, { Fragment, useState } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export default function ProductList() {
    const [isModalopen, setIsModalopen] = useState(false)
    const [selectedId, setSelectedId] = useState('')
    const [products, setProduct] = useState([
        { id: 1, name: "Product 1", price: 10.99, quantity: 42 },
        { id: 2, name: "Product 2", price: 20.99, quantity: 45 },
        { id: 3, name: "Product 3", price: 15.99, quantity: 42 },
        { id: 4, name: "Product 4", price: 25.99, quantity: 24 },
        { id: 5, name: "Product 5", price: 30.99, quantity: 34 },
    ])

    const handleDelete = (id) => {
        setIsModalopen(!isModalopen);
        setSelectedId(id);
    }

    const DeleteItem = () => {
        setProduct(products.filter(item => item.id !== selectedId));
        setIsModalopen(!isModalopen)
    }
    return (
        <Fragment>
            <section className='transaction_data rounded-md shadow-lg my-10 mx-5 md:mx-10 overflow-x-auto dark:bg-gray-800'>
                <table className='table-auto w-full'>
                    <thead>
                        <tr className="bg-indigo-700 text-white text-justify">
                            <th className="px-4 py-2">id</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2">Stock</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Edit </th>
                            <th className="px-4 py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody className='mb-2'>
                        {
                            products.map((product, index) => (
                                <tr key={index} className="border-b border-gray-300 dark:border-gray-500 cursor-pointer  hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200">
                                    <td className="px-4 py-2">{product.id}</td>
                                    <td className="px-4 py-2">{product.name}</td>
                                    <td className="px-4 py-2">{product.quantity}</td>
                                    <td className="px-4 py-2">{product.quantity < 1 ? <CancelOutlinedIcon className='text-red-600' /> : <CheckCircleOutlineOutlinedIcon className='text-green-700 dark:text-green-600' />}</td>
                                    <td className="px-4 py-2">{product.price}</td>
                                    <td className="px-4 py-2"><EditOutlinedIcon /></td>
                                    <td className="px-4 py-2" onClick={() => handleDelete(product.id)}><DeleteOutlineOutlinedIcon /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
            <div className={`${!isModalopen ? 'hidden' : ' '} modal fixed inset-0 bg-black dark:bg-gray-800 dark:bg-opacity-75 opacity-100 bg-opacity-50 w-full h-full flex justify-center items-center`}>
                <div className='modal_body bg-white  fixed w-1/3 h-32 m-auto rounded-md shadow-md px-5'>
                    <h1 className='my-5 text-xl '>Do you really want to delete this item?</h1>
                    <div className='button_groups items-center space-x-2'>
                        <button
                            onClick={() => setIsModalopen(!isModalopen)}
                            className='px-3 py-1.5 rounded-md bg-red-800 text-white text-center 
                            outline-none w-24'>Cancel</button>
                        <button
                            onClick={DeleteItem}
                            className='px-3 py-1.5 rounded-md bg-indigo-800 text-white text-center
                             outline-none w-24'>Delete</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
