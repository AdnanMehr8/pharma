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
import { setMixingRecord } from "../../../../store/mixingSlice";

const BatchManufacturingFormPage6 = () => {
  const dispatch = useDispatch();
  const mixing = useSelector((state) => state.mixing);

  const handleManufacturingRecordChange = (index, field, value) => {
    const newManufacturingRecord = mixing.manufacturingRecord.map((item, idx) =>
      idx === index ? { ...item, [field]: value } : item
    );
    dispatch(setMixingRecord({ ...mixing, manufacturingRecord: newManufacturingRecord }));
  };

  return (
    <Card className="max-w-4xl mx-auto mt-4">
      <CardContent>
        <h2 className="text-lg font-semibold">Manufacturing Process</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Step</TableCell>
                <TableCell>Target</TableCell>
                <TableCell>Actual</TableCell>
                <TableCell>Performed by Operator (sign & date)</TableCell>
                <TableCell>Checked By P.O (sign & date)</TableCell>
                <TableCell>Checked By Q.A.I (sign & date)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Step 1 */}
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>
                  <TextField
                    value={mixing.manufacturingRecord[0]?.target || " Pass Cetirizine HCl, Avicel 102 & Sodium Starch glycolate (Primojel) through Stainless Steel Mesh # 30 geometrically and load it into the mixer."}
                    onChange={(e) => handleManufacturingRecordChange(0, "target", e.target.value)}
                    multiline
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  Sieving Started at:
                  <TextField
                    variant="outlined"
                    size="small"
                    type='time'
            InputLabelProps={{ shrink: true }}
                    value={mixing.manufacturingRecord[0]?.sievingStartedAt || ""}
                    onChange={(e) => handleManufacturingRecordChange(0, "sievingStartedAt", e.target.value)}
                    style={{ marginLeft: "0.5rem", width: "120px" }}
                    
                  />
                  <br />
                  Completed on:
                  <TextField
                    variant="outlined"
                    size="small"
                    type='time'
            InputLabelProps={{ shrink: true }}
                    value={mixing.manufacturingRecord[0]?.sievingCompletedOn || ""}
                    onChange={(e) => handleManufacturingRecordChange(0, "sievingCompletedOn", e.target.value)}
                    style={{ marginLeft: "0.5rem", width: "120px" }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Sign & Date"
                    value={mixing.manufacturingRecord[0]?.performedByOperator || ""}
                    onChange={(e) => handleManufacturingRecordChange(0, "performedByOperator", e.target.value)}
                    fullWidth
                    multiline
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="P.O Sign & Date"
                    value={mixing.manufacturingRecord[0]?.checkedByPO || ""}
                    onChange={(e) => handleManufacturingRecordChange(0, "checkedByPO", e.target.value)}
                    fullWidth
                    multiline
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Q.A.I Sign & Date"
                    value={mixing.manufacturingRecord[0]?.checkedByQAI || ""}
                    onChange={(e) => handleManufacturingRecordChange(0, "checkedByQAI", e.target.value)}
                    fullWidth
                    multiline
                  />
                </TableCell>
              </TableRow>

              {/* Step 2 */}
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>
                <TextField
                    value={mixing.manufacturingRecord[1]?.target || " Pass the Magnesium stearate, Aerosil-200, and Talcum Powder through Mesh #30 and add it to Step 1 (Double Cone mixer) and mix it for 1 hour."}
                    onChange={(e) => handleManufacturingRecordChange(1, "target", e.target.value)}
                    multiline
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  Mixing Started at:
                  <TextField
                    variant="outlined"
                    size="small"
                    type='time'
            InputLabelProps={{ shrink: true }}
                    value={mixing.manufacturingRecord[1]?.mixingStartedAt || ""}
                    onChange={(e) => handleManufacturingRecordChange(1, "mixingStartedAt", e.target.value)}
                    style={{ marginLeft: "0.5rem", width: "120px" }}
                  
                  />
                  <br />
                  Completed on:
                  <TextField
                    variant="outlined"
                    size="small"
                    type='time'
            InputLabelProps={{ shrink: true }}
                    value={mixing.manufacturingRecord[1]?.mixingCompletedOn || ""}
                    onChange={(e) => handleManufacturingRecordChange(1, "mixingCompletedOn", e.target.value)}
                    style={{ marginLeft: "0.5rem", width: "120px" }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Sign & Date"
                    value={mixing.manufacturingRecord[1]?.performedByOperator || ""}
                    onChange={(e) => handleManufacturingRecordChange(1, "performedByOperator", e.target.value)}
                    fullWidth
                    multiline
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="P.O Sign & Date"
                    value={mixing.manufacturingRecord[1]?.checkedByPO || ""}
                    onChange={(e) => handleManufacturingRecordChange(1, "checkedByPO", e.target.value)}
                    fullWidth
                    multiline
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Q.A.I Sign & Date"
                    value={mixing.manufacturingRecord[1]?.checkedByQAI || ""}
                    onChange={(e) => handleManufacturingRecordChange(1, "checkedByQAI", e.target.value)}
                    fullWidth
                    multiline
                  />
                </TableCell>
              </TableRow>

              {/* Step 3 */}
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>
                <TextField
                    value={mixing.manufacturingRecord[2]?.target || "Send test request to QC for physical & chemical analysis. Raise the intimation to QA for sampling and get the sample tested by QC physically and chemically."}
                    onChange={(e) => handleManufacturingRecordChange(2, "target", e.target.value)}
                    multiline
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  Sample taken Qty:
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="_______ gm"
                    value={mixing.manufacturingRecord[2]?.sampleTakenQty || ""}
                    onChange={(e) => handleManufacturingRecordChange(2, "sampleTakenQty", e.target.value)}
                    style={{ marginLeft: "0.5rem", width: "120px" }}
                    fullWidth
                    multiline
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Sign & Date"
                    value={mixing.manufacturingRecord[2]?.performedByOperator || ""}
                    onChange={(e) => handleManufacturingRecordChange(2, "performedByOperator", e.target.value)}
                    fullWidth
                    multiline
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="P.O Sign & Date"
                    value={mixing.manufacturingRecord[2]?.checkedByPO || ""}
                    onChange={(e) => handleManufacturingRecordChange(2, "checkedByPO", e.target.value)}
                    fullWidth
                    multiline
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Q.A.I Sign & Date"
                    value={mixing.manufacturingRecord[2]?.checkedByQAI || ""}
                    onChange={(e) => handleManufacturingRecordChange(2, "checkedByQAI", e.target.value)}
                    fullWidth
                    multiline
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

export default BatchManufacturingFormPage6;
