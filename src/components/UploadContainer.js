import React from "react";
import { useState } from "react";
import "./UploadContainer.css";
import file from "./file.png";

const UploadContainer = () => {
  const host = "https://innshare.herokuapp.com";
  const uploadURL = `${host}/api/files`;
  const [classNames, setclassNames] = useState("drop-zone");
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
      // console.log(fileInput.files);
      uploadFile();
    }
  };

  const uploadFile = () => {
    // const file = fileInput.files[0];
    // const formData = new FormData();
    // formData.append("myfile", file);

    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = () => {
    //   console.log(xhr.readyState);
    // };

    // xhr.open("POST", uploadURL);
    // xhr.send(formData);
    const fileInput = document.getElementsByTagName("input")[0];
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("myfile", file);
    fetch(uploadURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.file);
      })
      .catch((error) => {
        console.error(error);
      });
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
      </section>
    </div>
  );
};

export default UploadContainer;
