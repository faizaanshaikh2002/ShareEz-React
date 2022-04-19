import React from "react";
import { useState } from "react";
// import axios from "axios";

const Encryption = () => {
  // const host = "https://share-ez-backend.herokuapp.com/";
  const host = "http://localhost:3002/";
  const fileUploadURL = `${host}api/files/encrypt`;
  const [FileState, SetFilestate] = useState(null);
  const [passwordState, setPasswordState] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    console.table(e.target.files[0]);
    SetFilestate(e.target.files[0]);
  };

  const handlePassChange = (e) => {
    setPasswordState(e.target.value);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", FileState);
    data.append("password", passwordState);
    fetch(
      fileUploadURL,
      { method: "POST", body: data },
      {
        // receive two parameter endpoint url ,form data
      }
    )
      .then((res) => {
        // then print response status
        return res.blob();
        // console.log(passwordState);
      })
      .then((blob) => {
        console.log(URL.createObjectURL(blob));
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = FileState.filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  };

  return (
    <>
      <div
        className="Maincontainer"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgb(37 40 44 / 89%)",
        }}
      >
        {/* <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "100%", width: "100%" }}
        >
          <div
            className="uploadContainer bg-danger"
            style={{ height: "20rem", width: "54rem" }}
          >
            <p>Select Pdf File</p>
          </div>
        </div> */}
        <div
          className="container d-flex justify-content-center align-items-center "
          style={{ height: "100%", width: "100%" }}
        >
          <div
            className="row rounded-3 p-3"
            style={{
              backgroundColor: "#25282c",
              color: "white",
              marginRight: "40px",
            }}
          >
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <form className="container-fluid" action="">
                <div className="row">
                  <div className="col-sm-6 mt-5 ">
                    <div className="wrapper">
                      <h2>Slect pdf file</h2>
                      <input
                        type="file"
                        accept="application/pdf"
                        name="myfile"
                        required
                        onChange={handleOnChange}
                      />
                      <button
                        className="btn btn-success mt-2"
                        onClick={handleOnClick}
                      >
                        Upload
                      </button>
                      <label htmlFor="pdf">
                        <i className="fa fa-paperclip fa-2x"></i>
                        <span></span>
                      </label>
                      <i className="fa fa-times-circle remove"></i>
                    </div>
                  </div>
                  <div className="col-sm-6 spacing">
                    <h3>Set password</h3>
                    <br />
                    New Password:
                    <br />
                    <input
                      type="password"
                      id="pass"
                      name="password"
                      onChange={handlePassChange}
                    />
                    <br />
                    <br />
                    Confirm Password:
                    <input type="password" name="confirm password" id="" />
                    <br />
                    <br />
                    <button
                      id="submit"
                      type="button"
                      className="btn btn-success"
                    >
                      Download
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Encryption;
