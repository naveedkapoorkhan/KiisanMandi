import React from 'react';
import { Outteam } from '../../components';
import { images } from '../../constants';

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="pt-8 px-4 mx-auto max-w-screen-xl lg:pt-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">ABOUT US</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">A Software Engineer tasked with developing a website for farmers to buy and sell their Crops plays a crucial role in bridging the gap between technology and agriculture. This professional designs and builds a user-friendly platform where farmers can list their products, interact with potential buyers, and manage their sales. They focus on creating robust features like product listings, secure payment gateways, and communication tools to facilitate easy transactions. Furthermore, they ensure the website is accessible on various devices, providing farmers with a seamless online marketplace experience. This role requires a deep understanding of both web development and the agricultural industry to provide a valuable digital solution to farmers looking to expand their reach and improve their livelihoods.</p>
        
        
        </div>

      </div>

      <Outteam />
      <div>
      <section className="bg-white dark:bg-gray-900">
    <div className=" flex justify-center content-centeritems-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className=" lg:ml-40 font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">OUR MISSION</h2>
            <p className="mb-4">At Kisan Mandi, our mission is to empower farmers with earning suitable income. We are dedicated to fostering agricultural Crops. We strive to create a community where farmers and buyers access quality Crops easily. Together, we are sowing the seeds of a brighter, more bountiful future for agriculture.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src={images.farmer_image} alt="office content 1"></img>
            {/* <img className="mt-4 w-full lg:mt-10 rounded-lg" src={images.bringing} alt="office content 2"></img> */}
        </div>
    </div>
</section>

      </div>
    </section>
  )
}

export default About