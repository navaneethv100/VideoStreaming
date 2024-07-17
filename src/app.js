import express from 'express'
import cros from 'cors'
import cookieParser from 'cookie-parser';


const app = express()

app.use(cros({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

//To Limit file size - that can be send to backend.
app.use(express.json({limit: "16kb"}))
//Handling special characters - which will be send.
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


export default app;