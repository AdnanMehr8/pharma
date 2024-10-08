import React, { useEffect } from 'react';
import { Card, CardContent, TextField, FormControlLabel, Radio, RadioGroup, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setRecord } from '../../../../store/recordSlice';
import FormHeader from '../../../header/formHeader';
import BatchManufacturingFormPage2 from './page2';
import BatchManufacturingFormPage3 from './page3';

const BatchManufacturingFormPage1 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const record = useSelector((state) => state.record);

    // useEffect(() => {
    //     const storedRecord = JSON.parse(localStorage.getItem('record'));
    //     if (storedRecord) {
    //         dispatch(setRecord(storedRecord));
    //     }
    // }, [dispatch]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name in record.batchInfo) {
            dispatch(setRecord({ ...record, batchInfo: { ...record.batchInfo, [name]: value } }));
        } else if (name in record.batchRecord) {
            dispatch(setRecord({ ...record, batchRecord: { ...record.batchRecord, [name]: value } }));
        } else if (name in record.authorization) {
            dispatch(setRecord({ ...record, authorization: { ...record.authorization, [name]: value } }));
        } else if (name in record.tempAndHumidity) {
            dispatch(setRecord({ ...record, tempAndHumidity: { ...record.tempAndHumidity, [name]: value } }));
        }  else if (name === 'remarks') {  
          dispatch(setRecord({ ...record, remarks: value })); 
      }
    };

    const handleCheckboxChange = (e) => {
        const { name, value } = e.target;
        dispatch(setRecord({ ...record, checkboxes: { ...record.checkboxes, [name]: value } }));
    };

    

    const handleBackPage = () => {
        navigate(-1);
      };

    // const handleNextPage = () => {
    //     // Get the rearranged processes from local storage
    //     const processes = JSON.parse(localStorage.getItem('processes'));
    
    //     if (processes) {
    //       const currentProcessIndex = processes.indexOf('page1'); // Assuming this is page3's identifier
    
    //       if (currentProcessIndex !== -1 && currentProcessIndex < processes.length - 1) {
    //         const nextProcess = processes[currentProcessIndex + 1];
    //         navigate(`/${nextProcess}`); // Navigate to the next process
    //       } else {
    //         console.log("No next process available."); // Handle case where there is no next process
    //       }
    //     }
    //   };
    const handleNextPage = () => {
        // const { batchRecord, checkboxes, tempAndHumidity, authorization, remarks } = record;
    
        // // Validate required fields
        // if (
        //     !batchRecord.date || 
        //     !batchRecord.lineClearance || 
        //     !batchRecord.department || 
        //     !batchRecord.section || 
        //     !batchRecord.currentProduct || 
        //     !batchRecord.currentProductBatchNo || 
        //     !batchRecord.previousProduct || 
        //     !batchRecord.previousProductBatchNo || 
        //     !batchRecord.signature ||
        //     !tempAndHumidity.temperature || 
        //     !tempAndHumidity.humidity || 
        //     !authorization.authorizedForUse || 
        //     !authorization.dateAndTime || 
        //     !remarks
        // ) {
        //     alert('Please fill out all required fields before proceeding.');
        //     return;
        // }
    
        // Proceed to the next page if all required fields are filled
        // const processes = JSON.parse(localStorage.getItem('processes'));
    
        // if (processes) {
        //     const currentProcessIndex = processes.indexOf('page1');
        //     if (currentProcessIndex !== -1 && currentProcessIndex < processes.length - 1) {
        //         const nextProcess = processes[currentProcessIndex + 1];
        //         navigate(`/${nextProcess}`);
        //     } else {
        //         console.log("No next process available.");
        //     }
        // }
    };
    
    return (
        <Card className="max-w-4xl mx-auto">
            {/* <FormHeader></FormHeader> */}
            <CardContent>
                <div className="mt-6">
                    <TextField label="Date & Time" name="date" value={record.batchRecord.date || ''} onChange={handleInputChange} className="mb-4"  type='datetime-local' InputLabelProps={{ shrink: true }} />
                    <TextField label="Line Clearance Required of" name="lineClearance" value={record.batchRecord.lineClearance || ''} onChange={handleInputChange} className="mb-4" multiline/>
                    <TextField label="Department" name="department" value={record.batchRecord.department || ''} onChange={handleInputChange} className="mb-4" multiline/>
                    <TextField label="Section" name="section" value={record.batchRecord.section || ''} onChange={handleInputChange} className="mb-4" multiline/>
                    <TextField label="Current Product" name="currentProduct" value={record.batchRecord.currentProduct || ''} onChange={handleInputChange} className="mb-4" multiline/>
                    <TextField label="Current Product Batch #" name="currentProductBatchNo" value={record.batchRecord.currentProductBatchNo || ''} onChange={handleInputChange} className="mb-4" multiline/>
                    <TextField label="Previous Product" name="previousProduct" value={record.batchRecord.previousProduct || ''} onChange={handleInputChange} className="mb-4" />
                    <TextField label="Previous Product Batch #" name="previousProductBatchNo" value={record.batchRecord.previousProductBatchNo || ''} onChange={handleInputChange} className="mb-4" multiline/>
                    <TextField label="Signature" name="signature" value={record.batchRecord.signature || ''} onChange={handleInputChange} className="mb-4" multiline/>
                </div>

                <div className="flex justify-center items-center min-h-screen mb-4">
    <div className="mt-6 ">
        <h5 className="text-lg font-semibold mb-4">
            Ensure that there should be no remnants of the Previous Batch Dispensed related to the following:
        </h5>
        <div className="grid grid-cols-2 gap-4 text-center">
            {['cartons', 'documents', 'rawMaterial', 'remnantOfPreviousProduct'].map(item => (
                <div key={item} className="flex flex-col items-center">
                    <h6 className="mb-2">{item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}</h6>
                    <RadioGroup
                        row
                        name={item}
                        value={record.checkboxes[item]}
                        onChange={handleCheckboxChange}
                        style={{ justifyContent: 'center' }} // Manually center the radio buttons
                    >
                        <FormControlLabel value="satisfactory" control={<Radio />} label="✔️" />
                        <FormControlLabel value="unsatisfactory" control={<Radio />} label="❌" />
                        <FormControlLabel value="notApplicable" control={<Radio />} label="—" />
                    </RadioGroup>
                </div>
            ))}
        </div>
    </div>
</div>


<div className="flex justify-center items-center min-h-screen gap-4 mb-4">
    <div className="mt-6 gap-4">
        <h5 className="text-lg font-semibold mb-4">Check the cleanliness of the following:</h5>
        <div className="grid grid-cols-3 gap-4 text-center">
            {['area', 'weighingBalance', 'dispensingBoard', 'scoops', 'pallets'].map(item => (
                <div key={item} className="flex flex-col items-center">
                    <h6 className="mb-2">{item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}</h6>
                    <RadioGroup
                        row
                        name={item}
                        value={record.checkboxes[item]}
                        onChange={handleCheckboxChange}
                        style={{ justifyContent: 'center' }} // Center the radio buttons
                    >
                        <FormControlLabel value="satisfactory" control={<Radio />} label="✔️" />
                        <FormControlLabel value="unsatisfactory" control={<Radio />} label="❌" />
                        <FormControlLabel value="notApplicable" control={<Radio />} label="—" />
                    </RadioGroup>
                </div>
            ))}
        </div>
    </div>
</div>

<div className="mt-6">
    <h5 className="text-lg font-semibold mb-4">Temperature & Humidity:</h5>
    <div className="flex">
        <TextField
            label="Temperature"
            name="temperature"
            value={record.tempAndHumidity.temperature || ''}
            onChange={handleInputChange}
            sx={{ marginRight: 2 }} // Adds margin to the right of the first field 
            multiline
        />
        <TextField
            label="Humidity"
            name="humidity"
            value={record.tempAndHumidity.humidity || ''}
            onChange={handleInputChange} 
            multiline
        />
    </div>
</div>

                
                <div className="mt-6 mb-4">
                    <TextField label="REMARKS" name="remarks" value={record.remarks || ''} onChange={handleInputChange} className="mt-4" fullWidth multiline />
                </div>

                <div className="mt-6">
    <h5 className="text-lg font-semibold mb-4">Authorization:</h5>
    <div className="flex">
        <TextField
            label="Authorized For Use (Sign.)"
            name="authorizedForUse"
            value={record.authorization.authorizedForUse || ''}
            onChange={handleInputChange}
            sx={{ marginRight: 2 }} // Adds margin to the right 
            multiline
        />
        <TextField
            label="Date & Time"
            name="dateAndTime"
            value={record.authorization.dateAndTime || ''}
            onChange={handleInputChange} 
            type='datetime-local'
            InputLabelProps={{ shrink: true }}
        />
    </div>
</div>

                
          <p className="text-sm text-gray-600 mt-4 text-center">
            Note: ✔️ = Satisfactory, ❌ = Unsatisfactory, — = Not Applicable
          </p>
          

                {/* <div className="mt-6">
                    <h5 className="text-lg font-semibold mt-5">Weighing Record Sheet Dispensing (Raw Material):</h5>
                    <BatchManufacturingFormPage2 />
                </div>

                <div className="mt-6">
                <h5 className="text-lg font-semibold mt-5">Weighing Record Sheet Dispensing (Coating Material):</h5>
                    <BatchManufacturingFormPage3 />
                </div> */}
                



                {/* <div className="mt-6 flex justify-between">
          <Button variant="contained" color="primary" onClick={handleBackPage}>Go Back</Button>
                    
                    <Button variant="contained" color="primary" onClick={handleNextPage}>Next</Button>
                </div> */}
            </CardContent>
        </Card>
    );
};

export default BatchManufacturingFormPage1;
