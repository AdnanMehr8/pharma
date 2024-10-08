
// import React, { useEffect } from "react";
// import {
//   Card,
//   CardContent,
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Paper,
//   TextField,
// } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setCompressionRecord,
//   loadCompressionRecordFromStorage,
// } from "../../../../store/compressionSlice"; // Adjusted import path

// const BatchManufacturingFormPage11 = () => {
//   const dispatch = useDispatch();
//   const compression = useSelector((state) => state.compression); // Using the entire compression state

//   useEffect(() => {
//     dispatch(loadCompressionRecordFromStorage()); // Load the state from localStorage when the component mounts
//   }, [dispatch]);

//   const handleCompressionRecordChange = (index, field, value) => {
//     // Create a shallow copy of the current compression record
//     const newCompressionRecord = [...compression.compressionRecord];

//     // Create a shallow copy of the specific record you want to update
//     const updatedRecord = {
//       ...newCompressionRecord[index],
//       [field]: value, // Update the specific field with the new value
//     };

//     // Replace the old record with the updated one
//     newCompressionRecord[index] = updatedRecord;

//     // Update the compression record in Redux
//     dispatch(setCompressionRecord({ ...compression, compressionRecord: newCompressionRecord }));
//   };

//   return (
//     <Card className="max-w-4xl mx-auto mt-4">
//       <CardContent>
//         <h2 className="text-lg font-semibold text-center">Compression Process</h2>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Step</TableCell>
//                 <TableCell>Target</TableCell>
//                 <TableCell>Actual</TableCell>
//                 <TableCell>Performed by Operator (sign & date)</TableCell>
//                 <TableCell>Checked By P.O (sign & date)</TableCell>
//                 <TableCell>Checked By Q.A.I (sign & date)</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {/* Step 1 */}
//               <TableRow>
//                 <TableCell>1</TableCell>
//                 <TableCell>
//                   <strong>Room Temperature & Humidity:</strong>
//                   <div>Check temperature and humidity of the area before starting compression.</div>
//                   <div>Limits: Temp: NMT 30 °C, RH: NMT 50%</div>
//                 </TableCell>
//                 <TableCell>
//                   Temp:
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="______ °C"
//                     value={compression.compressionRecord[0]?.temp || ""}
//                     onChange={(e) => handleCompressionRecordChange(0, "temp", e.target.value)}
//                     style={{ marginLeft: "0.5rem", width: "120px" }}
//                   />
//                   <br />
//                   RH:
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="______ %"
//                     value={compression.compressionRecord[0]?.rH || ""}
//                     onChange={(e) => handleCompressionRecordChange(0, "rH", e.target.value)}
//                     style={{ marginLeft: "0.5rem", width: "120px" }}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="Sign & Date"
//                     value={compression.compressionRecord[0]?.performedByOperator || ""}
//                     onChange={(e) => handleCompressionRecordChange(0, "performedByOperator", e.target.value)}
//                     fullWidth
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="P.O Sign & Date"
//                     value={compression.compressionRecord[0]?.checkedByPO || ""}
//                     onChange={(e) => handleCompressionRecordChange(0, "checkedByPO", e.target.value)}
//                     fullWidth
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="Q.A.I Sign & Date"
//                     value={compression.compressionRecord[0]?.checkedByQAI || ""}
//                     onChange={(e) => handleCompressionRecordChange(0, "checkedByQAI", e.target.value)}
//                     fullWidth
//                   />
//                 </TableCell>
//               </TableRow>

//               {/* Step 2 */}
//               <TableRow>
//                 <TableCell>2</TableCell>
//                 <TableCell>
//                   <strong>Check the weight of granules.</strong>
//                 </TableCell>
//                 <TableCell>
//                   Weight of granules:
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="______ kg"
//                     value={compression.compressionRecord[1]?.weightOfGranules || ""}
//                     onChange={(e) => handleCompressionRecordChange(1, "weightOfGranules", e.target.value)}
//                     style={{ marginLeft: "0.5rem", width: "120px" }}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="Sign & Date"
//                     value={compression.compressionRecord[1]?.performedByOperator || ""}
//                     onChange={(e) => handleCompressionRecordChange(1, "performedByOperator", e.target.value)}
//                     fullWidth
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="P.O Sign & Date"
//                     value={compression.compressionRecord[1]?.checkedByPO || ""}
//                     onChange={(e) => handleCompressionRecordChange(1, "checkedByPO", e.target.value)}
//                     fullWidth
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="Q.A.I Sign & Date"
//                     value={compression.compressionRecord[1]?.checkedByQAI || ""}
//                     onChange={(e) => handleCompressionRecordChange(1, "checkedByQAI", e.target.value)}
//                     fullWidth
//                   />
//                 </TableCell>
//               </TableRow>

