import React from "react";
import { useState } from "react";
import "./UploadContainer.css";
import file from "./file.png";

const UploadContainer = () => {
  const [classNames, setclassNames] = useState("drop-zone");
  // const dropZone = document.querySelector(".drop-zone");
  const handleOnDragOver = (e) => {
    e.preventDefault();
    console.log(classNames);
    if (!classNames.includes("dragged")) {
      setclassNames("drop-zone dragged");
    }
  };

  const handleDragLeave = () => {
    setclassNames("drop-zone");
    console.log(classNames);
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    setclassNames("drop-zone");
    console.log(classNames);
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
            <img src={file} alt="file icon" className="center" />
            <img src={file} alt="file icon" className="left" />
            <img src={file} alt="file icon" className="right" />
          </div>
          <input type="file" />
          <div className="title" style={{ fontWeight: "645" }}>
            Drop your Files here or, <span className="browsebtn">browse</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadContainer;
