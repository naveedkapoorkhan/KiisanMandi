import { React, useState, useEffect } from 'react';
import { Seller_myproductcard } from '../../components';

const Seller_myproducts = () => {

    const fulluser_profile = localStorage.getItem("user");


    const userDataFromStorage = JSON.parse(fulluser_profile);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/products/${userDataFromStorage._id}`)
          .then(response => response.json())
          .then(data => {
              setProducts(data);
              console.log("all data: ", data);
          })
          .catch(error => console.error('Error fetching products:', error));
      }, []);



    return (
        <div>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">MY PRODUCTS</h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">BY clicking Add Product button You can add more crops to increase your earning by using Kisan Mandi </p>
                    </div>
                    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


                    {products.map((product, index) => (
                                 <tr key={index} >
                                 <td><Seller_myproductcard product={product} /></td>
                                     </tr>
  ))}

{/* 
                        <Seller_myproductcard></Seller_myproductcard> */}

                        {/* <Seller_myproductcard></Seller_myproductcard>


                        <Seller_myproductcard></Seller_myproductcard>
                        <Seller_myproductcard></Seller_myproductcard> */}

                    </div>
                </div>
            </section>


        </div>
    )
}

export default Seller_myproducts