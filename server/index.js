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
dotenv.config();
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT;

// app.get("/",(req, res) =>{
//     res.sendFile(path.join(__dirname,"Views","port.html"));
// });

app.use((req,res,next)=>{
    const secretCode = req.query.secret;
    req.isAuthorised = secretCode === '1234';
    next();
});
app.get("/",(req,res)=>{
    if(req.isAuthorised){
        res.send("Noise!!!");
        // res.sendFile(path.join(__dirname,"Views","port.html"));
    }
    else{
        res.send("You are Dangerous!!");
    }
});

app.use(express.static(path.join(__dirname,"Views")));
app.listen(PORT,()=> {
    console.log(`Server running on http://localhost:${PORT}/?secret=1234`)
});