import React , {useState, useEffect} from "react";
import { images } from "../../constants";
import { Rating } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Payment_Details, Productdetails} from '../../components'
import productImage from '../../uploads/1710681365215Black hair.png';

import ChatIcon from '@mui/icons-material/Chat';
const Productcard = ({productt, openclose}) => {


    // Assuming product.imageName is the name of the image received from the API
    const [imagePath, setImagePath] = useState(null);





    const { product } = productt;


    //for overall ratings
   // const overallRating = ratings.reduce((total, rating) => total + rating, 0) / ratings.length;

    useEffect(() => {
        import(/* @vite-ignore */ `../../uploads/${productt.image}`).then((image)=>{
            setImagePath(image.default);
        });
    }, [productt.image]);

    const [showPayment_details, setShowPayment_details] = useState(false);
    const handlePayment_details = () => {
        localStorage.setItem('product', JSON.stringify(productt));
      if(showPayment_details)
      {
        setShowPayment_details(false);
      }
      else
      {
        setShowPayment_details(true);
      }
  
    };


    return (
        <div className="w-full">

            <a
                href="#"
                className="flex flex-column sm:flex-row border">
                <div className="flex flex-wrap"> {/* Use flex-wrap for mobile devices */}

                    <img
                        className="object-cover w-full rounded-t-lg h-32 md:w-48 md:rounded-none md:rounded-l-lg"
                        src={imagePath}

                        alt=""
                    ></img>
                    <div className="flex flex-col gap-0 p-4 leading-normal">
                        <h5 className=" text-2xl font-bold text-gray-900 dark:text-white">
                            {productt.productname}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <Rating  name="simple-controlled" value={productt.rating}  defaultValue={5} precision={0.1} readOnly/>
                        </p>
                        <p className="text-xs font-normal text-gray-700 dark:text-gray-400 ">
                            <p>{productt.rating} of 5.0</p>
                        </p>
                    </div>

                    <div className="flex flex-col  p-4 leading-normal">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                            Seller ID:
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {productt.userID}
                        </p>
                    </div>


                    <div className="flex flex-col  p-4 leading-normal">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                            Location:
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {productt.location}
                        </p>
                    </div>

                    <div className="flex flex-col  p-4 leading-normal">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                            Price:
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {productt.price}
                        </p>
                    </div>


                    <div className="flex flex-col  p-4 leading-normal">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                            Stock Left:
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {productt.stock}
                        </p>
                    </div>


                    {/* <div className="flex flex-col  p-4 leading-normal">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                            Total Sales:
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            50
                        </p>
                    </div> */}

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                        {/* <button type="button" onClick={openclose}   className="flex flex-row focus:outline-none text-white border border-black bg-transparent hover:bg-transparent focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-transparent dark:hover:bg-transparent dark:focus:ring-8 dark:focus:ring-green-800">
                            <p className="text-black">MORE DETAILS</p>
                        </button> */}
                    </h5>


                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <button onClick={handlePayment_details}  type="button" className="flex flex-row focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            <ShoppingCartIcon />
                            <p>ADD TO CART</p>
                        </button>
                        <button type="button" 
                        className="flex flex-row focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        onClick={() => {
                            window.location.href = 'http://localhost:5173/chat';
                          }}>
                            <ChatIcon />
                            <p className="pl-1">CHAT WITH SELLER</p>
                        </button>

                    </h5>


                </div>

            </a>

            {showPayment_details && <Payment_Details handledetail={handlePayment_details} />}
        </div>

    );
};

export default Productcard;
