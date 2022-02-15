/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Staking, StakingInterface } from "../Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rewardPerPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tps",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "claimAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newTps",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newTps",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "UnStaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    ],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addressOfStaker",
        type: "address",
      },
    ],
    name: "getStakeInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "stake",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardMissed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardGained",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardClaimed",
            type: "uint256",
          },
        ],
        internalType: "struct Staking.Staker",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [],
    name: "paused",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingInfo",
    outputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rewardPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardPerPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tps",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initialTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdateTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "periodNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "unStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620035d9380380620035d9833981810160405281019062000037919062000284565b6000600160006101000a81548160ff021916908315150217905550620000867f7f39319828694b571deb50d4e25dac829c66ebf95033a6e9873548532b7962a260001b620001dc60201b60201c565b620000ba7f1ce13ee5ae4adb79b6b46e791485395a2f75a82f3a2d826fd14ee7faba0c235e60001b620001dc60201b60201c565b620000ee7f9bf9081485cd71e22accfe81817d25e2b92e42bcde9c5b9c869c5fece24f7eb760001b620001dc60201b60201c565b6040518061010001604052808573ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152602001600081526020018281526020014281526020014281526020016001815250600260008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a0820151816005015560c0820151816006015560e0820151816007015590505050505050620002f6565b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200021182620001e4565b9050919050565b620002238162000204565b81146200022f57600080fd5b50565b600081519050620002438162000218565b92915050565b6000819050919050565b6200025e8162000249565b81146200026a57600080fd5b50565b6000815190506200027e8162000253565b92915050565b60008060008060808587031215620002a157620002a0620001df565b5b6000620002b18782880162000232565b9450506020620002c4878288016200026d565b9350506040620002d7878288016200026d565b9250506060620002ea878288016200026d565b91505092959194509250565b6132d380620003066000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063703ec8c41161008c578063a694fc3a11610066578063a694fc3a14610229578063c345315314610245578063d547741f14610275578063ef5cfb8c14610291576100df565b8063703ec8c4146101b657806391d14854146101db578063a217fddf1461020b576100df565b806336568abe116100bd57806336568abe146101605780635c975abb1461017c5780636c217a021461019a576100df565b806301ffc9a7146100e4578063248a9ca3146101145780632f2ff15d14610144575b600080fd5b6100fe60048036038101906100f9919061257e565b6102ad565b60405161010b91906125c6565b60405180910390f35b61012e60048036038101906101299190612617565b610327565b60405161013b9190612653565b60405180910390f35b61015e600480360381019061015991906126cc565b610346565b005b61017a600480360381019061017591906126cc565b61036f565b005b6101846103f2565b60405161019191906125c6565b60405180910390f35b6101b460048036038101906101af9190612742565b610409565b005b6101be610a85565b6040516101d29897969594939291906127a0565b60405180910390f35b6101f560048036038101906101f091906126cc565b610adb565b60405161020291906125c6565b60405180910390f35b610213610b45565b6040516102209190612653565b60405180910390f35b610243600480360381019061023e919061281e565b610b4c565b005b61025f600480360381019061025a919061284b565b610f74565b60405161026c91906128dc565b60405180910390f35b61028f600480360381019061028a91906126cc565b611079565b005b6102ab60048036038101906102a6919061284b565b6110a2565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610320575061031f82611631565b5b9050919050565b6000806000838152602001908152602001600020600101549050919050565b61034f82610327565b6103608161035b61169b565b6116a3565b61036a8383611740565b505050565b61037761169b565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146103e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103db9061297a565b60405180910390fd5b6103ee8282611820565b5050565b6000600160009054906101000a900460ff16905090565b6104116103f2565b15610451576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610448906129e6565b60405180910390fd5b61047d7f543588a6c80a853e7a8b79124cd1c3275b580d2e00c235717b6056d68a1f83f260001b611901565b6104a97fed49a2824442d087bb2942b6292bfeb5de53e387c97f49628bbdf2e21e569ff360001b611901565b6104d57f79853ce96177ff5ef9d61bc5c5e1c630a244d4c43139fed49cb868744fe0fd9b60001b611901565b6105017f54b32f34fc59c986e23f0ecd53cf0b0060f2eb910c21cdbbc5733158d959114260001b611901565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610571576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056890612a78565b60405180910390fd5b61059d7f0107f453c3ba010c5abc90fe6467256148437e65473c24a3e76d96e96c5a6a5160001b611901565b6105c97ffb177670235aa014c13ed4da30c3308daca7fbf97c8524b38f24d25cc0cec22f60001b611901565b6105f57f349f773747a76717d9bdf382df9323b6efd96e6b8d455bb7b943cb54ed92969a60001b611901565b6106217f74f868bf4ba556ae358eb4ad7788ae9cd742ef3f36007dee032412f5b9e76bb460001b611901565b81600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015410156106a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069d90612b0a565b60405180910390fd5b6106d27f078c2583afb2b83a4501567f29a6dc0da20b10e44eb6d50ae1b4269953f87dfd60001b611901565b6106fe7f455177c2ae9a9103b4b3bf7f2b8839ca0e39accec7965efe892b112c4ad5ad9460001b611901565b61072a7f4424d33e8cdb7b7f306ecee54d9c372e7d485dac1847544886ec59e96ad6b59260001b611901565b610732611904565b61075e7f2b81f0a24903fb37a8f63078e2c06c85d81eed837fc07e0f55ad0e3e57fdc86860001b611901565b61078a7f51de4f577d51e79147654689ee4cedfd8e27588f3aee089ea3f0dec35767c71660001b611901565b81600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546107dc9190612b59565b9250508190555061080f7fb76fd27145202199603dcd5692bcea99d20adb86b02bead8fe0773badfcb920660001b611901565b61083b7f1d49e748266d9cd706145e9a2831ed2e4018d8ee5169b8d58954146319ba866060001b611901565b61088b8183600260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611f419092919063ffffffff16565b6108b77f5a4aa9f61a21b854995c3777d3a262f7a288df12380ff5cffe5b35d2464bfae960001b611901565b6108e37f07dd85018f652e84881d2d118c61241b9cccd591f9adb4d72396db94d997186260001b611901565b670de0b6b3a7640000600260040154836108fd9190612b8d565b6109079190612c16565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008282546109589190612c47565b9250508190555061098b7f5d021242dc41016e97ba39a191e50d37a68a121ce51b0580043687dce85a0dd760001b611901565b6109b77f2ba0e5b7e2f63c664ea7c56ddd37f1e18e334a9ee29ae22a1b4847635057300160001b611901565b81600260030160008282546109cc9190612b59565b925050819055506109ff7f8b256985a3960785cd01b5cc16f87a74af3cde2d7c7d092209346404c3fda41460001b611901565b610a2b7f3a371525926fe3cdeb1b6c45bd74ac1c7fda76ae73e7ef865a529d272baf0e6e60001b611901565b818173ffffffffffffffffffffffffffffffffffffffff167fb21468566084b4647a27ac78f8ace9328d286804439a8972a0b925990a2210a160026004015442604051610a79929190612c9d565b60405180910390a35050565b60028060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040154908060050154908060060154908060070154905088565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b610b546103f2565b15610b94576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8b906129e6565b60405180910390fd5b610bc07fc9bbe5cb942daa9a5260e4ac2913d3bc8836a33f7cd5120056089be4e6ee064360001b611901565b610bec7ffb99e79b20e2b09ac346fde4d61cb54603b8bb6ba992b37b8ad0e276480aee1760001b611901565b610c187f778c45393a6c71ff50720bbda2a47e3389c00d264e16d07ee09aab6047a5e28d60001b611901565b610c20611904565b610c4c7f8512a5439064bf0053c6e4cfed6e2cec9b4d1632857435efffec88ce0f5a2a3060001b611901565b610c787f26ca0e65cdac0585d1dab3cc9f1a62c1c5bfe495d75749bc52dc2b9d12188bd260001b611901565b610cca333083600260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611fc7909392919063ffffffff16565b610cf67fae4b93ed3447a44126885fa43bb0d3d8dc86f4e6fb0240aa151d15ec7eee515560001b611901565b610d227fac7fb65fb77182a9f63bcd69b9f8b82c92c5744acc3d997ccf44891a867a6a2960001b611901565b80600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254610d749190612c47565b92505081905550610da77f2381915c8c99f67daafd4ca43e91bc302b9e27be56e8c87245db68784437b4aa60001b611901565b610dd37f889c1176613556275656bb04c882d9abc3ac65e7e6fd320db63764da73dd3e9c60001b611901565b670de0b6b3a764000060026004015482610ded9190612b8d565b610df79190612c16565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254610e489190612c47565b92505081905550610e7b7f38b48b1e300877718f14b49ccc4da5444581fd8dda8b0fad357652e6c84de22c60001b611901565b610ea77f7adc62f9a65b58209307116d5f9a86dfc4d4ef0d138ecb4562a77c40ec263b7a60001b611901565b8060026003016000828254610ebc9190612c47565b92505081905550610eef7f742ffdde3065b608c2ec42d89868f943cf9203e19df60aae5fedc29d135d074360001b611901565b610f1b7fc244843a32b5c2f538030bacd6c2920299df00a6990062c756f8f78bf176819760001b611901565b803373ffffffffffffffffffffffffffffffffffffffff167fb4caaf29adda3eefee3ad552a8e85058589bf834c7466cae4ee58787f70589ed60026004015442604051610f69929190612c9d565b60405180910390a350565b610f7c6124f9565b610fa87fc93f7a5d9e1b44fb7ceec26e1c13a6be8788ff95b6b72bb79f00bb55b2e3470560001b611901565b610fd47f5cf27f6f8198fed1cac81186c9c9353f25fc14eff9be1b9936f95e37f23f127a60001b611901565b6110007fb83cbe98ea299eabb4966c1c62a69895ec31b6064fcc6d467af097395092ebba60001b611901565b600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060800160405290816000820154815260200160018201548152602001600282015481526020016003820154815250509050919050565b61108282610327565b6110938161108e61169b565b6116a3565b61109d8383611820565b505050565b6110aa6103f2565b156110ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e1906129e6565b60405180910390fd5b6111167f3ef8af29619cf587bd108ae4076fb10e657e444269394e700f30272bf5521d1160001b611901565b6111427fcdf8f7b49f7173c2ebbbe537eea53483b84b208d557eff1636d367f7a2d07e0060001b611901565b61116e7f99082d697f09bb245be7f85188b001d1466a5cd5039e0e90cf17188dd18ce9c160001b611901565b61119a7fd5697234975620e7f5a11b388e569f34b81e9bcea51ef74ccdc2e54014a1147a60001b611901565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561120a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120190612d38565b60405180910390fd5b6112367fb274793a61c35f8a5801952712541edf6104de0f17a8a9a92761a0ab0173a95060001b611901565b6112627f4981ef6205f8ed5cdc76a3510c2ea70499a3479dae2205b646ae48288705367860001b611901565b61128e7ff9da450569e6decd20a554e8f1acbcaaab284225c27022fd1b3336a1cfceac1960001b611901565b611296611904565b6112c27f3affb3eaf675527d59c61ad964b6aeb2dbe7e1504ea0cbbc32def3c6af713b9860001b611901565b6112ee7fa422f2bd5c14a5ec879a5d08ada5f7223b51c40c69c339c89f508fbed742f33860001b611901565b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030154600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154670de0b6b3a7640000600260040154600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546114159190612b8d565b61141f9190612c16565b6114299190612b59565b6114339190612c47565b61143d9190612b59565b905061146b7f18a8c49ad05625aae50f26875735eab11d48ef6e3a967bbea852f40dcc2d4a7860001b611901565b6114977f49c73117252e0c16accb4f27d09cdf175d09a9685f60800eb2514aa6649437de60001b611901565b80600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018190555061150a7f60372e6d6edbc57060b437d56073bee72b1004396fdbb2f34fb16cd78a9cc9ca60001b611901565b6115367f3ea770cac2270d5fc85182ccf293ef6651e7e1c9b4fdd91ada7afc01a964b11860001b611901565b6115868282600260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611f419092919063ffffffff16565b6115b27f6f338920ac009d328b9e555d1bdd8169a34fc178231e297a9b096ab46f28e82b60001b611901565b6115de7f4c3ca0621c6d343a318d85e08d52d36dee6ef420e1eef930ef2a6532bbe53c1460001b611901565b808273ffffffffffffffffffffffffffffffffffffffff167f987d620f307ff6b94d58743cb7a7509f24071586a77759b77c2d4e29f75a2f9a426040516116259190612d58565b60405180910390a35050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b6116ad8282610adb565b61173c576116d28173ffffffffffffffffffffffffffffffffffffffff166014612050565b6116e08360001c6020612050565b6040516020016116f1929190612e85565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117339190612f09565b60405180910390fd5b5050565b61174a8282610adb565b61181c57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506117c161169b565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b61182a8282610adb565b156118fd57600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506118a261169b565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b50565b6119307fd2741a7115cfb26ec3fdd86d92ed30e9328a543e45f9ad7d07e675b115f3567360001b611901565b61195c7f3ef8e7220bfe7a6590dec92a122cb0c30fa55ce49a1f352d84a7a4ad142eb0ab60001b611901565b6119887f5113a803f728d238f21c8f2fc9c688740e7e57fa1b2e742785b233291262df5160001b611901565b60006002600601544261199b9190612b59565b90506119c97f70f6b8d215129f377be701bc71f457ba4e7bb5789d066179edd0fb8affd48f4960001b611901565b6119f57f8402d4fb987e3f32d9dceb71356ff4d7b51f5e957a5969cd23c0a89c87c9296860001b611901565b60006002600301541115611eaf57611a2f7f3f3432bd74e98d7dce5ec4342f3a1914ce5b13e6b6995f019e154bde54aa2ea560001b611901565b611a5b7fe8c8b1e135fa9d8cf082b98c8e5ac3120857331dc9e54b6ba2bdab578a572de360001b611901565b611a877f9fccd5634d29c856e4859fc7e09379f4a75140bb24fe49ea826836ee9622384260001b611901565b6001600260070154611a999190612c47565b600260010154611aa99190612b8d565b600260050154611ab99190612c47565b4210611e7d57611aeb7f257ba00588e0fe185a0fa076048163e27dd6bd68fe9211398fd0ec8b7f9dcda760001b611901565b611b177f699ce61a990adccacad9451e755e70adbbd81125772cfee1cd6239a158de618460001b611901565b611b437f79785f5b038c5fff6ce764a33699f7cba50c8f0c7d9e9969be67185ad2ffe39f60001b611901565b60028060010154611b549190612b8d565b8110611caf57611b867f3f4afbc11816385bf385874b4326533eabafcee4204a2c10f7a20f1164314f2d60001b611901565b611bb27fc335f748b6ebd07d4c166ec92d2da60ea2c485f1bacfcdd039a4e9abf0ff337160001b611901565b611bde7f3a8c1beeef48830319e8a67a74fa6abfd878099e738b4a6272840ea4693fee2c60001b611901565b600060026001015460026006015442611bf79190612b59565b611c019190612c16565b9050611c2f7f48a19e54fcb022ec7ac8becc70f5a0da959e2d510ef29212a8c9583193dcf4af60001b611901565b611c5b7ff536279491bc40a7459c674c285dd12a73cb692f8b25b742316addf963beb80460001b611901565b80600260030154670de0b6b3a76400006002800154611c7a9190612b8d565b611c849190612c16565b611c8e9190612b8d565b60026004016000828254611ca29190612c47565b9250508190555050611d92565b611cdb7f5376481763869b140fc7c801c5cbe4929972735b95c246924e7193e77b9165a260001b611901565b611d077ff51c941c438a06deaf2a88ccfff11a5f21d52494c0dceea0a9d88ed6983b457c60001b611901565b611d337fa98d14760b0dbea38aac78b6a09df0fe0659488d0a2d40d639882e266ab8a16660001b611901565b600260010154600260030154611d499190612b8d565b670de0b6b3a7640000600280015483611d629190612b8d565b611d6c9190612b8d565b611d769190612c16565b60026004016000828254611d8a9190612c47565b925050819055505b611dbe7fe8ae3abdcd2f261c57f75acac75506d918ccafaabc7367641b42c428b95528b560001b611901565b611dea7f0c055ad81440f7ec8173083bd13662084d0b5863e797eb8fd13e157795aa7a9560001b611901565b60026001015481611dfb9190612c16565b60026007016000828254611e0f9190612c47565b92505081905550611e427f669ccdc0aa0a05a82c3afbe82bac00b0b96c8c472df8b03ad1333a289c06808960001b611901565b611e6e7f7b68074c1d6ae4a3f93ba1a84a423b02e31c3a4e845904577bbc26b20da1104160001b611901565b42600260060181905550611eaa565b611ea97f833ee1719b4eee7efce976e158acbfff3f9c5e2aa2fe8a2783809e9dab3e9a3960001b611901565b5b611f3e565b611edb7f2eb78aaff837f0dbf41bd33cde1c94278120249640af4b293383d6d941e8411b60001b611901565b611f077f27982dcde25c95ea2bd7f698840332ea83111f9eeb2b522984bd5469df1c97cc60001b611901565b611f337f2e2c20a8474b95d719b9f1f7985c9de662b8f9ab98acd611d229b5f493d2cca360001b611901565b426002600601819055505b50565b611fc28363a9059cbb60e01b8484604051602401611f60929190612f2b565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061228c565b505050565b61204a846323b872dd60e01b858585604051602401611fe893929190612f54565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061228c565b50505050565b6060600060028360026120639190612b8d565b61206d9190612c47565b67ffffffffffffffff81111561208657612085612f8b565b5b6040519080825280601f01601f1916602001820160405280156120b85781602001600182028036833780820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106120f0576120ef612fba565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061215457612153612fba565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026121949190612b8d565b61219e9190612c47565b90505b600181111561223e577f3031323334353637383961626364656600000000000000000000000000000000600f8616601081106121e0576121df612fba565b5b1a60f81b8282815181106121f7576121f6612fba565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c94508061223790612fe9565b90506121a1565b5060008414612282576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122799061305f565b60405180910390fd5b8091505092915050565b60006122ee826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166123539092919063ffffffff16565b905060008151111561234e578080602001905181019061230e91906130ab565b61234d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123449061314a565b60405180910390fd5b5b505050565b6060612362848460008561236b565b90509392505050565b6060824710156123b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123a7906131dc565b60405180910390fd5b6123b98561247f565b6123f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123ef90613248565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161242191906132af565b60006040518083038185875af1925050503d806000811461245e576040519150601f19603f3d011682016040523d82523d6000602084013e612463565b606091505b5091509150612473828286612492565b92505050949350505050565b600080823b905060008111915050919050565b606083156124a2578290506124f2565b6000835111156124b55782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124e99190612f09565b60405180910390fd5b9392505050565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61255b81612526565b811461256657600080fd5b50565b60008135905061257881612552565b92915050565b60006020828403121561259457612593612521565b5b60006125a284828501612569565b91505092915050565b60008115159050919050565b6125c0816125ab565b82525050565b60006020820190506125db60008301846125b7565b92915050565b6000819050919050565b6125f4816125e1565b81146125ff57600080fd5b50565b600081359050612611816125eb565b92915050565b60006020828403121561262d5761262c612521565b5b600061263b84828501612602565b91505092915050565b61264d816125e1565b82525050565b60006020820190506126686000830184612644565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006126998261266e565b9050919050565b6126a98161268e565b81146126b457600080fd5b50565b6000813590506126c6816126a0565b92915050565b600080604083850312156126e3576126e2612521565b5b60006126f185828601612602565b9250506020612702858286016126b7565b9150509250929050565b6000819050919050565b61271f8161270c565b811461272a57600080fd5b50565b60008135905061273c81612716565b92915050565b6000806040838503121561275957612758612521565b5b60006127678582860161272d565b9250506020612778858286016126b7565b9150509250929050565b61278b8161268e565b82525050565b61279a8161270c565b82525050565b6000610100820190506127b6600083018b612782565b6127c3602083018a612791565b6127d06040830189612791565b6127dd6060830188612791565b6127ea6080830187612791565b6127f760a0830186612791565b61280460c0830185612791565b61281160e0830184612791565b9998505050505050505050565b60006020828403121561283457612833612521565b5b60006128428482850161272d565b91505092915050565b60006020828403121561286157612860612521565b5b600061286f848285016126b7565b91505092915050565b6128818161270c565b82525050565b60808201600082015161289d6000850182612878565b5060208201516128b06020850182612878565b5060408201516128c36040850182612878565b5060608201516128d66060850182612878565b50505050565b60006080820190506128f16000830184612887565b92915050565b600082825260208201905092915050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000612964602f836128f7565b915061296f82612908565b604082019050919050565b6000602082019050818103600083015261299381612957565b9050919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b60006129d06010836128f7565b91506129db8261299a565b602082019050919050565b600060208201905081810360008301526129ff816129c3565b9050919050565b7f5374616b696e673a3a556e5374616b653a20696e76616c69642061646472657360008201527f7320746f20756e7374616b650000000000000000000000000000000000000000602082015250565b6000612a62602c836128f7565b9150612a6d82612a06565b604082019050919050565b60006020820190508181036000830152612a9181612a55565b9050919050565b7f5374616b696e673a3a556e5374616b653a20756e7374616b6520616d6f756e7460008201527f206578636565647320616d6f756e74206174207374616b650000000000000000602082015250565b6000612af46038836128f7565b9150612aff82612a98565b604082019050919050565b60006020820190508181036000830152612b2381612ae7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612b648261270c565b9150612b6f8361270c565b925082821015612b8257612b81612b2a565b5b828203905092915050565b6000612b988261270c565b9150612ba38361270c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612bdc57612bdb612b2a565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612c218261270c565b9150612c2c8361270c565b925082612c3c57612c3b612be7565b5b828204905092915050565b6000612c528261270c565b9150612c5d8361270c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612c9257612c91612b2a565b5b828201905092915050565b6000604082019050612cb26000830185612791565b612cbf6020830184612791565b9392505050565b7f5374616b696e673a3a556e5374616b653a20696e76616c69642061646472657360008201527f7320746f20636c61696d00000000000000000000000000000000000000000000602082015250565b6000612d22602a836128f7565b9150612d2d82612cc6565b604082019050919050565b60006020820190508181036000830152612d5181612d15565b9050919050565b6000602082019050612d6d6000830184612791565b92915050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b6000612db4601783612d73565b9150612dbf82612d7e565b601782019050919050565b600081519050919050565b60005b83811015612df3578082015181840152602081019050612dd8565b83811115612e02576000848401525b50505050565b6000612e1382612dca565b612e1d8185612d73565b9350612e2d818560208601612dd5565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b6000612e6f601183612d73565b9150612e7a82612e39565b601182019050919050565b6000612e9082612da7565b9150612e9c8285612e08565b9150612ea782612e62565b9150612eb38284612e08565b91508190509392505050565b6000601f19601f8301169050919050565b6000612edb82612dca565b612ee581856128f7565b9350612ef5818560208601612dd5565b612efe81612ebf565b840191505092915050565b60006020820190508181036000830152612f238184612ed0565b905092915050565b6000604082019050612f406000830185612782565b612f4d6020830184612791565b9392505050565b6000606082019050612f696000830186612782565b612f766020830185612782565b612f836040830184612791565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000612ff48261270c565b9150600082141561300857613007612b2a565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b60006130496020836128f7565b915061305482613013565b602082019050919050565b600060208201905081810360008301526130788161303c565b9050919050565b613088816125ab565b811461309357600080fd5b50565b6000815190506130a58161307f565b92915050565b6000602082840312156130c1576130c0612521565b5b60006130cf84828501613096565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000613134602a836128f7565b915061313f826130d8565b604082019050919050565b6000602082019050818103600083015261316381613127565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006131c66026836128f7565b91506131d18261316a565b604082019050919050565b600060208201905081810360008301526131f5816131b9565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000613232601d836128f7565b915061323d826131fc565b602082019050919050565b6000602082019050818103600083015261326181613225565b9050919050565b600081519050919050565b600081905092915050565b600061328982613268565b6132938185613273565b93506132a3818560208601612dd5565b80840191505092915050565b60006132bb828461327e565b91508190509291505056fea164736f6c6343000809000a";

type StakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staking__factory extends ContractFactory {
  constructor(...args: StakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _asset: string,
    _rewardPeriod: BigNumberish,
    _rewardPerPeriod: BigNumberish,
    _tps: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Staking> {
    return super.deploy(
      _asset,
      _rewardPeriod,
      _rewardPerPeriod,
      _tps,
      overrides || {}
    ) as Promise<Staking>;
  }
  getDeployTransaction(
    _asset: string,
    _rewardPeriod: BigNumberish,
    _rewardPerPeriod: BigNumberish,
    _tps: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _asset,
      _rewardPeriod,
      _rewardPerPeriod,
      _tps,
      overrides || {}
    );
  }
  attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}
