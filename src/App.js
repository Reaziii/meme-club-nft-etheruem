import React, { useEffect } from "react";
import Nav from "./Components/Nav";
import Routers from "./Routers";
import "./App.scss";
import contract from "./Utils/contract";
import { useDispatch } from "react-redux";
import { getAccount } from "./Utils/ContractMethods";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAccount(dispatch);
  }, []);

  return (
    <div>
      <Nav />
      <Routers />
    </div>
  );
};

export default App;
