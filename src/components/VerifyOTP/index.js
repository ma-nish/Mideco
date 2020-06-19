import React from "react";
import { Link } from "react-router-dom";

const VerifyOTP = () => {
  return (
    <div
      className="modal form-popup fade"
      id="otpModal"
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
                  <div className=" mb-4 text-center ">
                    <h4 className="text-uppercase">OTP Verification</h4>
                    <img
                      className="img-fluid my-3"
                      src="assets/images/refer-work.png"
                      alt=" img"
                    />
                    <p className="text-secondary">
                      Enter the verifivation code which we've sent on your
                      registered email address.
                    </p>
                  </div>
                  <div className="form-group ">
                    <div className="  partitioned">
                      <input
                        id="validationTooltipcodeBox2"
                        type="number"
                        maxlength="1"
                        onkeyup="onKeyUpEvent(2, event)"
                        onfocus="onFocusEvent(2)"
                        placeholder="0"
                      />
                      <input
                        id="validationTooltipcodeBox3"
                        type="number"
                        maxlength="1"
                        onkeyup="onKeyUpEvent(3, event)"
                        onfocus="onFocusEvent(3)"
                        placeholder="0"
                      />
                      <input
                        id="validationTooltipcodeBox4"
                        type="number"
                        maxlength="1"
                        onkeyup="onKeyUpEvent(4, event)"
                        onfocus="onFocusEvent(4)"
                        placeholder="0"
                      />
                      <input
                        id="validationTooltipcodeBox5"
                        type="number"
                        maxlength="1"
                        onkeyup="onKeyUpEvent(5, event)"
                        onfocus="onFocusEvent(5)"
                        placeholder="0"
                      />
                      <input
                        id="validationTooltipcodeBox6"
                        type="number"
                        maxlength="1"
                        onkeyup="onKeyUpEvent(6, event)"
                        onfocus="onFocusEvent(6)"
                        placeholder="0"
                      />
                      <input
                        id="validationTooltipcodeBox1"
                        type="number"
                        maxlength="1"
                        onkeyup="onKeyUpEvent(1, event)"
                        onfocus="onFocusEvent(1)"
                        placeholder="0"
                      />
                      <div className="invalid-tooltip otp-validate">
                        Please enter valid OTP.
                      </div>
                    </div>
                  </div>
                  {/* <!-- form-group --> */}
                  <div className="form-group mt-4 text-center">
                    <button
                      data-target="#changepasswordModal"
                      data-toggle="modal"
                      id="hide_otp-show_changepwd"
                      type="submit"
                      className="btn btn-primary btn-lg w-50 shadow-primary rounded-pill"
                    >
                      Verify
                    </button>
                  </div>
                  <div className="form-group text-center mt-4">
                    <p>
                      Did't get OTP?{" "}
                      <Link className="text-dark-dark font-weight-bold" to="#">
                        Resend
                      </Link>
                    </p>
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

export default VerifyOTP;
