import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const connectDB = async()=>{
    try{
        console.log(process.env.PORT);
 const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/anshumanmr2001`)
console.log(`\n Mongodb connected DB HOST: ${connectionInstance.connection.host}`);    
}catch(error){
 console.log(`error is ${error}`);
 process.exit(1);
    }
}


export default connectDB