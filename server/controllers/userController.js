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

export const updateme = async (req,res)=>{
    try{
        const {name, email} = req.body;
        const userData = await User.findOneAndUpdate(
            {name: name},
            {$set: {email: email}},
            {new:true}
        );
        if (!userData){
            res.status(404).json({msg:"Lol user is not here!!"});
        }
        res.status(200).json(userData);
    }catch(error){res.status(500).json({err:error});}
}

export const deleteme = async (req,res)=>{
    try{
        const {email} = req.body;
        const userData = await User.findOneAndDelete({email: email});
        if (!userData){
            return res.status(404).json({msg:"Lol user is not here!!"});
        }
        return res.status(200).json({msg:"Deleted",user:userData});
    }catch(error){return res.status(500).json({err:error});}
}