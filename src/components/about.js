import React from 'react';

export const About = () => {
    return (
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-4">About Us</h2>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet mauris in nunc dapibus tempus nec eget quam. Suspendisse fringilla ipsum vitae purus interdum, non consequat magna vulputate. Vivamus ullamcorper mattis aliquam. Ut aliquet vitae lacus nec egestas.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet mauris in nunc dapibus tempus nec eget quam. Suspendisse fringilla ipsum vitae purus interdum, non consequat magna vulputate.</p>
            </div>
            <div className="col-lg-6">
              <img src="https://theomnibuzz.com/wp-content/uploads/2020/12/react-js-1_orig.png" alt="About" className="img-fluid rounded" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Our Mission</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet mauris in nunc dapibus tempus nec eget quam.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Our Vision</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet mauris in nunc dapibus tempus nec eget quam.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Our Values</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet mauris in nunc dapibus tempus nec eget quam.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};
