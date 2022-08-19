import {ethers} from 'ethers'

const contractABI = require("../contract-abi.json");
const contractAddress = "0x6f3f635A9762B47954229Ea479b4541eAF402A6A";

export const newContract = new ethers.Contract(
    contractABI,
    contractAddress
);

export const loadCurrentMessage = async () => {
    const message = await newContract.methods.message().call();
    return message;
};