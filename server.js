const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

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

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  // set the static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); // it's directing from current directory to index.html in client 
  });                                                                       // when it's in production
}

app.listen(process.env.PORT || 5000, () => console.log('Server has started!'));