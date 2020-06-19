import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Furnitures = () => {
  return (
    <section className="home-products bg-sm-light py-5">
      <div className="container-fluid px-5 mb-4">
        <div className="row justify-content-between">
          <div className="col-md-6 col-9">
            <h3 className="text-uppercase"> newest furnitures </h3>
            <p className="p-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              itatibus voluptate, as Aperiam itatibus voluptate, asperiores
              repellendus consequuntur velit.
            </p>
          </div>
          <div className="col-md-6 col-3 text-right">
            <Link to="#" className="btn btn-link h6 ">
              View All
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-md-4">
            <div className="item">
              <div className="box p-3 p-lg-4 p-xl-5">
                <Link to="#" className="img-holder">
                  <img
                    className="img-fluid "
                    src="https://pluspng.com/img-png/furniture-png-furniture-png-image-png-image-1200.png"
                    alt=" img"
                  />
                </Link>
                <div className="caption">
                  <Link to="#" className="h6">
                    tuscuny half leather single seater sofa{" "}
                  </Link>
                  <div className="py-3 mt-2 d-block">
                    <span className="col-auto px-0 h6">
                      <i className="fas fa-rupee-sign"></i> 1999
                    </span>
                    <button className="btn float-right btn-primary rounded-pill">
                      Add to Cart
                    </button>
                  </div>
                </div>
                {/* <!--  caption --> */}
                <div className="off-wrap">45% off</div>
                <button className="c-icon wishlist-icon active"></button>
              </div>
            </div>
          </div>
          {/* <!--  col --> */}
          <div className="col-md-4">
            <div className="item">
              <div className="box p-3 p-lg-4 p-xl-5">
                <Link to="#" className="img-holder">
                  <img
                    className="img-fluid "
                    src="https://pluspng.com/img-png/furniture-png-furniture-png-image-png-image-1200.png"
                    alt=" img"
                  />
                </Link>
                <div className="caption">
                  <Link to="#" className="h6">
                    tuscuny half leather single seater sofa{" "}
                  </Link>
                  <div className="py-3 mt-2 d-block">
                    <span className="col-6 px-0 h6">
                      <i className="fas fa-rupee-sign"></i> 1999
                    </span>
                    <button className="btn float-right btn-primary rounded-pill">
                      Add to Cart
                    </button>
                  </div>
                </div>
                {/* <!--  caption --> */}
                <div className="off-wrap">45% off</div>
                <button className="c-icon wishlist-icon "></button>
              </div>
            </div>
          </div>
          {/* <!--  col --> */}
          <div className="col-md-4">
            <div className="item">
              <div className="box p-3 p-lg-4 p-xl-5">
                <Link to="#" className="img-holder">
                  <img
                    className="img-fluid "
                    src="https://pluspng.com/img-png/furniture-png-furniture-png-image-png-image-1200.png"
                    alt=" img"
                  />
                </Link>
                <div className="caption">
                  <Link to="#" className="h6">
                    tuscuny half leather single seater sofa{" "}
                  </Link>
                  <div className="py-3 mt-2 d-block">
                    <span className="col-6 px-0 h6">
                      <i className="fas fa-rupee-sign"></i> 1999
                    </span>
                    <button className="btn float-right btn-primary rounded-pill">
                      Add to Cart
                    </button>
                  </div>
                </div>
                {/* <!--  caption --> */}
                <div className="off-wrap">45% off</div>
                <button className="c-icon wishlist-icon active"></button>
              </div>
            </div>
          </div>
          {/* <!--  col --> */}
        </div>
      </div>
    </section>
  );
};

export default Furnitures;
