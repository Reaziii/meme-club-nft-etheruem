import { setAccountDetails, setWalletAddress } from "../Redux/Actions";
import contract from "./contract";
import web3 from "./web3";

export const getAccount = async (dispatch) => {
  let accounts = await web3.eth.getAccounts();
  if (accounts.length === 0) {
    return;
  }
  dispatch(setWalletAddress(accounts[0]));
  let account = accounts[0];
  let active = await contract.methods.checkAccount().call({
    from: account,
  });
  if (!active) {
    console.log("account not found");
    return;
  }
  let name = await contract.methods.getAccountName().call({
    from: account,
  });
  let coverPic = await contract.methods.getAccountCoverePic().call({
    from: account,
  });
  let profilePic = await contract.methods.getAccountProfilePic().call({
    from: account,
  });
  let details = {
    name,
    coverPic,
    profilePic,
  };
  dispatch(setAccountDetails(details));
};

export const getAccountByAddress = async (account) => {
  let active = await contract.methods.checkAccountByAddress(account).call({
    from: account,
  });
  if (!active) {
    console.log("account not found");
    return;
  }
  let name = await contract.methods.getAccountNameByAddress(account).call({
    from: account,
  });
  let coverPic = await contract.methods
    .getAccountCoverePicByAddress(account)
    .call({
      from: account,
    });
  let profilePic = await contract.methods
    .getAccountProfilePicByAddress(account)
    .call({
      from: account,
    });
  let details = {
    name,
    coverPic,
    profilePic,
  };

  return details;
};

export const uploadNft = async (imagePath, description) => {
  let accounts = await web3.eth.getAccounts();
  if (accounts.length === 0) {
    return null;
  }
  const recipet = await contract.methods.mint(imagePath, description).send({
    from: accounts[0],
    gasPrice: "20000000000",
  });
  return recipet;
};

export const getMyNfts = async () => {
  let accounts = await web3.eth.getAccounts();
  if (accounts.length === 0) {
    return [];
  }
  let mynfts = await contract.methods.getMyNft().call({
    from: accounts[0],
  });

  return [...mynfts];
};

export const getImageById = async (id) => {
  let image = await contract.methods.get_image(id).call();
  return image;
};
export const getDescriptionById = async (id) => {
  let description = await contract.methods.getNftDescription(id).call();
  return description;
};

export const getNftData = async (list) => {
  if (!list) {
    return [];
  }
  let ret = [];
  for (let i = 0; i < list.length; i++) {
    const owner_addrss = await contract.methods.ownerOf(1).call();
    let a = {
      image: await getImageById(Number(list[i])),
      description: await getDescriptionById(Number(list[i]+1)),
      owner_details: await getAccountByAddress(owner_addrss),
    };
    if (a.image.length) ret.push(a);
  }
  return ret;
};
