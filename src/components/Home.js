import React from 'react';
import StaticSelectDropdown from './StaticSelectDropdown';
import CustomInput from './CustomInput';



const Home = () => {
  return (
    <section className="pt-5 pb-5 homepage-search-block position-relative">
      <div className="container">
        <div className="row align-items-center">
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
             <h6 className="mt-4 text-shadow font-weight-normal">E.g. Beverages, Pizzas, Chinese, Bakery, Indian...</h6>
       
          </div>
        </div>
      </div>
    </section>
  )
  
};

export default Home;