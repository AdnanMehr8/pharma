const mongoose = require("../config/dbConfig");

const compressionRecordSchema = new mongoose.Schema({
  temp: String,
  rH: String,
  weightOfGranules: String,
  upperPunch: String,
  lowerPunch: String,
  compressionStartedAt: String,
  compressionCompletedOn: String,
  sampleTakenQty: String,
  performedByOperator: String,
  checkedByPO: String,
  checkedByQAI: String,
  target: String,
});

const compressionSchema = new mongoose.Schema({
  precautions: {
    area: String,
    sop1: String,
    sop2: String,
    section: String,
    specificArea: String,
    sectionInCharge: String,
    precautionsRead: String,
  },
  lineClearance: [{
    equipment: String,
    equipmentId: String,
    equipmentCapacity: String,
    previousProduct: String,
    batchNo: String,
    cleanedBy: String,
    clDate: String,
    checkedBy: String,
    chDate: String,
    verifiedBy: String,
    vDate: String,
  }],
  // batchInfo: {
  //   productName: String,
  //   batchNo: String,
  //   batchSize: String,
  //   noOfPacks: String,
  //   noOfTablets: String,
  //   packsSize: String,
  //   expiryDate: String,
  // },
  batchRecord: {
    department: String,
    currentProduct: String,
    currentProductBatchNo: String,
    lineClearance: String,
    section: String,
    date: String,
    previousProduct: String,
    previousProductBatchNo: String,
    signature: String,
  },
  checkboxes: {
    remnants: {
      labels: [],
      values: {}
    },
    cleanliness: {
      labels: [],
      values: {}
    }
  },
  tempAndHumidity: {
    temperature: String,
    humidity: String,
    compressionRemarks: String,
  },
  authorization: {
    authorizedForUse: String,
    dateAndTime: String,
  },
  compressionRecord: {
    temp: String,
    rH: String,
    expiryDate: String,
    batchNumber: String,
    weightOfGranules: String,
    upperPunch: String,
    lowerPunch: String,
    compressionStartedAt: String,
    compressionCompletedOn: String,
    sampleTakenQty: String,
    fillingStartedAt: String,
    fillingCompletedOn: String,
    ipqa: String,
    ipcqa: String,
    verification: [
      {
        performedByOperator: String,
        pboDate: String,
        checkedByPODate: String,
        checkedByQAIDate: String,
        checkedByPO: String,
        checkedByQAI: String,
        target: String,
      }
    ]
  },
  compressionSpecifications: {
    parameters: [
      {
        parameters: String,
        specification: String,
        results: String,
      },
    ],
    checkedByQA: String,
    checkedByQADate: String,

  },
  followUp: {
    labels: [
      {
        date: String,
        time: String,
        avgWeight: String,
        thickness: String,
        hardness: String,
        disintigrationTime: String,
        friability: String,
        performedBy: String,
      },
    ],
    zP: Boolean,
    others: String,
    checkedByQA: String,
    checkedByQADate: String,

  },
  requestForAnalysis: {
    batchInfo: {
      product: String,
      qcNumber: String,
      section: String,
      stage: String,
      batchNumber: String,
      mfgDate: String,
      expDate: String,
      date: String,
      time: String,
      packSize: String,
      sampleQuantity: String,
      weightPerUnit: String,
      bSize: String,
    },
    qa: {
      sampleType: String,
      releaseRequiredFor: String,
      signature: String,
      collectedBy: String,
      dateCollected: String,
      timeCollected: String,
      quantityOfSample: String,
      containerNumbers: String,
    },
    qaObservations: [
      {
        parameter: String,
        statusCompression: String, // OK or Not OK
        remarks: String,
      },
    ],
    qaOfficer: String,
    qaManager: String,
  },
  checkSheet: {
    labels: [
      {
        dateAndTime: String,
        weights: [String],
        avgWeightOf10Tabs: String,
        temp: String,
        rH: String,
        disintigrationTime: String,
        PoOrQoa: String,
      },
    ],
    upperLimit: String,
    targetWeight: String,
    lowerLimit: String,
    dateStarted: String,
    dateCompleted: String,
    remarks: String,
  },
  weightOfCompressedTablets: {
    containers: [
      {
        containerNo: String,
        grossWeight: String,
        tareWeight: String,
        netWeight: String,
      },
    ],
    total: {
      grossWeight: Number,
      tareWeight: Number,
      netWeight: Number,
    },
    weighedBy: String,
    receivedBy: String,
  },
  compressionYield: {
    labels: [
      {
        sNo: String,
        description: String,
        yield: String,
      },
    ],
    performedBy: String,
    performedByDate: String,

  },
  requestForAnalysisEnd: {
    batchInfo: {
      product: String,
      qcNumber: String,
      section: String,
      stage: String,
      batchNumber: String,
      mfgDate: String,
      expDate: String,
      date: String,
      time: String,
      packSize: String,
      sampleQuantity: String,
      weightPerUnit: String,
      bSize: String,
    },
    qa: {
      sampleType: String,
      releaseRequiredFor: String,
      signature: String,
      collectedBy: String,
      dateCollected: String,
      timeCollected: String,
      quantityOfSample: String,
      containerNumbers: String,
    },
    qaObservations: [
      {
        parameter: String,
        statusCompressionEnd: String, // OK or Not OK
        remarks: String,
      },
    ],
    qaOfficer: String,
    qaManager: String,
  },
  machineUsed: String,
});

module.exports = mongoose.model("Compression", compressionSchema);
