import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./style.css";

import Signup from "../Signup";
import Login from "../Login";

const Header = () => {
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <header id="top-header" className="site-header fixed-top">
        <nav className="navbar row no-gutters justify-content-between align-items-center navbar-expand-lg">
          <div className="col-md-4 col-5">
            <Link className="navbar-brand " to="/">
              <img
                className="img-fluid"
                src="/assets/images/logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <div
            className="col-md-4 order-md-3 col-7 text-right d-flex align-self-center justify-content-end"
            onClick={handleShow}
          >
            <ul className=" nav align-items-center ml-auto nav-btns">
              <li className="nav-item ">
                <Link
                  className="nav-link btn px-md-4 px-2 btn-light"
                  to="#signupModal"
                  data-toggle="modal"
                >
                  {" "}
                  <span className="ti-user"></span>{" "}
                  <span className="d-none d-md-inline-block">
                    Login / Signup
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
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

export default Header;
