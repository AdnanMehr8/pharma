// import React, { useEffect } from 'react';
// import { Card, CardContent, TextField, FormControlLabel, Radio, RadioGroup, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setMixingRecord } from '../../../../store/mixingSlice';
// import FormHeader from '../../../header/formHeader';


// const BatchManufacturingFormPage5 = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const mixing = useSelector((state) => state.mixing);


//     const handleInputChange = (e) => {
//         const { name, value } = e.target;

//         if (name in mixing.batchInfo) {
//             dispatch(setMixingRecord({ ...mixing, batchInfo: { ...mixing.batchInfo, [name]: value } }));
//         } else if (name in mixing.batchRecord) {
//             dispatch(setMixingRecord({ ...mixing, batchRecord: { ...mixing.batchRecord, [name]: value } }));
//         } else if (name in mixing.authorization) {
//             dispatch(setMixingRecord({ ...mixing, authorization: { ...mixing.authorization, [name]: value } }));
//         } else if (name in mixing.tempAndHumidity) {
//             dispatch(setMixingRecord({ ...mixing, tempAndHumidity: { ...mixing.tempAndHumidity, [name]: value } }));
//         }  else if (name === 'remarks') {  
//           dispatch(setMixingRecord({ ...mixing, remarks: value })); 
//       }
//     };

//     const handleCheckboxChange = (e) => {
//         const { name, value } = e.target;
//         dispatch(setMixingRecord({ ...mixing, checkboxes: { ...mixing.checkboxes, [name]: value } }));
//     };

//     return (
//         <Card className="max-w-4xl mx-auto">
//             {/* <FormHeader></FormHeader> */}
//             <CardContent>
//                 <div className="mt-6">
//                     <TextField label="Date & Time" name="date" value={mixing.batchRecord.date || ''} onChange={handleInputChange} className="mb-4" type='datetime-local' InputLabelProps={{ shrink: true }}/>
//                     <TextField label="Line Clearance Required of" name="lineClearance" value={mixing.batchRecord.lineClearance || ''} onChange={handleInputChange} className="mb-4" multiline />
//                     <TextField label="Department" name="department" value={mixing.batchRecord.department || ''} onChange={handleInputChange} className="mb-4" multiline/>
//                     <TextField label="Section" name="section" value={mixing.batchRecord.section || ''} onChange={handleInputChange} className="mb-4" />
//                     <TextField label="Current Product" name="currentProduct" value={mixing.batchRecord.currentProduct || ''} onChange={handleInputChange} className="mb-4" multiline/>
//                     <TextField label="Current Product Batch #" name="currentProductBatchNo" value={mixing.batchRecord.currentProductBatchNo || ''} onChange={handleInputChange} className="mb-4" multiline/>
//                     <TextField label="Previous Product" name="previousProduct" value={mixing.batchRecord.previousProduct || ''} onChange={handleInputChange} className="mb-4" multiline/>
//                     <TextField label="Previous Product Batch #" name="previousProductBatchNo" value={mixing.batchRecord.previousProductBatchNo || ''} onChange={handleInputChange} className="mb-4" multiline/>
//                     <TextField label="Signature" name="signature" value={mixing.batchRecord.signature || ''} onChange={handleInputChange} className="mb-4" multiline/>
//                 </div>

//                 <div className="flex justify-center items-center min-h-screen mb-4">
//     <div className="mt-6 ">
//         <h5 className="text-lg font-semibold mb-4">
//             Ensure that there should be no remnants of the Previous Batch Dispensed related to the following:
//         </h5>
//         <div className="grid grid-cols-2 gap-4 text-center">
//             {[ 'documents', 'rawMaterial', 'remnantOfPreviousProduct'].map(item => (
//                 <div key={item} className="flex flex-col items-center">
//                     <h6 className="mb-2">{item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}</h6>
//                     <RadioGroup
//                         row
//                         name={item}
//                         value={mixing.checkboxes[item]}
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
//             {['area', 'mixer', 'otherEquipments', 'scoops', 'pallets'].map(item => (
//                 <div key={item} className="flex flex-col items-center">
//                     <h6 className="mb-2">{item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}</h6>
//                     <RadioGroup
//                         row
//                         name={item}
//                         value={mixing.checkboxes[item]}
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
//             value={mixing.tempAndHumidity.temperature || ''}
//             onChange={handleInputChange}
//             sx={{ marginRight: 2 }} 
//             multiline
//         />
//         <TextField
//             label="Humidity"
//             name="humidity"
//             value={mixing.tempAndHumidity.humidity || ''}
//             onChange={handleInputChange} 
//             multiline
//         />
//     </div>
// </div>

                
//                 <div className="mt-6 mb-4">
//                     <TextField label="REMARKS" name="remarks" value={mixing.tempAndHumidity.remarks || ''} onChange={handleInputChange} className="mt-4" fullWidth multiline/>
//                 </div>

