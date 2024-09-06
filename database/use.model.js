import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    senha: {type: String, required: true},
    email: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }

    const salt = await bcrypt.genSalt(10);

    this.senha = await bcrypt.hash(this.senha, salt);

    next()
})

userSchema.methods.matchPassword = async function(senha){
    return await bcrypt.compare(senha, this.senha);
}

const User = mongoose.model('User', userSchema);

export default User;