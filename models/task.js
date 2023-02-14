const mongoose = require("mongoose")

const taskSchema=new mongoose.Schema({
    name: String, 
    completed: Boolean
})

mongoose.set('strictQuery', true);

module.exports=mongoose.model('Task', taskSchema)