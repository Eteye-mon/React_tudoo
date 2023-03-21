import React from "react";

const AppBar = ({ taskcount }) => {
  return (
      <div className="d-flex align-items-center bg-dark border-bottom w-100 ">
      <div className="px-1 border text-dark rounded-pill bg-white w-">{taskcount}</div>
        <p className="text-muted fw-medium ms-3 fs-4">Tasks</p>
      </div>
  );
};

export default AppBar;
