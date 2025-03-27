// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Erc20.sol";

contract NFTManager is IERC721Receiver, Ownable {
    IERC20 public immutable brtx;

    mapping(uint256 => address) public nftContracts;
    mapping(uint256 => address) public originalOwners;

    event NFTDeposited(
        address indexed user,
        address indexed nftContract,
        uint256 indexed tokenId
    );
    event NFTWithdrawn(address indexed to, uint256 indexed tokenId);
    event BRTXMinted(address indexed user, uint256 amount);

    constructor(address _brtxToken) Ownable(msg.sender) {
        require(_brtxToken != address(0), "Invalid BRTX address");
        brtx = IERC20(_brtxToken);
    }

    function depositNFT(
        address nftContract,
        uint256 tokenId,
        uint256 brtxAmount
    ) external {
        IERC721 nft = IERC721(nftContract);

        require(nft.ownerOf(tokenId) == msg.sender, "Not NFT owner");
        require(
            nft.getApproved(tokenId) == address(this) ||
                nft.isApprovedForAll(msg.sender, address(this)),
            "Not approved"
        );

        originalOwners[tokenId] = msg.sender;
        nftContracts[tokenId] = nftContract;

        nft.safeTransferFrom(msg.sender, address(this), tokenId);

        BRTX(address(brtx)).mint(msg.sender, brtxAmount);

        emit NFTDeposited(msg.sender, nftContract, tokenId);
    }

    function withdrawToDeployer(uint256 tokenId) external onlyOwner {
        address nftContract = nftContracts[tokenId];
        require(nftContract != address(0), "NFT not found");

        IERC721(nftContract).safeTransferFrom(address(this), owner(), tokenId);
        emit NFTWithdrawn(owner(), tokenId);
    }

    function userWithdraw(uint256 tokenId) external {
        require(originalOwners[tokenId] == msg.sender, "Not your NFT");

        IERC721(nftContracts[tokenId]).safeTransferFrom(
            address(this),
            msg.sender,
            tokenId
        );
        emit NFTWithdrawn(msg.sender, tokenId);
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure returns (bytes4) {
        return this.onERC721Received.selector;
    }
}
