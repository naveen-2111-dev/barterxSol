// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BRTX is ERC20, Ownable {
    address public nftManager;
    bool public managerLocked;

    constructor() ERC20("BarterX", "BRTX") Ownable(msg.sender) {
        nftManager = msg.sender;
    }

    function setNFTManager(address _manager) external onlyOwner {
        require(!managerLocked, "Manager is locked");
        require(_manager != address(0), "Invalid address");
        nftManager = _manager;
    }

    function lockManager() external onlyOwner {
        managerLocked = true;
    }

    function mint(address to, uint256 amount) external {
        require(msg.sender == nftManager, "Only NFTManager can mint");
        require(amount > 0, "Amount must be > 0");
        _mint(to, amount);
    }
}
