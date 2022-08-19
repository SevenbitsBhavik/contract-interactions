import React, { useState , useEffect } from 'react';
import {ethers} from 'ethers';
import ReactDOM from 'react-dom/client';
const contractABI = require("./contract_abi.json");
const contractAddress = "0xDD336065303D8605D0be13DfeAF942a7187703a1";
const salecontractABI = require("./sale_contract_abi.json");
const daicontractABI = require("./dai_contract_abi.json");
const jsonProvider = new ethers.providers.Web3Provider(window.ethereum);
const Signer = jsonProvider.getSigner();
const saleContractAddress = "0x4A101CA6230208796421510BC34a75D4Adf8Dc96";
const daiContractDetailsWithSigner = new ethers.Contract("0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa", daicontractABI, Signer);


export default function App(){
  
  const [Amount, setAmount] = useState();
  const [Details, setDetails] = useState({selectedAddress:"-",balanceinEther:"-"});
  const [ContractInfo, setContractInfo] = useState({name:"-",symbol:"-",totalSupply:"-"});
  const [BuyTokenDetails, setBuyTokenDetails] = useState({hash:"-"});

  useEffect(() => {
    // 👇️ only runs once
    console.log('useEffect ran');
    // ------------------------------------------------------Contract Interaction Function -----------------------------------------------------------//
    const ContractInteraction = async() => {
      const provider = "https://kovan.infura.io/v3/e62e0e7d09274947814633fc5bddafa1";
      const jsonProvider = new ethers.providers.JsonRpcProvider(provider)
      const erc20 = new ethers.Contract(
        contractAddress,
        contractABI,
        jsonProvider
        );
        console.log(erc20)
      const name = await erc20.name();
      const symbol = await erc20.symbol();
      const supply = await erc20.totalSupply();
      const totalSupply = ethers.utils.formatUnits(supply, "wei");
      console.log(name)
      setContractInfo({name,symbol,totalSupply})
      console.log(ContractInfo.name)
}

    ContractInteraction();
  }, [])

// ------------------------------------------------------Connect to Metamask Function -----------------------------------------------------------//

  const connectToMetamask = async() => {
    const accounts = await jsonProvider.send("eth_requestAccounts", []);
    const selectedAddress = accounts[0];
    const balance = await jsonProvider.getBalance(accounts[0]);
    const balanceinEther = ethers.utils.formatEther(balance);
    setDetails({ selectedAddress ,balanceinEther })
  }

// ------------------------------------------------------Change event Function -----------------------------------------------------------//
  const handleChange = (event) => {
    if(event.target.value < 0){
      window.alert("please enter corre  ct value")
    }
    else{
      setAmount(event.target.value);
      console.log(Amount);

    }
  }

  // ------------------------------------------------------Buy Token Function -----------------------------------------------------------//
  const buyToken = async() => {
    const accounts = await jsonProvider.send("eth_requestAccounts", []);
    const selectedAddress = accounts[0];  
    const balance = await jsonProvider.getBalance(accounts[0]);
    const balanceinEther = ethers.utils.formatEther(balance);
    setDetails({ selectedAddress ,balanceinEther })
    const amount = Amount;

    const erc20 = new ethers.Contract(
      saleContractAddress,
      salecontractABI,
      Signer
      ); 
    const decimals = 18;
    const finalAmount = ethers.utils.parseUnits(amount.toString(), decimals);
    let approve = await daiContractDetailsWithSigner.approve(saleContractAddress,finalAmount,{gasLimit:104256});
    window.alert("Transaction Approved with hash : " + await approve.hash);
    const buy = await erc20.buyToken(finalAmount,{gasLimit:104256})
    const hash = await buy.hash;
    window.alert("Transaction Successfull with hash : " + hash);
    setBuyTokenDetails({hash});
  }

  // ------------------------------------------------------return Function -----------------------------------------------------------//
      return (
        <div>
          <div><center>
          <br></br> <br></br>
           <h3>Address : {Details.selectedAddress}</h3>
           <h3>Balance : {Details.balanceinEther}</h3>
           <br></br> <br></br>
           <button onClick={connectToMetamask}>Connect to Metamask</button>
           </center></div>
           <br></br> <br></br>
        <center><h1>Token Details</h1>
            <br></br>
            <br></br>
            <br></br>
            <table border ="2px solid black" width="30%">
              <th><b>Token Information</b></th>
              <tr>
                <td>Total Token Supply</td>
                <td>{ContractInfo.totalSupply}</td>
              </tr>
    
              <tr>
                <td >Total Token Sale</td>
                <td>{ContractInfo.name}</td>
              </tr>
    
              <tr>
                <td>Tokens symbol</td>
                <td>{ContractInfo.symbol}</td>
              </tr>
    
              <tr>
                <td>Token value</td>
                <td>{ContractInfo.symbol} = $1 BNB</td>
              </tr>
    
              <tr>
                <td>Accepted</td>
                <td>BNB</td>
              </tr>
            </table>
            <br></br>
            <br />
            <div>
                <label>Amount to buy : &nbsp;
                  <input placeholder='Enter Value' type='Number' min='0' name='amount' value = {Amount} onChange={handleChange}></input>
                </label>
                <br></br><br></br>
                <button type='Submit' onClick={buyToken}>Buy Token</button>
                <br></br><br></br>
                  <p> Transaction Hash = {BuyTokenDetails.hash} </p>
                
                {/* <input type="submit" value="Buy Token" /> */}
            </div>
            <br></br>
            </center>
      </div>
    );
  
  }