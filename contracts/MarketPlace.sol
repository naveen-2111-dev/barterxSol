// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "./Erc20.sol";

/**
 * @title BarterXmarketPlace
 * @dev A decentralized marketplace where users can add and buy products using BRTX tokens.
 */
contract BarterXmarketPlace {
    /**
     * @dev Structure representing a product in the marketplace.
     */
    struct Store {
        uint256 price;
        uint256 stock;
        bytes32 name;
        bytes description;
        bytes image;
        bytes32 productType;
        bytes32 condition;
        address seller;
    }

    BRTX public immutable brtx;
    mapping(uint256 => Store) public store;
    uint256 public ProductCount = 1;

    /**
     * @dev Constructor to initialize the marketplace with the BRTX token address.
     * @param _brtxToken Address of the deployed BRTX token contract.
     */
    constructor(address _brtxToken) {
        brtx = BRTX(_brtxToken);
    }

    /**
     * @dev Adds a new product to the marketplace.
     * @param name Name of the product (bytes32 format).
     * @param image Image URL of the product (stored as bytes).
     * @param price Price of the product in BRTX tokens.
     * @param description Description of the product (stored as bytes).
     * @param productType Type/category of the product (bytes32 format).
     * @param condition Condition of the product (bytes32 format, e.g., New, Used).
     * @param stock Available stock of the product.
     * @return The newly assigned product ID.
     */
    function addProduct(
        uint256 price,
        uint256 stock,
        bytes32 name,
        bytes memory image,
        bytes memory description,
        bytes32 productType,
        bytes32 condition
    ) external returns (uint256) {
        store[ProductCount] = Store({
            name: name,
            price: price,
            description: description,
            stock: stock,
            image: image,
            productType: productType,
            condition: condition,
            seller: msg.sender
        });

        unchecked {
            return ++ProductCount;
        }
    }

    /**
     * @dev Allows users to purchase a product using BRTX tokens.
     * @param _id The product ID to purchase.
     *
     * Requirements:
     * - Product must exist.
     * - Product must be in stock.
     * - Buyer must approve the contract to spend BRTX tokens.
     */
    function buyProduct(uint256 _id) external {
        Store storage stored = store[_id];

        require(stored.stock > 0, "Out of stock");
        require(
            brtx.allowance(msg.sender, address(this)) >= stored.price,
            "Allowance too low"
        );

        bool success = brtx.transferFrom(
            msg.sender,
            stored.seller,
            stored.price
        );
        require(success, "Transfer failed");

        unchecked {
            --stored.stock;
        }
    }

    /**
     * @dev Retrieves the details of a specific product by its ID.
     * @param _id The product ID to fetch.
     * @return name Name of the product.
     * @return price Price of the product in BRTX tokens.
     * @return description Description of the product.
     * @return stock Available stock of the product.
     * @return image Image URL of the product.
     * @return productType Type/category of the product.
     * @return condition Condition of the product.
     * @return seller Address of the seller who listed the product.
     */
    function getProduct(
        uint256 _id
    )
        external
        view
        returns (
            bytes32 name,
            uint256 price,
            bytes memory description,
            uint256 stock,
            bytes memory image,
            bytes32 productType,
            bytes32 condition,
            address seller
        )
    {
        Store memory stored = store[_id];

        return (
            stored.name,
            stored.price,
            stored.description,
            stored.stock,
            stored.image,
            stored.productType,
            stored.condition,
            stored.seller
        );
    }
}
