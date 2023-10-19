import React from "react";
import { Route, Routes } from "react-router-dom";
import MyComp from "../MyComp";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/dfnos" element={<MyComp />} />
      <Route path="/sdfo" element={<MyComp />} />
      <Route path="/sdfs" element={<MyComp />} />
    </Routes>
  );
};

export default MainRoute;
