import React from "react";
// import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: props.mode === "dark" ? "grey" : "#8000ff",
        color: props.mode === "dark" ? "light" : "#211260ed",
      }}
    >
      <div className="container-fluid" color="#d14f4f">
        <a className="navbar-brand" href="/">
          TextUtils
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/">
              Features
            </a>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } my-2`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                } `}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.btnText}
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="btn-check"
                id="btn-check-outlined"
                autocomplete="off"
                onClick={props.blueMode}
              />
              <label
                className="btn btn-outline-primary  mx-3"
                htmlFor="btn-check-outlined"
              >
                Blue theme
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
