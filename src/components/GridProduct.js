import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/list/1.png'; 
import image2 from '../assets/list/2.png'; 
import image3 from '../assets/list/3.png'; 
import image4 from '../assets/list/4.png'; 
import image5 from '../assets/list/5.png'; 
import image6 from '../assets/list/6.png'; 
import image7 from '../assets/list/7.png';
import image8 from '../assets/list/8.png'; 
import image9 from '../assets/list/9.png';   

const carouselData = [
    { imageUrl: image1, title: "Pizza", price: "120" },
    { imageUrl: image2, title: "Healthy", price: "130"},
    { imageUrl: image3, title: "Vegetarian", price: "120"},
    { imageUrl: image4, title: "Chinese", price: "111" },
    { imageUrl: image5, title: "Hamburgers", price: "958" },
    { imageUrl: image6, title: "Dessert", price: "56" },
    { imageUrl: image7, title: "Chicken", price: "40" },
    { imageUrl: image8, title: "Indian", price: "156" },
    { imageUrl: image9, title: "American", price: "156" },
];

const GridProduct = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className='slider-container grid-product-sldier h-0'>
            <Slider {...settings}>
                {carouselData.map((item, index) => (
                    <div key={index} className="osahan-category-item">
                        <a href="#">
                        <img className="img-fluid" src={item.imageUrl} alt={item.title} />
                        <h6>{item.title}</h6>
                        <p>{item.price}</p>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default GridProduct;
