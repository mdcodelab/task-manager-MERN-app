const mongoose = require("mongoose")

const taskSchema=new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must provide a name"],
        trim: true,
        maxlength: [20, "Name cannot be more that 20 characters"]
    }, 
    completed: {
        type: Boolean,
        default: false
    }
})

//mongoose.set('strictQuery', true);

const Task=mongoose.model('Task', taskSchema)
module.exports=Task