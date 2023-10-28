const express = require('express')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3000;
const app = express();

const Veggie = require('./models/Veggie.cjs')
const Fruit = require('./models/Fruit.cjs')

require('dotenv').config();


require('./config/db.cjs');


app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "dist"))) 
app.use(express.json()); 


app.get("/fruits",   (req, res) => {
    Fruit.find().then((fruitsFromDB) => {
        console.log(fruitsFromDB)
        res.send(fruitsFromDB);
    })
});


app.get("/", (req, res) => {
    res.send("here is your valuable data")
})

app.post("/fruits", async (req,res) => {
    console.log(req.body);
    let fruit = req.body;
   let responseFromDB = await Fruit.create(fruit);
   console.log(responseFromDB);
    res.status(201).send(responseFromDB)
})

app.get('/veggies', async (req, res) => {
    let veggiesFromDB = await Veggie.find()
    res.send(veggiesFromDB)
})


app.post("/veggies", async (req, res) => {
console.log(req.body);
   let dbResponse =  await Veggie.create(req.body);
   res.status(201).send(dbResponse)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});