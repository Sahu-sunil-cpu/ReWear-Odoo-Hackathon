import mongoose from "mongoose";
import bcrypt from 'bcryptjs'


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: [8, 'Password must be at least 8 character long'],
    },
    picture: {
        type: String,
    },
    type:{
        type:String,
        enum:['google',"password"],
        required:true
    }
}, { timestamps: true });


userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();

    } catch (error) {
        next(error);
    }
})

userSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password,this.password);
}


export const User = mongoose.model('User',userSchema);