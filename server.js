// const io = require("socket.io")(3001, {
//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"]
//     },
// });

// io.on("connection", (socket) => {
//     console.log("A user is connected successfully!");

//     socket.on("chat", (chat, user) => {
//         console.log(user, chat);
//         io.emit("chat", chat, user);
//     });
// });




// const { Server } = require("socket.io");
// const { createAdapter } = require("@socket.io/mongo-adapter");
// const { MongoClient } = require("mongodb");

// const DB = "mydb";
// const COLLECTION = "socket.io-adapter-events";


// const mongoClient = new MongoClient("mongodb+srv://ankush07:ankush07@ankush07.oc2f9xl.mongodb.net/");

// const main = async () => {
    //   await mongoClient.connect();
    
    //   try {
        //     await mongoClient.db(DB).createCollection(COLLECTION, {
            //       capped: true,
            //       size: 1e6
            //     });
            //     console.log("Connected Succesfully");
            //   } catch (e) {
                //         console.log("Failed due to some error!!")
//     }
//   const mongoCollection = mongoClient.db(DB).collection(COLLECTION);

//   io.adapter(createAdapter(mongoCollection));
//   io.listen(3001);
// }


// main();

// const { Server } = require("socket.io");
// const { createAdapter } = require("@socket.io/mongo-adapter");
// const mongoose = require("mongoose")

// const io = new Server();

// const main = async ()=>{
//     mongoose.connect("mongodb+srv://ankush07:ankush07@ankush07.oc2f9xl.mongodb.net/")
//     const connection  = mongoose.connection 



// const mongo = require("mongodb").MongoClient;
// const io = require("socket.io")(3002, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"]
//   }
// });

// const mongoURI = "mongodb+srv://ankush07:ankush07@ankush07.oc2f9xl.mongodb.net/";

// mongo.connect(mongoURI).then((client) => {
//   console.log("MongoDB connected");

//   const db = client.db("ankush07");

//   io.on('connection', (socket) => {
//     let chat = db.collection('chats');

//     const sendStatus = function (s) {
//       socket.emit("status", s);
//     };

//     chat.find().limit(100).sort({ _id: 1 }).toArray(function (err, res) {
//       if (err) {
//         console.log("Error Occured");
//       }

//       socket.emit("output", res);
//     });

//     socket.on("input", function (data) {
//       let name = data.name;
//       let message = data.message;

//       if (name == '' || message == '') {
//         sendStatus("Enter a message!");
//       } else {
//         chat.insertOne({ name: name, message: message }, function () {
//           io.emit("output", [data]);

//           sendStatus({
//             message: "Message sent!",
//             clear: true,
//           });
//         });
//       }
//     });
//   });

// }).catch((error) => {
//   console.error('MongoDB connection error:', error);
// });

// // Start the Socket.IO server
// io.listen(3001, () => {
//   console.log('Socket.IO server listening on port 3002');
// });

// }