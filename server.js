import express from "express";
import mongoose from "mongoose";
import Cors from "cors";


// app config
const app = express();
const port = process.env.PORT || 8001;

const connection_url = 'mongodb+srv://admin:spXZLWxZsFVHjEoX@cluster0.vbsho.mongodb.net/backend-tinder?retryWrites=true&w=majority'


// middlewares




// db config




// api endpoints

app.get('/', (req, res) => res.status(200).send("hello world 🔥"));

// listener
app.listen(port, () => console.log(`listening on localhost ${port}`));































//spXZLWxZsFVHjEoX