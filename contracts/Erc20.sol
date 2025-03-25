// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BRTX is ERC20, Ownable {
    address public nftManager;

    constructor() ERC20("BarterX", "BRTX") Ownable(msg.sender) {}

    function setNFTManager(address _nftManager) external onlyOwner {
        require(_nftManager != address(0), "Invalid NFTManager address");
        nftManager = _nftManager;
    }

    function mint(address to, uint256 amount) external {
        require(msg.sender == nftManager, "Only NFTManager can mint");
        require(amount > 0, "Amount must be greater than zero");

        _mint(to, amount);
    }
}
