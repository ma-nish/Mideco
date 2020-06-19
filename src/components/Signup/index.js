import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";

import { signup } from "../../apis";

const Signup = ({ closeModal, setUser }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [agree, setAgree] = useState(false);
  const [image, setImage] = useState("");
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    code: "+91",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validate()) {
      const payload = new FormData();
      payload.append("first_name", state.firstName);
      payload.append("last_name", state.lastName);
      payload.append("email", state.email);
      payload.append("password", state.password);
      payload.append("device_type", 3);
      payload.append("user_type", 2);
      payload.append("country_code", state.code);
      payload.append("mobile_number", state.phone);

      if (image) {
        payload.append("profile_pic", image);
      }

      const response = await signup(payload);

      if (Number(response.errorCode) === 0) {
        enqueueSnackbar(response.errorMsg, { variant: "success" });
        closeModal();
      } else {
        enqueueSnackbar(response.errorMsg, { variant: "error" });
      }
    } else {
      enqueueSnackbar("All fields are required.", { variant: "error" });
    }
  };

  const validate = () => {
    let isValid = true;

    if (!state.firstName) {
      isValid = false;
    }

    if (!state.lastName) {
      isValid = false;
    }

    if (!state.email) {
      isValid = false;
    }

    if (!state.password) {
      isValid = false;
    }

    if (!state.phone) {
      isValid = false;
    }

    if (!state.code) {
      isValid = false;
    }

    if (!agree) {
      isValid = false;
    }

    return isValid;
  };

  const handleUploadPic = (event) => {
    const file = event.target.files[0];
    if (file.type.split("/")[0] !== "image") {
      console.log("event.target.files[0]", event.target.files[0]);
    } else {
      setImage(
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
    }
  };

  return (
    <Fragment>
      <div
        className="form-popup show"
        id="signupModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-modal="true"
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
                datadismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <span className="ti-close"></span>
              </button>
              <div className="row no-gutters justify-content-end">
                <div className="col-sm-8  col-md-6 form-box col-xl-6">
                  <form className="needs-validation" onSubmit={handleSubmit}>
                    <h4 className=" mb-3">Sign Up</h4>
                    <div className="avatar-upload">
                      <div className="avatar-edit">
                        <input
                          type="file"
                          id="imageUpload"
                          accept=".png, .jpg, .jpeg"
                          name="profilePic"
                          onChange={handleUploadPic}
                        />
                        <label htmlFor="imageUpload">
                          <i className="fas fa-camera"> </i>
                        </label>
                      </div>
                      <div className="avatar-preview">
                        <div
                          id="imagePreview"
                          style={{
                            backgroundImage: image
                              ? `url(${image.preview})`
                              : "url('/assets/images/avatar.png')",
                          }}
                        ></div>
                      </div>
                    </div>
                    {/* <!-- avtar --> */}
                    {/* <!-- form-group -->  */}
                    <div className="form-group">
                      <div className="input-group	">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          placeholder="Enter First Name"
                          className="form-control  bg-light"
                          name="firstName"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* <!-- form-group -->  */}
                    <div className="form-group">
                      <div className="input-group	">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          id=""
                          placeholder="Enter Last Name"
                          className="form-control  bg-light"
                          name="lastName"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-envelope"></i>
                          </span>
                        </div>
                        <input
                          type="email"
                          placeholder="Enter Email Address"
                          className="form-control  bg-light"
                          name="email"
                          required
                          onChange={handleChange}
                        />
                      </div>
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
                            onChange={handleChange}
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
                          name="phone"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* <!-- form-group -->    */}
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
                          id="sg_txtPassword"
                          className="form-control"
                          placeholder="Enter Password"
                          required
                          onChange={handleChange}
                        />
                        <div className="input-group-prepend">
                          <span
                            id="reg_Pwd"
                            className="input-group-text text-dark small so_hide_pswrd fa fa-eye"
                          ></span>
                        </div>
                      </div>
                    </div>
                    {/* <!-- form-group -->  */}
                    <div className="form-group text-center ">
                      <div className="custom-control custom-checkbox mr-sm-2">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customControlAutosizing"
                          onChange={() => setAgree(!agree)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customControlAutosizing"
                        >
                          <small>
                            I agree to{" "}
                            <Link className="text-dark" to="/" target="_blank">
                              Terms &Conditions
                            </Link>{" "}
                            and{" "}
                            <Link className="text-dark" to="/" target="_blank">
                              privacy policy
                            </Link>
                          </small>{" "}
                        </label>
                      </div>
                    </div>
                    {/* <!-- form-group -->  */}

                    <div className="form-group my-4 text-center">
                      <input
                        type="submit"
                        className="btn btn-primary btn-lg shadow-primary w-50 rounded-pill"
                        value="SIGN UP"
                      />
                    </div>

                    <div className="form-group mb-0 text-center">
                      <Link
                        to="/"
                        id="hide-signup"
                        datatoggle="modal"
                        className=""
                      >
                        {" "}
                        Already Have an Account?{" "}
                        <span
                          className="font-weight-bold"
                          onClick={() => setUser(false)}
                        >
                          Login
                        </span>
                      </Link>
                    </div>
                    {/* <!-- form-group -->  */}
                    {/* </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
