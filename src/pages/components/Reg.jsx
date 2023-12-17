import { ConnectWallet, Web3Button, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { computeAddress, getAddress } from "ethers/lib/utils";
import { useEffect, useState } from "react";
import { utils } from 'ethers';

export default function Reg(){
    const timer = ms => new Promise(res => setTimeout(res, ms));
    const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;
    const [resOwner, setResOwner] = useState();

    const {contract} = useContract("0x73B39003DA74b978550B141b5f3bF786c3d24c4C");
    const address = useAddress(contract);
    // console.log(getAddress(address));

    const convertToAddress = async(inputString) => {
        try {
            // Use ethers.js to generate an Ethereum address
            const hash = await utils.id(inputString);
            const addressD = await utils.getAddress(hash);
      
            console.log('Generated Address:', addressD);
            return addressD;
          } catch (error) {
            console.error('Error generating address:', error.message);
            return;
          }
          return addressD;
        
      }

    // const {data, isLoading, isError} = useContractRead(contract, "checkIfOwner", toString(address));

    // console.log(data);

    // if(address){
        //  const {data, isLoading, isError} = useContractRead(contract, "checkIfOwner", toString(address));
        // setResOwner({data, isLoading, isError});
    // }

    function returnD(){
        const {data, isLoading, isError} = useContractRead(contract, "checkIfOwner", convertToAddress(address));
        setResOwner({data, isLoading, isError});
    }

    // useEffect(()=>{
    //     returnD();
    // }, [address]);

    // if(address){
       
        
    // }
    // var checkOwner = 

    // useEffect(()=>{
        
    // },[address]);

    return(
        <div>
            <ConnectWallet
                auth={{
                    loginOptional:false,
                    onLogin(token) {
                        console.log("user logged in", token);
                        },
                        onLogout() {
                        console.log("user logged out");
                        },
                }}
            />{resOwner ? 
            <p>Hello yash</p>
            : <p>Yooo...loading</p>
            }
            <Web3Button 
                contractAddress="0x73B39003DA74b978550B141b5f3bF786c3d24c4C" // Your smart contract address
                action={async (contract) => {
                  const res = await contract.call("checkIfOwner", convertToAddress(address));
                  if(res){
                    setResOwner(res);
                    console.log(res);
                  }
                }}
            >Check My Ownerness</Web3Button>
        </div>
    )
} 