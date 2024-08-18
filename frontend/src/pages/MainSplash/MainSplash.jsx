import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { images } from '../../constants';






const MainSplash = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let auth = localStorage.getItem("user"); //yeah jo "user" ha wo localstorage ma key ha  
    
        if (auth) {
            navigate('/home')
        }
    });

  return (
    <div><section className="h-screen bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
    <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12  ">
        <img className="mx-auto mb-4 w-20 h-20 text-gray-400" src={images.farmer_image} viewBox="0 0 512 512"></img>
        <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-4xl xl:text-4xl dark:text-white">FARMER</h1>
        <p className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">"Your Farming Marketplace"</p>
        <div className='py-8'>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/home" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                HOME
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="/login" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                {/* <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg> */}
                LOGIN
            </a>  
        </div>
        </div>
    </div>
</section></div>
  )
}

export default MainSplash;