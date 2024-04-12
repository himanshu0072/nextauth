import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!) // used ! to gursntee that evv variable exists
        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log("MongoDB Connected");
        })

        connection.on('error', (error)=>{
            console.log("MongoDb Connection error.. please make sure db is up and running" + error);
            process.exit();
        })


    } catch (error) {
        console.log("Something went wrong... can'nt connect to Database")
        console.log(error);
    }
}