//SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract BusinessCard is Ownable, ERC1155{
    
    string private _name = "BusinessCard";
    string private _symbol = "BC";
    uint public constant Card = 1;

    constructor() ERC1155("http://api.katanansamurai.art/Metadata/{id}"){
        _mint(msg.sender, Card, 1000, "");
    }

    function name() public view virtual returns (string memory) {
        return _name;
    }

    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }

	// Mint functions
	// ------------------------------------------------------------------------
	function mint(uint256 quantity) external onlyOwner {
        _mint(msg.sender, Card, quantity, "");
	}

	// Burn functions
	// ------------------------------------------------------------------------
	function burn(uint256 quantity) external onlyOwner {
        _burn(msg.sender, Card, quantity);
	}

	// setting functions
	// ------------------------------------------------------------------------
	function setBaseURI(string memory baseURI) public onlyOwner {
		_setURI(baseURI);
	}
}
