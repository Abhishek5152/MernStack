import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import dotenv from 'dotenv';
dotenv.config();
const auth = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token,process.env.Key);
        const user = await User.findOne({ _id: decoded.userId, 'tokens.token': token });

        if (!user) {
            throw new Error('Token invalid or expired');
        }

        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};

export default auth;
