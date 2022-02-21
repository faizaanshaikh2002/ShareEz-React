import React from "react";
import { useState } from "react";
import "./UploadContainer.css";
import file from "./file.png";
import axios from "axios";
import copyIcon from "./copy-icon.svg";

const UploadContainer = () => {
  const host = "https://innshare.herokuapp.com";
  const uploadURL = `${host}/api/files`;
  const [classNames, setclassNames] = useState("drop-zone");
  const [percent, setpercent] = useState(0);
  const fileInput = document.getElementsByTagName("input")[0];

  const handleOnClick = () => {
    document.getElementsByTagName("input")[0].click();
    // fileInput.click();
  };

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
    const fileInput = document.getElementsByTagName("input")[0];
    const files = e.target.files;
    console.table(files);
    if (files.length) {
      console.log(fileInput);
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

  const uploadFile = () => {
    const progressContainer = document.querySelector(".progress-container");
    progressContainer.style.display = "block";
    const fileInput = document.getElementsByTagName("input")[0];
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("myfile", file);

    const config = {
      onUploadProgress: updateProgress,
    };

    axios.post(uploadURL, formData, config).then(({ data }) => {
      // console.log(response);
      showLink(data);
    });
  };

  const updateProgress = (e) => {
    const bgProgress = document.querySelector(".bg-progress");
    const progressBar = document.querySelector(".progress-bar");

    const percentCompleted = Math.floor((e.loaded * 100) / e.total);
    // console.log(percentCompleted);
    bgProgress.style.width = `${percentCompleted}%`;
    progressBar.style.transform = `scaleX(${percentCompleted / 100})`;
    setpercent(percentCompleted);
  };

  const showLink = ({ file }) => {
    const bgProgress = document.querySelector(".bg-progress");
    const progressBar = document.querySelector(".progress-bar");
    progressBar.style.transform = "scaleX(0)";
    bgProgress.style.width = "0%";
    const progressContainer = document.querySelector(".progress-container");
    console.log(file);
    progressContainer.style.display = "none";
  };

  return (
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
            <span className="browsebtn" onClick={handleOnClick}>
              browse
            </span>
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
            <input
              type="text"
              id="fileURL"
              readOnly
              value={
                "https://innshare.herokuapp.com/files/47b877e2-d11b-47ba-94c1-9a20e4401e89"
              }
            />
            <img src={copyIcon} alt="copyIcon" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadContainer;
