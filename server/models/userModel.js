import mongoose from 'mongoose';

const userschema = new mongoose.Schema(
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
const User = mongoose.model('User',userschema);

export default User;