import React from "react";
import nftModel from "../Assets/nft-temp.png";
const NFTcard = ({ details }) => {
  console.log(details);
  return (
    <div className="NFT-card">
      <img src={details.image} alt="nft-model" />
      <div className="details">
        <p style={{fontSize : 10}} className="name">{details.owner_details.name}</p>
      </div>
    </div>
  );
};

export default NFTcard;
