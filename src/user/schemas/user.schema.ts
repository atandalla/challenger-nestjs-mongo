import {Schema} from 'mongoose';

export const UserSchema = new Schema({
    name: {type: String, required: true},
    user: {type: String, required: true},
    email: {type: String, required: true},
    psw: {type: String, required: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
})