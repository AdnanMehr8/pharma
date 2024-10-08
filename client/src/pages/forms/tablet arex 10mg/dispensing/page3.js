import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setRecord } from "../../../../store/recordSlice";
import { useNavigate } from "react-router-dom";
// import FormHeader from "../../header/formHeader";

const BatchManufacturingFormPage3 = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const record = useSelector((state) => state.record);
  
  // useEffect(() => {
  //   // Fetch data from local storage when the component mounts
  //   const storedRecord = JSON.parse(localStorage.getItem('record'));
  //   if (storedRecord) {
  //     dispatch(setRecord(storedRecord));
  //   }
  // }, [dispatch]);

  const handleWeighingRecordChange = (index, field, value) => {
    const newWeighingRecord = record.weighingRecordCoating.map((item, idx) =>
      idx === index ? { ...item, [field]: value } : item
    );
    dispatch(setRecord({ ...record, weighingRecordCoating: newWeighingRecord }));
  };

  const handleCheckRecordChange = (field, value) => {
    const newCheckRecord = {
      ...record.checkRecordCoating,
      [field]: value,
    };
    dispatch(setRecord({ ...record, checkRecordCoating: newCheckRecord }));
  };

  const addWeighingRecordRow = () => {
    const newWeighingRecord = [
      ...record.weighingRecordCoating,
      {
        item: "",
        unit: "",
        tareWt: "",
        netWt: "",
        grossWt: "",
        noOfContainers: "",
      },
    ];
    dispatch(setRecord({ ...record, weighingRecordCoating: newWeighingRecord }));
  };

  const deleteWeighingRecordRow = (index) => {
    const newWeighingRecord = record.weighingRecordCoating.filter((_, idx) => idx !== index);
    dispatch(setRecord({ ...record, weighingRecordCoating: newWeighingRecord }));
  };

  // const handleBackPage = () => {
  //   navigate(-1);
  // };


//   const handleNextPage = () => {
//     const { weighingRecord, checkRecord } = record;

//     // Validate weighing records
//     if (weighingRecord.some(row => !row.item || !row.unit || !row.tareWt || !row.netWt || !row.grossWt || !row.noOfContainers)) {
//         alert('Please fill out all weighing record fields before proceeding.');
//         return;
//     }

//     // Validate check records
//     if (!checkRecord.checkedByDispensingPharmacist || !checkRecord.checkedByQAOfficer || 
//         !checkRecord.receivedByProductionPharmacist || !checkRecord.receivedBySupervisor) {
//         alert('Please fill out all check record fields before proceeding.');
//         return;
//     }

//     // Proceed to the next page if all required fields are filled
//     const processes = JSON.parse(localStorage.getItem('processes'));
//     if (processes) {
//         const currentProcessIndex = processes.indexOf('page3');
//         if (currentProcessIndex !== -1 && currentProcessIndex < processes.length - 1) {
//             const nextProcess = processes[currentProcessIndex + 1];
//             navigate(`/${nextProcess}`);
//         } else {
//             console.log("No next process available.");
//         }
//     }
// };

  return (
    <Card className="max-w-4xl mx-auto">
      {/* <FormHeader /> */}
      <CardContent>
        <div className="mt-6">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>S.#</TableCell>
                  <TableCell>Item</TableCell>
                  <TableCell>Unit</TableCell>
                  <TableCell>Tare Wt.</TableCell>
                  <TableCell>Net Wt.</TableCell>
                  <TableCell>Gross Wt.</TableCell>
                  <TableCell>No. of Containers</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {record.weighingRecordCoating.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <TextField
                        value={row.item}
                        fullWidth 
            multiline
                        onChange={(e) =>
                          handleWeighingRecordChange(index, "item", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={row.unit}
                        fullWidth 
            multiline
                        onChange={(e) =>
                          handleWeighingRecordChange(index, "unit", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={row.tareWt}
                        fullWidth 
            multiline
                        onChange={(e) =>
                          handleWeighingRecordChange(index, "tareWt", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={row.netWt}
                        fullWidth 
            multiline
                        onChange={(e) =>
                          handleWeighingRecordChange(index, "netWt", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={row.grossWt}
                        fullWidth 
            multiline
                        onChange={(e) =>
                          handleWeighingRecordChange(index, "grossWt", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={row.noOfContainers}
                        fullWidth 
            multiline
                        onChange={(e) =>
                          handleWeighingRecordChange(index, "noOfContainers", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => deleteWeighingRecordRow(index)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button onClick={addWeighingRecordRow} className="mt-2">
            Add Row
          </Button>
        </div>

       
        <div className="mt-5">
    <h5 className="text-lg font-semibold mb-4">Check Record</h5>
    <table className="w-full border-collapse">
        <tbody>
            <tr>
                <td className="border p-2 text-left">
                    <label>Checked by Dispensing Pharmacist (Sign & Date)</label>
                </td>
                <td className="border p-2">
                    <TextField
                    value={record.checkRecordCoating.checkedByDispensingPharmacist || ""}
                    fullWidth 
            multiline
                        onChange={(e) =>
                            handleCheckRecordChange("checkedByDispensingPharmacist", e.target.value)
                        }
                    />
                </td>
            </tr>
            <tr>
                <td className="border p-2 text-left">
                    <label>Checked by QA Officer (Sign & Date)</label>
                </td>
                <td className="border p-2">
                    <TextField
                    value={record.checkRecordCoating.checkedByQAOfficer || ""}
                    fullWidth 
            multiline
                        onChange={(e) =>
                            handleCheckRecordChange("checkedByQAOfficer", e.target.value)
                        }
                    />
                </td>
            </tr>
            <tr>
                <td className="border p-2 text-left">
                    <label>Received by Production Pharmacist (Sign & Date)</label>
                </td>
                <td className="border p-2">
                    <TextField
                        value={record.checkRecordCoating.receivedByProductionPharmacist || ""}
                        
                        onChange={(e) =>
                            handleCheckRecordChange("receivedByProductionPharmacist", e.target.value)
                        }
                        fullWidth 
            multiline
                    />
                </td>
            </tr>
            <tr>
                <td className="border p-2 text-left">
                    <label>Received by Supervisor (Sign & Date)</label>
                </td>
                <td className="border p-2">
                    <TextField
                        value={record.checkRecordCoating.receivedBySupervisor || ""}
                        onChange={(e) =>
                            handleCheckRecordChange("receivedBySupervisor", e.target.value)
                        }
                        fullWidth 
            multiline
                    />
                </td>
            </tr>
        </tbody>
    </table>
</div>


        {/* <div className="mt-6 flex justify-between">
          <Button variant="contained" color="primary" onClick={handleBackPage}>Go Back</Button>
          <Button variant="contained" color="primary" onClick={handleNextPage}>Next</Button>

        </div> */}
      </CardContent>
    </Card>
  );
};

export default BatchManufacturingFormPage3;
