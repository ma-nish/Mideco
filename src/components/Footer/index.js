import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="position-relative ">
      <section className="footer d-flex justify-content-center">
        <div className="container-fluid px-4 px-lg-5">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-md-7">
              <div className="textwidget">
                <h4 className="widget-title mb-2 mt-3">Support</h4>
                <ul className="nav ">
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Home{" "}
                    </Link>{" "}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      How it works
                    </Link>{" "}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Service & products
                    </Link>{" "}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      our process
                    </Link>{" "}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      about us
                    </Link>{" "}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      help
                    </Link>{" "}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      FAQs
                    </Link>{" "}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      contact us
                    </Link>{" "}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      terms & conditions
                    </Link>{" "}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      privacy policy
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- /col -->    */}
            <div className="col-lg-4 col-md-5">
              <div className="textwidget ">
                <h4 className="widget-title mb-2 mt-3">Follow us</h4>
                <div className="social-icons social-links  mb-3">
                  <Link
                    to="https://www.facebook.com/"
                    target="_blank"
                    className="facebook"
                  >
                    <span className="fab fa-facebook-f"></span>
                  </Link>
                  <Link
                    to="https://www.twitter.com/"
                    target="_blank"
                    className="twitter"
                  >
                    <span className="fab fa-twitter"></span>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/"
                    target="_blank"
                    className="linkedin"
                  >
                    <span className="fab fa-linkedin"></span>
                  </Link>
                  <Link
                    to="https://www.instagram.com/"
                    target="_blank"
                    className="instagram"
                  >
                    <span className="fab fa-instagram "></span>
                  </Link>
                  <Link
                    to="https://www.instagram.com/"
                    target="_blank"
                    className="youtube"
                  >
                    <span className="fab fa-youtube "></span>
                  </Link>
                </div>
                <p>To subscribe our newsletter</p>
                <form className="form-group position-relative">
                  <input
                    className="form-control bg-sm-light border-0 py-4 round round-xl form-control-lg"
                    type="search"
                    placeholder="Email Address"
                    aria-label="Search"
                  />
                  <button
                    className="btn rounded-pill btn-lg btn-primary "
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            {/* <!-- /col -->     */}
          </div>
          {/* <!-- /row -->    */}
        </div>
        {/* <!-- /container --> */}
      </section>
    </footer>
  );
};

export default Footer;
