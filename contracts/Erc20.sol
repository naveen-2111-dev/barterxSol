// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title BRTX Token
 * @dev ERC20 token with a mint function restricted to the contract owner.
 */
contract BRTX is ERC20, Ownable {
    /**
     * @dev Sets the token name and symbol.
     */
    constructor() ERC20("BarterX", "BRTX") Ownable(msg.sender) {}

    /**
     * @notice Mints new tokens and assigns them to a specified address.
     * @dev Only the contract owner can call this function.
     * @param to The address receiving the minted tokens.
     * @param amount The number of tokens to mint.
     */
    function Mint_BRTX(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
