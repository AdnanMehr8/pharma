// import React, { useEffect } from 'react';
// import BatchManufacturingFormPage1 from './page1';
// import BatchManufacturingFormPage2 from './page2';
// import BatchManufacturingFormPage3 from './page3';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '@mui/material';
// import { setRecord } from '../../../../store/recordSlice';
// import FormHeader from '../../../header/formHeader';

// const Dispensing = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const record = useSelector((state) => state.record);

//   useEffect(() => {
//     const storedRecord = JSON.parse(localStorage.getItem('record'));
//     if (storedRecord) {
//         dispatch(setRecord(storedRecord));
//     }
// }, [dispatch]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { 
//       batchRecord, 
//       tempAndHumidity, 
//       authorization, 
//       remarks, 
//       weighingRecordRaw, 
//       checkRecordRaw, 
//       weighingRecordCoating, 
//       checkRecordCoating 
//     } = record;

//     // Validate required fields for batchRecord
//     if (
//       !batchRecord.date || 
//       !batchRecord.lineClearance || 
//       !batchRecord.department || 
//       !batchRecord.section || 
//       !batchRecord.currentProduct || 
//       !batchRecord.currentProductBatchNo || 
//       !batchRecord.previousProduct || 
//       !batchRecord.previousProductBatchNo || 
//       !batchRecord.signature ||
//       !tempAndHumidity.temperature || 
//       !tempAndHumidity.humidity || 
//       !authorization.authorizedForUse || 
//       !authorization.dateAndTime || 
//       !remarks
//     ) {
//       alert('Please fill out all required fields before proceeding.');
//       return;
//     }

//     // Check if any weighing record fields are missing (Raw)
//     if (weighingRecordRaw.some(row => 
//       !row.item || 
//       !row.unit || 
//       !row.tareWt || 
//       !row.netWt || 
//       !row.grossWt || 
//       !row.noOfContainers
//     )) {
//       alert('Please fill out all weighing record fields for raw material before proceeding.');
//       return;
//     }

//     // Validate check records (Raw)
//     if (
//       !checkRecordRaw.checkedByDispensingPharmacist || 
//       !checkRecordRaw.checkedByQAOfficer || 
//       !checkRecordRaw.receivedByProductionPharmacist || 
//       !checkRecordRaw.receivedBySupervisor
//     ) {
//       alert('Please fill out all check record fields for raw material before proceeding.');
//       return;
//     }

//     // Check if any weighing record fields are missing (Coating)
//     if (weighingRecordCoating.some(row => 
//       !row.item || 
//       !row.unit || 
//       !row.tareWt || 
//       !row.netWt || 
//       !row.grossWt || 
//       !row.noOfContainers
//     )) {
//       alert('Please fill out all weighing record fields for coating material before proceeding.');
//       return;
//     }

//     // Validate check records (Coating)
//     if (
//       !checkRecordCoating.checkedByDispensingPharmacist || 
//       !checkRecordCoating.checkedByQAOfficer || 
//       !checkRecordCoating.receivedByProductionPharmacist || 
//       !checkRecordCoating.receivedBySupervisor
//     ) {
//       alert('Please fill out all check record fields for coating material before proceeding.');
//       return;
//     }


//   // Ensure record has the expected structure
//   console.log("Record data to be sent:", record); // Check the record data

//     try {
//       const response = await fetch("http://localhost:5000/api/record", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ...record } ),
//       });

//       // Check if the response is successful
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//       const data = await response.json();
//       console.log("Batch created:", data);


//      // Ensure the data contains a valid `_id` field
//     if (data && data._id) {
//       localStorage.setItem('batchId', data._id);
//       console.log('Batch ID stored in localStorage:', data._id);
//     } else {
//       console.error('No batch ID returned from API:', data);
//     }
      

//       const processes = JSON.parse(localStorage.getItem('processes'));
//       if (processes) {
//         const currentProcessIndex = processes.indexOf('dispensing');
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
//       <FormHeader></FormHeader>
//       <h1 className='text-center mt-4'>Dispensing</h1>
      
//       <BatchManufacturingFormPage1 />
//       <div className="mt-6">
//         <h5 className="text-lg font-semibold mt-5">Weighing Record Sheet Dispensing (Raw Material):</h5>
//         <BatchManufacturingFormPage2 />
//       </div>

