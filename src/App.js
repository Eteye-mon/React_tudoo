import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import AppBar from "./sections/app_bar";
import Display from "./sections/display";

function App() {
  const [values, setvalues] = useState({
    task: "",
  });
  const [tasks, settasks] = useState([]);

  const [taskcount, Settaskcount] = useState(0)
  const [show, setShow] = useState('block')
  function editTask (){
    console.log(this.innerHtml())
  }

const addTask = () =>{
  const task = {
    taskName: values.task
  }

  const newTask = [...tasks]
  newTask.unshift(task)
  Settaskcount(taskcount  + 1)
  
 settasks(newTask)
}
  function deleteTask() {
    console.log(this)
    setShow('none')
    Settaskcount( taskcount -1)
  }
  return (
    <div className="w-25 mx-auto bg-dark my-6 rounded-2xl px-4 pb-3 " style={{height:"90vh"}}>
      <div className="sticky top-0 pt-4 bg-dark pb-2">
        <textarea
          placeholder="task"
          className="px-3 py-2 mb-5 outline-none bg-transparent  border rounded-xl  w-100 text-white "
          onChange={(e)=> setvalues({...values, task: e.target.value})}
        />
     
      <AppBar taskcount={taskcount} />
      </div>
      <Display tasks={tasks} show={show} edit={editTask}  onclick={deleteTask}  />

     
      <Button onClick={addTask}/>
    </div>
  );
}

export default App;
