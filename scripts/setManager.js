import { ethers } from "ethers";
import { configDotenv } from "dotenv";

configDotenv();

const brtx = {
  _format: "hh-sol-artifact-1",
  contractName: "BRTX",
  address: "0x73fc86b73fd4a7978F8EBAD2e5fba1EF32754302",
  sourceName: "contracts/Erc20.sol",
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "allowance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "needed",
          type: "uint256",
        },
      ],
      name: "ERC20InsufficientAllowance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "balance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "needed",
          type: "uint256",
        },
      ],
      name: "ERC20InsufficientBalance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "approver",
          type: "address",
        },
      ],
      name: "ERC20InvalidApprover",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "ERC20InvalidReceiver",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "ERC20InvalidSender",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "ERC20InvalidSpender",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "lockManager",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "managerLocked",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "nftManager",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_manager",
          type: "address",
        },
      ],
      name: "setNFTManager",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x608060405234801561001057600080fd5b50336040518060400160405280600781526020017f42617274657258000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4252545800000000000000000000000000000000000000000000000000000000815250816003908161008d919061047e565b50806004908161009d919061047e565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101125760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016101099190610591565b60405180910390fd5b6101218161016860201b60201c565b5033600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506105ac565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806102af57607f821691505b6020821081036102c2576102c1610268565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261032a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826102ed565b61033486836102ed565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061037b6103766103718461034c565b610356565b61034c565b9050919050565b6000819050919050565b61039583610360565b6103a96103a182610382565b8484546102fa565b825550505050565b600090565b6103be6103b1565b6103c981848461038c565b505050565b5b818110156103ed576103e26000826103b6565b6001810190506103cf565b5050565b601f82111561043257610403816102c8565b61040c846102dd565b8101602085101561041b578190505b61042f610427856102dd565b8301826103ce565b50505b505050565b600082821c905092915050565b600061045560001984600802610437565b1980831691505092915050565b600061046e8383610444565b9150826002028217905092915050565b6104878261022e565b67ffffffffffffffff8111156104a05761049f610239565b5b6104aa8254610297565b6104b58282856103f1565b600060209050601f8311600181146104e857600084156104d6578287015190505b6104e08582610462565b865550610548565b601f1984166104f6866102c8565b60005b8281101561051e578489015182556001820191506020850194506020810190506104f9565b8683101561053b5784890151610537601f891682610444565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061057b82610550565b9050919050565b61058b81610570565b82525050565b60006020820190506105a66000830184610582565b92915050565b61161d806105bb6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063acca30a211610071578063acca30a2146102aa578063dd62ed3e146102b4578063e88b91ea146102e4578063f178ad7a14610302578063f2fde38b1461031e5761010b565b8063715018a6146102345780638da5cb5b1461023e57806395d89b411461025c578063a9059cbb1461027a5761010b565b8063313ce567116100de578063313ce567146101ac57806340c10f19146101ca5780636825f2d3146101e657806370a08231146102045761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b61011861033a565b60405161012591906110c1565b60405180910390f35b6101486004803603810190610143919061117c565b6103cc565b60405161015591906111d7565b60405180910390f35b6101666103ef565b6040516101739190611201565b60405180910390f35b6101966004803603810190610191919061121c565b6103f9565b6040516101a391906111d7565b60405180910390f35b6101b4610428565b6040516101c1919061128b565b60405180910390f35b6101e460048036038101906101df919061117c565b610431565b005b6101ee610512565b6040516101fb91906111d7565b60405180910390f35b61021e600480360381019061021991906112a6565b610525565b60405161022b9190611201565b60405180910390f35b61023c61056d565b005b610246610581565b60405161025391906112e2565b60405180910390f35b6102646105ab565b60405161027191906110c1565b60405180910390f35b610294600480360381019061028f919061117c565b61063d565b6040516102a191906111d7565b60405180910390f35b6102b2610660565b005b6102ce60048036038101906102c991906112fd565b610685565b6040516102db9190611201565b60405180910390f35b6102ec61070c565b6040516102f991906112e2565b60405180910390f35b61031c600480360381019061031791906112a6565b610732565b005b610338600480360381019061033391906112a6565b61083d565b005b6060600380546103499061136c565b80601f01602080910402602001604051908101604052809291908181526020018280546103759061136c565b80156103c25780601f10610397576101008083540402835291602001916103c2565b820191906000526020600020905b8154815290600101906020018083116103a557829003601f168201915b5050505050905090565b6000806103d76108c3565b90506103e48185856108cb565b600191505092915050565b6000600254905090565b6000806104046108c3565b90506104118582856108dd565b61041c858585610972565b60019150509392505050565b60006012905090565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b8906113e9565b60405180910390fd5b60008111610504576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fb90611455565b60405180910390fd5b61050e8282610a66565b5050565b600660149054906101000a900460ff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610575610ae8565b61057f6000610b6f565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546105ba9061136c565b80601f01602080910402602001604051908101604052809291908181526020018280546105e69061136c565b80156106335780601f1061060857610100808354040283529160200191610633565b820191906000526020600020905b81548152906001019060200180831161061657829003601f168201915b5050505050905090565b6000806106486108c3565b9050610655818585610972565b600191505092915050565b610668610ae8565b6001600660146101000a81548160ff021916908315150217905550565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61073a610ae8565b600660149054906101000a900460ff161561078a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610781906114c1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f09061152d565b60405180910390fd5b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610845610ae8565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036108b75760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016108ae91906112e2565b60405180910390fd5b6108c081610b6f565b50565b600033905090565b6108d88383836001610c35565b505050565b60006108e98484610685565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81101561096c578181101561095c578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016109539392919061154d565b60405180910390fd5b61096b84848484036000610c35565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109e45760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016109db91906112e2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a565760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610a4d91906112e2565b60405180910390fd5b610a61838383610e0c565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ad85760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610acf91906112e2565b60405180910390fd5b610ae460008383610e0c565b5050565b610af06108c3565b73ffffffffffffffffffffffffffffffffffffffff16610b0e610581565b73ffffffffffffffffffffffffffffffffffffffff1614610b6d57610b316108c3565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610b6491906112e2565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610ca75760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610c9e91906112e2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610d195760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610d1091906112e2565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610e06578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610dfd9190611201565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610e5e578060026000828254610e5291906115b3565b92505081905550610f31565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610eea578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610ee19392919061154d565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f7a5780600260008282540392505081905550610fc7565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516110249190611201565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561106b578082015181840152602081019050611050565b60008484015250505050565b6000601f19601f8301169050919050565b600061109382611031565b61109d818561103c565b93506110ad81856020860161104d565b6110b681611077565b840191505092915050565b600060208201905081810360008301526110db8184611088565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611113826110e8565b9050919050565b61112381611108565b811461112e57600080fd5b50565b6000813590506111408161111a565b92915050565b6000819050919050565b61115981611146565b811461116457600080fd5b50565b60008135905061117681611150565b92915050565b60008060408385031215611193576111926110e3565b5b60006111a185828601611131565b92505060206111b285828601611167565b9150509250929050565b60008115159050919050565b6111d1816111bc565b82525050565b60006020820190506111ec60008301846111c8565b92915050565b6111fb81611146565b82525050565b600060208201905061121660008301846111f2565b92915050565b600080600060608486031215611235576112346110e3565b5b600061124386828701611131565b935050602061125486828701611131565b925050604061126586828701611167565b9150509250925092565b600060ff82169050919050565b6112858161126f565b82525050565b60006020820190506112a0600083018461127c565b92915050565b6000602082840312156112bc576112bb6110e3565b5b60006112ca84828501611131565b91505092915050565b6112dc81611108565b82525050565b60006020820190506112f760008301846112d3565b92915050565b60008060408385031215611314576113136110e3565b5b600061132285828601611131565b925050602061133385828601611131565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061138457607f821691505b6020821081036113975761139661133d565b5b50919050565b7f4f6e6c79204e46544d616e616765722063616e206d696e740000000000000000600082015250565b60006113d360188361103c565b91506113de8261139d565b602082019050919050565b60006020820190508181036000830152611402816113c6565b9050919050565b7f416d6f756e74206d757374206265203e20300000000000000000000000000000600082015250565b600061143f60128361103c565b915061144a82611409565b602082019050919050565b6000602082019050818103600083015261146e81611432565b9050919050565b7f4d616e61676572206973206c6f636b6564000000000000000000000000000000600082015250565b60006114ab60118361103c565b91506114b682611475565b602082019050919050565b600060208201905081810360008301526114da8161149e565b9050919050565b7f496e76616c696420616464726573730000000000000000000000000000000000600082015250565b6000611517600f8361103c565b9150611522826114e1565b602082019050919050565b600060208201905081810360008301526115468161150a565b9050919050565b600060608201905061156260008301866112d3565b61156f60208301856111f2565b61157c60408301846111f2565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115be82611146565b91506115c983611146565b92508282019050808211156115e1576115e0611584565b5b9291505056fea2646970667358221220da6efea6f9cc0ba0af6067fbbdaaaf9a6b86f24dc685a40380a875c210edb19864736f6c634300081c0033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063acca30a211610071578063acca30a2146102aa578063dd62ed3e146102b4578063e88b91ea146102e4578063f178ad7a14610302578063f2fde38b1461031e5761010b565b8063715018a6146102345780638da5cb5b1461023e57806395d89b411461025c578063a9059cbb1461027a5761010b565b8063313ce567116100de578063313ce567146101ac57806340c10f19146101ca5780636825f2d3146101e657806370a08231146102045761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b61011861033a565b60405161012591906110c1565b60405180910390f35b6101486004803603810190610143919061117c565b6103cc565b60405161015591906111d7565b60405180910390f35b6101666103ef565b6040516101739190611201565b60405180910390f35b6101966004803603810190610191919061121c565b6103f9565b6040516101a391906111d7565b60405180910390f35b6101b4610428565b6040516101c1919061128b565b60405180910390f35b6101e460048036038101906101df919061117c565b610431565b005b6101ee610512565b6040516101fb91906111d7565b60405180910390f35b61021e600480360381019061021991906112a6565b610525565b60405161022b9190611201565b60405180910390f35b61023c61056d565b005b610246610581565b60405161025391906112e2565b60405180910390f35b6102646105ab565b60405161027191906110c1565b60405180910390f35b610294600480360381019061028f919061117c565b61063d565b6040516102a191906111d7565b60405180910390f35b6102b2610660565b005b6102ce60048036038101906102c991906112fd565b610685565b6040516102db9190611201565b60405180910390f35b6102ec61070c565b6040516102f991906112e2565b60405180910390f35b61031c600480360381019061031791906112a6565b610732565b005b610338600480360381019061033391906112a6565b61083d565b005b6060600380546103499061136c565b80601f01602080910402602001604051908101604052809291908181526020018280546103759061136c565b80156103c25780601f10610397576101008083540402835291602001916103c2565b820191906000526020600020905b8154815290600101906020018083116103a557829003601f168201915b5050505050905090565b6000806103d76108c3565b90506103e48185856108cb565b600191505092915050565b6000600254905090565b6000806104046108c3565b90506104118582856108dd565b61041c858585610972565b60019150509392505050565b60006012905090565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b8906113e9565b60405180910390fd5b60008111610504576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fb90611455565b60405180910390fd5b61050e8282610a66565b5050565b600660149054906101000a900460ff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610575610ae8565b61057f6000610b6f565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546105ba9061136c565b80601f01602080910402602001604051908101604052809291908181526020018280546105e69061136c565b80156106335780601f1061060857610100808354040283529160200191610633565b820191906000526020600020905b81548152906001019060200180831161061657829003601f168201915b5050505050905090565b6000806106486108c3565b9050610655818585610972565b600191505092915050565b610668610ae8565b6001600660146101000a81548160ff021916908315150217905550565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61073a610ae8565b600660149054906101000a900460ff161561078a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610781906114c1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f09061152d565b60405180910390fd5b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610845610ae8565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036108b75760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016108ae91906112e2565b60405180910390fd5b6108c081610b6f565b50565b600033905090565b6108d88383836001610c35565b505050565b60006108e98484610685565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81101561096c578181101561095c578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016109539392919061154d565b60405180910390fd5b61096b84848484036000610c35565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109e45760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016109db91906112e2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a565760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610a4d91906112e2565b60405180910390fd5b610a61838383610e0c565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ad85760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610acf91906112e2565b60405180910390fd5b610ae460008383610e0c565b5050565b610af06108c3565b73ffffffffffffffffffffffffffffffffffffffff16610b0e610581565b73ffffffffffffffffffffffffffffffffffffffff1614610b6d57610b316108c3565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610b6491906112e2565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610ca75760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610c9e91906112e2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610d195760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610d1091906112e2565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610e06578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610dfd9190611201565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610e5e578060026000828254610e5291906115b3565b92505081905550610f31565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610eea578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610ee19392919061154d565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f7a5780600260008282540392505081905550610fc7565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516110249190611201565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561106b578082015181840152602081019050611050565b60008484015250505050565b6000601f19601f8301169050919050565b600061109382611031565b61109d818561103c565b93506110ad81856020860161104d565b6110b681611077565b840191505092915050565b600060208201905081810360008301526110db8184611088565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611113826110e8565b9050919050565b61112381611108565b811461112e57600080fd5b50565b6000813590506111408161111a565b92915050565b6000819050919050565b61115981611146565b811461116457600080fd5b50565b60008135905061117681611150565b92915050565b60008060408385031215611193576111926110e3565b5b60006111a185828601611131565b92505060206111b285828601611167565b9150509250929050565b60008115159050919050565b6111d1816111bc565b82525050565b60006020820190506111ec60008301846111c8565b92915050565b6111fb81611146565b82525050565b600060208201905061121660008301846111f2565b92915050565b600080600060608486031215611235576112346110e3565b5b600061124386828701611131565b935050602061125486828701611131565b925050604061126586828701611167565b9150509250925092565b600060ff82169050919050565b6112858161126f565b82525050565b60006020820190506112a0600083018461127c565b92915050565b6000602082840312156112bc576112bb6110e3565b5b60006112ca84828501611131565b91505092915050565b6112dc81611108565b82525050565b60006020820190506112f760008301846112d3565b92915050565b60008060408385031215611314576113136110e3565b5b600061132285828601611131565b925050602061133385828601611131565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061138457607f821691505b6020821081036113975761139661133d565b5b50919050565b7f4f6e6c79204e46544d616e616765722063616e206d696e740000000000000000600082015250565b60006113d360188361103c565b91506113de8261139d565b602082019050919050565b60006020820190508181036000830152611402816113c6565b9050919050565b7f416d6f756e74206d757374206265203e20300000000000000000000000000000600082015250565b600061143f60128361103c565b915061144a82611409565b602082019050919050565b6000602082019050818103600083015261146e81611432565b9050919050565b7f4d616e61676572206973206c6f636b6564000000000000000000000000000000600082015250565b60006114ab60118361103c565b91506114b682611475565b602082019050919050565b600060208201905081810360008301526114da8161149e565b9050919050565b7f496e76616c696420616464726573730000000000000000000000000000000000600082015250565b6000611517600f8361103c565b9150611522826114e1565b602082019050919050565b600060208201905081810360008301526115468161150a565b9050919050565b600060608201905061156260008301866112d3565b61156f60208301856111f2565b61157c60408301846111f2565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115be82611146565b91506115c983611146565b92508282019050808211156115e1576115e0611584565b5b9291505056fea2646970667358221220da6efea6f9cc0ba0af6067fbbdaaaf9a6b86f24dc685a40380a875c210edb19864736f6c634300081c0033",
  linkReferences: {},
  deployedLinkReferences: {},
};

async function Main() {
  const Config = {
    Url: `https://sepolia.infura.io/v3/${process.env.RPC_KEY}`,
    Account: process.env.PRIVATE_KEY,
    chainId: 11155111,
  };

  console.log(Config);

  const provider = new ethers.JsonRpcProvider(Config.Url);
  const Signer = new ethers.Wallet(Config.Account, provider);

  const BRTX = new ethers.Contract(brtx.address, brtx.abi, Signer);

  console.log(await BRTX.nftManager());
  console.log(await BRTX.managerLocked());

  const tx1 = await BRTX.setNFTManager(
    "0x4238D6a6f740d84827b80d5c1e9984907e415c6f"
  );
  await tx1.wait();

  const tx2 = await BRTX.lockManager();
  await tx2.wait();

  console.log(await BRTX.nftManager());
  console.log(await BRTX.managerLocked());
}

Main().catch((err) => {
  console.log(err);
});
