# Simple Decentralized Application - Made With - React, Solidity, Hardhat, TailwindCSS

This project demonstrates a basic dApp that allows you to set and fetch messages from the smart contract deployed on a test network (FANTOM TESTNET in this Case, you can also deploy it on hardhat's localhost or some other testnets).

![image](https://user-images.githubusercontent.com/90638995/180461825-9dc1fdda-cc3b-4c41-a730-12a07e284399.png)


**Make Sure you have MetaMask installed or else you might get the alert**

## To Run this dApp in your system

1 - Compile the contract using - `npx hardhat compile`

2 - Run the local hardhat node- `npx hardhat node` -  (if you are gonna use hardhat accounts in the localhost:8545 network, if no then skip this step)

3 - If you are deploying it on any other testnet, make sure to update the hardhat config file with the network info (rpc, chainid..), I've already made for ropsten and fantom, make sure to paste in the private keys of your metamask wallet in the accounts part.

4 - now deploy it - `npx hardhat run scripts/deploy.js --network networkname`

5 - update the greeterAddress inside of the App.js file with address obtained after deploying the contract

![image](https://user-images.githubusercontent.com/90638995/180465521-7e7a579f-baf3-4a4e-a583-d5789ddf3cbb.png)


5 - run the react app - `npm start` or `npm run start` and you can interact with the dApp
