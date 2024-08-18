import React from 'react'

const ProductDetailsBuyer = () => {

    return (
        <div>
    
               <div
            id="drawer-form"
            className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800"
            aria-labelledby="drawer-form-label"
          >
            <h5
              id="drawer-label"
              className="inline-flex items-center text-lg mb-6 text-base font-bold text-black uppercase dark:text-gray-400"
            >
    
            </h5>
            <button
              type="button"
    
              data-drawer-hide="drawer-form"
              aria-controls="drawer-form"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
    
            <form className="mb-6">
              <div className="mb-6">
                <img
    
                  alt="Image"
                  className="w-full h-40 rounded-lg"
                ></img>
              </div>
              <div className="mb-6">
                {/* <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label> */}
                <p
                  id="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write event description..."
                >
    
                </p>
              </div>
              <div className="mb-6 flex items-center">
                <label
                  for="title"
                  className="mr-4 text-sm font-bold font-medium text-gray-900 dark:text-white"
                >
                  Seller ID:{" "}
                </label>
                <label
                  for="title"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
    
                </label>
              </div>
    
    
              <div className="mb-6 flex items-center">
                <label
                  for="title"
                  className="mr-4 text-sm font-bold font-medium text-gray-900 dark:text-white"
                >
                  Seller Name:{" "}
                </label>
                <label
                  for="title"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
               
                </label>
              </div>
    
    
              <div className="mb-6 flex items-center">
                <label
                  for="title"
                  className="mr-4 text-sm font-bold font-medium text-gray-900 dark:text-white"
                >
                  Seller Email:{" "}
                </label>
                <label
                  for="title"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
          
                </label>
              </div>
    
    
              <div className="mb-6 flex items-center">
                <label
                  for="title"
                  className="mr-4 text-sm font-bold font-medium text-gray-900 dark:text-white"
                >
                  Stock Left:{" "}
                </label>
                <label
                  for="title"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
       
                </label>
              </div>
    
              <div className="mb-6 flex items-center">
                <label
                  for="title"
                  className="mr-4 text-sm font-bold font-medium text-gray-900 dark:text-white"
                >
                  Total Buyers:{" "}
                </label>
                <label
                  for="title"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
                  1.4k
                </label>
              </div>
    
              <div className="mb-6 flex items-center">
                <label
                  for="title"
                  className="mr-4 text-sm font-bold font-medium text-gray-900 dark:text-white"
                >
                  Rating:{" "}
                </label>
                <label
                  for="title"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
    
                </label>
              </div>
    
            
            </form>
          </div>
          {/* <!-- drawer component --> */}
          {/* className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto  bg-white w-80 dark:bg-gray-800" */}
    
        </div>
      );
}

export default ProductDetailsBuyer