// import React, { useEffect } from 'react';
// import { Card, CardContent, TextField, FormControlLabel, Radio, RadioGroup, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setRecord } from '../../../../store/recordSlice';

// const BatchManufacturingFormPage1 = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const record = useSelector((state) => state.record);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;

//         if (name in record.batchInfo) {
//             dispatch(setRecord({ ...record, batchInfo: { ...record.batchInfo, [name]: value } }));
//         } else if (name in record.batchRecord) {
//             dispatch(setRecord({ ...record, batchRecord: { ...record.batchRecord, [name]: value } }));
//         } else if (name in record.authorization) {
//             dispatch(setRecord({ ...record, authorization: { ...record.authorization, [name]: value } }));
//         } else if (name in record.tempAndHumidity) {
//             dispatch(setRecord({ ...record, tempAndHumidity: { ...record.tempAndHumidity, [name]: value } }));
//         }  else if (name === 'remarks') {  
//           dispatch(setRecord({ ...record, remarks: value })); 
//       }
//     };

//     const handleCheckboxChange = (e) => {
//         const { name, value } = e.target;
//         dispatch(setRecord({ ...record, checkboxes: { ...record.checkboxes, [name]: value } }));
//     };

    

    
//     return (
//         <Card className="max-w-4xl mx-auto">
//             {/* <FormHeader></FormHeader> */}
//             <CardContent>
//                 <div className="mt-6">
//                     <TextField label="Date & Time" name="date" value={record.batchRecord.date || ''} onChange={handleInputChange} className="mb-4"  type='datetime-local' InputLabelProps={{ shrink: true }} />
//                     <TextField label="Line Clearance Required of" name="lineClearance" value={record.batchRecord.lineClearance || ''} onChange={handleInputChange} className="mb-4" multiline/>
//                     <TextField label="Department" name="department" value={record.batchRecord.department || ''} onChange={handleInputChange} className="mb-4" multiline/>
//                     <TextField label="Section" name="section" value={record.batchRecord.section || ''} onChange={handleInputChange} className="mb-4" multiline/>
//                     <TextField label="Current Product" name="currentProduct" value={record.batchRecord.currentProduct || ''} onChange={handleInputChange} className="mb-4" multiline/>
//                     <TextField label="Current Product Batch #" name="currentProductBatchNo" value={record.batchRecord.currentProductBatchNo || ''} onChange={handleInputChange} className="mb-4" multiline/>
//                     <TextField label="Previous Product" name="previousProduct" value={record.batchRecord.previousProduct || ''} onChange={handleInputChange} className="mb-4" />
//                     <TextField label="Previous Product Batch #" name="previousProductBatchNo" value={record.batchRecord.previousProductBatchNo || ''} onChange={handleInputChange} className="mb-4" multiline/>
//                     <TextField label="Signature" name="signature" value={record.batchRecord.signature || ''} onChange={handleInputChange} className="mb-4" multiline/>
//                 </div>

//                 <div className="flex justify-center items-center min-h-screen mb-4">
//     <div className="mt-6 ">
//         <h5 className="text-lg font-semibold mb-4">
//             Ensure that there should be no remnants of the Previous Batch Dispensed related to the following:
//         </h5>
//         <div className="grid grid-cols-2 gap-4 text-center">
//             {['cartons', 'documents', 'rawMaterial', 'remnantOfPreviousProduct'].map(item => (
//                 <div key={item} className="flex flex-col items-center">
//                     <h6 className="mb-2">{item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}</h6>
//                     <RadioGroup
//                         row
//                         name={item}
//                         value={record.checkboxes[item]}
//                         onChange={handleCheckboxChange}
//                         style={{ justifyContent: 'center' }} // Manually center the radio buttons
//                     >
//                         <FormControlLabel value="satisfactory" control={<Radio />} label="✔️" />
//                         <FormControlLabel value="unsatisfactory" control={<Radio />} label="❌" />
//                         <FormControlLabel value="notApplicable" control={<Radio />} label="—" />
//                     </RadioGroup>
//                 </div>
//             ))}
//         </div>
//     </div>
// </div>


// <div className="flex justify-center items-center min-h-screen gap-4 mb-4">
//     <div className="mt-6 gap-4">
//         <h5 className="text-lg font-semibold mb-4">Check the cleanliness of the following:</h5>
//         <div className="grid grid-cols-3 gap-4 text-center">
//             {['area', 'weighingBalance', 'dispensingBoard', 'scoops', 'pallets'].map(item => (
//                 <div key={item} className="flex flex-col items-center">
//                     <h6 className="mb-2">{item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}</h6>
//                     <RadioGroup
//                         row
//                         name={item}
//                         value={record.checkboxes[item]}
//                         onChange={handleCheckboxChange}
//                         style={{ justifyContent: 'center' }} // Center the radio buttons
//                     >
//                         <FormControlLabel value="satisfactory" control={<Radio />} label="✔️" />
//                         <FormControlLabel value="unsatisfactory" control={<Radio />} label="❌" />
//                         <FormControlLabel value="notApplicable" control={<Radio />} label="—" />
//                     </RadioGroup>
//                 </div>
//             ))}
//         </div>
//     </div>
// </div>

// <div className="mt-6">
//     <h5 className="text-lg font-semibold mb-4">Temperature & Humidity:</h5>
//     <div className="flex">
//         <TextField
//             label="Temperature"
//             name="temperature"
//             value={record.tempAndHumidity.temperature || ''}
//             onChange={handleInputChange}
//             sx={{ marginRight: 2 }} // Adds margin to the right of the first field 
//             multiline
//         />
//         <TextField
//             label="Humidity"
//             name="humidity"
//             value={record.tempAndHumidity.humidity || ''}
//             onChange={handleInputChange} 
//             multiline
//         />
//     </div>
// </div>

                
//                 <div className="mt-6 mb-4">
//                     <TextField label="REMARKS" name="remarks" value={record.remarks || ''} onChange={handleInputChange} className="mt-4" fullWidth multiline />
//                 </div>

