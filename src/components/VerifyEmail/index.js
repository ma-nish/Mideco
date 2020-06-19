import React from "react";

const VerifyEmail = () => {
  return (
    <div
      className="modal form-popup fade"
      id="forgotpasswordModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-xl modal-dialog-centered"
        role="document"
      >
        <div className="modal-content   ">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span className="ti-close"></span>
            </button>
            <div className="row no-gutters justify-content-end">
              <div className="col-sm-8  col-md-6 form-box ">
                <form action="" novalidate>
                  <div className="main-heading  text-center">
                    <h4 className="text-uppercase">Forgot Password</h4>
                    <img
                      className="img-fluid my-3"
                      src="assets/images/refer-work.png"
                      alt=" img"
                    />
                    <p className="text-secondary">
                      Enter your registered email address to get a verification
                      code.
                    </p>
                  </div>
                  <div className="form-group ">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-envelope"></i>
                        </span>
                      </div>
                      <input
                        type="email"
                        id=""
                        placeholder="Email Address"
                        className="form-control border-0 bg-light"
                        required
                      />
                    </div>
                  </div>
                  {/* <!-- form-group --> */}
                  <div className="form-group mt-4 text-center">
                    <button
                      data-target="#otpModal"
                      data-toggle="modal"
                      id="hide_fgt-pwd-show_otp"
                      type="submit"
                      className="btn btn-primary btn-lg w-50 shadow-primary rounded-pill"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
