import { React, useState, useEffect } from 'react';
import {Seller_myproductcard} from '../../components';

const Dashboarditems = () => {

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

            <div className="flex flex-col md:flex-row gap-3">
                {/* <!-- Left side: Image upload box --> */}
                <div className="w-full md:w-1/3 p-4 ">
                    {/* <!-- Image upload box --> */}
                    <div className='flex flex-col items-center justify-center'>


                        <div>
                            <h2 className="mb-4 text-2xl text-center tracking-tight font-bold leading-tight text-gray-900 dark:text-white p-5">MY ITEMS</h2>
                        </div>


                    </div>

                    {/* <!-- Add more styling or functionality for image upload --> */}
                </div>

                {/* <!-- Right side: Profile form --> */}
                <div className=" w-full md:w-2/3 bg-white p-4 py-8 rounded-lg">
                    {/* <!-- Profile form --> */}
                    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">



                    {products.map((product, index) => (
                                 <tr key={index} >
                                 <td><Seller_myproductcard product={product} /></td>
                                     </tr>
  ))}






</div>
                </div>
            </div>


        </div>
    )
}

export default Dashboarditems