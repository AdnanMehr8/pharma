// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '@mui/material';
// import { setCompressionRecord } from '../../../../store/compressionSlice'; // Updated action import

// import FormHeader from '../../../header/formHeader';
// import BatchManufacturingFormPage9 from './page9';
// import BatchManufacturingFormPage10 from './page10';
// import BatchManufacturingFormPage11 from './page11';
// import BatchManufacturingFormPage12 from './page12';
// import BatchManufacturingFormPage13 from './page13';
// import BatchManufacturingFormPage14 from './page14';
// import BatchManufacturingFormPage15 from './page15';
// import BatchManufacturingFormPage17 from './page17';
// import BatchManufacturingFormPage18 from './page18';

// const Compression = () => { // Renamed component to Compression
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const record = useSelector((state) => state.compression); // Updated state selector

//   useEffect(() => {
//     const storedRecord = JSON.parse(localStorage.getItem('compressionRecord')); // Updated key for localStorage
//     if (storedRecord) {
//       dispatch(setCompressionRecord(storedRecord)); // Updated action
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
//       // Add any other validation if necessary
//     ) {
//       alert('Please fill out all required fields before proceeding.');
//       return;
//     }

//     // Ensure record has the expected structure
//     console.log("Record data to be sent:", record); // Check the record data

//     try {
//       const response = await fetch("http://localhost:5000/api/compression", { // Updated endpoint for compression
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
//         const currentProcessIndex = processes.indexOf('compression'); // Updated for compression process
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
//       <FormHeader />

//       <BatchManufacturingFormPage9 />
//       <div className="mt-6">
//         <BatchManufacturingFormPage10 />
//       </div>

//       <div className="mt-6">
//         <BatchManufacturingFormPage11 />
//       </div>

//       <div className="mt-6">
//         <BatchManufacturingFormPage12 />
//       </div>

//       <div className="mt-6">
//         <BatchManufacturingFormPage13 />
//       </div>

//       <div className="mt-6">
//         <BatchManufacturingFormPage14 />
//       </div>

//       <div className="mt-6">
//         <BatchManufacturingFormPage15 />
//       </div>

//       <div className="mt-6">
//         <BatchManufacturingFormPage17 />
//       </div>

//       <div className="mt-6">
//         <BatchManufacturingFormPage18 />
//       </div>
      
//       <div className="mt-6 flex justify-between">
//         <Button variant="contained" color="primary" onClick={handleBackPage}>Go Back</Button>
//         <Button variant="contained" color="primary" onClick={handleSubmit}>Save and Next</Button>
//       </div>
//     </div>
//   );
// }

// export default Compression; // Updated export
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Button, Tabs, Tab, Box } from '@mui/material';
// import { setCompressionRecord } from '../../../../store/compressionSlice'; // Updated action import

// import FormHeader from '../../../header/formHeader';
// import BatchManufacturingFormPage9 from './page9';
// import BatchManufacturingFormPage10 from './page10';
// import BatchManufacturingFormPage11 from './page11';
// import BatchManufacturingFormPage12 from './page12';
// import BatchManufacturingFormPage13 from './page13';
// import BatchManufacturingFormPage14 from './page14';
// import BatchManufacturingFormPage15 from './page15';
// import BatchManufacturingFormPage17 from './page17';
// import BatchManufacturingFormPage18 from './page18';

// const Compression = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const record = useSelector((state) => state.compression); // Updated state selector
//   const [tabValue, setTabValue] = React.useState(0); // Manage active tab
//   const [tabStatus, setTabStatus] = React.useState([true, false, false, false, false, false, false, false, false]); // Manage enabled/disabled state of tabs

//   useEffect(() => {
//     const storedRecord = JSON.parse(localStorage.getItem('compressionRecord'));
//     if (storedRecord) {
//       dispatch(setCompressionRecord(storedRecord));
//     }
//   }, [dispatch]);

//   const handleChangeTab = (event, newValue) => {
//     if (tabStatus[newValue]) {
//       setTabValue(newValue);
//     }
//   };

//   const validateFields = () => {
//     const {
//       precautions,
//       lineClearance,
//       batchRecord,
//       tempAndHumidity,
//       remarks,
//       authorization,
//       } = record;

