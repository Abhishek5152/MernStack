import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const createUser = async (req, res) => {
    try {
        const { name, email, password, age } = req.body;
        if (!name || !email || !password || !age) {
            console.log("name:", name, "email:", email, "pass:", pass, "age:", age);
            return res.status(400).json({ msg: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User Already Exists!!" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = new User({
            name,
            email,
            password: hashedPassword,
            age
        });
        const token = jwt.sign({ UserId: userData._id }, process.env.Key, { expiresIn: '10h' });
        userData.tokens = userData.tokens.concat({ token });
        await userData.save();
        return res.redirect("http://localhost:5173/");
    } catch (error) {
        console.error("Error creating user:", error);
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
        const token = jwt.sign({ userId: userData._id },process.env.Key, { expiresIn: '1h' });
        userData.tokens = userData.tokens.concat({token});
        await userData.save();
        res.status(200).json({token});
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

export const findUserById = async (req, res) => {
    try {
      const userid = req.params.id;
  
      const userData = await User.findById(userid);
  
      if (!userData) {
        res.status(404).json({ message: "User not found." });
      }
      res.status(200).json(userData);
    } catch (error) {
      res.status(500).json({ err: error });
    }
};

export const update = async (req, res) => {
    try {
      const userid = req.params.id;
  
      const userExist = await User.findByIdAndUpdate(userid, req.body, {
        new: true,
      });
  
      if (!userExist) {
        res.status(404).json({ message: "User not found." });
      }
      res.status(200).json({ msg: "User has been updated succesfully" });
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
        const { id } = req.params;
        const userData = await User.findOneAndDelete({ _id : id });
        if (!userData) {
            return res.status(404).json({ msg: "Lol user is not here!!" });
        }
        res.status(200).json({ msg: "Deleted", user: userData });
    } catch (error) {
        res.status(500).json({ err: error });
    }
};
