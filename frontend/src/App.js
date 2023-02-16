import React from 'react';
import AllTsks from "./components/AllTasks";
import Spinner from "./components/Spinner";
import {FaTrash} from "react-icons/fa";
import {FaEdit} from "react-icons/fa";


function App() {
  const[tasks, setTasks]=React.useState([])
  const [text, setText]=React.useState("");
  const[loading, setLoading]=React.useState(true);

  //get all tasks
const getAllTasks = async () => {
try {
  const response = await fetch("http://localhost:3001/api/v1/tasks")
  const data = await response.json();
  console.log(data);
  setTasks(data.tasks);
} catch (error) {
  console.log(error);
}
}

React.useEffect(() => {
  setLoading(true)
  getAllTasks()
  setLoading(false);
}, [])


  if(loading) {
    return <h1>Loading...</h1>
  }


  return (
    <div className="container">
      <h1>Task Manager</h1>
      <div className="number">Number of tasks: {tasks.length}</div>
      <form>
        <input type="text" placeholder="e.g walking the cat..."></input>
        <button type="submit" className="btn">SUBMIT</button>
      </form>

      <div className="all-tasks">
      {tasks && tasks.map((task, index) => {
        return <div className="task" key={task.id}>
          <p>{task.name}</p>
          <div className="icons">
            <FaEdit className="icon green"></FaEdit>
            <FaTrash className="icon red"></FaTrash>
        </div>
      </div>
      })}
      </div>
    </div>
  );
}

export default App;
