const mongoose = require("mongoose");

let Models = mongoose.models

const generateLinks = async (req, res) => {
    try {
        let link = "http://www.google.com"
        return res.render("generateLinks", { data: { link: link } })
    }
    catch (err) {
        console.log(err)
    }
}

const SaveCount = async (req, res) => {
    try {
        const TaskModel = Models.Task
        if (!req.body.link && !req.body.count) {
            throw {
                status: 400,
                message: "Link or count is empty"
            }
        }
        let findTaskDataAndUpdate = await TaskModel.findOneAndUpdate({ link: req.body.link }, { $inc: { count: req.body.count }, updated_at: new Date() }, { new: true })
        if (findTaskDataAndUpdate) {
            return res.status(200).send({
                success: true,
                data: findTaskDataAndUpdate,
                message: "Successfully update the task data"
            })
        }
        else {
            const createTaskData = await TaskModel.create(req.body)
            if (!createTaskData) {
                throw {
                    status: 400,
                    message: "Task cannot be save"
                }
            }
            return res.status(200).send({
                success: true,
                message: "Task Created",
                data: createTaskData
            })
        }
    }
    catch (err) {
        console.log(err)
        res.status(err.status).send({ error: err.message })
    }
}

module.exports = {
    generateLinks,
    SaveCount
}