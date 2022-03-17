import React from "react";
// import dark from "./dark.jpg";
import "./Body.css";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="color">
      {/* <div
        className="container-fluid "
        style={{
          backgroundColor: "rgb(37, 40, 44)",
          color: "white",
        }}
      >
        <div className="row d-flex mx-auto " style={{ height: "90vh" }}>
          <div className="col col-md-7 px-5 order-2 order-sm-1">
            <h1 className="row mt-5" style={{ fontSize: "55px" }}>
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
      </div> */}

      <div className="container home-1">
        <div className="row">
          <div className="col-sm-6" id="intro_data">
            <h1 id="heading" className="mt-5">
              We Transfer your files online, fast and privately
            </h1>
            <p id="heading-para text-start">
              Best platform to transfer the file fast and in the securily
              manner.
            </p>
            <button
              type="button"
              id="free_trial"
              className="btn btn-success btn-lg "
            >
              upload Multiple
            </button>
            &nbsp;
            <Link to="/send">
              <button
                type="button"
                id="share_button"
                className="btn btn-outline-success btn-lg"
              >
                Share Files Now{" "}
                <i
                  className="fa fa-paper-plane text-primary"
                  aria-hidden="true"
                ></i>
              </button>
            </Link>
          </div>
          <div className="col-sm-2" id="lottie-container">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_slipwrv0.json"
              background="transparent"
              speed="1"
              style={{
                width: "500px",
                height: "400px",
                filter: "hue-rotate(301deg)",
              }}
              loop
              autoplay
            ></lottie-player>
            {/* <img src={dark} alt="" /> */}
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <h1 className="mt-5 text-center sudo-h1">Keep your task simple.</h1>
        <p className="text-center">
          File share keep your transfer simple and faster.
          <br />
          we have simple UI and better user experience.
        </p>
      </div>
      <div className="container mt-5 pt-5">
        <div className="row mt-5">
          <div className="col-sm-6 mt-3">
            <h3>Send your file directly through link.</h3>
            <p>
              Send file directly to many people through a single link by
              uploading here.
            </p>
            <br />
            <br />
            <p>
              <a href="/send">Send File Now →</a>
            </p>
          </div>
          <div className="col-sm-6 mt-3 pe-3">
            <div
              style={{
                height: "0",
                paddingBottom: "56%",
                position: "relative",
              }}
            >
              {/* <iframe
                src="https://giphy.com/embed/6w5C6yoUlPeDwtZTx9"
                width="100%"
                height="100%"
                style="position:absolute"
                frameborder="0"
                className="giphy-embed"
                allowfullscreen=""
              ></iframe> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5">
        <div className="row mt-5">
          <div className="col-sm-6 mt-3 pe-3">
            <div
              style={{
                width: "100%",
                height: "0",
                paddingBottom: "56%",
                position: "relative",
              }}
            >
              {/* <iframe
                src="https://giphy.com/embed/xT8pe2M9qM4bidp4GY"
                width="100%"
                height="100%"
                style="position:absolute"
                frameborder="0"
                className="giphy-embed"
                allowfullscreen=""
              ></iframe> */}
            </div>
            <p>
              {/* <a href="https://giphy.com/gifs/gentlemanscholar-gentlemanscholar-upwork-equifax-security-xT8pe2M9qM4bidp4GY"></a> */}
            </p>
          </div>
          <div className="col-sm-6 mt-3">
            <h3>Secure your pdf through password.</h3>
            <p>
              Upload your file here and set the password of the pdf and confirm
              the password.And download the file with Encryption.
            </p>
            <br />
            <br />
            <p>
              <a href="/encrypt">Encrypt your pdf →</a>
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5">
        <div className="row mt-5">
          <div className="col-sm-6 mt-3">
            <h3>Save your Important document Here securily.</h3>
            <p>
              Upload your important document here and access your document
              through anywhere, by simply login to the website.
            </p>
            <br />
            <br />
            <p>
              <a href="/login">Upload your File →</a>
            </p>
          </div>
          <div className="col-sm-6 mt-3 pe-3">
            <div
              style={{
                width: "100%",
                height: "0",
                paddingBottom: "56%",
                position: "relative",
              }}
            >
              {/* <iframe
                src="https://giphy.com/embed/lo5HLcAPFSgTZNTpAn"
                width="100%"
                height="100%"
                style="position:absolute"
                frameborder="0"
                className="giphy-embed"
                allowfullscreen=""
              ></iframe> */}
            </div>
            <p>
              {/* <a href="https://giphy.com/gifs/SandiaLabs-computer-cyber-lo5HLcAPFSgTZNTpAn"></a> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
