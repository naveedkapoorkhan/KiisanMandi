import React from 'react'
import {images} from "../../constants"

const Modechoose = () => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 sm">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Select Mode</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Experience a digital marketplace tailored to farmers, providing an efficient space to sell and purchase farm goods.</p>
      </div> 
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="/buyer">
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={images.buying} alt="Bonnie Avatar"></img>
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="/buyer">BUYER</a>
                  </h3>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Support local agriculture by purchasing high-quality, farm-fresh products directly from the source.</p>
                 
              </div>
          </div> 
          <div className=" items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="/seller" >
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={images.buying} alt="Jese Avatar"></img>
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="/seller">SELLER</a>
                  </h3>

                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Elevate your farming business by easily listing and selling your agricultural products to a wider market.</p>
                
              </div>
          </div> 

        
      </div>  
  </div>
</section>
    </>
  )
}

export default Modechoose;