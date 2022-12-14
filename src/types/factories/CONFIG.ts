const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "quoteToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "FeeAddressTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
        name: "nftToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "quoteToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "SetFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "quoteToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldRoyaltiesProvider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newRoyaltiesProvider",
        type: "address",
      },
    ],
    name: "SetRoyaltiesProvider",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "setting",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proviousValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "UpdateSettings",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_enable",
        type: "bool",
      },
      {
        internalType: "address[]",
        name: "_quotes",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_feeAddresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_feeValues",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "_royaltiesProviders",
        type: "address[]",
      },
    ],
    name: "addNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftToken",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_quoteTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_feeValues",
        type: "uint256[]",
      },
    ],
    name: "batchSetFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftToken",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_quoteTokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_royaltiesProviders",
        type: "address[]",
      },
    ],
    name: "batchSetRoyaltiesProviders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftToken",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_quoteTokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_feeAddresses",
        type: "address[]",
      },
    ],
    name: "batchTransferFeeAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_nftToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_quoteToken",
        type: "address",
      },
    ],
    name: "checkAllowed",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_quoteToken",
        type: "address",
      },
    ],
    name: "checkEnables",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "feeAddresses",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "feeValues",
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
        name: "_nftToken",
        type: "address",
      },
    ],
    name: "getNftEffectiveQuotes",
    outputs: [
      {
        internalType: "address[]",
        name: "quotes",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftToken",
        type: "address",
      },
    ],
    name: "getNftQuotes",
    outputs: [
      {
        internalType: "address[]",
        name: "quotes",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nftEnables",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nftQuoteEnables",
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
        name: "_nftToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_quoteToken",
        type: "address",
      },
    ],
    name: "nftSettings",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "enable",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "nftQuoteEnable",
            type: "bool",
          },
          {
            internalType: "address",
            name: "feeAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "feeValue",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "royaltiesProvider",
            type: "address",
          },
        ],
        internalType: "struct IExchangeNFTConfig.NftSettings",
        name: "",
        type: "tuple",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "royaltiesProviders",
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
    inputs: [
      {
        internalType: "address",
        name: "_nftToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_quoteToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_feeValue",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_enable",
        type: "bool",
      },
    ],
    name: "setNftEnables",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftToken",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_quotes",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "_enable",
        type: "bool",
      },
    ],
    name: "setNftQuoteEnables",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_quoteToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_royaltiesProvider",
        type: "address",
      },
    ],
    name: "setRoyaltiesProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "keys",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "setSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "settings",
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
        name: "_nftToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_quoteToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeAddress",
        type: "address",
      },
    ],
    name: "transferFeeAddress",
    outputs: [],
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
];

export class ERCConfig__factory {
  static readonly abi = _abi;

  // static connect(
  //   address: string,
  //   signerOrProvider: Signer | Provider
  // ): IERC1271 {
  //   return new Contract(address, _abi, signerOrProvider) as IERC1271;
  // }
  static test() {
    return false;
  }
}