//     if (tabValue === 0) { // Page 1
//       // Validate required fields for batchRecord
//       if (!precautions.precautionsRead || !lineClearance.previousProduct || !lineClearance.batchNo || !lineClearance.cleanedBy || !lineClearance.checkedBy || !lineClearance.verifiedBy) {
//         alert('Please fill out all required fields on Page 1 before proceeding.');
//         return false;
//       }
    
//     } else if (tabValue === 1) { // Page 2
//       if (!batchRecord.department || !batchRecord.currentProduct || !batchRecord.currentProductBatchNo || !batchRecord.lineClearance || !batchRecord.section || !batchRecord.date || !batchRecord.previousProduct || !batchRecord.previousProductBatchNo || !batchRecord.signature || !tempAndHumidity.temperature || !tempAndHumidity.humidity || !remarks || !authorization.authorizedForUse || !authorization.dateAndTime) {
//         alert('Please fill out all required fields on Page 1 before proceeding.');
//         return false;
//       }
//     }
    
   
//     return true; // All validations passed
//   };

//   const handleNextTab = () => {
//     if (validateFields()) {
//       const newTabValue = tabValue + 1;
//       setTabValue(newTabValue);
//       setTabStatus((prevStatus) => {
//         const updatedStatus = [...prevStatus];
//         updatedStatus[newTabValue] = true; // Enable the next tab
//         return updatedStatus;
//       });
//     }
//   };

//   const handleBackTab = () => {
//     setTabValue((prevTabValue) => Math.max(prevTabValue - 1, 0)); // Min is 0 (first tab)
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Call the validation before submitting
//     if (!validateFields()) {
//       return; // Exit if validation fails
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/compression", { 
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ...record }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Batch created:", data);

//       if (data && data._id) {
//         localStorage.setItem('batchId', data._id);
//         console.log('Batch ID stored in localStorage:', data._id);
//       }

//       const processes = JSON.parse(localStorage.getItem('processes'));
//       if (processes) {
//         const currentProcessIndex = processes.indexOf('compression'); 
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

//   return (
//     <div>
//       <FormHeader />
//       <h1 className="text-center mt-4">Compression</h1>

//       <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={tabValue} onChange={handleChangeTab} aria-label="compression tabs">
//           <Tab label="Page 9" disabled={!tabStatus[0]} />
//           <Tab label="Page 10" disabled={!tabStatus[1]} />
//           <Tab label="Page 11" disabled={!tabStatus[2]} />
//           <Tab label="Page 12" disabled={!tabStatus[3]} />
//           <Tab label="Page 13" disabled={!tabStatus[4]} />
//           <Tab label="Page 14" disabled={!tabStatus[5]} />
//           <Tab label="Page 15" disabled={!tabStatus[6]} />
//           <Tab label="Page 17" disabled={!tabStatus[7]} />
//           <Tab label="Page 18" disabled={!tabStatus[8]} />
//         </Tabs>
//       </Box>

//       <div>
//         {tabValue === 0 && <BatchManufacturingFormPage9 />}
//         {tabValue === 1 && <BatchManufacturingFormPage10 />}
//         {tabValue === 2 && <BatchManufacturingFormPage11 />}
//         {tabValue === 3 && <BatchManufacturingFormPage12 />}
//         {tabValue === 4 && <BatchManufacturingFormPage13 />}
//         {tabValue === 5 && <BatchManufacturingFormPage14 />}
//         {tabValue === 6 && <BatchManufacturingFormPage15 />}
//         {tabValue === 7 && <BatchManufacturingFormPage17 />}
//         {tabValue === 8 && <BatchManufacturingFormPage18 />}
//       </div>

//       <div className="mt-6 flex justify-between">
//         {tabValue > 0 && (
//           <Button variant="contained" color="primary" onClick={handleBackTab}>
//             Back
//           </Button>
//         )}

//         {tabValue < 8 && (
//           <Button variant="contained" color="primary" onClick={handleNextTab}>
//             Next
//           </Button>
//         )}

//         {tabValue === 8 && (
//           <Button variant="contained" color="primary" onClick={handleSubmit}>
//             Save and Next
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Compression;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Button, Tabs, Tab, Box } from '@mui/material';
// import { setCompressionRecord } from '../../../../store/compressionSlice'; // Updated action import

