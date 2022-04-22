import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateAccount from "./Pages/CreateAccount";
import CreateNft from "./Pages/CreateNft";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Sell from "./Pages/Sell";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-nft" element={<CreateNft />} />
    </Routes>
  );
};

export default Routers;
