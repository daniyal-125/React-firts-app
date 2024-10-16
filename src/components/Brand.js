import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/list/1.png'; 
import image2 from '../assets/list/2.png'; 
import image3 from '../assets/list/3.png'; 
import image4 from '../assets/list/4.png'; 

const carouselData = [
    { imageUrl: image1, title: "Bite Me Sandwiches", subtitle: "North Indian • American • Pure veg", tag:"Promoted", review:"3.1 (300+)", time:"20–25 min", rupees:"$500 FOR TWO" },
    { imageUrl: image2, title: "The osahan Restaurant", subtitle: "North Indian • American • Pure veg", tag:"Promoted", review:"3.1 (300+)", time:"20–25 min", rupees:"$500 FOR TWO"},
    { imageUrl: image3, title: "Polo Lounge", subtitle: "North Indian • American • Pure veg", tag:"Promoted", review:"3.1 (300+)", time:"20–25 min", rupees:"$500 FOR TWO"},
    { imageUrl: image4, title: "World Famous", subtitle: "North Indian • American • Pure veg", tag:"Promoted", review:"3.1 (300+)" , time:"20–25 min", rupees:"$500 FOR TWO"},
    
];

const Brand = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
    };

    return (
        <div className='slider-container brand-slider h-0'>
            <div className="section-header text-center">
                <h2>Popular Brands</h2>
                <p>Top restaurants, cafes, pubs, and bars in Ludhiana, based on trends</p>
                <span className="line"></span>
                </div>
            <Slider {...settings}>
                {carouselData.map((item, index) => (
                    <div key={index} className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                        <div className="list-card-image">
                        <div className="star position-absolute">
                        <span className="badge badge-success"><i className="icofont-star"></i> {item.review}</span></div>
                        <div className="member-plan position-absolute"><span className="badge badge-dark" >{item.tag}</span></div>
                        <img className="img-fluid" src={item.imageUrl} alt={item.title} />
                      </div>
                      <div className="p-3 position-relative">
                      <div className="list-card-body">
                        <h6 className="mb-1">
                        <a className="text-black" href="#">{item.title}</a>
                        </h6>
                        <p className="text-gray mb-3 fs-13px">{item.subtitle}</p>
                        <p className="text-gray mb-3 time d-flex align-items-center justify-content-between">
                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">{item.time}</span><span className="float-right text-black-50">{item.rupees}</span>
                        </p>
                        <div className="list-card-badge"><span className="badge badge-success">OFFER</span> <small>65% off | Use Coupon OSAHAN50</small></div>
                        </div>
                      </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Brand;
