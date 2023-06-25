import React, { Fragment, useState } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import NoRsultImage from '../../assets/images/no-results.png';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastifyoption } from '../../global/Notification';
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ProductList({ products, setproducts, setproductcount }) {
    const [isModalopen, setIsModalopen] = useState(false)
    const [selectedId, setSelectedId] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleDelete = (id) => {
        setIsModalopen(!isModalopen);
        setSelectedId(id);
    }

    async function FetchProduct() {
        const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/seller/products`, {
            method: "GET",
            headers: {
                'Content-Type': 'applicition/json'
            },
            credentials: 'include'
        });
        const { data, error, count, totalCount } = await response.json();
        if (response.status !== 200) return toast.error(error, toastifyoption);
        setproducts(data)
        setproductcount(totalCount)
    }

    const DeleteItem = async () => {
        setIsLoading(!isLoading)
        const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/delete/product?product_id=${selectedId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'applicition/json'
            },
            credentials: 'include'
        });
        const { data, error } = await response.json();
        setIsLoading(false)
        if (response.status !== 200) return toast.error(error, toastifyoption);
        toast.success(data, toastifyoption)
        FetchProduct();
        setIsModalopen(!isModalopen)

    }
    return (
        <Fragment>
            <main className='flex'>
                <div className='w-full h-full dark:bg-gray-900'>
                    {products.length > 0 ? <Fragment>
                        <section className="transaction_data rounded-md shadow-2xl my-10 mx-2 md:mx-5 lg:mx-10 overflow-x-auto dark:bg-gray-800">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr className="bg-indigo-700 text-white text-left">
                                        <th className="px-4 py-2">Image</th>
                                        <th className="px-4 py-2">Name</th>
                                        <th className="px-4 py-2">Quantity</th>
                                        <th className="px-4 py-2">Brand</th>
                                        <th className="px-4 py-2">Price</th>
                                        <th className="px-4 py-2">Edit </th>
                                        <th className="px-4 py-2">Delete</th>
                                        <th className="px-4 py-2">Add variant</th>
                                    </tr>
                                </thead>
                                <tbody className="mb-2 text-left">
                                    {products.map((product) => (
                                        <Fragment key={product._id}>
                                            <tr className="border-b border-gray-300 dark:border-gray-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200">
                                                <td className="px-4 py-2">
                                                    <figure>
                                                        <LazyLoadImage
                                                            src={product.assets.images[0].url}
                                                            alt="product-image"
                                                            className="w-20 h-10 rounded-md hover:scale-150"
                                                        />
                                                    </figure>
                                                </td>
                                                <td className="px-4 py-2">{product.name}</td>
                                                <td className="px-4 py-2">{product.stock}</td>
                                                <td className="px-4 py-2">{product.brand}</td>
                                                <td className="px-4 py-2">{product.price}</td>
                                                <td className="px-4 py-2">
                                                    <Link to={`/v3/seller/edit/product/${product._id}`}>
                                                        <EditOutlinedIcon />
                                                    </Link>
                                                </td>
                                                <td className="px-4 py-2">
                                                    <DeleteOutlineOutlinedIcon onClick={() => handleDelete(product._id)} />
                                                </td>
                                                <td className="px-4 py-2">
                                                    <Link to={`/v3/seller/product/add/varient/${product._id}`}>Add Variant</Link>
                                                </td>
                                            </tr>
                                        </Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </section>

                    </Fragment> :
                        <Fragment>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-2 md:mx-10 md:my-5'>
                                <div className='no-result-image'>
                                    <figure>
                                        <img
                                            src={NoRsultImage}
                                            alt="no-result-image"
                                            className='w-full overflow-hidden' />
                                    </figure>
                                </div>
                                <div className='no-result-info md:my-10 space-y-2'>
                                    <h1 className='text-3xl font-bold dark:text-gray-200'>No Product found</h1>
                                    <h1 className='text-xl dark:text-gray-200'>You have not added any product yet.</h1>
                                    <button className='bg-indigo-700 rounded-md hover:bg-indigo-800 text-white py-1.5 px-6'>
                                        <Link >Add Product</Link>
                                    </button>

                                </div>
                            </div>
                        </Fragment>
                    }
                </div>
                <div className={`${!isModalopen ? 'hidden' : ' '} modal z-50 fixed inset-0 bg-black dark:bg-gray-700 dark:bg-opacity-75 opacity-100 bg-opacity-50 w-full h-full flex justify-center items-center`}>
                    <div className='modal_body bg-white m-auto w-[90%] sm:w-[50%] lg:w-1/3 h-36  rounded-md shadow-md px-5'>
                        <h1 className='my-5 text-xl '>Do you really want to delete this item?</h1>
                        <div className='button_groups items-center space-x-2'>
                            <button
                                onClick={() => setIsModalopen(!isModalopen)}
                                className='px-3 py-1.5 rounded-md bg-red-800 text-white text-center outline-none w-24'>Cancel</button>
                            {!isLoading ?
                                <button
                                    onClick={DeleteItem}
                                    type='submit'
                                    className='w-24 h-10 text-center
                                        text-white outline-none text-bold bg-indigo-800 rounded-md
                                        hover:bg-indigo-700'>Delete</button> :
                                <button type="button"
                                    className="inline-flex items-center justify-center py-2  leading-4 
                                        text-sm shadow rounded-md text-white bg-indigo-800 hover:bg-indigo-900
                                        w-28 text-center transition ease-in-out duration-150 cursor-not-allowed"
                                    disabled="">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-500"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="pacity-25 text-white" cx="12" cy="12" r="10"
                                            stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 
                                            018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 
                                            3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                    Processing ...
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </main>

        </Fragment >
    )
}
