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
          <img src="/blogpic.png" alt="Slide 1" className="w-52 h-44" />
          <div className="absolute bottom-0 left-0 w-48 h-10 m-2 bg-sky-700 text-white text-center py-2">
            <a href="https://blogpage-tawny.vercel.app/" target="_blank">
              link
            </a>
          </div>
        </div>
        <div className="slide relative">
          <img src="/pricing.png" alt="Slide 1" className="w-52 h-44" />
          <div className="absolute bottom-0 left-0 w-48 h-10 m-2 bg-sky-700 text-white text-center py-2">
            <a href="https://webpages-eight.vercel.app/" target="_blank">
              link
            </a>
          </div>
        </div>
        <div className="slide relative">
          <img src="/weather.png" alt="Slide 1" className="w-52 h-44" />
          <div className="absolute bottom-0 left-0 w-48 h-10 m-2 bg-sky-700 text-white text-center py-2">
            <a href="https://weatherupdate-ten.vercel.app/" target="_blank">
              link
            </a>
          </div>
        </div>
        <div className="slide relative">
          <img src="/blog.png" alt="Slide 1" className="w-52 h-44" />
          <div className="absolute bottom-0 left-0 w-48 h-10 m-2 bg-sky-700 text-white text-center py-2">
            <a href="https://blogapp-kappa-seven.vercel.app/" target="_blank">
              link
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;