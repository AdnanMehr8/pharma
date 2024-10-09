// import React, { useEffect } from "react";
// import {
//   Card,
//   CardContent,
//   TextField,
//   FormControlLabel,
//   Radio,
//   RadioGroup,
//   Button,
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Paper,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setRecord } from "../../../../store/recordSlice";
// import FormHeader from "../../../header/formHeader";

// const BatchManufacturingFormPage4 = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const record = useSelector((state) => state.record);

//   // useEffect(() => {
//   //   const storedRecord = JSON.parse(localStorage.getItem("record"));
//   //   if (storedRecord) {
//   //     dispatch(setRecord(storedRecord));
//   //   }
//   // }, [dispatch]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name in record.batchInfo) {
//       dispatch(
//         setRecord({
//           ...record,
//           batchInfo: { ...record.batchInfo, [name]: value },
//         })
//       );
//     } else if (name in record.batchRecord) {
//       dispatch(
//         setRecord({
//           ...record,
//           batchRecord: { ...record.batchRecord, [name]: value },
//         })
//       );
//     } else if (name in record.authorization) {
//       dispatch(
//         setRecord({
//           ...record,
//           authorization: { ...record.authorization, [name]: value },
//         })
//       );
//     } else if (name in record.tempAndHumidity) {
//       dispatch(
//         setRecord({
//           ...record,
//           tempAndHumidity: { ...record.tempAndHumidity, [name]: value },
//         })
//       );
//     } else if (name === "remarks") {
//       dispatch(setRecord({ ...record, remarks: value }));
//     }
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(
//       setRecord({
//         ...record,
//         checkboxes: { ...record.checkboxes, [name]: value },
//       })
//     );
//   };

//   const handleWeighingRecordChange = (index, field, value) => {
//     const newWeighingRecord = record.weighingRecord.map((item, idx) =>
//       idx === index ? { ...item, [field]: value } : item
//     );
//     dispatch(setRecord({ ...record, weighingRecord: newWeighingRecord }));
//   };

//   const handleCheckRecordChange = (field, value) => {
//     const newCheckRecord = {
//       ...record.checkRecord,
//       [field]: value,
//     };
//     dispatch(setRecord({ ...record, checkRecord: newCheckRecord }));
//   };

//   const addWeighingRecordRow = () => {
//     const newWeighingRecord = [
//       ...record.weighingRecord,
//       {
//         item: "",
//         unit: "",
//         tareWt: "",
//         netWt: "",
//         grossWt: "",
//         noOfContainers: "",
//       },
//     ];
//     dispatch(setRecord({ ...record, weighingRecord: newWeighingRecord }));
//   };
  
//   const deleteWeighingRecordRow = (index) => {
//     const newWeighingRecord = record.weighingRecord.filter((_, i) => i !== index);
//     dispatch(setRecord({ ...record, weighingRecord: newWeighingRecord }));
//   };
  
//   const handleBackPage = () => {
//     navigate(-1);
//   };

// const handleNextPage = () => {
//     // Get the rearranged processes from local storage
//     const processes = JSON.parse(localStorage.getItem('processes'));

//     if (processes) {
//       const currentProcessIndex = processes.indexOf('page4'); // Assuming this is page3's identifier

//       if (currentProcessIndex !== -1 && currentProcessIndex < processes.length - 1) {
//         const nextProcess = processes[currentProcessIndex + 1];
//         navigate(`/${nextProcess}`); // Navigate to the next process
//       } else {
//         console.log("No next process available."); // Handle case where there is no next process
//       }
//     }
//   };

//   return (
//     <Card className="max-w-4xl mx-auto">
//             <FormHeader></FormHeader>
//       <CardContent>
//         <div className="mt-6">
//         <div className="mt-6">
//           <h5 className="text-lg font-semibold mt-5">General instructions and precautions for Manufacturing:</h5>
//         </div>
//           <p style={{ marginBottom: "1rem" }}>
//             <span style={{ display: "flex", alignItems: "center" }}>
//               - Area must be clean as per SOP.
//               <TextField
//                 label="SOP"
//                 name="sop"
//                 value="DP/PRD/SOP/092"
//                 style={{ marginLeft: "0.5rem", margin: 0 }}
//               />
//             </span>
//             <div>- No material of previous batch is present in the room.</div>
//             <div>
//               - All equipment, accessories and containers must be cleaned, dried
//               and placed orderly with proper labeling.
//             </div>
//             <div>
//               - Cleaning record must be maintained in respective log books.
//             </div>
//             <div>
//               - Before processing, all materials must be checked and identified
//               according to Master Formula.
//             </div>
//             <div>- Relative Humidity and temperature must be controlled.</div>
//             <div>- All relevant documents must be controlled.</div>
//             <div>
//               - All relevant documents must be available a work station.
//             </div>
//             <div>- Line clearance must be obtained before start of work.</div>
//             <div>- Weighing balance must be callibrated.</div>
//             <div>- No material of previous batch is present in the room.</div>
//             <span style={{ display: "flex", alignItems: "center" }}>
//               - Staff working in manufacturing area must wear uniforms, gloves,
//               mask as per SOP.
//               <TextField
//                 label="SOP"
//                 name="sop"
//                 value="DP/PRD/SOP/092"
//                 style={{ marginLeft: "0.5rem", margin: 0 }}
//               />
//             </span>
//             <div>
//               - Any exta information or deviation must be recorded and approved
//               by Production Manager and Manager uality Assurance.
//             </div>
//             <div>
//               - Give the line clearance after satisfying with the above
//               mentioned instructions.
//             </div>
//             <span style={{ display: "flex", alignItems: "center" }}>
//               - Section
//               <TextField
//                 label="Section"
//                 name="section"
//                 value="General Tablet"
//                 style={{ marginLeft: "0.5rem", margin: 0 }}
//               />
//               Area
//               <TextField
//                 label="Area"
//                 name="area"
//                 value="Mixing/Granulation"
//                 style={{ marginLeft: "0.5rem", margin: 7 }}
//               />
//             </span>
//           </p>

//           <p className="text-center mt-4">
//             <strong>
//               <span style={{ display: "flex", alignItems: "center" }}>
//                 I HAVE READ AND UNDERSTOOD ALL THE PRECAUTIONS.
//                 <TextField
//                   label="Section In-charge"
//                   name="section incharge"
//                   value=""
//                   style={{ marginLeft: "1rem", margin: 0 }}
//                 />
//               </span>
//             </strong>
//           </p>
//         </div>
//         <div>
//           <p>LINE CLEARANCE OF EQUIPMENT:</p>

//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Equipment</TableCell>
//                   <TableCell>Equipment ID</TableCell>
//                   <TableCell>Previous Product</TableCell>
//                   <TableCell>Batch No.</TableCell>
//                   <TableCell>Cleaned By Operator (Sign & Date)</TableCell>
//                   <TableCell>
//                     Checked By Production Pjarmacist (Sign & Date)
//                   </TableCell>
//                   <TableCell>Verified By QA (Sign & Date)</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
              
//                   <TableRow >
                    
//                     <TableCell>
//                       <TextField
//                         value='Double Cone Mixer'
//                         onChange={(e) =>
//                           handleWeighingRecordChange(
                            
//                             "item",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <TextField
//                         value='DP/PD/TG  /IQR/'
//                         onChange={(e) =>
//                           handleWeighingRecordChange(
                           
//                             "unit",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <TextField
//                         value='Double Cone Mixer'
//                         onChange={(e) =>
//                           handleWeighingRecordChange(
                           
//                             "tareWt",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <TextField
//                         value='DP/PD/TG /IQR/'
//                         onChange={(e) =>
//                           handleWeighingRecordChange(
                           
//                             "netWt",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <TextField
//                         value='{row.grossWt}'
//                         onChange={(e) =>
//                           handleWeighingRecordChange(
                            
//                             "grossWt",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <TextField
//                         value='{row.noOfContainers}'
//                         onChange={(e) =>
//                           handleWeighingRecordChange(
                            
//                             "noOfContainers",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </TableCell>
//                   </TableRow>
             
//               </TableBody>
//             </Table>
//                   </TableContainer>
                  
          
//         </div>

//         <div className="mt-6 flex justify-between">
//           <Button variant="contained" color="primary" onClick={handleBackPage}>
//             Go Back
//           </Button>
//           <Button variant="contained" color="primary" onClick={handleNextPage}>
//             Next
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default BatchManufacturingFormPage4;
// import React from "react";
// import {
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Paper,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setMixingRecord } from "../../../../store/mixingSlice"; // Adjust import based on your slice
// import FormHeader from "../../../header/formHeader";

