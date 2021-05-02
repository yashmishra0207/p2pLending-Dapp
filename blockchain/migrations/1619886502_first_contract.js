const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function (_deployer) {
  _deployer.deploy(SimpleStorage);
};
