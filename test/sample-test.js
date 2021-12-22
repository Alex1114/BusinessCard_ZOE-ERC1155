const {
	assert,
	expect
} = require('chai');
const {
	BN,
	time,
	expectRevert,
	constants,
	balance
} = require('@openzeppelin/test-helpers');
const {
	artifacts,
	ethers
} = require('hardhat');

describe("BusinessCard", function () {

	let Token;
	let contract;
	let owner;
	let addr1;
	let addr2;
	let addrs;

	before(async function () {

		Token = await ethers.getContractFactory("BusinessCard");
		[owner, addr1, addr2, ...addrs] = await ethers.getSigners();

		contract = await Token.deploy();
		console.log("BusinessCard deployed to:", contract.address);
		console.log("Owner:", owner.address);

	});

	describe("BusinessCard Test", function () {

	
		it("mint Function", async function () {

			await contract.connect(owner).mint("0xbd42A2035D41b450eE7106C9F9C0C736fb546226", 1, 1000);

		});

		it("burn", async function () {

			await contract.connect(owner).burn("0xbd42A2035D41b450eE7106C9F9C0C736fb546226", 1, 1000);

		});

		it("setBaseURI", async function () {

			await contract.connect(owner).setBaseURI("10000000000000000");

		});

		it("setName", async function () {

			await contract.connect(owner).setName("Hello");

		});

		it("setBaseURI", async function () {

			await contract.connect(owner).setSymbol("Yes");

		});		
	});
});