//       <div className="mt-6">
//         <h5 className="text-lg font-semibold mt-5">Weighing Record Sheet Dispensing (Coating Material):</h5>
//         <BatchManufacturingFormPage3 />
//       </div>
      
//       <div className="mt-6 flex justify-between">
//         <Button variant="contained" color="primary" onClick={handleBackPage}>Go Back</Button>
//         <Button variant="contained" color="primary" onClick={handleSubmit}>Save and Next</Button>
//       </div>
//     </div>
//   );
// }

// export default Dispensing;
// import React, { useEffect } from 'react';
// import { Tabs, Tab, Box, Button } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import BatchManufacturingFormPage1 from './page1';
// import BatchManufacturingFormPage2 from './page2';
// import BatchManufacturingFormPage3 from './page3';
// import { setRecord } from '../../../../store/recordSlice';
// import FormHeader from '../../../header/formHeader';

// const Dispensing = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const record = useSelector((state) => state.record);
//   const [tabValue, setTabValue] = React.useState(0); // For controlling the active tab

//   useEffect(() => {
//     const storedRecord = JSON.parse(localStorage.getItem('record'));
//     if (storedRecord) {
//       dispatch(setRecord(storedRecord));
//     }
//   }, [dispatch]);

//   const handleChangeTab = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   const handlePrint = () => {
//     window.print(); // This triggers the browser print dialog
//   };

//   const validateFields = () => {
//     const { batchRecord, tempAndHumidity, authorization, remarks, weighingRecordRaw, checkRecordRaw, weighingRecordCoating, checkRecordCoating } = record;

//     if (tabValue === 0) { // Page 1
//       // Validate required fields for batchRecord
//       if (!batchRecord.date || !batchRecord.lineClearance || !batchRecord.department || !batchRecord.section || !batchRecord.currentProduct || !batchRecord.currentProductBatchNo || !batchRecord.previousProduct || !batchRecord.previousProductBatchNo || !batchRecord.signature || !tempAndHumidity.temperature || !tempAndHumidity.humidity || !authorization.authorizedForUse || !authorization.dateAndTime || !remarks) {
//         alert('Please fill out all required fields on Page 1 before proceeding.');
//         return false;
//       }
//     } else if (tabValue === 1) { // Page 2
//       // Check if any weighing record fields are missing (Raw)
//       if (weighingRecordRaw.some(row => !row.item || !row.unit || !row.tareWt || !row.netWt || !row.grossWt || !row.noOfContainers)) {
//         alert('Please fill out all weighing record fields for raw material before proceeding.');
//         return false;
//       }

//       // Validate check records (Raw)
//       if (!checkRecordRaw.checkedByDispensingPharmacist || !checkRecordRaw.checkedByQAOfficer || !checkRecordRaw.receivedByProductionPharmacist || !checkRecordRaw.receivedBySupervisor) {
//         alert('Please fill out all check record fields for raw material before proceeding.');
//         return false;
//       }
//     } else if (tabValue === 2) { // Page 3
//       // Check if any weighing record fields are missing (Coating)
//       if (weighingRecordCoating.some(row => !row.item || !row.unit || !row.tareWt || !row.netWt || !row.grossWt || !row.noOfContainers)) {
//         alert('Please fill out all weighing record fields for coating material before proceeding.');
//         return false;
//       }

//       // Validate check records (Coating)
//       if (!checkRecordCoating.checkedByDispensingPharmacist || !checkRecordCoating.checkedByQAOfficer || !checkRecordCoating.receivedByProductionPharmacist || !checkRecordCoating.receivedBySupervisor) {
//         alert('Please fill out all check record fields for coating material before proceeding.');
//         return false;
//       }
//     }

//     return true; // All validations passed
//   };

//   const handleNextTab = () => {
//     if (validateFields()) {
//       setTabValue((prevTabValue) => Math.min(prevTabValue + 1, 2)); // Max is 2 (since we have 3 tabs)
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
//       const response = await fetch("http://localhost:5000/api/record", {
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
//         const currentProcessIndex = processes.indexOf('dispensing');
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
//       <h1 className="text-center mt-4">Dispensing</h1>

