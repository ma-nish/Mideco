import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { login, socialLogin } from "../../apis";

const Login = ({ closeModal, setUser }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("+91");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (code && phone && password) {
      const payload = new FormData();

      payload.append("user_type", 2);
      payload.append("device_type", 3);
      payload.append("country_code", code);
      payload.append("mobile_number", phone);
      payload.append("password", password);

      const response = await login(payload);

      if (Number(response.errorCode) === 0) {
        enqueueSnackbar(response.errorMsg, { variant: "success" });
        closeModal();
      } else {
        enqueueSnackbar(response.errorMsg, { variant: "error" });
      }
    } else {
      enqueueSnackbar("Email & Password are required.", { variant: "error" });
    }
  };

  const responseGoogle = async (response) => {
    const { email, googleId, name } = response.profileObj;
    const payload = new FormData();

    payload.append("social_provider_type", 2);
    payload.append("social_provider_uid", googleId);
    payload.append("device_type", 3);
    payload.append("user_type", 2);
    payload.append("email", email);
    payload.append("name", name);

    const res = await socialLogin(payload);

    if (Number(res.errorCode) === 0) {
      enqueueSnackbar(res.errorMsg, { variant: "success" });
      closeModal();
    } else {
      enqueueSnackbar(res.errorMsg, { variant: "error" });
    }
  };

  const responseFacebook = async (response) => {
    const { id, name } = response;
    const payload = new FormData();

    payload.append("social_provider_type", 1);
    payload.append("social_provider_uid", id);
    payload.append("device_type", 3);
    payload.append("user_type", 2);
    payload.append("name", name)

    const res = await socialLogin(payload);

    if (Number(res.errorCode) === 0) {
      enqueueSnackbar(res.errorMsg, { variant: "success" });
      closeModal();
    } else {
      enqueueSnackbar(res.errorMsg, { variant: "error" });
    }
  };

  return (
    <div
      className="form-popup show"
      id="loginModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-modal="true"
    >
      <div
        className="modal-dialog modal-xl modal-dialog-centered"
        role="document"
      >
        <div className="modal-content ">
          <div className="modal-body ">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            >
              <span className="ti-close"></span>
            </button>
            <div className="row no-gutters justify-content-end">
              <div className="col-sm-8  col-md-6 form-box ">
                <form onSubmit={handleSubmit}>
                  <div className=" my-4">
                    <h4 className=" text-capitalize">Log In</h4>
                  </div>
                  <div className="form-group">
                    <div className="input-group ">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-mobile-alt"></i>
                        </span>
                      </div>
                      <div className="input-group-prepend select_div ">
                        <select
                          className="border-0"
                          name="code"
                          onChange={(e) => setCode(e.target.value)}
                        >
                          <option value="+91">+91</option>
                          <option value="+88">+88</option>
                          <option value="+66">+66</option>
                          <option value="+101">+101</option>
                        </select>
                      </div>
                      <input
                        type="tel"
                        placeholder="Enter Mobile Number"
                        className="form-control  bg-light"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* <!-- form-group -->  */}
                  {/* <!-- form-group -->  */}
                  <div className="form-group">
                    <div className="input-group	">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-lock"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        name="password"
                        id="login_txtPassword"
                        className="form-control"
                        placeholder="Enter Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="input-group-prepend">
                        <span
                          // onmouseup="invert_inPwd('#login_txtPassword')"
                          // onmousedown="invert_inText('#login_txtPassword')"
                          id="login_Pwd"
                          className="input-group-text text-dark small so_hide_pswrd fa fa-eye"
                        ></span>
                      </div>
                    </div>
                    <p className="text-center py-3">
                      <a
                        href="#forgotpasswordModal"
                        id="hide-loginModal"
                        data-toggle="modal"
                        className="font-weight-bold text-center"
                      >
                        Forgot Password
                      </a>
                    </p>
                  </div>

                  <div className="form-group mt-4 text-center">
                    <input
                      type="submit"
                      className="btn btn-primary btn-lg shadow-primary w-50 rounded-pill"
                      value="LOG IN"
                    />
                  </div>
                  {/* <!-- form-group -->   */}
                  <div className="form-group mt-4 text-center">
                    <FacebookLogin
                      appId="252149049220725"
                      fields="name,email,picture"
                      callback={responseFacebook}
                      render={(renderProps) => (
                        <img
                          className="img-fluid "
                          src="/assets/images/fb.png"
                          alt="img"
                          style={{ cursor: "pointer" }}
                          onClick={renderProps.onClick}
                        />
                      )}
                    />
                    <GoogleLogin
                      clientId="896855163139-jver5lvia4m5kru7vttq1cuqnkpq479a.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <img
                          className="img-fluid "
                          src="/assets/images/google.png"
                          alt="img"
                          style={{ cursor: "pointer" }}
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        />
                      )}
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>
                  <div className="form-group mb-0 text-center">
                    <Link to="/">
                      {" "}
                      Create an Account?{" "}
                      <span
                        className="text-dark-dark font-weight-bold"
                        onClick={() => setUser(true)}
                      >
                        Sign Up
                      </span>{" "}
                    </Link>
                  </div>
                  {/* <!-- form-group -->   */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
