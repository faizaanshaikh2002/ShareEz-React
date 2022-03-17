import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ fontSize: "30px" }}>
            ShareEz
          </a>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/send">
                  Upload
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid pb-3">
          <a className="navbar-brand " href="/">
            {/* <img
              id="navbar-logo"
              src="static/images/file-sharing.png"
              alt="Logo"
            /> */}
            <img
              id="logo-img"
              src="https://see.fontimg.com/api/renderfont4/WyO0O/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzM1M0Q0QiIsInQiOjF9/U2hhcmVFeg/magic-owl-personal-use.png"
              alt="log-img"
              style={{ color: "white" }}
            />
          </a>
          <form className="d-flex">
            {/* <i className="far fa-user-circle text-primary"></i> */}
            <button
              type="button"
              id="Login"
              className="btn btn-success btn-lg ms-3"
            >
              LOGIN
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