//               {/* Step 3 */}
//               <TableRow>
//                 <TableCell>3</TableCell>
//                 <TableCell>
//                   Check Embossing of punches: <br />
//                   Upper Punch - DID Embossed <br />
//                   Lower Punch - Plain
//                 </TableCell>
//                 <TableCell>
//                   Upper Punch:
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder=""
//                     value={compression.compressionRecord[2]?.upperPunch || ""}
//                     onChange={(e) => handleCompressionRecordChange(2, "upperPunch", e.target.value)}
//                     style={{ marginLeft: "0.5rem", width: "120px" }}
//                   />
//                   <br />
//                   Lower Punch:
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder=""
//                     value={compression.compressionRecord[2]?.lowerPunch || ""}
//                     onChange={(e) => handleCompressionRecordChange(2, "lowerPunch", e.target.value)}
//                     style={{ marginLeft: "0.5rem", width: "120px" }}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="Sign & Date"
//                     value={compression.compressionRecord[2]?.performedByOperator || ""}
//                     onChange={(e) => handleCompressionRecordChange(2, "performedByOperator", e.target.value)}
//                     fullWidth
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="P.O Sign & Date"
//                     value={compression.compressionRecord[2]?.checkedByPO || ""}
//                     onChange={(e) => handleCompressionRecordChange(2, "checkedByPO", e.target.value)}
//                     fullWidth
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="Q.A.I Sign & Date"
//                     value={compression.compressionRecord[2]?.checkedByQAI || ""}
//                     onChange={(e) => handleCompressionRecordChange(2, "checkedByQAI", e.target.value)}
//                     fullWidth
//                   />
//                 </TableCell>
//               </TableRow>

//               {/* Step 4 */}
//               <TableRow>
//                 <TableCell>4</TableCell>
//                 <TableCell>
//                   <div>Compress the granules into tablets on the tablet compression machine. Set the machine and check tablets for the following parameters:</div>
//                 </TableCell>
//                 <TableCell>
//                   Compression Started At:
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="______ AM/PM"
//                     value={compression.compressionRecord[3]?.compressionStartedAt || ""}
//                     onChange={(e) => handleCompressionRecordChange(3, "compressionStartedAt", e.target.value)}
//                     style={{ marginLeft: "0.5rem", width: "120px" }}
//                   />
//                   <br />
//                   Compression Completed On:
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="______ AM/PM"
//                     value={compression.compressionRecord[3]?.compressionCompletedOn || ""}
//                     onChange={(e) => handleCompressionRecordChange(3, "compressionCompletedOn", e.target.value)}
//                     style={{ marginLeft: "0.5rem", width: "120px" }}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="Sign & Date"
//                     value={compression.compressionRecord[3]?.performedByOperator || ""}
//                     onChange={(e) => handleCompressionRecordChange(3, "performedByOperator", e.target.value)}
//                     fullWidth
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="P.O Sign & Date"
//                     value={compression.compressionRecord[3]?.checkedByPO || ""}
//                     onChange={(e) => handleCompressionRecordChange(3, "checkedByPO", e.target.value)}
//                     fullWidth
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="Q.A.I Sign & Date"
//                     value={compression.compressionRecord[3]?.checkedByQAI || ""}
//                     onChange={(e) => handleCompressionRecordChange(3, "checkedByQAI", e.target.value)}
//                     fullWidth
//                   />
//                 </TableCell>
//               </TableRow>
// {/* Step 5 */}
// <TableRow>
//                 <TableCell>5</TableCell>
//                 <TableCell>
//                   <div>Send test requests to QA for physical & chemical analysis. Raise the intimation to QA for sampling and getting the sample tested by QC physically and chemically.</div>
//                   <strong>Sample taken Qty:</strong>
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="___Tablets"
//                     value={compression.compressionRecord[4]?.sampleTakenQty || ""}
//                     onChange={(e) => handleCompressionRecordChange(4, "sampleTakenQty", e.target.value)}
//                     style={{ marginLeft: "0.5rem", width: "120px" }}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="Sign & Date"
//                     value={compression.compressionRecord[4]?.performedByOperator || ""}
//                     onChange={(e) => handleCompressionRecordChange(4, "performedByOperator", e.target.value)}
//                     fullWidth
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="P.O Sign & Date"
//                     value={compression.compressionRecord[4]?.checkedByPO || ""}
//                     onChange={(e) => handleCompressionRecordChange(4, "checkedByPO", e.target.value)}
//                     fullWidth
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="Q.A.I Sign & Date"
//                     value={compression.compressionRecord[4]?.checkedByQAI || ""}
//                     onChange={(e) => handleCompressionRecordChange(4, "checkedByQAI", e.target.value)}
//                     fullWidth
//                   />
//                 </TableCell>
//               </TableRow>

