import React from "react";
import dark from "./dark.jpg";

const Body = () => {
  return (
    <>
      <div
        className="container-fluid "
        style={{
          backgroundColor: "rgb(37, 40, 44)",
          color: "white",
        }}
      >
        <div
          className="row d-flex mx-auto align-items-center"
          style={{ height: "90vh" }}
        >
          <div className="col col-md-7 px-5 order-2 order-sm-1">
            <h1 className="row " style={{ fontSize: "55px" }}>
              We transfer file fast,secure and easy.
            </h1>
            <p className="row">
              Best platform to transfer the file with fast and in the securily
              manner.
            </p>
            <div className="row d-flex gap-3">
              <button className="btn btn-primary col col-md-3">
                Upload File
              </button>
              <button className="btn btn-success col col-md-3">
                Share File
              </button>
            </div>
          </div>

          <div className="col col-md-5 d-flex order-1 order-sm-2">
            <div
              className="imagDiv"
              style={{ height: "300px", width: "350px" }}
            >
              <img
                src={dark}
                alt=""
                style={{ height: "inherit", width: "inherit" }}
              />
            </div>
          </div>
        </div>

        <div
          className="row d-flex mx-auto align-items-center"
          style={{ height: "85vh" }}
        >
          <div className="col col-md-7 px-5 order-1 ">
            <h1 className="row" style={{ fontSize: "55px" }}>
              We transfer file fast,secure and easy.
            </h1>
            <p className="row">
              Best platform to transfer the file with fast and in the securily
              manner.
            </p>
            <div className="row d-flex gap-3">
              <button className="btn btn-primary col-3">Upload File</button>
              <button className="btn btn-success col-3">Share File</button>
            </div>
          </div>

          <div className="col col-md-5 d-flex">
            <div
              className="imagDiv"
              style={{ height: "300px", width: "400px" }}
            >
              <img
                src={dark}
                alt=""
                style={{ height: "inherit", width: "inherit" }}
              />
            </div>
          </div>
        </div>

        <div
          className="row d-flex mx-auto align-items-center"
          style={{ height: "85vh" }}
        >
          <div className="col col-md-7 px-5">
            <h1 className="row" style={{ fontSize: "55px" }}>
              We transfer file fast,secure and easy.
            </h1>
            <p className="row">
              Best platform to transfer the file with fast and in the securily
              manner.
            </p>
            <div className="row d-flex gap-3">
              <button className="btn btn-primary col-3">Upload File</button>
              <button className="btn btn-success col-3">Share File</button>
            </div>
          </div>

          <div className="col col-md-5 d-flex">
            <div
              className="imagDiv"
              style={{ height: "300px", width: "400px" }}
            >
              <img
                src={dark}
                alt=""
                style={{ height: "inherit", width: "inherit" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
