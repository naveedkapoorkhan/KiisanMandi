import React from 'react'
import { Hero, Numberstats, Homeinformation, Modechoose, Customerlogos, Homefacilities, BestSellingproduct} from '../../components'

const Home = () => {



  return (
    <div className=" bg-green-100 min-h-screen">

      <Hero/>
      {/* <Numberstats/> */}
      <Homeinformation/>
      <Modechoose/>
      {/* <Homefacilities/> */}
      <BestSellingproduct/>
      {/* <Customerlogos/> */}
      

  </div>
  )
}

export default Home