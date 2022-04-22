const assert = require("assert");

const NFT = artifacts.require("NFT");

contract("NFT", (accounts) => {
  it("it should create a new account", async () => {
    NFT.deployed().then(async (instance) => {
      await instance
        .createAccount("reaz ahammed", "asdfasdfadsf", "asdfasdfasdf")
        .send({ from: accounts[0] });
        let name = await instance.getAccountName().call({from : accounts[0]});
        assert.equal(name,"reaz ahammed chowdhry");
    });
  });
});
