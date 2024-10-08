const mongoose = require('mongoose');

const qualityCheckSchema = new mongoose.Schema({
  batchId: { type: mongoose.Schema.Types.ObjectId, ref: "Batch" },
    checkDate: Date,
    department: String,
    currentProduct: String,
    previousProduct: String,
    lineClearenceRequiredFor: String,
    section: String,
    batchNumber: String,
    signature: String,
    previousBatchRemnants: { type: String, enum: ["cartons", "document", "raw-material, any-remnant-of-previous-product"] },
    cleanliness: { type: String, enum: ["area", "weighing-balance", "dispensing-hood, scoops, pallets"] },
    areaTemp: String,
    areaHumidity: String,
    remarks: String,
    authorizedForUseSign: String,
    dateAndTimeOfAuthorization: Date,
  
    //   result: { type: String, enum: ["pass", "fail"] },
  
  
});

const QualityCheck = mongoose.model('QualityCheck', qualityCheckSchema);