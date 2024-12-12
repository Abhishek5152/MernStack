import mongoose, { Types } from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            min: 18
        }
    },{timestamps:true}
);
const User = mongoose.model('User',userSchema);

export default User;