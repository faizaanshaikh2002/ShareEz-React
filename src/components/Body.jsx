import React from "react";
// import dark from "./dark.jpg";
import "./Body.css";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="color">
      {/* Heading Section */}
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
      {/* Basic Paragraph */}
      <div className="container mt-5 mb-5">
        <h1 className="mt-5 text-center sudo-h1">Keep your task simple.</h1>
        <p className="text-center">
          File share keep your transfer simple and faster.
          <br />
          we have simple UI and better user experience.
        </p>
      </div>
      {/* Divs section */}
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
              <Link to="/send" style={{ color: "#00f382" }}>
                Send File Now →
              </Link>
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
              <iframe
                src="https://giphy.com/embed/5k1Wu87CzkDfrx0Xwj"
                title="send file gif"
                width="480"
                height="270"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd div */}
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
              <iframe
                title="Secure pdf gif"
                src="https://giphy.com/embed/3og0IuymsB9sy0C2Vq"
                width="480"
                height="360"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
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
              <Link to="/encrypt" style={{ color: "#00f382" }}>
                Encrypt your pdf →
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* 3rd div */}
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
              <iframe
                title="save doc gif"
                src="https://giphy.com/embed/NPXkCN2FutVO1Nt4P9"
                width="480"
                height="270"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
