import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import dataDating from "./dataDating";

const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {dataDating.map((item, index) => (
            <Route key={index} path={item.path} element={item.element}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default routes;
