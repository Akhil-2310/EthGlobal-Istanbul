import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "viem/chains";
import { IDKitWidget, CredentialType } from "@worldcoin/idkit";
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

const Navbar = () => {
  const handleProof = (result) => {
    console.log(result);
  };
  const onSuccess = async () => {
    console.log("hi");
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <a className="btn btn-ghost text-xl">Merhaba DAO</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <IDKitWidget
              action="my_action"
              onSuccess={onSuccess}
              credential_types={[CredentialType.Orb]}
              handleVerify={handleProof}
              app_id="app_staging_66f83164bd5e69e75546612dc02179f7"
            >
              {({ open }) => (
                <button
                  style={{
                    marginRight: "30px",
                    border: "1px solid #000", // Replace #000 with your desired border color
                    padding: "10px 20px", // Add some padding to make the button look better
                    borderRadius: "5px", // Optionally, add some border-radius for rounded corners
                  }}
                  className="btn btn-primary btn-sm text-black"
                  onClick={open}
                >
                  Connect with world coin
                </button>
              )}
            </IDKitWidget>
          </ul>
          <w3m-button />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
