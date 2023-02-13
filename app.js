const express=require("express")

const app = express()
const tasks=require("./routes/tasks")

const port = 3000

//middleware
app.use(express.json());

//app.get("/api/v1/tasks") - get all the tasks
//app.get("/api/v1/tasks/:id") - get a single task
//app.post("/api/v1/tasks") - create a new task
//app.patch("/api/v1/tasks/:id") - update task
//app.delete("/api/v1/tasks/:id") - delete task

//routes
app.use('/api/v1/tasks', tasks)

app.get("/", (req, res) => {
    res.send("Task manager app")
})

app.listen(3000, () => {
    console.log(`server is listening on port ${port}...`)
})