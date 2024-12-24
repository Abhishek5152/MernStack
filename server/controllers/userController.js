import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const createUser = async (req, res) => { 
    try {
        const{name, email, pass, age} = req.body;
        const existingUser = await User.findOne({ email: req.body.email }); 
        if (existingUser) { 
            return res.status(400).json({ msg: "User Already Exists!!" }); 
        }
        const SeqPass = await bcrypt.hash(pass,10);
        const userData = new User({ 
            name:name, 
            email:email, 
            password: SeqPass, 
            age:age
        });
        const token = jwt.sign({UserId:userData._id},process.env.Key,{expiresIn:'10'});
        userData.tokens = userData.tokens.concat({token});
        await userData.save(); 
        res.status(200).json({ msg: "All Is Well!!! 👍✌️👌" ,token}); 
    } catch (error) { 
            console.error(error); 
            res.status(500).json({ error: "Internal Server Error" }); 
    }
};

export const UserLog = async (req, res) => { 
    try { 
        const { email, pass } = req.body;
        const userData = await User.findOne({ email: email});
        if (!userData) { 
            return res.status(404).json({ msg: "User is not here!!" }); 
        } 
        const isMatch = await bcrypt.compare(pass, userData.password); 
        if (!isMatch) { 
            return res.status(400).json({ msg: "Invalid Credentials" });
        }
        // res.status(200).json({ msg: "Logged in" }); 
        const token = jwt.sign({ userId: userData._id },process.env.Key, { expiresIn: '1h' });
        userData.tokens = userData.tokens.concat({token});
        await userData.save();
        res.redirect('/port');
    } catch (error) { 
        console.error('Error during login:', error);
        res.status(500).json({ err: error});
    }
}

export const lolall = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData) {
            return res.status(404).json({ msg: "Lol user is not here!!" });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ err: error });
    }
};

export const updateme = async (req, res) => {
    try {
        const { name, email } = req.body;
        const userData = await User.findOneAndUpdate(
            { name: name },
            { $set: { email: email } },
            { new: true }
        );
        if (!userData) {
            return res.status(404).json({ msg: "Lol user is not here!!" });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ err: error });
    }
};

export const deleteme = async (req, res) => {
    try {
        const { email } = req.body;
        const userData = await User.findOneAndDelete({ email: email });
        if (!userData) {
            return res.status(404).json({ msg: "Lol user is not here!!" });
        }
        res.status(200).json({ msg: "Deleted", user: userData });
    } catch (error) {
        res.status(500).json({ err: error });
    }
};
