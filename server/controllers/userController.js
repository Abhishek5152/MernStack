import User from "../models/userModel.js";

export const createUser = async (req,res)=> {
    try{
        const userData=new User(req.body);
        if(!userData){
            res.status(404).json({msg:"User Does Not Exist!!"});   
        }
        await userData.save();
        res.status(200).json({msg:"All Ij WElll!!!👍✌️👌"});
    }catch(error){
        res.status(500).json({error:"yerror"})
    }

}