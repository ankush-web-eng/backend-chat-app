import express from 'express';
import { Server } from 'socket.io';
import {createServer} from 'http';

const port = process.env.PORT || 3001;
const app = express();
const server = createServer(app)
const io = new Server(server,{
    cors:{
        origin: "http://localhost:3000",
        methods : ["GET", "POST"],
        credentials: true,
    }
})

io.on("connection", (socket)=>{
    console.log("User connected on Socket");
    socket.on("chat", (data)=>{
        console.log(data)
        io.emit("chat", {message:data.message,username: data.username})
    });
})

app.get("/", (req,res)=>{
    res.send("Hello World")
})    

server.listen(port, ()=>{
    console.log(`Your server is running on port ${port}`);
})