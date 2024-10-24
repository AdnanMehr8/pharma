import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  precautions: {
    area: "",
    sop1: "",
    sop2: "",
    section: "",
    specificArea: "",
    sectionInCharge: "",
    precautionsRead: "",
  },
  lineClearance: Array(1).fill({
    equipment: "",
    equipmentId: "",
    equipmentCapacity: "",
    previousProduct: "",
    batchNo: "",
    cleanedBy: "",
    clDate: '',
    checkedBy: "",
    chDate: '',
    verifiedBy: "",
    vDate: '',
  }),
  batchInfo: {
    productName: "",
    batchNo: "",
    batchSize: "",
    noOfPacks: "",
    noOfTablets: "",
    packsSize: "",
    expiryDate: "",
  },
  batchRecord: {
    department: "",
    currentProduct: "",
    currentProductBatchNo: "",
    lineClearance: "",
    section: "",
    date: null,
    previousProduct: "",
    previousProductBatchNo: "",
    signature: "",
  },
  checkboxes: {
    cartons: "notApplicable",
    powderOrTabletOfPreviousBatch: "notApplicable",
    remnantOfPreviousProduct: "notApplicable",
    area: "notApplicable",
    compressionMachine: "notApplicable",
    containerOrDrums: "notApplicable",
    scoops: "notApplicable",
    pallets: "notApplicable",
  },
  tempAndHumidity: {
    temperature: "",
    humidity: "",
  },
  compressionRemarks: "",
  authorization: {
    authorizedForUse: "",
    dateAndTime: null,
  },
  compressionRecord: {
    temp: "",
    rH: "",
    weightOfGranules: "",
    upperPunch: "",
    lowerPunch: "",
    compressionStartedAt: "",
    compressionCompletedOn: "",
    sampleTakenQty: "",
    verification: [
      {
        performedByOperator: "",
        checkedByPO: "",
        checkedByQAI: "",
        target: "",
        pboDate: "",
        checkedByPODate: "",
        checkedByQAIDate: "",
      }
    ]
  },
  compressionSpecifications: {
    parameters: [
      {
        parameters: "",
        specification: "",
        results: "",
      },
    ],
    checkedByQA: "",
    checkedByQADate: "",

  },
  // 
  followUp: {
    labels: Array(10).fill().map(() => ({
      date: "",
      time: "",
      avgWeight: "",
      thickness: "",
      hardness: "",
      disintigrationTime: "",
      friability: "",
      performedBy: "",
    })),
    zP: false,
    others: false,
    checkedByQA: "",
    checkedByQADate: "",

  },
  
  requestForAnalysis: {
    batchInfo: {
      product: "",
      qcNumber: "",
      section: "",
      stage: "",
      batchNumber: "",
      mfgDate: "",
      expDate: "",
      date: "",
      time: "",
      packSize: "",
      sampleQuantity: "",
      weightPerUnit: "",
      bSize: "",
    },
    qa: {
      sampleType: "",
      releaseRequiredFor: "",
      collectedBy: "",
      dateCollected: "",
      timeCollected: "",
      quantityOfSample: "",
      containerNumbers: "",
    },
    qaObservations: Array(8).fill({
      parameter: "",
      statusCompression: "",
      remarks: "",
    }),
    qaOfficer: "",
    qaManager: "",
  },
  checkSheet: {
    labels: Array(10).fill().map(() => ({
      dateAndTime: "",
      weights: Array(10).fill(""),
      avgWeightOf10Tabs: "",
      temp: "",
      rH: "",
      disintigrationTime: "",
      PoOrQoa: "",
    })),
    upperLimit: "",
    targetWeight: "",
    lowerLimit: "",
    dateStarted: "",
    dateCompleted: "",
    remarks: "",
  },
  weightOfCompressedTablets: {
    containers: Array(5).fill({
      containerNo: "",
      grossWeight: "",
      tareWeight: "",
      netWeight: "",
    }),
    total: {
      grossWeight: 0,
      tareWeight: 0,
      netWeight: 0,
    },
    weighedBy: "",
    receivedBy: "",
  },
  compressionYield: {
    labels: Array(5).fill(
      {
        sNo: '',
        description: '',
        yield: '',
      },
    ),
    performedBy: '',
    performedByDate: '',

  },
  requestForAnalysisEnd: {
    batchInfo: {
      product: "",
      qcNumber: "",
      section: "",
      stage: "",
      batchNumber: "",
      mfgDate: "",
      expDate: "",
      date: "",
      time: "",
      packSize: "",
      sampleQuantity: "",
      weightPerUnit: "",
      bSize: "",
    },
    qa: {
      sampleType: "",
      releaseRequiredFor: "",
      collectedBy: "",
      dateCollected: "",
      timeCollected: "",
      quantityOfSample: "",
      containerNumbers: "",
    },
    qaObservations: Array(8).fill({
      parameter: "",
      statusCompressionEnd: "",
      remarks: "",
    }),
    qaOfficer: "",
    qaManager: "",
  },
};

