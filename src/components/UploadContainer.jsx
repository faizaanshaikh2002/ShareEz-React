import React from "react";
import { useState } from "react";
import "./UploadContainer.css";
import file from "./file.png";
import axios from "axios";
import copyIcon from "./copy-icon.svg";
// import Navbar from "./Navbar";

const UploadContainer = () => {
  // const host = "https://share-ez-backend.herokuapp.com/";
  const host = "http://localhost:3002/";
  const uploadURL = `${host}api/files`;
  const emailURL = `${host}api/files/send`;
  const [classNames, setclassNames] = useState("drop-zone");
  const [percent, setpercent] = useState(0);
  const fileInput = document.getElementsByTagName("input")[0];
  const maxAllowedSize = 5000 * 1024 * 1024;

  // const handleOnClick = () => {
  //   document.getElementsByTagName("input")[0].click();
  //   // fileInput.click();
  // };

  const handleOnDragOver = (e) => {
    e.preventDefault();
    if (!classNames.includes("dragged")) {
      setclassNames("drop-zone dragged");
    }
  };

  const handleDragLeave = () => {
    setclassNames("drop-zone");
  };

  const handleOnChange = (e) => {
    // uploadFile();
    e.preventDefault();
    const fileInput = document.querySelector("#fileInput");
    console.log(fileInput);
    const files = e.target.files;
    console.table(files);
    if (files.length) {
      // console.log(fileInput);
      fileInput.files = files;
      // console.log(fileInput.files);
      uploadFile();
    }
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    setclassNames("drop-zone");
    const files = e.dataTransfer.files;
    console.table(files);
    if (files.length) {
      // console.log(fileInput);
      fileInput.files = files;
      console.log(fileInput.files);
      uploadFile();
    }
  };

  const handleOnCopy = (e) => {
    const fileUrlInput = document.querySelector("#fileURL");
    fileUrlInput.select();
    navigator.clipboard.writeText(fileUrlInput.value);
    showToast("Link copied to clipboard");
    // fileUrlInput.value = "";
    // console.log(fileUrlInput);
    // console.log("value is", fileUrlInput.value);
  };

  const handleOnSubmit = (e) => {
    const sharingContainer = document.querySelector(".sharing-container");
    const emailForm = document.querySelector("#emailForm");
    e.preventDefault();
    console.log("Submitted");
    const fileUrlInput = document.querySelector("#fileURL");
    const url = fileUrlInput.value;
    const formData = {
      uuid: url.split("/").splice(-1, 1)[0],
      emailTo: emailForm.elements["to-email"].value,
      emailFrom: emailForm.elements["from-email"].value,
    };

    emailForm[2].setAttribute("disabled", "true");
    emailForm.elements["to-email"].value = "";
    emailForm.elements["from-email"].value = "";
    console.table(formData);

    axios
      .post(emailURL, formData)
      .then(function ({ data }) {
        console.log(data);
        if (data.success) {
          sharingContainer.style.display = "none";
          showToast("Email Sent");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const uploadFile = () => {
    const progressContainer = document.querySelector(".progress-container");
    const fileInput = document.querySelector("#fileInput");
    // console.log(progressContainer);
    if (fileInput.files.length > 1) {
      fileInput.value = "";
      showToast("Only upload 1 File");
      return;
    }

    const file = fileInput.files[0];

    if (file.size > maxAllowedSize) {
      showToast("Can't upload more than 5GB");
      fileInput.value = "";
      return;
    }

    progressContainer.style.display = "block";

    const formData = new FormData();
    formData.append("myfile", file);

    const config = {
      onUploadProgress: updateProgress,
    };

    axios.post(uploadURL, formData, config).then(({ data }) => {
      // console.log(response);
      onUploadSuccess(data);
    });
  };

  const updateProgress = (e) => {
    const bgProgress = document.querySelector(".bg-progress");
    const progressBar = document.querySelector(".progress-bar");

    const percentCompleted = Math.floor((e.loaded * 100) / e.total);
    console.log(percentCompleted);
    bgProgress.style.width = `${percentCompleted}%`;
    progressBar.style.transform = `scaleX(${percentCompleted / 100})`;
    setpercent(percentCompleted);
  };

  const onUploadSuccess = ({ file }) => {
    const fileInput = document.querySelector("#fileInput");
    const emailForm = document.querySelector("#emailForm");
    const fileUrlInput = document.querySelector("#fileURL");
    const bgProgress = document.querySelector(".bg-progress");
    const progressBar = document.querySelector(".progress-bar");
    const sharingContainer = document.querySelector(".sharing-container");
    const progressContainer = document.querySelector(".progress-container");

    // Resetting progress Bar
    progressBar.style.transform = "scaleX(0)";
    bgProgress.style.width = "0%";
    setpercent(0);

    fileInput.value = "";
    emailForm[2].removeAttribute("disabled");
    progressContainer.style.display = "none";
    sharingContainer.style.display = "block";
    fileUrlInput.value = `${file}`;
  };

  let toastTimer;
  const showToast = (msg) => {
    const toast = document.querySelector(".toast");
    toast.innerText = msg;
    toast.style.display = "block";
    toast.style.transform = "translate(-50%,0)";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.style.transform = "translate(-50%,60px)";
      toast.style.display = "none";
    }, 2000);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="body">
        <section className="upload-container">
          <div
            className={classNames}
            onDragOver={handleOnDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleOnDrop}
          >
            <div className="icon-container">
              <img
                src={file}
                alt="file icon"
                className="center"
                draggable="false"
              />
              <img
                src={file}
                alt="file icon"
                className="left"
                draggable="false"
              />
              <img
                src={file}
                alt="file icon"
                className="right"
                draggable="false"
              />
            </div>
            <input type="file" id="fileInput" onChange={handleOnChange} />
            <div className="title" style={{ fontWeight: "645" }}>
              Drop your Files here or,{" "}
              <label htmlFor="fileInput" className="browsebtn">
                browse
              </label>
            </div>
          </div>
          <div className="progress-container">
            <div className="bg-progress"></div>
            <div className="inner-container">
              <div className="title">Uploading...</div>
              <div className="percent-container">
                <span id="percent">{percent}</span>%
              </div>
              <div className="progress-bar"></div>
            </div>
          </div>
          <div className="sharing-container">
            <p className="expire">Link Expires in 24 hours</p>
            <div className="input-container">
              <input type="text" id="fileURL" readOnly />
              <img
                src={copyIcon}
                alt="copyIcon"
                id="copyBtn"
                onClick={handleOnCopy}
              />
            </div>
            <p>Or Send Via Email</p>
            <div className="email-container">
              <form id="emailForm" onSubmit={handleOnSubmit}>
                <div className="field">
                  <label htmlFor="sender">Your email</label>
                  <input type="email" required name="from-email" id="sender" />
                </div>
                <div className="field">
                  <label htmlFor="receiver">Receiver's email</label>
                  <input type="email" required name="to-email" id="receiver" />
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </section>
        <div className="toast">Hi there</div>
        {/* <div className="upload-illustration"></div> */}
        <div className="container">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_4wledibb.json"
            background="transparent"
            speed="1"
            style={{
              width: "600px",
              height: "400px",
              filter: "hue-rotate(188deg)",
            }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </>
  );
};

export default UploadContainer;
