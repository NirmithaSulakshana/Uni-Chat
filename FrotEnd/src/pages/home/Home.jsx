import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MeddageContainer from "../../components/messages/MeddageContainer";

const Home = () => {
  return (
    <div className="overflow-hidden flex sm:h-[450px] md:h-[550px] bg-black-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MeddageContainer />
    </div>
  );
};

export default Home;
