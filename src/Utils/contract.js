import nft from "../contracts/NFT.json";
import web3 from "./web3";
const abi = nft.abi;
const contract = new web3.eth.Contract(abi, nft.networks[5777].address, {
  gasPrice: 21000,
});

export default contract;
