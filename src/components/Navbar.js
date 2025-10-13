// import { useState } from "react"

import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        {/* <a className="navbar-brand" href="/">
          {props.title}
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="/">
                Home
              </a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
              {/* /<a className="nav-link" href="/">
                About
              </a> */}
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{width: "30px", height:"30px"}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{width: "30px", height:"30px"}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{width: "30px", height:"30px"}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{width: "30px", height:"30px"}}></div>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
            onClick={()=>{props.toggleMode(null)}}
          />
          <label
            className={`form-check-label text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            htmlFor="switchCheckDefault"
          >
            {props.toggleText}
          </label>
        </div>
      </div>
    </nav>
  );
}
