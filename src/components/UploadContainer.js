import React from "react";
import { useState } from "react";
import "./UploadContainer.css";
import file from "./file.png";

const UploadContainer = () => {
  const [classNames, setclassNames] = useState("drop-zone");
  const fileInput = document.getElementsByTagName("input")[0];

  const handleOnClick = () => {
    // document.getElementsByTagName("input")[0].click();
    fileInput.click();
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

  const handleOnDrop = (e) => {
    e.preventDefault();
    setclassNames("drop-zone");
    const files = e.dataTransfer.files;
    console.log(files);
    if (files.length) {
      fileInput.files = files;
    }
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
          <input type="file" id="fileInput" />
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
