import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        batchInfo: {
            productName: '',
            batchNo: '',
            batchSize: '',
            noOfPacks: '',
            noOfTablets: '',
            packsSize: '',
            expiryDate: '',
            mfgLicense: '',
            productRegNo: '',
            validFrom: '',
        },
        batchRecord: {
            department: '',
            currentProduct: '',
            currentProductBatchNo: '',
            lineClearance: '',
            section: '',
            date: null,
            previousProduct: '',
            previousProductBatchNo: '',
            signature: '',
        },
        checkboxes: {
            cartons: 'notApplicable',
            documents: 'notApplicable',
            rawMaterial: 'notApplicable',
            remnantOfPreviousProduct: 'notApplicable',
            area: 'notApplicable',
            weighingBalance: 'notApplicable',
            dispensingBoard: 'notApplicable',
            scoops: 'notApplicable',
            pallets: 'notApplicable',
            machineUsed: "",
        },
        tempAndHumidity: {
            temperature: '',
            humidity: '',
            machineUsed: "",
        },
        remarks: '',
        authorization: {
            authorizedForUse: '',
            dateAndTime: null,
        },
        weighingRecordRaw: [],
    checkRecordRaw: [],
    weighingRecordCoating: [],
    checkRecordCoating: [],
    
};

export const recordSlice = createSlice({
    name: 'record',
    initialState,
    reducers: {
        setRecord: (state, action) => {
            console.log('Dispatching setRecord with payload:', action.payload);
            const {
                batchInfo,
                batchRecord,
                checkboxes,
                weighingRecordRaw,
                checkRecordRaw,
                weighingRecordCoating,
                checkRecordCoating,
                tempAndHumidity,
                remarks,
                authorization,
            } = action.payload;

            // Update state with the payload
            state.batchInfo = { ...state.batchInfo, ...batchInfo };
            state.batchRecord = { ...state.batchRecord, ...batchRecord };
            state.checkboxes = { ...state.checkboxes, ...checkboxes };
            state.tempAndHumidity = { ...state.tempAndHumidity, ...tempAndHumidity };
            // state.weighingRecord = weighingRecordRaw;
            state.weighingRecordRaw = action.payload.weighingRecordRaw || state.weighingRecordRaw;
            state.weighingRecordCoating = action.payload.weighingRecordCoating || state.weighingRecordCoating;

            // state.checkRecord = checkRecordRaw;
            state.checkRecordRaw = action.payload.checkRecordRaw || state.checkRecordRaw;
            state.checkRecordCoating = action.payload.checkRecordCoating || state.checkRecordCoating;

            state.remarks = remarks;
            state.authorization = { ...state.authorization, ...authorization };

            // Save to local storage
            localStorage.setItem('record', JSON.stringify(state));
            console.log('Stored record in local storage:', state);
        },
        resetRecord: (state) => {
            // Reset the state to initial values
            return initialState;
        },
        loadRecordFromStorage: (state) => {
            const record = JSON.parse(localStorage.getItem('record'));
            console.log('Loaded record from local storage:', record); // Debug log
            if (record) {
                // Update state with the loaded record
                Object.assign(state, record);
            }
        },
    },
});

export const { setRecord, resetRecord, loadRecordFromStorage } = recordSlice.actions;

export default recordSlice.reducer;
