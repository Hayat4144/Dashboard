import React, { Fragment, useState } from 'react'
import AsideNavbar from '../../global/AsideNavbar'

export default function AddProducts() {
    const [attributes, setAttributes] = useState('');
    const [selectedAttributes, setSelectedAttributes] = useState([])
    const [uploaded_images, setUploaded_images] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    function handleFileUpload(event) {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        const updated_image_url = [...uploaded_images, imageUrl]
        setUploaded_images(updated_image_url)
    }
    const handleOptionChange = (event) => {
        setAttributes(event.target.value)
        selectedAttributes.push(event.target.value)
    };
    const unique_attributes = Array.from(new Set(selectedAttributes.map(item => item)))
    return (
        <Fragment>
            {console.log(uploaded_images)}
            <div className='flex'>
                <AsideNavbar />
                <main className='add_product_page w-full h-full dark:bg-gray-900'>
                    <h1 className='product_add_text dark:text-gray-200 my-5 mx-5 md:mx-8 lg:mx-10 text-2xl'>Add a new product</h1>
                    <form className='mx-5 my-5 grid grid-cols-1 lg:grid-cols-2  gap-5 rounded-lg  shadow-2xl
                      px-5 dark:bg-gray-800 py-5'>
                        <div className='products_attributes md:grid md:grid-cols-2 gap-5'>
                            <div className='product_name my-1'>
                                <label htmlFor="name" className='dark:text-gray-200 text-gray-700'>Name</label>
                                <input
                                    type={'text'}
                                    required
                                    placeholder='Enter product name'
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500'
                                />
                            </div>
                            <div className='price my-1'>
                                <label htmlFor="price" className='dark:text-gray-200 text-gray-700'>Price</label>
                                <input
                                    type={'number'}
                                    required
                                    placeholder='Enter product price'
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500 appearance-none'
                                />
                            </div>
                            <div className='price'>
                                <label htmlFor="stock" className='dark:text-gray-200 text-gray-700'>Stock</label>
                                <input
                                    type={'number'}
                                    required
                                    placeholder='Enter product stock'
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500 appearance-none'
                                />
                            </div>
                            <div className='category'>
                                <label htmlFor="category" className='dark:text-gray-200 text-gray-700'>Category</label>
                                <input
                                    type={'text'}
                                    required
                                    placeholder='Enter product category'
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500 appearance-none'
                                />
                            </div>
                            <div className='brand'>
                                <label htmlFor="brand" className='dark:text-gray-200 text-gray-700'>Brand</label>
                                <input
                                    type={'text'}
                                    required
                                    placeholder='Enter product brand'
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500 appearance-none'
                                />
                            </div>
                            <div className='total_attributes'>
                                <label htmlFor="total_attributes" className='dark:text-gray-200 text-gray-700'>Cnt</label>
                                <input
                                    type={'number'}
                                    required
                                    placeholder='Enter total attributes count'
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500 appearance-none'
                                />
                            </div>
                            <div className='description col-span-2'>
                                <label htmlFor="description" className='dark:text-gray-200 text-gray-700'>Description</label>
                                <textarea
                                    type={'text'}
                                    required
                                    placeholder='write some about your product'
                                    rows={5}
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500 appearance-none'
                                />
                            </div>
                            <div className='attributes col-span-2 mb-2'>
                                <label htmlFor="attributes" className='dark:text-gray-200 text-gray-700'>Attributes</label>
                                <select
                                    defaultValue={attributes}
                                    onChange={handleOptionChange}
                                    className='px-2 py-1.5 outline-none rounded-md border border-gray-400
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 dark:bg-gray-800'
                                >
                                    <option defaultValue={'size'} className="dark:bg-gray-700">size</option>
                                    <option value={'hieght'} className="dark:bg-gray-700">Hieght</option>
                                    <option value={'color'} className="dark:bg-gray-700">color</option>
                                </select>
                            </div>
                            <div className='w-24 mb-5'>
                                {!isLoading ?
                                    <button type='submit' className='w-full h-10 text-center bg-indigo-700 hover:bg-indigo-800
                                        text-white outline-none text-bold dark:bg-indigo-600 rounded-md
                                        dark:hover:bg-indigo-700'>Submit</button> : <button type="button"
                                        className="inline-flex items-center justify-center py-2  leading-4 
                                            text-sm shadow rounded-md text-white dark:bg-indigo-600 bg-indigo-700 hover:bg-indigo-800
                                            w-full text-center transition ease-in-out duration-150 cursor-not-allowed"
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
                        <section className='images my-5'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 cursor-pointer overflow-hidden object-cover'>
                                {uploaded_images.map((item, index) => (
                                    <figure className='overflow-hidden rounded-md'>
                                        <img
                                            key={index}
                                            src={item}
                                            className="rounded-md hover:scale-125 w-full"
                                            alt='product_image'
                                        />
                                    </figure>

                                ))}
                            </div>
                            <div className="flex my-5 w-full col-span-2">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" strokeWidth="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input
                                        multiple
                                        id="dropzone-file"
                                        type="file"
                                        className="hidden"
                                        onChange={handleFileUpload}
                                    />
                                </label>
                            </div>
                        </section>

                    </form>
                </main>
            </div>

        </Fragment>
    )
}
