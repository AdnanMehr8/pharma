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
  lineClearance: {
    equipment: "",
    equipmentId: "",
    previousProduct: "",
    batchNo: "",
    cleanedBy: "",
    checkedBy: "",
    verifiedBy: "",
  },
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
    documents: "notApplicable",
    rawMaterial: "notApplicable",
    remnantOfPreviousProduct: "notApplicable",
    area: "notApplicable",
    mixer: "notApplicable",
    otherEquipments: "notApplicable",
    scoops: "notApplicable",
    pallets: "notApplicable",
  },
  tempAndHumidity: {
    temperature: "",
    humidity: "",
  },
  remarks: "",
  authorization: {
    authorizedForUse: "",
    dateAndTime: null,
  },
  manufacturingRecord: [
    {
      target: "",
      sievingStartedAt: "",
      sievingCompletedOn: "",
      performedByOperator: "",
      checkedByPO: "",
      checkedByQAI: "",
    },
    {
      target: "",
      mixingStartedAt: "",
      mixingCompletedOn: "",
      performedByOperator: "",
      checkedByPO: "",
      checkedByQAI: "",
    },
    {
      target: "",
      sampleTakenQty: "",
      performedByOperator: "",
      checkedByPO: "",
      checkedByQAI: "",
    },
  ],
  weightOfGranules: {
    containers: Array(7).fill({
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
  granulationYield: {
    labels: Array(6).fill(
      {
        sNo: '',
        description: '',
        weight: '',
      },
    ),
    performedBy: '',
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
      status: "Ok",
      remarks: "",
    }),
    qaOfficer: "",
    qaManager: "",
  },
  
};

export const mixingSlice = createSlice({
  name: "mixing",
  initialState,
  reducers: {
    setMixingRecord: (state, action) => {
      console.log("Dispatching setMixingRecord with payload:", action.payload);
      const {
        precautions,
        lineClearance,
        batchInfo,
        batchRecord,
        checkboxes,
        tempAndHumidity,
        remarks,
        authorization,
        manufacturingRecord,
        weightOfGranules,
        granulationYield,
        requestForAnalysis,
      } = action.payload;

      state.precautions = { ...state.precautions, ...precautions };
      //   state.precautions = action.payload.precautions || state.precautions;

      state.lineClearance = { ...state.lineClearance, ...lineClearance };

      state.batchInfo = { ...state.batchInfo, ...batchInfo };
      state.batchRecord = { ...state.batchRecord, ...batchRecord };
      state.checkboxes = { ...state.checkboxes, ...checkboxes };
      state.tempAndHumidity = { ...state.tempAndHumidity, ...tempAndHumidity };
      state.remarks = remarks;
      state.authorization = { ...state.authorization, ...authorization };
      //   state.manufacturingRecord = {
      //     ...state.manufacturingRecord,
      //     ...manufacturingRecord,
      //   };
      //  state.manufacturingRecord = manufacturingRecord;
      state.manufacturingRecord =
        action.payload.manufacturingRecord || state.manufacturingRecord;
      state.weightOfGranules = {
        ...state.weightOfGranules,
        ...weightOfGranules,
      };
      state.granulationYield = {
        ...state.granulationYield,
        ...granulationYield,
      };
      state.requestForAnalysis = {
        ...state.requestForAnalysis,
        ...requestForAnalysis,
      };

      // Save to local storage
      localStorage.setItem("mixingRecord", JSON.stringify(state));
      console.log("Stored mixing record in local storage:", state);
    },
    resetMixingRecord: (state) => {
      // Reset the state to initial values
      return initialState;
    },
    loadMixingRecordFromStorage: (state) => {
      const mixingRecord = JSON.parse(localStorage.getItem("mixingRecord"));
      console.log("Loaded mixing record from local storage:", mixingRecord); // Debug log
      if (mixingRecord) {
        // Update state with the loaded record
        Object.assign(state, mixingRecord);
      }
    },
  },
});

export const {
  setMixingRecord,
  resetMixingRecord,
  loadMixingRecordFromStorage,
} = mixingSlice.actions;

export default mixingSlice.reducer;