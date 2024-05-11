import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const test = () => {
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
          <h1>Hamza ali</h1>
        <p>
        Working with Anum has been an absolute pleasure. Her dedication to her craft is unmatched, and her attention to detail is commendable
        </p>
        </div>
        <div className="slide relative">
          <img src="/certificate2.png" alt="Slide 2" className="w-52 h-44" />
          <h1>Hamza ali</h1>
        <p>
        Working with Anum has been an absolute pleasure. Her dedication to her craft is unmatched, and her attention to detail is commendable
        </p>
        </div>
        <div className="slide relative">
          <img src="/certificate3.png" alt="Slide 3" className="w-52 h-44" />
          <h1>Hamza ali</h1>
        <p>
        Working with Anum has been an absolute pleasure. Her dedication to her craft is unmatched, and her attention to detail is commendable
        </p>
        </div>
      
       
       
      </Slider>
    </div>
  )
}

export default test
