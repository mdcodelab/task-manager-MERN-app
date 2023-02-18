const express=require("express")
const app = express()
require("dotenv").config()


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  
  
//middleware
app.use(express.json());


//routes
const tasks=require("./routes/tasks")
app.use('/api/v1/tasks', tasks)


//connectDB
const connectDB = require("./db/connect")

//port
const PORT = process.env.PORT || 3001




//app.get("/api/v1/tasks") - get all the tasks
//app.get("/api/v1/tasks/:id") - get a single task
//app.post("/api/v1/tasks") - create a new task
//app.patch("/api/v1/tasks/:id") - update task
//app.delete("/api/v1/tasks/:id") - delete task



app.get("/", (req, res) => {
    res.send()
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log("connected to DB")
        app.listen(PORT, () => {
            console.log(`server is listening on port ${PORT}...`)
        })
    } catch (error) {
        console.log(err)
    }
}

start()

