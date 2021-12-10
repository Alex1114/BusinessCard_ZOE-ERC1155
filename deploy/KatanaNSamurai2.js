const { ethers } = require("hardhat");

const NFT = artifacts.require("BusinessCard");

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

  nft = await deploy('BusinessCard', {
    contract: "BusinessCard",
    from: deployer.address,
    args: [
    ],
  });

  console.log("BusinessCard address: ", nft.address);
};

module.exports.tags = ['BusinessCard'];