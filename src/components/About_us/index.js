import React from "react";
import "./style.css";

const AboutUs = () => {
  return (
    <section className="home-about py-5 bg-sm-light">
      <div className="container-fluid px-md-0 py-4">
        <div className="row">
          <div className="col-md-8 col-lg-6">
            <div className="pl-md-5 ">
              <div className="mb-4">
                <h3 className="text-uppercase"> About us </h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur dolor sit amet
                  consectetur adipisicing elit. Aperiam itatibus voluptate,
                  asperiores repellendus consequuntur velit.
                </p>
              </div>
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
            </div>
          </div>
          <div className="col-md-4 col-lg-6 text-right">
            <div className="img-holder">
              <img
                className="img-fluid "
                src="assets/images/about-us-vector.png"
                alt=" img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
