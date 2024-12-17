// const http = require("http");
// const server = http.createServer((req, res) => {
//     if(req.method==='GET' && req.url==='/abhi'){
//         res.writeHead(200,{'content-type':'text/plain'})
//         res.end("Mobile Legends BANG BANG!!");
//     }
//     else{
//         res.writeHead(404,{'content-type':'text/plain'})
//         res.end("MLBB Not Found :( ");
//     }
// });

// server.listen(3000,() => {
//     console.log("Server is Running on http://localhost:3000");
// })

import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import {fileURLToPath} from 'url';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import user from "./models/userModel.js";
import route from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT;
const URL = process.env.MONGODB_URL;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// try{
//     mongoose.connect(URL);
//     console.log('its Connected!!😊😊😊😊😊😊');
// }catch(error){
//     console.error('error', error);
// }/

mongoose.connect(URL).then(()=>{
    console.log('its Connected!!😊🤝😁');
    app.listen(PORT,() => {
        console.log(`Listening at port http://localhost:${PORT}/api/create`);
    });
}).catch((error)=>{console.log("connection Failed :",error)})

// async function createuser(){
//     const user1 = new user({
//         name: "Ram",
//         email: "ram@gmail.com",
//         password : "123",
//         age: "18"
//     });
//     const result=await user1.save();
//     console.log("User Created:",result);
// }
// createuser();

// async function readone(){
//     const result=await user.findOne({ email: "ram@gmail.com"});
//     console.log("User Found:",result);
// }
// readone();

// async function Updateone(){
//     const result=await user.findOneAndUpdate(
//         {email: "ram@gmail.com"},
//         {name: "Aman"},
//         {new:true}
//     );
//     console.log("User Updated:",result);
// }
// Updateone();

// async function deleteuser(){
//     const result =await user.deleteOne({name:"Ram"});
//     console.log("User Deleted:",result);
// }
// deleteuser();


// app.post("/uform", async (req, res) => {
//     const newUser = new userschema({
//         name: req.body.uname, 
//         email: req.body.email, 
//         password: req.body.pass, 
//         age: req.body.age, 
//     }); 
//     newUser.save().then(() => { 
//         console.log('User created'); 
//         res.redirect('/');
//     }).catch((err) => { 
//         console.log(err); 
//         res.status(500).send('Error creating user'); 
//     });
// });

// app.get("/",(req, res) =>{
//     res.sendFile(path.join(__dirname,"Views","form.html"));
// });

// app.get("/",(req, res) =>{
//     res.sendFile(path.join(__dirname,"Views","port.html"));
// });

// app.use((req,res,next)=>{
//     const secretCode = req.query.secret;
//     req.isAuthorised = secretCode === '1234';
//     next();
// });
// app.get("/",(req,res)=>{
//     if(req.isAuthorised){
//         res.send("Noise!!!");
//         // res.sendFile(path.join(__dirname,"Views","port.html"));
//     }
//     else{
//         res.send("You are Dangerous!!");
//     }
// });

// app.use(express.static(path.join(__dirname,"Views")));
// app.listen(PORT,()=> {
//     console.log(`Server running on http://localhost:${PORT}/?secret=1234`)
// });
app.use('/api',route);

process.on('SIGINT', async () => { 
    console.log("Disconnected!!😒🫱..🫲-😓"); 
    await mongoose.disconnect(); 
    process.exit(0); 
});