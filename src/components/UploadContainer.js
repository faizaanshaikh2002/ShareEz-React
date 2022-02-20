import React from "react";
import { useState } from "react";
import "./UploadContainer.css";
import file from "./file.png";
import axios from "axios";

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
    const fileInput = document.getElementsByTagName("input")[0];
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("myfile", file);

    const updateProgress = (e) => {
      const bgProgress = document.querySelector(".bg-progress");
      // console.log(e.loaded);
      const percentCompleted = Math.floor((e.loaded * 100) / e.total);
      console.log(percentCompleted);
      bgProgress.style.width = `${percentCompleted}%`;
      setpercent(percentCompleted);
    };

    const config = {
      onUploadProgress: updateProgress,
    };

    axios
      .post(uploadURL, formData, config)
      .then((response) => console.log(response.data.file));
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
      </section>
    </div>
  );
};

export default UploadContainer;
