import React from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation">
      <div>Navigation</div>
      <Outlet />
    </div>
  );
};

export default Navigation;
