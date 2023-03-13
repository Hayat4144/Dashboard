import React, { Fragment, useState, useEffect, Suspense, lazy } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { toast } from 'react-toastify';
import { toastifyoption } from '../../global/Notification';
const MobileNavbar = lazy(() => import('../../global/MobileNavbar'))
const AsideNavbar = lazy(() => import('../../global/AsideNavbar'))
import MobileSkeleton from '../../animation/MobileSkeleton';
import AsideNavbarSkeleton from '../../animation/AsideNavbarSkeleton';

export default function AddProducts() {
    const [CategroyData, SetCategroyData] = useState([])
    const [attributes, setAttributes] = useState('');
    const [selectedAttributes, setSelectedAttributes] = useState([])
    const [uploaded_images, setUploaded_images] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [unique_attributes, setunique_attributes] = useState([])
    const [product_name, setProduct_name] = useState('')
    const [price, setPrice] = useState('')
    const [brand, setbrand] = useState('')
    const [description, setDescription] = useState('')
    const [stock, setStock] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    console.log(selectedCategory);
    const StockChange = (e) => {
        setStock(Number(e.target.value))
    }
    const PriceChange = (e) => {
        setPrice(Number(e.target.value))
    }
    const BrandChange = (e) => {
        setbrand(e.target.value)
    }
    console.log(typeof price);
    const ProductNameChange = (e) => {
        setProduct_name(e.target.value)
    }
    const DescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    let updated_image_url = []
    function handleFileUpload(event) {
        const file = event.target.files[0];
        const image_as_base64 = URL.createObjectURL(file);
        updated_image_url = [...uploaded_images, { image_preview: image_as_base64, image_as_file: file }]
        setUploaded_images(updated_image_url)
    }
    const handleOptionChange = (event) => {
        setAttributes(event.target.value)
        selectedAttributes.push(event.target.value)
        setunique_attributes(Array.from(new Set(selectedAttributes.map(item => item))))
    };

    const handlecategoryChange = (event) => {
        setSelectedCategory(event.target.value)
    }

    const Remove_attributes = (attribute) => {
        setunique_attributes(unique_attributes.filter(item => item !== attribute));
    }

    // ------------------- fetch category data ---------------------------------- //
    async function fetchCategoryData() {
        const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/get_all_categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        const { data, error } = await response.json();
        if (response.status !== 200) return toast.error(error, toastifyoption);
        SetCategroyData(data)
    }

    useEffect(() => {
        fetchCategoryData();
    }, [])


    const AddProductHandler = async () => {
        setIsLoading(!isLoading)
        let formData = new FormData();
        uploaded_images.map((images) => {
            formData.append('product_image', images.image_as_file)
        })
        formData.append('name', product_name)
        formData.append('price', price)
        formData.append('stock', stock)
        formData.append('description', description)
        formData.append('brand', brand)
        formData.append('category', selectedCategory)
        formData.append('attributes_name', JSON.stringify(unique_attributes))
        const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_BACKEND_DEV_URL : import.meta.env.VITE_BACKEND_URL}/v4/api/create/product`, {
            method: "POST",
            credentials: 'include',
            body: formData
        })
        const { data, error } = await response.json();
        setIsLoading(false)
        if (response.status !== 200) return toast.error(error, toastifyoption);
        setunique_attributes([])
        setAttributes('')
        setSelectedAttributes([])
        setProduct_name('')
        setPrice('')
        setbrand('')
        setDescription('')
        setSelectedCategory('')
        setStock('')
        setUploaded_images([])
        updated_image_url = []
        toast.success(data, toastifyoption)

    }


    return (
        <Fragment>
            <header className='md:hidden'>
                <Suspense fallback={<MobileSkeleton />}>
                    <MobileNavbar />
                </Suspense>
            </header>
            <div className='flex'>
                <Suspense fallback={<AsideNavbarSkeleton />}>
                    <AsideNavbar />
                </Suspense>
                <main className='add_product_page w-full h-full dark:bg-gray-900'>
                    <h1 className='product_add_text dark:text-gray-200 my-5 mx-5 md:mx-8 lg:mx-10 text-2xl'>Add a new product</h1>
                    <form className='mx-5 my-5  rounded-lg  shadow-2xl
                      px-5 dark:bg-gray-800 py-5'
                        onSubmit={(e) => {
                            e.preventDefault();
                            AddProductHandler();
                        }}>
                        <div className='grid grid-cols-1 lg:grid-cols-2  gap-5'>
                            <div className='products_attributes md:grid md:grid-cols-2 gap-5'>
                                <div className='product_name my-1'>
                                    <label htmlFor="name" className='dark:text-gray-200 text-gray-700'>Name</label>
                                    <input
                                        type={'text'}
                                        value={product_name}
                                        onChange={ProductNameChange}
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
                                        value={price}
                                        onChange={PriceChange}
                                        placeholder='Enter product price'
                                        className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500 appearance-none'
                                    />
                                </div>
                                <div className='stock'>
                                    <label htmlFor="stock" className='dark:text-gray-200 text-gray-700'>Stock</label>
                                    <input
                                        type={'number'}
                                        required
                                        value={stock}
                                        onChange={StockChange}
                                        placeholder='Enter product stock'
                                        className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500 appearance-none'
                                    />
                                </div>
                                <div className='brand '>
                                    <label htmlFor="brand" className='dark:text-gray-200 text-gray-700'>Brand</label>
                                    <input
                                        type={'text'}
                                        required
                                        value={brand}
                                        onChange={BrandChange}
                                        placeholder='Enter product brand'
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
                                        value={description}
                                        onChange={DescriptionChange}
                                        placeholder='write something about your product'
                                        rows={5}
                                        className='px-2 py-1.5 outline-none rounded-md border border-gray-400 text-sm 
                                    focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                    my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-gray-500 appearance-none'
                                    />
                                </div>
                                <div className='attributes col-span-2'>
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
                                    <div className='attributes_container flex flex-wrap space-x-3 mt-2'>
                                        {selectedAttributes.length > 0 ? unique_attributes.map((attributes, index) => (
                                            <div
                                                className='border-gray-500 border rounded-full dark:text-gray-200
                                            px-5 text-center py-1 flex items-center space-x-2'
                                                key={index}>
                                                <span>{attributes}</span>
                                                <AiOutlineClose onClick={() => {
                                                    console.log('clicked');
                                                    Remove_attributes(attributes)
                                                }} />
                                            </div>

                                        )) : null}
                                    </div>
                                </div>
                                <div className='category col-span-2'>
                                    <label htmlFor="category" className='dark:text-gray-200 text-gray-700'>Category</label>
                                    <select
                                        defaultValue={selectedCategory}
                                        onChange={handlecategoryChange}
                                        className='px-2 py-1.5 outline-none rounded-md border border-gray-400
                                        focus:border-indigo-800 focus:shadow-md dark:bg-inherit dark:focus:border-gray-400
                                        my-1 w-full dark:placeholder:text-gray-200 dark:text-gray-200 dark:bg-gray-800'
                                    >
                                        <option className='dark:bg-gray-700' defaultValue>Choose a category</option>
                                        {CategroyData.map((category) => (
                                            <option value={category._id} key={category._id} className="dark:bg-gray-700">{category.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <section className='images my-5'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 cursor-pointer overflow-hidden object-cover'>
                                    {uploaded_images.map((item, index) => (
                                        <figure className='overflow-hidden rounded-md'>
                                            <img
                                                key={index}
                                                src={item.image_preview}
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
                                            name="product_image"
                                            className="hidden"
                                            onChange={handleFileUpload}
                                        />
                                    </label>
                                </div>
                            </section>
                        </div>

                        <div className='w-24 my-2'>
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

                    </form>
                </main>
            </div>

        </Fragment>
    )
}
