import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import UploadContainer from "./components/UploadContainer";
import Body from "./components/Body";

export default function App() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {location.pathname !== "/send" && <Navbar />}
      {/* {console.log(window.location.pathname)} */}
      <Routes>
        <Route exact path="/" element={<Body />}></Route>
        <Route exact path="/send" element={<UploadContainer />}></Route>
      </Routes>
    </>
  );
}
