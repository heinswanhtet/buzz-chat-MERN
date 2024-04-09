require("dotenv").config()
require("express-async-errors")

// express
const express = require("express")
const { app, server } = require("./socket/socket")

// utility packages
const morgan = require("morgan")
const cookieParser = require("cookie-parser")

// security packages
const helmet = require("helmet")
const cors = require("cors")
const xss = require("xss-clean")
const rateLimiter = require("express-rate-limit")
const mongoSanitize = require("express-mongo-sanitize")

// file uploads
const fileUpload = require("express-fileupload")
const cloudinary = require("cloudinary").v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})

// database
const connectDB = require("./db/connection")

// routers
const authRouter = require("./routes/authRoutes")
const userRouter = require("./routes/userRoutes")
const messageRouter = require("./routes/messageRoutes")

// middleware
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleWare = require("./middleware/error-handler")

app.set("trust proxy", 1)
// app.use(
//     rateLimiter({
//         windowMs: 15 * 60 * 1000,
//         max: 60,
//     })
// )
app.use(helmet())
app.use(xss())
app.use(cors())
app.use(mongoSanitize())

app.use(morgan("tiny"))
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))
app.use(express.static("./public"))
app.use(fileUpload({ useTempFiles: true }))

// app.get('/', (req, res) => {
//     // console.log(req.signedCookies)
//     res.send('Hello World')
// })

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/messages", messageRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleWare)

const port = process.env.PORT || 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        server.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
