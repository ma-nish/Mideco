import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const InteriorDesigners = () => {
  return (
    <section className="home-design py-5 half-bg right-bg">
      <div className="container-fluid px-5">
        <div className="row justify-content-end">
          <div className="col-md-6 text-right">
            <h3 className="text-uppercase"> Interior Designers </h3>
            <p className="p-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              itatibus voluptate, asperiores repellendus consequuntur velit.
            </p>
            <Link to="#" className="btn btn-link h6 ">
              View All
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12">
            <div className="js-products-slider">
              <div className="item">
                <div className="box">
                  <Link to="#" className="img-holder">
                    <img
                      className="img-fluid img-rounded  border-5"
                      src="https://rdgusa.com/img/gallery/2017_09_21_101903_40262600/thumb.jpg"
                      alt=" img"
                    />
                  </Link>
                  <div className="caption text-capitalize">
                    <Link to="#" className="h6">
                      Minimal{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <Link to="#" className="img-holder">
                    <img
                      className="img-fluid img-rounded  border-5"
                      src="https://rdgusa.com/img/gallery/2017_09_21_101903_40262600/thumb.jpg"
                      alt=" img"
                    />
                  </Link>
                  <div className="caption text-capitalize">
                    <Link to="#" className="h6">
                      boho{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <Link to="#" className="img-holder">
                    <img
                      className="img-fluid img-rounded  border-5"
                      src="https://rdgusa.com/img/gallery/2017_09_21_101903_40262600/thumb.jpg"
                      alt=" img"
                    />
                  </Link>
                  <div className="caption text-capitalize">
                    <Link to="#" className="h6">
                      preppy{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <Link to="#" className="img-holder">
                    <img
                      className="img-fluid img-rounded  border-5"
                      src="https://rdgusa.com/img/gallery/2017_09_21_101903_40262600/thumb.jpg"
                      alt=" img"
                    />
                  </Link>
                  <div className="caption text-capitalize">
                    <Link to="#" className="h6">
                      Minimal{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <Link to="#" className="img-holder">
                    <img
                      className="img-fluid img-rounded  border-5"
                      src="https://rdgusa.com/img/gallery/2017_09_21_101903_40262600/thumb.jpg"
                      alt=" img"
                    />
                  </Link>
                  <div className="caption text-capitalize">
                    <Link to="#" className="h6">
                      boho{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <Link to="#" className="img-holder">
                    <img
                      className="img-fluid img-rounded  border-5"
                      src="https://rdgusa.com/img/gallery/2017_09_21_101903_40262600/thumb.jpg"
                      alt=" img"
                    />
                  </Link>
                  <div className="caption text-capitalize">
                    <Link to="#" className="h6">
                      preppy{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorDesigners;
