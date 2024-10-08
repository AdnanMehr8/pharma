const express = require('express');
const router = express.Router();
const Dispensing = require('../models/Dispensing');
const auth = require('../middleware/auth');

// Create a new dispensing record
router.post('/', async (req, res) => {
  try {
    const newDispensing = new Dispensing({
      ...req.body,
      performedBy: req.user.id
    });
    const dispensing = await newDispensing.save();
    res.json(dispensing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get all dispensing records
router.get('/', async (req, res) => {
  try {
    const dispensings = await Dispensing.find().sort({ dateTime: -1 });
    res.json(dispensings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get a specific dispensing record
router.get('/:id', async (req, res) => {
  try {
    const dispensing = await Dispensing.findById(req.params.id);
    if (!dispensing) {
      return res.status(404).json({ msg: 'Dispensing record not found' });
    }
    res.json(dispensing);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Dispensing record not found' });
    }
    res.status(500).send('Server Error');
  }
});

// Update a dispensing record
router.put('/:id', async (req, res) => {
  try {
    let dispensing = await Dispensing.findById(req.params.id);
    if (!dispensing) {
      return res.status(404).json({ msg: 'Dispensing record not found' });
    }
    
    dispensing = await Dispensing.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(dispensing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete a dispensing record
router.delete('/:id', async (req, res) => {
  try {
    const dispensing = await Dispensing.findById(req.params.id);
    if (!dispensing) {
      return res.status(404).json({ msg: 'Dispensing record not found' });
    }
    await dispensing.remove();
    res.json({ msg: 'Dispensing record removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Dispensing record not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;