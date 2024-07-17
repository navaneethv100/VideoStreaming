import dotenv from "dotenv"
import express from 'express'
import connectDB from './db/index.js'

const app = express()


dotenv.config({
    path: './env'
})


connectDB()

//IIFI - ; is put at first, so as to clean
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("Error", error);
//             throw error
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on Port: ${process.env.PORT}`);

//         })
//     } catch (error) {
//         console.log("Error:", error);
//         throw error
//     }
// })()


