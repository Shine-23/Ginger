const express = require('express');
const app = express();
require("./db/conn");

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello, from Ginger ");
});

app.listen(port,()=>{
    console.log("server listening on port " + port);
})

