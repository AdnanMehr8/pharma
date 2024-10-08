import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCompressionRecord } from '../../../../store/compressionSlice';
import {
  Card,
  CardContent,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function BatchManufacturingFormPage15() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compressionState = useSelector((state) => state.compression);

  const handleInputChange = (index, field, value) => {
    const updatedLabels = [...compressionState.checkSheet.labels];
    
    if (field.startsWith('weight')) {
      const weightIndex = parseInt(field.replace('weight', ''), 10) - 1;
      
      // Create a copy of the weights array to avoid direct mutation
      const updatedWeights = [...updatedLabels[index].weights];
      
      // Update the specific weight
      updatedWeights[weightIndex] = value;
      
      // Assign the updated weights back to the row
      updatedLabels[index] = { ...updatedLabels[index], weights: updatedWeights };
    } else {
      // For other fields, just update the field value
      updatedLabels[index] = { ...updatedLabels[index], [field]: value };
    }
  
    // Dispatch the updated state
    dispatch(setCompressionRecord({
      ...compressionState,
      checkSheet: {
        ...compressionState.checkSheet,
        labels: updatedLabels
      }
    }));
  };
  

  const handleGeneralInputChange = (field, value) => {
    dispatch(setCompressionRecord({
      ...compressionState,
      checkSheet: {
        ...compressionState.checkSheet,
        [field]: value
      }
    }));
  };

  const handleAddRow = () => {
    const newRow = {
      dateAndTime: '',
      weights: Array(10).fill(''),
      avgWeightOf10Tabs: '',
      temp: '',
      rH: '',
      PoOrQoa: ''
    };
    dispatch(setCompressionRecord({
      ...compressionState,
      checkSheet: {
        ...compressionState.checkSheet,
        labels: [...compressionState.checkSheet.labels, newRow]
      }
    }));
  };

  const handleRemoveRow = (index) => {
    const updatedLabels = compressionState.checkSheet.labels.filter((_, i) => i !== index);
    dispatch(setCompressionRecord({
      ...compressionState,
      checkSheet: {
        ...compressionState.checkSheet,
        labels: updatedLabels
      }
    }));
  };

  const handleBackClick = () => navigate(-1);
  const handleNextClick = () => navigate('/next-page'); // Replace with actual next page route

  return (
    <Card className="max-w-7xl mx-auto">
      <CardContent>
        <h2 className="text-2xl font-bold mb-4 text-center">In Process Check Sheet (Weight)</h2>
        
        <div className="flex justify-between mb-4">
          <TextField
            label="Upper Limit"
            value={compressionState.checkSheet.upperLimit}
            onChange={(e) => handleGeneralInputChange('upperLimit', e.target.value)}
            className="w-1/4"
                            multiline
          />
          <TextField
            label="Target weight"
            value={compressionState.checkSheet.targetWeight}
            onChange={(e) => handleGeneralInputChange('targetWeight', e.target.value)}
            className="w-1/4"
                            multiline
          />
          <TextField
            label="Lower Limit"
            value={compressionState.checkSheet.lowerLimit}
            onChange={(e) => handleGeneralInputChange('lowerLimit', e.target.value)}
            className="w-1/4"
                            multiline
          />
        </div>

        <div className="flex justify-between mb-4">
          <TextField
            label="Date started"
            type="date"
            value={compressionState.checkSheet.dateStarted}
            onChange={(e) => handleGeneralInputChange('dateStarted', e.target.value)}
            className="w-1/4 mt-4"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Date completed"
            type="date"
            value={compressionState.checkSheet.dateCompleted}
            onChange={(e) => handleGeneralInputChange('dateCompleted', e.target.value)}
            className="w-1/4 mt-4"
            InputLabelProps={{ shrink: true }}
          />
        </div>

        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date & Time</TableCell>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <TableCell key={num}>{num}</TableCell>
                ))}
                <TableCell>Avg. Wt of 10 Tabs</TableCell>
                <TableCell>Temp</TableCell>
                <TableCell>RH %</TableCell>
                <TableCell>P.O/Q.A.O</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {compressionState.checkSheet.labels.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                    type='datetime-local'
                    fullWidth
                      value={row.dateAndTime}
                      onChange={(e) => handleInputChange(index, 'dateAndTime', e.target.value)}
                    />
                  </TableCell>
                  {row.weights.map((weight, weightIndex) => (
                    <TableCell key={weightIndex}>
                      <TextField
                        fullWidth
                        multiline
                        value={weight}
                        onChange={(e) => handleInputChange(index, `weight${weightIndex + 1}`, e.target.value)}
                      />
                    </TableCell>
                  ))}
                  <TableCell>
                    <TextField
                      fullWidth
                      multiline
                      value={row.avgWeightOf10Tabs}
                      onChange={(e) => handleInputChange(index, 'avgWeightOf10Tabs', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      multiline
                      value={row.temp}
                      onChange={(e) => handleInputChange(index, 'temp', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      multiline
                      value={row.rH}
                      onChange={(e) => handleInputChange(index, 'rH', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      multiline
                      value={row.PoOrQoa}
                      onChange={(e) => handleInputChange(index, 'PoOrQoa', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleRemoveRow(index)}>
                      <RemoveIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="mt-4 flex justify-between items-center">
          <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddRow}>
            Add Row
          </Button>
        </div>

        <div className="mt-4">
          <TextField
            label="Remarks"
            multiline
            rows={4}
            fullWidth
            value={compressionState.checkSheet.remarks}
            onChange={(e) => handleGeneralInputChange('remarks', e.target.value)}
          />
        </div>

        {/* <div className="mt-4 flex justify-between">
          <Button variant="contained" color="primary" onClick={handleBackClick}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNextClick}>
            Next
          </Button>
        </div> */}
      </CardContent>
    </Card>
  );
}