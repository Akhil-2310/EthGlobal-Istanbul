import React from "react";
import { useState } from "react";
import { useGlobalState, setGlobalState } from "../main/main.jsx";
import { toast } from "react-toastify";
import { performContribute } from "../Services.jsx";

const Banner = () => {
  const [isStakeholder] = useGlobalState("isStakeholder");
  const [proposals] = useGlobalState("proposals");
  const [balance] = useGlobalState("balance");
  const [mybalance] = useGlobalState("mybalance");
  const [amount, setAmount] = useState("");

  const onPropose = () => {
    if (!isStakeholder) return;
    setGlobalState("createModal", "scale-100");
  };

  const onContribute = async () => {
    if (!!!amount || amount == "") return;
    await performContribute(amount);
    toast.success("Contribution received");
  };

  const opened = () =>
    proposals.filter(
      (proposal) => new Date().getTime() < Number(proposal.duration + "000")
    ).length;

  return (
    <>
      <div className="p-8">
        <h2 className="font-semibold text-3xl mb-5">
          {opened()} Proposal{opened() == 1 ? "" : "s"} Currently Opened
        </h2>
        <p>
          Current DAO Balance: <strong>{balance} Eth</strong> <br />
          Your contributions:{" "}
          <span>
            <strong>{mybalance} Eth</strong>
            {isStakeholder ? ", and you are now a stakeholder 😊" : null}
          </span>
        </p>
        <hr className="my-6 border-gray-300 dark:border-gray-500" />
        <p>
          {isStakeholder
            ? "You can now raise proposals on this platform 😆"
            : "Hey, when you contribute upto 0.5 ether you become a stakeholder 😎"}
        </p>
        <div className="flex flex-row justify-start items-center md:w-1/3 w-full mt-4">
          <input
            type="number"
            placeholder="Eg. 2 ETH"
            className="input input-bordered w-full max-w-xs"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <div className="m-4">
          <button className="btn rounded-full mx-4" onClick={onContribute}>
            CONTRIBUTE
          </button>
          {isStakeholder ? (
            <button className="btn rounded-full" onClick={onPropose}>
              PROPOSE
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Banner;
