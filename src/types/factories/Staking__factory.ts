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
        name: "_rewardTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rewardValue",
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
  "0x608060405234801561001057600080fd5b506040516114d33803806114d383398101604081905261002f916100c5565b6001805460ff1916815560408051610100810182526001600160a01b0390961680875260208701869052908601849052600060608701819052608087018490524260a0880181905260c0880181905260e0909701839052600280546001600160a01b0319169092179091556003949094556004929092556005929092556006919091556007829055600891909155600955610110565b600080600080608085870312156100db57600080fd5b84516001600160a01b03811681146100f257600080fd5b60208601516040870151606090970151919890975090945092505050565b6113b48061011f6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063703ec8c41161008c578063a694fc3a11610066578063a694fc3a14610236578063c345315314610249578063d547741f1461028f578063ef5cfb8c146102a257600080fd5b8063703ec8c41461018357806391d14854146101f7578063a217fddf1461022e57600080fd5b806336568abe116100bd57806336568abe146101525780635c975abb146101655780636c217a021461017057600080fd5b806301ffc9a7146100e4578063248a9ca31461010c5780632f2ff15d1461013d575b600080fd5b6100f76100f236600461111a565b6102b5565b60405190151581526020015b60405180910390f35b61012f61011a366004611144565b60009081526020819052604090206001015490565b604051908152602001610103565b61015061014b366004611179565b6102ec565b005b610150610160366004611179565b610317565b60015460ff166100f7565b61015061017e366004611179565b6103a8565b6002546003546004546005546006546007546008546009546101b2976001600160a01b03169695949392919088565b604080516001600160a01b0390991689526020890197909752958701949094526060860192909252608085015260a084015260c083015260e082015261010001610103565b6100f7610205366004611179565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b61012f600081565b610150610244366004611144565b6105e2565b61025c6102573660046111a5565b610713565b60405161010391908151815260208083015190820152604080830151908201526060918201519181019190915260800190565b61015061029d366004611179565b61078c565b6101506102b03660046111a5565b6107b2565b60006001600160e01b03198216637965db0b60e01b14806102e657506301ffc9a760e01b6001600160e01b03198316145b92915050565b600082815260208190526040902060010154610308813361094d565b61031283836109cb565b505050565b6001600160a01b038116331461039a5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6103a48282610a69565b5050565b60015460ff16156103ee5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610391565b6001600160a01b03811661046a5760405162461bcd60e51b815260206004820152602c60248201527f5374616b696e673a3a556e5374616b653a20696e76616c69642061646472657360448201527f7320746f20756e7374616b6500000000000000000000000000000000000000006064820152608401610391565b336000908152600c60205260409020548211156104ef5760405162461bcd60e51b815260206004820152603860248201527f5374616b696e673a3a556e5374616b653a20756e7374616b6520616d6f756e7460448201527f206578636565647320616d6f756e74206174207374616b6500000000000000006064820152608401610391565b6104f7610ae8565b50336000908152600c6020526040812080548492906105179084906111d6565b9091555050600254610533906001600160a01b03168284610c40565b600654670de0b6b3a76400009061054a90846111ed565b610554919061120c565b336000908152600c60205260408120600201805490919061057690849061122e565b9091555050600580548391906000906105909084906111d6565b90915550506006546040805191825242602083015283916001600160a01b038416917fb21468566084b4647a27ac78f8ace9328d286804439a8972a0b925990a2210a191015b60405180910390a35050565b60015460ff16156106285760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610391565b610630610ae8565b60065560025461064b906001600160a01b0316333084610cb8565b336000908152600c60205260408120805483929061066a90849061122e565b9091555050600654670de0b6b3a76400009061068690836111ed565b610690919061120c565b336000908152600c6020526040812060010180549091906106b290849061122e565b9091555050600580548291906000906106cc90849061122e565b909155505060065460408051918252426020830152829133917fb4caaf29adda3eefee3ad552a8e85058589bf834c7466cae4ee58787f70589ed910160405180910390a350565b61073e6040518060800160405280600081526020016000815260200160008152602001600081525090565b506001600160a01b03166000908152600c6020908152604091829020825160808101845281548152600182015492810192909252600281015492820192909252600390910154606082015290565b6000828152602081905260409020600101546107a8813361094d565b6103128383610a69565b60015460ff16156107f85760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610391565b610800610ae8565b506001600160a01b03811661087d5760405162461bcd60e51b815260206004820152602a60248201527f5374616b696e673a3a556e5374616b653a20696e76616c69642061646472657360448201527f7320746f20636c61696d000000000000000000000000000000000000000000006064820152608401610391565b336000908152600c602052604081206003810154600282015460018301546006549354929391929091670de0b6b3a7640000916108ba91906111ed565b6108c4919061120c565b6108ce91906111d6565b6108d8919061122e565b6108e291906111d6565b336000908152600c60205260409020600301819055600254909150610911906001600160a01b03168383610c40565b80826001600160a01b03167f987d620f307ff6b94d58743cb7a7509f24071586a77759b77c2d4e29f75a2f9a426040516105d691815260200190565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166103a457610989816001600160a01b03166014610cf6565b610994836020610cf6565b6040516020016109a5929190611272565b60408051601f198184030181529082905262461bcd60e51b8252610391916004016112f3565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166103a4576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610a253390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16156103a4576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6008546000908190610afa90426111d6565b60055490915015610c3357600954610b1390600161122e565b600354610b2091906111ed565b600754610b2d919061122e565b4210610c2e57600354610b419060026111ed565b8110610bb45760035460085460009190610b5b90426111d6565b610b65919061120c565b6005546004549192508291610b8290670de0b6b3a76400006111ed565b610b8c919061120c565b610b9691906111ed565b60068054600090610ba890849061122e565b90915550610c05915050565b600354600554610bc491906111ed565b600454610bd190836111ed565b610be390670de0b6b3a76400006111ed565b610bed919061120c565b60068054600090610bff90849061122e565b90915550505b600354610c12908261120c565b60098054600090610c2490849061122e565b9091555050426008555b610c38565b426008555b505060065490565b6040516001600160a01b03831660248201526044810182905261031290849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b031990931692909217909152610ea6565b6040516001600160a01b0380851660248301528316604482015260648101829052610cf09085906323b872dd60e01b90608401610c6c565b50505050565b60606000610d058360026111ed565b610d1090600261122e565b67ffffffffffffffff811115610d2857610d28611326565b6040519080825280601f01601f191660200182016040528015610d52576020820181803683370190505b509050600360fc1b81600081518110610d6d57610d6d61133c565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610d9c57610d9c61133c565b60200101906001600160f81b031916908160001a9053506000610dc08460026111ed565b610dcb90600161122e565b90505b6001811115610e50577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110610e0c57610e0c61133c565b1a60f81b828281518110610e2257610e2261133c565b60200101906001600160f81b031916908160001a90535060049490941c93610e4981611352565b9050610dce565b508315610e9f5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610391565b9392505050565b6000610efb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610f8b9092919063ffffffff16565b8051909150156103125780806020019051810190610f199190611369565b6103125760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610391565b6060610f9a8484600085610fa2565b949350505050565b60608247101561101a5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610391565b843b6110685760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610391565b600080866001600160a01b03168587604051611084919061138b565b60006040518083038185875af1925050503d80600081146110c1576040519150601f19603f3d011682016040523d82523d6000602084013e6110c6565b606091505b50915091506110d68282866110e1565b979650505050505050565b606083156110f0575081610e9f565b8251156111005782518084602001fd5b8160405162461bcd60e51b815260040161039191906112f3565b60006020828403121561112c57600080fd5b81356001600160e01b031981168114610e9f57600080fd5b60006020828403121561115657600080fd5b5035919050565b80356001600160a01b038116811461117457600080fd5b919050565b6000806040838503121561118c57600080fd5b8235915061119c6020840161115d565b90509250929050565b6000602082840312156111b757600080fd5b610e9f8261115d565b634e487b7160e01b600052601160045260246000fd5b6000828210156111e8576111e86111c0565b500390565b6000816000190483118215151615611207576112076111c0565b500290565b60008261122957634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115611241576112416111c0565b500190565b60005b83811015611261578181015183820152602001611249565b83811115610cf05750506000910152565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516112aa816017850160208801611246565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516112e7816028840160208801611246565b01602801949350505050565b6020815260008251806020840152611312816040850160208701611246565b601f01601f19169190910160400192915050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081611361576113616111c0565b506000190190565b60006020828403121561137b57600080fd5b81518015158114610e9f57600080fd5b6000825161139d818460208701611246565b919091019291505056fea164736f6c6343000809000a";

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
    _rewardTime: BigNumberish,
    _rewardValue: BigNumberish,
    _tps: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Staking> {
    return super.deploy(
      _asset,
      _rewardTime,
      _rewardValue,
      _tps,
      overrides || {}
    ) as Promise<Staking>;
  }
  getDeployTransaction(
    _asset: string,
    _rewardTime: BigNumberish,
    _rewardValue: BigNumberish,
    _tps: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _asset,
      _rewardTime,
      _rewardValue,
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
