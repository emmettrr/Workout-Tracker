const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan"); 

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev")); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    "mongodb+srv://Kasper:trVP58wq7i8fD8e0@cluster0.qfyxz.mongodb.net/myFirstDatabase" || "mongodb://localhost/workout", 
    { 
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
);

app.use(require('./routes/api-routes.js'));
app.use(require('./routes/html-routes.js')); 

app.listen(PORT, () => {
console.log(`App running on port ${PORT}!`);
});