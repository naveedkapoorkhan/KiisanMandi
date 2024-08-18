import React , { useState } from 'react'
import { images } from '../../../constants'
import {Easypaisa, Paymentoptions} from '../../../components'

const Payment_Details = ({handledetail}) => {

  const [showPaymentOptions, setShowPaymentOptions] = useState(true);

  const handlePaymentOptionsDisable = () => {
      setShowPaymentOptions(false);
  };

  const closebutton =() =>{
    handledetail();
  }


  return (

    
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center border-b mb-4">
          <h3 className="text-lg font-semibold">Payment Gateway</h3>
          <div className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-2">
          <button onClick={closebutton} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crypto-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
          </div>
        </div>
       
            {showPaymentOptions && <Paymentoptions onDisable={handlePaymentOptionsDisable} />}
            {!showPaymentOptions && <Easypaisa  closemodalbutton= {closebutton}/>}













      </div>
    </div>
  )
}

export default Payment_Details