// import FormHeader from '../../../header/formHeader';
// import BatchManufacturingFormPage9 from './page9';
// import BatchManufacturingFormPage10 from './page10';
// import BatchManufacturingFormPage11 from './page11';
// import BatchManufacturingFormPage12 from './page12';
// import BatchManufacturingFormPage13 from './page13';
// import BatchManufacturingFormPage14 from './page14';
// import BatchManufacturingFormPage15 from './page15';
// import BatchManufacturingFormPage17 from './page17';
// import BatchManufacturingFormPage18 from './page18';

// const Compression = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const record = useSelector((state) => state.compression); // Updated state selector
//   const [tabValue, setTabValue] = React.useState(0); // Manage active tab
//   const [tabStatus, setTabStatus] = React.useState([true, false, false, false, false, false, false, false, false]); // Manage enabled/disabled state of tabs

//   useEffect(() => {
//     const storedRecord = JSON.parse(localStorage.getItem('compressionRecord'));
//     if (storedRecord) {
//       dispatch(setCompressionRecord(storedRecord));
//     }
//   }, [dispatch]);

//   const handleChangeTab = (event, newValue) => {
//     if (tabStatus[newValue]) {
//       setTabValue(newValue);
//     }
//   };

//   const validateFields = () => {
//     const {
//       precautions,
//       lineClearance,
//       batchRecord,
//       tempAndHumidity,
//       remarks,
//       authorization,
//     } = record;

//     if (tabValue === 0) { // Page 1
//       // Validate required fields for batchRecord
//       if (!precautions.precautionsRead || !lineClearance.previousProduct || !lineClearance.batchNo || !lineClearance.cleanedBy || !lineClearance.checkedBy || !lineClearance.verifiedBy) {
//         alert('Please fill out all required fields on Page 1 before proceeding.');
//         return false;
//       }
    
//     } else if (tabValue === 1) { // Page 2
//       if (!batchRecord.department || !batchRecord.currentProduct || !batchRecord.currentProductBatchNo || !batchRecord.lineClearance || !batchRecord.section || !batchRecord.date || !batchRecord.previousProduct || !batchRecord.previousProductBatchNo || !batchRecord.signature || !tempAndHumidity.temperature || !tempAndHumidity.humidity || !remarks || !authorization.authorizedForUse || !authorization.dateAndTime) {
//         alert('Please fill out all required fields on Page 2 before proceeding.');
//         return false;
//       }
//     }
   
//     return true; // All validations passed
//   };

//   const handleNextTab = () => {
//     if (validateFields()) {
//       const newTabValue = tabValue + 1;
//       setTabValue(newTabValue);
//       setTabStatus((prevStatus) => {
//         const updatedStatus = [...prevStatus];
//         updatedStatus[newTabValue] = true; // Enable the next tab
//         return updatedStatus;
//       });
//     }
//   };

//   const handleBackTab = () => {
//     setTabValue((prevTabValue) => Math.max(prevTabValue - 1, 0)); // Min is 0 (first tab)
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Call the validation before submitting
//     if (!validateFields()) {
//       return; // Exit if validation fails
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/compression", { 
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ...record }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Batch created:", data);

//       if (data && data._id) {
//         localStorage.setItem('batchId', data._id);
//         console.log('Batch ID stored in localStorage:', data._id);
//       }

//       const processes = JSON.parse(localStorage.getItem('processes'));
//       if (processes) {
//         const currentProcessIndex = processes.indexOf('compression'); 
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

//   return (
//     <div>
//       <FormHeader />
//       <h1 className="text-center mt-4">Compression</h1>

//       <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={tabValue} onChange={handleChangeTab} aria-label="compression tabs">
//           <Tab label="Page 9" disabled={!tabStatus[0]} />
//           <Tab label="Page 10" disabled={!tabStatus[1]} />
//           <Tab label="Page 11" disabled={!tabStatus[2]} />
//           <Tab label="Page 12" disabled={!tabStatus[3]} />
//           <Tab label="Page 13" disabled={!tabStatus[4]} />
//           <Tab label="Page 14" disabled={!tabStatus[5]} />
//           <Tab label="Page 15" disabled={!tabStatus[6]} />
//           <Tab label="Page 17" disabled={!tabStatus[7]} />
//           <Tab label="Page 18" disabled={!tabStatus[8]} />
//         </Tabs>
//       </Box>

