import React, { useState }from 'react'
import { images } from '../../../constants'
import {Easypaisa} from '../../../components'

const Paymentoptions = ({ onDisable }) => {

    const handleButtonClick = () => {
        onDisable(); // Call the function to disable PaymentOptions
    };


    return (
        <div>

            <p className="text-sm text-gray-500 mb-4">
                Connect with one of our available Payment Methods OR contact support Team.
            </p>
            {/* Your wallet connection options */}
            <ul className="my-4 space-y-3">
                <li>
                    <a onClick={handleButtonClick} href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <img aria-hidden="true" className="h-4" viewBox="0 0 40 38" fill="none" src={images.easypaisa_image}></img>
                        <span className="flex-1 ms-3 whitespace-nowrap">EasyPaisa</span>
                       
                        {/* <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span> */}
                    </a>
                </li>

                 {/* Render Easypaisa component based on state */}

                <li>
                    <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <img aria-hidden="true" className="h-4" viewBox="0 0 40 38" fill="none" src={images.jazzcash}></img>
                        <span className="flex-1 ms-3 whitespace-nowrap">Jazz Cash</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <img aria-hidden="true" className="h-4" viewBox="0 0 40 38" fill="none" src={images.bank}></img>
                        <span className="flex-1 ms-3 whitespace-nowrap">Bank Account</span>
                    </a>
                </li>

            </ul>

            
        </div>
    )
}

export default Paymentoptions