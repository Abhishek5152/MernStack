const express = require("express");
const app = express();
const PORT = 3001;

app.get("/",(req, res)=> {
    res.sendFile(__dirname + "/Views/port.html");
    app.use(express.static(__dirname +'/Views'))
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost: ${PORT}`)
})