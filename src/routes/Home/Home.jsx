import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <Outlet />
    </div>
  );
};

export default Home;
