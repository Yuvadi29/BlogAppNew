const express = require('express');
const app = express();
const port = 5000;

app.use('/', (req,res) => {
    console.log("Main URL")
});

app.listen(port, ()=> {
    console.log(`Server is Running at port https://localhost:${port}`);
})