//             </TableBody>
//           </Table>
//         </TableContainer>
//       </CardContent>
//     </Card>
//   );
// };

// export default BatchManufacturingFormPage11;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCompressionRecord } from '../../../../store/compressionSlice';
import { Input, Table } from '@mui/material';

const BatchManufacturingFormPage11 = () => {
  const compressionRecord = useSelector((state) => state.compression.compressionRecord);
  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    dispatch(setCompressionRecord({
      compressionRecord: {
        ...compressionRecord,
        [field]: value
      }
    }));
  };

  const handleVerificationChange = (index, field, value) => {
    const newVerification = [...compressionRecord.verification];
    newVerification[index] = {
      ...newVerification[index],
      [field]: value
    };
    dispatch(setCompressionRecord({
      compressionRecord: {
        ...compressionRecord,
        verification: newVerification
      }
    }));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Compression Record</h2>
      <Table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Target</th>
            <th>Actual</th>
            <th>Performed by Operator</th>
            <th>Checked By P.O</th>
            <th>Checked By Q.A.I</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
            <Input 
                  type="text" 
                  value={compressionRecord.verification[0]?.target || " Room Temperature & Humidity:<br /> Check temperature and humidity of the area before starting compression.<br /> Limits: Temp: NMT 30°C, RH: NMT 50%"}
                  onChange={(e) => handleVerificationChange(0, 'target', e.target.value)}
                  fullWidth
                  multiline
                />
            </td>
            <td>
              <div className="flex flex-col space-y-2">
                <Input 
                  type="number" 
                  placeholder="Temp (°C)"
                  value={compressionRecord.temp}
                  onChange={(e) => handleInputChange('temp', e.target.value)}
                  fullWidth
                            multiline
                />
                <Input 
                  type="number" 
                  placeholder="RH (%)"
                  value={compressionRecord.rH}
                  onChange={(e) => handleInputChange('rH', e.target.value)}
                  fullWidth
                            multiline
                />
              </div>
            </td>
            <td>
              <Input 
                type="text" 
                placeholder="Sign & Date"
                value={compressionRecord.verification[0]?.performedByOperator}
                onChange={(e) => handleVerificationChange(0, 'performedByOperator', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
            <td>
              <Input 
                type="text" 
                placeholder="P.O Sign & Date"
                value={compressionRecord.verification[0]?.checkedByPO}
                onChange={(e) => handleVerificationChange(0, 'checkedByPO', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
            <td>
              <Input 
                type="text" 
                placeholder="Q.A.I Sign & Date"
                value={compressionRecord.verification[0]?.checkedByQAI}
                onChange={(e) => handleVerificationChange(0, 'checkedByQAI', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
            <Input 
                  type="text" 
                  value={compressionRecord.verification[1]?.target || "Check the weight of granules."}
                  onChange={(e) => handleVerificationChange(1, 'target', e.target.value)}
                  fullWidth
                  multiline
                />
            </td>
            <td>
              <Input 
                type="number" 
                placeholder="Weight of granules (kg)"
                value={compressionRecord.weightOfGranules}
                onChange={(e) => handleInputChange('weightOfGranules', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
            <td>
              <Input 
                type="text" 
                placeholder="Sign & Date"
                value={compressionRecord.verification[1]?.performedByOperator}
                onChange={(e) => handleVerificationChange(1, 'performedByOperator', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
            <td>
              <Input 
                type="text" 
                placeholder="P.O Sign & Date"
                value={compressionRecord.verification[1]?.checkedByPO}
                onChange={(e) => handleVerificationChange(1, 'checkedByPO', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
            <td>
              <Input 
                type="text" 
                placeholder="Q.A.I Sign & Date"
                value={compressionRecord.verification[1]?.checkedByQAI}
                onChange={(e) => handleVerificationChange(1, 'checkedByQAI', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
            <Input 
                  type="text" 
                  value={compressionRecord.verification[2]?.target || "     Check Embossing of punches:<br /> Upper Punch - DID Embossed<br /> Lower Punch - Plain"}
                  onChange={(e) => handleVerificationChange(2, 'target', e.target.value)}
                  fullWidth
                  multiline
                />
            </td>
            <td>
              <div className="flex flex-col space-y-2">
                <Input 
                  type="text" 
                  placeholder="Upper Punch"
                  value={compressionRecord.upperPunch}
                  onChange={(e) => handleInputChange('upperPunch', e.target.value)}
                  fullWidth
                            multiline
                />
                <Input 
                  type="text" 
                  placeholder="Lower Punch"
                  value={compressionRecord.lowerPunch}
                  onChange={(e) => handleInputChange('lowerPunch', e.target.value)}
                  fullWidth
                            multiline
                />
              </div>
            </td>
            <td>
              <Input 
                type="text" 
                placeholder="Sign & Date"
                value={compressionRecord.verification[2]?.performedByOperator}
                onChange={(e) => handleVerificationChange(2, 'performedByOperator', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
            <td>
              <Input 
                type="text" 
                placeholder="P.O Sign & Date"
                value={compressionRecord.verification[2]?.checkedByPO}
                onChange={(e) => handleVerificationChange(2, 'checkedByPO', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
            <td>
              <Input 
                type="text" 
                placeholder="Q.A.I Sign & Date"
                value={compressionRecord.verification[2]?.checkedByQAI}
                onChange={(e) => handleVerificationChange(2, 'checkedByQAI', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
            <Input 
                  type="text" 
                  value={compressionRecord.verification[3]?.target || " Compress the granules into tablets on tablet compression machine. Set the machine and check tablets for following parameters: <br/> Compression Started at: <br/> Completed on:"}
                  onChange={(e) => handleVerificationChange(3, 'target', e.target.value)}
                  fullWidth
                  multiline
                />
            </td>
            <td>
              <div className="flex flex-col space-y-2">
              Compression Started at: 
                <Input 
                  type="time" 
                  value={compressionRecord.compressionStartedAt}
                  onChange={(e) => handleInputChange('compressionStartedAt', e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
                <br/>
                Compression Completed On: 
                <Input 
                  type="time" 
                  value={compressionRecord.compressionCompletedOn}
                  onChange={(e) => handleInputChange('compressionCompletedOn', e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </td>
            <td>
              <Input 
                type="text" 
                placeholder="Sign & Date"
                value={compressionRecord.verification[3]?.performedByOperator}
                onChange={(e) => handleVerificationChange(3, 'performedByOperator', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
            <td>
              <Input 
                type="text" 
                placeholder="P.O Sign & Date"
                value={compressionRecord.verification[3]?.checkedByPO}
                onChange={(e) => handleVerificationChange(3, 'checkedByPO', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
            <td>
              <Input 
                type="text" 
                placeholder="Q.A.I Sign & Date"
                value={compressionRecord.verification[3]?.checkedByQAI}
                onChange={(e) => handleVerificationChange(3, 'checkedByQAI', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
            <Input 
                  type="text" 
                  value={compressionRecord.verification[4]?.target || " Send test requests to QA for physical & chemical analysis. Raise the intimation to QA for sampling and getting the sample tested by QC physically and chemically.<br /> Sample taken Qty:"}
                  onChange={(e) => handleVerificationChange(4, 'target', e.target.value)}
                  fullWidth
                  multiline
                />
              
            </td>
            <td>
              <Input 
                type="number" 
                placeholder="Sample taken (Tablets)"
                value={compressionRecord.sampleTakenQty}
                onChange={(e) => handleInputChange('sampleTakenQty', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
            <td>
              <Input 
                type="text" 
                placeholder="Sign & Date"
                value={compressionRecord.verification[4]?.performedByOperator}
                onChange={(e) => handleVerificationChange(4, 'performedByOperator', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
            <td>
              <Input 
                type="text" 
                placeholder="P.O Sign & Date"
                value={compressionRecord.verification[4]?.checkedByPO}
                onChange={(e) => handleVerificationChange(4, 'checkedByPO', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
            <td>
              <Input 
                type="text" 
                placeholder="Q.A.I Sign & Date"
                value={compressionRecord.verification[4]?.checkedByQAI}
                onChange={(e) => handleVerificationChange(4, 'checkedByQAI', e.target.value)}
                fullWidth
                            multiline
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default BatchManufacturingFormPage11;