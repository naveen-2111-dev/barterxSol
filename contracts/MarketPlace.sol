// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "./Erc20.sol";

/**
 * @title BarterXmarketPlace
 * @dev A decentralized marketplace where users can buy products using BRTX tokens.
 */
contract BarterXmarketPlace {
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

    struct Order {
        uint256 productId;
        uint256 amountPaid;
        address buyer;
        address seller;
        bool isPaid;
        bool isDelivered;
    }

    BRTX public immutable brtx;
    mapping(uint256 => Store) public store;
    mapping(uint256 => Order) public orders;
    uint256 public ProductCount = 1;
    uint256 public OrderCount = 1;

    event OrderPlaced(
        uint256 orderId,
        uint256 productId,
        address buyer,
        address seller,
        bool isPaid
    );
    event OrderPaid(uint256 orderId, uint256 amountPaid);
    event OrderDelivered(uint256 orderId);

    constructor(address _brtxToken) {
        brtx = BRTX(_brtxToken);
    }

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

    function buyProduct(uint256 _id, bool _isPrepaid) external {
        Store storage stored = store[_id];
        require(stored.stock > 0, "Out of stock");

        uint256 orderId = OrderCount++;

        if (_isPrepaid) {
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

            orders[orderId] = Order({
                productId: _id,
                amountPaid: stored.price,
                buyer: msg.sender,
                seller: stored.seller,
                isPaid: true,
                isDelivered: false
            });

            emit OrderPaid(orderId, stored.price);
        } else {
            orders[orderId] = Order({
                productId: _id,
                amountPaid: 0,
                buyer: msg.sender,
                seller: stored.seller,
                isPaid: false,
                isDelivered: false
            });
        }

        unchecked {
            --stored.stock;
        }

        emit OrderPlaced(orderId, _id, msg.sender, stored.seller, _isPrepaid);
    }

    function getOrderDetails(
        uint256 _orderId
    ) external view returns (address seller, uint256 price) {
        Order storage order = orders[_orderId];
        Store storage stored = store[order.productId];

        return (order.seller, stored.price);
    }

    function confirmDelivery(uint256 _orderId) external {
        Order storage order = orders[_orderId];

        require(order.isPaid, "Payment not received yet");
        require(!order.isDelivered, "Already delivered");
        require(msg.sender == store[order.productId].seller, "Not the seller");

        order.isDelivered = true;
        emit OrderDelivered(_orderId);
    }
}
