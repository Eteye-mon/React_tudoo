import React from "react";

const Button = ({ onClick }) => {
  return (
     <div className="sticky bottom-0 d-flex bg-dark ">
        <button className=" ml-auto  bg-primary rounded-pill  text-white   p-2 fw-bold"
        onClick={onClick}>
          + Add Task
        </button>
      
      </div>
  );
};

export default Button;