//                 <div className="mt-6">
//     <h5 className="text-lg font-semibold mb-4">Authorization:</h5>
//     <div className="flex">
//         <TextField
//             label="Authorized For Use (Sign.)"
//             name="authorizedForUse"
//             value={record.authorization.authorizedForUse || ''}
//             onChange={handleInputChange}
//             sx={{ marginRight: 2 }} // Adds margin to the right 
//             multiline
//         />
//         <TextField
//             label="Date & Time"
//             name="dateAndTime"
//             value={record.authorization.dateAndTime || ''}
//             onChange={handleInputChange} 
//             type='datetime-local'
//             InputLabelProps={{ shrink: true }}
//         />
//     </div>
// </div>

                
//           <p className="text-sm text-gray-600 mt-4 text-center">
//             Note: ✔️ = Satisfactory, ❌ = Unsatisfactory, — = Not Applicable
//           </p>
          
//             </CardContent>
//         </Card>
//     );
// };

// export default BatchManufacturingFormPage1;
import React from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setRecord } from '../../../../store/recordSlice';
import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';

const BatchManufacturingFormPage1 = () => {
    const dispatch = useDispatch();
    const record = useSelector((state) => state.record);

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
        } else if (name === 'remarks') {
            dispatch(setRecord({ ...record, remarks: value }));
        }
    };

    const handleCheckboxChange = (e) => {
        const { name, value } = e.target;
        dispatch(setRecord({ ...record, checkboxes: { ...record.checkboxes, [name]: value } }));
    };

    return (
        <Card className="max-w-4xl mx-auto p-4 ">
            <Card.Body>
                {/* <h2 className="text-lg font-bold mb-2 text-center">FOR QUALITY ASSURANCE DEPARTMENT USE ONLY</h2> */}
                
                <table className="w-full mb-4" style={{ textAlign: 'center' }}>
                    <tbody>
                        <tr>
                            <td><strong>Date & Time:</strong></td>
                            <td>
                                <input 
                                    type="datetime-local"
                                    name="date"
                                    value={record.batchRecord.date || ''}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                            </td>
                            <td><strong>Line Clearance Required For:</strong></td>
                            <td>
                                <input 
                                    type="text"
                                    name="lineClearance"
                                    value={record.batchRecord.lineClearance || ''}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Department:</strong></td>
                            <td>
                                <input 
                                    type="text"
                                    name="department"
                                    value={record.batchRecord.department || ''}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                            </td>
                            <td><strong>Section:</strong></td>
                            <td>
                                <input 
                                    type="text"
                                    name="section"
                                    value={record.batchRecord.section || ''}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Current Product:</strong></td>
                            <td>
                                <input 
                                    type="text"
                                    name="currentProduct"
                                    value={record.batchRecord.currentProduct || ''}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                            </td>
                            <td><strong>Current Product Batch #:</strong></td>
                            <td>
                                <input 
                                    type="text"
                                    name="currentProductBatchNo"
                                    value={record.batchRecord.currentProductBatchNo || ''}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Previous Product:</strong></td>
                            <td>
                                <input 
                                    type="text"
                                    name="previousProduct"
                                    value={record.batchRecord.previousProduct || ''}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                            </td>
                            <td><strong>Previous Product Batch #:</strong></td>
                            <td>
                                <input 
                                    type="text"
                                    name="previousProductBatchNo"
                                    value={record.batchRecord.previousProductBatchNo || ''}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Signature:</strong></td>
                            <td>
                                <input 
                                    type="text"
                                    name="signature"
                                    value={record.batchRecord.signature || ''}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex justify-center items-center mb-4">
                    <div className="mt-6">
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

                <div className="flex justify-center items-center mb-4">
                    <div className="mt-6">
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

                <h4>•	Check the Temperature & Humidity of the Area:-</h4>

                <table className="w-full mb-4" style={{ textAlign: 'center' }}>
                <tbody>
                    <tr>
                <td><strong>Temperature:</strong></td>
                            <td>
                                <input 
                                   type="text" 
                                   name="temperature"
                                   value={record.tempAndHumidity.temperature || ''}
                                   onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                        </td>
                        <td><strong>Humidity:</strong></td>
                            <td>
                                <input 
                                 type="text" 
                                 name="humidity"
                                 value={record.tempAndHumidity.humidity || ''}
                                 onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                            </td>
                            </tr>
                        <tr>

                        <td><strong>Remarks:</strong></td>
                            <td colSpan={4}>
                                <TextField 
                                    fullWidth
                                    multiline
                               
                                name="remarks"
                                value={record.remarks || ''}
                                onChange={handleInputChange}
                                />
                            </td>
                        
                        </tr>

                        <tr>
                <td><strong>Authorized For Use (Sign.):</strong></td>
                            <td>
                                <input 
                                   type="text" 
                                   name="authorizedForUse"
                                   value={record.authorization.authorizedForUse || ''}
                                   onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                        </td>
                        <td><strong>Date & Time of Authorization:</strong></td>
                            <td>
                                <input 
                                   type="datetime-local" 
                                   name="dateAndTime"
                                   value={record.authorization.dateAndTime || ''}
                                   onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                            </td>
                            </tr>
                        </tbody>
                </table>
               
         

            <p className="text-sm text-gray-600 mt-4 text-center">
       <strong>Note:</strong> ✔️ = Satisfactory, ❌ = Unsatisfactory, — = Not Applicable
   </p>
            </Card.Body>
        </Card>
    );
};

export default BatchManufacturingFormPage1;