//       <div>
//         {tabValue === 0 && <BatchManufacturingFormPage9 />}
//         {tabValue === 1 && <BatchManufacturingFormPage10 />}
//         {tabValue === 2 && <BatchManufacturingFormPage11 />}
//         {tabValue === 3 && <BatchManufacturingFormPage12 />}
//         {tabValue === 4 && <BatchManufacturingFormPage13 />}
//         {tabValue === 5 && <BatchManufacturingFormPage14 />}
//         {tabValue === 6 && <BatchManufacturingFormPage15 />}
//         {tabValue === 7 && <BatchManufacturingFormPage17 />}
//         {tabValue === 8 && <BatchManufacturingFormPage18 />}
//       </div>

//       <div className="mt-6 flex justify-between">
//         {tabValue > 0 && (
//           <Button variant="contained" color="primary" onClick={handleBackTab}>
//             Back
//           </Button>
//         )}

//         {tabValue < 8 && (
//           <Button variant="contained" color="primary" onClick={handleNextTab}>
//             Next
//           </Button>
//         )}

//         {tabValue === 8 && (
//           <Button variant="contained" color="primary" onClick={handleSubmit}>
//             Save and Next
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Compression;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Tabs, Tab, Box } from '@mui/material';
import { setCompressionRecord } from '../../../../store/compressionSlice';

import FormHeader from '../../../header/formHeader';
import BatchManufacturingFormPage9 from './page9';
import BatchManufacturingFormPage10 from './page10';
import BatchManufacturingFormPage11 from './page11';
import BatchManufacturingFormPage12 from './page12';
import BatchManufacturingFormPage13 from './page13';
import BatchManufacturingFormPage14 from './page14';
import BatchManufacturingFormPage15 from './page15';
import BatchManufacturingFormPage17 from './page17';
import BatchManufacturingFormPage18 from './page18';

