const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db");
connectToDb();
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

const corsOptions = {
    origin: 'http://localhost:5173', // Aapka frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Agar aap cookies ya authorization headers use kar rahe hain
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 


app.use("/users", userRoutes);
app.use("/captain",captainRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
