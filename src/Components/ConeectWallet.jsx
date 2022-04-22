import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import web3 from "../Utils/web3";
const ConeectWallet = () => {
  const [account, setAccount] = useState(null);
  const user = useSelector((state) => state.user);
  const connect = async () => {
    const account = await web3.eth.requestAccounts();
    if (account.length) {
      setAccount(account[0]);
      await getAccount();
    }
  };
  const getAccount = async () => {
    let account = await web3.eth.getAccounts();
    if (account.length) {
      let temp = account[0];
      temp =
        temp.substring(0, 5) +
        "..." +
        temp.substring(temp.length - 4, temp.length);
      setAccount(temp);
    }
  };
  useEffect(async () => {
    getAccount();
  }, []);
  return (
    <div>
      {account ? (
        <>
          {user ? (
            <Link to={"/profile"}>
              <Button
                style={{
                  color: "white",
                  borderRadius: 16,
                  marginRight: 20,
                }}
                variant="outlined"
                aria-readonly
                color="success"
              >
                {user?.name}
              </Button>
            </Link>
          ) : (
            <Link to={"/create-account"}>
              <Button
                style={{
                  color: "white",
                  borderRadius: 16,
                  marginRight: 20,
                }}
                variant="outlined"
                aria-readonly
                color="success"
              >
                Create Account
              </Button>
            </Link>
          )}
          <Button
            style={{
              color: "white",
              borderRadius: 16,
            }}
            variant="outlined"
            aria-readonly
            color="success"
          >
            {account}
          </Button>
        </>
      ) : (
        <Button variant="outlined" onClick={connect} color="error">
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default ConeectWallet;
