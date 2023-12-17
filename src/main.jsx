import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ethers } from 'ethers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThirdwebProvider
      // activeChain="localhost"
      activeChain="goerli" 
      // signer={new ethers.providers.Web3Provider(window.ethereum).getSigner()}
      clientId="b8979a28e29fe59f054aa54018afba69"
    >
    <App />
    </ThirdwebProvider>
)
