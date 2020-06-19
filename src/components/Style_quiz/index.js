import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const StyleQuiz = () => {
  return (
    <section className="home-quiz py-3 bg-xt-light ">
      <div className="container-fluid px-5">
        <div className="row justify-content-end">
          <div className="col-lg-6 d-none d-md-block col-md-4 ">
            <img
              className="img-fluid"
              src="assets/images/style-quiz-vecor.png"
              alt=" img"
            />
          </div>
          <div className="col-md-8 col-lg-6 text-md-right">
            <h3 className="text-uppercase"> style quiz </h3>
            <p className="p-sm">
              Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur
              adipisicing elit. Aperiam itatibus voluptate, asperiores
              repellendus consequuntur velit.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid px-md-0 py-4">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6">
            <div className="img-holder">
              <img
                className="img-fluid shadow-sm border-5"
                src="assets/images/bedroom.jpg"
                alt=" img"
              />
            </div>
          </div>
          <div className="col-xl-5  col-lg-6">
            <div className="px-5 px-md-4 py-4 py-lg-0">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                veniam optio id velit veritatis adipisci amet, quo alim eum
                nesciunt cum voluptatum iste nulla, ullam officia maxime at, nam
                consectetur enim fugit aliquam alias corporis! Vel, suscipit in.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                fuga explicabo voluptates tempora cumque ipsum dolorem labore
                eligendi, quasi iure et beatae sequi ut fugiat expedita
                reprehenderit repellendus dolorum odit!
              </p>
              <div className="py-md-3 py-2 py-xl-4 mb-xl-5">
                <h2 className="text-capitalize">Rustic style</h2>
              </div>
              <Link to="#" className="btn btn-primary btn-xl rounded-pill">
                Take Your Style Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleQuiz;
