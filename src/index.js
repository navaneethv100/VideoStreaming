import dotenv from "dotenv"
import express from 'express'
import connectDB from './db/index.js'

const app = express()


dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO_DB connection failed", err);
})

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


