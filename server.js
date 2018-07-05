const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//body parser middleware
app.use(bodyParser.json());

// Set DB
const db = require('./config/keys').mongoURI;

// use routes
app.use('/api/items', items);

// connect to mongodb
mongoose.connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.listen(process.env.PORT || 3000, () => console.log('Server has started!'));