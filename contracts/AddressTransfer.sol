// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/**
 * @title NFTManager
 * @dev A smart contract that allows users to transfer ownership of their NFT
 *      to the contract owner (deployer) after granting approval.
 */
contract NFTManager {
    address public owner;

    /**
     * @dev Emitted when an NFT is successfully transferred to the contract owner.
     * @param message Transfer status message.
     * @param from Address of the sender (original NFT owner).
     * @param to Address of the receiver (contract owner).
     * @param tokenId The unique ID of the transferred NFT.
     */
    event NFT_Name_Transfer(
        string message,
        address indexed from,
        address indexed to,
        uint256 indexed tokenId
    );

    /**
     * @dev Sets the deployer as the contract owner upon deployment.
     */
    constructor() {
        owner = msg.sender;
    }

    /**
     * @notice Transfers an NFT from the sender to the contract owner.
     * @dev The sender must approve this contract to transfer their NFT before calling this function.
     * @param nftContract Address of the ERC-721 NFT contract.
     * @param tokenId Unique ID of the NFT to be transferred.
     */
    function NameTransfer(address nftContract, uint256 tokenId) external {
        IERC721 nft = IERC721(nftContract);

        require(
            nft.getApproved(tokenId) == address(this),
            "Contract not approved to transfer this NFT"
        );

        //safeTransfer(fromuser, to_user, nft_token_id) the builtin function in openzepplin's erc721 standard
        nft.safeTransferFrom(msg.sender, owner, tokenId);
        require(nft.ownerOf(tokenId) == owner, "NFT transfer failed");

        emit NFT_Name_Transfer(
            "NFT successfully transferred",
            msg.sender,
            owner,
            tokenId
        );
    }
}
