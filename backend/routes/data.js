// routes/data.js

const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

// Get all data
router.get('/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific data item by ID
router.get('/data/:id', async (req, res) => {
  try {
    const dataItem = await Data.findById(req.params.id);
    if (!dataItem) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(dataItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new data item
router.post('/data', async (req, res) => {
  const newData = new Data(req.body);
  try {
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a data item by ID
router.put('/data/:id', async (req, res) => {
  try {
    const updatedData = await Data.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(updatedData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a data item by ID
router.delete('/data/:id', async (req, res) => {
  try {
    const deletedData = await Data.findByIdAndDelete(req.params.id);
    if (!deletedData) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
