import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique : true
        },
        password: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required:true,
            min: 18,
            max: 120
        },
        tokens:[
            {
                token:{
                    type: String,
                    required: true,
                    default:""
                }
            }
        ]
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
