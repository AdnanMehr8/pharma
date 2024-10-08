const express = require('express');
const router = express.Router();
const Mixing = require('../models/Mixing');
const auth = require('../middleware/auth');

// Create a new mixing record
router.post('/', async (req, res) => {
  try {
    const newMixing = new Mixing({
      ...req.body,
      performedBy: req.user.id
    });
    const mixing = await newMixing.save();
    res.json(mixing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get all mixing records
router.get('/', async (req, res) => {
  try {
    const mixings = await Mixing.find().sort({ dateTime: -1 });
    res.json(mixings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get a specific mixing record
router.get('/:id', async (req, res) => {
  try {
    const mixing = await Mixing.findById(req.params.id);
    if (!mixing) {
      return res.status(404).json({ msg: 'Mixing record not found' });
    }
    res.json(mixing);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Mixing record not found' });
    }
    res.status(500).send('Server Error');
  }
});

// Update a mixing record
router.put('/:id', async (req, res) => {
  try {
    let mixing = await Mixing.findById(req.params.id);
    if (!mixing) {
      return res.status(404).json({ msg: 'Mixing record not found' });
    }
    
    mixing = await Mixing.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(mixing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete a mixing record
router.delete('/:id', async (req, res) => {
  try {
    const mixing = await Mixing.findById(req.params.id);
    if (!mixing) {
      return res.status(404).json({ msg: 'Mixing record not found' });
    }
    await mixing.remove();
    res.json({ msg: 'Mixing record removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Mixing record not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;