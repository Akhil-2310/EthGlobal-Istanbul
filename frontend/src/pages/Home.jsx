import React from "react";
import Banner from "../components/Banner";
import Proposals from "../components/Proposals";
import CreateProposal from "../components/Createproposal.jsx";

const Home = () => {
  return (
    <div>
      <Banner />
      <Proposals />
      <CreateProposal />
    </div>
  );
};

export default Home;
