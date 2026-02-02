import mongoose, { Schema } from "mongoose";

type UserType = {
    handle: string,
    name: string,
    email: string,
    password: string
}

const userSchema = new Schema({
    handle: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
})

const User = mongoose.model<UserType>('User', userSchema)
export default User