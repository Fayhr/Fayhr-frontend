import { createThirdwebClient, defineChain, getContract } from "thirdweb";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export const client = createThirdwebClient({
  clientId: CLIENT_ID as string,
});

export const chain = defineChain(4202);

const contractAddress = "0xAFE36892a12da935cd1006dB78282a5E128a6673";
const contractAbi = 
 [
    {
      type: "constructor",
      inputs: [
        { name: "_admin", type: "address", internalType: "address" },
        { name: "_tokenAddress", type: "address", internalType: "address" },
      ],
      stateMutability: "nonpayable",
    },
    { type: "receive", stateMutability: "payable" },
    {
      type: "function",
      name: "approveToken",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "cancelCrowdfund",
      inputs: [
        { name: "crowdfundId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "claimToken",
      inputs: [
        { name: "crowdfundId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "contributions",
      inputs: [
        { name: "", type: "uint256", internalType: "uint256" },
        { name: "", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "createPoll",
      inputs: [
        { name: "crowdfundId", type: "uint256", internalType: "uint256" },
        { name: "_name", type: "string", internalType: "string" },
        { name: "_requiredYesVotes", type: "uint256", internalType: "uint256" },
        { name: "verdict", type: "bool", internalType: "bool" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "crowdfundTypes",
      inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      outputs: [
        { name: "id", type: "uint256", internalType: "uint256" },
        { name: "name", type: "string", internalType: "string" },
        { name: "requiredYesVotes", type: "uint256", internalType: "uint256" },
        { name: "availableYesVotes", type: "uint256", internalType: "uint256" },
        { name: "slot", type: "uint256", internalType: "uint256" },
        { name: "startTime", type: "uint256", internalType: "uint256" },
        { name: "endTime", type: "uint256", internalType: "uint256" },
        { name: "softCap", type: "uint256", internalType: "uint256" },
        { name: "hardCap", type: "uint256", internalType: "uint256" },
        { name: "totalContributed", type: "uint256", internalType: "uint256" },
        {
          name: "authorization",
          type: "uint8",
          internalType: "enum Fayhr.Authorization",
        },
        { name: "closed", type: "bool", internalType: "bool" },
        { name: "pollClosed", type: "bool", internalType: "bool" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "deapproveToken",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "delegateToken",
      inputs: [
        { name: "crowdfundId", type: "uint256", internalType: "uint256" },
        { name: "_slotUnit", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "deleteContract",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "deleteCrowdfundAndPoll",
      inputs: [
        { name: "crowdfundId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "getAdmin",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getContribution",
      inputs: [
        { name: "crowdfundId", type: "uint256", internalType: "uint256" },
        { name: "contributor", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getCrowdfund",
      inputs: [
        { name: "crowdfundId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [
        {
          name: "",
          type: "tuple",
          internalType: "struct Fayhr.CrowdfundType",
          components: [
            { name: "id", type: "uint256", internalType: "uint256" },
            { name: "name", type: "string", internalType: "string" },
            {
              name: "requiredYesVotes",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "availableYesVotes",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "slot", type: "uint256", internalType: "uint256" },
            { name: "startTime", type: "uint256", internalType: "uint256" },
            { name: "endTime", type: "uint256", internalType: "uint256" },
            { name: "softCap", type: "uint256", internalType: "uint256" },
            { name: "hardCap", type: "uint256", internalType: "uint256" },
            {
              name: "totalContributed",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "authorization",
              type: "uint8",
              internalType: "enum Fayhr.Authorization",
            },
            { name: "closed", type: "bool", internalType: "bool" },
            { name: "pollClosed", type: "bool", internalType: "bool" },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "hasUserVoted",
      inputs: [
        { name: "crowdfundId", type: "uint256", internalType: "uint256" },
        { name: "user", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "hasVoted",
      inputs: [
        { name: "", type: "uint256", internalType: "uint256" },
        { name: "", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "isActive",
      inputs: [],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "nextCrowdfundId",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "receiveToken",
      inputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "restartCanceledCrowdfund",
      inputs: [
        { name: "crowdfundId", type: "uint256", internalType: "uint256" },
        { name: "_slot", type: "uint256", internalType: "uint256" },
        { name: "_startTime", type: "uint256", internalType: "uint256" },
        { name: "_endTime", type: "uint256", internalType: "uint256" },
        { name: "_softCap", type: "uint256", internalType: "uint256" },
        { name: "_hardCap", type: "uint256", internalType: "uint256" },
        { name: "verdict", type: "bool", internalType: "bool" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "startCrowdfund",
      inputs: [
        { name: "crowdfundId", type: "uint256", internalType: "uint256" },
        { name: "_slot", type: "uint256", internalType: "uint256" },
        { name: "_startTime", type: "uint256", internalType: "uint256" },
        { name: "_endTime", type: "uint256", internalType: "uint256" },
        { name: "_softCap", type: "uint256", internalType: "uint256" },
        { name: "_hardCap", type: "uint256", internalType: "uint256" },
        { name: "verdict", type: "bool", internalType: "bool" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "tokenAddress",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "tokenFaucet",
      inputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "vote",
      inputs: [
        { name: "crowdfundId", type: "uint256", internalType: "uint256" },
        { name: "choice", type: "bool", internalType: "bool" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "withdrawCrowdfund",
      inputs: [
        { name: "crowdfundId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "ContractDeactivatedBy",
      inputs: [
        {
          name: "deactivator",
          type: "address",
          indexed: false,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "CrowdfundAndPollDeleted",
      inputs: [
        {
          name: "id",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "CrowdfundCanceled",
      inputs: [
        {
          name: "id",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "CrowdfundCreated",
      inputs: [
        {
          name: "id",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "slot",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "startTime",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "endTime",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "softCap",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "hardCap",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "CrowdfundStarted",
      inputs: [
        {
          name: "id",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "slot",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "startTime",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "endTime",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "softCap",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "hardCap",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "CrowdfundWithdrawn",
      inputs: [
        {
          name: "id",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "PollCreated",
      inputs: [
        {
          name: "id",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "name",
          type: "string",
          indexed: false,
          internalType: "string",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "TokenApproval",
      inputs: [
        {
          name: "by",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "TokenClaimed",
      inputs: [
        {
          name: "id",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "TokenDeapproval",
      inputs: [
        {
          name: "by",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "TokenDelegated",
      inputs: [
        {
          name: "id",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "slotUnit",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "TokenFaucetSent",
      inputs: [
        {
          name: "to",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "TokensReceived",
      inputs: [
        {
          name: "from",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "VotePlaced",
      inputs: [
        {
          name: "voter",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        { name: "vote", type: "bool", indexed: false, internalType: "bool" },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "nonFunctionDeposit",
      inputs: [
        {
          name: "sender",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    { type: "error", name: "ReentrancyGuardReentrantCall", inputs: [] },
  ] as const;

export const CONTRACT = getContract({
  client: client,
  chain: chain,
  address: contractAddress,
  abi: contractAbi,
});
