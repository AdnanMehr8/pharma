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
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function BatchManufacturingFormPage13() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compressionState = useSelector((state) => state.compression);

  const handleInputChange = (index, field, value) => {
    const updatedParameters = [...compressionState.compressionSpecifications.parameters];
    updatedParameters[index] = { ...updatedParameters[index], [field]: value };

    dispatch(setCompressionRecord({
      ...compressionState,
      compressionSpecifications: {
        ...compressionState.compressionSpecifications,
        parameters: updatedParameters
      }
    }));
  };

  const handleQACheckChange = (value) => {
    dispatch(setCompressionRecord({
      ...compressionState,
      compressionSpecifications: {
        ...compressionState.compressionSpecifications,
        checkedByQA: value
      }
    }));
  };

  const handleBackClick = () => navigate(-1);
  const handleNextClick = () => navigate('/next-page'); // Replace with actual next page route

  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent>
        <h2 className="text-2xl font-bold mb-4 text-center">Compression Specifications:</h2>
        
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Parameters</TableCell>
                <TableCell>Specification</TableCell>
                <TableCell>Results</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {['', '', '', ' ', ' ', ' ', '', ' ', ''].map((param, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      value={compressionState.compressionSpecifications.parameters[index]?.parameters || param}
                      onChange={(e) => handleInputChange(index, 'parameters', e.target.value)}
                      fullWidth
                            multiline
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      multiline
                      value={compressionState.compressionSpecifications.parameters[index]?.specification || ''}
                      onChange={(e) => handleInputChange(index, 'specification', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      multiline
                      value={compressionState.compressionSpecifications.parameters[index]?.results || ''}
                      onChange={(e) => handleInputChange(index, 'results', e.target.value)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="mt-4">
          <TextField
            fullWidth
            multiline
            label="Checked by QA"
            value={compressionState.compressionSpecifications.checkedByQA}
            onChange={(e) => handleQACheckChange(e.target.value)}
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