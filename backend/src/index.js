
//Professional way of connection of db

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import  app  from "./app.js"


dotenv.config()
console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);



connectDB()

.then(() => {
    try {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error starting server:", error);
    }
})
.catch((err) => {
    console.log("MongoDB connection failed!!", err);
})



//Another way for connection of db

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import express from "express"
// const app = express()


// ;( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR:",error);
//             throw error

//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
        
        
//     } catch (error) {
//         console.log("ERROR:", error);
//         throw error
        
//     }
// })()