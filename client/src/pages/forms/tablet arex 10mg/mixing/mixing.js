// import React, { useEffect } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '@mui/material';
// import { setMixingRecord } from '../../../../store/mixingSlice'; // Updated action import
// import BatchManufacturingFormPage4 from './page4';
// import BatchManufacturingFormPage5 from './page5';
// import BatchManufacturingFormPage6 from './page6';
// import BatchManufacturingFormPage7 from './page7';
// import FormHeader from '../../../header/formHeader';
// import BatchManufacturingFormPage8 from './page8';

// const Mixing = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const record = useSelector((state) => state.mixing); // Updated state selector

//   useEffect(() => {
//     const storedRecord = JSON.parse(localStorage.getItem('mixingRecord')); // Updated key
//     if (storedRecord) {
//       dispatch(setMixingRecord(storedRecord)); // Updated action
//     }
//   }, [dispatch]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { 
//       batchRecord, 
//       tempAndHumidity, 
//       authorization, 
//       remarks, 
//       precautions, 
//       lineClearance, 
//       weightOfGranules, 
//       granulationYield 
//     } = record;

//     // Validate required fields
//     const requiredBatchRecordFields = [
//       batchRecord.date, 
//       batchRecord.lineClearance, 
//       batchRecord.department, 
//       batchRecord.section, 
//       batchRecord.currentProduct, 
//       batchRecord.currentProductBatchNo, 
//       batchRecord.previousProduct, 
//       batchRecord.previousProductBatchNo, 
//       batchRecord.signature
//     ];

//     const requiredTempAndHumidityFields = [
//       tempAndHumidity.temperature, 
//       tempAndHumidity.humidity
//     ];

//     const requiredAuthorizationFields = [
//       authorization.authorizedForUse, 
//       authorization.dateAndTime
//     ];

//     // Check if any required fields are empty
//     if (requiredBatchRecordFields.some(field => !field) || 
//         requiredTempAndHumidityFields.some(field => !field) ||
//         requiredAuthorizationFields.some(field => !field) 
//         // !remarks || 
//       //   !precautions.area || 
//       //   !lineClearance.equipment || 
//       //   !weightOfGranules.weighedBy || 
//       // !granulationYield.theoreticalYield
//     ) {
//       alert('Please fill out all required fields before proceeding.');
//       return;
//     }

//     // Ensure record has the expected structure
//     console.log("Record data to be sent:", record); // Check the record data

//     try {
//       const response = await fetch("http://localhost:5000/api/mixing", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ...record }),
//       });

//       // Check if the response is successful
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Batch created:", data);

//       // Ensure the data contains a valid `_id` field
//       if (data && data._id) {
//         localStorage.setItem('batchId', data._id);
//         console.log('Batch ID stored in localStorage:', data._id);
//       } else {
//         console.error('No batch ID returned from API:', data);
//       }

//       const processes = JSON.parse(localStorage.getItem('processes'));
//       if (processes) {
//         const currentProcessIndex = processes.indexOf('mixing');
//         if (currentProcessIndex !== -1 && currentProcessIndex < processes.length - 1) {
//           const nextProcess = processes[currentProcessIndex + 1];
//           navigate(`/${nextProcess}`);
//         } else {
//           console.log("No next process available.");
//         }
//       }
//     } catch (error) {
//       console.error("Error creating batch:", error);
//     }
//   };

//   const handleBackPage = () => {
//     navigate(-1);
//   };

//   return (
//     <div>
//             <FormHeader></FormHeader>

//       <BatchManufacturingFormPage4 />
//       <div className="mt-6">
//         <BatchManufacturingFormPage5 />
//       </div>

//       <div className="mt-6">
//         <BatchManufacturingFormPage6 />
//       </div>

//       <div className="mt-6">
//         <BatchManufacturingFormPage7 />
//       </div>

//       <div className="mt-6">
//         <BatchManufacturingFormPage8 />
//       </div>
      
//       <div className="mt-6 flex justify-between">
//         <Button variant="contained" color="primary" onClick={handleBackPage}>Go Back</Button>
//         <Button variant="contained" color="primary" onClick={handleSubmit}>Save and Next</Button>
//       </div>
//     </div>
//   );
// }

