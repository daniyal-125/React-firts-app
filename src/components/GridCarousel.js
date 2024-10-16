import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/slider.png'; // Adjust path as necessary
import image2 from '../assets/slider1.png';   // Adjust path as necessary

const carouselData = [
    { imageUrl: image1, title: "Spaghetti Carbonara" },
    { imageUrl: image2, title: "Healthy Waffles" },
];

const GridCarousel = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className='slider-container'>
            <Slider {...settings}>
                {carouselData.map((item, index) => (
                    <div key={index}>
                        <img src={item.imageUrl} alt={item.title} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default GridCarousel;
