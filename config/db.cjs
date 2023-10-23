// connect mongoose to the db
// later when we use mongoose somewhere else, it will already be connected

const mongoose = require('mongoose');



// mongodb+srv://yaqix99:<password>@cluster0.omx30ee.mongodb.net/?retryWrites=true&w=majority
let connectionString = `mongodb+srv://yaqix99:${process.env.MONGO_PASS}@cluster0.omx30ee.mongodb.net/Food?retryWrites=true&w=majority`
console.log(connectionString);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// log when connected

mongoose.connection.once('open', ()=> {
    console.log('connected to DATABASE');
});
  