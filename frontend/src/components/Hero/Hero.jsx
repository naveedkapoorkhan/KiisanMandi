import React from "react";
import { Slider, SliderText } from "../../components";
import { data } from "../../constants";  

const Hero = () => {
  return (
    <>
      <div>
        <div>
          <Slider slides={data.sliderimagesdata} />
       
        </div>
      </div>
    </>
  );
};

export default Hero;