//       <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={tabValue} onChange={handleChangeTab} aria-label="dispensing tabs">
//           <Tab label="Batch Manufacturing Form - Page 1" />
//           <Tab label="Weighing Record (Raw Material)" />
//           <Tab label="Weighing Record (Coating Material)" />
//         </Tabs>
//       </Box>

//       <div>
//         {tabValue === 0 && (
//           <div>
//             <BatchManufacturingFormPage1 />
//             <Button variant="contained" onClick={handlePrint} className="mt-3">
//               Print Page
//             </Button>
//           </div>
//         )}
//         {tabValue === 1 && (
//           <div className="mt-6">
//             <h5 className="text-lg font-semibold mt-5">
//               Weighing Record Sheet Dispensing (Raw Material):
//             </h5>
//             <BatchManufacturingFormPage2 />
//             <Button variant="contained" onClick={handlePrint} className="mt-3">
//               Print Page
//             </Button>
//           </div>
//         )}
//         {tabValue === 2 && (
//           <div className="mt-6">
//             <h5 className="text-lg font-semibold mt-5">
//               Weighing Record Sheet Dispensing (Coating Material):
//             </h5>
//             <BatchManufacturingFormPage3 />
//             <Button variant="contained" onClick={handlePrint} className="mt-3">
//               Print Page
//             </Button>
//           </div>
//         )}
//       </div>

//       <div className="mt-6 flex justify-between">
//         {tabValue > 0 && (
//           <Button variant="contained" color="primary" onClick={handleBackTab}>
//             Back
//           </Button>
//         )}

//         {tabValue < 2 && (
//           <Button variant="contained" color="primary" onClick={handleNextTab}>
//             Next
//           </Button>
//         )}