//                 <div className="mt-6">
//     <h5 className="text-lg font-semibold mb-4">Authorization:</h5>
//     <div className="flex">
//         <TextField
//             label="Authorized For Use (Sign.)"
//             name="authorizedForUse"
//             value={mixing.authorization.authorizedForUse || ''}
//             onChange={handleInputChange}
//             sx={{ marginRight: 2 }} 
//             multiline
//         />
//         <TextField
//             label="Date & Time"
//             name="dateAndTime"
//             value={mixing.authorization.dateAndTime || ''}
//             onChange={handleInputChange}
//             type='datetime-local'
//             InputLabelProps={{ shrink: true }}
//         />
//     </div>
// </div>

                
//           <p className="text-sm text-gray-600 mt-4 text-center">
//             Note: ✔️ = Satisfactory, ❌ = Unsatisfactory, — = Not Applicable
//           </p>
          

//                 {/* <div className="mt-6">
//                     <h5 className="text-lg font-semibold mt-5">Weighing Record Sheet Dispensing (Raw Material):</h5>
//                     <BatchManufacturingFormPage2 />
//                 </div>

//                 <div className="mt-6">
//                 <h5 className="text-lg font-semibold mt-5">Weighing Record Sheet Dispensing (Coating Material):</h5>
//                     <BatchManufacturingFormPage3 />
//                 </div> */}
                



//                 {/* <div className="mt-6 flex justify-between">
//           <Button variant="contained" color="primary" onClick={handleBackPage}>Go Back</Button>
                    
//                     <Button variant="contained" color="primary" onClick={handleNextPage}>Next</Button>
//                 </div> */}
//             </CardContent>
//         </Card>
//     );
// };

// export default BatchManufacturingFormPage5;
// import React, { useEffect } from 'react';
// import { Form, Row, Col, Button, Card } from 'react-bootstrap';
// // import { Card, CardContent, TextField, FormControlLabel, Radio, RadioGroup, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setMixingRecord } from '../../../../store/mixingSlice';
// import {  FormControlLabel, Radio, RadioGroup } from '@mui/material';



// const BatchManufacturingFormPage5 = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const mixing = useSelector((state) => state.mixing);


//     const handleInputChange = (e) => {
//         const { name, value } = e.target;

//         if (name in mixing.batchInfo) {
//             dispatch(setMixingRecord({ ...mixing, batchInfo: { ...mixing.batchInfo, [name]: value } }));
//         } else if (name in mixing.batchRecord) {
//             dispatch(setMixingRecord({ ...mixing, batchRecord: { ...mixing.batchRecord, [name]: value } }));
//         } else if (name in mixing.authorization) {
//             dispatch(setMixingRecord({ ...mixing, authorization: { ...mixing.authorization, [name]: value } }));
//         } else if (name in mixing.tempAndHumidity) {
//             dispatch(setMixingRecord({ ...mixing, tempAndHumidity: { ...mixing.tempAndHumidity, [name]: value } }));
//         }  else if (name === 'remarks') {  
//           dispatch(setMixingRecord({ ...mixing, remarks: value })); 
//       }
//     };

//     const handleCheckboxChange = (e) => {
//         const { name, value } = e.target;
//         dispatch(setMixingRecord({ ...mixing, checkboxes: { ...mixing.checkboxes, [name]: value } }));
//     };

