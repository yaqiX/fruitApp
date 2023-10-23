/* eslint-disable no-undef */
const express = require('express')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3000;
const app = express();

const Fruit = require('./models/Fruit.cjs')


// allows us to use process.env (get variables from .env file)
require('dotenv').config();


require('./config/db.cjs');


app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))



// get /  SENDS REACT APP
app.use(express.static(path.join(__dirname, "dist"))) // how we server our final built version (dist)

app.use(express.json()); // adds .body to the request




app.get("/fruits", async (req, res) => {
    let fruitsFromDB = await Fruit.find()
    res.send(fruitsFromDB);
});


app.get("/", (req, res) => {
    res.send("here is your valuable data")
})

app.post("/fruits", async (req,res) => {
    console.log(req.body);
    let fruit = req.body;
   let responseFromDB = await Fruit.create(fruit);
   console.log(responseFromDB);
    res.send("Route is good")
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});