//         {tabValue === 2 && (
//           <Button variant="contained" color="primary" onClick={handleSubmit}>
//             Save and Next
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dispensing;
import React, { useEffect } from 'react';
import { Tabs, Tab, Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BatchManufacturingFormPage1 from './page1';
import BatchManufacturingFormPage2 from './page2';
import BatchManufacturingFormPage3 from './page3';
import { setRecord } from '../../../../store/recordSlice';
import FormHeader from '../../../header/formHeader';

const Dispensing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const record = useSelector((state) => state.record);

  // Load saved tabValue from localStorage or default to 0
  const savedTabValue = JSON.parse(localStorage.getItem('activeTabDispensing')) || 0;
  const [tabValue, setTabValue] = React.useState(savedTabValue); // For controlling the active tab
  const [tabStatus, setTabStatus] = React.useState([true, false, false]); // Manage enabled/disabled state of tabs

  useEffect(() => {
    const storedRecord = JSON.parse(localStorage.getItem('record'));
    if (storedRecord) {
      dispatch(setRecord(storedRecord));
    }
  }, [dispatch]);

  // Save the active tab value to localStorage whenever it changes
  const handleChangeTab = (event, newValue) => {
    if (tabStatus[newValue]) {
      setTabValue(newValue);
      localStorage.setItem('activeTabDispensing', JSON.stringify(newValue)); // Save tabValue to localStorage
    }
  };

  const handlePrint = () => {
    window.print(); // This triggers the browser print dialog
  };

  const validateFields = () => {
    const { batchRecord, checkboxes, tempAndHumidity, authorization, remarks, weighingRecordRaw, checkRecordRaw, weighingRecordCoating, checkRecordCoating } = record;

    if (tabValue === 0) { // Page 1
      // Validate required fields for batchRecord
      if (!batchRecord.date || !batchRecord.lineClearance || !batchRecord.department || !batchRecord.section || !batchRecord.currentProduct || !batchRecord.currentProductBatchNo || !batchRecord.previousProduct || !batchRecord.previousProductBatchNo || !batchRecord.signature || !checkboxes.cartons || !checkboxes.documents || !checkboxes.rawMaterial || !checkboxes.remnantOfPreviousProduct || !checkboxes.area || !checkboxes.weighingBalance || !checkboxes.dispensingBoard || !checkboxes.scoops || !checkboxes.pallets ||  !tempAndHumidity.temperature || !tempAndHumidity.humidity || !authorization.authorizedForUse || !authorization.dateAndTime || !remarks) {
        alert('Please fill out all required fields on Page 1 before proceeding.');
        return false;
      }
    } else if (tabValue === 1) { // Page 2
      // Check if any weighing record fields are missing (Raw)
      if (weighingRecordRaw.some(row => !row.item || !row.unit || !row.tareWt || !row.netWt || !row.grossWt || !row.noOfContainers)) {
        alert('Please fill out all weighing record fields for raw material before proceeding.');
        return false;
      }

      // Validate check records (Raw)
      if (!checkRecordRaw.checkedByDispensingPharmacist || !checkRecordRaw.dateDP || !checkRecordRaw.checkedByQAOfficer || !checkRecordRaw.dateQA || !checkRecordRaw.receivedByProductionPharmacist || !checkRecordRaw.datePP || !checkRecordRaw.dateS || !checkRecordRaw.receivedBySupervisor) {
        alert('Please fill out all check record fields for raw material before proceeding.');
        return false;
      }
    } else if (tabValue === 2) { // Page 3
      // Check if any weighing record fields are missing (Coating)
      if (weighingRecordCoating.some(row => !row.item || !row.unit || !row.tareWt || !row.netWt || !row.grossWt || !row.noOfContainers)) {
        alert('Please fill out all weighing record fields for coating material before proceeding.');
        return false;
      }

      // Validate check records (Coating)
      if (!checkRecordCoating.checkedByDispensingPharmacist || !checkRecordCoating.checkedByQAOfficer || !checkRecordCoating.receivedByProductionPharmacist || !checkRecordCoating.receivedBySupervisor || !checkRecordCoating.dateDP || !checkRecordCoating.dateQA || !checkRecordCoating.datePP || !checkRecordCoating.dateS) {
        alert('Please fill out all check record fields for coating material before proceeding.');
        return false;
      }
    }

    return true; // All validations passed
  };

  const handleNextTab = () => {
    if (validateFields()) {
      dispatch(setRecord(record));
      const newTabValue = tabValue + 1;
      setTabValue(newTabValue);
      setTabStatus((prevStatus) => {
        const updatedStatus = [...prevStatus];
        updatedStatus[newTabValue] = true; // Enable the next tab
        return updatedStatus;
      });
      localStorage.setItem('activeTabDispensing', JSON.stringify(newTabValue)); // Save the updated tabValue
    }
  };

  const handleBackTab = () => {
    setTabValue((prevTabValue) => Math.max(prevTabValue - 1, 0)); // Min is 0 (first tab)
    localStorage.setItem('activeTabDispensing', JSON.stringify(Math.max(tabValue - 1, 0))); // Save the updated tabValue
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Call the validation before submitting
    if (!validateFields()) {
      return; // Exit if validation fails
    }

    try {
      const response = await fetch("http://localhost:5000/api/record", {
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
        const currentProcessIndex = processes.indexOf('dispensing');
        if (currentProcessIndex !== -1 && currentProcessIndex < processes.length - 1) {
          const nextProcess = processes[currentProcessIndex + 1];
          // Remove 'activeTabDispensing' from local storage before navigating
        localStorage.removeItem('activeTabDispensing');
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
      <h1 className="text-center mt-4">Dispensing</h1>

      <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChangeTab} aria-label="dispensing tabs">
          <Tab label="Line Clearance" disabled={!tabStatus[0]} />
          <Tab label="Weighing Record (Raw Material)" disabled={!tabStatus[1]} />
          <Tab label="Weighing Record (Coating Material)" disabled={!tabStatus[2]} />
        </Tabs>
      </Box>

      <div>
        {tabValue === 0 && (
          <div>
            <BatchManufacturingFormPage1 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
        {tabValue === 1 && (
          <div className="mt-6">
            
            <BatchManufacturingFormPage2 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
        {tabValue === 2 && (
          <div className="mt-6">
        
            <BatchManufacturingFormPage3 />
            <Button variant="contained" onClick={handlePrint} className="mt-3">
              Print Page
            </Button>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between">
        {tabValue > 0 && (
          <Button variant="contained" color="primary" onClick={handleBackTab} style={{ display: 'flex', justifyContent: 'space-between' }}>
            Back
          </Button>
        )}

        {tabValue < 2 && (
          <Button variant="contained" color="primary" onClick={handleNextTab} className='mt-4'>
            Next
          </Button>
        )}

        {tabValue === 2 && (
          <Button variant="contained" color="primary" onClick={handleSubmit} className='mt-4'>
            Save and Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Dispensing;
