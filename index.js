import Moralis from "moralis";

async function main() {
    Moralis.start({
        apiKey: "YOUR_KEY",
    });
    const response = await Moralis.Streams.add({
        description: "NFT transfers",
        webhookUrl: "https://webhook.site/4c9cda71-1c67-4990-8bbe-341eb5721f51",
        chains: ["0x5"],
        tag: "nft_transfers",
        allAddresses: false,
        includeNativeTxs: false,
        includeContractLogs: true,
        includeInternalTxs: false,
        includeAllTxLogs: false,
        topic0: [
            "Transfer(address,address,uint256)",
            "TransferSingle(address,address,address,uint256,uint256)",
            "TransferBatch(address,address,address,uint256[],uint256[])",
        ],
        abi: [
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
                        indexed: true,
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                ],
                name: "Transfer",
                type: "event",
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: "address",
                        name: "operator",
                        type: "address",
                    },
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
                        internalType: "uint256[]",
                        name: "ids",
                        type: "uint256[]",
                    },
                    {
                        indexed: false,
                        internalType: "uint256[]",
                        name: "values",
                        type: "uint256[]",
                    },
                ],
                name: "TransferBatch",
                type: "event",
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: "address",
                        name: "operator",
                        type: "address",
                    },
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
                        name: "id",
                        type: "uint256",
                    },
                    {
                        indexed: false,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256",
                    },
                ],
                name: "TransferSingle",
                type: "event",
            },
        ],
    });
}

main().then(() => console.log("stream created"));
