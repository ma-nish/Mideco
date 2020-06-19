import React from "react";
import "./style.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works bg-xt-light pt-4 pb-3">
      <div className="container-fluid px-5">
        <div className="row no-gutters justify-content-between">
          <div className="col-xl-9 col-md-10">
            <h3 className="text-uppercase"> How it works </h3>
            <p className="p-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              doloribus architecto corporis voluptatibus nihil recusandae cumque
              vel quibusdam culpa ipsam saepe ullam odit rerum necessitatibus
              voluptate, asperiores repellendus consequuntur velit.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- container-fluid --> */}
      <div className="container-fluid bg-sm-light py-3">
        <div className="row justify-content-between">
          <div className=" col-lg-2 d-none d-lg-block left-img" />{" "}
        </div>
        {/* <!--col  --> */}
        <div className=" col-lg-10">
          <div className="row">
            <div className="col-md-6 ">
              <div className="work-item d-flex align-items-center">
                <div className="col-4 col-sm-5">
                  <img
                    className="img-fluid"
                    src="assets/images/create-work.png"
                    alt="img"
                  />
                </div>
                <div className="col-8 col-sm-7">
                  <h6>create your account</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, cum iusto quae
                  </p>
                </div>
              </div>
              {/* <!--item  --> */}
            </div>
            {/* <!--col  --> */}
            <div className="col-md-6 ">
              <div className="work-item d-flex align-items-center">
                <div className="col-4 col-sm-5">
                  <img
                    className="img-fluid"
                    src="assets/images/apply-work.png"
                    alt="img"
                  />
                </div>
                <div className="col-8 col-sm-7">
                  <h6>apply filters</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, cum iusto quae
                  </p>
                </div>
              </div>
              {/* <!--item  --> */}
            </div>
            {/* <!--col  --> */}
            <div className="col-md-6 ">
              <div className="work-item d-flex align-items-center">
                <div className="col-4 col-sm-5">
                  <img
                    className="img-fluid"
                    src="assets/images/style-work.png"
                    alt="img"
                  />
                </div>
                <div className="col-8 col-sm-7">
                  <h6>style quiz</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, cum iusto quae
                  </p>
                </div>
              </div>
              {/* <!--item  --> */}
            </div>
            {/* <!--col  --> */}
            <div className="col-md-6 ">
              <div className="work-item d-flex align-items-center">
                <div className="col-4 col-sm-5">
                  <img
                    className="img-fluid"
                    src="assets/images/refer-work.png"
                    alt="img"
                  />
                </div>
                <div className="col-8 col-sm-7">
                  <h6>refer & earn</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, cum iusto quae
                  </p>
                </div>
              </div>
              {/* <!--item  --> */}
            </div>
            {/* <!--col  --> */}
          </div>
        </div>
        {/* <!--col  --> */}
      </div>
      {/* </div> 	  */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff0f0"
          fillOpacity="1"
          d="M0,256L80,261.3C160,267,320,277,480,245.3C640,213,800,139,960,117.3C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>
    </section>
  );
};

export default HowItWorks;
