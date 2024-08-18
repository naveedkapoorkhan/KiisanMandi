import React from 'react'
import { images } from '../../constants'

const Outteam = () => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">OUR TEAM</h2>
      </div> 
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={images.man} alt="Bonnie Avatar"></img>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Ahtisham Abbasi</a>
              </h3>
              <p>Software Engineer</p>
              
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={images.man} alt="Michael Avatar"></img>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Naveed Khan Kapoor</a>
              </h3>
              <p>Software Engineer</p>
             
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={images.man} alt="Neil Avatar"></img>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Usama Sarwar</a>
              </h3>
              <p>Software Engineer</p>
             
          </div>
      </div>  
  </div>
</section>
    </>
  )
}

export default Outteam