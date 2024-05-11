import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  return (
    <div className="slider-container pl-24 pr-24">
      <Slider {...settings}>
        <div className="slide relative">
          <img src="/certificate1.png" alt="Slide 1" className="w-52 h-44" />
          
        </div>
        <div className="slide relative">
          <img src="/certificate2.png" alt="Slide 2" className="w-52 h-44" />
         
        </div>
        <div className="slide relative">
          <img src="/certificate3.png" alt="Slide 3" className="w-52 h-44" />
         
        </div>
        <div className="slide relative">
          <img src="/certificate4.png" alt="Slide 4" className="w-52 h-44" />
          
        </div>
        <div className="slide relative">
          <img src="/certificate5.png" alt="Slide 4" className="w-52 h-44" />
          
        </div>
        <div className="slide relative">
          <img src="/certificate6.png" alt="Slide 4" className="w-52 h-44" />
          
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;