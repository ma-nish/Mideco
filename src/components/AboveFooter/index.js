import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import Signup from "../Signup";
import Login from "../Login";

const AboveFooter = () => {
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div className="container mb-3">
        <Link
          to="#signupModal"
          className="btn btn-primary"
          data-toggle="modal"
          onClick={() => {
            setNewUser(true);
            handleShow();
          }}
        >
          Sign up
        </Link>
        <Link
          to="#loginModal"
          className="btn btn-primary"
          data-toggle="modal"
          onClick={() => {
            setNewUser(false);
            handleShow();
          }}
        >
          Log in
        </Link>
        <Link
          to="#forgotpasswordModal"
          className="btn btn-primary"
          data-toggle="modal"
        >
          Forgot Password
        </Link>
        <Link to="#otpModal" className="btn btn-primary" data-toggle="modal">
          OTP
        </Link>

        <Link
          to="#changepasswordModal"
          className="btn btn-primary"
          data-toggle="modal"
        >
          Change Password
        </Link>
      </div>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Body style={{ padding: 0 }}>
          {newUser ? (
            <Signup closeModal={handleClose} setUser={setNewUser} />
          ) : (
            <Login closeModal={handleClose} setUser={setNewUser} />
          )}
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default AboveFooter;
