const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app = express();
app.use(bodyParser.json());

//routers
const usersRoute = require('./routes/users');

//middlewares
app.use('/users', usersRoute);

app.get('/', (req,res) => {
    res.send('We are on homepage');
});

//connect to the database
mongoose.connect(
    process.env.DB_LINK,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Successfully connected to database')
);

// Listen on port 3000
app.listen(3000);
