import React, { useState } from 'react';
import {ethers} from 'ethers';
import ReactDOM from 'react-dom/client';
const contractABI = require("./contract_abi.json");
const contractAddress = "0xDD336065303D8605D0be13DfeAF942a7187703a1";

export default function App() {
  
  const [ContractInfo, setContractInfo] = useState({name:"-",symbol:"-",totalSupply:"-"});
  // const ContractInteraction = async(e) => {
  //   e.preventDefault();
  //   const provider = "https://kovan.infura.io/v3/e62e0e7d09274947814633fc5bddafa1";
  //   const jsonProvider = new ethers.providers.JsonRpcProvider(provider)
  //   const erc20 = new ethers.Contract(
  //     contractAddress,
  //     contractABI,
  //     jsonProvider
  //   );
  //   console.log(erc20)
  //   const name = await erc20.name();
  //   const symbol = await erc20.symbol();
  //   const supply = await erc20.totalSupply();
  //   const totalSupply = ethers.utils.formatUnits(supply, "ether");
  //   console.log(name)
  //   setContractInfo([
  //     name,symbol,totalSupply
  //   ])
  // }
  //   if(!ContractInfo.name){
  //   return (
  //       <div>
  //         <br></br>
  //         <button onClick={ContractInteraction}>Contract details</button>
  //         <br></br> <br></br>
  //         <button >Connect to Metamask</button>
  //         <br></br>
  //         <br></br>
  //       </div>
  //     )
  //   }
  // //   else{
      return (
        <h1> hELLO wORLD</h1>
        // <div>
        //   <br></br>
        //   <table border ="2px solid black" width="30%">
        //     <th colspan="2">Token Information</th>
        //     <tr>
        //       <td >Total Token Supply</td>
        //       <td >{ContractInfo.totalSupply}</td>
        //     </tr>
  
        //     <tr>
        //       <td >Total Token Sale</td>
        //       <td>{ContractInfo.symbol}</td>
        //     </tr>
  
        //     <tr>
        //       <td>Tokens symbol</td>
        //       <td>{ContractInfo.symbol}</td>
        //     </tr>
  
        //     <tr>
        //       <td>Token value</td>
        //       <td>{ContractInfo.symbol} = $1 BNB</td>
        //     </tr>
  
        //     <tr>
        //       <td>Accepted</td>
        //       <td>BNB</td>
        //     </tr>
        //   </table>
    //     // </div>
      );
    // }


}

// // async function usecontractInteraction(){
// //   const provider = "https://kovan.infura.io/v3/e62e0e7d09274947814633fc5bddafa1";
// //   const jsonProvider = new ethers.providers.JsonRpcProvider(provider)
// //   const erc20 = new ethers.Contract(
// //     contractAddress,
// //     contractABI,
// //     jsonProvider
// //   );
// //   console.log(erc20)
// //   const [name, setName] = useState();
// //   setName(await erc20.name());
// //   symbol = await erc20.symbol();
// //   const supply = await erc20.totalSupply();
// //   totalSupply = ethers.utils.formatUnits(supply, "ether");
// //   // console.log(totalSupply);

  
// // }

async function connectToMetamask() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const accounts = await provider.send("eth_requestAccounts", []);
  const balance = await provider.getBalance(accounts[0]);
  const balanceinEther = ethers.utils.formatEther(balance);
  // selectedAddress: accounts[0], balance:balanceinEther })
}

// // async function renderMetamask() {

// //   console.log(name);
// //   if(setName){
// //   return (
// //       <div>
// //         <br></br>
// //         <button onClick={usecontractInteraction()}>Contract details</button>
// //         <br></br> <br></br>
// //         <button onClick={connectToMetamask()}>Connect to Metamask</button>
// //         <br></br>
// //         <br></br>
// //       </div>
// //     )
// //   }
// //   else{
// //     return (
// //       <div>
// //         <br></br>
// //         <table border ="2px solid black" width="30%">
// //           <th colspan="2">Token Information</th>
// //           <tr>
// //             <td >Total Token Supply</td>
// //             <td >{}</td>
// //           </tr>

// //           <tr>
// //             <td >Total Token Sale</td>
// //             <td>{contractInteraction().symbol}</td>
// //           </tr>

// //           <tr>
// //             <td>Tokens symbol</td>
// //             <td>{contractInteraction().name}</td>
// //           </tr>

// //           <tr>
// //             <td>Token value</td>
// //             <td>{contractInteraction().symbol} = $1 BNB</td>
// //           </tr>

// //           <tr>
// //             <td>Accepted</td>
// //             <td>BNB</td>
// //           </tr>
// //         </table>
// //       </div>
// //     );
// //   }
// // }

// // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // root.render(renderMetamask());


// // ------------------------------------------------------------------------------------------------------------------------------------


// import React, {Component} from 'react'; 
// import './App.css';
// import {ethers} from 'ethers'
// const contractABI = require("./contract_abi.json");
// const contractAddress = "0xDD336065303D8605D0be13DfeAF942a7187703a1";

// const salecontractABI = require("./sale_contract_abi.json");
// const saleContractAddress = "0x4A101CA6230208796421510BC34a75D4Adf8Dc96";

// class App extends Component{
  
//   constructor(props){
//     super(props);
//     this.state = {
//     };

//   }

//   async contractInteraction(){
//     const provider = "https://kovan.infura.io/v3/e62e0e7d09274947814633fc5bddafa1";
//     const jsonProvider = new ethers.providers.JsonRpcProvider(provider)
//     const erc20 = new ethers.Contract(
//       contractAddress,
//       contractABI,
//       jsonProvider
//     );
//     console.log(erc20)
//     const name = await erc20.name();
//     const symbol = await erc20.symbol();
//     const supply = await erc20.totalSupply();
//     console.log(supply);
//     var totalSupply = ethers.utils.formatUnits(supply, "ether");
//     console.log(totalSupply);
//     // const provider1 = "https://kovan.infura.io/v3/e62e0e7d09274947814633fc5bddafa1";
//     // const jsonProvider1 = new ethers.providers.JsonRpcProvider(provider1)
    
//     const signer = await jsonProvider.getSigner();
//     console.log(signer)
//     const erc201 = new ethers.Contract(
//       saleContractAddress,
//       salecontractABI,
//       signer
//     );
//     console.log(erc201)
//     const buy =await  erc201.buyToken(10000);
//     this.setState({buy:buy});
//     console.log(buy);
  
//     this.setState({name: name, symbol: symbol, totalSupply: totalSupply});
//   }

//   // async buyContract(){
//   //   const provider = "https://kovan.infura.io/v3/e62e0e7d09274947814633fc5bddafa1";
//   //   const jsonProvider = new ethers.providers.JsonRpcProvider(provider)
//   //   const signer = provider.getSigner();
//   //   console.log(signer)
//   //   const erc20 = new ethers.Contract(
//   //     saleContractAddress,
//   //     salecontractABI,
//   //     jsonProvider
//   //   );
//   //   console.log(erc20)
//   //   const buy = erc20.buyToken(10000000000000000000000000000000);
//   //   this.setState({buy:buy});
//   //   console.log(buy);
//   // }

//   async connectToMetamask() {
//     const provider = new ethers.providers.Web3Provider(window.ethereum)
//     const accounts = await provider.send("eth_requestAccounts", []);
//     const balance = await provider.getBalance(accounts[0]);
//     const balanceinEther = ethers.utils.formatEther(balance);
//     this.setState({ selectedAddress: accounts[0], balance:balanceinEther })
//   }

//   renderMetamask() {
  
//     if (this.state.name) {
//       return (
//         <div>
//           <br></br>
//           <table border ="2px solid black" width="30%">
//             <th colspan="2">Token Information</th>
//             <tr>
//               <td >Total Token Supply</td>
//               <td >{this.state.totalSupply}</td>
//             </tr>
  
//             <tr>
//               <td >Total Token Sale</td>
//               <td>{this.state.symbol}</td>
//             </tr>
  
//             <tr>
//               <td>Tokens symbol</td>
//               <td>{this.state.symbol}</td>
//             </tr>
  
//             <tr>
//               <td>Token value</td>
//               <td>{this.state.symbol4} = $1 BNB</td>
//             </tr>
  
//             <tr>
//               <td>Accepted</td>
//               <td>BNB</td>
//             </tr>
//           </table>
//           <div>'
//           <form>
//         <label>
//           Enter Amount:
//           <input type="text" value={this.state.value} onChange={this.buy} /> </label>
//           <input type="submit" value="Buy Token" />
//       </form>
//           </div>
//         </div>
//       );
//     }
//     else if(this.state.buy){
//       <h1>HELLO</h1>
//     }
//     else{
//       return (
//         <div>
//           <br></br>
//           <button onClick={() => this.contractInteraction()}>Contract details</button>
//           <br></br> <br></br>
//           <button onClick={() => this.connectToMetamask()}>Connect to Metamask</button>
//           <br></br>
//           <br></br>
//         </div>
//       )
//     }
//   }

//   render() {
//     return (
//       <div className="container">
//         {this.renderMetamask()}
//       </div>
//     );
//   }
// }

// export default App;

