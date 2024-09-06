import mongoose from "mongoose";

export async function connect(){
    const conection = mongoose.connect('mongodb://127.0.0.1:27017/sendDocuments', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log(conection);
}