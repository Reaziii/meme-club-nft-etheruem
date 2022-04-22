import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
const init = {
  user: null,
  walletAddress: null,
};

const Reducers = (state = init, action = {}) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_WALLET_ADDRESS":
      return {
        ...state,
        walletAddress: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(Reducers, applyMiddleware(logger));

export default store;
