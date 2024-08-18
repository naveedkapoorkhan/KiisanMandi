import React, {useState} from 'react'
import { Seller_addproducts } from '../../components'

const Sellerheading = () => {

    const [showseller_addproduct, setshowseller_addproduct] = useState(false);

    const handleseller_addproduct = () => {
  
      if(showseller_addproduct)
      {
        setshowseller_addproduct(false);
      }
      else
      {
        setshowseller_addproduct(true);
      }
  
    };

  return (
    <div>
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">MARKET PLACE</h2>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Experience the farm-fresh bounty of our marketplace, where the juiciest fruits, crispest vegetables, and finest crops await your selection.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a onClick={handleseller_addproduct} href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Add Product
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            {showseller_addproduct &&   <Seller_addproducts onDisableselleraddproduct={handleseller_addproduct} />}

            {/* <a href="#" className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Learn more
            </a>   */}
        </div>
    </div>
</section>
    </div>
  )
}

export default Sellerheading;