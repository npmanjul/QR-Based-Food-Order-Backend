const mongoose=require('mongoose');

const URI=process.env.MONGO_URI;

const connectDB=async()=>{
    try{
        await mongoose.connect(URI);
        console.log('Connected to the database successfully');
    }catch(err){
        console.log("Failed to connect to the database",err);
        process.exit(1);
    }
}

module.exports={connectDB};