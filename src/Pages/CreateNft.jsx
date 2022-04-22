import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import LoadingScreen from "../Components/LoadingScreen";
import { uploadNft } from "../Utils/ContractMethods";
import UploadImageOnIPFS from "../Utils/IPFSupload";

const CreateNft = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const imgref = useRef(null);
  const Submit = async () => {
    if (!description || !description.length || !image) {
      return;
    }
    setLoading(true);

    let temp = await UploadImageOnIPFS(image);
    temp = "https://ipfs.infura.io/ipfs/" + temp.path;
    uploadNft(temp, description).then((res) => {
      setLoading(false);
    });
  };
  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <div className="create-nft-page">
      <div className="create-nft-container">
        {image && (
          <img
            src={URL.createObjectURL(image)}
            className="image-nft"
            alt="nft-image"
          />
        )}
        <input
          type={"file"}
          style={{ display: "none" }}
          ref={imgref}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Button
          variant="outlined"
          onClick={() => {
            if (imgref && imgref.current) {
              imgref.current.click();
            }
          }}
        >
          Image
        </Button>
        <textarea
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea"
        ></textarea>
        <Button
          className="submit"
          variant="contained"
          color={`${
            description && description.length && image ? "success" : "error"
          }`}
          onClick={Submit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateNft;
