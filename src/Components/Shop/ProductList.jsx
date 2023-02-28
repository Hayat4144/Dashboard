import React, { Fragment, useState } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AsideNavbar from '../../global/AsideNavbar';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [isModalopen, setIsModalopen] = useState(false)
    const [selectedId, setSelectedId] = useState('')
    const [products, setProduct] = useState([
        { id: 1, name: "Product 1", price: 10.99, quantity: 42 },
        { id: 2, name: "Product 2", price: 20.99, quantity: 45 },
        { id: 3, name: "Product 3", price: 15.99, quantity: 42 },
        { id: 4, name: "Product 4", price: 25.99, quantity: 24 },
        { id: 5, name: "Product 5", price: 30.99, quantity: 34 },
        { id: 6, name: "Product 6", price: 30.99, quantity: 34 },
        { id: 7, name: "Product 7", price: 30.99, quantity: 34 },
        { id: 8, name: "Product 8", price: 30.99, quantity: 34 },
        { id: 9, name: "Product 9", price: 30.99, quantity: 34 },
        { id: 10, name: "Product 10", price: 30.99, quantity: 34 },
    ])
    const [showProductPerPage, setShowProductPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)

    //  ------------------ pagination logic ----------------
    if (products.length > showProductPerPage) {
        var numberofPages = Math.ceil(products.length / showProductPerPage);
        console.log(numberofPages);
        var page_number = [...Array(numberofPages + 1).keys()].slice(1)
    }

    const nextPage = () => {
        if (currentPage !== numberofPages) {
            setCurrentPage(currentPage + 1)
        }

    }
    const previousPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }

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
            <main className='flex'>
                <div className='w-full h-full dark:bg-gray-900'>
                    <section className='transaction_data rounded-md shadow-2xl my-10 mx-2 md:mx-5 lg:mx-10 overflow-x-auto dark:bg-gray-800'>
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
                                            <td className="px-4 py-2"><Link to={`/v3/seller/edit/product/${product.id}`}><EditOutlinedIcon /></Link></td>
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
                    {
                        products.length > showProductPerPage ? <div className='paginations my-16'>
                            <section className='pagination_container my-5'>
                                <div className='pagination_box flex items-center justify-center space-x-5'>
                                    <div className='previous_btn'>
                                        <button onClick={previousPage} disabled={currentPage === 1 ? true : false}
                                            className='bg-indigo-700 text-white md:px-5 py-1.5 
                                            rounded-md text-center px-3'>
                                            <AiOutlineArrowLeft className='md:text-2xl' />
                                        </button>
                                    </div>
                                    <div className='page_number_container  flex items-center space-x-3'>
                                        {
                                            page_number.map(pg_number => (
                                                <button key={pg_number}
                                                    onClick={() => {
                                                        setCurrentPage(pg_number)
                                                    }}
                                                    className=
                                                    {`${currentPage === pg_number ? 'border-none bg-indigo-700 text-white rounded-full outline-none' : ''}
                                                rounded-full focus:border-non hover:border-none  w-10 h-10 
                                                transition ease-out duration-500 hover:bg-indigo-700 hover:border border-gray-400 border
                                                hover:text-white dark:text-gray-200 dark:focus:text-white`}
                                                >{pg_number}</button>
                                            ))
                                        }


                                    </div>
                                    <div className='next_btn'>
                                        <button onClick={nextPage}
                                            className='bg-indigo-700 md:px-5 text-white py-1.5 
                                    px-4 rounded-md text-center'>
                                            <AiOutlineArrowRight className='md:text-2xl' />
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </div > : ''
                    }
                </div>

            </main>

        </Fragment>
    )
}
