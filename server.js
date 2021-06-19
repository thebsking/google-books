const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended=true}));
app.use(express.static('client/build'));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks');

app.listen(PORT, ()=> {
    console.log (`Server running on Port ${PORT}`)
});