const Compression = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const record = useSelector((state) => state.compression);

    // Load saved tabValue from localStorage or default to 0
    const savedTabValue = JSON.parse(localStorage.getItem('activeTabCompression')) || 0;
  const [tabValue, setTabValue] = React.useState(savedTabValue);
  const [tabStatus, setTabStatus] = React.useState([true, false, false, false, false, false, false, false, false]);

  useEffect(() => {
    const storedRecord = JSON.parse(localStorage.getItem('compressionRecord'));
    if (storedRecord) {
      dispatch(setCompressionRecord(storedRecord));
    }
  }, [dispatch]);

  const handleChangeTab = (event, newValue) => {
    if (tabStatus[newValue]) {
      setTabValue(newValue);
      localStorage.setItem('activeTabCompression', JSON.stringify(newValue)); // Save tabValue to localStorage
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
      checkboxes,
    } = record;

    switch (tabValue) {
      case 0: 
        if (!precautions.precautionsRead || 
          !lineClearance.every(line => line.equipment && line.equipmentId && line.previousProduct && line.batchNo && line.cleanedBy && line.checkedBy && line.verifiedBy && line.equipmentCapacity && line.clDate && line.chDate && line.vDate )
        ) {
          alert('Please fill out all required fields on this page before proceeding.');
          return false;
        }
        break;
      
      case 1: 
        if (!batchRecord.department || !batchRecord.currentProduct || !batchRecord.currentProductBatchNo || !batchRecord.lineClearance || !batchRecord.section || !batchRecord.date || !batchRecord.previousProduct || !batchRecord.previousProductBatchNo || !batchRecord.signature ||  !checkboxes.pallets ||
          !checkboxes.cartons ||
          !checkboxes.powderOrTabletOfPreviousBatch ||
          !checkboxes.remnantOfPreviousProduct ||
          !checkboxes.area ||
          !checkboxes.compressionMachine ||
          !checkboxes.containerOrDrums ||
          !checkboxes.scoops || !tempAndHumidity.temperature || !tempAndHumidity.humidity || !compressionRemarks || !authorization.authorizedForUse || !authorization.dateAndTime) {
          alert('Please fill out all required fields on this page before proceeding.');
          return false;
        }
        break;
      
      case 2: 
        if (
          !compressionRecord.verification.every(prep => prep.performedByOperator && prep.checkedByPO && prep.checkedByQAI && prep.pboDate && prep.checkedByPODate && prep.checkedByQAIDate && prep.target) || 

          !compressionRecord.temp || !compressionRecord.rH || !compressionRecord.weightOfGranules || !compressionRecord.upperPunch || !compressionRecord.lowerPunch || !compressionRecord.compressionStartedAt || !compressionRecord.compressionCompletedOn || !compressionRecord.sampleTakenQty) {
          alert('Please fill out all required fields on this page before proceeding.');
          return false;
        }
        break;
      
        case 3: 
          if (!requestForAnalysis.batchInfo.product || !requestForAnalysis.batchInfo.qcNumber || !requestForAnalysis.batchInfo.section || !requestForAnalysis.batchInfo.stage || !requestForAnalysis.batchInfo.batchNumber || !requestForAnalysis.batchInfo.mfgDate || !requestForAnalysis.batchInfo.expDate || !requestForAnalysis.batchInfo.date || !requestForAnalysis.batchInfo.time || !requestForAnalysis.batchInfo.packSize || !requestForAnalysis.batchInfo.sampleQuantity || !requestForAnalysis.batchInfo.weightPerUnit || !requestForAnalysis.batchInfo.bSize || !requestForAnalysis.qa.sampleType || !requestForAnalysis.qa.releaseRequiredFor || !requestForAnalysis.qa.collectedBy || !requestForAnalysis.qa.dateCollected || !requestForAnalysis.qa.quantityOfSample || !requestForAnalysis.qa.containerNumbers || !requestForAnalysis.qaObservations.every(obs => obs.parameter && obs.statusCompression && obs.remarks) || !requestForAnalysis.qaOfficer || !requestForAnalysis.qaManager) {
            alert('Please fill out all required fields on this page before proceeding.');
            return false;
          }
        break;
      
      case 4: 
        if (!compressionSpecifications.parameters.every(param => param.parameters && param.specification && param.results) || !compressionSpecifications.checkedByQA || !compressionSpecifications.checkedByQADate) {
          alert('Please fill out all required fields on this page before proceeding.');
          return false;
        }
        break;
      
      case 5: 
        if (!followUp.labels.every(label => label.date && label.time && label.avgWeight && label.thickness && label.hardness && label.disintigrationTime && label.friability && label.performedBy) || !followUp.checkedByQA || !followUp.checkedByQADate ) {
          alert('Please fill out all required fields on this page before proceeding.');
          return false;
        }
        break;
      
      
      case 6: 
        if (!checkSheet.labels.every(label => label.dateAndTime && label.weights.every(w => w !== "") && label.avgWeightOf10Tabs && label.temp && label.rH && label.PoOrQoa) || !checkSheet.upperLimit || !checkSheet.targetWeight || !checkSheet.lowerLimit || !checkSheet.dateStarted || !checkSheet.dateCompleted || !checkSheet.remarks) {
          alert('Please fill out all required fields on this page before proceeding.');
          return false;
        }
        break;
      
        case 7: 
            if (
              // Check for weightOfCompressedTablets
              !weightOfCompressedTablets.containers.every(container => container.grossWeight && container.tareWeight && container.netWeight) || 
              !weightOfCompressedTablets.total.grossWeight || 
              !weightOfCompressedTablets.total.tareWeight || 
              !weightOfCompressedTablets.total.netWeight || 
              !weightOfCompressedTablets.weighedBy || 
              !weightOfCompressedTablets.receivedBy || 
              // Check for compressionYield
              !compressionYield.labels.every(label => label.description && label.yield) || 
              !compressionYield.performedBy ||
              !compressionYield.performedByDate

            ) {
              alert('Please fill out all required fields on this page before proceeding.');
              return false;
            }
            break;
        
      
        case 8: 
          if (!requestForAnalysisEnd.batchInfo.product || !requestForAnalysisEnd.batchInfo.qcNumber || !requestForAnalysisEnd.batchInfo.section || !requestForAnalysisEnd.batchInfo.stage || !requestForAnalysisEnd.batchInfo.batchNumber || !requestForAnalysisEnd.batchInfo.mfgDate || !requestForAnalysisEnd.batchInfo.expDate || !requestForAnalysisEnd.batchInfo.date || !requestForAnalysisEnd.batchInfo.time || !requestForAnalysisEnd.batchInfo.packSize || !requestForAnalysisEnd.batchInfo.sampleQuantity || !requestForAnalysisEnd.batchInfo.weightPerUnit || !requestForAnalysisEnd.batchInfo.bSize || !requestForAnalysisEnd.qa.sampleType || !requestForAnalysisEnd.qa.releaseRequiredFor || !requestForAnalysisEnd.qa.collectedBy || !requestForAnalysisEnd.qa.dateCollected || !requestForAnalysisEnd.qa.quantityOfSample || !requestForAnalysisEnd.qa.containerNumbers || !requestForAnalysisEnd.qaObservations.every(obs => obs.parameter && obs.statusCompressionEnd && obs.remarks) || !requestForAnalysisEnd.qaOfficer || !requestForAnalysisEnd.qaManager) {
            alert('Please fill out all required fields on this page before proceeding.');
            return false;
          }
        break;
    }
   
    return true; // All validations passed
  };

  const handleNextTab = () => {
    if (validateFields()) {
      dispatch(setCompressionRecord(record));
      const newTabValue = tabValue + 1;
      setTabValue(newTabValue);
      setTabStatus((prevStatus) => {
        const updatedStatus = [...prevStatus];
        updatedStatus[newTabValue] = true; // Enable the next tab
        return updatedStatus;
      });
      localStorage.setItem('activeTabCompression', JSON.stringify(newTabValue)); // Save the updated tabValue
    }
  };

  const handleBackTab = () => {
    setTabValue((prevTabValue) => Math.max(prevTabValue - 1, 0));
    localStorage.setItem('activeTabCompression', JSON.stringify(Math.max(tabValue - 1, 0))); // Save the updated tabValue
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/compression", { 
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
        localStorage.setItem('compressionID', data._id);
        console.log('Compression ID stored in localStorage:', data._id);
      }

      const processes = JSON.parse(localStorage.getItem('processes'));
      if (processes) {
        const currentProcessIndex = processes.indexOf('compression'); 
        if (currentProcessIndex !== -1 && currentProcessIndex < processes.length - 1) {
          const nextProcess = processes[currentProcessIndex + 1];
        localStorage.removeItem('activeTabCompression');
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
      <h1 className="text-center mt-4">Compression</h1>

      <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChangeTab} aria-label="compression tabs">
          <Tab label="Precautions" disabled={!tabStatus[0]} />
          <Tab label="Line Clearance" disabled={!tabStatus[1]} />
          <Tab label="Compression Process" disabled={!tabStatus[2]} />
          <Tab label="Request for analysis" disabled={!tabStatus[3]} />
          <Tab label="Compression specifications" disabled={!tabStatus[4]} />
          <Tab label="Follow up" disabled={!tabStatus[5]} />
          <Tab label="Check-sheet" disabled={!tabStatus[6]} />
          <Tab label="Weight & Yield" disabled={!tabStatus[7]} />
          <Tab label="Request for analysis" disabled={!tabStatus[8]} />
        </Tabs>
      </Box>

      <div>
        {tabValue === 0 && (
          <div>
            <BatchManufacturingFormPage9 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
        {tabValue === 1 && (
          <div>
            <BatchManufacturingFormPage10 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
        {tabValue === 2 && (
          <div>
            <BatchManufacturingFormPage11 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
        {tabValue === 3 && (
          <div>
            <BatchManufacturingFormPage12 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
        {tabValue === 4 && (
          <div>
            <BatchManufacturingFormPage13 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
        {tabValue === 5 && (
          <div>
            <BatchManufacturingFormPage14 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
        {tabValue === 6 && (
          <div>
            <BatchManufacturingFormPage15 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
        {tabValue === 7 && (
          <div>
            <BatchManufacturingFormPage17 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
        {tabValue === 8 && (
          <div>
            <BatchManufacturingFormPage18 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
      </div>

      <div className="mt-6" style={{ display: 'flex', justifyContent: 'space-between' }}>
        {tabValue > 0 && (
          <Button variant="contained" color="primary" onClick={handleBackTab} className='mt-4'>
            Back
          </Button>
        )}

        {tabValue < 8 && (
          <Button variant="contained" color="primary" onClick={handleNextTab} className='mt-4'>
            Next
          </Button>
        )}

        {tabValue === 8 && (
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save and Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Compression;