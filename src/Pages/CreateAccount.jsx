import { Button, TextField } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../Components/LoadingScreen";
import contract from "../Utils/contract";
import { getAccount } from "../Utils/ContractMethods";
import UploadImageOnIPFS from "../Utils/IPFSupload";
import web3 from "../Utils/web3";
const CreateAccount = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [coverPic, setCoverPic] = useState(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const inputref1 = useRef(null);
  const inputref2 = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const CreateAccount = async () => {
    if (!name || !name.length || !profilePic || !coverPic) {
      alert("filed all inputs");
      return;
    }
    setLoading(true);
    let temp = await UploadImageOnIPFS(profilePic);
    let ProfilePicPath = "https://ipfs.infura.io/ipfs/" + temp.path;
    temp = await UploadImageOnIPFS(coverPic);
    let CoverPicPath = "https://ipfs.infura.io/ipfs/" + temp.path;
    let accounts = await web3.eth.getAccounts();
    await contract.methods
      .createAccount(name, ProfilePicPath, CoverPicPath)
      .send({
        from: accounts[0],
      });
    await getAccount(dispatch);
  };
  useEffect(() => {
    if (user) {
      window.location = "/profile";
    }
  }, [user]);
  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <div className="create-account">
      <div className="create-account-container">
        <input
          className="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
        />
        <Button
          onClick={() => inputref1.current.click()}
          style={{ marginBottom: 20 }}
          variant="outlined"
          disableElevation
        >
          Profile Pic
        </Button>
        <Button
          onClick={() => inputref2.current.click()}
          style={{ marginBottom: 20 }}
          variant="outlined"
          disableElevation
        >
          Cover Pic
        </Button>
        <input
          ref={inputref1}
          onChange={(e) => setProfilePic(e.target.files[0])}
          className="file-select"
          type={"file"}
          style={{ display: "none" }}
        />
        <input
          ref={inputref2}
          onChange={(e) => setCoverPic(e.target.files[0])}
          className="file-select"
          type={"file"}
          style={{ display: "none" }}
        />
        <Button onClick={CreateAccount} variant="contained" disableElevation>
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default CreateAccount;
