import React from 'react';
import { Card, CardContent, TextField, FormControlLabel, Radio, RadioGroup, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCoatingRecord } from '../../../../store/coatingSlice'; // Updated import for coating

const BatchManufacturingFormPage20 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const coating = useSelector((state) => state.coating); // Updated to use coating state

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name in coating.batchInfo) {
            dispatch(setCoatingRecord({ ...coating, batchInfo: { ...coating.batchInfo, [name]: value } }));
        } else if (name in coating.batchRecord) {
            dispatch(setCoatingRecord({ ...coating, batchRecord: { ...coating.batchRecord, [name]: value } }));
        } else if (name in coating.authorization) {
            dispatch(setCoatingRecord({ ...coating, authorization: { ...coating.authorization, [name]: value } }));
        } else if (name in coating.tempAndHumidity) {
            dispatch(setCoatingRecord({ ...coating, tempAndHumidity: { ...coating.tempAndHumidity, [name]: value } }));
        } else if (name === 'remarks') {
            dispatch(setCoatingRecord({ ...coating, remarks: value }));
        }
    };

    const handleCheckboxChange = (e) => {
        const { name, value } = e.target;
        dispatch(setCoatingRecord({ ...coating, checkboxes: { ...coating.checkboxes, [name]: value } }));
    };

    const handleBackPage = () => {
        navigate(-1);
    };

    const handleNextPage = () => {
        // Handle navigation to the next page, validation, etc.
    };

    return (
        <Card className="max-w-4xl mx-auto">
            {/* <FormHeader /> */}
            <CardContent>
                <div className="mt-6">
                    <TextField 
                        label="Date & Time" 
                        name="date" 
                        type='datetime-local'
                        value={coating.batchRecord.date || ''} 
                        onChange={handleInputChange} 
                        className="mb-4" 
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField 
                        label="Line Clearance Required of" 
                        name="lineClearance" 
                        value={coating.batchRecord.lineClearance || ''} 
                        onChange={handleInputChange} 
                        className="mb-4" 
                        
                            multiline
                    />
                    <TextField 
                        label="Department" 
                        name="department" 
                        value={coating.batchRecord.department || ''} 
                        onChange={handleInputChange} 
                        className="mb-4" 
                        
                            multiline
                    />
                    <TextField 
                        label="Section" 
                        name="section" 
                        value={coating.batchRecord.section || ''} 
                        onChange={handleInputChange} 
                        className="mb-4" 
                        
                            multiline
                    />
                    <TextField 
                        label="Current Product" 
                        name="currentProduct" 
                        value={coating.batchRecord.currentProduct || ''} 
                        onChange={handleInputChange} 
                        className="mb-4" 
                        
                            multiline
                    />
                    <TextField 
                        label="Current Product Batch #" 
                        name="currentProductBatchNo" 
                        value={coating.batchRecord.currentProductBatchNo || ''} 
                        onChange={handleInputChange} 
                        className="mb-4" 
                        
                            multiline
                    />
                    <TextField 
                        label="Previous Product" 
                        name="previousProduct" 
                        value={coating.batchRecord.previousProduct || ''} 
                        onChange={handleInputChange} 
                        className="mb-4" 
                        
                            multiline
                    />
                    <TextField 
                        label="Previous Product Batch #" 
                        name="previousProductBatchNo" 
                        value={coating.batchRecord.previousProductBatchNo || ''} 
                        onChange={handleInputChange} 
                        className="mb-4" 
                        
                            multiline
                    />
                    <TextField 
                        label="Signature" 
                        name="signature" 
                        value={coating.batchRecord.signature || ''} 
                        onChange={handleInputChange} 
                        className="mb-4" 
                        
                            multiline
                    />
                </div>

                <div className="flex justify-center items-center min-h-screen mb-4">
                    <div className="mt-6">
                        <h5 className="text-lg font-semibold mb-4">
                            Ensure that there should be no remnants of the Previous Batch Coated related to the following:
                        </h5>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            {['documents', 'tabletsCoatingMaterial', 'remnantOfPreviousProduct'].map(item => (
                                <div key={item} className="flex flex-col items-center">
                                    <h6 className="mb-2">{item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}</h6>
                                    <RadioGroup
                                        row
                                        name={item}
                                        value={coating.checkboxes[item] || ''} // Add fallback
                                        onChange={handleCheckboxChange}
                                        style={{ justifyContent: 'center' }} 
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
                            {['area', 'coatingMachine', 'containerOrDrums', 'scoops', 'pallets'].map(item => (
                                <div key={item} className="flex flex-col items-center">
                                    <h6 className="mb-2">{item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}</h6>
                                    <RadioGroup
                                        row
                                        name={item}
                                        value={coating.checkboxes[item] || ''} // Add fallback
                                        onChange={handleCheckboxChange}
                                        style={{ justifyContent: 'center' }} 
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
                            value={coating.tempAndHumidity.temperature || ''} // Add fallback
                            onChange={handleInputChange}
                            sx={{ marginRight: 2 }} 
                            
                            multiline
                        />
                        <TextField
                            label="Humidity"
                            name="humidity"
                            value={coating.tempAndHumidity.humidity || ''} // Add fallback
                            onChange={handleInputChange}
                            
                            multiline
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <TextField 
                        label="Remarks" 
                        name="remarks" 
                        value={coating.remarks || ''} // Add fallback
                        onChange={handleInputChange} 
                        className="mb-4 mt-4" 
                        fullWidth
                            multiline
                    />
                </div>

                <div className="mt-6">
                    <h5 className="text-lg font-semibold mb-4">Authorization:</h5>
                    <TextField 
                        label="Authorized for Use" 
                        name="authorizedForUse" 
                        value={coating.authorization.authorizedForUse || ''} // Add fallback
                        onChange={handleInputChange} 
                        className="mb-4" 
                        
                            multiline
                    />
                    <TextField 
                        label="Date & Time" 
                        name="dateAndTime" 
                        value={coating.authorization.dateAndTime || ''} // Add fallback
                        onChange={handleInputChange} 
                        className="mb-4" 
                        type='datetime-local'
            InputLabelProps={{ shrink: true }}
                            
                    />
                </div>

                <p className="text-sm text-gray-600 mt-4 text-center">
                    Note: ✔️ = Satisfactory, ❌ = Unsatisfactory, — = Not Applicable
                </p>

                {/* Uncomment when needed */}
                {/* 
                <div className="flex justify-center mt-4">
                    <Button variant="contained" color="primary" onClick={handleBackPage} className="mr-4">
                        Back
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleNextPage}>
                        Next
                    </Button>
                </div> 
                */}
            </CardContent>
        </Card>
    );
};

export default BatchManufacturingFormPage20;
