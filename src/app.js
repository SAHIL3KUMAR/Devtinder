const express=require('express');

const app=express();

app.use((req,res) => {
    res.send("Hello Sahil! from Server");
})

app.listen(3000,()=> {
    console.log("Server is listening on Port 3000");
});