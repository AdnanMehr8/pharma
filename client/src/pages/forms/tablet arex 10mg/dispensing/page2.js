// import React, { useEffect } from "react";
// import {
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { setRecord } from "../../../../store/recordSlice";

// const BatchManufacturingFormPage2 = () => {
//   const dispatch = useDispatch();
//   const record = useSelector((state) => state.record);
  

//   const handleWeighingRecordChange = (index, field, value) => {
//     const newWeighingRecord = record.weighingRecordRaw.map((item, idx) =>
//       idx === index ? { ...item, [field]: value } : item
//     );
//     dispatch(setRecord({ ...record, weighingRecordRaw: newWeighingRecord }));
//   };

//   const handleCheckRecordChange = (e) => {
//     const { name, value } = e.target;
//     const updatedCheckRecord = { ...record.checkRecordRaw, [name]: value };
//     dispatch(setRecord({ ...record, checkRecordRaw: updatedCheckRecord }));
//  };
 
//   const addWeighingRecordRow = () => {
//     const newWeighingRecord = [
//       ...record.weighingRecordRaw,
//       {
//         item: "",
//         unit: "",
//         tareWt: "",
//         netWt: "",
//         grossWt: "",
//         noOfContainers: "",
//       },
//     ];
//     dispatch(setRecord({ ...record, weighingRecordRaw: newWeighingRecord }));
//   };

//   const deleteWeighingRecordRow = (index) => {
//     const newWeighingRecord = record.weighingRecordRaw.filter((_, idx) => idx !== index);
//     dispatch(setRecord({ ...record, weighingRecordRaw: newWeighingRecord }));
//   };


//   return (
//     <Card className="max-w-4xl mx-auto">
//       {/* <FormHeader /> */}
//       <CardContent>

//         <div className="mt-6">
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>S.#</TableCell>
//                   <TableCell>Item</TableCell>
//                   <TableCell>Unit</TableCell>
//                   <TableCell>Tare Wt.</TableCell>
//                   <TableCell>Net Wt.</TableCell>
//                   <TableCell>Gross Wt.</TableCell>
//                   <TableCell>No. of Containers</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {record.weighingRecordRaw.map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{index + 1}</TableCell>
//                     <TableCell>
//                       <TextField
//                         value={row.item}
//                         fullWidth
//                         multiline
//                         onChange={(e) =>
//                           handleWeighingRecordChange(
//                             index,
//                             "item",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <TextField
//                         value={row.unit}
//                         fullWidth
//                         multiline
//                         onChange={(e) =>
//                           handleWeighingRecordChange(
//                             index,
//                             "unit",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <TextField
//                         value={row.tareWt}
//                         fullWidth
//                         multiline
//                         onChange={(e) =>
//                           handleWeighingRecordChange(
//                             index,
//                             "tareWt",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <TextField
//                         value={row.netWt}
//                         fullWidth
//                         multiline
//                         onChange={(e) =>
//                           handleWeighingRecordChange(
//                             index,
//                             "netWt",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <TextField
//                         value={row.grossWt}
//                         fullWidth
//                         multiline
//                         onChange={(e) =>
//                           handleWeighingRecordChange(
//                             index,
//                             "grossWt",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <TextField
//                         value={row.noOfContainers}
//                         fullWidth
//                         multiline
//                         onChange={(e) =>
//                           handleWeighingRecordChange(
//                             index,
//                             "noOfContainers",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <Button
//                         variant="outlined"
//                         color="error"
//                         onClick={() => deleteWeighingRecordRow(index)}>
//                         Delete
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <Button onClick={addWeighingRecordRow} className="mt-2">
//             Add Row
//           </Button>
//         </div>

//         <div className="mt-5">
//     <h5 className="text-lg font-semibold mb-4">Check Record</h5>
//     <table className="w-full border-collapse">
//         <tbody>
//             <tr>
//                 <td className="border p-2 text-left">
//                     <label>Checked by Dispensing Pharmacist (Sign & Date)</label>
//                 </td>
//                 <td className="border p-2">
//                   <TextField
//                         name="checkedByDispensingPharmacist"
//                         value={record.checkRecordRaw.checkedByDispensingPharmacist || ""}
//                         fullWidth
//                         multiline
//                         onChange={handleCheckRecordChange}
//                     />
//                 </td>
//             </tr>
//             <tr>
//                 <td className="border p-2 text-left">
//                     <label>Checked by QA Officer (Sign & Date)</label>
//                 </td>
//                 <td className="border p-2">
//                   <TextField
//                       name="checkedByQAOfficer"
//                         value={record.checkRecordRaw.checkedByQAOfficer || ""}
//                         fullWidth
//                         multiline
//                         onChange={handleCheckRecordChange}
//                     />
//                 </td>
//             </tr>
//             <tr>
//                 <td className="border p-2 text-left">
//                     <label>Received by Production Pharmacist (Sign & Date)</label>
//                 </td>
//                 <td className="border p-2">
//                     <TextField
//                         value={record.checkRecordRaw.receivedByProductionPharmacist || ""}
//                         fullWidth
//                         multiline
//                     onChange={handleCheckRecordChange}
//                     name="receivedByProductionPharmacist"
//                     />
//                 </td>
//             </tr>
//             <tr>
//                 <td className="border p-2 text-left">
//                     <label>Received by Supervisor (Sign & Date)</label>
//                 </td>
//                 <td className="border p-2">
//                   <TextField
//                     name="receivedBySupervisor"
//                         value={record.checkRecordRaw.receivedBySupervisor || ""}
//                         fullWidth
//                         multiline
//                     onChange={handleCheckRecordChange}
//                     />
//                 </td>
//             </tr>
//         </tbody>
//     </table>
// </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default BatchManufacturingFormPage2;

