import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "viem/chains";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";

const projectId = "3b453e195a53706c5119130c34dd761f";
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });
createWeb3Modal({ wagmiConfig, projectId, chains });

function App() {
  return (
    <>
      <Router>
        <WagmiConfig config={wagmiConfig}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </WagmiConfig>
      </Router>
    </>
  );
}

export default App;
