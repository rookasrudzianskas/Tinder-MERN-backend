import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards";

// app config
const app = express();
const port = process.env.PORT || 8001;

const connection_url = 'mongodb+srv://admin:spXZLWxZsFVHjEoX@cluster0.vbsho.mongodb.net/backend-tinder?retryWrites=true&w=majority'


// middlewares
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})



// db config




// api endpoints

app.get('/', (req, res) => res.status(200).send("hello world 🔥"));
app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err) {
        res.status(500).send(err);
    } else {
        res.status(200).send(data);
        }
    })
});


app.get('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.find( (err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});
// listener
app.listen(port, () => console.log(`listening on localhost ${port}`));































//spXZLWxZsFVHjEoX