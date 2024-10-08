import React from "react";
import {
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCoatingRecord } from "../../../../store/coatingSlice"; // Adjusted import path

const BatchManufacturingFormPage21 = () => {
  const dispatch = useDispatch();
  const coating = useSelector((state) => state.coating); // Using the entire coating state

  const handleCoatingSolutionPreparationChange = (index, field, value) => {
    // Create a copy of the coatingSolutionPreparation array
    const updatedCoatingSolutionPreparation = [...coating.coatingSolutionPreparation];
    // Update the specific field of the object at the given index
    updatedCoatingSolutionPreparation[index] = {
      ...updatedCoatingSolutionPreparation[index],
      [field]: value,
    };

    // Dispatch the updated coatingSolutionPreparation to Redux
    dispatch(setCoatingRecord({ ...coating, coatingSolutionPreparation: updatedCoatingSolutionPreparation }));
  };

  const handleCoatingProcedureChange = (index, field, value) => {
    // Make a shallow copy of the coatingProcedure array
    const updatedInstructions = [...coating.coatingProcedure];
    
    // Update the specific index and field
    updatedInstructions[index] = {
      ...updatedInstructions[index],
      [field]: value
    };
  
    // Dispatch the updated coatingProcedure array
    dispatch(setCoatingRecord({
      ...coating,
      coatingProcedure: updatedInstructions // Now this is an array
    }));
  };
  
  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent>
        <h2 className="text-2xl font-bold mb-4 text-center">COATING SOLUTION PREPARATION:</h2>
        <div>INSTRUCTIONS:</div>
        <p>1. Operator must wear mask and disposable gloves while handling the materials.</p>
        <p>2. Seal the container of solution to avoid evaporation.</p>
        <p>3. Avoid direct contact with the skin.</p>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Step(s)</TableCell>
                <TableCell>Instruction(s)</TableCell>
                <TableCell>Activity Compliance</TableCell>
                <TableCell>Performed by Operator (sign & date)</TableCell>
                <TableCell>Verified by P.O (sign & date)</TableCell>
                <TableCell>Verified by QAI (sign & date)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coating.coatingSolutionPreparation.map((procedure, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      multiline
                      value={procedure.instructions || ""}
                      onChange={(e) => handleCoatingSolutionPreparationChange(index, 'instructions', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      multiline
                      value={procedure.activityCompliance || ""}
                      onChange={(e) => handleCoatingSolutionPreparationChange(index, 'activityCompliance', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      multiline
                      value={procedure.performedByOperator || ""}
                      onChange={(e) => handleCoatingSolutionPreparationChange(index, 'performedByOperator', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      multiline
                      value={procedure.checkedByPO || ""}
                      onChange={(e) => handleCoatingSolutionPreparationChange(index, 'checkedByPO', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                  <TextField
                      fullWidth
                      multiline
                      value={procedure.checkedByQAI || ""}
                      onChange={(e) => handleCoatingSolutionPreparationChange(index, 'checkedByQAI', e.target.value)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <h2 className="text-2xl font-bold mb-4 text-center mt-4">TABLETS COATING PROCEDURE:</h2>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Step(s)</TableCell>
                <TableCell>Instruction(s)</TableCell>
                <TableCell>Activity Compliance</TableCell>
                <TableCell>Performed by Operator (sign & date)</TableCell>
                <TableCell>Verified by P.O (sign & date)</TableCell>
                <TableCell>Verified by QAI (sign & date)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coating.coatingProcedure.map((procedure, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      multiline
                      value={procedure.instructions || ""}
                      onChange={(e) => handleCoatingProcedureChange(index, 'instructions', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      multiline
                      value={procedure.activityCompliance || ""}
                      onChange={(e) => handleCoatingProcedureChange(index, 'activityCompliance', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      multiline
                      value={procedure.performedByOperator || ""}
                      onChange={(e) => handleCoatingProcedureChange(index, 'performedByOperator', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      multiline
                      value={procedure.checkedByPO || ""}
                      onChange={(e) => handleCoatingProcedureChange(index, 'checkedByPO', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                  <TextField
                      fullWidth
                      multiline
                      value={procedure.checkedByQAI || ""}
                      onChange={(e) => handleCoatingProcedureChange(index, 'checkedByQAI', e.target.value)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default BatchManufacturingFormPage21;
