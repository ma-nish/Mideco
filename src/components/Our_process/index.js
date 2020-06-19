import React from "react";
import "./style.css";

const OurProcess = () => {
  return (
    <section className="home-process pt-4 pb-3 bg-dr-light ">
      <div className="container-fluid px-5">
        <div className="row ">
          <div className="col-md-6">
            <h3 className="text-uppercase"> our process </h3>
            <p className="p-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              itatibus voluptate, asperiores repellendus consequuntur velit.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 half-bg half-bg-white left-bg py-4">
        <div className="row no-gutters align-items-center">
          <div className="col-md-6">
            <div className="px-5 py-md-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                veniam optio id velit veritatis adipisci amet, quo aliquam
                incidunt dolorem voluptatibus officiis enim quas placeat
                asperiores cum olorem labore eligendi, quasi iure et beatae
                sequi ut fugiat expedita reprehenderit repellendus dolorum odit!
              </p>
              <p>
                Lorem ipsum dolor sit ametur adipisicing elit. Vitae veniam
                optio id velit veritatis adipisc icin consectetur adipisicing
                elit. Quidem fuga explicabo voluptates tempora cumque ipsum
                dolorem labore eligendi, quasi iure et beatae sequi ut fugiat
                expedita reprehenderit repellendus dolorum odit!
              </p>
              <ul className="mt-4">
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisdolor sit, amet
                  consectetur adipisicing elit.{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisici ngdolor sit,
                  amet consectetur adipis elit.{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-holder">
              <img
                className="img-fluid shadow-primary img-rounded  border-5 round-right-0"
                src="assets/images/bedroom.jpg"
                alt=" img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
