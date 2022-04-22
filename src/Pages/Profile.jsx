import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NFTs from "../Components/NFTs";
import { getMyNfts, getNftData } from "../Utils/ContractMethods";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [myNfts,setMyNfts] = useState([])
  useEffect(() => {
    getMyNfts().then((res) => {
      res = res.map((item) => item - 1);
      getNftData(res).then((res) => {
        setMyNfts([...res])
      });
    });
  }, []);

  return (
    <div className="profile-page">
      <div className="cover-pic">
        <img src={user?.coverPic} alt="cover-pic" />
      </div>
      <div className="profile-pic">
        <img src={user?.profilePic} alt="cover-pic" />
      </div>
      <div className="profile-name">
        <h1>{user?.name}</h1>
      </div>
      <NFTs nfts={myNfts} />
    </div>
  );
};

export default Profile;
