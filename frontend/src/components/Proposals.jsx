import React from "react";

const Proposals = () => {
  return (
    <>
      <div className="flex flex-col p-8">
        <div className="flex flex-row justify-center items-center" role="group">
          <button className="btn rounded-full mx-2">ALL</button>
          <button className="btn rounded-full mx-2 ">Open</button>
          <button className="btn rounded-full mx-2">Closed</button>
        </div>
      </div>
    </>
  );
};

export default Proposals;