import React from "react";
import { Table, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setRecord } from "../../../../store/recordSlice";

const BatchManufacturingFormPage3 = () => {
  const dispatch = useDispatch();
  const record = useSelector((state) => state.record);

  const handleWeighingRecordChange = (index, field, value) => {
    const newWeighingRecord = record.weighingRecordRaw.map((item, idx) =>
      idx === index ? { ...item, [field]: value } : item
    );
    dispatch(setRecord({ ...record, weighingRecordRaw: newWeighingRecord }));
  };

  const handleCheckRecordChange = (name, value) => {
    const updatedCheckRecord = { ...record.checkRecordRaw, [name]: value };
    dispatch(setRecord({ ...record, checkRecordRaw: updatedCheckRecord }));
  };

  const addWeighingRecordRow = () => {
    const newWeighingRecord = [
      ...record.weighingRecordRaw,
      {
        item: "",
        unit: "",
        tareWt: "",
        netWt: "",
        grossWt: "",
        noOfContainers: "",
      },
    ];
    dispatch(setRecord({ ...record, weighingRecordRaw: newWeighingRecord }));
  };

  const deleteWeighingRecordRow = (index) => {
    const newWeighingRecord = record.weighingRecordRaw.filter((_, idx) => idx !== index);
    dispatch(setRecord({ ...record, weighingRecordRaw: newWeighingRecord }));
  };

  return (
    <div className="batch-manufacturing-form-page-2 p-4 ">
        <h5 className="text-lg font-semibold mt-5">
              Weighing Record Sheet Dispensing (Raw Material):
            </h5>
      <Table bordered>
        <thead>
          <tr>
            <th>S.#</th>
            <th>Item</th>
            <th>Unit</th>
            <th>Tare Wt.</th>
            <th>Net Wt.</th>
            <th>Gross Wt.</th>
            <th>No. of Containers</th>
            <th className="actions-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {record.weighingRecordRaw.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <Form.Control
                  type="text"
                  value={row.item}
                  onChange={(e) => handleWeighingRecordChange(index, "item", e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  value={row.unit}
                  onChange={(e) => handleWeighingRecordChange(index, "unit", e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  value={row.tareWt}
                  onChange={(e) => handleWeighingRecordChange(index, "tareWt", e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  value={row.netWt}
                  onChange={(e) => handleWeighingRecordChange(index, "netWt", e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  value={row.grossWt}
                  onChange={(e) => handleWeighingRecordChange(index, "grossWt", e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  value={row.noOfContainers}
                  onChange={(e) => handleWeighingRecordChange(index, "noOfContainers", e.target.value)}
                />
              </td>
              <td className="actions-column">
                <Button variant="outline-danger" onClick={() => deleteWeighingRecordRow(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={addWeighingRecordRow} className="mt-2">
        Add Row
      </Button>

      <div className="mt-5">
        <Table bordered>
          <thead>
            <tr>
              <th>Checked by Dispensing Pharmacist <br/> Sign & Date</th>
              <th>Checked by QA Officer<br/> Sign & Date</th>
              <th>Received by Production Pharmacist<br/> Sign & Date</th>
              <th>Received by Supervisor<br/> Sign & Date</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>
                <Form.Control
                  name="checkedByDispensingPharmacist"
                  value={record.checkRecordRaw.checkedByDispensingPharmacist || ""}
                  onChange={(e) => handleCheckRecordChange("checkedByDispensingPharmacist", e.target.value)}
                />
                <Form.Control
                  type="date"
                  name="dateDP"
                  value={record.checkRecordRaw.dateDP || ""}
                  onChange={(e) => handleCheckRecordChange("dateDP", e.target.value)}
                />
               
              
              </td>
              <td>
                <Form.Control
                  name="checkedByQAOfficer"
                  value={record.checkRecordRaw.checkedByQAOfficer || ""}
                  onChange={(e) => handleCheckRecordChange("checkedByQAOfficer", e.target.value)}
                />
                <Form.Control
                  type="date"
                  name="dateQA"
                  value={record.checkRecordRaw.dateQA || ""}
                  onChange={(e) => handleCheckRecordChange("dateQA", e.target.value)}
                />
              
              </td>
              <td>
                <Form.Control
                  name="receivedByProductionPharmacist"
                  value={record.checkRecordRaw.receivedByProductionPharmacist || ""}
                  onChange={(e) => handleCheckRecordChange("receivedByProductionPharmacist", e.target.value)}
                />
                <Form.Control
                  type="date"
                  name="datePP"
                  value={record.checkRecordRaw.datePP || ""}
                  onChange={(e) => handleCheckRecordChange("datePP", e.target.value)}
                />
                
              </td>
              <td>
                <Form.Control
                  name="receivedBySupervisor"
                  value={record.checkRecordRaw.receivedBySupervisor || ""}
                  onChange={(e) => handleCheckRecordChange("receivedBySupervisor", e.target.value)}
                />
                <Form.Control
                  type="date"
                  name="dateS"
                  value={record.checkRecordRaw.dateS || ""}
                  onChange={(e) => handleCheckRecordChange("dateS", e.target.value)}
                />
                
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default BatchManufacturingFormPage3;
