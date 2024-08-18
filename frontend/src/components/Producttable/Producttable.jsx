import React, { useState, useEffect } from 'react';
import Productcard from '../Productcard/Productcard'
import Searchbar from '../Searchbar/Searchbar'
import Productdetails from '../Productdetails/Productdetails';

const Producttable = () => {

    const [showDetails, setShowDetails] = useState(false);
    const [products, setProducts] = useState([]);
    const [openproduct, setopenProduct] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/products')
          .then(response => response.json())
          .then(data => {
              setProducts(data);
              console.log("all data: ", data);
          })
          .catch(error => console.error('Error fetching products:', error));
      }, []);



      const handlecheckdetails = () => {

        console.log("Handle check details");
        setShowDetails((prevState) => !prevState);
      };


      const handleProductClick = (product) => {

        console.log("handleProductClick");
        setopenProduct(product);
        setShowDetails((prevState) => !prevState);
      };

    return (

        
        <div>

          {showDetails ? (
            openproduct ? (            <Productdetails
                product={openproduct}
                isOpen={showDetails}
                closeDrawer={handlecheckdetails}
              />): <p>Data Loading...</p>

          ) : null}

             <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5 flex justify-center content-center">
                <div className="px-4 mx-auto max-w-screen-2xl lg:px-12 ">
                    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                        <div className="flex flex-col sm:flex-row px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                            <div className="flex items-center flex-1 space-x-4">
                                <h5>
                                    <span className="text-gray-500">All Products</span>
                                    {/* <span className="dark:text-white">123456</span> */}
                                </h5>
                                <h5>
                                    {/* <span className="text-gray-500">Total sales:</span>
                                    <span className="dark:text-white">$88.4k</span> */}
                                </h5>
                            </div>
                            {/* <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                                <Searchbar></Searchbar>
                            </div> */}
                            {/* <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                                <div>     
                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Choose City</option>
                                        <option value="US">Lahore</option>
                                        <option value="CA">Multan</option>
                                        <option value="FR">Faisalabad</option>
                                        <option value="DE">Islamabad</option>
                                        <option value="DE">Rawalpindi</option>
                                    </select>
                                </div>
                            </div> */}
                            {/* <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                                <p>SORT BY: </p>
                                <button type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-green-700 ">
                                    SALES
                                </button>
                                <button type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-green-700 ">
                                    RATING
                                </button>
                            </div> */}
                        </div>
                        <div className="overflow-x-auto ">
                            <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>

                                    </tr>
                                </thead>
                                <tbody >

                                {products.map((product, index) => (

                                  


                                 <tr key={index} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 p-4">
                                 <td  onClick={() => handleProductClick(product)} ><Productcard productt={product} openclose={handlecheckdetails} onclick /></td>
                                     </tr>
  ))}


                                    {/* <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 p-4">
                                        <td><Productcard /></td>
                                    </tr>
                                    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 p-4">
                                        <td><Productcard /></td>
                                    </tr> */}
                                {/*     <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 p-4">
                                        <td><Productcard /></td>
                                    </tr>
                                    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 p-4">
                                        <td><Productcard /></td>
                                    </tr>
                                    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 p-4">
                                        <td><Productcard /></td>
                                   </tr>  */}

                                </tbody>
                            </table> 
                        </div>
                        <nav className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
                            {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Showing 
                                <span className=" pl-1 font-semibold text-gray-900 dark:text-white">100 </span>
                                results of
                                <span className=" pl-1 font-semibold text-gray-900 dark:text-white">1000</span>
                            </span> */}

                        </nav>
                    </div>
                </div>
            </section> 


        </div>
    )
}

export default Producttable