// export default Mixing;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Tabs, Tab, Box } from '@mui/material';
import { setMixingRecord } from '../../../../store/mixingSlice';
import BatchManufacturingFormPage4 from './page4';
import BatchManufacturingFormPage5 from './page5';
import BatchManufacturingFormPage6 from './page6';
import BatchManufacturingFormPage7 from './page7';
import FormHeader from '../../../header/formHeader';
import BatchManufacturingFormPage8 from './page8';

const Mixing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const record = useSelector((state) => state.mixing);

  // Load saved tabValue from localStorage or default to 0
  const savedTabValue = JSON.parse(localStorage.getItem('activeTabMixing')) || 0;
  const [tabValue, setTabValue] = React.useState(savedTabValue); // Control active tab
  const [tabStatus, setTabStatus] = React.useState([true, false, false, false, false]); // Control which tabs are enabled

  useEffect(() => {
    const storedRecord = JSON.parse(localStorage.getItem('mixingRecord'));
    if (storedRecord) {
      dispatch(setMixingRecord(storedRecord));
    }
  }, [dispatch]);

  const handleChangeTab = (event, newValue) => {
    if (tabStatus[newValue]) {
      setTabValue(newValue);
      localStorage.setItem('activeTabMixing', JSON.stringify(newValue)); // Save tabValue to localStorage
    }
  };

  const handlePrint = () => {
    window.print(); // Print the current page
  };

  const validateFields = () => {
    const {
      precautions,
      lineClearance,
      batchRecord,
      tempAndHumidity,
      remarks,
      authorization,
      manufacturingRecord,
      weightOfGranules,
      granulationYield,
      batchManufacturingYield,
      requestForAnalysis,
    } = record;
  
    switch (tabValue) {
      case 0: 
        if (
          !precautions.sop1 || 
          !precautions.sop2 || 
          !precautions.section || 
          !precautions.specificArea || 
          !precautions.precautionsRead || 
          !lineClearance.equipment || 
          // !lineClearance.euipmentId || 
          !lineClearance.previousProduct || 
          !lineClearance.batchNo || 
          !lineClearance.cleanedBy || 
          !lineClearance.checkedBy || 
          !lineClearance.verifiedBy
        ) {
          alert('Please fill out all required fields on this page before proceeding.');
          return false;
        }
        break;
  
      case 1: 
        if (
          !batchRecord.department || 
          !batchRecord.currentProduct || 
          !batchRecord.currentProductBatchNo || 
          !batchRecord.lineClearance || 
          !batchRecord.section || 
          !batchRecord.date || 
          !batchRecord.previousProduct || 
          !batchRecord.previousProductBatchNo || 
          !batchRecord.signature || 
          !tempAndHumidity.temperature || 
          !tempAndHumidity.humidity || 
          !remarks || 
          !authorization.authorizedForUse || 
          !authorization.dateAndTime
        ) {
          alert('Please fill out all required fields on this page before proceeding.');
          return false;
        }
        break;
  
        case 2: // Combined case for coating solution preparation and coating procedure
        if (
          !manufacturingRecord.every(prep => prep.performedByOperator && prep.checkedByPO && prep.checkedByQAI) || 
          !manufacturingRecord[0].sievingStartedAt || 
          !manufacturingRecord[0].sievingCompletedOn || 
          !manufacturingRecord[1].mixingStartedAt || 
          !manufacturingRecord[1].mixingCompletedOn || 
          !manufacturingRecord[2].sampleTakenQty
        ) {
          alert('Please fill fields on this page before proceeding.');
          return false;
        }
        break;
    
  
      case 3: // Combined case for weight of coated tablets and batch manufacturing yield
        if (
          !weightOfGranules?.containers.every(container => container.grossWeight && container.tareWeight && container.netWeight) || 
          !weightOfGranules?.total?.grossWeight || 
          !weightOfGranules?.total?.tareWeight || 
          !weightOfGranules?.total?.netWeight || 
          !weightOfGranules?.weighedBy || 
          !weightOfGranules?.receivedBy ||
          !granulationYield.labels.every(label => label.description && label.weight) || 
          !granulationYield.performedBy
        ) {
          alert('Please fill out all required fields on this page before proceeding.');
          return false;
        }
        break;
  
      case 4: 
        if (
          !requestForAnalysis.batchInfo.product || 
          !requestForAnalysis.batchInfo.qcNumber || 
          !requestForAnalysis.batchInfo.section || 
          !requestForAnalysis.batchInfo.stage || 
          !requestForAnalysis.batchInfo.batchNumber || 
          !requestForAnalysis.batchInfo.mfgDate || 
          !requestForAnalysis.batchInfo.expDate || 
          !requestForAnalysis.batchInfo.date || 
          !requestForAnalysis.batchInfo.time || 
          !requestForAnalysis.batchInfo.packSize || 
          !requestForAnalysis.batchInfo.sampleQuantity || 
          !requestForAnalysis.batchInfo.weightPerUnit || 
          !requestForAnalysis.batchInfo.bSize || 
          !requestForAnalysis.qa.sampleType || 
          !requestForAnalysis.qa.releaseRequiredFor || 
          !requestForAnalysis.qa.collectedBy || 
          !requestForAnalysis.qa.dateCollected || 
          !requestForAnalysis.qa.timeCollected || 
          !requestForAnalysis.qa.quantityOfSample || 
          !requestForAnalysis.qa.containerNumbers || 
          !requestForAnalysis.qaObservations.every(obs => obs.parameter && obs.status && obs.remarks) || 
          !requestForAnalysis.qaOfficer || 
          !requestForAnalysis.qaManager
        ) {
          alert('Pleaserequired fields on this page before proceeding.');
          return false;
        }
        break;
    }
  
    return true; // All validations passed
  };

  const handleNextTab = () => {
    if (validateFields()) {
      dispatch(setMixingRecord(record));
      const newTabValue = tabValue + 1;
      setTabValue(newTabValue);
      setTabStatus((prevStatus) => {
        const updatedStatus = [...prevStatus];
        updatedStatus[newTabValue] = true; // Enable the next tab
        return updatedStatus;
      });
      localStorage.setItem('activeTabMixing', JSON.stringify(newTabValue)); // Save the updated tabValue
    }
  };

  const handleBackTab = () => {
    setTabValue((prevTabValue) => Math.max(prevTabValue - 1, 0));
    localStorage.setItem('activeTabMixing', JSON.stringify(Math.max(tabValue - 1, 0))); // Save the updated tabValue

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      return; // Exit if validation fails
    }

    try {
      const response = await fetch("http://localhost:5000/api/mixing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...record }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Batch created:", data);

      if (data && data._id) {
        localStorage.setItem('batchId', data._id);
        console.log('Batch ID stored in localStorage:', data._id);
      }

      const processes = JSON.parse(localStorage.getItem('processes'));
      if (processes) {
        const currentProcessIndex = processes.indexOf('mixing');
        if (currentProcessIndex !== -1 && currentProcessIndex < processes.length - 1) {
          const nextProcess = processes[currentProcessIndex + 1];
        localStorage.removeItem('activeTabMixing');
          navigate(`/${nextProcess}`);
        } else {
          console.log("No next process available.");
        }
      }
    } catch (error) {
      console.error("Error creating batch:", error);
    }
  };

  return (
    <div>
      <FormHeader />
      <h1 className="text-center mt-4">Mixing</h1>

      <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChangeTab} aria-label="mixing tabs">
          <Tab label="Precautions" disabled={!tabStatus[0]} />
          <Tab label="Line Clearance" disabled={!tabStatus[1]} />
          <Tab label="Manufacturing Process" disabled={!tabStatus[2]} />
          <Tab label="Weight of granules/bulk & Yield" disabled={!tabStatus[3]} />
          <Tab label="Request for analysis" disabled={!tabStatus[4]} />
        </Tabs>
      </Box>

      <div>
        {tabValue === 0 && (
          <div>
            <BatchManufacturingFormPage4 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
        {tabValue === 1 && (
          <div className="mt-6">
            <BatchManufacturingFormPage5 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
        {tabValue === 2 && (
          <div className="mt-6">
            <BatchManufacturingFormPage6 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
        {tabValue === 3 && (
          <div className="mt-6">
            <BatchManufacturingFormPage7 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
        {tabValue === 4 && (
          <div className="mt-6">
            <BatchManufacturingFormPage8 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between">
        {tabValue > 0 && (
          <Button variant="contained" color="primary" onClick={handleBackTab}>
            Back
          </Button>
        )}

        {tabValue < 4 && (
          <Button variant="contained" color="primary" onClick={handleNextTab}>
            Next
          </Button>
        )}

        {tabValue === 4 && (
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save and Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Mixing;
