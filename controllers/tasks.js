

const getAllTasks= (req, res) => {
res.send("all tasks")
}


const createTask= (req, res) => {
    const task=req.body
    tasks.push(task)
    res.send("create task")
    }

const getTask= (req, res) => {
    
res.send("get task")
}

const updateTask= (req, res) => {

    res.send("update task")
    }

const deleteTask= (req, res) => {
    res.send("delete task")
    }

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}