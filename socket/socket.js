const express = require("express")
const app = express()

const http = require("http")
const server = http.createServer(app)

const { Server } = require("socket.io")
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST"],
    },
})

const userSocketMap = {}

io.on("connection", (socket) => {
    console.log(`a user connected socket: ${socket.id}`)

    const userId = socket.handshake.query.userId
    if (userId !== "undefined") {
        userSocketMap[userId] = socket.id
    }
    // console.log(userSocketMap)

    socket.on("disconnect", () => {
        console.log(`a user disconnected socket: ${socket.id}\n`)
    })
})

module.exports = {
    app,
    io,
    server,
}
