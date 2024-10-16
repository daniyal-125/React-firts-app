import React from 'react';
import StaticSelectDropdown from './StaticSelectDropdown';
import CustomInput from './CustomInput';
import GridCarousel from './GridCarousel';
import GridProduct from './GridProduct';
import Brand from './Brand'
import Pro1 from '../assets/pro1.jpg';
import Pro2 from '../assets/2.jpg';
import Pro3 from '../assets/pro3.jpg';
import Pro4 from '../assets/pro4.jpg';


const Home = () => {
  return (
    <>
    <section className="pt-5 pb-5 homepage-search-block position-relative">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
             <div className="homepage-title">
              <h1 className="mb-2 font-weight-normal"><span className="font-weight-bold">Find Awesome Deals</span> in Australia</h1>
              <h5 className="mb-5 text-secondary font-weight-normal">Lists of top restaurants, cafes, pubs, and bars in Melbourne, based on trends</h5>
             </div>
             <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 form-group"><StaticSelectDropdown /></div>
              <div className="col-lg-7 col-md-7 col-sm-12 form-group">
                <CustomInput/>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 form-group">
              <a className="btn btn-primary btn-block  btn-gradient" href="/">Search</a>
              </div>
             </div>
             <h6 className="mt-5 text-shadow font-weight-normal">E.g. Beverages, Pizzas, Chinese, Bakery, Indian...</h6>
             <GridProduct/>
          </div>
          <div className="col-md-4">
            <div className="osahan-slider ps-4 pt-3"><GridCarousel /></div>
          </div>
        </div>
      </div>
    </section>
    <section className="section pt-5 pb-5 bg-white homepage-add-section">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-6">
          <div className="products-box">
            <a href="#">
              <img src={Pro1} alt="" className="img-fluid"/>
            </a>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="products-box">
            <a href="#">
              <img src={Pro2} alt="" className="img-fluid"/>
            </a>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="products-box">
            <a href="#">
              <img src={Pro3} alt="" className="img-fluid"/>
            </a>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="products-box">
            <a href="#">
              <img src={Pro4} alt="" className="img-fluid"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
    <section className="section pt-5 pb-5 products-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Brand />
          </div>
        </div>
      </div>
    </section>
    </>
  )
  
};

export default Home;