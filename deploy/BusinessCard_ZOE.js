const { ethers } = require("hardhat");

const NFT = artifacts.require("BusinessCard_ZOE");

module.exports = async ({
  getNamedAccounts,
  deployments,
  getChainId,
  getUnnamedAccounts,
}) => {
  const {deploy, all} = deployments;
  const accounts = await ethers.getSigners();
  const deployer = accounts[0];
  console.log("");
  console.log("Deployer: ", deployer.address);

  nft = await deploy('BusinessCard_ZOE', {
    contract: "BusinessCard_ZOE",
    from: deployer.address,
    args: [
    ],
  });

  console.log("BusinessCard_ZOE address: ", nft.address);
};

module.exports.tags = ['BusinessCard_ZOE'];