const express = require('express');
const path = require('path');

const app = express();;
const port = 5000;

const db = require('./config/mongoose');
//setting up ejs as our default template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//middlewares
app.use('/', require('./routes'));
app.use(express.urlencoded());




//telling the server to listen to the port
app.listen(port, function(err) {

    if (err) {
        console.log(`Error in starting the server is : ${err}`);
        return;
    }
    console.log(`Server is up and running on port : ${port}`);
});