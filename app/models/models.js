module.exports = (app,mongoose)=>{

    const TaskModel = require("./task.model/task.model");
    
    TaskModel(mongoose)
    
}