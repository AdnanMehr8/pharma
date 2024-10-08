const mongoose = require('mongoose');

const weighingRecordSchema = new mongoose.Schema({
    item: String,
  unit: String,
  tareWt: String,
  netWt: String,
  grossWt: String,
  noOfContainers: String
//   weighingId: { type: mongoose.Schema.Types.ObjectId, ref: "Batch" },
//     checkDate: Date,
//     item: String,
//     unit: String,
//     tareWt: String,
//     netWt: String,
//     grossWt: String,
//     numberOfContainers: String,
//     signature: String,
    //   result: { type: String, enum: ["pass", "fail"] },
  
  
});

const QualityCheck = mongoose.model('WeighingRecord', weighingRecordSchema);