//     return (
//         <Card className="max-w-4xl mx-auto p-4 border">
//         <Card.Body>
//             <Row className="mb-3">
//                 <Col>
//                     <Form.Group controlId="date">
//                         <Form.Label>Date & Time:</Form.Label>
//                         <Form.Control 
//                             type="datetime-local"
//                             name="date"
//                             value={mixing.batchRecord.date || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                 </Col>
//                 <Col>
//                     <Form.Group controlId="lineClearance">
//                         <Form.Label>Line Clearance Required For:</Form.Label>
//                         <Form.Control 
//                             type="text"
//                             name="lineClearance"
//                             value={mixing.batchRecord.lineClearance || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row className="mb-3">
//                 <Col>
//                     <Form.Group controlId="department">
//                         <Form.Label>Department:</Form.Label>
//                         <Form.Control 
//                             type="text" 
//                             name="department"
//                             value={mixing.batchRecord.department || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                 </Col>
//                 <Col>
//                     <Form.Group controlId="section">
//                         <Form.Label>Section:</Form.Label>
//                         <Form.Control 
//                             type="text" 
//                             name="section"
//                             value={mixing.batchRecord.section || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row className="mb-3">
//                 <Col>
//                     <Form.Group controlId="currentProduct">
//                         <Form.Label>Current Product:</Form.Label>
//                         <Form.Control 
//                             type="text" 
//                             name="currentProduct"
//                             value={mixing.batchRecord.currentProduct || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                 </Col>
//                 <Col>
//                     <Form.Group controlId="currentProductBatchNo">
//                         <Form.Label>Current Product Batch #:</Form.Label>
//                         <Form.Control 
//                             type="text" 
//                             name="currentProductBatchNo"
//                             value={mixing.batchRecord.currentProductBatchNo || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row className="mb-3">
//                 <Col>
//                     <Form.Group controlId="previousProduct">
//                         <Form.Label>Previous Product:</Form.Label>
//                         <Form.Control 
//                             type="text" 
//                             name="previousProduct"
//                             value={mixing.batchRecord.previousProduct || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                 </Col>
//                 <Col>
//                     <Form.Group controlId="previousProductBatchNo">
//                         <Form.Label>Previous Product Batch #:</Form.Label>
//                         <Form.Control 
//                             type="text" 
//                             name="previousProductBatchNo"
//                             value={mixing.batchRecord.previousProductBatchNo || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row className="mb-3">
//                 <Col>
//                     <Form.Group controlId="signature">
//                         <Form.Label>Signature:</Form.Label>
//                         <Form.Control 
//                             type="text" 
//                             name="signature"
//                             value={mixing.batchRecord.signature || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>

        
// <div className="flex justify-center items-center min-h-screen mb-4">
//  <div className="mt-6 ">
//      <h5 className="text-lg font-semibold mb-4">
//          Ensure that there should be no remnants of the Previous Batch Dispensed related to the following:
//      </h5>
//      <div className="grid grid-cols-2 gap-4 text-center">
//          {['documents', 'rawMaterial', 'remnantOfPreviousProduct'].map(item => (
//              <div key={item} className="flex flex-col items-center">
//                  <h6 className="mb-2">{item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}</h6>
//                  <RadioGroup
//                      row
//                      name={item}
//                      value={mixing.checkboxes[item]}
//                      onChange={handleCheckboxChange}
//                      style={{ justifyContent: 'center' }}  Manually center the radio buttons
//                  >
//                      <FormControlLabel value="satisfactory" control={<Radio />} label="✔️" />
//                      <FormControlLabel value="unsatisfactory" control={<Radio />} label="❌" />
//                      <FormControlLabel value="notApplicable" control={<Radio />} label="—" />
//                  </RadioGroup>
//              </div>
//          ))}
//      </div>
//  </div>
// </div>


// <div className="flex justify-center items-center min-h-screen gap-4 mb-4">
//  <div className="mt-6 gap-4">
//      <h5 className="text-lg font-semibold mb-4">Check the cleanliness of the following:</h5>
//      <div className="grid grid-cols-3 gap-4 text-center">
//          {['area', 'mixer', 'otherEquipments', 'scoops', 'pallets'].map(item => (
//              <div key={item} className="flex flex-col items-center">
//                  <h6 className="mb-2">{item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}</h6>
//                  <RadioGroup
//                      row
//                      name={item}
//                      value={mixing.checkboxes[item]}
//                      onChange={handleCheckboxChange}
//                      style={{ justifyContent: 'center' }}  Center the radio buttons
//                  >
//                      <FormControlLabel value="satisfactory" control={<Radio />} label="✔️" />
//                      <FormControlLabel value="unsatisfactory" control={<Radio />} label="❌" />
//                      <FormControlLabel value="notApplicable" control={<Radio />} label="—" />
//                  </RadioGroup>
//              </div>
//          ))}
//      </div>
//  </div>
// </div>


//             <Row className="mb-3">
//                 <Col>
//                     <Form.Group controlId="temperature">
//                         <Form.Label>Temperature:</Form.Label>
//                         <Form.Control 
//                             type="text" 
//                             name="temperature"
//                             value={mixing.tempAndHumidity.temperature || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                 </Col>
//                 <Col>
//                     <Form.Group controlId="humidity">
//                         <Form.Label>Humidity:</Form.Label>
//                         <Form.Control 
//                             type="text" 
//                             name="humidity"
//                             value={mixing.tempAndHumidity.humidity || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row className="mb-3">
//                 <Col>
//                     <Form.Group controlId="remarks">
//                         <Form.Label>Remarks:</Form.Label>
//                         <Form.Control 
//                             as="textarea" 
//                             rows={2}
//                             name="remarks"
//                             value={mixing.remarks || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row className="mb-3">
//                 <Col>
//                     <Form.Group controlId="authorizedForUse">
//                         <Form.Label>Authorized For Use (Sign.):</Form.Label>
//                         <Form.Control 
//                             type="text" 
//                             name="authorizedForUse"
//                             value={mixing.authorization.authorizedForUse || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                 </Col>
//                 <Col>
//                     <Form.Group controlId="dateAndTime">
//                         <Form.Label>Date & Time of Authorization:</Form.Label>
//                         <Form.Control 
//                             type="datetime-local" 
//                             name="dateAndTime"
//                             value={mixing.authorization.dateAndTime || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <p className="text-sm text-gray-600 mt-4 text-center">
//        Note: ✔️ = Satisfactory, ❌ = Unsatisfactory, — = Not Applicable
//    </p>
//         </Card.Body>
//     </Card>
//     );
// };

