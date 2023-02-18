import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TaskList from "./pages/TasksList";
import SingleTask from "./pages/SingleTask";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList></TaskList>}></Route>
        <Route path="/tasks/:id" element={<SingleTask></SingleTask>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
