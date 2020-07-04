const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {timestamps: true});

TaskSchema.pre("save", async function(next){
    console.log("Task before saving")
    next();
})

const Task = mongoose.model("Task", TaskSchema)

module.exports = Task;