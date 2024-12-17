import User from "../models/userModel.js";

export const createUser = async (req,res)=> {
    try{
        const userData= new User(req.body);
        if(!userData){
            res.status(404).json({msg:"User Does Not Exist!!"});   
        }
        await userData.save();
        res.status(200).json({msg:"All Ij WElll!!!👍✌️👌"});
    }catch(error){
        res.status(500).json({error:"yerror"})
    }
}

export const lolall = async (req,res)=>{
    try{
        const userData = await User.find();
        if (!userData){
            res.status(404).json({msg:"Lol user is not here!!"});
        }
        res.status(200).json(userData);
    }catch(error){res.status(500).json({err:error});}
}