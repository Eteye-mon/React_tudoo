import React from "react";
import DisplayItem from "../components/display_item";
import emptyimage from "../images/empty.png"

const Display = ({ tasks = [], onclick, show,edit, taskcount}) => {
  console.log(tasks)

  return (
    <div className="py-4  overflow-y-auto " style={{ height: "50vh" }}>
      
      <div style={{display:tasks.length === 0 ?"block":"none"}}>
        <img src={emptyimage} alt="empty state image" />
        <p className="text-white text-center fw-bold">You have 0 task, Click to add Task </p>
     </div>
      {tasks.map((task) => (
        <DisplayItem noOftask={task.no} taskName={task.taskName} show={show} edit={edit} onclick={onclick} />
      ))}
    </div>
  );
};

export default Display;
