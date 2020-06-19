import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <section className="home-banner">
      <div className="mobile-menu">
        <div
          className=" mobile-menu-toggle d-md-none collapsed"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bar one"></span>
          <span className="bar two"></span>
          <span className="bar three"></span>
        </div>

        <nav id="sidebarMenu" className="sidebar d-md-flex collapse">
          <div className="align-self-center w-100 pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" to="#">
                  <span className="fa fa-home"></span>
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <span className="fas fa-bars"></span>
                  How it Works
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <span className="fas fa-chair"></span>
                  Furnitures
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <span className="far fa-comments"></span>
                  Style Quiz
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <span className="fas fa-recycle"></span>
                  Our Process
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <span className="fas fa-info-circle"></span>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>{" "}
      <div className="banner pt-5 border d-flex justify-content-center">
        <div className="caption container-fluid ">
          <div className="row ">
            <div className="col-10 col-md-9 col-lg-8">
              <h1>
                <span className="font-weight-light text-black">
                  We create our
                </span>
                <span className="heading-xl text-black">own</span>
                <span className="heading-xl mt-3 mt-md-4 text-primary font-weight-bold">
                  Sensuality
                </span>
              </h1>
            </div>
          </div>
          {/* <!-- / --> */}
        </div>
        {/* <!-- / --> */}
        <Link to="#" className="video-play">
          <div className="float-left">
            <i className="fas fa-3x fa-play-circle"></i>
          </div>
          <div className="pl-3 float-left">
            Watch
            <h6 className="font-weight-bold">Intro Video</h6>
          </div>
        </Link>
      </div>
      {/* <!-- /container --> */}
    </section>
  );
};

export default Home;
