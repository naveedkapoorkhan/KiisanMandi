import React , {useEffect,  useState} from 'react'
import { images } from '../../constants'

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import {BestSellingProduct_product, Rating} from '../../components';

const BestSellingproduct = () => {
    const [products, setProducts] = useState([]); // Assuming products are fetched once
  
    useEffect(() => {
      fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);
  
    return (
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Best Sales</h2>
              <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Discover our best-selling agricultural product that's trusted by Customers for quality and results.</p>
            </div>
            <div className="">
              <Swiper
                modules={[FreeMode, Navigation]}
                breakpoints={{
                  // Adjust breakpoints and spacing as needed
                  340: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  700: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                navigation
                freeMode={true}
                spaceBetween={50}
                slidesPerView={5}
              >
                {products.map((product, index) => (
                  <SwiperSlide key={index}>
                    <BestSellingProduct_product product={product} /> {/* Pass product data */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    );
  };

export default BestSellingproduct