/** @format */

import ethers from "ethers";
const contractABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const contractAddress = "0xa540b5061908b2a2a873c0000ed3882718b32c23";
const privateKey =
  "a1fd1aaafec01bd86ea80ccbe856168b2ecdd7ead53c764ac6e1f7ff4864452e";
const provider = new ethers.providers.JsonRpcProvider(
  "https://devnet.neonevm.org"
);
let number = 300;
const wallet = new ethers.Wallet(privateKey, provider);

const contract = new ethers.Contract(contractAddress, contractABI, wallet);

async function counter() {
  for (var i = 0; i < 10000000; i++) {
    const nonce = await wallet.getTransactionCount();
    console.log(nonce);
    number = number + 50;
    const customGasPrice = ethers.utils.parseUnits(`${number}`, "gwei");
    console.log(customGasPrice);
    console.log("hey");
    let tx = await contract.store(5, {
      nonce: nonce,
      gasPrice: customGasPrice,
    });
    await tx.wait();
    setTimeout(() => {
      console.log("waiting");
    }, 5000);
    console.log(tx.nonce);
  }
}
counter();
