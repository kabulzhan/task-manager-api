const express = require("express");
const app = express();
require("./db/mongoose");
const userRouter =  require("./routes/user.js");
const taskRouter =  require("./routes/task.js");

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port = process.env.PORT, ()=>{
    console.log("Server is up on port " + port)
})

