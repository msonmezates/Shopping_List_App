const express = require('express');
const router = express.Router();

// Use item Model
const Item = require('../../models/Item');

// Define GET route
// Display all items
router.get('/', (req,res) => {
  Item.find()
    .sort({ date: -1 }) // -1 makes it descending order 
    .then(items => res.json(items));
});

// Define Post route
// Add an item
router.post('/', (req,res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json());
});

// Define DELETE route
// Delete an item
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;