import React, { useEffect } from 'react';
import { Card, CardContent, TextField, FormControlLabel, Radio, RadioGroup, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCompressionRecord } from '../../../../store/compressionSlice'; // Updated import for compression
import FormHeader from '../../../header/formHeader';

const BatchManufacturingFormPage10 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const compression = useSelector((state) => state.compression); // Updated to use compression state

    // useEffect(() => {
    //     const storedRecord = JSON.parse(localStorage.getItem('record'));
    //     if (storedRecord) {
    //         dispatch(setRecord(storedRecord));
    //     }
    // }, [dispatch]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name in compression.batchInfo) {
            dispatch(setCompressionRecord({ ...compression, batchInfo: { ...compression.batchInfo, [name]: value } }));
        } else if (name in compression.batchRecord) {
            dispatch(setCompressionRecord({ ...compression, batchRecord: { ...compression.batchRecord, [name]: value } }));
        } else if (name in compression.authorization) {
            dispatch(setCompressionRecord({ ...compression, authorization: { ...compression.authorization, [name]: value } }));
        } else if (name in compression.tempAndHumidity) {
            dispatch(setCompressionRecord({ ...compression, tempAndHumidity: { ...compression.tempAndHumidity, [name]: value } }));
        } else if (name === 'remarks') {
            dispatch(setCompressionRecord({ ...compression, remarks: value }));
        }
    };

    const handleCheckboxChange = (e) => {
        const { name, value } = e.target;
        dispatch(setCompressionRecord({ ...compression, checkboxes: { ...compression.checkboxes, [name]: value } }));
    };

    const handleBackPage = () => {
        navigate(-1);
    };

    // const handleNextPage = () => {
    //     // Get the rearranged processes from local storage
    //     const processes = JSON.parse(localStorage.getItem('processes'));
    
    //     if (processes) {
    //       const currentProcessIndex = processes.indexOf('page1'); // Assuming this is page5's identifier
    
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
                    <TextField label="Date & Time" name="date" value={compression.batchRecord.date || ''} onChange={handleInputChange} className="mb-4" type='datetime-local' InputLabelProps={{ shrink: true }}/>
                    <TextField label="Line Clearance Required of" name="lineClearance" value={compression.batchRecord.lineClearance || ''} onChange={handleInputChange} className="mb-4" multiline/>
                    <TextField label="Department" name="department" value={compression.batchRecord.department || ''} onChange={handleInputChange} className="mb-4" multiline/>
                    <TextField label="Section" name="section" value={compression.batchRecord.section || ''} onChange={handleInputChange} className="mb-4" multiline/>
                    <TextField label="Current Product" name="currentProduct" value={compression.batchRecord.currentProduct || ''} onChange={handleInputChange} className="mb-4" multiline/>
                    <TextField label="Current Product Batch #" name="currentProductBatchNo" value={compression.batchRecord.currentProductBatchNo || ''} onChange={handleInputChange} className="mb-4" multiline/>
                    <TextField label="Previous Product" name="previousProduct" value={compression.batchRecord.previousProduct || ''} onChange={handleInputChange} className="mb-4" multiline/>
                    <TextField label="Previous Product Batch #" name="previousProductBatchNo" value={compression.batchRecord.previousProductBatchNo || ''} onChange={handleInputChange} className="mb-4" multiline/>
                    <TextField label="Signature" name="signature" value={compression.batchRecord.signature || ''} onChange={handleInputChange} className="mb-4" multiline/>
                </div>

                <div className="flex justify-center items-center min-h-screen mb-4">
                    <div className="mt-6 ">
                        <h5 className="text-lg font-semibold mb-4">
                            Ensure that there should be no remnants of the Previous Batch Dispensed related to the following:
                        </h5>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            {[ 'cartons', 'powderOrTabletOfPreviousBatch', 'remnantOfPreviousProduct'].map(item => (
                                <div key={item} className="flex flex-col items-center">
                                    <h6 className="mb-2">{item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}</h6>
                                    <RadioGroup
                                        row
                                        name={item}
                                        value={compression.checkboxes[item]}
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
                            {['area', 'compressionMachine', 'containerOrDrums', 'scoops', 'pallets'].map(item => (
                                <div key={item} className="flex flex-col items-center">
                                    <h6 className="mb-2">{item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}</h6>
                                    <RadioGroup
                                        row
                                        name={item}
                                        value={compression.checkboxes[item]}
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
                            value={compression.tempAndHumidity.temperature || ''}
                            onChange={handleInputChange}
                            sx={{ marginRight: 2 }} 
                            multiline
                        />
                        <TextField
                            label="Humidity"
                            name="humidity"
                            value={compression.tempAndHumidity.humidity || ''}
                            onChange={handleInputChange}
                            multiline
                        />
                    </div>
                    
                </div>

                    <div className="mt-6">
                    <TextField label="Remarks" name="remarks" value={compression.remarks || ''} onChange={handleInputChange} className="mb-4 mt-4" fullWidth multiline/>
                    </div>

                <div className="mt-6">
                    <h5 className="text-lg font-semibold mb-4">Authorization:</h5>
                    <TextField label="Authorized for Use" name="authorizedForUse" value={compression.authorization.authorizedForUse || ''} onChange={handleInputChange} className="mb-4" multiline/>
                    <TextField label="Date & Time" name="dateAndTime" value={compression.authorization.dateAndTime || ''} onChange={handleInputChange} className="mb-4" type='datetime-local' InputLabelProps={{ shrink: true }}/>
                </div>

                <p className="text-sm text-gray-600 mt-4 text-center">
            Note: ✔️ = Satisfactory, ❌ = Unsatisfactory, — = Not Applicable
          </p>

               
{/* 
                <div className="flex justify-center mt-4">
                    <Button variant="contained" color="primary" onClick={handleBackPage} className="mr-4">
                        Back
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleNextPage}>
                        Next
                    </Button>
                </div> */}
            </CardContent>
        </Card>
    );
};

export default BatchManufacturingFormPage10;
