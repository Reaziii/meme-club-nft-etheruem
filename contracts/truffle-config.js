module.exports = {
  contracts_build_directory: "../src/contracts",
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "5777",
    },
    compilers: {
      solc: {
        version: "0.5.0",
      },
    },
  },
};
