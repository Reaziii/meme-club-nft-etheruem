export const setAccountDetails = (details) => ({
  type: "SET_USER",
  payload: { ...details },
});
export const setWalletAddress = (address) => ({
  type: "SET_WALLET_ADDRESS",
  payload: address,
});
