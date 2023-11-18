import React from "react";

const Banner = () => {
  return (
    <>
      <div className="p-8">
        <h2>5 proposaals currently opened</h2>
        <p>current dao balance : 0 eth</p>
        <p>your contribution: 5 eth </p>
        <hr className="my-6 border-gray-300"></hr>
        <p>
          {false
            ? "You can now raise proposals "
            : "Hey, when you contribute 1 eth, you become a stake holder"}
        </p>
      </div>
      <div className="flex flex-row justify-start items-center md:w-1/3 w-full mt-4">
        <input
          type="number"
          placeholder="Eg. 2 ETH"
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <div className="m-4">
        <button className="btn rounded-full mx-4">CONTRIBUTE</button>
        <button className="btn rounded-full">PROPOSE</button>
      </div>
    </>
  );
};

export default Banner;
