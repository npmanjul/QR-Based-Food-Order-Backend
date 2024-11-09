const mongoose =require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')

const restaurantSchema=new mongoose.Schema({
    ownername:{
        type:String,
        required:true
    },
    ownerphone:{
        type:String,
    },
    owneremail:{
        type:String,
    },
    shopname:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    alternativephone:{
        type:String,
    },
    restaurantlogo:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

restaurantSchema.pre("save", async function (next) {
    const restaurant = this
    if (!restaurant.isModified("password")) {
        next()
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(restaurant.password, saltRound);
        restaurant.password = hash_password;
    } catch (error) {
        next(error)
    }
})

restaurantSchema.methods.comparePassword=async function(password){
    return bcrypt.compare(password,this.password);
}

restaurantSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
        },
        process.env.JWT_SECRECT_KEY,
        {
            expiresIn:"30d"
        }
    )
    } catch (error) {
        console.log("error in jwt token",error)
    }
}

const Restaurant=mongoose.model('Restaurant',restaurantSchema);
module.exports=Restaurant;