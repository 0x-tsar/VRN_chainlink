const RandomNumberConsumer = artifacts.require("RandomNumberConsumer");

module.exports = async (deployer) => {
  await deployer.deploy(RandomNumberConsumer);
  const random = await RandomNumberConsumer.deployed();
};
