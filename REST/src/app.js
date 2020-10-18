const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app = express();
app.use(bodyParser.json());

//routers
const usersRoute = require('./routes/users');
const partiesRoute = require('./routes/parties');
const gamesRoute = require('./routes/games');

//middlewares
app.use('/users', usersRoute);
app.use('/parties', partiesRoute);
app.use('/games', gamesRoute);

//connect to the database
mongoose.connect(
    process.env.DB_LINK,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Successfully connected to database')
);

// Listen on port 3000
app.listen(3000);
