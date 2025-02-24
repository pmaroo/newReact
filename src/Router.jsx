import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./router/home";
import Mypage from "./router/mypage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
