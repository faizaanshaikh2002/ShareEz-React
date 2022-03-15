import React from "react";

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid pb-3">
          <a className="navbar-brand">ShareEz</a>
          <form className="d-flex">
            <i className="far fa-user-circle text-primary"></i>
            <button
              type="button"
              id="Login"
              className="btn btn-primary btn-lg ms-3"
            >
              LOGIN
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Home;
