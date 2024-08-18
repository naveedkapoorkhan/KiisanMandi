import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = () => {
    const location = useLocation();
    const {
        productid,
        productname: initialProductName,
        productprice: initialProductPrice,
        productstock: initialProductStock,
        productdescription: initialProductDescription,
        productlocation: initialProductLocation,
        productcategory: initialProductCategory
    } = location.state || {};

    const [productData, setProductData] = useState({
        productname: initialProductName,
        productprice: initialProductPrice,
        productstock: initialProductStock,
        productdescription: initialProductDescription,
        productlocation: initialProductLocation,
        productcategory: initialProductCategory
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProductData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:3000/updateproduct/${productid}`, productData);
            console.log('Product data updated successfully:', response.data);
            alert("Product data updated successfully");
        } catch (error) {
            console.error('Error updating product data:', error);
        }
    };

    return (
        <>
            <div>
                <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white p-5">Update Product Details</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="w-full md:w-2/3 bg-white p-4 rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>
                            <div className="w-full sm:w-1/2 px-2 mb-4">
                                <label htmlFor="productname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                <input
                                    type="text"
                                    id="productname"
                                    value={productData.productname}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <div className="w-full sm:w-1/2 px-2 mb-4">
                                <label htmlFor="productprice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
                                <input
                                    type="text"
                                    id="productprice"
                                    value={productData.productprice}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>
                            <div className="w-full sm:w-1/2 px-2 mb-4">
                                <label htmlFor="productstock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Stock</label>
                                <input
                                    type="text"
                                    id="productstock"
                                    value={productData.productstock}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <div className="w-full sm:w-1/2 px-2 mb-4">
                                <label htmlFor="productdescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                <input
                                    type="text"
                                    id="productdescription"
                                    value={productData.productdescription}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>
                            <div className="w-full sm:w-1/2 px-2 mb-4">
                                <label htmlFor="productlocation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Location</label>
                                <input
                                    type="text"
                                    id="productlocation"
                                    value={productData.productlocation}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <div className="w-full sm:w-1/2 px-2 mb-4">
                                <label htmlFor="productcategory" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Category</label>
                                <input
                                    type="text"
                                    id="productcategory"
                                    value={productData.productcategory}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <button type="submit" className="bg-white-500 text-black border px-4 py-2 rounded-md hover:bg-green-600 hover:text-white">Update Data</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UpdateProduct;
