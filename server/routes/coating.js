const express = require('express');
const router = express.Router();
const Coating = require('../models/Coating');
const auth = require('../middleware/auth');

// Create a new coating record
router.post('/', async (req, res) => {
  try {
    const newCoating = new Coating({
      ...req.body,
      performedBy: req.user.id
    });
    const coating = await newCoating.save();
    res.json(coating);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get all coating records
router.get('/', async (req, res) => {
  try {
    const coatings = await Coating.find().sort({ dateTime: -1 });
    res.json(coatings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get a specific coating record
router.get('/:id', async (req, res) => {
  try {
    const coating = await Coating.findById(req.params.id);
    if (!coating) {
      return res.status(404).json({ msg: 'Coating record not found' });
    }
    res.json(coating);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Coating record not found' });
    }
    res.status(500).send('Server Error');
  }
});

// Update a coating record
router.put('/:id', async (req, res) => {
  try {
    let coating = await Coating.findById(req.params.id);
    if (!coating) {
      return res.status(404).json({ msg: 'Coating record not found' });
    }
    
    coating = await Coating.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(coating);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete a coating record
router.delete('/:id', async (req, res) => {
  try {
    const coating = await Coating.findById(req.params.id);
    if (!coating) {
      return res.status(404).json({ msg: 'Coating record not found' });
    }
    await coating.remove();
    res.json({ msg: 'Coating record removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Coating record not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;