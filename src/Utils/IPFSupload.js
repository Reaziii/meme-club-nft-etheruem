import { create } from "ipfs-http-client";

const ipfs = create({
  url: "https://ipfs.infura.io:5001/api/v0",
});

const UploadImageOnIPFS = async (file) => {
  if (!file) {
    return "file not found!";
  }
  let ret = await ipfs.add(file);
  return ret;
};

export default UploadImageOnIPFS;
