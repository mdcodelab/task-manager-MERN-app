import React from "react";
import Spinner from "../pages/Spinner"
import {FaTrash} from "react-icons/fa";
import {FaEdit} from "react-icons/fa";
import {Link} from "react-router-dom"


function TaskList() {
  const[tasks, setTasks]=React.useState([])
  //add text state
  const [text, setText]=React.useState("");
//select task state
const[selectTask, setSelectTask]=React.useState(null);

  const[loading, setLoading]=React.useState(false);
  const[message, setMessage]=React.useState(null);

  //get all tasks
const getAllTasks = async () => {
  setLoading(true);
try {
  const response = await fetch("http://localhost:3001/api/v1/tasks")
  const data = await response.json();
  console.log(data);
  setTasks(data.tasks);
} catch (error) {
  console.log(error);
}
setLoading(false);
}

React.useEffect(() => {
  getAllTasks()
}, [])


//add task
function onChange(e) {
  setText(e.target.value);
}

async function onSubmit(e) {
  e.preventDefault();
  try {
    setLoading(true);
    const response = await fetch("http://localhost:3001/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: text,
        completed: false,
      }),
    });

  
      const data = await response.json();
      console.log(data);
      if(data.task.name.length > 1 && data.task.name.length < 20) {
        setTasks([...tasks, data.task]);
        console.log(tasks);
        setText("");
      } 
    
  } catch (error) {
    console.log(error);
    setMessage("Error");
    setText("");
  }
  setLoading(false);
}

console.log(message);

//deleting tasks
async function handleClick (id) {
  console.log(id);
const response = await fetch(`http://localhost:3001/api/v1/tasks/${id}`, {method: "DELETE"})
const task=await response.json();
setTasks([...tasks.filter(task => (task._id !== id))])
console.log(tasks)
}

  if(loading) {
    return <h1><Spinner></Spinner></h1>
  }


  return (
    <div className="container">
      <h1>Task Manager</h1>
      <div className="number">Number of tasks: {tasks.length}</div>
      <form onSubmit={onSubmit}>
      {message && (<p style={{fontSize: "0.7rem", marginBottom: "0.5rem", color: "grey"}}>Task name must be between 2 and 20 characters long</p>)}
        <input type="text" placeholder="e.g walking the cat..." value={text} onChange={onChange}></input>
        <button type="submit" className="btn">SUBMIT</button>
      </form>

      <div className="all-tasks">
      {tasks && tasks.map((task, index) => {
        return <div className="task" key={task._id}>
          <p className={task.completed ? "comp" : ""}>{task.name}</p>
          <div className="icons">
          <Link to={`/tasks/${task._id}`} className="link"><FaEdit className="icon green"></FaEdit></Link>
            <FaTrash className="icon red" onClick={()=> handleClick(task._id)}></FaTrash>
        </div>
      </div>
      })}
      {tasks.length === 0 && <p>No tasks for the moment.</p>}

      </div>
    </div>
  );
}

export default TaskList;

