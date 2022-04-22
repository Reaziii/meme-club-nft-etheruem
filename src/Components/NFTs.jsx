import React from "react";
import NFTcard from "./NFTcard";
import contract from "../Utils/contract";
const NFTs = ({ nfts }) => {
  return (
    <div className="NFT-board">
      {nfts?.map((item) => (
        <NFTcard details={item} />
      ))}
    </div>
  );
};

export default NFTs;