// const BatchManufacturingFormPage4 = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const mixingRecord = useSelector((state) => state.mixing); // Access the mixing state
  

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name in mixingRecord.precautions) {
//         dispatch(setMixingRecord({ ...mixingRecord, precautions: { ...mixingRecord.precautions, [name]: value } }));
//     } else if (name in mixingRecord.lineClearance) {
//         dispatch(setMixingRecord({ ...mixingRecord, lineClearance: { ...mixingRecord.lineClearance, [name]: value } }));
//   }
// };


//   return (
//     <Card className="max-w-4xl mx-auto">
//       {/* <FormHeader /> */}
//       <CardContent>
//         <div className="mt-6">
//           <div className="mt-6">
//             <h5 className="text-lg font-semibold mt-5">General instructions and precautions for Manufacturing:</h5>
//           </div>
//           <div style={{ marginBottom: "1rem" }}>
//             <span style={{ display: "flex", alignItems: "center" }}>
//               - Area must be clean as per SOP. 
//               <TextField
//                 label="SOP"
//                 name="sop1"
//                 value={mixingRecord.precautions.sop1 || "DP/PRD/SOP/092 "}
//                 style={{ marginLeft: "0.5rem", margin: 0 }}
//                 onChange={handleInputChange}
                 
//             multiline
//               />
//             </span>
//             <div>- No material of previous batch is present in the room.</div>
//             <div>- All equipment, accessories and containers must be cleaned, dried and placed orderly with proper labeling.</div>
//             <div>- Cleaning record must be maintained in respective log books.</div>
//             <div>- Before processing, all materials must be checked and identified according to Master Formula.</div>
//             <div>- Relative Humidity and temperature must be controlled.</div>
//             <div>- All relevant documents must be available at work station.</div>
//             <div>- Line clearance must be obtained before start of work.</div>
//             <div>- Weighing balances must be calibrated.</div>
//             <span style={{ display: "flex", alignItems: "center" }}>
//               - Staff working in manufacturing area must wear uniforms, gloves, mask as per SOP. 
//               <TextField
//                 label="SOP"
//                 name="sop2"
//                 value={mixingRecord.precautions.sop2 || "DP/PRD/SOP/002 "}
//                 style={{ marginLeft: "0.5rem", margin: 0 }}
//                 onChange={handleInputChange}
                 
//             multiline
//               />
//             </span>
//             <div>- Any extra information or deviation must be recorded and approved by Production Manager and Manager Quality Assurance.</div>
//             <div>- Give the line clearance after satisfying with the above mentioned instructions.</div>
//             <span style={{ display: "flex", alignItems: "center" }}>
//               - Section 
//               <TextField
//                 label="Section"
//                 name="section"
//                 value={mixingRecord.precautions.section || "General Tablet"}
//                 style={{ marginLeft: "0.5rem", margin: 0 }}
//                 onChange={handleInputChange}
                 
//             multiline
//               />
//               Area
//               <TextField
//                 label="Area"
//                 name="specificArea"
//                 value={mixingRecord.precautions.specificArea || "Mixing/Granulation"}
//                 style={{ marginLeft: "0.5rem", margin: 7 }}
//                 onChange={handleInputChange}
                 
//             multiline
//               />
//             </span>
//           </div>

//           <div className="text-center mt-4">
//             <strong>
//               <span style={{ display: "flex", alignItems: "center" }}>
//                 I HAVE READ AND UNDERSTOOD ALL THE PRECAUTIONS.
//                 <TextField
//                   label="Section In-charge"
//                   name="precautionsRead"
//                   value={mixingRecord.precautions.precautionsRead}
//                   style={{ marginLeft: "1rem", margin: 0 }}
//                   onChange={handleInputChange}
                   
//             multiline
//                 />
//               </span>
//             </strong>
//           </div>
//         </div>
        
//         <div>
//           <p className="text-lg font-semibold mt-5">LINE CLEARANCE OF EQUIPMENT:</p>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Equipment</TableCell>
//                   <TableCell>Equipment ID</TableCell>
//                   <TableCell>Previous Product</TableCell>
//                   <TableCell>Batch No.</TableCell>
//                   <TableCell>Cleaned By Operator (Sign & Date)</TableCell>
//                   <TableCell>Checked By Production Pharmacist (Sign & Date)</TableCell>
//                   <TableCell>Verified By QA (Sign & Date)</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 <TableRow>
//                   <TableCell>
//                     <TextField
//                       value={mixingRecord.lineClearance.equipment || 'Double Cone Mixer'}
//                       fullWidth 
//             multiline
//                       onChange={(e) => handleInputChange({ target: { name: 'equipment', value: e.target.value } })}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       value={mixingRecord.lineClearance.equipmentId || 'DP/PD/TG  /IQR/'}
//                       fullWidth 
//             multiline
//                       onChange={(e) => handleInputChange({ target: { name: 'equipmentId', value: e.target.value } })}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       value={mixingRecord.lineClearance.previousProduct}
//                       fullWidth 
//             multiline
//                       onChange={(e) => handleInputChange({ target: { name: 'previousProduct', value: e.target.value } })}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       value={mixingRecord.lineClearance.batchNo}
//                       fullWidth 
//             multiline
//                       onChange={(e) => handleInputChange({ target: { name: 'batchNo', value: e.target.value } })}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       value={mixingRecord.lineClearance.cleanedBy}
//                       fullWidth 
//             multiline
//                       onChange={(e) => handleInputChange({ target: { name: 'cleanedBy', value: e.target.value } })}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       value={mixingRecord.lineClearance.checkedBy}
//                       fullWidth 
//             multiline
//                       onChange={(e) => handleInputChange({ target: { name: 'checkedBy', value: e.target.value } })}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       value={mixingRecord.lineClearance.verifiedBy}
//                       fullWidth 
//             multiline
//                       onChange={(e) => handleInputChange({ target: { name: 'verifiedBy', value: e.target.value } })}
//                     />
//                   </TableCell>
//                 </TableRow>
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>

//         {/* <div className="mt-6 flex justify-between">
//           <Button variant="contained" color="primary" onClick={handleBackPage}>
//             Go Back
//           </Button>
//           <Button variant="contained" color="primary" onClick={handleNextPage}>
//             Next
//           </Button>
//         </div> */}
//       </CardContent>
//     </Card>
//   );
// };

// export default BatchManufacturingFormPage4;
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setMixingRecord } from "../../../../store/mixingSlice";
import axios from "axios";

