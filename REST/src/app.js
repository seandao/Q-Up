const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')
app = express();

//router
app.get('/', (req,res) => {
    res.send('Homepage');
});

//connect to the database
mongoose.connect(
    process.env.DB_LINK,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('Successfully connected to database')
);


app.listen(3000);