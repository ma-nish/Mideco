import React from "react";

const ChangePassword = () => {
  return (
    <div
      className="modal form-popup fade"
      id="changepasswordModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-xl modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-body ">
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
                  <div className="mb-4 text-center ">
                    <h4 className="text-uppercase">Change Password</h4>
                    <img
                      className="img-fluid my-3"
                      src="assets/images/refer-work.png"
                      alt=" img"
                    />
                    <p className="text-secondary">
                      You your new password here.
                    </p>
                  </div>
                  <div className="form-group mb-4">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-lock"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        id="validationTooltipNewpassword"
                        minlength="8"
                        maxlength="20"
                        placeholder="New Password"
                        className="form-control border-0 bg-light"
                        required
                      />
                      <div className="invalid-tooltip">
                        Your new password must be between 8 and 20 characters.
                      </div>
                    </div>
                  </div>
                  {/* <!-- form-group --> */}
                  <div className="form-group mt-4 mb-4">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-lock"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        id="validationTooltipCnewpassword"
                        minlength="8"
                        maxlength="20"
                        placeholder="Confirm New Password"
                        className="form-control border-0 bg-light"
                        required
                      />
                    </div>
                  </div>
                  {/* <!-- form-group --> */}
                  <div className="form-group mt-4 text-center">
                    <input
                      type="submit"
                      className="btn btn-primary shadow-primary btn-lg w-50 rounded-pill"
                      value="Done"
                    />
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

export default ChangePassword;
