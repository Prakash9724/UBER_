const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const connectToDb = require('./db/db');
connectToDb();
const userRoute = require('./routes/user.route');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user', userRoute);
app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app; 