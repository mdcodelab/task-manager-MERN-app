const mongoose = require("mongoose")

const TaskSchema=new mongooseSchema({
    name: String, 
    completed: Boolean
})

module.exports=mongoose.model('Task', TaskSchema)