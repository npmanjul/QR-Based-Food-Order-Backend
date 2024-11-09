require('dotenv').config()
const express = require('express');
const app = express();
const restaurantAuthRouter = require('./Router/restaurantAuth.Router');
const menuItemRouter = require('./Router/menuItem.Router');
const restaurantProfileRouter = require('./Router/restaurentProfile.Router');
const userRouter = require('./Router/user.Router');
const {connectDB}=require('./Utils/db');
const errorMiddleware=require('./Middleware/error.Middleware');
const cors=require('cors')

const corsOptions = {
    origin: "*" ,
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credential:true,
}

app.use(cors(corsOptions));

app.use(express.json());

app.use('/auth',restaurantAuthRouter);
app.use('/menuItem',menuItemRouter);
app.use('/info',restaurantProfileRouter);
app.use('/api',userRouter);

app.use(errorMiddleware);

const PORT=process.env.PORT;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err)=>{
    console.log("Database connection failed",err);
});