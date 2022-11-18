import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import dataDating from "./index";

const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {dataDating.map((item, index) => (
            <Route key={index} path={item.path} element={item.element}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default routes;
