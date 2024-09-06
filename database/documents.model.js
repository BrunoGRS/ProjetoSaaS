import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    document: {type: String, required: true},
    createdAt: {type: Date, default: Data.now}
})

const Document = mongoose.model('Document', documentSchema)

export default Document