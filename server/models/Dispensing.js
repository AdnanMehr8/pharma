const mongoose = require('../config/dbConfig');

const dispensingSchema = new mongoose.Schema({
  batchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Batch', required: true },
  dateTime: { type: Date, required: true },
  department: { type: String, required: true },
  section: { type: String, required: true },
  currentProduct: { type: String, required: true },
  currentBatchNo: { type: String, required: true },
  previousProduct: { type: String },
  previousBatchNo: { type: String },
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
  remarks: { type: String },
  authorizedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  authorizedAt: { type: Date },
});

module.exports = mongoose.model('Dispensing', dispensingSchema);