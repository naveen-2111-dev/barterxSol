// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "./Erc20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

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

    using SafeERC20 for IERC20;
    IERC20 public immutable brtx;
    mapping(uint256 => Store) public store;
    mapping(uint256 => Order) public orders;
    uint256 public productCount = 1;
    uint256 public orderCount = 1;

    event OrderPlaced(uint256 orderId, uint256 productId, address buyer, address seller, bool isPaid);
    event OrderPaid(uint256 orderId, uint256 amountPaid);
    event OrderDelivered(uint256 orderId);

    constructor(address _brtxToken) {
        require(_brtxToken != address(0), "Invalid BRTX Token Address");
        brtx = IERC20(_brtxToken);
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
        require(price > 0, "Price must be greater than 0");
        require(stock > 0, "Stock must be greater than 0");

        store[productCount] = Store({
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
            return productCount++;
        }
    }

    function buyProduct(uint256 _id, bool _isPrepaid) external {
        Store storage stored = store[_id];
        require(stored.stock > 0, "Out of stock");

        uint256 orderId;
        unchecked {
            orderId = orderCount++;
        }

        if (_isPrepaid) {
            require(brtx.allowance(msg.sender, address(this)) >= stored.price, "Allowance too low");
            require(brtx.transferFrom(msg.sender, stored.seller, stored.price), "Transfer failed");

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

        stored.stock--;

        emit OrderPlaced(orderId, _id, msg.sender, stored.seller, _isPrepaid);
    }

    function confirmDelivery(uint256 _orderId) external {
        Order storage order = orders[_orderId];

        require(order.isPaid, "Payment not received yet");
        require(!order.isDelivered, "Already delivered");
        require(msg.sender == order.seller, "Not the seller");

        order.isDelivered = true;
        emit OrderDelivered(_orderId);
    }

    function cancelOrder(uint256 _orderId) external {
        Order storage order = orders[_orderId];
        require(!order.isDelivered, "Order already delivered");
        require(order.buyer == msg.sender, "Not the buyer");

        if (order.isPaid) {
            require(brtx.transfer(msg.sender, order.amountPaid), "Refund failed");
        }

        delete orders[_orderId];
    }
}