const BatchManufacturingFormPage4 = () => {
  const dispatch = useDispatch();
  const mixingRecord = useSelector((state) => state.mixing);

  const [equipmentData, setEquipmentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEquipment, setSelectedEquipment] = useState('');
  const [equipmentCode, setEquipmentCode] = useState('');
  const [equipmentCapacity, setEquipmentCapacity] = useState('');

  useEffect(() => {
    const fetchEquipmentData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/equipment');
        setEquipmentData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEquipmentData();
  }, []);

  const handleEquipmentChange = (e) => {
    const equipmentName = e.target.value;
    setSelectedEquipment(equipmentName);

    // Find the equipment object based on the selected equipment name
    const selectedItem = equipmentData.flatMap(equip => equip.equipmentList)
      .find(item => item.Equipment_Name === equipmentName);

    if (selectedItem) {
      setEquipmentCode(selectedItem.Equipment_Code);
      setEquipmentCapacity(selectedItem.Capacity);
      dispatch(setMixingRecord({
        ...mixingRecord,
        lineClearance: {
          ...mixingRecord.lineClearance,
          equipment: equipmentName,
          equipmentId: selectedItem.Equipment_Code
        }
      }));
    } else {
      setEquipmentCode('');
      setEquipmentCapacity('');
    }
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name in mixingRecord.precautions) {
        dispatch(setMixingRecord({ ...mixingRecord, precautions: { ...mixingRecord.precautions, [name]: value } }));
    } else if (name in mixingRecord.lineClearance) {
        dispatch(setMixingRecord({ ...mixingRecord, lineClearance: { ...mixingRecord.lineClearance, [name]: value } }));
  }
};


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent>
      <div className="mt-6">
          <div className="mt-6">
            <h5 className="text-lg font-semibold mt-5">General instructions and precautions for Manufacturing:</h5>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <span style={{ display: "flex", alignItems: "center" }}>
              - Area must be clean as per SOP. 
              <TextField
                label="SOP"
                name="sop1"
                value={mixingRecord.precautions.sop1 || " "}
                style={{ marginLeft: "0.5rem", margin: 0 }}
                onChange={handleInputChange}
                 
            multiline
              />
            </span>
            <div>- No material of previous batch is present in the room.</div>
            <div>- All equipment, accessories and containers must be cleaned, dried and placed orderly with proper labeling.</div>
            <div>- Cleaning record must be maintained in respective log books.</div>
            <div>- Before processing, all materials must be checked and identified according to Master Formula.</div>
            <div>- Relative Humidity and temperature must be controlled.</div>
            <div>- All relevant documents must be available at work station.</div>
            <div>- Line clearance must be obtained before start of work.</div>
            <div>- Weighing balances must be calibrated.</div>
            <span style={{ display: "flex", alignItems: "center" }}>
              - Staff working in manufacturing area must wear uniforms, gloves, mask as per SOP. 
              <TextField
                label="SOP"
                name="sop2"
                value={mixingRecord.precautions.sop2 || ""}
                style={{ marginLeft: "0.5rem", margin: 0 }}
                onChange={handleInputChange}
                 
            multiline
              />
            </span>
            <div>- Any extra information or deviation must be recorded and approved by Production Manager and Manager Quality Assurance.</div>
            <div>- Give the line clearance after satisfying with the above mentioned instructions.</div>
            <span style={{ display: "flex", alignItems: "center" }}>
              - Section 
              <TextField
                label="Section"
                name="section"
                value={mixingRecord.precautions.section || ""}
                style={{ marginLeft: "0.5rem", margin: 0 }}
                onChange={handleInputChange}
                 
            multiline
              />
              Area
              <TextField
                label="Area"
                name="specificArea"
                value={mixingRecord.precautions.specificArea || ""}
                style={{ marginLeft: "0.5rem", margin: 7 }}
                onChange={handleInputChange}
                 
            multiline
              />
            </span>
          </div>

          <div className="text-center mt-4">
            <strong>
              <span style={{ display: "flex", alignItems: "center" }}>
                I HAVE READ AND UNDERSTOOD ALL THE PRECAUTIONS.
                <TextField
                  label="Section In-charge"
                  name="precautionsRead"
                  value={mixingRecord.precautions.precautionsRead}
                  style={{ marginLeft: "1rem", margin: 0 }}
                  onChange={handleInputChange}
                   
            multiline
                />
              </span>
            </strong>
          </div>
        </div>
        
        <h5 className="text-lg font-semibold mt-5">LINE CLEARANCE OF EQUIPMENT:</h5>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Equipment</TableCell>
                <TableCell>Equipment ID</TableCell>
                <TableCell>Capacity</TableCell>
                <TableCell>Previous Product</TableCell>
                <TableCell>Batch No.</TableCell>
                <TableCell>Cleaned By Operator (Sign & Date)</TableCell>
                <TableCell>Checked By Production Pharmacist (Sign & Date)</TableCell>
                <TableCell>Verified By QA (Sign & Date)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <input
                    list="equipment-names"
                    name="equipment"
                    className="form-control"
                    value={selectedEquipment}
                    onChange={handleEquipmentChange}
                    placeholder="Search equipment name..."
                  />
                  <datalist id="equipment-names">
  {equipmentData.flatMap(equip => equip.equipmentList).map((item, index) => (
    <option key={`${item.Equipment_Code}-${index}`} value={item.Equipment_Name}>
      {`${item.Equipment_Name} (Capacity: ${item.Capacity})`}
    </option>
  ))}
