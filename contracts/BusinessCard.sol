//SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract BusinessCard is ERC1155{

    // Variables
    // ------------------------------------------------------------------------
    string private _name = "Zoe";
    string private _symbol = "Zoe";
    string public Team = "pupupupuisland";
    string public Job_Title = "Game Deisgner";
    string public Email = "pupupupuisland@gmail.com";
    string public Twitter = "@pupupupuisland";
    string public Personal_Twitter = "@Zoeyeeyeeyee";
    string public Design_3D = "pupupupuisland";
    string public SFX_Design = "Zoe";
    address owner_1 = 0xbd42A2035D41b450eE7106C9F9C0C736fb546226;
    address owner_2 = 0xd56e7bcF62a417b821e6cf7ee16dF7715a3e82AB;

    // Constructor
    // ------------------------------------------------------------------------
    constructor() ERC1155("https://gateway.pinata.cloud/ipfs/QmSxkDQ1DQUAj8MUKH6WxGqHTtREcNCAvZt3xY1cDRJy9n"){
        _mint(owner_2, 1, 10000, "");
    }

    function name() public view virtual returns (string memory) {
        return _name;
    }

    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }

    // Modifiers
    // ------------------------------------------------------------------------
    modifier owner() {
        require(msg.sender == owner_1 || msg.sender == owner_2, "CALLER_IS_NOT_OWNER");
        _;
    }

	// Mint functions
	// ------------------------------------------------------------------------
	function mint(address to, uint256 id, uint256 quantity) external owner {
        _mint(to, id, quantity, "");
	}

	// Burn functions
	// ------------------------------------------------------------------------
	function burn(address to, uint256 id, uint256 quantity) external owner {
        _burn(to, id, quantity);
	}

	// setting functions
	// ------------------------------------------------------------------------
	function setBaseURI(string memory baseURI) public owner {
		_setURI(baseURI);
	}

	function setName(string memory newName) public owner {
		_name = newName;
	}

	function setTeam(string memory newTeam) public owner {
		Team = newTeam;
	}  

	function setJob_Title(string memory newJob_Title) public owner {
		Job_Title = newJob_Title;
	}  

	function setTwitter(string memory newTwitter) public owner {
		Twitter = newTwitter;
	}  
    
    function setEmail(string memory newEmail) public owner {
		Email = newEmail;
	}

	function setPersonal_Twitter(string memory newPersonal_Twitter) public owner {
		Personal_Twitter = newPersonal_Twitter;
	}  

	function setDesign_3D(string memory newDesign_3D) public owner {
		Design_3D = newDesign_3D;
	}  

	function setSFX_Design(string memory newSFX_Design) public owner {
		SFX_Design = newSFX_Design;
	}    
}
