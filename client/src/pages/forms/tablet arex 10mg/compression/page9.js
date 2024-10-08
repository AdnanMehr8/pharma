import React from "react";
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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCompressionRecord } from "../../../../store/compressionSlice"; // Adjust import based on your slice

const BatchManufacturingFormPage9 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const compressionRecord = useSelector((state) => state.compression); // Access the compression state

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name in compressionRecord.precautions) {
      dispatch(setCompressionRecord({ ...compressionRecord, precautions: { ...compressionRecord.precautions, [name]: value } }));
    } else if (name in compressionRecord.lineClearance) {
      dispatch(setCompressionRecord({ ...compressionRecord, lineClearance: { ...compressionRecord.lineClearance, [name]: value } }));
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent>
        <div className="mt-6">
          <div className="mt-6">
            <h5 className="text-lg font-semibold mt-5">General instructions and precautions for Manufacturing:</h5>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <div>- Area is properly cleaned, no material from previous batch present in the area. (e.g. Product, Documents, etc.)</div>
            <div>- Staff properly attired. (Wear factory uniform and appropriate personnel protective equipment).</div>
            <div>- Relevant documents / materials are present in the area.</div>
            <div>- All relevant logbooks are filled.</div>
            <div>
              - Before compression, carefully check the following:
              <ul>
                <li>a) Machine and utensils to be used are clean. Punches and dies are in accordance with the product specification.</li>
                <li>b) Product collecting container/trays are clean and properly labeled.</li>
                <li>c) BMR, SOPs are in place.</li>
                <li>d) All containers of granules are duly labeled and released by QC.</li>
                <li>e) Dust collector/exhaust system is working.</li>
              </ul>
            </div>
            <div>- The room has the required temperature and humidity.</div>
            <div>- Appropriate balance is available and calibrated.</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              - Section 
              <TextField
                label="Section"
                name="section"
                value={compressionRecord.precautions.section || 'General Tablet'}
                style={{ marginLeft: "0.5rem" }}
                onChange={handleInputChange}
                
                      multiline
              />
              Area
              <TextField
                label="Area"
                name="specificArea"
                value={compressionRecord.precautions.specificArea || 'Compression'}
                style={{ marginLeft: "0.5rem" }}
                onChange={handleInputChange}
                
                      multiline
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <strong>
              <div style={{ display: "flex", alignItems: "center" }}>
                I HAVE READ AND UNDERSTOOD ALL THE PRECAUTIONS.
                <TextField
                  label="In-charge Production/ Production Pharmacist"
                  name="precautionsRead"
                  value={compressionRecord.precautions.precautionsRead}
                  style={{ marginLeft: "1rem" }}
                  onChange={handleInputChange}
                  fullWidth
                  multiline
                />
              </div>
            </strong>
          </div>
        </div>

        <div>
          <p>LINE CLEARANCE OF EQUIPMENT:</p>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Equipment</TableCell>
                  <TableCell>Equipment ID</TableCell>
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
                    <TextField
                      value={compressionRecord.lineClearance.equipment || 'Compression machine  ZP-'}
                      onChange={(e) => handleInputChange({ target: { name: "equipment", value: e.target.value } })}
                      fullWidth
                      multiline
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={compressionRecord.lineClearance.equipmentId || 'DP/PD/TG  /IQR/'}
                      onChange={(e) => handleInputChange({ target: { name: "equipmentId", value: e.target.value } })}
                      fullWidth
                      multiline
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={compressionRecord.lineClearance.previousProduct}
                      onChange={(e) => handleInputChange({ target: { name: "previousProduct", value: e.target.value } })}
                      fullWidth
                      multiline
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={compressionRecord.lineClearance.batchNo}
                      onChange={(e) => handleInputChange({ target: { name: "batchNo", value: e.target.value } })}
                      fullWidth
                      multiline
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={compressionRecord.lineClearance.cleanedBy}
                      onChange={(e) => handleInputChange({ target: { name: "cleanedBy", value: e.target.value } })}
                      fullWidth
                      multiline
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={compressionRecord.lineClearance.checkedBy}
                      onChange={(e) => handleInputChange({ target: { name: "checkedBy", value: e.target.value } })}
                      fullWidth
                      multiline
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={compressionRecord.lineClearance.verifiedBy}
                      onChange={(e) => handleInputChange({ target: { name: "verifiedBy", value: e.target.value } })}
                      fullWidth
                      multiline
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default BatchManufacturingFormPage9;
