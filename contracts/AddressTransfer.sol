// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "./Erc20.sol";

contract NFTManager is IERC721Receiver {
    address public immutable owner;
    IERC20 public immutable brtx;
    mapping(uint256 => address) public nftOwners;

    event NFTDeposited(address indexed user, uint256 indexed tokenId);
    event BRTXMinted(address indexed user, uint256 amount);

    constructor(address _brtxToken) {
        require(_brtxToken != address(0), "Invalid BRTX Token Address");
        owner = msg.sender;
        brtx = IERC20(_brtxToken);
    }

    function depositNFT(address nftContract, uint256 tokenId, uint256 brtxAmount) external {
        IERC721 nft = IERC721(nftContract);

        require(nft.ownerOf(tokenId) == msg.sender, "You don't own this NFT");
        require(
            nft.getApproved(tokenId) == address(this) || nft.isApprovedForAll(msg.sender, address(this)),
            "Contract not approved"
        );

        nft.safeTransferFrom(msg.sender, address(this), tokenId); 
        nftOwners[tokenId] = msg.sender;

        BRTX(address(brtx)).mint(msg.sender, brtxAmount);

        emit NFTDeposited(msg.sender, tokenId);
        emit BRTXMinted(msg.sender, brtxAmount);
    }

    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external pure override returns (bytes4) {
        return this.onERC721Received.selector;
    }
}
