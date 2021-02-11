module.exports = (mongoose)=>{
    const Schema = mongoose.Schema

    const TaskSchema = new Schema({
        link: {type: String},
        count: {type: Number},
        created_at: {type: Date, default: Date.now()},
        updated_at: {type: Date, default: Date.now()},
    })

    mongoose.model("Task",TaskSchema)
}