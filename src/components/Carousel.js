import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import React, {useState, useEffect} from "react";
import axios from "axios";


const Carousel = (alto) => {

    alto = JSON.stringify(alto)

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    };

  return (
    <div className="container-carousel">
        <Slider {...settings}>
            {alto && alto.map((item) => (
            <div className="card-position">
                <img className="card-image" src={item.images.small} alt="Pokemon Card"></img>
            </div>
            ))}
        </Slider>
    </div> 
    )

}

export default Carousel;