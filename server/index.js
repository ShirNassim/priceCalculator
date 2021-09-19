const express = require('express')
const app = express()
const mongoose = require("mongoose");
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

dotenv.config()
app.use(bodyParser.json())

const apiRouter = require('./routes/api')
const viewsRouter = require('./routes/views')
var cors = require('cors')
app.use(cors())

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(process.env.DATABASE_URI, mongooseOptions)
    .then(() => {
        console.log("Database connection successful");
    })
    .catch(err => {
        console.error(err);
    });


app.use('/api', apiRouter)
app.use('/', viewsRouter)

app.listen(5000, () => {
    console.log("server is up")
})