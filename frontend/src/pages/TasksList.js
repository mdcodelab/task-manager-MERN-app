import React from "react";
import Spinner from "../pages/Spinner"
import {FaTrash} from "react-icons/fa";
import {FaEdit} from "react-icons/fa";
import {Link} from "react-router-dom"


function TaskList() {
  const[tasks, setTasks]=React.useState([])

  const [text, setText]=React.useState("");
  const[loading, setLoading]=React.useState(true);


  //get all tasks
const getAllTasks = async () => {
try {
  setLoading(true);
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
  console.log(text)
}

async function onSubmit(e) {
  e.preventDefault();
  console.log("hello")
  try {
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
    setTasks([...tasks, data.task]);
    console.log(tasks);
    setText("");
  } catch (error) {
    console.log(error);
  }
}

//deleting tasks
async function onClick (id) {
  console.log(id);
const response = await fetch(`http://localhost:3001/api/v1/tasks/${id}`, {method: "DELETE"})
const task=await response.json();
setTasks([...tasks.filter(task => (task._id !== id))])
console.log(tasks)
}




  if(loading) {
    return <h1>Loading...</h1>
  }


  return (
    <div className="container">
      <h1>Task Manager</h1>
      <div className="number">Number of tasks: {tasks.length}</div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="e.g walking the cat..." value={text} onChange={onChange}></input>
        <button type="submit" className="btn">SUBMIT</button>
      </form>

      <div className="all-tasks">
      {tasks && tasks.map((task, index) => {
        return <div className="task" key={task._id}>
          <p>{task.name}</p>
          <div className="icons">
          <Link to={`tasks/${task._id}`}><FaEdit className="icon green"></FaEdit></Link>
            <FaTrash className="icon red" onClick={()=> onClick(task._id)}></FaTrash>
        </div>
      </div>
      })}
      {tasks.length === 0 && <p>No tasks found.</p>}

      </div>
    </div>
  );
}

export default TaskList;