// export default BatchManufacturingFormPage5;
import React from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setMixingRecord } from '../../../../store/mixingSlice';
import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';

const BatchManufacturingFormPage5 = () => {
    const dispatch = useDispatch();
    const mixing = useSelector((state) => state.mixing);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name in mixing.batchInfo) {
            dispatch(setMixingRecord({ ...mixing, batchInfo: { ...mixing.batchInfo, [name]: value } }));
        } else if (name in mixing.batchRecord) {
            dispatch(setMixingRecord({ ...mixing, batchRecord: { ...mixing.batchRecord, [name]: value } }));
        } else if (name in mixing.authorization) {
            dispatch(setMixingRecord({ ...mixing, authorization: { ...mixing.authorization, [name]: value } }));
        } else if (name in mixing.tempAndHumidity) {
            dispatch(setMixingRecord({ ...mixing, tempAndHumidity: { ...mixing.tempAndHumidity, [name]: value } }));
        } else if (name === 'mixingRemarks') {
            dispatch(setMixingRecord({ ...mixing, mixingRemarks: value }));
        }
    };

    const handleCheckboxChange = (e) => {
        const { name, value } = e.target;
        dispatch(setMixingRecord({ ...mixing, checkboxes: { ...mixing.checkboxes, [name]: value } }));
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
                                    value={mixing.batchRecord.date || ''}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                            </td>
                            <td><strong>Line Clearance Required For:</strong></td>
                            <td>
                                <input 
                                    type="text"
                                    name="lineClearance"
                                    value={mixing.batchRecord.lineClearance || ''}
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
                                    value={mixing.batchRecord.department || ''}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                            </td>
                            <td><strong>Section:</strong></td>
                            <td>
                                <input 
                                    type="text"
                                    name="section"
                                    value={mixing.batchRecord.section || ''}
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
                                    value={mixing.batchRecord.currentProduct || ''}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                            </td>
                            <td><strong>Current Product Batch #:</strong></td>
                            <td>
                                <input 
                                    type="text"
                                    name="currentProductBatchNo"
                                    value={mixing.batchRecord.currentProductBatchNo || ''}
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
                                    value={mixing.batchRecord.previousProduct || ''}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                            </td>
                            <td><strong>Previous Product Batch #:</strong></td>
                            <td>
                                <input 
                                    type="text"
                                    name="previousProductBatchNo"
                                    value={mixing.batchRecord.previousProductBatchNo || ''}
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
                                    value={mixing.batchRecord.signature || ''}
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
                            {['documents', 'rawMaterial', 'remnantOfPreviousProduct'].map(item => (
                                <div key={item} className="flex flex-col items-center">
                                    <h6 className="mb-2">{item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}</h6>
                                    <RadioGroup
                                        row
                                        name={item}
                                        value={mixing.checkboxes[item]}
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
                            {['area', 'mixer', 'otherEquipments', 'scoops', 'pallets'].map(item => (
                                <div key={item} className="flex flex-col items-center">
                                    <h6 className="mb-2">{item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}</h6>
                                    <RadioGroup
                                        row
                                        name={item}
                                        value={mixing.checkboxes[item]}
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
                                   value={mixing.tempAndHumidity.temperature || ''}
                                   onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                        </td>
                        <td><strong>Humidity:</strong></td>
                            <td>
                                <input 
                                 type="text" 
                                 name="humidity"
                                 value={mixing.tempAndHumidity.humidity || ''}
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
                               
                                name="mixingRemarks"
                                value={mixing.mixingRemarks || ''}
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
                                   value={mixing.authorization.authorizedForUse || ''}
                                   onChange={handleInputChange}
                                    className="border border-gray-300 p-1"
                                />
                        </td>
                        <td><strong>Date & Time of Authorization:</strong></td>
                            <td>
                                <input 
                                   type="datetime-local" 
                                   name="dateAndTime"
                                   value={mixing.authorization.dateAndTime || ''}
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

export default BatchManufacturingFormPage5;