</datalist>

                </TableCell>
                <TableCell>
                  <TextField
                    value={equipmentCode || 'N/A'}
                    fullWidth
                    readOnly
                    multiline
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={equipmentCapacity || 'N/A'}
                    fullWidth
                    readOnly
                    multiline
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={mixingRecord.lineClearance.previousProduct || ''}
                    fullWidth
                    multiline
                    onChange={(e) => dispatch(setMixingRecord({ ...mixingRecord, lineClearance: { ...mixingRecord.lineClearance, previousProduct: e.target.value } }))}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={mixingRecord.lineClearance.batchNo || ''}
                    fullWidth
                    multiline
                    onChange={(e) => dispatch(setMixingRecord({ ...mixingRecord, lineClearance: { ...mixingRecord.lineClearance, batchNo: e.target.value } }))}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={mixingRecord.lineClearance.cleanedBy || ''}
                    fullWidth
                    multiline
                    onChange={(e) => dispatch(setMixingRecord({ ...mixingRecord, lineClearance: { ...mixingRecord.lineClearance, cleanedBy: e.target.value } }))}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={mixingRecord.lineClearance.checkedBy || ''}
                    fullWidth
                    multiline
                    onChange={(e) => dispatch(setMixingRecord({ ...mixingRecord, lineClearance: { ...mixingRecord.lineClearance, checkedBy: e.target.value } }))}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={mixingRecord.lineClearance.verifiedBy || ''}
                    fullWidth
                    multiline
                    onChange={(e) => dispatch(setMixingRecord({ ...mixingRecord, lineClearance: { ...mixingRecord.lineClearance, verifiedBy: e.target.value } }))}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default BatchManufacturingFormPage4;