export const compressionSlice = createSlice({
  name: "compression",
  initialState,
  reducers: {
    setCompressionRecord: (state, action) => {
      console.log("Dispatching setCompressionRecord with payload:", action.payload);
      const {
        precautions,
        lineClearance,
        batchInfo,
        batchRecord,
        checkboxes,
        tempAndHumidity,
        compressionRemarks,
        authorization,
        compressionRecord,
        compressionSpecifications,
        followUp,
        requestForAnalysis,
        checkSheet,
        weightOfCompressedTablets,
        compressionYield,
        requestForAnalysisEnd,
      } = action.payload;

      state.precautions = { ...state.precautions, ...precautions };
      // state.lineClearance = { ...state.lineClearance, ...lineClearance };
      state.lineClearance = action.payload.lineClearance || state.lineClearance;
      state.batchInfo = { ...state.batchInfo, ...batchInfo };
      state.batchRecord = { ...state.batchRecord, ...batchRecord };
      state.checkboxes = { ...state.checkboxes, ...checkboxes };
      state.tempAndHumidity = { ...state.tempAndHumidity, ...tempAndHumidity };
      state.compressionRemarks = compressionRemarks;
      state.authorization = { ...state.authorization, ...authorization };
      // state.compressionRecord = action.payload.compressionRecord || state.compressionRecord;
      state.compressionRecord = {...state.compressionRecord, ...compressionRecord};

      state.compressionSpecifications = {
        ...state.compressionSpecifications,
        ...compressionSpecifications,
      };
      state.followUp = { ...state.followUp, ...followUp };
      state.requestForAnalysis = {
        ...state.requestForAnalysis,
        ...requestForAnalysis,
      };
      state.requestForAnalysisEnd = {
        ...state.requestForAnalysisEnd,
        ...requestForAnalysisEnd,
      };
      state.checkSheet = { ...state.checkSheet, ...checkSheet };
      state.weightOfCompressedTablets = {...state.weightOfCompressedTablets, ...weightOfCompressedTablets};
      state.compressionYield = { ...state.compressionYield, ...compressionYield};

      // Save to local storage
      localStorage.setItem("compressionRecord", JSON.stringify(state));
      console.log("Stored compression record in local storage:", state);
    },
    resetCompressionRecord: (state) => {
      // Reset the state to initial values
      return initialState;
    },
    loadCompressionRecordFromStorage: (state) => {
      const compressionRecord = JSON.parse(localStorage.getItem("compressionRecord"));
      console.log("Loaded compression record from local storage:", compressionRecord);
      if (compressionRecord) {
        // Update state with the loaded record
        Object.assign(state, compressionRecord);
      }
    },
  },
});

export const {
  setCompressionRecord,
  resetCompressionRecord,
  loadCompressionRecordFromStorage,
} = compressionSlice.actions;

export default compressionSlice.reducer;
