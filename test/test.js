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

describe("BusinessCard_ZOE", function () {

	let Token;
	let contract;
	let owner;
	let addr1;
	let addr2;
	let addrs;

	before(async function () {

		Token = await ethers.getContractFactory("BusinessCard_ZOE");
		[owner, addr1, addr2, ...addrs] = await ethers.getSigners();

		contract = await Token.deploy();
		console.log("BusinessCard_ZOE deployed to:", contract.address);
		console.log("Owner:", owner.address);

	});

	describe("BusinessCard Test", function () {

	
		it("mint Function", async function () {

			await contract.connect(owner).mint("0x3045588E18af3C1D614D20564D2614Cd65C51238", 1, 1000);

		});

		it("burn", async function () {

			await contract.connect(owner).burn("0x3045588E18af3C1D614D20564D2614Cd65C51238", 1, 1000);

		});

		it("setBaseURI", async function () {

			await contract.connect(owner).setBaseURI("ContractTest");

		});

		it("setName", async function () {

			await contract.connect(owner).setName("ContractTest");

		});

		it("setTeam", async function () {

			await contract.connect(owner).setTeam("ContractTest");

		});	

		it("setJob_Title", async function () {

			await contract.connect(owner).setJob_Title("ContractTest");

		});	

		it("setTwitter", async function () {

			await contract.connect(owner).setTwitter("ContractTest");

		});	

		it("setEmail", async function () {

			await contract.connect(owner).setEmail("ContractTest");

		});	

		it("setPersonal_Twitter", async function () {

			await contract.connect(owner).setPersonal_Twitter("ContractTest");

		});	

		it("setDesign_by", async function () {

			await contract.connect(owner).setDesign_by("ContractTest");

		});	

		it("setSFX_Design", async function () {

			await contract.connect(owner).setSFX_Design("ContractTest");

		});	
	});
});