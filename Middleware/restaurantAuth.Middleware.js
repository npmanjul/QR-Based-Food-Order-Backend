const jwt=require('jsonwebtoken');
const restaurantAuth=require('../Models/restaurantAuth.models');

const authMiddleware=async (req,res,next)=>{
    const token=req.header("Authorization");

    if(!token){
        return res.status(401).json({message:"Unauthorized HTTP , Token not provided"});
    }
    
    // console.log(token);

    try{
        const isVerified=jwt.verify(token,process.env.JWT_SECRECT_KEY);
        const userData=await restaurantAuth.findOne({email:isVerified.email}).select({password:0})

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    }catch(err){
        return res.status(401).json({message:"Unauthorized, Invalid token"});
    }
}

module.exports=authMiddleware;