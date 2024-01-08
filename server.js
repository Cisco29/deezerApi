const express = require('express');
const app = express();
const path = require("path");
const routes = require("./app/routes.js");
const dotenv = require("dotenv");

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));


//const router = require(path.join(__dirname, 'app', 'routes.js'));
const router = require('./app/routes.js');
router(app);



app.listen(process.env.PORT, () => {
    if(process.env.APP_ENV) {
        console.log(`Le serveur HTTP est : http://localhost:${process.env.PORT}`);
    }
})