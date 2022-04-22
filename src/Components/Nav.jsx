import React from "react";
import { Link } from "react-router-dom";
import ConeectWallet from "./ConeectWallet";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="logo-menu">
        <h1 className="logo">Meme BD</h1>
        <Link to={"/"}>Home</Link>

        <a>About</a>
        <a>Marketplace</a>
        <Link to={"/sell"}>Sell</Link>
        <Link to={"/create-nft"}>Create</Link>

      </div>
      <ConeectWallet />
    </div>
  );
};

export default Nav;
