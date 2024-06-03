import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async() =>{
    mongoose.set('strictQuery',true);
    if(isConnected){
        console.log('MongoDb is already connected');
        return ;
    }else{
        try{
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: "share_prompt",
              })
            isConnected = true;
        }
        catch(error){
            console.log(error);
        }
        
    }
}