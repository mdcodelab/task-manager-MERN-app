import React from 'react';
import { useParams, Link} from 'react-router-dom';

function SingleTask() {
const {id}=useParams();
  //select task state
  const[task, setTask]=React.useState({});
  const [loading, setLoading]=React.useState(false);

  //select task
  React.useEffect(() => {
    
    const handleSelect = async () => {
      setLoading(true); ////////////////////////
      try{
       let response=await fetch(`http://localhost:3001/api/v1/tasks/${id}`)
      let data= await response.json().then(data => data);
    console.log(data);
    console.log(data.task);
      setTask(data.task);
      setLoading(false); //////////////////
  } catch(error) {
  console.log(error)
}
}
handleSelect();
  }, [id]);

//change the task values
  function changeName(e) {
    setTask((prevTask) => ({
      ...prevTask,
      name: e.target.value,
    }));
    setTimeout(() => {
      console.log(e.target.value);
    }, 0);
  }

function changeCheck (e) {
  setTask((prevState) => ({...prevState, completed: e.target.checked}))
  setTimeout(() => {
    console.log(e.target.checked);
  }, 0);
}

async function updateTask(e) {
  e.preventDefault();
  try {
    const response = await fetch(`http://localhost:3001/api/v1/tasks/${id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: task.name,
        completed: task.completed
      })
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}





if(loading) {
  return <h1>Loading...</h1>
}

  
  return (
    <div className="singleTask">
    <h1>Single Task</h1>
      <div className="content">
        <form className="edit" onSubmit={updateTask}>
            <div className="id">
              <label>ID</label>
              <input type="text" placeholder="task ID..." value={task._id}></input>
            </div>
            <div className="name">
              <label>Name</label>
              <input type="text" value={task.name} onChange={changeName}></input>
            </div>
            <div className="completed">
              <label>Completed</label>
              <input type="checkbox" checked={task.completed} onChange={changeCheck}></input>
            </div>
            <button type="submit" className="btn">EDIT TASK</button>
        </form>
        <Link to="/" className="btn">BACK TO TASKS</Link>
      </div>
    </div>
  );
}

export default SingleTask;
