import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import UploadContainer from "./components/UploadContainer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/send" element={<UploadContainer />}></Route>
      </Routes>
    </>
  );
}
